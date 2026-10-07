

Professione e profili di placement

 Mercury ERP · CRM, pagina 2 della Mappa

 ← Torna alla Mappa del CRM

# Professione e profili di placement

 La nota di Daniela dell'01/10 distingue tre cose: chi è la persona (professione), che lavoro cerca o sa fare (profili di placement) e che cosa certifica un corso (profilo in uscita). Qui c'è come Mercury le costruisce, cosa arriva prima e dopo il 19/10, cosa serve per costruirlo e cosa resta da decidere.

 Aggiornata il 06/10/2026, con la versione 29 della Mappa
 Il 02/10 Espedito ha deciso: per il passaggio netto del 19/10 serve solo la Professione, che è già nel piano in corso. Profili di placement, profilo in uscita dai corsi e ruoli persona-azienda arrivano dopo il 19/10, in tre lavori separati, e i profili si costruiscono una volta sola. Con i profili di placement JobSignal, la piattaforma di Sara Aboudarda, passa a leggere candidati e aziende da Mercury invece che da HubSpot.

## Tre campi, tre domande

 Sul contatto va ciò che la persona dichiara, sulle pratiche ciò che è documentato. I dati documentati arrivano al contatto come righe dei profili di placement, con la loro origine.

 DICHIARATO
 Form dei sitiprofessione e mansione
 Operatorecolloquio, orientamento
 CVestrazione dal curriculum
 Import da HubSpotuna volta sola

 CONTATTO
 Professioneuna voce: chi è la personaPRIMA DEL 19/10 · MAI DALLE PRATICHE
 stato occupazionale · condizioni · categorie protette
 Profili di placementpiù righe: che lavoro cerca o sa fareorigine, stato, esperienza, ADADOPO IL 19/10 · CAMPO DEL MATCHING

 Attività (corso)profilo in uscita:qualificazione → ADA → CP2021
 Pratica del corsistaesito e ADA certificate
 Pratica di tirocinioprogetto formativo: SEP, ADA, CP

 JobSignallegge da Mercury

 professione

 profili

 iscritti al corso

 riga «corso»

 riga «tirocinio»

 legge solo i profili

 Viola: i campi del contatto. Giallo e arancio: attività e pratiche della sezione Operations. Bordo tratteggiato: arriva dopo il 19/10. La professione non entra nel confronto di JobSignal: descrive soprattutto clienti e consulenti (Commercialista 41.000, Consulente del lavoro 16.500) e porterebbe rumore.

### Professione

 Chi è la persona, il suo mestiere.

 Prima del 19/10

 Quante
una voce

 Su chi
partner e contatti

 Da dove
form dei siti, operatore, import di HubSpot

 Chi vince
l'operatore, poi il form più recente, poi l'import

 Mai
ricavata dalle pratiche: al massimo Mercury propone, decide l'operatore

