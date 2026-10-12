// Announcements of the Mappa: the "Novità del …" paragraphs Espedito adds at
// the top of page 1. Read from the same knowledge copy the search uses, so a
// knowledge refresh brings the new ones in with no other change.

import fs from "node:fs";
import path from "node:path";
import { loadKnowledge } from "./knowledge";

export interface NewsItem {
  when: string; // as the Mappa writes it: "09/10/2026, dopo mezzogiorno"
  title: string; // first sentence
  body: string; // the rest of the paragraph
}

// HTML conversion leaves a space before punctuation ("sezione Eventi )").
function tidy(s: string): string {
  return s
    .replace(/\s+([,.;:)»])/g, "$1")
    .replace(/([(«])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

let cached: NewsItem[] | null = null;

export function loadNews(): NewsItem[] {
  if (cached) return cached;
  const { meta } = loadKnowledge();
  const first = meta.pages[0];
  const md = fs.readFileSync(path.join(process.cwd(), "knowledge", first.file), "utf8");

  const items: NewsItem[] = [];
  for (const raw of md.split("\n")) {
    const m = raw.trim().match(/^Novità d(?:ell'|ello|ella|el)\s*([^:]{1,60}):\s*(.+)$/);
    if (!m) continue;
    const text = capitalize(tidy(m[2]));
    // First sentence as the title; a very long one is cut at a word boundary.
    const end = text.search(/[.;](\s|$)/);
    let title = end > 0 ? `${text.slice(0, end)}.` : text;
    let body = end > 0 ? text.slice(end + 1).trim() : "";
    if (title.length > 160) {
      const cut = title.lastIndexOf(" ", 150);
      body = `…${title.slice(cut)} ${body}`.trim();
      title = `${title.slice(0, cut)}…`;
    }
    items.push({ when: tidy(m[1]), title, body });
  }
  // The Mappa lists them oldest first.
  cached = items.reverse();
  return cached;
}
