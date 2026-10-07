// Retrieval over the Mappa del CRM: no LLM, no network.
// Splits the knowledge pages into passages (bullets, paragraphs, table rows),
// indexes them with BM25 over lightly stemmed Italian tokens, and answers a
// question by quoting the best passages with their section and page.

import { loadKnowledge, type KnowledgeMeta } from "./knowledge";
import fs from "node:fs";
import path from "node:path";

export interface Passage {
  id: number;
  page: number;
  pageTitle: string;
  section: string;
  subsection: string;
  text: string;
  tokens: string[];
  headingTokens: string[];
}

export interface Hit {
  passage: Passage;
  score: number;
}

const STOPWORDS = new Set(
  `il lo la i gli le un uno una di a da in con su per tra fra e o ma che chi cui non si
   del dello della dei degli delle dal dallo dalla dai dagli dalle nel nello nella nei negli nelle
   al allo alla ai agli alle sul sullo sulla sui sugli sulle col coi
   come cosa cose quale quali quando dove perche perché anche solo gia già poi piu più meno
   sono è e' essere era erano stato stata stati state ha hanno ho hai abbiamo avere avuto
   viene vengono venire va vanno andare puo può possono potere posso puoi fa fanno fare fatto
   questo questa questi queste quello quella quelli quelle suo sua suoi sue loro mio mia tuo tua
   nostro nostra vostro vostra ci vi mi ti ne se sé lui lei noi voi io tu
   qui qua li là ogni tutto tutti tutta tutte altro altra altri altre stesso stessa
   oggi domani ieri sempre mai ancora dopo prima fino entro circa oppure cioe cioè
   vuoi voglio vorrei devo deve devono dovrei bisogna serve servono dire dice dicono
   mercy mappa crm`
    .split(/\s+/)
    .filter(Boolean)
);

// Query-side synonym groups (stems). Each query term that falls in a group
// expands to the whole group, so "doppioni" also finds "unione"/"unisci".
const SYNONYMS: string[][] = [
  ["doppion", "union", "unisc", "unir", "fusion", "fonder", "fuso", "duplic"],
  ["gmail", "email", "barra", "posta"],
  ["calend", "riunion", "appunt", "meet"],
  ["fase", "fas", "stadio", "stadi", "passagg", "avanz"],
  ["trattat", "deal", "vendit", "opport"],
  ["pratic", "pratich"],
  ["provvig", "premial", "commiss"],
  ["consen", "privacy", "gdpr", "revoc", "marketing", "profil"],
  ["form", "modul", "builder", "iscriz"],
  ["evento", "event", "webinar", "congres", "fiera", "iscrit"],
  ["partner", "consul", "profess"],
  ["aziend", "societ", "client", "impres"],
  ["contat", "person", "lead", "prospe", "suspec"],
  ["tmk", "telema", "operat", "chiamat"],
  ["placem", "lavoro", "cerca", "candid", "jobsig"],
  ["import", "hubspo", "migraz", "export"],
  ["visibi", "vede", "vedon", "accoun", "permes", "poter", "ruolo", "ruoli"],
  ["rete", "reti", "capore", "studio", "studi"],
  ["patron", "caf"],
  ["slack", "canal", "webhoo", "avvis", "notifi"],
  ["elimin", "cancel", "archiv"],
  ["sconto", "sconti"],
  ["sync", "notturn", "aggiorn", "delta"],
];

function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function stem(t: string): string {
  if (t.length > 6) return t.slice(0, 6);
  if (t.length > 4 && /[aeio]$/.test(t)) return t.slice(0, -1);
  return t;
}

export function tokenize(s: string): string[] {
  return normalize(s)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t))
    .filter((t) => t.length >= 3 || /^\d+$/.test(t))
    .map(stem);
}

function expandQuery(tokens: string[]): Map<string, number> {
  // token -> weight (1 for the user's own words, 0.6 for synonyms)
  const weights = new Map<string, number>();
  for (const t of tokens) {
    weights.set(t, Math.max(weights.get(t) ?? 0, 1));
    for (const group of SYNONYMS) {
      if (group.includes(t)) {
        for (const g of group) {
          if (g !== t) weights.set(g, Math.max(weights.get(g) ?? 0, 0.6));
        }
      }
    }
  }
  return weights;
}

// ---------- index ----------

// Diagram legends come out of the HTML as runs of glued labels ("Rete guidata da un caporete Studio associato un solo dominus …").
// They carry no sentence structure: no verbs, no punctuation, many capitalised starts.
function looksLikeDiagramLabels(s: string): boolean {
  const words = s.split(" ").filter((w) => /[a-zà-ú0-9]/i.test(w));
  if (words.length < 8) return false;
  const caps = words.filter((w) => /^[A-ZÀ-Ý]/.test(w)).length;
  const punct = (s.match(/[.;:()«»]/g) ?? []).length;
  return caps / words.length >= 0.28 && punct < words.length / 12;
}

interface Index {
  passages: Passage[];
  df: Map<string, number>;
  avgLen: number;
  meta: KnowledgeMeta;
}

let index: Index | null = null;

