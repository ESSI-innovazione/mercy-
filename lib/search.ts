// Retrieval over the Mappa del CRM: no LLM, no network.
// Splits the knowledge pages into passages (bullets, paragraphs, table rows),
// indexes them with BM25 over lightly stemmed Italian tokens, and answers a
// question with the single sentence that fits best, its passage as context,
// the other relevant sections as "vedi anche" and follow-up questions.

import { loadKnowledge, type KnowledgeMeta } from "./knowledge";
import { loadFaq, matchFaq, type FaqEntry } from "./faq";
import {
  tokenize,
  uniq,
  expandQuery,
  ownCoverage,
  questionType,
  cueFor,
  type QuestionType,
} from "./text";
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

// ---------- index ----------

// Diagram legends come out of the HTML as runs of glued labels ("Rete guidata da un caporete Studio associato un solo dominus …").
// They carry no sentence structure: no verbs, no punctuation, many capitalised starts.
function looksLikeDiagramLabels(s: string): boolean {
  // Timeline entries start with a date ("23/10 HubSpot gratuito …") and are real content.
  if (/^(lun|mar|mer|gio|ven|sab|dom|notte|sera|entro|dal)?\s*\d{1,2}[\/-]\d{1,2}\b/i.test(s)) return false;
  const words = s.split(" ").filter((w) => /[a-zà-ú0-9]/i.test(w));
  if (words.length < 8) return false;
  const caps = words.filter((w) => /^[A-ZÀ-Ý]/.test(w)).length;
  const punct = (s.match(/[.;:()«»]/g) ?? []).length;
  return caps / words.length >= 0.24 && punct < words.length / 12;
}

interface Index {
  passages: Passage[];
  df: Map<string, number>;
  avgLen: number;
  meta: KnowledgeMeta;
  faq: FaqEntry[];
}

let index: Index | null = null;