### Profili di placement

 Che lavoro la persona cerca o sa fare (l'ex DB lavoro).

 Dopo il 19/10 · lavoro A

 Quante
più righe, una per voce

 Su chi
solo contatti

 Ogni riga
voce e codice CP2021, nota, priorità, stato, provenienze con origine, ADA ed esperienza

 Serve a
JobSignal, in tutti e tre i casi: stage dopo un corso, politica attiva, ricerca e selezione

### Profilo in uscita dai corsi

 Che cosa certifica un corso: è del corso, non della persona.

 Dopo la E1 · lavoro B

 Dove
sull'attività, nella sezione Operations, al posto del campo di testo di oggi (vuoto in 9.263 attività su 9.335)

 Catena
qualificazione del Repertorio → ADA dell'Atlante → codici CP2021

 Poi
a corso superato diventa una riga dei profili di placement della persona, con origine «corso»

### Stato occupazionale Prima del 19/10

 Una risposta: che cosa fa adesso la persona. Su partner e contatti, 12 valori.

 Occupato dipendenteLavoratore autonomo / libero professionistaImprenditore
 DisoccupatoIn cerca di prima occupazioneStudente scuola superiore
 Studente universitarioPraticante / tirocinantePensionatoAltro
 Occupato (tipo non indicato)Studente (livello non indicato)

 Tratteggio: solo per lo storico di HubSpot, non si scelgono.

### Condizioni per i programmi Dopo il 19/10

 Requisiti per GOL e per i bandi, a scelta multipla, solo sui contatti. Si sommano allo stato. Le vede chi vede il contatto.

 Percettore NASpI / DIS-COLLPercettore ADI / SFLIn cassa integrazione (CIG / CIGS)NEETBeneficiario GOL

### Categorie protette (L. 68/99) Prima del 19/10

 Sì o no, in un campo a parte. Dice che la persona ha una disabilità, che è un dato sulla salute: lo vedono e lo cambiano solo Admin e Manager, e non va mai nell'Excel.

## Deciso da Espedito il 02/10

 - Per il 19/10 basta la Professione. I profili escono dal piano delle professioni in corso e si costruiscono dopo il 19/10 come profili di placement, una volta sola. I valori del DB lavoro restano nei dati grezzi di HubSpot finché non vengono convertiti.

 - Stato occupazionale a 12 valori subito, così i form che si costruiscono in questi giorni nascono con i valori giusti. «Occupato» e «Studente» senza dettaglio servono solo a non perdere i dati di HubSpot.

 - Stato preciso al posto del generico. Se HubSpot dice solo «Occupato» o «Studente» e la professione o il DB lavoro precisano lo stato nella stessa famiglia, vince quello preciso (Occupato con professione Imprenditore diventa Imprenditore; Studente con professione Studente universitario diventa Studente universitario). Una scelta già fatta in Mercury non torna generica. Famiglie: Occupato → occupato dipendente, lavoratore autonomo, imprenditore; Studente → scuola superiore, universitario.

 - Professione e stato insieme. Alcuni valori di HubSpot danno tutte e due: IMPRENDITORE e STARTUPPER danno la voce «Imprenditore / titolare d'azienda» e lo stato Imprenditore; PRATICANTE AVVOCATO, COMMERCIALISTA e CONSULENTE DEL LAVORO danno la voce della professione e lo stato Praticante / tirocinante (213 persone in tutto). Dal DB lavoro, «25.21 Senza esperienza, settore turistico» dà lo stato In cerca di prima occupazione (21 persone), come «02.02 Senza esperienza». Lo stato ricavato riempie solo se lo stato è vuoto.

 - Lista di 446 voci in 28 aree (non 454): è quella caricata in Mercury l'01/10 dal file di Luca. Dopo il 19/10 ogni voce prende il codice CP2021 e le voci esemplificative ISTAT come sinonimi.

 - Le 54 specializzazioni «Docente …» escono dopo il 19/10, con «Togli e sostituisci» della pagina Professioni (diventano «Docente corsi di formazione»), quando c'è il campo Ambiti di docenza che riceve la specializzazione.

 - Profili di placement solo sui contatti. Per i partner conta la professione. Se un contatto diventa partner, i suoi profili restano nello storico come nota.

 - Categorie protette in un campo a parte, solo per Admin e Manager. Le Condizioni per i programmi hanno gli altri cinque valori.

 - Una riga per voce. Se la stessa voce arriva da più origini resta una riga sola con tutte le sue provenienze: origine, pratica o invio del form che l'ha generata, ADA, esperienza, data.

 - Una provenienza documentata (corso, tirocinio) rende la riga attiva anche se era proposta o chiusa. L'esperienza della riga è «sì» se almeno una provenienza la documenta.

 - Conferma e riapertura. Una riga proposta diventa attiva solo con la conferma di chi ha il permesso. Se viene chiusa mentre è ancora proposta, riaprendola torna proposta: chiudere e riaprire non serve a saltare la conferma. Contatto che diventa partner: i suoi profili finiscono in una nota nella timeline del partner.

 - Togli e sostituisci (pagina Professioni, solo Admin) vale anche per i profili di placement e lascia lo storico sui contatti cambiati. Una riga dei profili si elimina solo da un Admin, per gli errori; tutti gli altri la chiudono.

 - Un form non sovrascrive mai la professione scelta da un operatore: sul contatto Mercury registra chi l'ha scritta per ultimo. Sui partner il form la scrive solo se è vuota.

 - I profili si usano dal Commerciale. Chi fa Ricerca e selezione, politica attiva e stage ha la sezione Commerciale e vede tutti i candidati, in tutta Italia (visibilità «tutto» sui contatti per quegli utenti).

 - JobSignal legge da Mercury. La piattaforma di Sara Aboudarda oggi copia i candidati da HubSpot e SaturnHR, con la vecchia tassonomia del DB lavoro. Con i profili di placement Mercury le dà una lettura dedicata, di sola lettura: candidati con i profili e la lista delle voci con i codici CP2021, più la ricerca delle aziende. Tutto con le chiavi di Mercury, senza codice fiscale, data di nascita e categorie protette. Il confronto automatico è una profilazione: JobSignal non riceve i candidati che hanno revocato o negato il consenso alla profilazione, e chi lo revoca dopo esce. Sara adatta JobSignal entro il 30/11, quando HubSpot chiude. La proposta per lei è nella pagina 3.

 - Domande chiuse da Espedito il 02/10. 113: le righe importate dal DB lavoro nascono attive, con l'origine «import HubSpot» sempre visibile e filtrabile. 115: l'albo docenti sono i collaboratori esterni con funzione docenza della sezione Branch; gli Ambiti di docenza vanno su quelle risorse, poi le 54 voci «Docente …» escono dalla lista. 117: l'Atlante del Lavoro si carica dal file completo di INAPP (estrazione del 03/08/2026: 961 ADA in 25 settori, 2.483 risultati attesi, 7.129 attività, codici CP e ATECO, e 4.848 qualificazioni dei repertori di 21 regioni collegate alle ADA); licenza CC BY-NC 4.0, con l'attribuzione «INAPP, Atlante del Lavoro e delle Qualificazioni» nelle schermate. 118: i dati delle assunzioni e degli apprendistati arriveranno da un lettore dei file UniLav, da costruire: fino ad allora l'origine «rapporto di lavoro» resta fuori.

 - Profilo in uscita dai corsi (pezzo B, deciso il 2/10 sera). Le tre schermate stanno in Operations. Il corso e il tirocinio salvano voci della lista, non codici: dalle ADA spuntate Mercury propone le voci con quei codici CP e chi compila le conferma, così le righe nei profili non sono mai ambigue. Una pratica è un tirocinio se lo è il suo prodotto (casella «è un tirocinio» nel catalogo, messa da un Admin). Le qualificazioni vengono dal file dell'Atlante, senza aspettare il file dei repertori. Due tempi: B1 subito dopo i profili di placement (tabelle dell'Atlante, profilo in uscita, esiti anche in blocco, progetto formativo); B2 dopo il legame tra pratiche e contatti (righe automatiche nei profili e, una volta, i tirocini già conclusi dei monitor, riconosciuti dal codice fiscale).

 - Conversione da HubSpot una volta sola, dopo l'ultimo aggiornamento del 19/10: DB lavoro, «mansione di interesse», la domanda dei lead ad «Quale carriera vorresti intraprendere?», NASpI e cassa integrazione. Niente storico per le conversioni in blocco, come per l'import.

