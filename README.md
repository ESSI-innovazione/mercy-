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

L'obiettivo è che chi chiede abbia la soluzione subito: una risposta diretta, in italiano naturale, senza dover andare a cercare il testo nella Mappa, e onestà quando la Mappa non risponde. Chi legge vede solo la risposta e le domande collegate; sezione, passaggio e punteggio restano nel JSON dell'API e nel registro, per chi mantiene Mercy.

- Le **FAQ** hanno una risposta scritta a mano in tono naturale (`r`) e la frase della Mappa da cui viene (`a`): la frase serve a verificare all'avvio che la risposta sia ancora vera; se la Mappa cambia e la frase sparisce, la FAQ si spegne da sola.
- Le frasi trovate dalla **ricerca** vengono ripulite prima di essere mostrate (`naturalize` in `lib/search.ts`): via i riferimenti «(decisione del …)», via l'etichetta «Argomento:» che apre molti punti, minuscole al posto delle maiuscole delle tappe, maiuscola e punto finale. Se la frase è corta, segue anche la successiva dello stesso passaggio.

- All'avvio il server spezza le quattro pagine in passaggi (ogni punto elenco, paragrafo o riga di tabella), ricordando sezione e sottosezione di ciascuno (`lib/search.ts`).
- **FAQ curate** (`knowledge/faq.json`): per le domande più frequenti ci sono varianti scritte a mano con la frase esatta della Mappa che risponde. Si controllano prima della ricerca. Ogni frase viene cercata nel testo della Mappa all'avvio: se una versione nuova della Mappa non la contiene più, la voce si spegne da sola (con un avviso nel log) e non si mostra mai una citazione vecchia.
- **Ricerca**: la domanda viene normalizzata (minuscole, senza accenti, parole vuote tolte, radici troncate per singolare/plurale) e confrontata con i passaggi con **BM25**; le parole del titolo della sezione pesano di più; un dizionario di sinonimi (`lib/text.ts`) collega per esempio «doppioni» a «unisci/fusione», e le radici si abbinano anche per prefisso («doppi» trova «doppioni»).
- **Risposta breve**: dentro i passaggi migliori Mercy sceglie la singola frase che risponde meglio e la mette in testa, in evidenza. Il tipo di domanda guida la scelta: «chi può…» preferisce frasi che nominano un ruolo (Admin, Manager, TMK…), «quando…» frasi con una data, «cosa vedo…» frasi sulla visibilità, «come si…» frasi con pulsanti e passaggi.
- **Un solo passaggio in chiaro**: sotto la risposta breve c'è il passaggio completo da cui viene, con la frase evidenziata, sezione, pagina e link alla Mappa. Gli altri passaggi pertinenti stanno in «Vedi anche», chiusi, e si aprono con un clic.
- **Quando la Mappa non risponde**: se il passaggio migliore non contiene la metà delle parole della domanda, Mercy lo dice («La Mappa non risponde direttamente…») e mostra il passaggio più vicino senza spacciarlo per risposta. Se non trova nulla, suggerisce parole del lessico di Mercury.
- **Domande collegate**: dopo ogni risposta, due o tre chip con le FAQ dello stesso passaggio o della stessa sezione, oppure i titoli delle altre sezioni trovate («Cosa dice la Mappa su: …» apre quella sezione nell'ordine della Mappa).
- **Link alla Mappa**: le sezioni che nell'artifact hanno un id (`anchors` in `knowledge/meta.json`: oggi «Gmail e Calendar» e «Chi lavora e cosa vede») hanno un link diretto; per le altre il link apre la Mappa e la risposta dice pagina e sezione. Per avere link diretti ovunque, il team di Espedito deve aggiungere un `id` ai titoli `h2`/`h3` dell'artifact; poi basta aggiornare `anchors`.
- Saluti e ringraziamenti hanno risposte fisse.

L'API (`POST /api/chat`) restituisce la risposta strutturata in JSON (`Answer` in `lib/search.ts`: `kind`, `short`, `passage`, `seeAlso`, `followUps`, `message`, `source`) e l'interfaccia la impagina.

### Registro delle domande

Ogni domanda viene registrata con l'esito (`faq`, `hit`, `weak`, `none`), il punteggio, la copertura delle parole e la sezione della risposta (`lib/log.ts`). Serve a leggere una volta a settimana cosa chiedono i colleghi e cosa non trovano, e ad aggiungere FAQ o sinonimi: è l'unico modo in cui Mercy migliora nel tempo.

- Con `MERCY_LOG_URL` e `MERCY_LOG_KEY` impostate, le righe vanno nella tabella `mercy_questions` di un progetto Supabase (SQL in `supabase/mercy_questions.sql`: tabella, indici, RLS con sola scrittura per la chiave pubblica). Proposta: il progetto `jobsignal` (ref `isqqbrferokpfzcbhivy`), con la sua chiave *publishable*.
- Senza variabili, ogni domanda finisce nei log di Vercel come riga `mercy.question {…}`.
- Lettura settimanale: `select created_at, question, kind, score, coverage, section from mercy_questions where kind in ('weak','none') order by created_at desc;`

### Accesso

Accesso riservato ai colleghi: in `/login` si inserisce l'**email aziendale** (solo indirizzi `@timevision.it`, controllati lato server in `lib/auth.ts`). Chi entra riceve un cookie (90 giorni) che contiene l'email e un'impronta SHA-256; la pagina e le route API controllano il cookie (nessun middleware: su Vercel il middleware Node falliva al caricamento). Non c'è registrazione né gestione utenti.

Due modalità, decise da `APP_PASSWORD`:

- **Anteprima (mock-up)**, senza `APP_PASSWORD`: il login chiede solo l'email e la sola verifica è il dominio. Chiunque conosca un indirizzo `@timevision.it` può entrare. È lo stato attuale.
- **Con password**, appena `APP_PASSWORD` è impostata su Vercel: compare il campo password e serve anche quella. Il cookie è legato alla password, quindi i cookie dell'anteprima smettono di valere.

La pagina di login usa il template «Mercury» (sfondo liquido con filtro gooey, campi con sottolineatura luminosa) ricolorato nella palette di Mercy: navy `#0F172B` e arancio `#FC5A00`. Vive in `components/ui/mercury-login.tsx`.

### Interfaccia

Pagina unica in stile v0 (shadcn + Tailwind + TypeScript): titolo, casella con auto-ridimensionamento, suggerimenti rapidi (passaggio netto, fasi del partner, barra di Gmail, doppioni, consensi, record di altri Account, form dei siti), poi la conversazione con composer fisso in basso. Ogni risposta mostra solo il testo della risposta, le chip con le domande collegate e, in piccolo, la versione della Mappa. Colori: primario `#0F172B` (navy), secondario `#FC5A00` (arancio).

## Struttura

```
app/
  page.tsx               pagina principale (chat)
  login/page.tsx         pagina di accesso (email @timevision.it + password)
  api/chat/route.ts      risposta strutturata (FAQ, ricerca, frase breve) + registro domande
  api/status/route.ts    confronto versione artifact / knowledge
  api/login/route.ts     imposta il cookie
  layout.tsx, globals.css
components/ui/
  v0-ai-chat.tsx         componente chat (template v0 adattato a Mercy)
  mercury-login.tsx      pagina di accesso (template Mercury, palette Mercy)
  textarea.tsx           shadcn textarea
lib/
  knowledge.ts           carica knowledge/*.md + meta.json
  text.ts                normalizzazione, radici, stopword, sinonimi, tipo di domanda
  search.ts              indice BM25, scelta della frase, risposta strutturata
  faq.ts                 FAQ curate: caricamento e abbinamento
  log.ts                 registro delle domande (Supabase o log di Vercel)
  markdown.ts            Markdown -> HTML minimale
  auth.ts, utils.ts
knowledge/
  01-…04-*.md, meta.json le quattro pagine della Mappa, la loro versione, gli anchor
  faq.json               domande frequenti con la frase esatta della Mappa
supabase/
  mercy_questions.sql    tabella del registro delle domande
```

## Variabili d'ambiente (Vercel → Settings → Environment Variables)

| Nome | Obbligatoria | Note |
|------|--------------|------|
| `APP_PASSWORD` | consigliata | password condivisa; senza di essa il login è un'anteprima che chiede solo l'email `@timevision.it` |
| `MERCY_LOG_URL` | no | URL del progetto Supabase che ospita `mercy_questions` (es. `https://isqqbrferokpfzcbhivy.supabase.co`); senza, il registro va nei log di Vercel |
| `MERCY_LOG_KEY` | no | chiave *publishable* (anon) dello stesso progetto; la tabella accetta solo inserimenti |

## Sviluppo locale

```bash
npm install
cp .env.example .env.local   # APP_PASSWORD facoltativa in locale
npm run dev
```

Apri http://localhost:3000.
