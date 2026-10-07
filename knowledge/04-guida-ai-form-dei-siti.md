

Guida ai form dei siti

Mercury ERP · CRM, pagina 4 della Mappa · per chi costruisce i form dei siti

← Torna alla Mappa del CRM

# Guida ai form dei siti

Come si costruisce un form nel builder di Mercury, dal modello fino alla pagina del sito. In questa fase lo fa Luca, del team Innovazione; dopo la messa in produzione lo farà anche il team MARKOM.

Aggiornata il 06/10/2026, con la versione 29 della Mappa
Il percorso è sempre lo stesso: si parte dal modello, si sistemano campi e impostazioni, si controlla l'anteprima, si pubblica e poi si incorpora il codice nella pagina. Gli esempi usano indirizzi inventati (@example.invalid).

### Duplica il modello
Una copia in bozza, con i campi già pronti.

### Sistema i campi
Aggiungi e togli quelli che servono.

### Compila le impostazioni
Domini, proprietario, ringraziamento.

### Controlla e pubblica
Prima l'anteprima, poi Pubblica.

### Incorpora nel sito
Secondo il calendario di Espedito.

## Dove si lavora e come si parte

Il percorso in Mercury è Commerciale → Marketing → Form. Serve la sezione Commerciale con l'accesso a Marketing.

In questa fase

### Sull'anteprima del branch

Si entra con l'account Vercel del team Innovazione (innovazione@timevision.it) e poi con il proprio login Google di Mercury. L'indirizzo dell'anteprima lo dà Espedito. I form costruiti qui restano anche dopo il merge: il database è lo stesso.

Se dopo il login con Google ti ritrovi su mercuryerp.timevision.it invece che nell'anteprima, scrivilo subito a Espedito.

Dopo il merge

### Su mercuryerp.timevision.it

Dopo il merge del branch il builder si usa sull'indirizzo di produzione, con il proprio login Google di Mercury. Da qui lavora anche il team MARKOM.

### Partire dal modello

- Nell'elenco dei form apri «MODELLO - Form dei siti (da duplicare)» e premi Duplica . Nasce una copia in bozza.

- Rinomina la copia: in Impostazioni cambia subito il nome e l'indirizzo (per esempio ricerca-e-selezione ). Dopo la pubblicazione l'indirizzo non si cambia più.

- Lavora sempre sulla copia, mai sul modello.

- In alternativa, Nuovo form crea i campi standard e il blocco dei consensi.

Il modello ha già:

Nome Cognome Email Cellulare
«Sei un'azienda o una persona?»
«Nome azienda», solo se scegli Azienda
Regione (20 regioni)
Stato occupazionale (dieci valori)
Curriculum
Link dell'informativa
Messaggio di ringraziamento
Blocco dei consensi

## Campi e regole fisse

Aggiungi i campi che servono con Aggiungi campo , spostali con le frecce, toglili con il cestino. Per ogni campo scegli il tipo e «Dove va in anagrafica».

### Tipi di campo

testo testo lungo email telefono numero data
scelta singola scelta multipla casella Sì/No file nascosto

Il campo «nascosto» ha un valore fisso che il visitatore non vede, per esempio la campagna.

### Dove va in anagrafica

nome cognome email telefono cellulare codice fiscale
indirizzo regione provincia comune CAP professione
stato occupazionale titolo di studio data di nascita nazionalità
corso di laurea servizi di interesse fonte campagna
solo nella nota

Tutte le risposte finiscono comunque nell'invio, che si vede nella scheda della persona, anche quelle con una destinazione: oggi come nota «Invio form», prima del 19/10 nella linguetta Marketing della linea del tempo (decisione del 05/10).

### Mostra solo se

Un campo può comparire solo se un altro campo vale certi valori. Esempio del modello: «Nome azienda» compare solo se la risposta a «Sei un'azienda o una persona?» è Azienda.

### Regole fisse

- L'email serve sempre. Mercury riconosce la persona dall'email. Senza email valida l'invio viene scartato. Il campo email deve esserci, obbligatorio e sempre visibile.

