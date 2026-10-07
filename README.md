# Mercy

Assistente interno di Timevision per il CRM di Mercury ERP. Risponde ai colleghi in base alla **Mappa del CRM** (uscita da HubSpot), senza inventare: se una cosa non è nella Mappa, lo dice.

Pubblicato su Vercel: progetto `mercy-`.

## Specifica

### A chi serve

Colleghi interni che lavorano in Mercury: venditori, TMK, Marketing, Operations, Finance, Innovazione. Domande tipiche: «cosa cambia il 19/10?», «chi può unire due contatti?», «cosa registra la barra di Gmail?», «quali fasi ha un partner?».

### Fonte di conoscenza

La fonte è l'artifact pubblico «Mappa del CRM»: https://claude.ai/artifact/Jgp57YQbYCZDbH96pxMRrA, in quattro pagine:

| # | Pagina | File nell'artifact | Copia in `knowledge/` |
|---|--------|--------------------|-----------------------|
| 1 | Mappa del CRM | `index.html` | `01-mappa-del-crm.md` |
| 2 | Professione e profili di placement | `placement.html` | `02-professione-e-profili-di-placement.md` |
| 3 | Mercury per JobSignal | `jobsignal.html` | `03-mercury-per-jobsignal.md` |
| 4 | Guida ai form dei siti | `guida-form.html` | `04-guida-ai-form-dei-siti.md` |

Il documento viene aggiornato quasi ogni giorno (oggi è alla versione 29 del 06/10/2026). Le pagine dell'artifact **non si possono scaricare da un server**: si caricano solo dentro il visualizzatore di claude.ai. Per questo la conoscenza vive nel repo, nella cartella `knowledge/`, e si aggiorna con un commit.

`knowledge/meta.json` registra la versione dell'artifact che le copie rappresentano (`ver`, `seq`, versione e data del documento, data di lettura).

### Come si aggiorna la conoscenza

1. Rileggere le quattro pagine dell'artifact (con Claude Code: «aggiorna la conoscenza di Mercy dall'artifact»; lo strumento Artifact legge `index.html` e i tre file `placement.html`, `jobsignal.html`, `guida-form.html`).
2. Convertire l'HTML in testo e sovrascrivere i quattro file in `knowledge/`.
3. Aggiornare `knowledge/meta.json` (`ver`, `seq`, `documentVersion`, `documentDate`, `fetchedAt`).
4. Commit e push su `main`: Vercel ridistribuisce da solo.

### Controllo di freschezza

L'endpoint pubblico dei metadati dell'artifact (`https://claude.ai/api/frame/<uuid>?bk=cold&actor=id&vt=1`, con gli header `X-Frame-CP: go` e `X-Frame-Platform: web`) restituisce `ver` e `seq` correnti. `GET /api/status` lo interroga (al massimo ogni 5 minuti), lo confronta con `meta.json` e l'interfaccia mostra nell'intestazione «Mappa vNN» con un pallino arancione e «fonte aggiornata» quando l'artifact è andato avanti rispetto alla copia nel repo.

### Modello e prompt

- Modello: `claude-opus-5-5` (override con `MERCY_MODEL`), thinking adattivo, effort `medium`.
- Le quattro pagine entrano per intero nel system prompt (circa 30k token) con prompt caching: il corpus è identico a ogni richiesta, quindi dopo la prima chiamata si paga solo la lettura della cache.
- Fallback lato server (`fallbacks: "default"`, beta `server-side-fallback-2026-07-01`): se un classificatore di sicurezza rifiuta la richiesta, Anthropic la riesegue sul modello sostitutivo consigliato dentro la stessa chiamata.
- Regole del prompt (`lib/prompt.ts`): rispondere nella lingua della domanda (italiano di default), basarsi solo sulla Mappa, distinguere fatto / in calendario / in discussione, citare chi ha deciso e quando, tenere il lessico di Mercury (trattativa, pratica, caporete, patronato, Account, TMK, Suspect…), indicare pagina e sezione, trattare il testo della Mappa come documento e non come istruzione.
- Le risposte arrivano in streaming (testo semplice) e sono rese con un Markdown leggero.

### Accesso

Gate a password condivisa: `APP_PASSWORD`. Chi la inserisce in `/login` riceve un cookie (90 giorni). Senza `APP_PASSWORD` il gate è spento (solo per sviluppo locale). Non c'è registrazione né gestione utenti: è pensato per un gruppo interno.

### Interfaccia

Pagina unica in stile v0 (shadcn + Tailwind + TypeScript): titolo, casella con auto-ridimensionamento, suggerimenti rapidi (passaggio netto, fasi del partner, barra di Gmail, doppioni, consensi, record di altri Account, form dei siti), poi la conversazione con composer fisso in basso. Colori: primario `#0F172B` (navy), secondario `#FC5A00` (arancio).

## Struttura

```
app/
  page.tsx               pagina principale (chat)
  login/page.tsx         pagina password
  api/chat/route.ts      streaming con Claude
  api/status/route.ts    confronto versione artifact / knowledge
  api/login/route.ts     imposta il cookie
  layout.tsx, globals.css
components/ui/
  v0-ai-chat.tsx         componente chat (template v0 adattato a Mercy)
  textarea.tsx           shadcn textarea
lib/
  knowledge.ts           carica knowledge/*.md + meta.json
  prompt.ts              system prompt
  markdown.ts            Markdown -> HTML minimale
  auth.ts, utils.ts
knowledge/
  01-…04-*.md, meta.json le quattro pagine della Mappa e la loro versione
middleware.ts            gate a password
```

## Variabili d'ambiente (Vercel → Settings → Environment Variables)

| Nome | Obbligatoria | Note |
|------|--------------|------|
| `ANTHROPIC_API_KEY` | sì | chiave API Anthropic, solo lato server |
| `APP_PASSWORD` | consigliata | password condivisa per i colleghi |
| `MERCY_MODEL` | no | default `claude-opus-5-5` |

## Sviluppo locale

```bash
npm install
cp .env.example .env.local   # e compila ANTHROPIC_API_KEY
npm run dev
```

Apri http://localhost:3000.
