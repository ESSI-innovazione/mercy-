// Checks that every FAQ in knowledge/faq.json still quotes a sentence that is
// in the Mappa (knowledge/*.md). At runtime lib/faq.ts silently drops entries
// whose sentence is gone; this lists them before a knowledge refresh ships.
// Usage: node scripts/check-faq.mjs   (exit code 1 when some entry is broken)

import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "knowledge");
const squash = (s) => s.normalize("NFC").replace(/\s+/g, " ").trim();

// Passages as lib/search.ts builds them: paragraphs, bullets and headings split
// the text, and a short "suspect → lead → …" chain is glued onto the next one.
function passages(md) {
  const out = [];
  let para = [];
  let carry = "";
  const push = (raw) => {
    let clean = raw.replace(/\s+/g, " ").replace(/\s*\|\s*/g, " · ").trim();
    if (clean.includes("→") && clean.length < 140) {
      carry = clean;
      return;
    }
    if (carry) {
      clean = `${carry} — ${clean}`;
      carry = "";
    }
    out.push(clean);
  };
  const flush = () => {
    if (para.length) push(para.join(" "));
    para = [];
  };
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line || /^#{1,3} /.test(line)) {
      flush();
    } else if (line.startsWith("- ")) {
      flush();
      push(line.slice(2));
    } else {
      para.push(line);
    }
  }
  flush();
  return out;
}

const meta = JSON.parse(fs.readFileSync(path.join(dir, "meta.json"), "utf8"));
const all = meta.pages
  .flatMap((p) => passages(fs.readFileSync(path.join(dir, p.file), "utf8")))
  .map(squash);
const faq = JSON.parse(fs.readFileSync(path.join(dir, "faq.json"), "utf8"));

const broken = faq
  .map((e, i) => ({ i, q: e.q[0], a: squash(e.a) }))
  .filter((e) => !all.some((t) => t.includes(e.a)));

console.log(`FAQ: ${faq.length - broken.length}/${faq.length} still found in the Mappa.`);
for (const e of broken) {
  console.log(`\n#${e.i} «${e.q}»\n  missing: "${e.a}"`);
}
process.exit(broken.length ? 1 : 0);