## Da dove arrivano le righe dei profili

 La tabella della nota di Daniela, con il momento in cui ogni origine entra in Mercury.

 | 
 | Origine
 | Da dove
 | Stato iniziale
 | Esperienza
 | Quando

 | Import HubSpot
 | DB lavoro: 35.547 contatti, 36.295 righe
 | attivadeciso il 02/10
 | non nota
 | A, dopo il 19/10

 | Form
 | form dei siti e lead ad: «Cerco lavoro come…»
 | proposta
 | no
 | A

 | Operatore
 | colloquio di ricerca e selezione, orientamento, patto di servizio
 | attiva
 | come dichiarato
 | A

 | CV
 | estrazione automatica dal curriculum
 | proposta
 | come da CV
 | origine prevista dalla A; l'estrazione dal CV è un lavoro a parte

 | Corso
 | corso superato: CP2021 e ADA della qualificazione
 | attiva
 | no
 | B

 | Tirocinio
 | tirocinio concluso: CP2021 e ADA del progetto formativo
 | attiva
 | sì
 | B

 | Rapporto di lavoro
 | assunzione o apprendistato: qualifica dell'UniLav
 | attiva
 | sì
 | più avanti, con il lettore dei file UniLav

## Piano d'azione

 Cosa si costruisce e quando. Prima del 19/10 solo ciò che serve al passaggio netto; il resto dopo, in quattro lavori: A profili di placement, C ruoli persona-azienda, B profilo in uscita dai corsi, poi JobSignal. La E1 è il legame tra pratiche e contatti, che serve alla B.

 01/10

