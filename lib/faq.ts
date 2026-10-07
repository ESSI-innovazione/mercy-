// Curated FAQ (knowledge/faq.json): hand-written question variants, a reply
// written in natural Italian, and the sentence of the Mappa the reply comes
// from. Checked before the search runs, so the most common questions get a
// direct answer every time. At load each entry is tied to the passage that
// contains its sentence; an entry whose sentence is no longer in the Mappa is
// dropped with a warning, so a knowledge refresh never serves a stale reply.

import fs from "node:fs";
import path from "node:path";
import { tokenize, uniq, ownCoverage, overlap } from "./text";
import type { Passage } from "./search";

export interface FaqEntry {
  questions: string[];
  reply: string; // what the user reads
  answer: string; // the Mappa sentence it is based on, verbatim
  passage: Passage;
  tokens: string[][]; // per question variant
}

interface RawEntry {
  q: string[];
  r: string;
  a: string;
}

function squash(s: string): string {
  return s.normalize("NFC").replace(/\s+/g, " ").trim();
}

let cached: FaqEntry[] | null = null;

export function loadFaq(passages: Passage[]): FaqEntry[] {
  if (cached) return cached;
  const file = path.join(process.cwd(), "knowledge", "faq.json");
  const raw = JSON.parse(fs.readFileSync(file, "utf8")) as RawEntry[];
  const out: FaqEntry[] = [];
  for (const e of raw) {
    const a = squash(e.a);
    const passage = passages.find((p) => squash(p.text).includes(a));
    if (!passage) {
      console.warn(`faq: sentence not found in the Mappa, entry skipped: "${a.slice(0, 60)}…"`);
      continue;
    }
    out.push({
      questions: e.q,
      reply: squash(e.r),
      answer: a,
      passage,
      tokens: e.q.map((q) => uniq(tokenize(q))),
    });
  }
  cached = out;
  return out;
}

export interface FaqMatch {
  entry: FaqEntry;
  variant: string;
  score: number;
}

// A question matches a FAQ variant when nearly all of the variant's words are
// in the question and the two overlap strongly overall.
export function matchFaq(question: string, faq: FaqEntry[]): FaqMatch | null {
  const q = uniq(tokenize(question));
  if (!q.length) return null;
  let best: FaqMatch | null = null;
  for (const entry of faq) {
    entry.tokens.forEach((vt, i) => {
      if (!vt.length) return;
      const variantCovered = ownCoverage(vt, q);
      const sym = overlap(q, vt);
      if (variantCovered < 0.8 || sym < 0.7) return;
      const score = sym + 0.2 * variantCovered;
      if (!best || score > best.score) best = { entry, variant: entry.questions[i], score };
    });
  }
  return best;
}