function splitPage(
  md: string,
  page: number,
  pageTitle: string,
  startId: number
): Passage[] {
  const out: Passage[] = [];
  let section = "";
  let subsection = "";
  let para: string[] = [];
  let id = startId;
  // A short "suspect→lead→…" chain line is glued onto the explanation that follows it.
  let carry = "";

  const push = (raw: string) => {
    let clean = raw.replace(/\s+/g, " ").replace(/\s*\|\s*/g, " · ").trim();
    if (clean.includes("→") && clean.length < 80) {
      carry = clean;
      return;
    }
    if (carry) {
      clean = `${carry} — ${clean}`;
      carry = "";
    }
    if (clean.length < 40) return;
    if (looksLikeDiagramLabels(clean)) return;
    const tokens = tokenize(clean);
    if (tokens.length < 4) return;
    out.push({
      id: id++,
      page,
      pageTitle,
      section,
      subsection,
      text: clean,
      tokens,
      headingTokens: tokenize(`${section} ${subsection}`),
    });
  };
  const flush = () => {
    if (para.length) push(para.join(" "));
    para = [];
  };

  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("# ")) {
      flush();
      continue;
    }
    if (line.startsWith("## ")) {
      flush();
      section = line.slice(3).trim();
      subsection = "";
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      subsection = line.slice(4).trim();
      continue;
    }
    if (line.startsWith("- ")) {
      flush();
      push(line.slice(2));
      continue;
    }
    para.push(line);
  }
  flush();
  return out;
}

export function getIndex(): Index {
  if (index) return index;
  const { meta } = loadKnowledge();
  const dir = path.join(process.cwd(), "knowledge");
  const passages: Passage[] = [];
  meta.pages.forEach((p, i) => {
    const md = fs.readFileSync(path.join(dir, p.file), "utf8");
    passages.push(...splitPage(md, i + 1, p.title, passages.length));
  });
  const df = new Map<string, number>();
  let total = 0;
  for (const ps of passages) {
    total += ps.tokens.length;
    for (const t of new Set(ps.tokens)) df.set(t, (df.get(t) ?? 0) + 1);
  }
  index = { passages, df, avgLen: total / Math.max(1, passages.length), meta };
  return index;
}

// ---------- scoring ----------

const K1 = 1.4;
const B = 0.6;

export function search(query: string, limit = 4): Hit[] {
  const idx = getIndex();
  const qTokens = tokenize(query);
  if (!qTokens.length) return [];
  const weights = expandQuery(qTokens);
  const N = idx.passages.length;

  const hits: Hit[] = [];
  for (const ps of idx.passages) {
    const tf = new Map<string, number>();
    for (const t of ps.tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    let score = 0;
    let matchedOwn = 0;
    for (const [term, w] of weights) {
      const f = tf.get(term) ?? 0;
      const inHeading = ps.headingTokens.includes(term);
      if (!f && !inHeading) continue;
      const n = idx.df.get(term) ?? 0;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      const norm = f * (K1 + 1) / (f + K1 * (1 - B + (B * ps.tokens.length) / idx.avgLen));
      score += w * idf * (norm + (inHeading ? 0.8 : 0));
      if (w === 1 && f) matchedOwn++;
    }
    if (score <= 0) continue;
    // Favour passages that cover more of the user's own words.
    score *= 1 + 0.25 * matchedOwn;
    hits.push({ passage: ps, score });
  }
  hits.sort((a, b) => b.score - a.score);
  if (!hits.length) return [];
  const top = hits[0].score;
  return hits.filter((h) => h.score >= top * 0.45).slice(0, limit);
}

// ---------- answer formatting ----------

const GREETING = /^(ciao|salve|buongiorno|buonasera|buon pomeriggio|hey|hello|hi|ehi)\b/i;
const THANKS = /^(grazie|thanks|thank you|ok grazie|perfetto)\b/i;

function clip(s: string, max = 900): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
  return (end > max * 0.6 ? cut.slice(0, end + 1) : cut) + " …";
}

export function answer(question: string): string {
  const q = question.trim();
  const { meta } = getIndex();
  const source = `_Fonte: Mappa del CRM, versione ${meta.documentVersion} del ${meta.documentDate}._`;

  if (GREETING.test(q) && q.length < 40) {
    return `Ciao! Sono Mercy. Chiedimi qualcosa sul CRM di Mercury e ti riporto le regole della Mappa così come sono scritte. Per esempio: *«chi può unire due contatti?»*, *«cosa registra la barra di Gmail?»*, *«quali sono le fasi di un partner?»*.`;
  }
  if (THANKS.test(q) && q.length < 40) {
    return `Di niente! Se ti serve altro sulla Mappa, sono qui.`;
  }

  const hits = search(q);
  if (!hits.length) {
    return [
      `Nella Mappa non trovo nulla su «${q}».`,
      ``,
      `Prova con parole più vicine al lessico di Mercury: **trattativa**, **pratica**, **partner**, **caporete**, **patronato**, **consensi**, **Gmail**, **Calendar**, **form**, **eventi**, **fasi**, **TMK**, **JobSignal**.`,
      ``,
      `Oppure apri la Mappa: ${meta.artifactUrl}`,
    ].join("\n");
  }

  const lines: string[] = [`Ecco cosa dice la Mappa su «${q}»:`, ``];
  for (const { passage: p } of hits) {
    const where = [p.section, p.subsection].filter(Boolean).join(" › ") || p.pageTitle;
    lines.push(`**${where}** · pagina ${p.page}, ${p.pageTitle}`);
    lines.push(clip(p.text));
    lines.push(``);
  }
  lines.push(source);
  return lines.join("\n");
}
