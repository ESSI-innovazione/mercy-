

Mercury per JobSignal

Mercury ERP · CRM, pagina 3 della Mappa · per Sara Aboudarda

← Torna alla Mappa del CRM

# Mercury per JobSignal

Dal 19/10 candidati e aziende vivono in Mercury e HubSpot non si aggiorna più; il 30/11 HubSpot chiude. Qui c'è la proposta di come JobSignal legge da Mercury: cosa espone Mercury, cosa cambia dal tuo lato, entro quando, e le domande per te.

Proposta del 02/10/2026, da concordare con Espedito (domanda 121) · aggiornata il 06/10/2026, con la versione 29 della Mappa
Le scelte di fondo le ha già fatte Espedito il 02/10: la lettura entra nel lavoro sui profili di placement di Mercury, è di sola lettura con una chiave tutta sua, e dei candidati passa il minimo (niente codice fiscale, data di nascita e categorie protette). Campi, frequenza e formato li fissiamo con te.

## Perché cambia e quando

- 19/10
### Mercury è la fonte
Venditori, form dei siti e TMK lavorano solo in Mercury. HubSpot resta fermo all'ultimo aggiornamento del 18/10.

- 23/10
### HubSpot gratuito
Lo script di HubSpot esce dai siti: i candidati nuovi arrivano solo in Mercury.

- inizio novembre
### Lettura pronta
Rilascio stimato dei profili di placement in Mercury, insieme alla lettura per JobSignal. Prova insieme a te.

- entro il 30/11
### JobSignal su Mercury
HubSpot chiude: JobSignal deve già leggere da Mercury.

## Le tabelle di JobSignal, oggi e con Mercury

Ho letto solo la struttura delle tabelle del progetto jobsignal , nessun dato.

| | In JobSignal | Oggi | Con Mercury

| candidati | copia di SaturnHR ed export di HubSpot, chiave hubspot_id | contatti di Mercury con almeno un profilo di placement non chiuso, chiave l'id di Mercury (uuid)

| candidato_voci | voci del DB lavoro per candidato | profili di placement: voce della lista di Mercury con codice CP2021, area, stato (proposta, attiva, chiusa), esperienza, origini, ADA

| voci | 339 voci del DB lavoro, numerazione interna | lista di Mercury: 446 voci in 28 aree con codice CP2021 e sinonimi ISTAT, più la corrispondenza da ogni vecchia voce del DB lavoro

| company_links , company_names | aziende riconciliate con HubSpot (id e owner) e VIES | aziende di Mercury cercate per P.IVA o nome, con id di Mercury e proprietario

| abbinamenti | chiave candidato_hubspot_id | chiave l'id di Mercury: si spostano una volta con la corrispondenza id HubSpot → id Mercury che la lettura ti dà

| hubspot-sync | aggiornamento da HubSpot | lettura di Mercury per data di modifica

| codice fiscale, data di nascita | nei candidati | non arrivano più: Espedito ha deciso di passare il minimo

## La lettura di Mercury (proposta)

Un solo indirizzo di Mercury, con una chiave segreta che hai solo tu nelle variabili d'ambiente di JobSignal. Non ricevi mai chiavi del database di Mercury. Tutte le risposte sono in JSON e i legami usano gli id di Mercury.

candidati?dal=<data e ora>&dopo=<cursore>
I candidati cambiati dalla data indicata, a pagine da 500, in ordine di modifica. Ogni pagina restituisce il cursore della successiva. Alla prima chiamata, senza data, arrivano tutti. Come data conviene usare l'ultima lettura meno 10 minuti, così non si perde nessuna modifica ancora in corso; i doppioni sono innocui.

Esempio inventato
{
"candidati": [{
"id": "7f3c…-uuid-di-mercury",
"id_hubspot": "123456789",
"nome": "Maria", "cognome": "Esempio",
"comune": "Napoli", "provincia": "NA", "indirizzo": "Via Esempio 1",
"stato_occupazionale": "disoccupato",
"condizioni": ["naspi_discoll"],
"ha_cv": true,
"email": "maria@example.invalid", "telefono": "+39 000 0000000",
"aggiornato_il": "2026-11-03T10:12:00Z",
"profili": [{
"voce_id": "b21e…", "voce": "Cassiere", "area": "Commercio e GDO",
"codice_cp2021": "5.1.2.4.0", "stato": "attiva", "esperienza": "si",
"origini": ["tirocinio", "import_hubspot"], "ada": ["ADA.12.01.07"],
"priorita": 1
}]
}],
"dopo": "cursore-della-pagina-seguente"
}