### Lista delle voci in Mercury fatto

 446 voci in 28 aree e le corrispondenze dei valori di HubSpot, dal file di Luca. Tendina con le voci raggruppate per area.

 06/10 sera

### Professione, stato occupazionale e categorie protette su partner e contatti

 Piano delle professioni in corso, con lo stato già a 12 valori.

 07-09/10

### Conversione da HubSpot, pagina Professioni, schede, tabelle, form e TMK

 La professione prende il posto della tipologia del partner (anche per passare a Prospect). Pagina Professioni solo per gli Admin: aggiungi, rinomina, cambia area, togli e sostituisci.

 12-13/10

### Prova di Espedito

 19/10

### Passaggio netto

 La professione è in uso nel CRM. I profili sono ancora nei dati grezzi di HubSpot, conservati per la conversione.

 dal 20/10 · ~2 settimane

### Profili di placement A

 Codici CP2021, affidabilità del codice e sinonimi ISTAT sulle voci; righe dei profili con le provenienze; Condizioni per i programmi; conversione del DB lavoro e degli altri campi di HubSpot; tab «Profili di placement» nella scheda del contatto con Conferma, Chiudi e Riapri; riquadro nella vista rapida; filtri e colonne nella tabella dei contatti; tabella «Profili da confermare»; codici e conteggi nella pagina Professioni; campo «Cerco lavoro come…» nei form; lettura per JobSignal (candidati, voci, aziende), con il contratto concordato con Sara. Ogni schermata parte da un'anteprima approvata da Espedito. Rilascio stimato nella prima settimana di novembre.

 fine ottobre

### Ruoli persona-azienda, prima parte C

 Elenco nuovo dei ruoli (titolare o legale rappresentante, socio o amministratore, responsabile del personale, referente formazione, amministrazione, responsabile di sede o reparto, lavoratore, altro referente; per patronati e CAF responsabile e operatore) e conversione dei valori di oggi, con il testo originale sempre nella qualifica.

 dopo il 19/10

### Pratiche legate ai contatti E1

 Ogni pratica legata con le chiavi di Mercury alla sua persona (corsista, tirocinante, apprendista, beneficiario), con il codice fiscale dai monitor (3.150 tirocini in Campania, 3.599 apprendistati) e le trattative per il resto. Senza questo passo non nasce nessuna riga da corsi e tirocini.

 novembre · B1 ~2 settimane, B2 ~1 dopo la E1

### Profilo in uscita dai corsi B1 e B2

 Tabelle di riferimento: CP2021, raccordo CP2011 → CP2021, Atlante del Lavoro (settori e ADA), Repertori delle qualificazioni (nazionale e Campania per primi, con lo storico dei codici). Le tre schermate stanno in Operations, come tab nei drawer di attività e pratica (decisione del 2/10): tab «Profilo in uscita» nel drawer dell'attività (qualificazione, cosa certifica il corso, ADA spuntate, CP2021); tab «Esito del corso» nel drawer della pratica del corsista, più l'inserimento degli esiti di tutti gli iscritti dall'attività (si tolgono le ADA non certificate, non se ne aggiungono); tab «Progetto formativo» nel drawer della pratica di tirocinio (un SEP, una o due ADA, attività, CP2021); righe automatiche nei profili a corso superato e a tirocinio concluso. Dopo la E1 e dopo aver trovato i file dei Repertori.

 novembre

### Ruoli persona-azienda, seconda parte C

 Etichette calcolate dalle pratiche: tutor aziendale («tutor in N tirocini attivi», per il limite di 3 tirocinanti), beneficiario, legale rappresentante da visura. Dopo la E1.

 entro il 30/11, poi

