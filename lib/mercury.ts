// Links from Mercy to Mercury ERP: each answer or announcement gets a button
// to the Mercury area it talks about. To deep-link an area, fill its `path`
// (e.g. "/crm/trattative"); without one the button opens Mercury's login.

export const MERCURY_URL = "https://mercuryerp.timevision.it";
const LOGIN_PATH = "/login";

interface Area {
  label: string;
  match: RegExp;
  path?: string;
}

// Checked in order: the first that matches wins, so the more specific come first.
const AREAS: Area[] = [
  { label: "Marketing", match: /\bform\b|marketing|invii|canali slack|builder|meta\b/i },
  { label: "Eventi", match: /event[oi]|iscri(tt|zion)|webinar|open day|relator/i },
  { label: "Gmail e Calendar", match: /calendar|gmail|riunion|appuntament|barra di mercury/i },
  { label: "Trattative", match: /trattativ|preventiv|provvigion|premialit|pagament|pratic[ah]e?\b|vinta|persa/i },
  { label: "Partner", match: /partner|caporete|\bstudi\b|\brete\b/i },
  { label: "Aziende", match: /aziend|patronat|p\.?\s?iva|visura/i },
  { label: "Contatti", match: /contatt|consens|doppion|unisci|suspect|\blead\b/i },
  { label: "Liste", match: /\bliste\b|lista statica/i },
];

export interface MercuryLink {
  label: string | null; // the area, or null for Mercury in general
  url: string;
}

// The question decides first (it is what the colleague wants to do), then
// where the answer comes from in the Mappa.
export function mercuryLinkFor(...texts: (string | null | undefined)[]): MercuryLink {
  for (const text of texts) {
    if (!text) continue;
    const area = AREAS.find((a) => a.match.test(text));
    if (area) return { label: area.label, url: `${MERCURY_URL}${area.path ?? LOGIN_PATH}` };
  }
  return { label: null, url: `${MERCURY_URL}${LOGIN_PATH}` };
}