- Il blocco dei consensi è obbligatorio. Ha la presa visione con il link dell'informativa e tre domande Sì/No: marketing, profilazione, cessione a terzi. Sta fisso in fondo e non si toglie: si cambiano solo i testi. Senza, il builder non pubblica.

- Il No si registra. Un No ai consensi viene registrato come revoca.

- File: massimo 10 MB; formati PDF, Word, ODT, RTF, JPG, PNG.

### Tre casi da conoscere

### Stato occupazionale

Usa il campo del modello, con i dieci valori. Non scrivere a mano le scelte dei vecchi form HubSpot (Occupato / Disoccupato / Studente): finirebbero su valori solo storici.

### Professione

Per ora usa un testo o scelte scritte a mano. Quando arriva l'elenco ufficiale delle professioni, il builder avrà «Carica le voci» e i campi Professione già fatti andranno rifatti con l'elenco.

### Aziende

Il nome dell'azienda e la partita IVA restano nella nota dell'invio. Il form non crea né collega aziende (decisione di Espedito del 05/10).

## Impostazioni, anteprima e pubblicazione

Prima di pubblicare compila la scheda Impostazioni .

Siti che incorporano il form
I domini dei siti, uno per riga, senza https:// (per esempio www.timevision.it ). Sottodomini compresi.

Proprietario del form
Riceve gli avvisi quando la persona non ha già un proprietario.

Contatti nuovi a
Il proprietario dei contatti che nascono da questo form.

Servizio di interesse
Il servizio predefinito dei contatti che arrivano dal form.

Canale Slack
Il canale Slack dove arriva ogni nuovo lead del form, oltre all'avviso al proprietario. Si sceglie dalla tendina e si salva con Salva ; se il canale non c'è ancora, + Nuovo canale accanto alla tendina. È facoltativo: senza canale arriva solo l'avviso al proprietario.

Link dell'informativa
Serve alla presa visione del blocco dei consensi.

Cosa vede il visitatore
Dopo l'invio: un messaggio di ringraziamento oppure una pagina di ringraziamento (indirizzo https).

Canali Slack. In Marketing c'è la tab Canali Slack , con l'elenco dei canali: la gestiscono Admin e Marketing. Disponibile dal 06/10/2026.

Per aggiungere un canale: in Slack apri l'app «Incoming Webhooks», scegli il canale e copia il «Webhook URL». In Mercury premi + Nuovo canale , scrivi il nome del canale come in Slack (minuscole, numeri, trattini e trattini bassi) e incolla il webhook.

Dopo il salvataggio il webhook si vede solo mascherato: è un segreto, non va scritto in chat, email o documenti. Invia un messaggio di prova controlla che il messaggio arrivi. Un canale non si cancella, si spegne: i form che lo usano non scrivono più lì.

Un passo che non si fa nel builder. Il dominio del sito deve essere anche nell'elenco dei siti del widget anti-spam di Cloudflare, che gestisce Espedito. Se manca, gli invii sono rifiutati: scrivigli il dominio prima di accendere il form.

### Anteprima

La scheda Anteprima mostra il form come lo vede il visitatore, con le condizioni dei campi. Non invia nulla.

### Pubblica

Se manca qualcosa (presa visione, link, email) il builder lo dice e non pubblica. Correggi e riprova.

### Un form attivo si può modificare

Cambiare i campi crea una versione nuova: gli invii già ricevuti restano sulla loro. Cambiare solo le impostazioni non crea versioni.

Un form con il blocco dei consensi salvato in mezzo agli altri campi risulta «modificato» appena lo apri, perché il blocco va in fondo: basta salvare.

## Il form nel sito e i form di Meta

Quando si accendono i form Mercury nelle pagine
La ricezione dei form è già in produzione dal 05/10/2026. Il codice Script o Iframe funziona quindi già nelle pagine di prova (bozze, pagine private o non pubblicate di WordPress): si può provare tutto prima.
Nelle pagine vere i form Mercury si accendono lunedì 19/10 mattina, subito dopo il delta finale, secondo il calendario di Espedito. Fino ad allora nelle pagine vere restano i form HubSpot.