### JobSignal Sara

 Entro il 30/11 JobSignal passa alla lettura di Mercury: candidati e abbinamenti sulle chiavi di Mercury, lista delle voci di Mercury al posto delle 339 del DB lavoro, aziende di Mercury al posto di HubSpot. Poi, dopo A e B, il confronto del codice CP2021 dell'offerta con le righe dei profili (identico, stesso gruppo, stessa area), affinato con le ADA, con pesi per esperienza, conferma e recenza; le offerte a testo libero si riconoscono con i sinonimi ISTAT.

 da definire

### Ambiti di docenza albo docenti

 Campo a scelta multipla con le 54 specializzazioni; dopo, le voci «Docente …» escono dalla lista.

 Verde: fatto. Arancio: il passaggio netto. Viola: stime al 02/10, che dipendono dal calendario dei lavori dopo il passaggio netto e possono spostarsi.

## Punti aperti

### Per Daniela

 - 114, entro il 2/11. Chi fa Ricerca e selezione: i nomi degli utenti che confermano le righe proposte (permesso «conferma profili») e che vedono tutti i candidati, e se la tabella «Profili da confermare» nel Commerciale va bene. Non blocca la costruzione: senza risposta solo gli Admin confermano, e chi fa Ricerca e selezione vede i candidati della sua area.Serve alla messa in uso, non alla costruzione.

 - 116, prima del piano della B. Repertori delle qualificazioni: il file dell'Atlante collega già alle ADA le qualificazioni di 21 regioni (Campania compresa). Il file dei repertori serve solo se ci vogliono il livello EQF, il codice ufficiale regionale e lo storico dei codici. Proposta: si parte dal file dell'Atlante, il resto si aggiunge quando arriva.Blocca solo i dati in più della B.

 - 119. JobSignal: soglie e pesi del punteggio, da decidere con Sara.Solo per il confronto di JobSignal.

 - 120. Codici ISTAT: 171 voci hanno un codice «probabile» e 3 codici sono da verificare sul file CP2021 (foglio di Daniela, «Commenti revisione», punto 5). Chi li controlla?Serve quando il codice va in un bando.

### Per il profilo in uscita dai corsi (B)

 - 122. Tirocinio concluso: proposta, alla data di fine del progetto formativo se la pratica non è persa né con rinuncia.Espedito con Operations, prima della B2.

 - 123. Raccordo CP2011 → CP2021 per i codici dei monitor: la tabella di raccordo ISTAT, da scaricare dal sito ISTAT.Espedito, prima della B2.

 - 124. File dei monitor di tirocini e apprendistati: dove sono e in che formato.Daniela, prima della B2.

 - 125. Licenza CC BY-NC 4.0 dell'Atlante per un gestionale interno: uso interno con l'attribuzione a INAPP nelle schermate.Espedito.

 - 127. Qualificazione «completa»: quali ADA porta. Proposta: quelle che la qualificazione copre in tutto o in parte; se non ne copre nessuna, le altre sue ADA. Il corso si può sempre dichiarare «qualificazione completa».Daniela, prima della B1.

 - 126. Aggiornamento dell'Atlante: proposta, nuova estrazione e ricaricamento ogni sei mesi o quando INAPP pubblica cambiamenti.Espedito.

### Per Espedito con Sara

 - 121, prima del task della lettura per JobSignal. Contratto della lettura di Mercury per JobSignal: campi, frequenza, geolocalizzazione, quali candidati, lettura di prova. Proposta nella pagina 3.Non blocca prima del 19/10.

 Fonti: nota di Daniela «Professione, profili di placement e profilo in uscita dai corsi» (01/10), foglio «Mappatura_Professione_Profili_placement_v2», bozze «Mercury, dove si inseriscono le ADA», decisioni di Espedito del 02/10, piano delle professioni approvato l'01/10.

 Il file di conversione per contatto citato nel foglio (conversione-contatti.csv) non serve: Mercury converte direttamente dai valori di HubSpot conservati dall'import, con la tabella delle corrispondenze di Luca.

