// Italian text utilities shared by the search index and the FAQ layer:
// normalisation, light stemming, stopwords, synonym groups and query expansion.

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
   faccio facciamo fate posso possiamo potete potrei riesco riusciamo possibile modo modi
   cos cose qual quanto quanti quante quanta funziona funzionano significa intende vuol
   spiega spiegami dimmi sapere capire capisco informazioni info riguardo circa tipo esempio
   qualcuno qualcosa nessuno niente nulla davvero proprio invece però pero quindi allora
   mercy mappa crm mercury`
    .split(/\s+/)
    .filter(Boolean)
);

export function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function stem(t: string): string {
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

export function uniq<T>(xs: Iterable<T>): T[] {
  return Array.from(new Set(xs));
}

// Query-side synonym groups. Written as whole words; stemmed at load so that
// they line up with what tokenize() produces for the same words.
const SYNONYM_GROUPS: string[][] = [
  ["doppioni", "doppio", "doppi", "unione", "unisci", "unire", "fusione", "fondere", "fuso", "duplicati"],
  ["gmail", "email", "barra", "posta"],
  ["calendar", "calendario", "riunione", "appuntamento", "meet"],
  ["fase", "fasi", "stadio", "stadi", "passaggio", "avanzare"],
  ["trattativa", "deal", "vendita", "opportunita"],
  ["pratica", "pratiche"],
  ["provvigione", "premialita", "commissione"],
  ["consenso", "consensi", "privacy", "gdpr", "revoca", "marketing", "profilazione"],
  ["form", "modulo", "builder", "iscrizione"],
  ["evento", "eventi", "webinar", "congresso", "fiera", "iscritti"],
  ["partner", "consulente", "professionista"],
  ["azienda", "societa", "cliente", "impresa"],
  ["contatto", "persona", "lead", "prospect", "suspect"],
  ["tmk", "telemarketing", "operatore", "chiamata"],
  ["placement", "lavoro", "cerca", "candidato", "jobsignal"],
  ["import", "hubspot", "migrazione", "export"],
  ["visibilita", "vede", "vedono", "vedo", "vedere", "vedi", "account", "permesso", "potere", "ruolo", "ruoli"],
  ["crea", "creare", "nuovo", "nuova", "inserire", "aggiungere", "registrare"],
  ["modifica", "cambia", "cambiare", "aggiornare", "correggere"],
  ["chiusa", "chiude", "chiudere", "spegne", "spento", "fine", "termina", "scadenza"],
  ["approva", "autorizza", "concede", "potere"],
  ["email", "mail", "indirizzo", "casella", "ccn"],
  ["nota", "note", "task", "attivita", "linea", "timeline"],
  ["rete", "reti", "caporete", "studio", "studi"],
  ["patronato", "caf"],
  ["slack", "canale", "webhook", "avviso", "notifica"],
  ["elimina", "cancella", "archivia"],
  ["sconto", "sconti"],
  ["sync", "notturno", "aggiornamento", "delta"],
  ["admin", "amministratore"],
  ["responsabile", "manager"],
  ["venditore", "venditori", "commerciale", "commerciali"],
];

const SYNONYMS: string[][] = SYNONYM_GROUPS.map((g) => uniq(g.map(stem)));

function synonymsOf(t: string): string[] {
  const out: string[] = [];
  for (const group of SYNONYMS) {
    if (group.includes(t)) for (const g of group) if (g !== t) out.push(g);
  }
  return out;
}

// Two stems match by prefix when one starts with the other and they share
// at least 4 characters: "dopp" ~ "doppio", "chiud" ~ "chiude".
export function prefixMatch(a: string, b: string): boolean {
  if (a === b) return true;
  const [short, long] = a.length <= b.length ? [a, b] : [b, a];
  return short.length >= 4 && long.startsWith(short);
}

export interface Expansion {
  weight: number; // 1 own word, 0.85 prefix variant, 0.6 synonym
  from: string; // the user's own token this term expands
}

// Expands the user's tokens to the index vocabulary: the words themselves,
// vocabulary terms that match them by prefix, and synonym-group members.
export function expandQuery(tokens: string[], vocab: Iterable<string>): Map<string, Expansion> {
  const out = new Map<string, Expansion>();
  const set = (term: string, weight: number, from: string) => {
    const cur = out.get(term);
    if (!cur || cur.weight < weight) out.set(term, { weight, from });
  };
  const own = uniq(tokens);
  for (const t of own) set(t, 1, t);
  const vocabArr = Array.from(vocab);
  for (const t of own) {
    for (const v of vocabArr) if (v !== t && prefixMatch(t, v)) set(v, 0.85, t);
    for (const s of synonymsOf(t)) set(s, 0.6, t);
  }
  return out;
}

// Share of the user's own tokens present in a token list, counting prefix
// variants as present.
export function ownCoverage(own: string[], tokens: string[]): number {
  if (!own.length) return 0;
  const set = new Set(tokens);
  let n = 0;
  for (const t of own) {
    if (set.has(t)) {
      n++;
      continue;
    }
    for (const v of set) {
      if (prefixMatch(t, v)) {
        n++;
        break;
      }
    }
  }
  return n / own.length;
}

// Symmetric overlap between two token lists (prefix-aware), 0..1.
export function overlap(a: string[], b: string[]): number {
  const ua = uniq(a);
  const ub = uniq(b);
  if (!ua.length || !ub.length) return 0;
  return (ownCoverage(ua, ub) * ua.length + ownCoverage(ub, ua) * ub.length) / (ua.length + ub.length);
}

export type QuestionType = "who" | "when" | "see" | "how" | "what";

export function questionType(q: string): QuestionType {
  const n = normalize(q);
  if (/\b(cosa (si )?ved\w*|vedo|vedono|visibil\w*|si vede|si vedono)\b/.test(n)) return "see";
  if (/\b(chi|a chi|quali utenti|quale ruolo|che ruolo|quali ruoli)\b/.test(n)) return "who";
  if (/\b(quando|entro quando|fino a quando|che giorno|in che data|a che ora|ogni quanto|da che data|quale data)\b/.test(n)) return "when";
  if (/\b(come (si|faccio|posso|fare|funziona)|in che modo|dove (si|trovo|posso|sta|e))\b/.test(n)) return "how";
  return "what";
}

// Sentence-level cues per question type: a "chi" question wants a sentence
// that names a role, a "quando" question one that carries a date.
const CUES: Record<QuestionType, RegExp | null> = {
  who: /\b(admin|manager|operations|finance|marketing|markom|tmk|operator\w*|responsabil\w*|venditor\w*|commercial\w*|propriet\w*|account|utent\w*|caporet\w*|espedito|daniela|luca|pio|solo (gli|un|una|il|per|da|a|chi)|tutta la sezione|chiunque|nessuno|innovazione|chi (vede|ha|unisce|la|lo|inserisce|organizza))\b/i,
  when: /\b\d{1,2}\/\d{1,2}(\/\d{2,4})?\b|\b(dal|entro (il|la|le)|fino (al|alla)|dopo (il|la)|prima (del|della)|ogni (notte|sera|\d+ minuti|settimana|giorno)|alle \d{1,2}[:.]\d{2}|lunedi|mattina|sera|notte|settiman\w*|ottobre|novembre|dicembre|subito|in prova|in produzione|si accend\w*|partono|parte)\b/i,
  see: /\b(ved\w*|visib\w*|nascost\w*|lucchetto|compa\w*|mostra\w*|senza (recapiti|importi)|solo (nome|il nome)|non si vede)\b/i,
  how: /\b(pulsante|premi|clicc\w*|dalla scheda|si apre|si sceglie|scegli|tendina|modulo|tab|scheda|si registra|si crea|si compila|si incolla|si fa|basta|si costruisc\w*|si gestisc\w*)\b/i,
  what: null,
};

export function cueFor(type: QuestionType): RegExp | null {
  return CUES[type];
}
