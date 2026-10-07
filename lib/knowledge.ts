import fs from "node:fs";
import path from "node:path";

export interface KnowledgePage {
  file: string;
  title: string;
  source: string;
}

export interface KnowledgeMeta {
  artifactUrl: string;
  frameUuid: string;
  ver: string;
  seq: number;
  documentVersion: string;
  documentDate: string;
  fetchedAt: string;
  pages: KnowledgePage[];
  // Section title -> id attribute in the artifact page, for deep links (only some sections have one).
  anchors?: Record<string, string>;
}

const KNOWLEDGE_DIR = path.join(process.cwd(), "knowledge");

let cached: { meta: KnowledgeMeta; corpus: string } | null = null;

export function loadKnowledge(): { meta: KnowledgeMeta; corpus: string } {
  if (cached) return cached;
  const meta = JSON.parse(
    fs.readFileSync(path.join(KNOWLEDGE_DIR, "meta.json"), "utf8")
  ) as KnowledgeMeta;

  const corpus = meta.pages
    .map((p, i) => {
      const body = fs.readFileSync(path.join(KNOWLEDGE_DIR, p.file), "utf8").trim();
      return `<pagina numero="${i + 1}" titolo="${p.title}" file="${p.source}">\n${body}\n</pagina>`;
    })
    .join("\n\n");

  cached = { meta, corpus };
  return cached;
}