### In una pagina WordPress

- Apri il form e vai alla scheda Incorpora .

- Copia il codice Script (consigliato) oppure Iframe , se la pagina non accetta script.

- In WordPress incollalo in un blocco «HTML personalizzato» (o nel widget HTML di Elementor), al posto del codice del form HubSpot. Prima di toglierlo, conserva il codice di HubSpot.

- Salva la pagina e fai una prova con un'email di prova, per esempio prova.nome@example.invalid . La prova si fa in una pagina di prova o in bozza, non nella pagina vera.
Usa sempre lo stesso indirizzo di prova: Mercury lo riconosce e aggiorna lo stesso contatto. Il contatto di prova resta in Mercury: segna l'indirizzo che hai usato e dillo a Espedito.

### Form di Meta (Facebook e Instagram)

- Crea un form con Nuovo form e come sorgente scegli «Meta Lead Ads». La sorgente si sceglie solo in bozza.

- Ogni campo ha una chiave esterna uguale al nome della domanda nel modulo Meta (è il nome della colonna nel file che esporti).

- In Impostazioni puoi scrivere l' ID del modulo Meta : le righe di altri moduli vengono scartate.

- Se vuoi la data del lead su Meta, aggiungi un campo Data con chiave esterna created_time : la data finisce nella nota. La data del consenso, invece, è quella del caricamento.

- Ogni settimana: esporta i lead dal Centro contatti di Meta in CSV. Apri il form Meta nel builder, scheda Carica CSV , e scegli il file senza aprirlo né risalvarlo con Excel.

- Controlla le colonne riconosciute e i campi senza colonna, poi premi Carica . Il riepilogo dice quanti lead sono stati caricati, quanti erano già presenti (lo stesso lead non entra due volte) e quanti scartati.
Se il form ha un canale Slack, per un file CSV nel canale arriva un solo messaggio di riepilogo per caricamento (quanti caricati, già presenti e scartati), non uno per lead. L'avviso personale al proprietario arriva comunque per ogni lead.

- Il primo carico: solo i lead arrivati dalla notte del 18-19/10 in poi. I precedenti sono già in Mercury.

Due casi da conoscere. Se il modulo Meta non chiede l'email, tutte le righe sono scartate: aggiungi la domanda email al modulo Meta. Se Meta mostra l'informativa ma non la esporta nel CSV, il campo resta nel form (serve per pubblicare) e l'anteprima lo segna tra i campi senza colonna: è atteso, da confermare col primo file vero.

## Dopo l'invio, e cosa fare se qualcosa non va

Mercury cerca la persona per email (principale e supplementari) e poi per codice fiscale, se il form lo chiede.

### Trova un partner

L'invio si aggancia al partner. Si riempiono solo i campi che erano vuoti.

### Trova un contatto

Il contatto viene aggiornato.

### Non trova nessuno

Nasce un contatto Suspect con fonte «form», campagna uguale al nome del form e proprietario scelto in «Contatti nuovi a» del form.

L'avviso va al proprietario della persona; se non ne ha uno, al proprietario del form. Arriva come campanella in Mercury e come messaggio Slack. Se il form ha un canale Slack, lo stesso messaggio arriva anche nel canale.

### Se qualcosa non va

In Marketing → Invii c'è ogni invio, con il suo stato: In coda , Elaborato , Errore o Scartato . Aprendolo vedi le risposte, i consensi e i file.

Un invio in errore avvisa il proprietario del form. Con Rielabora lo riprovi; con Scarta non crea né aggiorna nessuno e resta nell'elenco come Scartato.

Per qualsiasi problema scrivi a Espedito, con il nome del form e uno screenshot.

Fonti: guida breve del piano 3a «Ricezione dei form» (Appendice C), decisioni di Espedito del 01/10, del 02/10 e del 05/10 (aziende nei form), calendario della messa in linea dei form.

← Torna alla Mappa del CRM

