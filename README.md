# Mercy

Assistente interno di Timevision per il CRM di Mercury ERP. Risponde ai colleghi citando la **Mappa del CRM** (uscita da HubSpot), senza modelli di linguaggio: cerca i passaggi giusti e li riporta così come sono scritti. Se una cosa non è nella Mappa, lo dice.

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

### Come risponde (senza LLM)

Mercy non usa modelli di linguaggio né servizi esterni: nessuna chiave API, nessun costo per domanda, nessun dato che esce dal server.

- All'avvio il server spezza le quattro pagine in passaggi (ogni punto elenco, paragrafo o riga di tabella), ricordando sezione e sottosezione di ciascuno (`lib/search.ts`).
- Ogni domanda viene normalizzata (minuscole, senza accenti, parole vuote tolte, radici troncate per gestire singolare/plurale) e confrontata con i passaggi con **BM25**; le parole che compaiono nel titolo della sezione pesano di più e un piccolo dizionario di sinonimi collega per esempio «doppioni» a «unione/unisci/fusione».
- La risposta cita i passaggi migliori così come sono scritti, con sezione, pagina e versione della Mappa. Se nessun passaggio è abbastanza vicino, Mercy lo dice e suggerisce parole del lessico di Mercury.
- Saluti e ringraziamenti hanno risposte fisse.

### Accesso

Accesso riservato ai colleghi: in `/login` si inserisce l'**email aziendale** (solo indirizzi `@timevision.it`, controllati lato server in `lib/auth.ts`). Chi entra riceve un cookie (90 giorni) che contiene l'email e un'impronta SHA-256; la pagina e le route API controllano il cookie (nessun middleware: su Vercel il middleware Node falliva al caricamento). Non c'è registrazione né gestione utenti.

Due modalità, decise da `APP_PASSWORD`:

- **Anteprima (mock-up)**, senza `APP_PASSWORD`: il login chiede solo l'email e la sola verifica è il dominio. Chiunque conosca un indirizzo `@timevision.it` può entrare. È lo stato attuale.
- **Con password**, appena `APP_PASSWORD` è impostata su Vercel: compare il campo password e serve anche quella. Il cookie è legato alla password, quindi i cookie dell'anteprima smettono di valere.

La pagina di login usa il template «Mercury» (sfondo liquido con filtro gooey, campi con sottolineatura luminosa) ricolorato nella palette di Mercy: navy `#0F172B` e arancio `#FC5A00`. Vive in `components/ui/mercury-login.tsx`.

### Interfaccia

Pagina unica in stile v0 (shadcn + Tailwind + TypeScript): titolo, casella con auto-ridimensionamento, suggerimenti rapidi (passaggio netto, fasi del partner, barra di Gmail, doppioni, consensi, record di altri Account, form dei siti), poi la conversazione con composer fisso in basso. Colori: primario `#0F172B` (navy), secondario `#FC5A00` (arancio).

## Struttura

```
app/
  page.tsx               pagina principale (chat)
  login/page.tsx         pagina di accesso (email @timevision.it + password)
  api/chat/route.ts      risposta: ricerca nella Mappa
  api/status/route.ts    confronto versione artifact / knowledge
  api/login/route.ts     imposta il cookie
  layout.tsx, globals.css
components/ui/
  v0-ai-chat.tsx         componente chat (template v0 adattato a Mercy)
  mercury-login.tsx      pagina di accesso (template Mercury, palette Mercy)
  textarea.tsx           shadcn textarea
lib/
  knowledge.ts           carica knowledge/*.md + meta.json
  search.ts              indice BM25 e formattazione della risposta
  markdown.ts            Markdown -> HTML minimale
  auth.ts, utils.ts
knowledge/
  01-…04-*.md, meta.json le quattro pagine della Mappa e la loro versione
```

## Variabili d'ambiente (Vercel → Settings → Environment Variables)

| Nome | Obbligatoria | Note |
|------|--------------|------|
| `APP_PASSWORD` | consigliata | password condivisa; senza di essa il login è un'anteprima che chiede solo l'email `@timevision.it` |

## Sviluppo locale

```bash
npm install
cp .env.example .env.local   # APP_PASSWORD facoltativa in locale
npm run dev
```

Apri http://localhost:3000.