id_hubspot serve solo per spostare una volta candidati e abbinamenti sugli id di Mercury, ed esce solo fino al 30/11/2026.

usciti?dal=<data e ora>
I candidati da togliere o da spostare, con il motivo: contatto archiviato, profili tutti chiusi, oppure unito a un altro contatto (fusione di doppioni). Per un'unione trovi l'id che resta, così gli abbinamenti passano al contatto giusto.

{ "usciti": [
{ "id": "a1…", "motivo": "unito", "unito_in": "7f3c…" },
{ "id": "c9…", "motivo": "senza_profili" },
{ "id": "d4…", "motivo": "profilazione_revocata" }
] }

cv?id=<id del candidato>
Un collegamento temporaneo al curriculum di un solo candidato, valido 10 minuti. I CV non arrivano mai in blocco.

voci
La lista di Mercury: id, nome, area, codice CP2021, tipo di voce (mestiere, generica), sinonimi ISTAT e i valori del vecchio DB lavoro che portano a quella voce. Ti serve per passare dalle 339 voci di oggi alla lista nuova.

aziende?piva=<P.IVA> · aziende?nome=<testo>
Cerca un'azienda di Mercury e restituisce id, ragione sociale, P.IVA, comune, provincia e nome del proprietario. Prende il posto della riconciliazione con HubSpot.

- Ogni chiamata resta in un registro di Mercury (data, richiesta, numero di righe), senza dati personali.

- Nei candidati non ci sono codice fiscale, data di nascita, categorie protette, consensi né IBAN.

- Il confronto automatico è una profilazione: non arrivano i candidati che hanno revocato o negato il consenso alla profilazione. Se lo revocano dopo, escono con usciti e il motivo profilazione_revocata . Chi non ha risposto resta incluso.

- Le condizioni sono codici: naspi_discoll , adi_sfl , cig_cigs , neet , beneficiario_gol . Lo stato occupazionale ha 12 codici: occupato_dipendente , lavoratore_autonomo , imprenditore , disoccupato , in_cerca_prima_occupazione , studente_scuola_superiore , studente_universitario , praticante_tirocinante , pensionato , altro , più occupato e studente senza dettaglio, che restano solo per i dati vecchi di HubSpot.

- Le righe proposte (dai form, in attesa della conferma di Ricerca e selezione) arrivano con "stato": "proposta" : decidi tu se usarle nel confronto.

## Cosa cambia dal tuo lato

- Sostituire hubspot-sync con la lettura di Mercury ( candidati e usciti per data).

- Spostare candidati e abbinamenti dall'id di HubSpot all'id di Mercury, una volta, con id_hubspot .

- Passare dalle 339 voci del DB lavoro alla lista di Mercury con i codici CP2021, usando le corrispondenze di voci .

- Collegare le aziende delle offerte alle aziende di Mercury invece che a HubSpot.

- Togliere codice fiscale e data di nascita già copiati, che non arriveranno più aggiornati.

- Più avanti, con Daniela: confronto sul codice CP2021 dell'offerta (identico, stesso gruppo, stessa area), affinato con le ADA dei corsi e dei tirocini.

## Domande per te

- Ogni quanto vuoi leggere i cambiamenti? Proposta: ogni notte; se serve, ogni ora.

- Ti manca qualche dato per il confronto, per esempio titolo di studio, disponibilità a spostarsi o patente? Mercury ha già il titolo di studio sul contatto: si può aggiungere.

- La posizione la calcoli ancora tu da comune e indirizzo, o ti servono le coordinate da Mercury? Oggi Mercury non ha coordinate: comune e provincia vengono dall'elenco ufficiale dei comuni.

- Quali candidati vuoi ricevere? Proposta: i contatti con almeno un profilo di placement non chiuso.

- Vuoi che gli abbinamenti (proposto, colloquio, piazzato) tornino in Mercury, per esempio come attività sul contatto? Non è nel lavoro di adesso: lo decidiamo dopo il passaggio.

- Ti serve una lettura di prova con dati inventati prima del rilascio? Proposta: sì, con candidati inventati, una o due settimane prima del rilascio.

Fonti: spec di Mercury «Professione e profili di placement» del 02/10 (sezione «Lettura per JobSignal»), nota di Daniela dell'01/10 sul placement, struttura delle tabelle del progetto Supabase jobsignal letta il 02/10, decisioni di Espedito del 02/10. Regole e tempi di professione e profili di placement nella pagina 2 .

