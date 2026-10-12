# Routine «Mercy · aggiorna la conoscenza»

Istruzioni per creare la routine di Claude Code che tiene `knowledge/` allineata alla Mappa del CRM. Va creata **dall'account di Espedito**, proprietario dell'artifact: da un altro account Claude si ferma a chiedere «Mappa del CRM was made by someone else. Let Claude read it?» e senza risposta non va avanti.

## Prerequisiti

- L'account GitHub collegato a claude.ai ha accesso in scrittura al repo `ESSI-innovazione/mercy-`.

## Impostazioni

Su https://claude.ai/code/routines → nuova routine:

| Campo | Valore |
|-------|--------|
| Nome | Mercy · aggiorna la conoscenza |
| Repository | `ESSI-innovazione/mercy-` |
| Orario | ogni giorno alle 08:00 (ora di Roma); volendo anche 13:00 e 18:00, un giro senza novità si ferma subito |
| Modello | Sonnet |
| Connettori | nessuno |
| Prompt | il testo qui sotto, copiato così com'è |

Quando la routine di Espedito ha fatto il primo aggiornamento, quella creata dall'account Area Innovazione (`trig_01WX56eEHc37ByDgSjdEwJzn`) va spenta, per non avere due routine che pubblicano le stesse modifiche.

## Prompt

```text
You maintain Mercy, an internal Next.js chatbot (repo ESSI-innovazione/mercy-, deployed on Vercel from `main`). Mercy answers questions about the Mercury ERP CRM using ONLY the text of the "Mappa del CRM" artifact, copied into `knowledge/`. The artifact is Mercy's only source. Your job today: refresh that copy if the artifact changed. Read README.md first (sections "Fonte di conoscenza", "Come si aggiorna la conoscenza", "Aggiornamento automatico").

## 1. Read the artifact and decide if anything changed
Do NOT use curl on claude.ai (Cloudflare blocks it). Use the Artifact tool (load it with ToolSearch `select:Artifact` if it is deferred).
- `action: "read"` on `artifactUrl` from `knowledge/meta.json` (https://claude.ai/artifact/Jgp57YQbYCZDbH96pxMRrA). That returns `index.html`, page 1.
- `action: "list", scope: "files"` with the same url, to see every published file.
- Near the top of index.html the page says "Aggiornata il DD/MM/YYYY, versione NN". If NN equals `documentVersion` in meta.json AND the set of .html pages equals meta.json `pages[].source`: STOP. Change nothing, commit nothing, end with one line: "Nessuna novità: Mappa ancora alla versione NN."
If the Artifact tool is not available, or reading fails: STOP. Do NOT reconstruct, guess or edit any knowledge from memory or other sources. End with: "Aggiornamento non fatto: <errore>. Serve l'aggiornamento manuale."

## 2. Read every page
Read each .html page of the artifact with `action: "read"` and `path` (index.html you already have). Ignore non-page files (css, js, images, data).
NEW PAGES: if the artifact has an .html page that is not in meta.json `pages`, add it: next number, file `0N-<slug-of-its-title>.md`, `title` = the page's h1, `source` = its path. Append it to `pages` in meta.json (keep order: index.html first, then the order the Mappa's page navigation lists them, e.g. "Pagina 5 · …"). Also add a row to the pages table in README.md (section "Fonte di conoscenza"). If a page in meta.json no longer exists in the artifact, remove it from `pages`, delete its .md and its README row.

## 3. Rewrite knowledge/
Convert each page's HTML to text and overwrite its `knowledge/0N-*.md`. Match the existing files' conventions exactly (look at them and at `git log -p -3 -- knowledge/` before writing): plain text, `# ` for the page title, `## ` for h2 sections, `### ` for h3, `- ` for list items, one paragraph per line with blank lines between blocks, table rows as cells separated by ` | `, the phase chains kept on their own line (e.g. `suspect → lead → prospect → partner → ex partner`) followed by a blank line and their explanation. Drop scripts, styles, navigation chrome and SVG internals; keep all visible text, in the page's order, verbatim (never paraphrase, never summarise). A python script with html.parser is fine; delete it afterwards, it must not be committed.
Sanity check with `git diff --stat`: existing files should change modestly. If one shrinks by more than ~30% or loses whole `## ` sections that are still in the HTML, your conversion is wrong; fix it.
Update `knowledge/meta.json`: `documentVersion` and `documentDate` from the "Aggiornata il …, versione …" line, `seq` = documentVersion as a number, `ver` = the version id the Artifact tool's read result reports if it shows one (otherwise leave `ver` as is), `fetchedAt` = today (YYYY-MM-DD). If new h2/h3 in the HTML have an `id`, add them to `anchors` (section title -> id); keep the existing ones that still exist.

## 4. Check the FAQ
Run `node scripts/check-faq.mjs`. It lists the entries of `knowledge/faq.json` whose quoted Mappa sentence (`a`) is no longer in the new text.

## 5. Publish
Commit identity: `git -c user.name="Mercy routine" -c user.email="innovazione@timevision.it" commit ...`. Message: "Knowledge: Mappa del CRM v<documentVersion> del <documentDate>" plus a short body in Italian listing what changed in the Mappa (new pages, new sections, new dates or rules).
- If the check passes (all FAQ found): commit to `main` and `git push origin main`. Vercel redeploys by itself. If pushing to main is refused, push a branch `knowledge/v<documentVersion>` and open a pull request instead.
- If some FAQ are broken: create branch `knowledge/v<documentVersion>`. For each broken entry find the new sentence in the Mappa that carries the same rule and set `a` to it VERBATIM (copy from the knowledge file, so the check passes); if the rule itself changed, rewrite `r` too: natural, direct Italian, like a colleague answering, same length and tone as the other entries. If the rule disappeared from the Mappa, remove the entry. Re-run the check until it passes. Commit, push the branch and open a pull request to `main` (gh CLI or GitHub API) titled "Knowledge v<documentVersion>: <N> FAQ da rivedere", whose body lists each FAQ touched with old and new `a`/`r`. Do not push to main in this case.

Only modify `knowledge/` and, for added or removed pages, the pages table in README.md. Never touch code. End with a short Italian summary: version before -> after, pages added/removed, what changed, FAQ status, and the commit or PR link.
```
