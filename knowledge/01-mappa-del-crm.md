
Mappa del CRM

Mercury ERP · CRM, uscita da HubSpot

# Mappa del CRM

Come si collegano gli oggetti del nuovo CRM: persone, organizzazioni, vendita e utenti. È lo schema logico delle relazioni, non l'elenco delle tabelle.

Aggiornata il 06/10/2026, versione 29
Il 3/10 l'import da HubSpot è andato in produzione, un giorno prima del previsto e senza errori: 48.296 aziende, 61.678 partner (878 in fase Partner), 168.542 contatti, 89.954 trattative e 872.509 attività con i loro allegati. Fino al passaggio netto del 19/10 HubSpot resta la fonte: dalla sera del 06/10/2026 un aggiornamento notturno porta in Mercury le sue modifiche, fino all'ultimo giro del 19/10/2026 mattina, e i venditori usano il CRM dal 19/10 (oggi è sull'anteprima).
Novità del 5/10: l'oggetto Eventi , con spec e piano approvati da Espedito, si costruisce dal 6/10 fuori dal merge del 16/10 (sezione Eventi e fasi); nella linea del tempo una linguetta Marketing raccoglierà form compilati, iscrizioni e presenze agli eventi, email di marketing, automazioni e ingressi nelle liste, e un form compilato non creerà più una nota né conterà come ultima attività; i canali Slack dei form si gestiscono da Marketing; la conversione degli 873 «Professionista» è sospesa finché Daniela non indica chi è davvero professionista. Dal 5/10 nella scheda si registrano chiamate e riunioni con l'esito, e la linea del tempo mostra vinte e perse delle trattative.
Novità del 06/10/2026: Google entra nel CRM. Nasce la barra di Mercury dentro Gmail (un componente aggiuntivo di Google Workspace, anche da telefono): dall'email aperta si vedono le persone del CRM, si registra l'email e si segue la conversazione con «Registra e segui», si aggiungono Nota e Task, e mentre si scrive «Registra in Mercury» registra l'email inviata; è in prova sulla casella di Espedito, come il Calendar sul suo calendario. Dalla scheda, «Crea nel calendario» crea la riunione nel Google Calendar, con invitati e link Meet, nel proprio calendario o in quello di un collega del Commerciale, scegliendo la fascia da una griglia di disponibilità; il Calendar comanda su data, ora e invitati e Mercury si riallinea da solo. Arrivano anche la tab Calendario del Commerciale e gli appuntamenti del TMK nel calendario dell'Account. La nota interna delle riunioni resta solo in Mercury. In produzione con il merge del 16/10/2026, in uso dai commerciali dal 19/10/2026 (sezione Gmail e Calendar ). Correzione sul sync notturno da HubSpot, che la versione 26 dava già acceso: dopo l'import del 03/10/2026 non era mai stato acceso; il primo giro si fa a mano la sera del 06/10/2026 (dalle 18:30) e da quella notte gira da solo ogni notte alle 01:30 su GitHub, fino all'ultimo giro del 19/10/2026 mattina.
La seconda pagina racconta professione e profili di placement, la terza è la proposta per Sara Aboudarda su come JobSignal legge da Mercury, la quarta è la guida per chi costruisce i form dei siti. La Mappa e le sue pagine sono il riferimento di base del CRM: ogni pagina di riferimento del CRM entra nella Mappa come pagina in più (regola di Espedito del 2/10). Le tappe fino alla fine del progetto sono nella linea del tempo qui sotto.

Pagina 1 · Mappa del CRM
Pagina 2 · Professione e profili di placement →
Pagina 3 · Mercury per JobSignal →
Pagina 4 · Guida ai form dei siti →

## Linea del tempo

Dall'export di HubSpot al passaggio netto del 19/10 e alla fine del progetto il 30/11.

24/09 Struttura del CRM in produzione

26/09 Export completo da HubSpot

28/09 Prova generale dell'import riuscita

1/10 STOP C chiuso con Daniela; piano delle professioni approvato

2/10 Funzioni dei form e del TMK; MARKOM e TMK abilitati.
Sera: verifiche ok; passo 0 caricato (180 CF, 27 P.IVA); consensi all'import: 9.967 concessi e 7.439 revocati; scritture chiuse al ruolo di sola lettura; piani email partner e placement approvati

3/10 IMPORT FATTO in produzione, un giorno prima del previsto

5-9/10 · oggi Lavoro sui dati veri esiti delle attività importate tradotti; Registra chiamata e riunione accesi; prove dei form, professioni; piano degli Eventi approvato il 5/10; sync notturno: primo giro il 06/10 sera; barra di Gmail in prova sulla casella di Espedito

12-13/10 Prova di Espedito schede, trattative e stile nuovo

entro 16/10 Form principali costruiti da Luca sull'anteprima; builder a MARKOM dopo la produzione; merge: Gmail e Calendar in produzione, installa Pio

notte 18/10 Ultimo delta da HubSpot

lun 19/10 PASSAGGIO NETTO venditori e TMK solo in Mercury; sync spente, form dei siti in linea; barra di Gmail e Calendar in uso

23/10 HubSpot gratuito script HubSpot tolto dai siti

24/10 «Unisci» anche per le aziende

2/11 Bonifica doppioni 5.276 fusioni di Luca applicate

30/11 Fine del progetto «Unisci» anche per partner e studi

Pallino pieno: fatto. Pallino vuoto: in calendario. In arancio le due tappe che cambiano il lavoro di tutti, l'import e il passaggio netto. Le tappe sono in ordine e non in scala; le date future sono quelle dei piani al 06/10/2026 e possono spostarsi di qualche giorno.

## Persone e organizzazioni

Il partner è il centro: sta in uno studio o in una rete, presenta le aziende, fa da riferimento per i patronati.

Persone
Organizzazioni
Vendita e provvigioni
Catalogo
Utenti Mercury
Eventi e marketing
Attività registrate
relazione
solo informativa o in discussione
controllo del registro

guidata da · caporete

fa parte di · se non ha studio

lavora in
con un ruolo

fa parte di

appartiene a
(obbligatorio)

ha presentato · 1 alla volta

consulente di riferimento

referente partner

lavora in · ruolo

referente

Rete guidata da un caporete
Studio associato un solo dominus
Parent persona o società
Partner consulente che presenta
Azienda cliente cliente o aderente
Patronato / CAF organizzazione
Contatto persona, B2B o B2C

Registro identificativi: codice fiscale ed email unici e bloccanti
per i partner, fino alla bonifica del 2/11, solo segnalazione: 247 casi da chiudere (179 email, 68 CF)

Le frecce vanno da chi possiede il legame a chi è collegato. Il tratteggio indica un legame che non ha effetti su trattative e provvigioni.

- Legami tra oggetti solo con le chiavi di Mercury essenziale (decisione di Espedito del 2/10): pratiche, trattative, contatti, aziende, partner, patronati e attività si collegano sempre con gli identificativi di Mercury, mai con gli id di HubSpot né con nomi o testi copiati. La regola vale per tutti gli oggetti di Mercury ERP, non solo per il CRM. Gli id HubSpot servono solo all'import, ai delta notturni (fino al 19/10), alle fusioni (fino al 2/11) e all'export finale (fino al 30/11), poi restano solo come riferimento storico. Dopo il 19/10 le pratiche storiche ricevono le chiavi dell'azienda, del patronato e della persona prese dalla loro trattativa (riempimento una tantum con anteprima), e le schermate di Operations e Finance passano a leggere le chiavi; i campi di testo copiati da HubSpot restano come storico. Per il resto dell'ERP il censimento dei legami fatti con un testo invece che con una chiave si fa in sola lettura quando serve; il passaggio alle chiavi viene dopo il 19/10, insieme alle pratiche.

- Studio o rete, mai entrambi. Se il partner è in uno studio, la sua rete è quella dello studio.

- Un solo livello di rete. Il caporete guida al massimo una rete e non ne attraversa un'altra.

- Il caporete non è un mestiere. È il partner che guida una rete attiva: si ricava dalla rete e compare sulla sua scheda come «Caporete di …». Il suo mestiere è la sua professione, come per qualsiasi partner.

- Le reti si ricostruiscono in Mercury da zero: l'import da HubSpot non assegna reti ai partner e non converte gli studi «Rete …».

- Un partner collegato per azienda, uno alla volta. Da lui dipendono il canale (intermediata o diretta) e la provvigione; chi, quando e perché restano nello storico.

- Consulenti di riferimento (commercialista, consulente del lavoro, sicurezza): solo informativi.

- Ruolo nell'azienda: titolare o legale rappresentante, HR, amministrazione, referente, dipendente, referente patronato. Dall'import arriva il ruolo scritto in HubSpot (Legale Rappresentante, Risorse Umane…), con l'etichetta originale come qualifica. Il legale rappresentante (per esempio dalla visura) è un contatto collegato all'azienda con il ruolo «titolare o legale rappresentante»: si cerca nel registro e, se non c'è, si crea (decisione del 30/09).

- Un contatto può lavorare in più organizzazioni. Quando si aggiungono i contatti di un'azienda si escludono solo quelli già collegati a quell'azienda, e di ogni contatto si vedono le altre aziende.

- Email dei contatti: un contatto ha una email principale e può averne altre, supplementari; tutte passano dal registro e sono uniche. Nell'unione di due contatti «Tieni entrambi» aggiunge l'email come supplementare.

- Email dei partner (decisioni del 2/10): come i contatti, un partner ha una email principale e N supplementari, e da ognuna Mercury lo riconosce (form, fusioni). Una sola è segnata «Amministrazione»: è l'unico indirizzo che usa Finance. Dopo l'import si recuperano le email in più che HubSpot aveva e l'import non ha preso. Un'email tolta o sostituita non riconosce più il partner, con una riga nello storico (P9). Piano approvato il 2/10, lavori dal 7 al 14/10.

- Contatto e partner non si duplicano. Quando un contatto diventa partner viene convertito, portando con sé email, attività e consensi. I professionisti stanno solo tra i partner, in qualunque fase: un contatto non può essere «professionista non partner». Gli 875 contatti «Professionista» di HubSpot sono entrati come contatti (873). La conversione in blocco in partner Suspect è sospesa (decisione di Espedito del 5/10, dopo l'anteprima: professione vuota per 464, «Altro» per 101, molti agronomi e tecnologi alimentari, pochi consulenti del lavoro): Daniela indica chi è davvero professionista e diventa partner; gli altri restano contatti.

- Una P.IVA o un codice fiscale identificano un solo record dello stesso tipo (decisione del 30/09): una P.IVA una sola azienda, un solo partner, un solo studio; un codice fiscale una sola persona. Nel controllo dei doppioni di aziende, studi e patronati blocca solo la P.IVA uguale; email, PEC e telefoni secondari uguali danno solo un avviso (i centralini sono condivisi).

- Partner anche cliente: può essere collegato alla sua azienda cliente, anche se hanno la stessa P.IVA o lo stesso codice fiscale: sono record di tipo diverso, non doppioni.

- Azienda che esiste già ed è di un altro Account: chi la inserisce vede l'avviso «esiste già, è di …» e non la aggiorna né la unisce; la aggiorna chi la vede.

- Unione dei doppioni (decisione del 30/09): fino al passaggio netto del 19/10 i consulenti doppi si fondono in HubSpot con l'app di Luca e la fusione arriva in Mercury; dal 19/10 si fonde solo in Mercury, con un unico motore. Il doppione si archivia, non si cancella. Chi unisce sceglie campo per campo anagrafica, recapiti, indirizzi, dati fiscali e note; fase, stato cliente, canale, rete e caporete si ricalcolano; restano il proprietario e i campi TMK del principale; i consensi si uniscono da soli, finalità per finalità, e la revoca vince. Il principale mostra anche lo storico del doppione («unito in»), che non si riscrive. Due aziende si possono unire anche con P.IVA diverse: vince quella che l'utente sceglie come principale. Pulsante «Unisci» solo per gli Admin: contatti dopo il 19/10, aziende dopo il 24/10, partner e studi dopo il 30/11 (fino ad allora procedura tecnica).

- Professione e aree (decisioni del 30/09, del 1/10 e del 2/10): partner e contatti hanno una professione (una voce) presa da una lista di 446 voci, ognuna con la sua area. Le aree della persona si calcolano da sole. La lista la gestiscono solo gli Admin: una voce tolta si sostituisce con un'altra su tutte le persone che l'avevano. Anche stato occupazionale a tendina, con 12 valori (decisione del 2/10), e «categorie protette (L. 68/99)»; i valori di HubSpot si convertono dopo l'import con la mappatura di Luca; uno stato generico di HubSpot («Occupato», «Studente») cede allo stato preciso della stessa famiglia ricavato dalla professione o dal DB lavoro (per esempio Occupato con professione Imprenditore diventa Imprenditore; decisione del 2/10). La professione sostituisce la vecchia «tipologia» del partner (decisione del 1/10): il campo tipologia sparisce e per passare a Prospect serve la professione. La professione ha lo storico sulla persona (non nelle conversioni in blocco); fino al 19/10 vince il valore di HubSpot. Le categorie protette sono un dato sulla salute: le vedono e le filtrano solo Admin e Manager, e non vanno mai nell'export.

- Profili di placement dopo il 19/10 (decisione del 2/10, nota di Daniela dell'1/10): l'ex «DB lavoro» diventa, solo sui contatti, un elenco di righe con la voce della stessa lista, l'origine (import, form, operatore, corso, tirocinio), lo stato (proposta, attiva, chiusa) e la conferma; è il campo che userà JobSignal, la piattaforma di Sara Aboudarda, che dalla stessa data legge candidati e aziende da Mercury invece che da HubSpot ( terza pagina ). Fino ad allora i valori restano nei dati grezzi di HubSpot. Il profilo in uscita dai corsi sta sull'attività e, a corso superato, diventa una riga dei profili. Regole, tempi e punti aperti nella seconda pagina .

- Indirizzi dall'elenco ufficiale dei comuni (decisione del 30/09): regione, provincia, comune e CAP si scelgono da tendine collegate (110 province); il comune o il CAP riempiono da soli il resto. Per l'estero la regione è «Estero» e al posto della provincia c'è la nazione. I valori scritti prima restano e, se non si riconoscono, compaiono «non in elenco» finché qualcuno non sceglie dalla tendina; dopo l'import una bonifica corregge quelli sicuri e mette gli altri in un elenco da controllare.

- Form dei siti in Mercury dal 19/10 (piano approvato il 30/09): si costruiscono direttamente nel builder di Mercury, in Commerciale sotto Marketing, e si incorporano nelle pagine dei siti. Si accendono lunedì 19/10 mattina, subito dopo l'ultimo delta da HubSpot: fino ad allora restano i form di HubSpot, così un vecchio NO di HubSpot non annulla un SÌ appena dato in Mercury (decisioni del 1/10). L'invio si aggancia al partner o al contatto con la stessa email, altrimenti nasce un contatto Suspect; l'invio compare nella linea del tempo della persona con le risposte e gli eventuali allegati (oggi come nota «Invio form»; con la linguetta Marketing non più come nota), e il proprietario riceve un avviso. I lead di Meta si collegheranno allo stesso ingresso dopo la messa in produzione definitiva del CRM; fino ad allora il team MARKOM li esporta da Meta ogni settimana e li carica in Mercury come contatti Suspect (decisioni del 1/10). Le email automatiche di conferma arrivano dopo, con le automazioni. Il branch del CRM entra in master il 16/10: il merge anticipato è stato scartato (decisione del 2/10). Sugli indirizzi pubblici dei form è già attivo un limite alle richieste ripetute (rate limit).

- Canali Slack dei form (decisioni del 5/10): si gestiscono da Marketing, tab «Canali Slack», per Admin e Marketing. Il webhook dell'app Incoming Webhooks si incolla una volta e poi si vede solo mascherato; un canale non si cancella, si spegne; «Invia un messaggio di prova» controlla il canale. A ogni lead elaborato da un form il messaggio arriva nel canale del form oltre al DM al proprietario; per il file CSV di Meta un solo messaggio di riepilogo per caricamento (il DM per lead resta). Il canale scelto secondo le risposte resta alle automazioni.

- Consensi dei form, come oggi: presa visione dell'informativa, con il link, sempre obbligatoria; marketing, profilazione e cessione a terzi con risposta SI/NO obbligatoria, e si registra anche il NO, con la data dell'invio. Un form dei siti che non rispetta questa regola non si può pubblicare. Mercury tiene il registro dei consensi, una riga per persona e finalità; quando due contatti doppi si uniscono, i consensi si uniscono finalità per finalità. Brevo invia solo a chi ha il consenso marketing e riporta in Mercury disiscrizioni e segnalazioni di spam: la revoca vince sempre. Per i lead di Meta caricati dal file settimanale la data del consenso e dell'attività è quella del caricamento; la data del lead su Meta va nella nota (domanda 110, chiusa il 2/10).

- Consensi importati da HubSpot (decisione del 1/10): «concesso» a chi riceveva marketing, «revocato» a chi si era disiscritto (anche solo da «Marketing Information» o da «Trattamento dei dati personali»); in più contano le risposte già date nei form HubSpot su marketing, profilazione e cessione a terzi, e il NO vince. Un consenso revocato non torna mai concesso da un import.

- Liste: nessuna lista di HubSpot si importa; le liste si rifanno da zero nel CRM (decisione del 1/10).

## Dalla trattativa al pagamento

La trattativa vende un solo prodotto del catalogo, presentata da un partner. Qualcuno la paga; se c'è una persona che riceve il servizio, ce n'è una sola, con il suo ruolo. Da vinta diventa pratica e poi premialità.

vende un prodotto

fa parte di

fa parte di

definisce gli stadi

pagata da

presentata da

determina

persona beneficiaria · una sola, con un ruolo

la segue (proprietario)

vinta: crea la pratica
con l'interruttore · piano 5c

genera

si paga con

propone la provvigione

di un partner

o di una rete

Linea es. FFP, SPLP, ACP
Servizio codice HSnn
Prodotto catalogo Mercury
Chi paga azienda, patronato, persona o ente
Trattativa stadio · importo · sconto
Partner chi ha presentato
Rete e caporete ricavati, non scelti
Account utente Mercury
Persona corsista, tirocinante, PAL…
Pratica quella di oggi
Scheda provvigionale approvata, con regole
Premialità partner + caporete
Ordine di pagamento Finance

Catalogo a sinistra, soggetti al centro, soldi a destra. Il passaggio da vinta a pratica ha un interruttore che si accende il 19/10, quando si spengono tutte le sync da HubSpot (decisione del 1/10); fino ad allora le vinte restano in coda e la pratica nasce all'accensione, con la data vera della vittoria. Il bordo tratteggiato della persona indica una parte in discussione.

- Chi paga proposta 26/09 un'azienda, un patronato, la persona stessa o un ente finanziatore. Si propone da solo (c'è un'azienda: l'azienda; servizio finanziato: l'ente; altrimenti la persona) e si corregge a mano.

- Una persona beneficiaria al massimo, con il suo ruolo: corsista, tirocinante, apprendista, beneficiario PAL, tutor, certificatore. Chi compra un master per sé è insieme chi paga e corsista.

- Rete e caporete non si scelgono: si ricavano dal partner e alla vinta si fotografano con importi, sconto e provvigioni.

- Provvigione proposta, in quest'ordine: regola della scheda sul prodotto, poi sul servizio; poi il valore che si ripete nelle ultime pratiche del partner, prima sul prodotto e poi sul servizio (soglie da decidere con Daniela); infine a mano.

- Lo stadio deve esistere per la linea: le linee SPL hanno solo opportunità, vinta e persa.

- Ogni sconto va approvato da chi ha il potere "sconti": la soglia è vuota (decisione del 29/09).

- Aprire una trattativa porta l'azienda a Prospect: da lì la P.IVA è obbligatoria.

- La vinta crea la pratica e la doppia premialità, del partner e del caporete, rateo per rateo. Da vinta non cambiano più prodotto, linea e cliente, tranne nell'unione dei doppioni, dove le trattative del doppione, vinte comprese, passano al principale.

- La premialità del caporete si paga al caporete, oppure al caporete della rete che ha l'incasso centralizzato; non si converte in incarichi.

- Le premialità già maturate ricevono una volta lo studio attuale del destinatario: si pagano come oggi (decisione del 2/10).

- Trattative importate da HubSpot in sola lettura fino al passaggio netto del 19/10.

## Eventi

Webinar, open day, recruiting day, congressi, fiere, convegni, workshop, graduation e career day, eventi interni. Ogni evento ha un proprietario, i suoi iscritti, i relatori, i costi e i contratti; il form di iscrizione lo collega ai siti.

iscritti · una volta per evento

relatori · uno per persona

lo segue (proprietario)

un form · un evento

costi e compensi

contratti

Iscritti partner e contatti
Relatori partner, risorse del Branch, contatti
Proprietario utente Mercury
Evento bozza → pubblicato → chiuso
Form di iscrizione dal builder del Marketing
Costi voci · fornitore del Branch
Contratti file con lo stato

Tutto con le chiavi di Mercury: partner, contatti, risorse del Branch e fornitori si collegano con il loro identificativo. Il compenso di un relatore è una riga dei costi.

- Prima l'oggetto, poi lo storico (decisioni di Espedito del 5/10): l'oggetto Eventi si costruisce dal 6/10 in una sessione dedicata, fuori dal merge del 16/10, e va in produzione con il primo rilascio dopo il 19/10; i 341 eventi importati da HubSpot si sistemano dopo. Nella prima versione nessuna email agli iscritti: dopo l'iscrizione dal form basta il messaggio a schermo.

- Iscritti: partner e contatti, una persona una volta per evento; si iscrivono dal form, da un file Excel o CSV, a mano o in blocco dalle tabelle di partner e contatti. Stati: iscritto, confermato, presente o assente, annullato. Iscrivere a mano e segnare le presenze lo fa tutta la sezione Commerciale, con l'evento pubblicato; per le presenze c'è una modalità da telefono.

- Chiusura e presenze: chiudendo l'evento chi non ha la presenza diventa assente; riapre solo un Admin. Presente vince su assente, mai il contrario (decisione del 5/10): un file dei partecipanti caricato dopo la riapertura segna presenti anche gli assenti.

- Capienza: a mano e da file si può andare oltre, con un avviso. Dal form, a posti finiti la pagina dice «posti esauriti»; se l'ultimo posto se ne va tra l'invio e l'elaborazione, l'iscrizione si crea comunque, oltre la capienza, e il proprietario riceve l'avviso «capienza superata»: niente lista d'attesa (decisione del 5/10).

- Form di iscrizione: un form per evento e un evento per form; un form legato a un evento non si elimina. Con l'evento in bozza, chiuso o annullato il form non accetta iscrizioni; se l'evento si chiude o si annulla tra l'invio e l'elaborazione (e sempre per Meta e webhook) l'iscrizione non nasce e il proprietario riceve un avviso. Una persona con l'iscrizione annullata che rimanda il form torna «iscritto», senza doppioni. Il link del webinar non si dà mai dal form , né nella pagina né nel messaggio dopo l'invio: resta nella scheda dell'evento e lo manda chi organizza (decisione del 5/10).

- Iscritti da file: anteprima prima di scrivere. Le persone già presenti, riconosciute per email o codice fiscale, non si toccano, proprietario compreso: ricevono solo l'iscrizione. Le nuove nascono contatti Suspect con proprietario il proprietario dell'evento (decisione del 5/10). Il consenso al marketing viene solo dalla sua colonna: il NO vince e una revoca non torna concessa. Il caricamento non scrive nessuna nota: l'iscrizione si vede nella linguetta Marketing della persona, letta dall'evento senza copie, e non conta come «Ultima attività» (decisione del 6/10).

- Relatori: partner, risorse del Branch (collaboratori esterni e colleghi) o contatti; uno sconosciuto si crea prima come contatto. Il compenso è una riga dei costi, voce «Relatori».

- Costi e contratti: voci, fornitore del Branch, importo previsto ed effettivo, stato; nessun legame con Finance nella prima versione. Contratti e allegati sono file con il solo stato, aperti con un link temporaneo. Costi, compensi e contratti li vedono il proprietario, i Manager e gli Admin; lo «speso nell'anno» nella tabella solo Admin e Manager.

- Chi fa cosa: gli eventi li vede tutta la sezione Commerciale; li creano Marketing, Manager e Admin; li modificano, chiudono e annullano il proprietario, il Marketing e gli Admin. Degli iscritti di un altro Account si vedono nome, cognome, tipo, stato, fonte e data, senza recapiti, fase, Account e nota (decisione del 5/10). Elimina solo un Admin e solo un evento senza iscritti, contratti e allegati ai costi: altrimenti si annulla.

- Nella vita della persona: nella scheda di partner e contatti il gruppo Eventi (iscrizioni e «Relatore a …»); nella linea del tempo, sotto la linguetta Marketing, una voce sola per evento che segue lo stato dell'iscrizione (da iscritto a presente). L'iscrizione arrivata da un form è la stessa voce, «Iscritto all'evento dal form», con le risposte dentro (decisioni del 5/10). Le iscrizioni importate da HubSpot su eventi senza data non compaiono nella linea del tempo finché l'evento non riceve una data, con la sistemazione dello storico; nella tab Iscritti dell'evento si vedono sempre (decisione del 6/10). Nessun cambio di fase automatico.

## Gmail e Calendar

Dal 19/10/2026 la barra di Mercury in Gmail registra le email con le persone del CRM, e dalla scheda le riunioni si creano nel Google Calendar. Mercury lavora solo sulle caselle del dominio aziendale, sempre come l'utente.

Registra e segui · Ccn
in automatico, se scelto

Crea nel calendario

si riallinea ogni 15 minuti;
eventi registrati in automatico

trattative spuntate

persone e organizzazioni note

invitati noti e organizzazioni

Gmail con la barra di Mercury
Google Calendar comanda data, ora e invitati
Email registrata una sola attività per email
Riunione nota interna solo in Mercury
Trattative aperte, quelle spuntate
Persone e organizzazioni anche di un altro Account

Delega di dominio: Mercury legge le caselle e i calendari del dominio aziendale, sempre come l'utente
solo per gli utenti non cessati con la sezione Commerciale · gli indirizzi del dominio sono interni e non si agganciano a nulla

Google a sinistra, attività di Mercury al centro, agganci a destra. In grigio tratteggiato i servizi di Google, fuori da Mercury. Il Calendar comanda: in Mercury, dopo la creazione, di una riunione si cambiano solo esito e note.

### Base comune

- Come Mercury legge le caselle (delega di dominio, autorizzata da Pio il 29/09/2026): Mercury legge le email e i calendari, e scrive gli eventi nel Calendar, solo delle caselle del dominio aziendale (oggi timevision.it; un altro dominio si aggiunge cambiando un parametro) e solo per gli utenti non cessati che hanno la sezione Commerciale. Agisce sempre come quell'utente: ciò che vede e registra è ciò che lui vedrebbe in Mercury. Se la casella di un utente non si può leggere (per esempio è sospesa), Mercury lo salta, la barra dice di avvisare l'amministratore e l'errore compare nella tab «Google e CRM» del suo profilo.

- Chi è «interno»: un indirizzo del dominio aziendale è interno: non si cerca mai tra contatti, partner e organizzazioni del CRM e non si aggancia a nulla. Un'email tra soli colleghi non entra nel CRM (la barra dice «Nessuna persona del CRM in questa email»), e una riunione registrata in automatico ha bisogno di almeno un invitato esterno noto a Mercury.

- Tab «Google e CRM» del profilo (per chi ha la sezione Commerciale): due interruttori. «Registra in automatico tutte le mie email con persone del CRM» è spento di partenza (restano solo le email scelte dalla barra); «Registra in automatico le riunioni con persone del CRM» è acceso di partenza. Sotto ognuno si vedono l'ultimo controllo e quante ne sono state registrate, e in rosso l'eventuale errore. Le registrazioni automatiche si accendono per tutti lunedì 19/10/2026, con il passaggio a Mercury, e le scelte fatte prima valgono da allora.

- Cosa guarda Mercury nelle caselle (da dire ai commerciali con l'annuncio del 19/10/2026): ogni 5 minuti Mercury controlla le caselle di tutti gli utenti del Commerciale per trovare le conversazioni seguite e le email inviate con il suo indirizzo in Ccn. Della cronologia guarda solo gli identificativi dei messaggi e le etichette, dei messaggi inviati solo i destinatari, e non salva nulla di ciò che non registra.

- Quando partono: la barra di Gmail è in prova sulla casella di Espedito dal 06/10/2026; il Calendar (tab Calendario e «Crea nel calendario») è in prova sull'anteprima del branch, sul calendario di Espedito, dal 06/10/2026; «Nel calendario di», griglia e nota interna arrivano dal 07/10/2026. Il codice va in produzione con il merge del 16/10/2026, poi l'amministratore del dominio (Pio) installa la barra per tutta l'organizzazione (può richiedere fino a 24 ore). I commerciali usano la barra e il Calendar dal 19/10/2026, con il passaggio netto: la sezione Commerciale non è in produzione prima del merge.

### Barra di Gmail

- La barra di Mercury in Gmail (decisione di Espedito del 05/10/2026): è un componente aggiuntivo di Google Workspace, nella barra laterale di Gmail, anche da telefono, installato dall'amministratore del dominio per tutta l'organizzazione. Lo usa chi ha la sezione Commerciale e la cui email di Google è quella scritta in Mercury; per tutti gli altri la barra dice «Il CRM di Mercury non è attivo per il tuo utente» e non mostra altro.

- Cosa mostra su un'email aperta: una riga sulla conversazione («Non registrata», «Seguita da te dal 06/10/2026 · 4 email registrate», oppure «Registrata da» un collega) e una sezione per ogni persona del CRM tra mittente, destinatari e Cc, prima il mittente: avatar, nome, se è contatto o partner con la fase, Account, email e telefono, le organizzazioni attuali (aziende e patronati col ruolo, o lo studio), le trattative aperte, le ultime tre attività e «Apri in Mercury» per la scheda completa. Le organizzazioni trovate per indirizzo email compaiono a parte. Se non c'è nessuna persona del CRM: «Nessuna persona del CRM in questa email».

- Persone di un altro Account (decisione di Espedito del 05/10/2026): nella barra si vedono solo nome e cognome con il lucchetto «di un altro Account» e il nome dell'Account, senza recapiti, trattative, Nota né Task. L'email però si registra lo stesso sulla persona, e l'attività la vede chi vede la persona.

- Trattative nella barra (decisioni di Espedito del 05/10/2026 e del 06/10/2026): sotto ogni persona compaiono le sue trattative aperte (né vinte né perse) che l'utente vede, ognuna con una casella; è già spuntata la più recente, quella modificata per ultima. Accanto al nome si vede lo stadio fino al 18/10/2026 e la data dell'ultima modifica dal 19/10/2026. Le trattative spuntate diventano agganci dell'email registrata.

- Registra e segui (decisione di Espedito del 05/10/2026): registra la conversazione dell'email aperta, subito i messaggi già presenti, dal più recente (se sono molti, gli altri entro qualche minuto), e da lì in poi le risposte in automatico, finché l'utente non preme «Smetti di seguire». Le email già registrate restano; seguire di nuovo la conversazione la riattiva. Una conversazione già registrata da un collega si può seguire lo stesso.

- A cosa si aggancia un'email registrata: a tutte le persone note tra mittente, destinatari e Cc, anche a quelle che l'utente non vede; alle loro organizzazioni (aziende e patronati attuali del contatto, studio del partner, organizzazioni trovate per indirizzo); alle trattative spuntate. Le risposte della conversazione seguita prendono gli stessi agganci, e una trattativa scelta e poi chiusa resta agganciata, perché la conversazione parla di lei. Un messaggio senza nessuna persona né organizzazione del CRM non si registra.

- Una email, una sola attività: se due colleghi registrano la stessa email, in Mercury resta una sola attività; la seconda registrazione aggiunge solo gli agganci che mancavano.

- Testo e allegati (decisione di Espedito del 05/10/2026), come lo storico importato da HubSpot: in Mercury restano il testo e l'HTML dell'email; gli allegati non si copiano e restano nella casella Gmail, che non si cancella mai; nella linea del tempo si vedono il testo e, di ogni allegato, nome e dimensione.

- Nota e Task dalla barra (decisione di Espedito del 05/10/2026): sulle persone che l'utente vede si può scrivere una Nota (il testo) o un Task di richiamo (titolo, scadenza con «domani» di partenza, priorità media, assegnato a chi lo crea). Si registrano a nome dell'utente e con la visibilità di sempre, come dalla scheda.

- Persone sconosciute (decisione di Espedito del 05/10/2026): per ogni indirizzo che Mercury non conosce la barra offre «Nuovo contatto» e «Nuovo partner», che aprono Mercury con il modulo di creazione già compilato (nome, cognome, email). Regole, controllo dei doppioni e tendine restano quelli di Mercury. Tornato in Gmail, l'utente preme «Aggiorna».

- «Registra in Mercury» mentre si scrive (decisione di Espedito del 05/10/2026): nella finestra di scrittura il pulsante aggiunge in Ccn l'indirizzo di Mercury (registra-crm@timevision.it, un gruppo senza membri: i messaggi non arrivano a nessuno) e conserva i Ccn che l'utente aveva già messo. Dopo l'invio Mercury registra l'email e la conversazione diventa seguita; le trattative di partenza sono la più recente aperta e visibile di ogni persona. Chi non ha la barra può scrivere a mano quell'indirizzo in Ccn.

- Registrazione automatica delle email, per chi la sceglie (piano 4): se l'utente accende l'interruttore nel profilo, ogni email con almeno una persona o organizzazione del CRM entra nella scheda; parte da «adesso», senza recuperare il passato. Le circolari con più di 50 destinatari la registrazione automatica le salta; dalla barra, dal Ccn e nelle conversazioni seguite si registrano comunque, perché le ha scelte l'utente.

- Cosa non c'è: Mercury non traccia le aperture e i clic delle email 1:1 (HubSpot lo faceva) e non avvisa in tempo reale, perché controlla le caselle ogni 5 minuti. L'invio di un'email dalla scheda («Scrivi email») non cambia: resta quello del piano 4.

### Calendar e riunioni

- Il Calendar comanda (decisione di Espedito del 05/10/2026): data, ora, durata, invitati e link Meet si cambiano nel Google Calendar, e Mercury si riallinea da solo ogni 15 minuti, con un controllo completo dei prossimi 30 giorni ogni notte. Le persone nuove invitate si agganciano alla riunione. In Mercury, dopo la creazione, si cambiano solo esito e note. Una riunione spostata nel Calendar cambia data anche in Mercury e l'esito resta «Pianificata».

- Riunione cancellata nel Calendar (decisione di Espedito del 05/10/2026): resta nella linea del tempo, barrata e in grigio, con «Annullata nel calendario il» e la data. Non è un esito: resta la decisione del 02/10/2026 che non c'è l'esito «Annullata». Se l'evento viene ripristinato nel Calendar, il segno sparisce.

- «Crea nel calendario», dalla scheda (decisioni di Espedito del 02/10/2026 e del 05/10/2026): è il secondo modo della tab Riunione del modulo Registra, accanto a «Registra una riunione fatta», in tutte le schede che hanno il modulo (contatto, partner, azienda, studio, patronato, trattativa) e nella vista rapida. Si compilano titolo (obbligatorio), calendario, fascia, tipo (in presenza, con il luogo, oppure videochiamata, con il link Meet creato da Google), invitati e descrizione; l'esito è «Pianificata» e tutti gli invitati ricevono l'invito da Google. Gli invitati sono la persona della scheda (già scelta; per azienda, studio, patronato e trattativa le persone collegate, da spuntare), i colleghi e gli indirizzi scritti a mano. Nella linea del tempo la riunione compare con «Entra in Meet» e «Apri nel Calendar». «Apri nel Calendar» porta all'evento il proprietario del calendario e gli invitati; per gli altri la riga dice che l'evento è nel calendario di quel collega e lo apre solo chi è invitato. Nel dettaglio della riunione, alla voce «Invitati», compaiono le persone del CRM con il nome (con il link alla scheda se la vedi; delle persone di un altro Account solo il nome) e «e altri N invitati»; l'elenco completo è nel Calendar (decisioni di Espedito del 06/10/2026).

- «Nel calendario di» (decisioni di Espedito del 06/10/2026): io o un collega del Commerciale. Si parte dal calendario del proprietario della scheda (contatto, trattativa, azienda, studio e patronato: il proprietario; partner: l'Account); si parte da «Io» se il proprietario è chi fissa la riunione o non è tra i colleghi del Commerciale. La scelta si cambia sempre. La riunione per un collega nasce nel calendario del collega, che la organizza: la persona della scheda è invitata, chi la fissa è invitato e la descrizione dice «Fissato da» seguito dal nome. La può fissare tutto il Commerciale per qualunque collega del Commerciale. Se il collega non vede la scheda in Mercury non c'è nessun controllo in più: la riunione è sua e arriva nel suo calendario. Nella linea del tempo è una riunione del collega, registrata da chi l'ha fissata.

- Griglia delle disponibilità, sempre nel modulo (decisione di Espedito del 06/10/2026): data e ora si scelgono cliccando una fascia libera, non si scrivono. La griglia mostra 5 giorni per volta sui prossimi 60 giorni lavorativi (12 pagine, da domani, dalle 9 alle 18, a passi di 30 minuti; decisione del 6/10), con le frecce, sul calendario scelto, anche quando è il proprio. La durata si sceglie a pillole: 30 minuti, 1 ora (di partenza), 1 ora e mezza, 2 ore. «Altra data o ora» serve per una riunione di oggi, dopo le 18 o oltre i 60 giorni lavorativi, e per le altre durate (15 e 45 minuti, 3 e 4 ore). Finché non c'è una data e un'ora scelte, «Crea nel calendario» resta spento.

- Cosa si vede dei colleghi (decisione di Espedito del 06/10/2026): nella griglia dei colleghi si vede solo libero o occupato; i titoli degli impegni li vedono solo Admin, Manager e TMK (operatori e responsabile), e ognuno per il proprio calendario. Gli eventi privati degli altri restano «Occupato» per tutti. I dati dei colleghi che passano tra Mercury, il browser e Google non portano il codice fiscale: la chiave è la mail aziendale. Se il calendario scelto non si può leggere (casella fuori dominio, delega, Google che non risponde), al posto della griglia compare «Non riesco a leggere il calendario di …» con «Riprova» e i campi di data, ora e durata a mano: l'invito parte lo stesso, senza il controllo degli impegni.

- Nota interna delle riunioni (decisione di Espedito del 06/10/2026), in «Crea nel calendario» e in «Registra una riunione fatta»: resta solo in Mercury, mai nell'invito Google né nelle email che Google manda agli invitati; il Calendar che si riallinea non la tocca. La vede chi vede l'attività, perché è «interna» rispetto agli invitati esterni, non tra colleghi (non c'entra con gli indirizzi «interni» di sopra). Nella linea del tempo ha l'etichetta «Interna» con il lucchetto, distinta dalla descrizione; al massimo 2.000 caratteri. La descrizione invece va nell'invito e la leggono tutti gli invitati. In «Registra una riunione fatta» a Google non va niente: anche le note restano in Mercury.

- Registrazione automatica degli eventi del Calendar (decisione 37, Espedito 05/10/2026): acceso di partenza, ciascuno lo spegne dal profilo. Si registra un evento che l'utente organizza o ha accettato (anche se l'invito è partito dal partner), con almeno un invitato esterno noto a Mercury; si escludono gli eventi privati o riservati, di tutto il giorno e di tipo fuori sede, concentrazione o luogo di lavoro. Valgono gli eventi che cominciano dal 19/10/2026, per non doppiarsi con le riunioni che arrivano ancora da HubSpot. Nasce una riunione «Pianificata», in videochiamata se c'è un link di videoconferenza e altrimenti in presenza, agganciata alle persone note e alle loro organizzazioni. Lo stesso evento nel calendario di due colleghi è una sola attività: il secondo collega aggiunge solo gli agganci.

- Tab «Calendario» del Commerciale (decisioni di Espedito del 05/10/2026 e del 06/10/2026): viste giorno, settimana (di partenza) e mese; ognuno vede il proprio Google Calendar. Admin, Manager e TMK hanno in più la tendina degli Account e vedono i calendari di tutti, titoli compresi, perché al TMK serve per capire la disponibilità degli Account senza andare in Calendar: nella vista giorno fino a 5 Account affiancati, in settimana e mese sovrapposti. L'utente base vede solo il proprio calendario; le disponibilità dei colleghi le vede solo nel modulo. Gli eventi privati degli altri compaiono come «Occupato»; le riunioni del CRM hanno il segno di Mercury e il clic apre la scheda se chi guarda la vede; gli eventi annullati non compaiono. Gli eventi si leggono dal vivo da Google: nessun evento degli altri si salva in Mercury. La tab non crea riunioni.

- Appuntamento del TMK (D-T5, dal 19/10/2026): con l'esito «Appuntamento» l'operatore sceglie la fascia libera dell'Account proposto, con la stessa griglia (10 giorni lavorativi affiancati, con gli impegni dell'Account). Mercury registra come oggi l'esito e la riunione, poi crea l'evento nel Calendar dell'Account: organizzatore l'Account, partner invitato con la sua email principale, descrizione con la nota di qualifica e «Fissato da» l'operatore (TMK), Meet se videochiamata, il numero del partner come luogo se telefono. Se il Calendar non risponde l'esito resta registrato e l'operatore vede «Evento non creato nel calendario dell'Account» con «Riprova»; un partner senza email dà un evento senza invitato.

## Chi lavora e cosa vede

Gli utenti Mercury seguono gli oggetti come Account, operatori TMK o proprietari. Cosa vedono dipende da area e ruolo; alcune azioni richiedono un potere.

diventa, all'import

stabilisce cosa vede

può avere

è Account o operatore

è Account titolare

è proprietario

Owner HubSpot 260, di cui 152 abbinati
Visibilità tutto · team · proprio
Utente Mercury con area e ruolo
Poteri sconti · schede · fasi
Partner Account e operatore TMK
Studio e rete Account titolare
Altri oggetti aziende, contatti, trattative

I 22 owner che non vanno in ERP (esterni, caselle condivise, ex dipendenti) restano senza utente: i loro record passano a Daniela Sabatino (decisione del 29/09). All'import l'Account viene dall'owner di HubSpot; il campo HubSpot «referente commerciale» non si usa più (decisione del 1/10).

- Visibilità su quattro oggetti (contatti, partner, aziende, trattative), per area e ruolo, con eccezioni per singolo utente. I Manager vedono il loro hub; chi ha la sezione ma nessuna area vede solo i propri record.

- Record di altri Account nelle schede collegate: si vedono nome, cognome e ruolo, non recapiti e importi. Nella scheda dell'azienda le pratiche nate da trattative di un altro Account si vedono senza importi, stato, date e trattativa.

- Trattative nella linea del tempo (decisione del 1/10): nelle schede di partner, aziende, contatti e patronati compaiono la vittoria e la perdita delle trattative collegate (non in quella dello studio, a cui le trattative non si collegano); i cambi di stadio solo nella scheda della trattativa. Le trattative di un altro Account compaiono al loro posto come una riga con il lucchetto «Trattativa di un altro Account», senza evento, giorno né link. Accesa il 5/10.

- Linguetta Marketing nella linea del tempo (decisioni del 5/10): raccoglie le compilazioni dei form, le iscrizioni e le presenze agli eventi, le email di marketing, le automazioni e gli ingressi nelle liste statiche, letti dagli oggetti stessi senza copie. Un form compilato non crea più una nota e non conta come ultima attività : un lead arrivato dal form e mai chiamato resta «mai contattato». Iscrizione e presenza allo stesso evento sono una voce sola che cambia stato; un'iscrizione arrivata da un form è una voce sola con le risposte dentro. Pillola e voci in ciano, con l'icona di ogni oggetto. Le viste per form ed eventi arrivano prima del 19/10, quelle per email, automazioni e liste con i piani 3 e 4.

- Attività legate solo a una pratica o a un evento (decisione del 30/09), per esempio una nota su una pratica con i suoi allegati: tra chi ha la sezione Commerciale, quella della pratica la vedono Operations, Finance e chi vede il partner o la trattativa della pratica; quella dell'evento la vede chiunque abbia la sezione. Se l'attività è legata anche a una persona o a un'organizzazione valgono le regole di quei record.

- Documenti dell'azienda: sono gli allegati delle sue attività, con la stessa visibilità delle attività. Una visura si carica come nota «Visura caricata» con il PDF allegato (decisione del 30/09).

- Registra, nella scheda (decisioni del 2/10): la chiamata si registra a mano con data e ora e direzione (in uscita o in entrata) obbligatorie, esito obbligatorio tra Connessa, Nessuna risposta, Numero non attivo e Numero errato, note facoltative, senza durata. La riunione si registra a mano («Registra una riunione fatta») oppure si crea nel Google Calendar («Crea nel calendario», dal 19/10/2026; sezione Gmail e Calendar ): esiti Pianificata, Completata, Ripianificata e Mancata presentazione, con «cambia esito»; tipo in presenza o in videocall; durata di partenza un'ora (in «Crea nel calendario» a pillole di 30 minuti, 1 ora, 1 ora e mezza e 2 ore; le altre durate con «Altra data o ora»). Non c'è l'esito «Annullata». Una riunione cancellata nel Calendar resta nella linea del tempo come «Annullata nel calendario il …»: non è un esito. Accesi il 5/10; le riunioni fissate dal TMK nascono Pianificata e dal 19/10/2026 con l'evento nel Calendar dell'Account. Esiti importati da HubSpot (decisioni del 2/10 e del 5/10): Connesso, Nessuna risposta, Numero non attivo e Numero errato diventano gli esiti di Mercury con lo stesso senso; Occupato e Lasciato messaggio in segreteria diventano Nessuna risposta; le riunioni Completed, Rescheduled, No show e Scheduled diventano Completata, Ripianificata, Mancata presentazione e Pianificata. Lasciato messaggio in tempo reale e Annullata restano con il nome di HubSpot. La nota interna delle riunioni resta solo in Mercury (sezione Gmail e Calendar ).

- Colonne ed export Excel: si possono scegliere tutti i campi di ogni oggetto tranne IBAN e dati di nascita; se serviranno, si daranno solo con un potere dedicato (decisione del 30/09).

- Marketing (form e invii dei siti): Admin e aree MARKOM, IT e INNOVAZIONE, sempre con la sezione Commerciale.

- Poteri a tempo, assegnati a persone con data di inizio e fine: sconti, approvazione delle schede provvigionali, forzatura delle fasi. Sconti e approvazione delle schede vanno solo agli Admin, come la forzatura delle fasi (decisione del 1/10).

- TMK (decisioni del 1/10 e del 2/10): operatori Messina, Loporto, Inserra, Poto e Cassese; responsabile Giancarla Cassese, manager. Fino al 19/10 la coda salta i partner ancora gestiti in HubSpot; ognuno prenota solo le righe libere o le sue (una riga di un altro operatore va prima riassegnata, anche dal responsabile). L'esito «non contattare» revoca tutti e tre i consensi (marketing, profilazione e cessione a terzi); un consenso già revocato tiene la data della sua revoca (domanda 109, chiusa il 2/10). Regole applicate il 2/10. Dal 19/10/2026 l'esito «Appuntamento» sceglie la fascia libera dell'Account e crea l'evento nel suo Google Calendar (sezione Gmail e Calendar ).

- I dati CRM dei partner (fase, Account, operatore TMK, dati di nascita, IBAN e gli altri campi del CRM) si cambiano solo dalle schermate del CRM e dall'import, mai da altre parti di Mercury.

- Fuori dalla sezione Commerciale (Personale, Dashboard, portafoglio del lunedì) compaiono solo i partner nati in Mercury o in fase Partner. Suspect, lead, prospect ed ex partner importati da HubSpot si vedono solo nel CRM; tra i membri di uno studio si vedono tutti.

## Le fasi

Ogni oggetto ha il suo percorso. Le fasi avanzano da sole con gli eventi; oggi non tornano mai indietro in automatico (una proposta del 26/09 lo cambierebbe per le pratiche perse).

### Contatto

suspect → lead → prospect → cliente · etichetta beneficiario

Lead con un interesse manifestato, prospect con una trattativa aperta. Chi arriva da un form dei siti e non è già in Mercury nasce Suspect. Cliente, proposta del 26/09: quando parte la pratica e solo se paga lei. Chi riceve un servizio pagato da un'azienda o da un ente resta nella sua fase con l'etichetta Beneficiario e lo storico delle pratiche.

### Partner

suspect → lead → prospect → partner → ex partner

Lead con un Account assegnato, prospect con un appuntamento, partner con dati fiscali e scheda provvigionale approvata. Vale anche all'import: chi ha pratiche ma né codice fiscale né P.IVA entra Prospect (494 all'import del 3/10, con una riga nel report) e diventa Partner quando arrivano i dati.

### Azienda e patronato

suspect → lead → prospect → aderente → cliente

Aderente con la prima pratica ACP avviata, cliente con la prima pratica avviata non ACP; ogni notte attiva o inattiva in base all'ultima pratica (12 mesi). La linea della pratica viene dal suo prodotto del catalogo, altrimenti dal nome del prodotto e poi dalla trattativa; una pratica la cui linea resta sconosciuta non decide tra Aderente e Cliente, e se è l'unica conta come Cliente (decisione del 1/10). Non contano come avviate le pratiche NON ANCORA GESTITE, NON IDONEE, perse o con rinuncia (progetto o selezione persa, errore tecnico, rinuncia al corso, rinuncia con acconto, criticità per rinuncia); quando una pratica parte, l'organizzazione sale la notte dopo. Senza P.IVA un'azienda non passa ad Aderente o Cliente: resta nella fase che aveva e la sua scheda mostra un avviso con il motivo; quando arriva la P.IVA passa da sola. I patronati importati da HubSpot prendono la fase dalle loro pratiche con le stesse regole delle aziende (decisioni del 1/10).

### Trattativa

opportunità → elaborare preventivo → preventivo pronto → preventivo inviato → in attesa di autorizzazione → vinta persa

Le linee SPL usano solo opportunità, vinta e persa. Una persa si può riaprire.

### Evento

bozza → pubblicato → chiuso · annullato

In bozza si prepara e non si iscrive nessuno. Pubblicato: form, iscrizioni a mano, file e presenze. Chiuso: chi non ha la presenza diventa assente e non si iscrive più nessuno; riapre solo un Admin. Annullato da bozza o pubblicato: gli iscritti restano. Gli eventi interni non hanno iscritti né form.

### Iscrizione

iscritto → confermato → presente assente · annullato

Dal form e dal file nasce iscritto (dal file anche con lo stato scritto nel file). Non torna mai indietro da sola: presente vince su assente, mai il contrario (decisione del 5/10).

Tornare indietro è una forzatura: serve il potere "forza fase", degli Admin (concesso utente per utente dopo l'import), e il motivo resta nello storico. Si può forzare anche su più record insieme dalle righe selezionate della tabella (al massimo 500), con lo stesso motivo per tutti: i controlli valgono record per record e l'esito si vede riga per riga (decisione del 30/09).

### Punti aperti

- Persone clienti o beneficiarie (D-C2): campo "chi paga" ed etichetta Beneficiario, sui quattro casi descritti da Andrea. Daniela, Andrea

- Pratica persa: la fase torna indietro da sola? Proposta: ricalcolo (resta Cliente se c'è un'altra pratica avviata, altrimenti Prospect o Aderente). Daniela

- EPAR (ente bilaterale): servizio per le aziende oggi non tracciato, da aggiungere al catalogo; conta per Aderente o Cliente? Andrea

- Chi può fare ciascuna forzatura della fase (foglio D-G1). Daniela

- Passo 0, dopo l'import: i codici fiscali e le P.IVA ritrovati sono stati caricati il 2/10 e all'import del 3/10 i partner in fase Partner sono 878; restano da decidere chi completa gli altri 494 e come, i 64 valori da controllare e i 419 partner con pratiche che restano Suspect. Espedito, Daniela, prima del passaggio netto

- Soglie della statistica della provvigione (quante volte, che quota). Daniela

- Incasso centralizzato della rete (il caporete incassa per i membri): per quali reti e chi lo attiva. Nessuna rete si può attivare finché non c'è la risposta. Daniela, piano 5c

- Provvigione zero anche al caporete quando il cliente è lo studio del partner. Daniela, piano 5b

- Premialità del partner quando cambia il partner della pratica: resta a chi era scritto o segue il partner nuovo? Oggi segue il partner attuale. Espedito, Finance

- Contatti «Professionista» di HubSpot (873 entrati come contatti, conversione sospesa il 5/10): quali sono davvero professionisti da far diventare partner, anche per gruppi (per esempio agronomi e tecnologi alimentari); gli altri restano contatti. Foglio con i 72 casi da decidere in Drive. Daniela, entro il 9/10

- Consensi importati (domanda 128): all'import del 3/10 risulta «concesso» anche chi era contatto di marketing in HubSpot il 26/09, uno stato che HubSpot spegne a fine mese per la fatturazione; resta così? Da valutare anche con il responsabile della privacy. Espedito, entro il 9/10

- Unione di due aziende con P.IVA diverse: le pratiche del doppione, legate alla sua P.IVA, passano all'azienda che vince? E la P.IVA scritta sulla pratica, che indica chi è fatturato, cambia? Espedito, Finance, prima del 24/10

- Caporete che guida una rete senza esserne membro: la trattativa oggi non fotografa né rete né caporete; proposta: la rete è quella che guida. Espedito, Daniela, prima del 13/10

- Professione, profili di placement e profilo in uscita dai corsi: per Daniela 114 (chi conferma le righe proposte e i nomi di chi fa Ricerca e selezione, entro il 2/11), 116 (Repertori, ridotta a EQF e codici regionali), 119 (soglie e pesi di JobSignal), 120 (codici ISTAT da controllare), 124 (file dei monitor) e 127 (qualificazione «completa», prima della B1); per Espedito 121 con Sara Aboudarda (lettura per JobSignal, entro il 28/10), 122 (tirocinio concluso), 123 (raccordo CP2011 → CP2021), 125 (licenza dell'Atlante) e 126 (aggiornamento dell'Atlante). Le domande 113, 115, 117 e 118 sono chiuse dal 2/10. Dettagli nella seconda pagina . Daniela, Espedito con Sara

- Form di MercuryPro (domande 111 e 112): come arrivano in Mercury i due form dell'app MercuryPro (invio al collegamento dei form di Mercury, proposto, o lettura diretta delle tabelle dell'ERP) e se un'email sconosciuta del form «Suite Professionale per Consulenti del Lavoro» crea un contatto Suspect. Rinviate da Espedito il 2/10 al team di MercuryPro e Piattaforma servizi. Espedito con il suo team, senza scadenza

Fonte: spec «CRM in Mercury: uscita da HubSpot» del 24/09/2026, piano 1 in produzione dallo stesso giorno, export del 26/09, proposte discusse con Daniela e Andrea il 26/09, commenti di Daniela del 25/09, decisioni di Espedito del 27-30/09 (anche sulla pagina di Daniela del 30/09: unione dei doppioni e le 12 questioni D1-D12) e del 1/10 (STOP C, stile, professioni), nota di Daniela dell'1/10 su professione e placement e decisioni di Espedito del 2/10, piani 3a, 5a, 5b, 5c, 5d e 7a, tendine geografiche, piano dello stile e piano delle professioni (approvato il 1/10), import del 3/10 e decisioni di Espedito del 3-5/10 (consensi all'import, esiti delle attività importate, contatti «Professionista»), spec e piano dell'oggetto Eventi del 5/10 con le decisioni di Espedito sul piano, canali Slack dei form e linguetta Marketing (decisioni del 5/10), spec Gmail e Calendar del 06/10/2026 con le decisioni di Espedito del 05/10/2026 e del 06/10/2026 (barra di Gmail, riunioni nel Calendar, riunione nel calendario di un collega, nota interna, griglia di 60 giorni lavorativi nel modulo Registra, calendario di partenza del proprietario, invitati e «Apri nel Calendar»; Eventi: iscritti da file senza nota, iscrizioni importate di eventi senza data nascoste nella linea del tempo).