function splitPage(md: string, page: number, pageTitle: string, startId: number): Passage[] {
  const out: Passage[] = [];
  let section = "";
  let subsection = "";
  let para: string[] = [];
  let id = startId;
  // A short "suspect→lead→…" chain line is glued onto the explanation that follows it.
  let carry = "";

  const push = (raw: string) => {
    let clean = raw.replace(/\s+/g, " ").replace(/\s*\|\s*/g, " · ").trim();
    if (clean.includes("→") && clean.length < 140) {
      carry = clean;
      return;
    }
    if (carry) {
      clean = `${carry} — ${clean}`;
      carry = "";
    }
    if (clean.length < 40) return;
    if (looksLikeDiagramLabels(clean)) return;
    // Colour legends of the diagrams and the sources footer are not rules.
    if (/^(Pallino|Verde|Viola|Arancio|Giallo|Tratteggio|Bordo|Le frecce|Catalogo a sinistra|Google a sinistra|Fonte:|Fonti:)/.test(clean)) return;
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
  const faq = loadFaq(passages);
  index = { passages, df, avgLen: total / Math.max(1, passages.length), meta, faq };
  return index;
}

// ---------- scoring ----------

const K1 = 1.4;
const B = 0.6;

function idf(idx: Index, term: string): number {
  const N = idx.passages.length;
  const n = idx.df.get(term) ?? 0;
  return Math.log(1 + (N - n + 0.5) / (n + 0.5));
}

export function search(query: string, limit = 5): Hit[] {
  const idx = getIndex();
  const qTokens = tokenize(query);
  if (!qTokens.length) return [];
  const weights = expandQuery(qTokens, idx.df.keys());

  const hits: Hit[] = [];
  for (const ps of idx.passages) {
    const tf = new Map<string, number>();
    for (const t of ps.tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    let score = 0;
    const ownMatched = new Set<string>();
    for (const [term, { weight, from }] of weights) {
      const f = tf.get(term) ?? 0;
      const inHeading = ps.headingTokens.includes(term);
      if (!f && !inHeading) continue;
      const norm = (f * (K1 + 1)) / (f + K1 * (1 - B + (B * ps.tokens.length) / idx.avgLen));
      score += weight * idf(idx, term) * (norm + (inHeading ? 0.8 : 0));
      if (weight >= 0.85 && f) ownMatched.add(from);
    }
    if (score <= 0) continue;
    // Favour passages that cover more of the user's own words.
    score *= 1 + 0.25 * ownMatched.size;
    // Exact two-word phrases ("passaggio netto", "linea del tempo" -> linea tempo)
    // are strong signals in Italian questions: boost passages that contain them.
    let phrases = 0;
    for (let i = 0; i + 1 < qTokens.length; i++) {
      const a = qTokens[i];
      const b = qTokens[i + 1];
      for (let j = 0; j + 1 < ps.tokens.length; j++) {
        if (ps.tokens[j] === a && ps.tokens[j + 1] === b) {
          phrases++;
          break;
        }
      }
    }
    if (phrases) score *= 1 + 0.4 * phrases;
    // The Mappa itself (page 1) is the primary reference; the other pages are specialised.
    if (ps.page === 1) score *= 1.1;
    hits.push({ passage: ps, score });
  }
  hits.sort((a, b) => b.score - a.score);
  if (!hits.length) return [];
  const top = hits[0].score;
  return hits.filter((h) => h.score >= top * 0.45).slice(0, limit);
}

// ---------- sentences ----------

// Splits a passage into sentences at ". ", "; ", "! ", "? " followed by a
// capital, a quote or a digit. Short fragments are glued to their neighbour.
export function splitSentences(text: string): string[] {
  const parts = text.split(/(?<=[.;!?])\s+(?=[A-ZÀ-Ý«"(\d])/);
  const out: string[] = [];
  for (const p of parts) {
    const s = p.trim();
    if (!s) continue;
    if (out.length && (s.length < 30 || out[out.length - 1].length < 30)) {
      out[out.length - 1] += " " + s;
    } else {
      out.push(s);
    }
  }
  return out;
}

interface SentencePick {
  passage: Passage;
  sentence: string;
  score: number;
  own: number;
}

function bestSentence(
  idx: Index,
  hits: Hit[],
  qTokens: string[],
  type: QuestionType
): SentencePick | null {
  const weights = expandQuery(qTokens, idx.df.keys());
  const own = new Set(uniq(qTokens));
  const cue = cueFor(type);
  const top = hits[0].score;
  let best: SentencePick | null = null;
  for (const h of hits) {
    if (h.score < top * 0.6) continue;
    for (const s of splitSentences(h.passage.text)) {
      const toks = new Set(tokenize(s));
      let score = 0;
      const ownSeen = new Set<string>();
      for (const [term, { weight, from }] of weights) {
        if (!toks.has(term)) continue;
        score += weight * idf(idx, term);
        if (weight >= 0.85 && own.has(from)) ownSeen.add(from);
      }
      if (score <= 0) continue;
      const ownHits = ownSeen.size;
      score *= 1 + 0.3 * ownHits;
      if (cue && cue.test(naturalize(s))) score *= 1.7;
      if (s.length < 40) score *= 0.7;
      else if (s.length > 250) score *= 0.8;
      // Tie the sentence to how good its passage was overall.
      score *= 0.7 + 0.3 * (h.score / top);
      if (!best || score > best.score) {
        best = { passage: h.passage, sentence: s, score, own: ownHits };
      }
    }
  }
  return best;
}

// ---------- answer ----------

export interface AnswerRef {
  where: string; // "Sezione › Sottosezione" or the page title
  page: number;
  pageTitle: string;
  link: string;
}

export interface AnswerPassage extends AnswerRef {
  text: string;
  highlight: string | null;
}

export interface FollowUp {
  label: string;
  prompt: string;
}

export type AnswerKind = "greeting" | "thanks" | "faq" | "hit" | "weak" | "none";

export interface Answer {
  kind: AnswerKind;
  question: string;
  reply: string; // what the user reads: a direct answer in natural Italian
  short: string | null; // the one sentence of the Mappa that answers
  passage: AnswerPassage | null; // its context
  seeAlso: AnswerPassage[]; // other relevant passages, collapsed in the UI
  followUps: FollowUp[];
  message: string | null; // markdown, for greetings and misses
  source: string;
  artifactUrl: string;
  score: number;
  coverage: number;
}

// ---------- natural phrasing (no LLM) ----------

const ACRONYMS = new Set(
  "TMK CRM ERP CSV PDF ACP SPL SPLP FFP PAL GOL ADA CP2021 CP2011 SEP EQF HR IT IBAN PEC NEET CIG CIGS ADI SFL NASPI MARKOM INNOVAZIONE ISTAT INAPP HTML JSON EPAR CAF B2B B2C ID URL UNILAV ODT RTF JPG PNG".split(
    " "
  )
);

// Turns a sentence of the Mappa into something that reads as a reply: drops
// the "(decisione del …)" references, the "Topic:" label that opens many
// bullets, the uppercase of timeline entries, and fixes capital and full stop.
export function naturalize(s: string, lead = true): string {
  let t = s.trim();
  t = t.replace(/\s*\((?:decision[ei]|propost[ae]|pian[oi]|domand[ae]|D-[A-Z]\d+|regola)[^)]*\)/gi, "");
  t = t.replace(/\s*\((?:sezione|vedi)[^)]*\)/gi, "");
  if (lead) {
    // "Unione dei doppioni: fino al…" -> "Fino al…"; only short labels (up to 5
    // words) and only when what follows is prose, not a quoted term.
    const label = /^([^:.;«»]{3,60}):\s+(?=[a-zà-ú])/.exec(t);
    if (label && label[1].trim().split(/\s+/).length <= 5) t = t.slice(label[0].length);
    const date = /^(?:lun|mar|mer|gio|ven|sab|dom)?\s*(\d{1,2}\/\d{1,2}(?:\/\d{2,4})?)\s+(?=[A-Za-zÀ-ú«])(.*)$/i.exec(t);
    if (date) t = `Il ${date[1]}: ${date[2]}`;
  }
  t = t.replace(/\b[A-ZÀ-Ý]{4,}\b/g, (w) => (ACRONYMS.has(w) ? w : w.toLowerCase()));
  t = t.replace(/\s+/g, " ").replace(/\s+([,;:.])/g, "$1").trim();
  if (t) t = t[0].toUpperCase() + t.slice(1);
  if (t && !/[.!?»)]$/.test(t)) t += ".";
  return t;
}

// How much the person wants: a closed question ("chi può…", "quando…",
// "posso…") gets one sentence, "come funziona…" or "spiegami…" the whole
// explanation, anything else two or three sentences.
export type Depth = "short" | "normal" | "long";

export function depth(q: string): Depth {
  const n = normalizeQuestion(q);
  if (/\b(come funziona\w*|spiega\w*|spiegami|descrivi\w*|racconta\w*|dettagl\w*|tutto (su|quello)|cosa dice la mappa su|quali sono le regole|come si (gestisc\w*|costruisc\w*|usa\w*)|in che modo|passo per passo)\b/.test(n)) return "long";
  if (/^(chi|a chi|quando|da quando|entro quando|fino a quando|quant[oaie]|dove|posso|si pu[oò]|e possibile|è possibile|esiste|c e|c'è|ce|serve|devo|bisogna|il|la|i|le|gli|un|una)\b/.test(n) && n.split(" ").length <= 9) return "short";
  return "normal";
}

function normalizeQuestion(q: string): string {
  return q
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9'àèéìòù ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Trims a reply to its first sentences, never cutting inside one. Unlike
// splitSentences this keeps short sentences ("Lunedì 19/10.") on their own.
// Takes `max` sentences, and one more while the reply is still shorter than
// `minChars`: "Lunedì 19/10." alone is exact but curt, so the next sentence
// comes along and the reply reads like a colleague answering.
function firstSentences(text: string, max: number, minChars: number): string {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-ZÀ-Ý«"(\d])/).filter(Boolean);
  let out = parts.slice(0, max).join(" ");
  for (let i = max; i < parts.length && out.length < minChars; i++) out += " " + parts[i];
  return out;
}

function trimReply(reply: string, d: Depth): string {
  if (d === "short") return firstSentences(reply, 1, 90);
  if (d === "normal") return firstSentences(reply, 2, 160);
  return reply;
}

// The reply for a search hit: the best sentence, then as many following
// sentences of the same passage as the depth asks for.
function replyFor(passage: Passage, sentence: string, d: Depth): string {
  const parts = splitSentences(passage.text);
  const i = parts.indexOf(sentence);
  let out = naturalize(sentence);
  if (i < 0) return out;
  const budget = d === "short" ? 1 : d === "normal" ? 2 : 4;
  const minChars = d === "short" ? 90 : d === "normal" ? 160 : 0;
  let added = 0;
  for (let j = i + 1; j < parts.length && added < budget; j++) {
    const next = parts[j];
    // Below "long", a further sentence comes only while the reply is still short.
    if (d !== "long" && out.length >= minChars) break;
    if (next.length > 300) break;
    out += " " + naturalize(next, false);
    added++;
  }
  return out;
}

const GREETING = /^(ciao|salve|buongiorno|buonasera|buon pomeriggio|hey|hello|hi|ehi)\b/i;
const THANKS = /^(grazie|thanks|thank you|ok grazie|perfetto)\b/i;

function whereOf(p: Passage): string {
  return [p.section, p.subsection].filter(Boolean).join(" › ") || p.pageTitle;
}

// The artifact only has ids on some sections (see knowledge/meta.json
// "anchors"). Sections with an id get a deep link; the others link to the
// artifact and the UI shows page and section to find them.
function linkFor(p: Passage, meta: KnowledgeMeta): string {
  const anchors = meta.anchors ?? {};
  const anchor = p.page === 1 ? anchors[p.section] : undefined;
  return anchor ? `${meta.artifactUrl}#${anchor}` : meta.artifactUrl;
}

function toAnswerPassage(p: Passage, meta: KnowledgeMeta, highlight: string | null): AnswerPassage {
  return {
    where: whereOf(p),
    page: p.page,
    pageTitle: p.pageTitle,
    link: linkFor(p, meta),
    text: p.text,
    highlight,
  };
}

// Follow-ups: FAQ questions from the same section first, then the headings of
// the other relevant passages as "what does the Mappa say about X".
const SECTION_PROMPT = /^cosa dice la mappa su:\s*(.+?)\s*\??$/i;

function sectionPrompt(label: string): string {
  return `Cosa dice la Mappa su: ${label}`;
}

function followUpsFor(chosen: Passage, others: Passage[], faq: FaqEntry[], exclude: string[]): FollowUp[] {
  const out: FollowUp[] = [];
  const seen = new Set(exclude.map((s) => s.toLowerCase()));
  const add = (label: string, prompt: string) => {
    const k = label.toLowerCase();
    if (seen.has(k) || out.length >= 3) return;
    seen.add(k);
    out.push({ label, prompt });
  };
  // Same passage first, then the same section, then the headings of the other passages.
  for (const e of faq) {
    if (e.passage.id === chosen.id) add(e.questions[0], e.questions[0]);
  }
  for (const e of faq) {
    if (e.passage.page === chosen.page && e.passage.section === chosen.section) add(e.questions[0], e.questions[0]);
  }
  for (const p of others) {
    const label = p.subsection || p.section;
    if (!label || label === chosen.subsection || (label === chosen.section && !p.subsection)) continue;
    add(label, sectionPrompt(label));
  }
  return out;
}

// "Cosa dice la Mappa su: <heading>" (the prompt behind a heading chip): the
// passages of that section or subsection, in the order of the Mappa.
function sectionAnswer(label: string, idx: Index, base: Pick<Answer, "question" | "source" | "artifactUrl">): Answer | null {
  const key = label.trim().toLowerCase();
  const ps = idx.passages.filter(
    (p) => p.subsection.toLowerCase() === key || (!p.subsection && p.section.toLowerCase() === key)
  );
  const all = ps.length ? ps : idx.passages.filter((p) => p.section.toLowerCase() === key);
  if (!all.length) return null;
  const [first, ...rest] = all;
  const sentences = splitSentences(first.text);
  return {
    ...base,
    kind: "hit",
    reply: sentences
      .slice(0, 4)
      .map((s, i) => naturalize(s, i === 0))
      .join(" "),
    short: sentences[0] ?? null,
    passage: toAnswerPassage(first, idx.meta, null),
    seeAlso: rest.slice(0, 4).map((x) => toAnswerPassage(x, idx.meta, null)),
    followUps: followUpsFor(first, rest.slice(4, 8), idx.faq, []),
    message: null,
    score: 0,
    coverage: 1,
  };
}

export function answer(question: string): Answer {
  const q = question.trim();
  const idx = getIndex();
  const { meta } = idx;
  const base = {
    question: q,
    source: `Mappa del CRM, versione ${meta.documentVersion} del ${meta.documentDate}`,
    artifactUrl: meta.artifactUrl,
  };

  if (GREETING.test(q) && q.length < 40) {
    const message = "Ciao! Sono Mercy. Chiedimi una regola del CRM di Mercury e ti rispondo in due righe.";
    return {
      ...base,
      kind: "greeting",
      reply: message,
      short: null,
      passage: null,
      seeAlso: [],
      followUps: idx.faq.slice(0, 3).map((e) => ({ label: e.questions[0], prompt: e.questions[0] })),
      message,
      score: 0,
      coverage: 0,
    };
  }
  if (THANKS.test(q) && q.length < 40) {
    const message = "Di niente! Se ti serve altro, sono qui.";
    return {
      ...base,
      kind: "thanks",
      reply: message,
      short: null,
      passage: null,
      seeAlso: [],
      followUps: [],
      message,
      score: 0,
      coverage: 0,
    };
  }

  const sectionReq = SECTION_PROMPT.exec(q);
  if (sectionReq) {
    const a = sectionAnswer(sectionReq[1], idx, base);
    if (a) return a;
  }
  const d = depth(q);

  const qTokens = tokenize(q);
  const own = uniq(qTokens);
  const hits = search(q);

  // 1. Curated FAQ: a verbatim sentence chosen by hand for this question.
  const faqHit = matchFaq(q, idx.faq);
  if (faqHit) {
    const p = faqHit.entry.passage;
    const others = hits.map((h) => h.passage).filter((x) => x.id !== p.id).slice(0, 3);
    return {
      ...base,
      kind: "faq",
      reply: trimReply(faqHit.entry.reply, d),
      short: faqHit.entry.answer,
      passage: toAnswerPassage(p, meta, faqHit.entry.answer),
      seeAlso: others.map((x) => toAnswerPassage(x, meta, null)),
      followUps: followUpsFor(p, others, idx.faq, faqHit.entry.questions),
      message: null,
      score: hits[0]?.score ?? 0,
      coverage: ownCoverage(own, p.tokens),
    };
  }

  // 2. Nothing close enough.
  if (!hits.length) {
    const message =
      "Su questo non trovo niente nella Mappa del CRM. Prova a chiedermelo con altre parole (per esempio trattativa, pratica, partner, consensi, form, eventi) oppure chiedi a Espedito.";
    return {
      ...base,
      kind: "none",
      reply: message,
      short: null,
      passage: null,
      seeAlso: [],
      followUps: idx.faq.slice(0, 3).map((e) => ({ label: e.questions[0], prompt: e.questions[0] })),
      message,
      score: 0,
      coverage: 0,
    };
  }

  // 3. Search: pick the one sentence that fits best among the top passages.
  const type = questionType(q);
  const pick = bestSentence(idx, hits, qTokens, type);
  const chosen = pick?.passage ?? hits[0].passage;
  const coverage = ownCoverage(own, chosen.tokens);
  const others = hits.map((h) => h.passage).filter((x) => x.id !== chosen.id).slice(0, 3);
  // Weak when the chosen passage misses most of the user's words (half, for a
  // two-word question), or the best sentence shares none of them: the Mappa
  // does not answer this directly.
  const sentence = pick?.sentence ?? splitSentences(chosen.text)[0] ?? chosen.text;
  // A "chi" question needs a sentence that names a role, a "quando" one a date.
  const cue = cueFor(type);
  // Tested on the cleaned sentence, so a "(decisione di Espedito …)" reference does not count as a role.
  const typeMiss = (type === "who" || type === "when") && cue !== null && !cue.test(naturalize(sentence));
  const weak =
    coverage < 0.5 ||
    (coverage <= 0.5 && own.length <= 2) ||
    (pick !== null && pick.own === 0 && own.length >= 2) ||
    typeMiss;

  // Diagram chains and code-like fragments are not worth quoting as "the nearest thing".
  const quotable = !/[→<>{}=]|\?\w+=/.test(sentence);
  const weakMessage = quotable
    ? `Su questo la Mappa non dice niente di preciso. La cosa più vicina che trovo: ${naturalize(sentence)} Se non è quello che cercavi, chiedi a Espedito.`
    : `Su questo la Mappa non dice niente di preciso. Prova a chiedermelo con altre parole, oppure chiedi a Espedito.`;

  return {
    ...base,
    kind: weak ? "weak" : "hit",
    reply: weak ? weakMessage : replyFor(chosen, sentence, d),
    short: weak ? null : sentence,
    passage: toAnswerPassage(chosen, meta, sentence),
    seeAlso: others.map((x) => toAnswerPassage(x, meta, null)),
    followUps: followUpsFor(chosen, others, idx.faq, []),
    message: weak ? weakMessage : null,
    score: hits[0].score,
    coverage,
  };
}

// Plain-text rendering, for tests and for clients that cannot show the structure.
export function formatAnswer(a: Answer): string {
  const lines: string[] = [a.reply, ""];
  if (a.followUps.length) lines.push(`Domande collegate: ${a.followUps.map((f) => f.label).join(" · ")}`, "");
  if (a.kind !== "greeting" && a.kind !== "thanks") lines.push(`_${a.source}._`);
  return lines.join("\n").trim();
}
