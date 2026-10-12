Mappa del CRM

Mercury ERP · CRM, uscita da HubSpot

# Mappa del CRM

Come si collegano gli oggetti del nuovo CRM: persone, organizzazioni, vendita e utenti. È lo schema logico delle relazioni, non l'elenco delle tabelle.

Aggiornata il 09/10/2026, versione 35

Il 3/10 l'import da HubSpot è andato in produzione, un giorno prima del previsto e senza errori: 48.296 aziende, 61.678 partner (878 in fase Partner), 168.542 contatti, 89.954 trattative e 872.509 attività con i loro allegati. Fino al passaggio netto del 19/10 HubSpot resta la fonte: dalla sera del 06/10/2026 un aggiornamento notturno porta in Mercury le sue modifiche, fino all'ultimo giro del 19/10/2026 mattina, e i venditori usano il CRM dal 19/10 (oggi è sull'anteprima).

Novità del 5/10: l'oggetto Eventi , con spec e piano approvati da Espedito, si costruisce dal 6/10 fuori dal merge del 16/10 (sezione Eventi e fasi); nella linea del tempo una linguetta Marketing raccoglierà form compilati, iscrizioni e presenze agli eventi, email di marketing, automazioni e ingressi nelle liste, e un form compilato non creerà più una nota né conterà come ultima attività; i canali Slack dei form si gestiscono da Marketing; la conversione degli 873 «Professionista» era sospesa: l'08/10 Espedito ha deciso che restano contatti. Dal 5/10 nella scheda si registrano chiamate e riunioni con l'esito, e la linea del tempo mostra vinte e perse delle trattative.

Novità del 06/10/2026: Google entra nel CRM. Nasce la barra di Mercury dentro Gmail (un componente aggiuntivo di Google Workspace, anche da telefono): dall'email aperta si vedono le persone del CRM, si registra l'email e si segue la conversazione con «Registra e segui», si aggiungono Nota e Task, e mentre si scrive «Registra in Mercury» registra l'email inviata; è in prova sulla casella di Espedito, come il Calendar sul suo calendario. Dalla scheda, «Crea nel calendario» crea la riunione nel Google Calendar, con invitati e link Meet, nel proprio calendario o in quello di un collega del Commerciale (dall'08/10 solo di un collega di cui si vede il calendario), scegliendo la fascia da una griglia di disponibilità; il Calendar comanda su data, ora e invitati e Mercury si riallinea da solo. Arrivano anche la tab Calendario del Commerciale e gli appuntamenti del TMK nel calendario dell'Account. La nota interna delle riunioni resta solo in Mercury. In produzione con il merge del 16/10/2026, in uso dai commerciali dal 19/10/2026 (sezione Gmail e Calendar ). Correzione sul sync notturno da HubSpot, che la versione 26 dava già acceso: dopo l'import del 03/10/2026 non era mai stato acceso; il primo giro si fa a mano la sera del 06/10/2026 (dalle 18:30) e da quella notte gira da solo ogni notte alle 01:30 su GitHub, fino all'ultimo giro del 19/10/2026 mattina.

Novità del 07/10/2026: le regole dei permessi del CRM decise da Espedito (sezione Chi lavora e cosa vede ). I venditori che non sono Manager vedono solo i propri oggetti, i Manager anche quelli del team, tutti gli altri con il CRM vedono tutto, compresi i TMK, che sono un'area tecnica. Gli oggetti interi li eliminano solo gli Admin; una trattativa vinta non torna indietro e non si mette persa: si corregge dalla pratica. L'appuntamento del TMK si fissa dalla scheda, come ogni riunione nel calendario di un collega, e la sezione TMK è in sospeso: si ridisegna a panieri di lavorazione. Nel Commerciale le tab hanno un ordine nuovo e si parte da Contatti; nella barra di Gmail parte spuntata solo la persona a cui è indirizzata l'email; dalla scheda si crea la trattativa collegata, e dall'azienda o dal patronato un contatto nuovo, senza lasciare la scheda (fatte il 07/10, nello stile della vista rapida).

Novità del 07/10/2026 sera: Espedito ha deciso come nasce una trattativa (sezione Creazione della trattativa ). Nel modulo si sceglie solo il prodotto, la fase prende il posto di linea e servizio e, con la chiusura vinta del Task 4 del piano 5c, si potrà partire già «Vinta», con la data di chiusura dal 19/10/2026 (oggi il modulo non crea trattative vinte). Il partner non si sceglie: è quello collegato all'azienda o di riferimento del patronato, e se non è in fase Partner la trattativa non si apre (dal 09/10/2026 basta che non sia un Ex partner). Sconto e premialità si impostano già nel modulo, con la premialità proposta dalla scheda provvigionale (anche per linea di prodotto) o dalle trattative già fatte. In Chi lavora e cosa vede : ogni campo nuovo ha la cronologia, lo Storico di un'attività lo vede solo chi vede l'attività, e «Ultima attività» si ordina di nuovo, veloce, nelle tabelle. I dati dei fondi interprofessionali entrano nella scheda dell'azienda dall'08/10. Tra i punti aperti i poteri del CRM, ancora da assegnare prima del 19/10; nella linea del tempo la tappa del 7/10.

Novità dell'08/10/2026: in tutte le tabelle degli oggetti del CRM arrivano i filtri avanzati , come in HubSpot: gruppi di condizioni «e» uniti da «o» su tutti i campi dell'oggetto, salvati anche nelle viste. I fondi interprofessionali sono nella scheda dell'azienda, con Mandato e Iscritta al fondo a scelta multipla e l'ultimo saldo calcolato; i dati da HubSpot sono stati caricati l'08/10 sera (21.508 aziende su 48.416). Espedito ha deciso chi vede quali calendari (sezioni Chi lavora e cosa vede e Gmail e Calendar ): dei colleghi di cui non si vede il calendario, nel modulo della riunione si vedono il libero e l'occupato, e la riunione nasce nel proprio calendario con il collega tra gli invitati. Ha anche sospeso la sezione TMK fino a dopo il 19/10. Le fasi sono riscritte come sono oggi nelle funzioni di Mercury, oggetto per oggetto, e sono corrette le frasi che davano per attive cose ancora da fare: la trattativa vinta dal modulo, le iscrizioni agli eventi dal form, la coda delle vinte in attesa della pratica. Chiuse anche le domande sugli 873 «Professionista», che restano contatti, sui consensi importati, sull'incasso centralizzato, sulla premialità zero quando il cliente è lo studio del partner, sulla persona della trattativa e sulla vinta «in un colpo», che vale per tutte le linee; EPAR resta fuori fino al 19/10. Tra i punti aperti due domande nuove sui patronati; nella linea del tempo la tappa dell'8/10.

Novità del 09/10/2026: la fase dei partner la calcola Mercury dalle trattative e dall'Account, con Ex partner e il segno «Negativo» messi con i loro pulsanti, secondo la regola decisa da Espedito oggi e già applicata ( Le fasi ). Tra le 11:23 e le 11:26 del 09/10/2026 Mercury ha ricalcolato 21.559 partner: ora ci sono 1.883 Partner (erano 928), 9 Prospect, 21.727 Lead, 38.177 Suspect e nessun Ex partner. Ai nuovi Partner non si dà più una scheda provvigionale vuota, e la tappa Partner della scheda ha la data di chiusura della prima trattativa vinta. Nella tabella dei partner non c'è più il selettore «Vista» e ci sono due interruttori nuovi, «Negativo» e «Senza numero» ( Chi lavora e cosa vede ). L'Account dei partner Suspect e Lead si cambia sempre con «Riassegna», anche prima del passaggio al TMK. Nella scheda del partner il gruppo «Lavorazione TMK» è vuoto, in attesa del contenuto nuovo, e l'appuntamento del TMK non chiede più la tipologia del professionista. Su una trattativa, nel collegamento con un'azienda e come riferimento di un patronato va bene un partner in qualsiasi fase tranne Ex partner ( Creazione della trattativa ). Mercury aggiunge «IT» davanti alle P.IVA italiane di aziende, patronati e studi (dalle 11:02 del 09/10/2026), e alle 11:05 ha corretto le 31 aziende e i 5 studi salvati senza «IT»; altre 51 aziende senza «IT» hanno già un doppione con «IT», da unire. Il sync notturno da HubSpot si era fermato nella notte tra l'08/10 e il 09/10 su una lettura lenta delle note: la lettura è stata corretta la mattina e il giro riprende la sera del 09/10/2026. Tra i punti aperti escono il Passo 0 e la scelta tra tipologia e professione per i Prospect, ed entra il contenuto nuovo del gruppo TMK della scheda del partner; nella linea del tempo la tappa del 9/10.

Novità del 09/10/2026, dopo mezzogiorno: «Segna come Negativo» e «Segna come Ex partner», con «Togli Negativo» e «Riattiva», sono icone tra le azioni rapide della scheda e della vista rapida del partner, non più nel menu «Altro», e pulsanti sotto le pillole Chiamate e Riunioni della linea del tempo ( Le fasi ). Settore, servizi e prodotti di interesse dei contatti, vuoti per tutti, sono usciti dalla scheda del contatto e, alle 12:39, anche dal database; nei form dei siti «servizi di interesse» non è più una destinazione ( pagina 4 ). Dalla scheda e dalla tabella dei partner sono uscite le ultime voci del TMK, cioè la riga «Operatore TMK», il segno «Non contattare», che lascia il posto a «Negativo», e il filtro «Stato di lavorazione», e nei filtri avanzati sono spenti Stato di lavorazione e Non contattare (alle 12:47; Chi lavora e cosa vede ). Nel modulo «Nuova trattativa» valore e tipo della premialità partono vuoti: il tipo, euro o percentuale, è obbligatorio e con lui il valore quando c'è un partner, e la proposta entra nei campi solo con «Usa la proposta»; Espedito ha confermato la regola, che vale anche sul database ( Creazione della trattativa ). Nei filtri avanzati un gruppo di condizioni si copia con «Duplica il gruppo». Dalle 13:18 due studi, o due patronati, con la stessa P.IVA scritta con e senza «IT» non si possono più avere da nessuna parte: né dal CRM, né dall'import, né dalla sync; l'import dei patronati aggancia il patronato con «IT» invece di crearne un secondo. Nella scheda del partner, cambiando email, email aggiuntiva o codice fiscale, compare l'avviso «Possibile doppione». Nuova la pagina 5 , «Campi obbligatori alla creazione»: per ogni oggetto del CRM dove si crea e quali campi chiedono il modulo e il database, con 17 incoerenze da decidere. Tra i punti aperti entrano il tipo della premialità quando si modifica la trattativa, i campi obbligatori, i doppioni da impedire, le voci del TMK rimaste nel database e nei filtri avanzati, lo «Stato lavorazione» dei contatti e il «Servizio di interesse predefinito» dei form.

La seconda pagina racconta professione e profili di placement, la terza è la proposta per Sara Aboudarda su come JobSignal legge da Mercury, la quarta è la guida per chi costruisce i form dei siti, la quinta raccoglie i campi obbligatori alla creazione di ogni oggetto del CRM. La Mappa e le sue pagine sono il riferimento di base del CRM: ogni pagina di riferimento del CRM entra nella Mappa come pagina in più (regola di Espedito del 2/10). Le tappe fino alla fine del progetto sono nella linea del tempo qui sotto.

Pagina 1 · Mappa del CRM

Pagina 2 · Professione e profili di placement →

Pagina 3 · Mercury per JobSignal →

Pagina 4 · Guida ai form dei siti →

Pagina 5 · Campi obbligatori alla creazione →

## Linea del tempo

Dall'export di HubSpot al passaggio netto del 19/10 e alla fine del progetto il 30/11.

24/09 Struttura del CRM in produzione

26/09 Export completo da HubSpot

28/09 Prova generale dell'import riuscita

1/10 STOP C chiuso con Daniela; piano delle professioni approvato

2/10 Funzioni dei form e del TMK; MARKOM e TMK abilitati. Sera: verifiche ok; passo 0 caricato (180 CF, 27 P.IVA); consensi all'import: 9.967 concessi e 7.439 revocati; scritture chiuse al ruolo di sola lettura; piani email partner e placement approvati

3/10 IMPORT FATTO in produzione, un giorno prima del previsto

5-9/10 Lavoro sui dati veri esiti delle attività importate tradotti; Registra chiamata e riunione accesi; prove dei form; piano degli Eventi approvato il 5/10; sync notturno: primo giro il 06/10 sera; barra di Gmail in prova sulla casella di Espedito

7/10 Permessi del CRM, trattativa e fondi decisi da Espedito. Sera: tabelle veloci, Storico con la privacy, creazione della trattativa sul database

8/10 Filtri avanzati nelle tabelle; fondi nella scheda dell'azienda; calendari visibili per ruolo e area; sezione TMK sospesa; fasi riscritte

9/10 · oggi Fasi dei partner calcolate da Mercury dalle trattative; segno Negativo; P.IVA con IT; sync notturno corretto

12-13/10 Prova di Espedito schede, trattative e stile nuovo

entro 16/10 Form principali costruiti da Luca sull'anteprima; builder a MARKOM dopo la produzione; merge: Gmail e Calendar in produzione, installa Pio

notte 18/10 Ultimo delta da HubSpot

lun 19/10 PASSAGGIO NETTO venditori e TMK solo in Mercury; sync spente, form dei siti in linea; barra di Gmail e Calendar in uso

23/10 HubSpot gratuito script HubSpot tolto dai siti

24/10 «Unisci» anche per le aziende

2/11 Bonifica doppioni 5.276 fusioni di Luca applicate

30/11 Fine del progetto «Unisci» anche per partner e studi

Pallino pieno: fatto. Pallino vuoto: in calendario. In arancio le due tappe che cambiano il lavoro di tutti, l'import e il passaggio netto. Le tappe sono in ordine e non in scala; le date future sono quelle dei piani al 09/10/2026 e possono spostarsi di qualche giorno.

## Persone e organizzazioni

Il partner è il centro: sta in uno studio o in una rete, presenta le aziende, fa da riferimento per i patronati.

Persone Organizzazioni Vendita e provvigioni Catalogo Utenti Mercury Eventi e marketing Attività registrate relazione solo informativa o in discussione controllo del registro

guidata da · caporete fa parte di · se non ha studio lavora in con un ruolo fa parte di appartiene a (obbligatorio) ha presentato · 1 alla volta consulente di riferimento referente partner lavora in · ruolo referente

Rete guidata da un caporete

Studio associato un solo dominus

Parent persona o società

Partner consulente che presenta

Azienda cliente cliente o aderente

Patronato / CAF organizzazione

Contatto persona, B2B o B2C

Registro identificativi: codice fiscale ed email unici e bloccanti per i partner, fino alla bonifica del 2/11, solo segnalazione: 247 casi da chiudere (179 email, 68 CF)

Le frecce vanno da chi possiede il legame a chi è collegato. Il tratteggio indica un legame che non ha effetti su trattative e provvigioni.

- Legami tra oggetti solo con le chiavi di Mercury essenziale (decisione di Espedito del 2/10): pratiche, trattative, contatti, aziende, partner, patronati e attività si collegano sempre con gli identificativi di Mercury, mai con gli id di HubSpot né con nomi o testi copiati. La regola vale per tutti gli oggetti di Mercury ERP, non solo per il CRM. Gli id HubSpot servono solo all'import, ai delta notturni (fino al 19/10), alle fusioni (fino al 2/11) e all'export finale (fino al 30/11), poi restano solo come riferimento storico. Dopo il 19/10 le pratiche storiche ricevono le chiavi dell'azienda, del patronato e della persona prese dalla loro trattativa (riempimento una tantum con anteprima), e le schermate di Operations e Finance passano a leggere le chiavi; i campi di testo copiati da HubSpot restano come storico. Per il resto dell'ERP il censimento dei legami fatti con un testo invece che con una chiave si fa in sola lettura quando serve; il passaggio alle chiavi viene dopo il 19/10, insieme alle pratiche.

- Studio o rete, mai entrambi. Se il partner è in uno studio, la sua rete è quella dello studio.

- Un solo livello di rete. Il caporete guida al massimo una rete e non ne attraversa un'altra.

- Il caporete non è un mestiere. È il partner che guida una rete attiva: si ricava dalla rete e compare sulla sua scheda come «Caporete di …». Il suo mestiere è la sua professione, come per qualsiasi partner.

- Le reti si ricostruiscono in Mercury da zero: l'import da HubSpot non assegna reti ai partner e non converte gli studi «Rete …». Restano studi, non reti, anche i due studi che in HubSpot si chiamavano «Rete …» (decisione di Espedito dell'08/10, domanda 10).

- Un partner collegato per azienda, uno alla volta. Da lui dipendono il canale (intermediata o diretta) e la provvigione; chi, quando e perché restano nello storico. Collegandolo o sganciandolo dalla scheda dell'azienda, le trattative aperte nate in Mercury lo seguono ( creazione della trattativa ). In Mercury si collega a un'azienda, o diventa il partner di riferimento di un patronato, un partner in qualsiasi fase tranne Ex partner (decisione di Espedito del 09/10; dal 07/10 serviva la fase Partner).

- Consulenti di riferimento (commercialista, consulente del lavoro, sicurezza): solo informativi.

- Ruolo nell'azienda: titolare o legale rappresentante, HR, amministrazione, referente, dipendente, referente patronato. Dall'import arriva il ruolo scritto in HubSpot (Legale Rappresentante, Risorse Umane…), con l'etichetta originale come qualifica. Il legale rappresentante (per esempio dalla visura) è un contatto collegato all'azienda con il ruolo «titolare o legale rappresentante»: si cerca nel registro e, se non c'è, si crea (decisione del 30/09).

- Un contatto può lavorare in più organizzazioni. Quando si aggiungono i contatti di un'azienda si escludono solo quelli già collegati a quell'azienda, e di ogni contatto si vedono le altre aziende.

- Email dei contatti: un contatto ha una email principale e può averne altre, supplementari; tutte passano dal registro e sono uniche. Nell'unione di due contatti «Tieni entrambi» aggiunge l'email come supplementare.

- Email dei partner (decisioni del 2/10): come i contatti, un partner ha una email principale e N supplementari, e da ognuna Mercury lo riconosce (form, fusioni). Una sola è segnata «Amministrazione»: è l'unico indirizzo che usa Finance. Dopo l'import si recuperano le email in più che HubSpot aveva e l'import non ha preso. Un'email tolta o sostituita non riconosce più il partner, con una riga nello storico (P9). Piano approvato il 2/10, lavori dal 7 al 14/10.

- Contatto e partner non si duplicano. Quando un contatto diventa partner viene convertito, portando con sé email, attività e consensi. I professionisti stanno solo tra i partner, in qualunque fase: un contatto non può essere «professionista non partner». Un'eccezione: degli 875 «Professionista» di HubSpot ne sono entrati 873 come contatti, e restano contatti , senza conversione in partner (decisione di Espedito dell'08/10, domanda 16). La conversione in blocco in partner Suspect era stata sospesa il 5/10 dopo l'anteprima: professione vuota per 464, «Altro» per 101, molti agronomi e tecnologi alimentari, pochi consulenti del lavoro.

- Una P.IVA o un codice fiscale identificano un solo record dello stesso tipo (decisione del 30/09): una P.IVA una sola azienda, un solo partner, un solo studio; un codice fiscale una sola persona. Nel controllo dei doppioni di aziende, studi e patronati blocca solo la P.IVA uguale; email, PEC e telefoni secondari uguali danno solo un avviso (i centralini sono condivisi).

- P.IVA con «IT» davanti dal 09/10 (decisione di Espedito del 09/10): quando si crea o si modifica un'azienda, un patronato o uno studio, Mercury aggiunge «IT» davanti alla P.IVA italiana di 11 cifre; le P.IVA estere e quelle che hanno già «IT» restano come sono. Le 31 aziende e i 5 studi che avevano la P.IVA senza «IT» sono stati corretti alle 11:05 del 09/10, e il cambio si vede nel loro Storico; finché le sync da HubSpot sono accese possono riportarne qualcuna senza «IT», e dopo il delta della sera si rimette «IT» a quelle tornate senza; altre 51 aziende senza «IT» hanno già un doppione con «IT» e si sistemano con l'unione dei doppioni; i patronati l'avevano già tutti. La P.IVA dei partner resta com'è, perché la usano Finance e il resto dell'ERP, e restano come arrivano anche le P.IVA portate dall'import da HubSpot. Nel controllo dei doppioni la P.IVA con «IT» e quella con le sole 11 cifre sono la stessa. Per le aziende una P.IVA con la cifra di controllo sbagliata non si salva, e Mercury lo dice con il messaggio «P.IVA non valida: controlla le cifre (l'ultima è la cifra di controllo)».

- Partner anche cliente: può essere collegato alla sua azienda cliente, anche se hanno la stessa P.IVA o lo stesso codice fiscale: sono record di tipo diverso, non doppioni.

- Azienda che esiste già ed è di un altro Account: chi la inserisce vede l'avviso «esiste già, è di …» e non la aggiorna né la unisce; la aggiorna chi la vede.

- Fondi interprofessionali nella scheda dell'azienda dall'08/10 (decisioni di Espedito del 07/10 e dell'08/10, domande 141 e 142): i campi della scheda «Informazioni Fondi» di HubSpot entrano nella scheda completa dell'azienda, nel gruppo «Fondi interprofessionali», ognuno con la sua cronologia: mandato e sua data, fondo a cui è iscritta, adesione SDI, associazione alla piattaforma del fondo, stato sul fondo, data di iscrizione, dipendenti per il fondo, neo aderente e sua data, utente, password e data di creazione della password, disponibile, maturando, ultimo saldo e sua data, importo accantonato in scadenza al 31/12. Mandato e Iscritta al fondo sono a scelta multipla , come in HubSpot, con lo stesso elenco di fondi (19 voci; FAPI con l'etichetta completa «FAPI - Fondo Formazione PMI»): «NESSUN FONDO» va da solo, «Altro» si combina con gli altri fondi. L'ultimo saldo è calcolato , disponibile più maturando, e non si modifica; la data dell'ultimo saldo resta da scrivere a mano. L'importo accantonato in scadenza al 31/12 viene dal suo campo di HubSpot, nato dopo l'export del 26/09. Li vede chi vede l'azienda e li cambia chi la può modificare, con lo stesso «Salva» della scheda. Utente e password del fondo sono in chiaro , visibili a chi vede l'azienda (decisione di Espedito), ma restano fuori dalle colonne a scelta, dall'esportazione Excel, dai filtri e dalla vista rapida: si leggono solo nella scheda completa e nel suo Storico. Nello Storico i fondi hanno un riquadro loro, sotto quello dell'azienda, ognuno con il suo filtro «Proprietà». Sono stati riempiti una volta da HubSpot, anche per le aziende archiviate in HubSpot, e fino al 19/10 l'aggiornamento notturno li tiene allineati. Studi e patronati restano fuori. Un fondo nuovo nella tendina si aggiunge con un intervento tecnico, senza una schermata di gestione, e l'«Unisci» delle aziende (dal 24/10) porterà i dati dei fondi del doppione sul principale. Il gruppo dei fondi è nella scheda dall'08/10, sull'anteprima; i dati da HubSpot sono stati caricati l'08/10 sera: 21.508 aziende su 48.416 hanno dati dei fondi.

- Unione dei doppioni (decisione del 30/09): fino al passaggio netto del 19/10 i consulenti doppi si fondono in HubSpot con l'app di Luca e la fusione arriva in Mercury; dal 19/10 si fonde solo in Mercury, con un unico motore. Il doppione si archivia, non si cancella. Chi unisce sceglie campo per campo anagrafica, recapiti, indirizzi, dati fiscali e note; fase, stato cliente, canale, rete e caporete si ricalcolano; restano il proprietario e i campi TMK del principale; i consensi si uniscono da soli, finalità per finalità, e la revoca vince. Il principale mostra anche lo storico del doppione («unito in»), che non si riscrive. Due aziende si possono unire anche con P.IVA diverse: vince quella che l'utente sceglie come principale. Pulsante «Unisci» solo per gli Admin: contatti dopo il 19/10, aziende dopo il 24/10, partner e studi dopo il 30/11 (fino ad allora procedura tecnica).

- Professione e aree (decisioni del 30/09, del 1/10 e del 2/10): con il piano delle professioni partner e contatti avranno una professione (una voce) presa da una lista di 446 voci, ognuna con la sua area. Oggi del piano sono fatte solo la lista, in Mercury dall'01/10 con le corrispondenze dei valori di HubSpot, e le funzioni che la leggono; il resto è fermo. Le aree della persona si calcoleranno da sole. La lista la gestiranno solo gli Admin: una voce tolta si sostituirà con un'altra su tutte le persone che l'avevano. Anche stato occupazionale a tendina, con 12 valori (decisione del 2/10), e «categorie protette (L. 68/99)»; i valori di HubSpot si convertiranno con la mappatura di Luca; uno stato generico di HubSpot («Occupato», «Studente») cede allo stato preciso della stessa famiglia ricavato dalla professione o dal DB lavoro (per esempio Occupato con professione Imprenditore diventa Imprenditore; decisione del 2/10). La professione sostituirà la vecchia «tipologia» del partner con il piano delle professioni (decisione del 1/10), e il campo tipologia sparirà. Dal 09/10 né la tipologia né la professione contano per la fase del partner, che Mercury calcola dalle trattative e dall'Account ( Le fasi ). La professione avrà lo storico sulla persona (non nelle conversioni in blocco); fino al 19/10 vince il valore di HubSpot. Le categorie protette sono un dato sulla salute: le vedono e le filtrano solo Admin e Manager, e non vanno mai nell'export.

- Profili di placement dopo il 19/10 (decisione del 2/10, nota di Daniela dell'1/10): l'ex «DB lavoro» diventa, solo sui contatti, un elenco di righe con la voce della stessa lista, l'origine (import, form, operatore, corso, tirocinio), lo stato (proposta, attiva, chiusa) e la conferma; è il campo che userà JobSignal, la piattaforma di Sara Aboudarda, che dalla stessa data legge candidati e aziende da Mercury invece che da HubSpot ( terza pagina ). Fino ad allora i valori restano nei dati grezzi di HubSpot. Il profilo in uscita dai corsi sta sull'attività e, a corso superato, diventa una riga dei profili. Regole, tempi e punti aperti nella seconda pagina .

- Indirizzi dall'elenco ufficiale dei comuni (decisione del 30/09): regione, provincia, comune e CAP si scelgono da tendine collegate (110 province); il comune o il CAP riempiono da soli il resto. Per l'estero la regione è «Estero» e al posto della provincia c'è la nazione. I valori scritti prima restano e, se non si riconoscono, compaiono «non in elenco» finché qualcuno non sceglie dalla tendina; dopo l'import una bonifica corregge quelli sicuri e mette gli altri in un elenco da controllare.

- Form dei siti in Mercury dal 19/10 (piano approvato il 30/09): si costruiscono direttamente nel builder di Mercury, in Commerciale sotto Marketing, e si incorporano nelle pagine dei siti. Si accendono lunedì 19/10 mattina, subito dopo l'ultimo delta da HubSpot: fino ad allora restano i form di HubSpot, così un vecchio NO di HubSpot non annulla un SÌ appena dato in Mercury (decisioni del 1/10). L'invio si aggancia al partner o al contatto con la stessa email, altrimenti nasce un contatto Suspect; l'invio compare nella linea del tempo della persona con le risposte e gli eventuali allegati (oggi come nota «Invio form»; con la linguetta Marketing non più come nota), e il proprietario riceve un avviso. Nome dell'azienda e P.IVA scritti nel form restano nell'invio, nella voce «Form compilato»: nessuna azienda nasce in automatico (P11). Quando un contatto diventa partner, i suoi invii dei form passano al partner. I lead di Meta si collegheranno allo stesso ingresso dopo la messa in produzione definitiva del CRM; fino ad allora il team MARKOM li esporta da Meta ogni settimana e li carica in Mercury come contatti Suspect (decisioni del 1/10). Le email automatiche di conferma arrivano dopo, con le automazioni. Il branch del CRM entra in master il 16/10: il merge anticipato è stato scartato (decisione del 2/10). Sugli indirizzi pubblici dei form è già attivo un limite alle richieste ripetute (rate limit).

- Canali Slack dei form (decisioni del 5/10): si gestiscono da Marketing, tab «Canali Slack», per Admin e Marketing. Il webhook dell'app Incoming Webhooks si incolla una volta e poi si vede solo mascherato; un canale non si cancella, si spegne; «Invia un messaggio di prova» controlla il canale. A ogni lead elaborato da un form il messaggio arriva nel canale del form oltre al DM al proprietario; per il file CSV di Meta un solo messaggio di riepilogo per caricamento (il DM per lead resta). Il canale scelto secondo le risposte resta alle automazioni.

- Consensi dei form, come oggi: presa visione dell'informativa, con il link, sempre obbligatoria; marketing, profilazione e cessione a terzi con risposta SI/NO obbligatoria, e si registra anche il NO, con la data dell'invio. Un form dei siti che non rispetta questa regola non si può pubblicare. Mercury tiene il registro dei consensi, una riga per persona e finalità; quando due contatti doppi si uniscono, i consensi si uniscono finalità per finalità. Brevo invia solo a chi ha il consenso marketing e riporta in Mercury disiscrizioni e segnalazioni di spam: la revoca vince sempre. Per i lead di Meta caricati dal file settimanale la data del consenso e dell'attività è quella del caricamento; la data del lead su Meta va nella nota (domanda 110, chiusa il 2/10).

- Consensi importati da HubSpot (decisione del 1/10): «concesso» a chi riceveva marketing, «revocato» a chi si era disiscritto (anche solo da «Marketing Information» o da «Trattamento dei dati personali»); in più contano le risposte già date nei form HubSpot su marketing, profilazione e cessione a terzi, e il NO vince. Un consenso revocato non torna mai concesso da un import. Contatti di marketing (decisione di Espedito dell'08/10, domanda 128): risulta «concesso» anche chi era contatto di marketing in HubSpot il 26/09, uno stato che HubSpot spegne a fine mese e che si è recuperato dalla sua cronologia, insieme ai SÌ dei form; il NO vince sempre. Espedito sente il responsabile della privacy: se essere contatto di marketing non vale come consenso, quel gruppo passa a «da verificare» con un aggiornamento mirato.

- Liste: nessuna lista di HubSpot si importa; le liste si rifanno da zero nel CRM (decisione del 1/10).

## Dalla trattativa al pagamento

La trattativa vende un solo prodotto del catalogo a un cliente (un'azienda, un patronato o una persona), presentata da un partner. Se c'è una persona che riceve il servizio, ce n'è una sola, con il suo ruolo. Con la chiusura vinta del piano 5c, da vinta diventa pratica e poi premialità.

vende un prodotto fa parte di fa parte di definisce gli stadi venduta a presentata da determina persona beneficiaria · una sola, con un ruolo la segue (proprietario) vinta: crea la pratica con l'interruttore · piano 5c genera si paga con propone la provvigione di un partner o di una rete

Linea es. FFP, SPLP, ACP

Servizio codice HSnn

Prodotto catalogo Mercury

Cliente azienda, patronato o persona

Trattativa stadio · importo · sconto

Partner chi ha presentato

Rete e caporete ricavati, non scelti

Account utente Mercury

Persona corsista, tirocinante, PAL…

Pratica quella di oggi

Scheda provvigionale approvata, con regole

Premialità partner + caporete

Ordine di pagamento Finance

Catalogo a sinistra, soggetti al centro, soldi a destra. Il passaggio da vinta a pratica ha un interruttore che si accende il 19/10, quando si spengono tutte le sync da HubSpot (decisione del 1/10). La chiusura vinta arriva con il Task 4 del piano 5c: oggi in Mercury una trattativa non si vince ancora, quindi non c'è nessuna vinta in coda in attesa della pratica. Il bordo tratteggiato della persona ricorda che l'etichetta Beneficiario e chi paga, se diverso dal cliente, sono tra i punti aperti; la persona con il suo ruolo c'è già.

- Il cliente è un'azienda, un patronato o una sola persona, senza organizzazione. Chi paga, se diverso dal cliente, e l'ente finanziatore sono ancora una proposta, tra i punti aperti : fino al 19/10 nessun campo «pagato da» (decisione di Espedito dell'08/10, domanda 17).

- Una persona beneficiaria al massimo, con il suo ruolo: corsista, tirocinante, apprendista, beneficiario PAL, tutor, certificatore. Chi compra un master per sé è insieme il cliente e il corsista. Scegliere la persona non cambia la sua fase quando la trattativa si apre (decisione 17 dell'08/10).

- Rete e caporete non si scelgono: si ricavano dal partner e alla vinta si fotografano con importi, sconto e provvigioni.

- Lo stadio deve esistere per la linea: le linee SPL ed ECOM hanno solo opportunità, vinta e persa (ECOM non è più attiva: ha solo trattative storiche).

- Aprire o riaprire una trattativa porta l'azienda o il patronato a Prospect. Per le aziende da Prospect in su la P.IVA è obbligatoria: senza P.IVA dell'azienda la trattativa non si apre, una persa non si riapre e non si cambia il cliente. Per i patronati oggi no ( punti aperti ). Le trattative cambiano anche la fase del partner che presenta il cliente ( Le fasi ).

- Azienda ospitante (decisione di Espedito del 07/10, D2): si sceglie tra tutte le aziende di Mercury, non solo tra quelle che l'utente vede; delle aziende di un altro Account compaiono solo nome e P.IVA, con l'etichetta «non tra le tue aziende». La ricerca parte da tre lettere o cifre di fila.

- La vinta , dal Task 4 del piano 5c, si registra solo con la chiusura vinta e, con l'interruttore acceso dal 19/10, crea la pratica e la doppia premialità, del partner e del caporete, rateo per rateo. Oggi in Mercury una trattativa non si vince ancora: la chiusura vinta non c'è e le vinte arrivano solo da HubSpot. La premialità del caporete invece nasce già dall'08/10 sera: ogni rateo nuovo di una pratica che ha un caporete, su una linea che prevede la provvigione, genera anche la sua premialità, e Premialità e Compensi di Finance hanno il ruolo (partner o caporete) e il destinatario; il filtro per ruolo nelle schermate di Finance resta da accendere. Da vinta non cambiano più prodotto, linea e cliente, tranne nell'unione dei doppioni, dove le trattative del doppione, vinte comprese, passano al principale. Una vinta non torna indietro di fase e non si mette persa (regola di Espedito del 07/10): nella scheda e nel Kanban non ci sono le fasi precedenti né «Persa», e il database lo rifiuta comunque; si vince solo con la chiusura vinta, e ogni correzione passa dalla pratica, con le variazioni.

- La premialità del caporete si paga al caporete, oppure al caporete della rete che ha l'incasso centralizzato; non si converte in incarichi.

- Incasso centralizzato della rete (il caporete incassa per i membri; decisione di Espedito dell'08/10, domanda 10): per una rete lo accende chi ha il potere «Approva scheda», che oggi non ha nessuno. Nel pagamento delle premialità dei membri il caporete si può scegliere come beneficiario, ma non è proposto da solo. L'interruttore è ancora spento e si accende con il piano 5c.

- Le premialità già maturate ricevono una volta lo studio attuale del destinatario: si pagano come oggi (decisione del 2/10).

- Trattative importate da HubSpot in sola lettura fino al passaggio netto del 19/10.

### Creazione della trattativa

- Il modulo «Nuova trattativa» (decisioni di Espedito del 07/10): si sceglie solo il prodotto; linea e servizio vengono dalla mappatura del prodotto e non si mostrano. Il servizio del CRM non è la macrotipologia della mappatura: è più fine, perché una macrotipologia contiene più servizi e uno stesso servizio sta in più macrotipologie. Un prodotto senza servizio (7 su 1.457 il 07/10) non si usa finché non è classificato. Al posto di linea e servizio il modulo mostra la fase, tra quelle della linea del prodotto e mai «Persa». La «chiusura prevista» non c'è nel modulo: resta nella scheda. L'importo arriva dal prezzo di catalogo del prodotto se c'è, altrimenti resta vuoto; un importo scritto a mano non cambia se si sceglie un altro prodotto. Il nome si scrive su due righe. Database e modulo, con la premialità, sono pronti dal 07/10 sera, in prova sull'anteprima fino al passaggio netto.

- «Vinta» già alla creazione, in un colpo (domande 139 e 46, chiuse da Espedito il 07/10 e l'08/10): arriva con il Task 4 del piano 5c, la chiusura vinta; fino ad allora, con la fase «Vinta», il modulo tiene spento «Crea» con il motivo «La chiusura vinta non è ancora disponibile». Dal Task 4, scegliendo la fase «Vinta» la data di chiusura è obbligatoria, dal 19/10/2026 a oggi, quindi prima del passaggio netto non si crea una trattativa vinta. Al «Crea» la trattativa nasce nell'ultima fase aperta della sua linea e si apre subito «Chiudi vinta» con quella data, con i controlli di ogni vinta. La vinta registrata «in un colpo» vale per tutte le linee, non solo per SPLP e SPLF (decisione 46 dell'08/10).

- Partner fisso, senza tendina (decisione di Espedito del 07/10): con un'azienda è il suo partner collegato, che è uno solo, oppure «Azienda diretta»; con un patronato è il suo partner di riferimento, oppure «Diretta»; con una sola persona, senza organizzazione, il partner si sceglie dalla tendina, oppure «Diretta». Aperta dalla scheda di un partner, la trattativa ha quel partner, fisso: come cliente si sceglie un'azienda collegata a lui, un patronato che lo ha come riferimento o una persona. Se si sceglie prima il partner, compaiono solo le aziende collegate a lui.

- Con un Ex partner la trattativa non si apre dal 09/10 (decisione di Espedito del 09/10, che sostituisce quella del 07/10 sera): il partner che presenta il cliente può essere in qualsiasi fase tranne Ex partner. Se il partner collegato all'azienda, o il riferimento del patronato, è un Ex partner, il modulo lo mostra con l'avviso «Il partner è un Ex partner: non può presentare clienti nuovi» e «Crea» resta spento. Per aprire la trattativa si sgancia il partner dalla scheda dell'azienda (o si cambia il riferimento del patronato), oppure il partner torna attivo con «Riattiva». Il riferimento di un patronato può essere un partner in qualsiasi fase tranne Ex partner. Dal 07/10 al 09/10 serviva la fase Partner: il 07/10 erano bloccate così 2.372 aziende, con il partner collegato Prospect o Suspect, e 50 patronati.

- Il partner segue l'azienda (decisione di Espedito del 07/10): nella scheda della trattativa il partner di una trattativa con un'azienda o un patronato non si sceglie; si cambia dal collegamento sulla scheda dell'azienda (o dal riferimento del patronato), e le trattative aperte nate in Mercury lo seguono, con rete, caporete e premialità proposte ricalcolate. Le premialità scritte a mano restano, tranne quando il partner viene sganciato e la trattativa diventa diretta. Vinte e perse restano com'erano. Per una persona senza organizzazione il partner resta a tendina. Fino al 19/10 i cambi di partner che arrivano da HubSpot con l'aggiornamento notturno non spostano le trattative nate in Mercury: le spostano solo i cambi fatti in Mercury (limite accettato fino al passaggio netto).

- Sconto già nel modulo (decisioni di Espedito del 07/10): sconto e premialità si impostano alla creazione, non dopo nella scheda. Lo sconto, in euro o in percentuale e sempre con il suo motivo, si applica sul totale lordo (il montante); la premialità in percentuale si calcola sull'importo già scontato. Lo sconto messo da chi ha il potere Sconti è approvato subito; altrimenti resta da approvare e chi ha il potere riceve un avviso. Nella scheda uno sconto o un importo cambiato rimette lo sconto da approvare, con un nuovo avviso: lì l'approvazione non è mai automatica. Netto e premialità si vedono subito sull'importo scontato, ma finché lo sconto non è approvato la trattativa non va a vinta. La soglia resta vuota: ogni sconto va approvato (decisione del 29/09).

- Premialità proposta (decisioni di Espedito del 07/10; domande 11 e 12 chiuse): Mercury propone ogni valore, che si può sempre cambiare e di cui resta segnata la fonte (scheda provvigionale, trattative già fatte con quante su quante, per esempio «(3 su 4 trattative)», oppure a mano; conferma di Espedito dell'08/10). Per il partner, nell'ordine: la scheda provvigionale vince sempre, prima la regola sul prodotto, poi quella sul servizio, poi quella sulla linea; senza scheda, la premialità più frequente tra le trattative dello stesso partner con la stessa azienda e lo stesso prodotto, se sono almeno 3; la prima volta con un'azienda (o con meno di 3 trattative con lei), la più frequente del partner per quel prodotto, sempre con almeno 3 trattative; altrimenti si scrive a mano. Per il caporete: la scheda della rete, poi la combinazione partner + prodotto, con almeno 3 trattative. Contano tutte le trattative con una premialità scritta, aperte, vinte e perse, senza limiti di tempo; a parità di frequenza vince la più recente. Premialità zero se il cliente è lo studio del partner , per il partner e per il caporete (decisione di Espedito dell'08/10, domanda 13): il cliente è lo studio del partner se è l'azienda del partner stesso (il «partner anche cliente», collegato alla sua azienda) o ha la stessa P.IVA del suo studio; vale anche per il partner senza studio, con la sua azienda, ma non per lo studio di un altro partner della stessa rete. Nella scheda della trattativa una proposta ricalcolata riempie solo i valori vuoti o proposti: un valore scritto a mano resta finché non si preme «Ricalcola proposta». Con «Vinta» la premialità è obbligatoria. Obbligatoria anche alla creazione, dal 09/10 (decisione di Espedito, domanda 158): con un partner, o un caporete, su una linea che prevede la premialità, tipo (euro o percentuale) e valore, anche zero, sono obbligatori, nel modulo e nel database. Nel modulo partono vuoti e la proposta ci entra solo con «Usa la proposta» ( pagina 5 ).

- Schede provvigionali su tre livelli (decisione di Espedito del 07/10): una regola vale per una linea di prodotto (tutti i prodotti della linea), per un servizio o per un singolo prodotto, e vince la più precisa: prodotto, poi servizio, poi linea. Restano le regole di oggi: una regola per oggetto e periodo, in euro o in percentuale, valida dal giorno indicato.

## Eventi

Webinar, open day, recruiting day, congressi, fiere, convegni, workshop, graduation e career day, eventi interni. Ogni evento ha un proprietario, i suoi iscritti, i relatori, i costi e i contratti; il form di iscrizione lo collega ai siti.

iscritti · una volta per evento relatori · uno per persona lo segue (proprietario) un form · un evento costi e compensi contratti

Iscritti partner e contatti

Relatori partner, risorse del Branch, contatti

Proprietario utente Mercury

Evento bozza → pubblicato → chiuso

Form di iscrizione dal builder del Marketing

Costi voci · fornitore del Branch

Contratti file con lo stato

Tutto con le chiavi di Mercury: partner, contatti, risorse del Branch e fornitori si collegano con il loro identificativo. Il compenso di un relatore è una riga dei costi.

- Prima l'oggetto, poi lo storico (decisioni di Espedito del 5/10): l'oggetto Eventi si costruisce dal 6/10 in una sessione dedicata, fuori dal merge del 16/10, e va in produzione con il primo rilascio dopo il 19/10; i 341 eventi importati da HubSpot si sistemano dopo. Nella prima versione nessuna email agli iscritti: dopo l'iscrizione dal form basta il messaggio a schermo. Oggi l'interfaccia degli Eventi è ancora spenta, fino al Task 22 del piano: le regole di iscrizioni, chiusura e presenze esistono già nelle funzioni del database.

- Iscritti: partner e contatti, una persona una volta per evento; si iscrivono da un file Excel o CSV, a mano o in blocco dalle tabelle di partner e contatti, e dal form solo dopo il 19/10, con i Task 23-25 del piano degli eventi. Stati: iscritto, confermato, presente o assente, annullato. Iscrivere a mano e segnare le presenze lo fa tutta la sezione Commerciale, con l'evento pubblicato; per le presenze c'è una modalità da telefono.

- Chiusura e presenze: chiudendo l'evento chi è iscritto o confermato e non ha la presenza diventa assente; riapre solo un Admin, e l'evento riaperto torna pubblicato con gli assenti che restano assenti. Con il file presente vince su assente, mai il contrario (decisione del 5/10): un file dei partecipanti caricato dopo la riapertura segna presenti anche gli assenti. A mano, con l'evento pubblicato, lo stato si sceglie com'è, anche per correggere (da presente ad assente o ad annullato); con l'evento chiuso serve prima la riapertura.

- Capienza: a mano e da file si può andare oltre, con un avviso. Dal form, a posti finiti la pagina dice «posti esauriti»; se l'ultimo posto se ne va tra l'invio e l'elaborazione, l'iscrizione si crea comunque, oltre la capienza, e il proprietario riceve l'avviso «capienza superata»: niente lista d'attesa (decisione del 5/10).

- Form di iscrizione (solo dopo il 19/10, con i Task 23-25 del piano degli eventi): un form per evento e un evento per form; un form legato a un evento non si elimina. Con l'evento in bozza, chiuso o annullato il form non accetta iscrizioni; se l'evento si chiude o si annulla tra l'invio e l'elaborazione (e sempre per Meta e webhook) l'iscrizione non nasce e il proprietario riceve un avviso. Una persona con l'iscrizione annullata che rimanda il form torna «iscritto», senza doppioni. Il link del webinar non si dà mai dal form , né nella pagina né nel messaggio dopo l'invio: resta nella scheda dell'evento e lo manda chi organizza (decisione del 5/10).

- Iscritti da file: anteprima prima di scrivere. Le persone già presenti, riconosciute per email o codice fiscale, non si toccano, proprietario compreso: ricevono solo l'iscrizione. Le nuove nascono contatti Suspect con proprietario il proprietario dell'evento (decisione del 5/10). Il consenso al marketing viene solo dalla sua colonna: il NO vince e una revoca non torna concessa. Il caricamento non scrive nessuna nota: l'iscrizione si vede nella linguetta Marketing della persona, letta dall'evento senza copie, e non conta come «Ultima attività» (decisione del 6/10).

- Relatori: partner, risorse del Branch (collaboratori esterni e colleghi) o contatti; uno sconosciuto si crea prima come contatto. Il compenso è una riga dei costi, voce «Relatori».

- Costi e contratti: voci, fornitore del Branch, importo previsto ed effettivo, stato; nessun legame con Finance nella prima versione. Contratti e allegati sono file con il solo stato, aperti con un link temporaneo. Costi, compensi e contratti li vedono il proprietario, i Manager e gli Admin; lo «speso nell'anno» nella tabella solo Admin e Manager.

- Chi fa cosa: gli eventi li vede tutta la sezione Commerciale; li creano Marketing, Manager e Admin; li modificano, chiudono e annullano il proprietario, il Marketing e gli Admin. Degli iscritti di un altro Account si vedono nome, cognome, tipo, stato, fonte e data, senza recapiti, fase, Account e nota (decisione del 5/10). Elimina solo un Admin e solo un evento senza iscritti, contratti e allegati ai costi: altrimenti si annulla.

- Nella vita della persona: nella scheda di partner e contatti il gruppo Eventi (iscrizioni e «Relatore a …»); nella linea del tempo, sotto la linguetta Marketing, una voce sola per evento che segue lo stato dell'iscrizione (da iscritto a presente). L'iscrizione arrivata da un form è la stessa voce, «Iscritto all'evento dal form», con le risposte dentro (decisioni del 5/10). Le iscrizioni importate da HubSpot su eventi senza data non compaiono nella linea del tempo finché l'evento non riceve una data, con la sistemazione dello storico; nella tab Iscritti dell'evento si vedono sempre (decisione del 6/10). Nessun cambio di fase automatico.

## Gmail e Calendar

Dal 19/10/2026 la barra di Mercury in Gmail registra le email con le persone del CRM, e dalla scheda le riunioni si creano nel Google Calendar. Mercury lavora solo sulle caselle del dominio aziendale, sempre come l'utente.

Registra e segui · Ccn in automatico, se scelto Crea nel calendario si riallinea ogni 15 minuti; eventi registrati in automatico trattative spuntate persone e organizzazioni spuntate invitati noti e organizzazioni

Gmail con la barra di Mercury

Google Calendar comanda data, ora e invitati

Email registrata una sola attività per email

Riunione nota interna solo in Mercury

Trattative aperte, quelle spuntate

Persone e organizzazioni anche di un altro Account

Delega di dominio: Mercury legge le caselle e i calendari del dominio aziendale, sempre come l'utente solo per gli utenti non cessati con la sezione Commerciale · gli indirizzi del dominio sono interni e non si agganciano a nulla

Google a sinistra, attività di Mercury al centro, agganci a destra. In grigio tratteggiato i servizi di Google, fuori da Mercury. Il Calendar comanda: in Mercury, dopo la creazione, di una riunione si cambiano solo esito e note.

### Base comune

- Come Mercury legge le caselle (delega di dominio, autorizzata da Pio il 29/09/2026): Mercury legge le email e i calendari, e scrive gli eventi nel Calendar, solo delle caselle del dominio aziendale (oggi timevision.it; un altro dominio si aggiunge cambiando un parametro) e solo per gli utenti non cessati che hanno la sezione Commerciale. Agisce sempre come quell'utente: ciò che vede e registra è ciò che lui vedrebbe in Mercury. Se la casella di un utente non si può leggere (per esempio è sospesa), Mercury lo salta, la barra dice di avvisare l'amministratore e l'errore compare nella tab «Google e CRM» del suo profilo.

- Chi è «interno»: un indirizzo del dominio aziendale è interno: non si cerca mai tra contatti, partner e organizzazioni del CRM e non si aggancia a nulla. Un'email tra soli colleghi non entra nel CRM (la barra dice «Nessuna persona del CRM in questa email»), e una riunione registrata in automatico ha bisogno di almeno un invitato esterno noto a Mercury.

- Tab «Google e CRM» del profilo (per chi ha la sezione Commerciale): due interruttori. «Registra in automatico tutte le mie email con persone del CRM» è spento di partenza (restano solo le email scelte dalla barra); «Registra in automatico le riunioni con persone del CRM» è acceso di partenza. Sotto ognuno si vedono l'ultimo controllo e quante ne sono state registrate, e in rosso l'eventuale errore. Le registrazioni automatiche si accendono per tutti lunedì 19/10/2026, con il passaggio a Mercury, e le scelte fatte prima valgono da allora.

- Cosa guarda Mercury nelle caselle (da dire ai commerciali con l'annuncio del 19/10/2026): ogni 5 minuti Mercury controlla le caselle di tutti gli utenti del Commerciale per trovare le conversazioni seguite e le email inviate con il suo indirizzo in Ccn. Della cronologia guarda solo gli identificativi dei messaggi e le etichette, dei messaggi inviati solo i destinatari, e non salva nulla di ciò che non registra.

- Quando partono: la barra di Gmail è in prova sulla casella di Espedito dal 06/10/2026; il Calendar (tab Calendario e «Crea nel calendario») è in prova sull'anteprima del branch, sul calendario di Espedito, dal 06/10/2026; «Nel calendario di», griglia e nota interna arrivano dal 07/10/2026. Dal 07/10/2026 la riunione creata nel Calendar e il collegamento dell'evento li registra solo il server di Mercury, subito dopo Google e con gli identificativi che Google restituisce: dal browser non si scrive più una riunione con un evento inventato (provato da Espedito il 07/10/2026, sul suo calendario e su quello di una collega). Il codice va in produzione con il merge del 16/10/2026, poi l'amministratore del dominio (Pio) installa la barra per tutta l'organizzazione (può richiedere fino a 24 ore). I commerciali usano la barra e il Calendar dal 19/10/2026, con il passaggio netto: la sezione Commerciale non è in produzione prima del merge.

### Barra di Gmail

- La barra di Mercury in Gmail (decisione di Espedito del 05/10/2026): è un componente aggiuntivo di Google Workspace, nella barra laterale di Gmail, anche da telefono, installato dall'amministratore del dominio per tutta l'organizzazione. Lo usa chi ha la sezione Commerciale e la cui email di Google è quella scritta in Mercury; per tutti gli altri la barra dice «Il CRM di Mercury non è attivo per il tuo utente» e non mostra altro.

- Cosa mostra su un'email aperta: una riga sulla conversazione («Non registrata», «Seguita da te dal 06/10/2026 · 4 email registrate», oppure «Registrata da» un collega) e una sezione per ogni persona del CRM tra mittente, destinatari e Cc, prima il mittente: avatar, nome, se è contatto o partner con la fase, Account, email e telefono, le organizzazioni attuali (aziende e patronati col ruolo, o lo studio), le trattative aperte, le ultime tre attività e «Apri in Mercury» per la scheda completa. Le organizzazioni trovate per indirizzo email compaiono a parte. Se non c'è nessuna persona del CRM: «Nessuna persona del CRM in questa email».

- Persone di un altro Account (decisione di Espedito del 05/10/2026): nella barra si vedono solo nome e cognome con il lucchetto «di un altro Account» e il nome dell'Account, senza recapiti, trattative, Nota né Task. L'email però si registra lo stesso sulla persona, e l'attività la vede chi vede la persona.

- Trattative nella barra (decisioni di Espedito del 05/10/2026 e del 06/10/2026): sotto ogni persona compaiono le sue trattative aperte (né vinte né perse) che l'utente vede, ognuna con una casella. Accanto al nome si vede lo stadio fino al 18/10/2026 e la data dell'ultima modifica dal 19/10/2026. Le trattative spuntate diventano agganci dell'email registrata.

- Cosa parte spuntato (decisione di Espedito del 07/10/2026, fatta lo stesso giorno): persone, organizzazioni e trattative trovate hanno ognuna la sua casella. Di partenza è spuntata solo la persona a cui è indirizzata l'email, cioè il mittente se l'email arriva e le persone in «A» se la manda l'utente; le persone in Cc, le organizzazioni e le trattative partono senza spunta, e le sceglie l'utente.

- Registra e segui (decisione di Espedito del 05/10/2026): registra la conversazione dell'email aperta, subito i messaggi già presenti, dal più recente (se sono molti, gli altri entro qualche minuto), e da lì in poi le risposte in automatico, finché l'utente non preme «Smetti di seguire». Le email già registrate restano; seguire di nuovo la conversazione la riattiva. Una conversazione già registrata da un collega si può seguire lo stesso.

- A cosa si aggancia un'email registrata (dal 07/10/2026): alle persone, alle organizzazioni (aziende e patronati attuali del contatto, studio del partner, organizzazioni trovate per indirizzo) e alle trattative spuntate nella barra, anche a una persona che l'utente non vede. Le risposte della conversazione seguita prendono gli stessi agganci scelti la prima volta, e una trattativa scelta e poi chiusa resta agganciata, perché la conversazione parla di lei. Un messaggio senza nessuna persona né organizzazione del CRM non si registra.

- Una email, una sola attività: se due colleghi registrano la stessa email, in Mercury resta una sola attività; la seconda registrazione aggiunge solo gli agganci che mancavano.

- Testo e allegati (decisione di Espedito del 05/10/2026), come lo storico importato da HubSpot: in Mercury restano il testo e l'HTML dell'email; gli allegati non si copiano e restano nella casella Gmail, che non si cancella mai; nella linea del tempo si vedono il testo e, di ogni allegato, nome e dimensione.

- Nota e Task dalla barra (decisione di Espedito del 05/10/2026): sulle persone che l'utente vede si può scrivere una Nota (il testo) o un Task di richiamo (titolo, scadenza con «domani» di partenza, priorità media, assegnato a chi lo crea). Si registrano a nome dell'utente e con la visibilità di sempre, come dalla scheda.

- Persone sconosciute (decisione di Espedito del 05/10/2026): per ogni indirizzo che Mercury non conosce la barra offre «Nuovo contatto» e «Nuovo partner», che aprono Mercury con il modulo di creazione già compilato (nome, cognome, email). Regole, controllo dei doppioni e tendine restano quelli di Mercury. Tornato in Gmail, l'utente preme «Aggiorna».

- «Registra in Mercury» mentre si scrive (decisione di Espedito del 05/10/2026): nella finestra di scrittura il pulsante aggiunge in Ccn l'indirizzo di Mercury (registra-crm@timevision.it, un gruppo senza membri: i messaggi non arrivano a nessuno) e conserva i Ccn che l'utente aveva già messo. Dopo l'invio Mercury registra l'email e la conversazione diventa seguita, agganciata solo alle persone in «A» (dal 07/10/2026: niente organizzazioni né trattative di partenza). Chi non ha la barra può scrivere a mano quell'indirizzo in Ccn.

- Registrazione automatica delle email, per chi la sceglie (piano 4): se l'utente accende l'interruttore nel profilo, ogni email con almeno una persona o organizzazione del CRM entra nella scheda della persona a cui è indirizzata (il mittente se arriva, le persone in «A» se la manda l'utente); parte da «adesso», senza recuperare il passato. Le circolari con più di 50 destinatari la registrazione automatica le salta; dalla barra, dal Ccn e nelle conversazioni seguite si registrano comunque, perché le ha scelte l'utente.

- Cosa non c'è: Mercury non traccia le aperture e i clic delle email 1:1 (HubSpot lo faceva) e non avvisa in tempo reale, perché controlla le caselle ogni 5 minuti. L'invio di un'email dalla scheda («Scrivi email») non cambia: resta quello del piano 4.

### Calendar e riunioni

- Il Calendar comanda (decisione di Espedito del 05/10/2026): data, ora, durata, invitati e link Meet si cambiano nel Google Calendar, e Mercury si riallinea da solo ogni 15 minuti, con un controllo completo dei prossimi 30 giorni ogni notte. Le persone nuove invitate si agganciano alla riunione. In Mercury, dopo la creazione, si cambiano solo esito e note. Una riunione spostata nel Calendar cambia data anche in Mercury e l'esito resta «Pianificata».

- Riunione cancellata nel Calendar (decisione di Espedito del 05/10/2026): resta nella linea del tempo, barrata e in grigio, con «Annullata nel calendario il» e la data. Non è un esito: resta la decisione del 02/10/2026 che non c'è l'esito «Annullata». Se l'evento viene ripristinato nel Calendar, il segno sparisce.

- «Crea nel calendario», dalla scheda (decisioni di Espedito del 02/10/2026 e del 05/10/2026): è il secondo modo della tab Riunione del modulo Registra, accanto a «Registra una riunione fatta», in tutte le schede che hanno il modulo (contatto, partner, azienda, studio, patronato, trattativa) e nella vista rapida. Si compilano titolo (obbligatorio), calendario, fascia, tipo (in presenza, con il luogo, oppure videochiamata, con il link Meet creato da Google), invitati e descrizione; l'esito è «Pianificata» e tutti gli invitati ricevono l'invito da Google. Gli invitati sono la persona della scheda (già scelta; per azienda, studio, patronato e trattativa le persone collegate, da spuntare), i colleghi e gli indirizzi scritti a mano. Nella linea del tempo la riunione compare con «Entra in Meet» e «Apri nel Calendar». «Apri nel Calendar» porta all'evento il proprietario del calendario e gli invitati; per gli altri la riga dice che l'evento è nel calendario di quel collega e lo apre solo chi è invitato. Nel dettaglio della riunione, alla voce «Invitati», compaiono le persone del CRM con il nome (con il link alla scheda se la vedi; delle persone di un altro Account solo il nome) e «e altri N invitati»; l'elenco completo è nel Calendar (decisioni di Espedito del 06/10/2026).

- «Nel calendario di» (decisioni di Espedito del 06/10/2026 e dell'08/10/2026): io o un collega del Commerciale di cui vedo il calendario; in fondo, con il lucchetto e «solo disponibilità», anche i colleghi di cui non lo vedo, e con loro la riunione nasce nel mio calendario, con il collega tra gli invitati (regola in «Cosa si vede dei colleghi»). Si parte dal calendario del proprietario della scheda (contatto, trattativa, azienda, studio e patronato: il proprietario; partner: l'Account); si parte da «Io» se il proprietario è chi fissa la riunione o non è tra i colleghi di cui vede il calendario. La scelta si cambia sempre. La riunione per un collega nasce nel calendario del collega, che la organizza: la persona della scheda è invitata, chi la fissa è invitato e la descrizione dice «Fissato da» seguito dal nome. Dall'08/10 una riunione si crea nel calendario di un collega solo se se ne vede il calendario (regola in «Cosa si vede dei colleghi»), non più da tutto il Commerciale per qualunque collega; i colleghi si possono sempre invitare. Se il collega non vede la scheda in Mercury non c'è nessun controllo in più: la riunione è sua e arriva nel suo calendario. Nella linea del tempo è una riunione del collega, registrata da chi l'ha fissata.

- Griglia delle disponibilità, sempre nel modulo (decisione di Espedito del 06/10/2026): data e ora si scelgono cliccando una fascia libera, non si scrivono. La griglia mostra 5 giorni per volta sui prossimi 60 giorni lavorativi (12 pagine, da domani, dalle 9 alle 18, a passi di 30 minuti; decisione del 6/10), con le frecce, sul calendario scelto, anche quando è il proprio. La durata si sceglie a pillole: 30 minuti, 1 ora (di partenza), 1 ora e mezza, 2 ore. «Altra data o ora» serve per una riunione di oggi, dopo le 18 o oltre i 60 giorni lavorativi, e per le altre durate (15 e 45 minuti, 3 e 4 ore). Finché non c'è una data e un'ora scelte, «Crea nel calendario» resta spento.

- Cosa si vede dei colleghi dall'08/10 (decisioni di Espedito del 06/10/2026 e dell'08/10/2026, domanda 143): i calendari, titoli compresi, si vedono così: gli Admin e il TMK (operatori e responsabile) vedono i calendari di tutti; i Manager delle due direzioni commerciali, Direzione Vendite e Area Operation & Corporate (oggi Pietro Amato e Maria Vitiello), vedono i calendari di tutti i venditori, cioè degli hub e delle due direzioni, non di Vendite & TMK; i Manager degli hub quelli della propria area; tutti gli altri, Manager delle altre aree compresi, solo il proprio. La regola va per area e ruolo, non per nome. Nel modulo, «Nel calendario di» propone prima i calendari che si vedono: la griglia mostra il loro libero e occupato e la riunione nasce nel calendario scelto; una riunione si crea nel calendario di un collega solo se se ne vede il calendario. Disponibilità dei colleghi che non si vedono (decisione di Espedito dell'08/10, domanda 145): in fondo alla stessa tendina ci sono anche gli altri colleghi, con il lucchetto e «solo disponibilità»; scegliendone uno la griglia mostra il suo libero e occupato, senza titoli, e «Crea nel calendario» crea la riunione nel proprio calendario, con quel collega tra gli invitati in una pillola fissa con il lucchetto. Gli eventi privati degli altri restano «Occupato» per tutti. I dati dei colleghi che passano tra Mercury, il browser e Google non portano il codice fiscale: la chiave è la mail aziendale. Se il calendario scelto non si può leggere (casella fuori dominio, delega, Google che non risponde), al posto della griglia compare «Non riesco a leggere il calendario di …» con «Riprova» e i campi di data, ora e durata a mano: l'invito parte lo stesso, senza il controllo degli impegni.

- Nota interna delle riunioni (decisione di Espedito del 06/10/2026), in «Crea nel calendario» e in «Registra una riunione fatta»: resta solo in Mercury, mai nell'invito Google né nelle email che Google manda agli invitati; il Calendar che si riallinea non la tocca. La vede chi vede l'attività, perché è «interna» rispetto agli invitati esterni, non tra colleghi (non c'entra con gli indirizzi «interni» di sopra). Nella linea del tempo ha l'etichetta «Interna» con il lucchetto, distinta dalla descrizione; al massimo 2.000 caratteri. La descrizione invece va nell'invito e la leggono tutti gli invitati. In «Registra una riunione fatta» a Google non va niente: anche le note restano in Mercury.

- Registrazione automatica degli eventi del Calendar (decisione 37, Espedito 05/10/2026): acceso di partenza, ciascuno lo spegne dal profilo. Si registra un evento che l'utente organizza o ha accettato (anche se l'invito è partito dal partner), con almeno un invitato esterno noto a Mercury; si escludono gli eventi privati o riservati, di tutto il giorno e di tipo fuori sede, concentrazione o luogo di lavoro. Valgono gli eventi che cominciano dal 19/10/2026, per non doppiarsi con le riunioni che arrivano ancora da HubSpot. Nasce una riunione «Pianificata», in videochiamata se c'è un link di videoconferenza e altrimenti in presenza, agganciata alle persone note e alle loro organizzazioni. Lo stesso evento nel calendario di due colleghi è una sola attività: il secondo collega aggiunge solo gli agganci.

- Tab «Calendario» del Commerciale (decisioni di Espedito del 05/10/2026 e del 06/10/2026): viste giorno, settimana (di partenza) e mese; ognuno vede il proprio Google Calendar. Chi vede altri calendari (dall'08/10: Admin e TMK tutti, i Manager delle due direzioni commerciali quelli dei venditori, i Manager degli hub quelli della propria area) ha in più la tendina degli Account con quei calendari, titoli compresi; al TMK serve per capire la disponibilità degli Account senza andare in Calendar: nella vista giorno fino a 5 Account affiancati, in settimana e mese sovrapposti. Tutti gli altri vedono solo il proprio calendario; dei colleghi vedono solo il libero e occupato, nella griglia del modulo della riunione. Gli eventi privati degli altri compaiono come «Occupato»; le riunioni del CRM hanno il segno di Mercury e il clic apre la scheda se chi guarda la vede; gli eventi annullati non compaiono. Gli eventi si leggono dal vivo da Google: nessun evento degli altri si salva in Mercury. La tab non crea riunioni.

- Appuntamento del TMK (decisione di Espedito del 07/10/2026): l'operatore lo fissa dalla scheda del partner con «Pianifica una riunione»; «Nel calendario di» parte già dall'Account. Come ogni riunione fissata per un collega, nasce nel calendario dell'Account, che la organizza, con il partner invitato e «Fissato da» l'operatore nella descrizione. Una riunione fissata dalla scheda non porta il partner a Prospect, e dal 09/10 non ce lo porta neanche l'esito «Appuntamento fissato» del TMK: Prospect vuol dire almeno una trattativa aperta ( Le fasi ). Dal 09/10 l'esito «Appuntamento fissato» non chiede più la tipologia del professionista. Il passaggio dentro l'esito della chiamata, con le fasce dell'Account e l'evento creato da Mercury, è fermo insieme alla sezione TMK, sospesa fino a dopo il 19/10.

## Chi lavora e cosa vede

Gli utenti Mercury seguono gli oggetti come Account, operatori TMK o proprietari. Cosa vedono dipende da area e ruolo; alcune azioni richiedono un potere.

diventa, all'import stabilisce cosa vede può avere è Account o operatore è Account titolare è proprietario

Owner HubSpot 260, di cui 152 abbinati

Visibilità tutto · team · proprio

Utente Mercury con area e ruolo

Poteri sconti · schede · fasi

Partner Account e operatore TMK

Studio e rete Account titolare

Altri oggetti aziende, contatti, trattative

I 22 owner che non vanno in ERP (esterni, caselle condivise, ex dipendenti) restano senza utente: i loro record passano a Daniela Sabatino (decisione del 29/09). All'import l'Account viene dall'owner di HubSpot; il campo HubSpot «referente commerciale» non si usa più (decisione del 1/10).

- Visibilità su quattro oggetti (contatti, partner, aziende, trattative), per area e ruolo, con eccezioni per singolo utente. Regola di Espedito del 07/10: i venditori che non sono Manager vedono solo i propri oggetti; i Manager i propri e quelli del team; tutti gli altri che hanno il CRM vedono tutto. Oggi vuol dire: negli hub di Campania, Lazio, Lombardia e Puglia l'Utente Base vede i propri record e il Manager il suo team; Direzione Vendite, Area Operation & Corporate, gli Admin e le aree senza regola propria vedono tutto. I TMK sono un'area tecnica (Vendite & TMK): vedono tutto il CRM, trattative comprese, ma non il Marketing (decisione del 07/10).

- Chi ha la sezione Commerciale: per le prove sull'anteprima tutti i 110 utenti in forza; prima del 19/10 Espedito la toglie o la lascia utente per utente dalla pagina Utenti. Conta anche per Gmail e Calendar: Mercury legge caselle e calendari solo di chi ha la sezione.

- Chi vede quali calendari dall'08/10 (decisione di Espedito dell'08/10, domanda 143): gli Admin e il TMK vedono i calendari di tutti; i Manager delle due direzioni commerciali, Direzione Vendite e Area Operation & Corporate (oggi Pietro Amato e Maria Vitiello), vedono i calendari di tutti i venditori, cioè degli hub e delle due direzioni, non di Vendite & TMK; i Manager degli hub vedono quelli della propria area; tutti gli altri solo il proprio. Una riunione si crea nel calendario di un collega solo se se ne vede il calendario. Disponibilità dei colleghi che non si vedono (decisione di Espedito dell'08/10, domanda 145): nel modulo della riunione si vede il loro libero e occupato, senza titoli, e la riunione nasce nel proprio calendario con il collega tra gli invitati. Dettagli in Gmail e Calendar .

- Eliminare è solo degli Admin (regola di Espedito del 07/10): gli oggetti interi, come un evento o un form, li elimina solo un Admin, e il database lo controlla; agli altri il pulsante non compare. Contatti, partner, aziende e trattative non si eliminano: i doppioni si uniscono. Togliere una voce dentro una scheda, come una sede, un'email in più, un costo o un relatore di un evento o una regola della scheda provvigionale, non è un'eliminazione: lo fa chi può modificare la scheda, e resta nello Storico.

- Cronologia e Storico (regole di Espedito del 07/10): in tutto l'ERP ogni campo nuovo nasce con la cronologia, e i suoi cambi si vedono nella tab Storico; nello Storico si può sempre cercare la proprietà da analizzare, con il filtro «Proprietà». Le attività (note, chiamate, riunioni, email) registrano nello Storico solo i cambi di esito e di testo. Lo Storico di un'attività lo vede solo chi vede l'attività (decisione di Espedito, domanda 140) e mostra solo l'esito e il testo, prima e dopo il cambio. I dati che arrivano da HubSpot con l'import e con l'aggiornamento notturno non entrano nella cronologia. I cambi delle attività si registrano dal 07/10 sera.

- Record di altri Account nelle schede collegate: si vedono nome, cognome e ruolo, non recapiti e importi. Nella scheda dell'azienda le pratiche nate da trattative di un altro Account si vedono senza importi, stato, date e trattativa.

- Trattative nella linea del tempo (decisione del 1/10): nelle schede di partner, aziende, contatti e patronati compaiono la vittoria e la perdita delle trattative collegate (non in quella dello studio, a cui le trattative non si collegano); i cambi di stadio solo nella scheda della trattativa. Le trattative di un altro Account compaiono al loro posto come una riga con il lucchetto «Trattativa di un altro Account», senza evento, giorno né link. Accesa il 5/10.

- Linguetta Marketing nella linea del tempo (decisioni del 5/10): raccoglie le compilazioni dei form, le iscrizioni e le presenze agli eventi, le email di marketing, le automazioni e gli ingressi nelle liste statiche, letti dagli oggetti stessi senza copie. Un form compilato non crea più una nota e non conta come ultima attività : un lead arrivato dal form e mai chiamato resta «mai contattato». Iscrizione e presenza allo stesso evento sono una voce sola che cambia stato; un'iscrizione arrivata da un form è una voce sola con le risposte dentro. Pillola e voci in ciano, con l'icona di ogni oggetto. Le viste per form ed eventi arrivano prima del 19/10, quelle per email, automazioni e liste con i piani 3 e 4.

- Attività legate solo a una pratica o a un evento (decisione del 30/09), per esempio una nota su una pratica con i suoi allegati: tra chi ha la sezione Commerciale, quella della pratica la vedono Operations, Finance e chi vede il partner o la trattativa della pratica; quella dell'evento la vede chiunque abbia la sezione. Se l'attività è legata anche a una persona o a un'organizzazione valgono le regole di quei record.

- Documenti dell'azienda: sono gli allegati delle sue attività, con la stessa visibilità delle attività. Una visura si carica come nota «Visura caricata» con il PDF allegato (decisione del 30/09).

- Registra, nella scheda (decisioni del 2/10): la chiamata si registra a mano con data e ora e direzione (in uscita o in entrata) obbligatorie, esito obbligatorio tra Connessa, Nessuna risposta, Numero non attivo e Numero errato, note facoltative, senza durata. La riunione si registra a mano («Registra una riunione fatta») oppure si crea nel Google Calendar («Crea nel calendario», dal 19/10/2026; sezione Gmail e Calendar ): esiti Pianificata, Completata, Ripianificata e Mancata presentazione, con «cambia esito»; tipo in presenza o in videocall; durata di partenza un'ora (in «Crea nel calendario» a pillole di 30 minuti, 1 ora, 1 ora e mezza e 2 ore; le altre durate con «Altra data o ora»). Non c'è l'esito «Annullata». Una riunione cancellata nel Calendar resta nella linea del tempo come «Annullata nel calendario il …»: non è un esito. Accesi il 5/10; le riunioni fissate dal TMK nascono Pianificata e si creano dalla scheda nel calendario dell'Account (decisione del 07/10/2026). Esiti importati da HubSpot (decisioni del 2/10 e del 5/10): Connesso, Nessuna risposta, Numero non attivo e Numero errato diventano gli esiti di Mercury con lo stesso senso; Occupato e Lasciato messaggio in segreteria diventano Nessuna risposta; le riunioni Completed, Rescheduled, No show e Scheduled diventano Completata, Ripianificata, Mancata presentazione e Pianificata. Lasciato messaggio in tempo reale e Annullata restano con il nome di HubSpot. La nota interna delle riunioni resta solo in Mercury (sezione Gmail e Calendar ).

- Colonne ed export Excel: si possono scegliere tutti i campi di ogni oggetto tranne IBAN e dati di nascita (e le credenziali dei fondi); se serviranno, si daranno solo con un potere dedicato (decisione del 30/09).

- Filtri avanzati nelle tabelle dall'08/10 (decisioni di Espedito dell'08/10, come HubSpot): nelle tabelle di contatti, aziende, partner, studi, reti, patronati, trattative ed eventi (questi quando la tab Eventi si accende), accanto alle pillole, il pulsante «Filtri avanzati» apre un pannello a destra con gruppi di condizioni: dentro un gruppo valgono tutte («e»), tra i gruppi ne basta uno («o»), fino a 5 gruppi e 10 condizioni per gruppo. «Duplica il gruppo» (richiesta di Espedito del 09/10, fatta lo stesso giorno): l'icona accanto al cestino di ogni gruppo mette subito sotto una copia con le stesse condizioni, che si cambia senza toccare l'originale; come ogni modifica del pannello vale solo con «Applica», e con 5 gruppi è spenta. Si filtra su tutti i campi dell'oggetto, sui campi calcolati che la tabella mostra (per esempio proprietario, ultima attività, pratiche) e su «collegato a» un record, mai su IBAN, dati di nascita e credenziali dei fondi. Le condizioni negative (non contiene, non è, non è nessuno di, diverso da) comprendono i record con il campo vuoto; «più di N giorni fa» invece no: per i mai contattati c'è «è vuota». Pillole e filtri avanzati valgono insieme, anche nell'esportazione Excel e nelle frecce «N di M» della scheda, e le viste salvate conservano tutto: pillole, filtri avanzati, ricerca, ordinamento e colonne. Nelle trattative valgono nella tabella, non nel Kanban. Le tabelle di servizio (form, invii, campagne TMK, schede provvigionali, canali Slack) li avranno dopo, e i campi degli oggetti collegati (per esempio i contatti per provincia dell'azienda) con un lavoro a parte.

- Ordinamento delle tabelle (07/10 e 08/10 sera): «Ultima attività» si ordina di nuovo nelle tabelle di partner, contatti, aziende e studi, e «Pratiche» in quella dei partner. Il 5/10 erano state sospese perché troppo lente (Espedito: «le tabelle devono essere performanti»); dal 07/10 sera Mercury tiene pronta la data dell'ultima attività di ogni oggetto e l'ordinamento risponde in meno di tre decimi di secondo. «Pratiche» nella tabella delle aziende si ordina di nuovo dall'08/10 sera, con il suo ricalcolo notturno: le misure sono tra 91 e 114 millesimi di secondo, sotto i tre decimi. Le note dei form non contano come attività neanche nei numeri chiave della scheda (note e ultima attività): è la regola della linguetta Marketing, ora anche nei numeri.

- Marketing (form e invii dei siti): Admin e aree MARKOM, IT e INNOVAZIONE, sempre con la sezione Commerciale.

- Poteri a tempo, assegnati a persone con data di inizio e fine: sconti, approvazione delle schede provvigionali, forzatura delle fasi. Sconti e approvazione delle schede vanno solo agli Admin, come la forzatura delle fasi (decisione del 1/10). Chi ha la forzatura può fare tutte le forzature della fase, senza regole più fini per tipo (decisione di Espedito del 07/10, foglio D-G1). Chi ha «Approva scheda» accende anche l'incasso centralizzato di una rete (decisione dell'08/10). Dal 09/10 la forzatura non vale per i partner, che hanno la fase calcolata; «Segna come Ex partner», «Riattiva» e il segno «Negativo» non sono poteri: li usano Admin, Manager e TMK ( Le fasi ). Oggi (09/10) questi poteri non li ha nessuno, neanche gli Admin, che non li hanno d'ufficio ( punti aperti ).

- TMK (decisioni del 1/10 e del 2/10): operatori Messina, Loporto, Inserra, Poto e Cassese; responsabile Giancarla Cassese, manager. Fino al 19/10 la coda salta i partner ancora gestiti in HubSpot; ognuno prenota solo le righe libere o le sue (una riga di un altro operatore va prima riassegnata, anche dal responsabile). L'esito «non contattare» revoca tutti e tre i consensi (marketing, profilazione e cessione a terzi); un consenso già revocato tiene la data della sua revoca (domanda 109, chiusa il 2/10). Regole applicate il 2/10. L'appuntamento si fissa dalla scheda del partner, nel calendario dell'Account, e non porta il partner a Prospect (sezione Gmail e Calendar ). Dal 09/10 gli esiti del TMK non portano più a Lead né a Prospect: conta solo l'Account che assegnano, se è un venditore ( Le fasi ). Nella scheda del partner il gruppo «Lavorazione TMK» è vuoto dal 09/10 (decisione di Espedito): i dati restano nel database e il contenuto nuovo lo decide Espedito ( punti aperti ). Dal 09/10 sono uscite anche le ultime voci del TMK rimaste fuori dal gruppo (decisione di Espedito del 09/10): la riga «Operatore TMK» dei Dati del partner; il segno «Non contattare», che lascia il posto al segno «Negativo», accanto al nome nella scheda, nella vista rapida e nella tabella, e nell'esportazione; nella tabella dei partner il filtro, la colonna e l'esportazione «Stato di lavorazione»; nei filtri avanzati Stato di lavorazione e i quattro campi di Non contattare (il segno, la data, il motivo e chi l'ha messo). Nei filtri avanzati restano le altre quattro voci del gruppo: Operatore TMK, Nota di qualifica, Motivo del non interesse e Ricontattabile dal. I dati restano nel database. La revoca dei tre consensi la fa l'esito «Non contattare» del TMK, non il segno ( punti aperti ). La sezione TMK è sospesa fino a dopo il 19/10 (decisioni di Espedito del 07/10 e dell'08/10, domanda 138): la voce TMK è nascosta dal menu, anche se le pagine restano raggiungibili dall'indirizzo, e dopo il 19/10 si ridisegna come panieri di lavorazione, elenchi di partner da lavorare simili alle liste statiche.

- Schermate del Commerciale (decisioni di Espedito del 07/10): le tab sono, in ordine, Contatti, Aziende, Partner, Studi, Reti, Patronati, Trattative, Eventi (quando si accendono) e Calendario; entrando nel Commerciale si apre Contatti. Dalla scheda di un oggetto la trattativa collegata si crea in una finestra sopra la scheda, già compilata, e alla fine si resta sulla scheda; dall'azienda e dal patronato, se «Aggiungi contatto» non trova la persona, si crea il contatto nuovo già collegato (fatto il 07/10, nello stile della vista rapida). Tabella dei partner (dal 09/10): niente selettore «Vista», sempre tutte le persone, e in vista le pillole Fase e Account e gli interruttori «Negativo» e «Senza numero».

- I dati CRM dei partner (Account, operatore TMK, dati di nascita, IBAN e gli altri campi del CRM) si cambiano solo dalle schermate del CRM e dall'import, mai da altre parti di Mercury. La fase non la cambia nessuno a mano: la calcola Mercury, e solo Ex partner e il segno «Negativo» si mettono con i loro pulsanti ( Le fasi ). L'Account si cambia sempre con «Riassegna» (decisione di Espedito del 09/10), anche per i partner Suspect e Lead prima del passaggio al TMK: il blocco che lo impediva fino a quella data è stato tolto. Se il nuovo Account è un venditore, un partner Suspect diventa Lead.

- Fuori dalla sezione Commerciale (Personale, Dashboard, portafoglio del lunedì) compaiono solo i partner nati in Mercury o in fase Partner. Suspect, lead, prospect ed ex partner importati da HubSpot si vedono solo nel CRM; tra i membri di uno studio si vedono tutti. Con il ricalcolo del 09/10 i partner in fase Partner sono passati da 928 a 1.883, e compaiono anche lì (decisione di Espedito del 09/10).

## Le fasi

Ogni oggetto ha il suo percorso, scritto qui com'è oggi nelle funzioni di Mercury (controllo dell'08/10; per i partner regola nuova del 09/10). Le fasi di contatti, aziende e patronati avanzano da sole con gli eventi e non tornano mai indietro in automatico (per le pratiche perse c'è una proposta tra i punti aperti); quella dei partner ha le sue regole, qui sotto. Fino al 19/10 anche l'aggiornamento notturno da HubSpot fa avanzare le fasi di contatti e aziende (confermato da Espedito il 09/10); per i partner porta solo le trattative.

### Contatto

suspect → lead → prospect → cliente

Chi arriva da un form dei siti o da un file e non è già in Mercury nasce Suspect. Lead con un interesse manifestato, segnato dalla scheda. Aprire una trattativa non cambia la fase della sua persona (decisione di Espedito dell'08/10, domanda 17). Dalle schermate di Mercury, oggi, Prospect e Cliente si raggiungono solo forzando la fase: con il parametro «fase del contatto dalla trattativa», oggi spento, la persona di una trattativa aperta passerebbe a Prospect e, con la chiusura vinta del piano 5c, a Cliente alla vinta. Fino al 19/10 anche l'aggiornamento notturno da HubSpot porta il contatto alla fase che ha in HubSpot (lead, prospect o cliente), solo in avanti; dal 19/10 restano solo le regole di Mercury. L'etichetta Beneficiario e il «Cliente solo se paga lei» non esistono: sono tra i punti aperti.

### Partner

suspect → lead → prospect → partner → ex partner

Fase calcolata da Mercury dal 09/10 . Le regole, in ordine:

1. Ex partner : solo con il pulsante «Segna come Ex partner», solo da Partner e con il motivo. Vince su tutto; «Riattiva» lo toglie.

2. Partner : almeno una trattativa vinta.

3. Prospect : almeno una trattativa aperta e nessuna vinta.

4. Lead : Account assegnato a un venditore, cioè a un utente in forza di un'area commerciale, e nessuna trattativa aperta né vinta.

5. Suspect : tutti gli altri.

La fase si ricalcola da sola, anche all'indietro, e ogni passaggio resta nello Storico. Il segno «Negativo» si aggiunge alla fase e non la cambia. I pulsanti di Ex partner, «Riattiva» e «Negativo» li usano Admin, Manager e TMK.

### Azienda e patronato

suspect → lead → prospect → aderente → cliente

Lead con un interesse manifestato e, per le aziende, quando dalla scheda si collega un partner (dal 09/10 un partner in qualsiasi fase tranne Ex partner); per i patronati scegliere il partner di riferimento non cambia la fase. Prospect con una trattativa aperta o riaperta. Aziende: da Prospect in su la P.IVA è obbligatoria e non si può svuotare, e senza P.IVA la trattativa non si apre né si riapre; per i patronati oggi no (punti aperti). Aderente con la prima pratica ACP avviata, cliente con la prima pratica avviata non ACP. La linea della pratica viene dal suo prodotto del catalogo, altrimenti dal nome del prodotto e poi dalla trattativa; una pratica la cui linea resta sconosciuta non decide tra Aderente e Cliente, e se è l'unica conta come Cliente (decisione del 1/10). Non contano come avviate le pratiche NON ANCORA GESTITE, NON IDONEE, perse o con rinuncia (progetto o selezione persa, errore tecnico, rinuncia al corso, rinuncia con acconto, criticità per rinuncia). Senza P.IVA un'azienda non passa ad Aderente o Cliente: resta nella fase che aveva e la sua scheda mostra un avviso con il motivo. Ricalcolo dalle pratiche: fino al 19/10 lo fa ogni notte l'aggiornamento da HubSpot, sulle aziende e solo con le pratiche che HubSpot collega all'azienda (Aderente o Cliente, ultima pratica, attiva o inattiva in base all'ultima pratica dei 12 mesi): così una pratica partita fa salire l'azienda la notte dopo, e un'azienda che riceve la P.IVA passa da sola. Dal 19/10 si ferma fino al Task 6 del piano 5c, che lo rifà ogni notte con le funzioni di Mercury, anche per i patronati. Patronati: non hanno stato attivo o inattivo né ultima pratica, e la loro fase non si ricalcola di notte; il 05/10 un ricalcolo una tantum dalle loro pratiche, con le stesse regole delle aziende (decisione 98 b dell'01/10), ha portato 31 patronati da Prospect ad Aderente (25) e a Cliente (6).

### Trattativa

opportunità → elaborare preventivo → preventivo pronto → preventivo inviato → in attesa di autorizzazione → vinta persa

Le linee SPL ed ECOM usano solo opportunità, vinta e persa (ECOM non è più attiva: solo trattative storiche). Tra gli stadi aperti si va avanti e indietro, anche nel Kanban. Il prodotto è obbligatorio da «Preventivo pronto» in poi e sempre per la vinta (nelle linee SPL ed ECOM solo per la vinta), mai per la persa. La persa vuole il motivo: con «Altro» serve una nota, e «non noto» vale solo per le trattative storiche. Una persa si può riaprire. «Vinta» si raggiunge solo con la chiusura vinta, che arriva con il Task 4 del piano 5c, anche dal modulo di creazione (con la data di chiusura dal 19/10/2026) e per tutte le linee: oggi in Mercury una trattativa non si vince. Una vinta non torna indietro e non diventa persa: si corregge dalla pratica (07/10). Le trattative importate da HubSpot restano in sola lettura fino al 19/10.

### Evento

bozza → pubblicato → chiuso · annullato

In bozza si prepara e non si iscrive nessuno. Pubblicato: iscrizioni a mano e da file, e presenze; dal form solo dopo il 19/10, con i Task 23-25 del piano degli eventi. Chiuso: chi è iscritto o confermato e non ha la presenza diventa assente e non si iscrive più nessuno; riapre solo un Admin, e l'evento torna pubblicato con gli assenti che restano assenti. Annullato da bozza o pubblicato: gli iscritti restano, ed è definitivo. Gli eventi interni non hanno iscritti né form. Oggi l'interfaccia degli Eventi è spenta fino al Task 22: queste regole sono nelle funzioni del database.

### Iscrizione

iscritto → confermato → presente assente · annullato

Dal file nasce iscritto, anche con lo stato scritto nel file; dal form, dopo il 19/10 con i Task 23-25, nasce iscritto. Non torna mai indietro da sola. Con il file presente vince su assente, mai il contrario (decisione del 5/10). A mano, con l'evento pubblicato, lo stato si sceglie com'è, anche per correggere; con l'evento chiuso serve prima la riapertura di un Admin.

Tranne che per i partner, tornare indietro è una forzatura: serve il potere "forza fase", che va agli Admin utente per utente, con le date di inizio e fine; oggi non ce l'ha nessuno, neanche gli Admin, quindi oggi nessuna fase si forza (punti aperti). Vale per tutte le forzature (decisione del 07/10) e il motivo resta nello storico. Le trattative vinte restano fuori: non si forzano. Si può forzare anche su più record insieme dalle righe selezionate della tabella (al massimo 500), con lo stesso motivo per tutti: i controlli valgono record per record e l'esito si vede riga per riga (decisione del 30/09). I partner non si forzano più (decisione di Espedito del 09/10): la loro fase è calcolata e torna indietro da sola; restano i pulsanti «Segna come Ex partner» e «Riattiva», e nella tabella dei partner non c'è più «Forza fase» sulle righe selezionate.

### Punti aperti

- Poteri del CRM da assegnare: Sconti, Approva scheda, Forza fase e Avvio senza pagamento oggi (09/10) non sono assegnati a nessuno, e gli Admin non li hanno d'ufficio: gli unici poteri assegnati sono quelli del TMK (i 5 operatori, tra cui la responsabile). Senza il potere Sconti nessuno approva uno sconto, quindi una trattativa con lo sconto non va a vinta, e gli avvisi degli sconti non arrivano a nessuno. Senza Approva scheda nessuna scheda provvigionale si approva e nessuno può accendere l'incasso centralizzato di una rete. Senza Forza fase nessuna fase si forza (per i partner la forzatura non c'è più dal 09/10). Vanno dati, con le date di inizio e fine, prima del passaggio netto. Espedito, prima del 19/10

- Persone clienti o beneficiarie (D-C2): chi paga, se diverso dal cliente, ed etichetta Beneficiario, sui quattro casi descritti da Andrea. Proposta del 26/09: chi paga è un'azienda, un patronato, la persona stessa o un ente finanziatore, si propone da solo (c'è un'azienda: l'azienda; servizio finanziato: l'ente; altrimenti la persona) e si corregge a mano; la persona diventa Cliente quando parte la pratica e solo se paga lei, e chi riceve un servizio pagato da un'azienda o da un ente resta nella sua fase con l'etichetta Beneficiario e lo storico delle pratiche. Oggi non c'è né il campo né l'etichetta, e fino al 19/10 nessun campo «pagato da» (decisione di Espedito dell'08/10, domanda 17): si progetta dopo, se serve. Daniela, Andrea, dopo il 19/10

- Pratica persa: la fase torna indietro da sola? Proposta: ricalcolo (resta Cliente se c'è un'altra pratica avviata, altrimenti Prospect o Aderente). Daniela

- Partner con pratiche storiche e senza trattative (domanda 18): all'import del 3/10 sono rimasti Suspect 419 partner con pratiche (in HubSpot non più «consulente», o fusi): cosa farne? Con la regola del 09/10 le pratiche storiche senza trattativa non contano per la fase. Espedito, Daniela, prima che i venditori usino le schede

- Contenuto nuovo del gruppo TMK della scheda del partner (decisione di Espedito del 09/10): il gruppo «Lavorazione TMK» della scheda del partner è stato svuotato, mentre i dati restano nel database. Cosa ci va lo decide Espedito. Espedito

- Voci del TMK rimaste nel database e nei filtri avanzati (domande 148 e 149): le quattro colonne di «Non contattare» restano nel database. Oggi le scrivono solo la creazione e la modifica del partner, bloccate fino al 16/11, e l'esito «Non contattare» del TMK, che revoca i tre consensi e toglie il partner dalle campagne. Si tolgono anche dal database? Prima va scelto cosa esclude dal TMK chi chiede di non essere contattato, perché il segno «Negativo» non blocca e non revoca consensi. E nei filtri avanzati dei partner si spengono anche Operatore TMK, Nota di qualifica, Motivo del non interesse e Ricontattabile dal? Espedito; la 148 con la ripresa del TMK, dopo il 19/10

- «Stato lavorazione» dei contatti (domanda 150): si toglie anche dalla tabella e dalla scheda dei contatti, come per i partner? Espedito

- Tipo della premialità quando si modifica la trattativa (resto della domanda 158): alla creazione è obbligatorio dal 09/10 ( Creazione della trattativa ). Nella scheda, quando si modifica la trattativa, il tipo resta obbligatorio? Oggi valore e tipo si possono svuotare insieme. Espedito

- «Servizio di interesse predefinito» dei form (domanda 147): da quando i contatti non hanno più i servizi di interesse (12:39 del 09/10) l'impostazione del form non fa più niente; oggi è vuota in tutti e 6 i form. Si toglie anche dalla schermata e dal database? Espedito

- Campi obbligatori alla creazione (richiesta di Espedito del 09/10): la pagina 5 mette a confronto, oggetto per oggetto, quello che chiedono il modulo e il database, e raccoglie 17 incoerenze da decidere, tra cui «Converti in partner» che chiede solo il cognome, le quattro regole diverse della P.IVA, la trattativa con un'azienda senza P.IVA che si scopre solo al clic e i contatti dei form senza proprietario. Espedito

- Doppioni da impedire (richiesta di Espedito del 09/10, domande 151-157): aziende, studi e patronati senza doppioni per P.IVA o codice fiscale, contatti e partner senza doppioni per email o codice fiscale. Già vero oggi: i contatti sono bloccati per email e codice fiscale; aziende, studi e patronati sono bloccati per P.IVA nei moduli del CRM, con o senza «IT», e dal 09/10 studi e patronati anche nel database, import compreso; nella scheda del partner email e codice fiscale doppi danno l'avviso «Possibile doppione»; i partner fino al 2/11 sono solo segnalati dal registro ( Persone e organizzazioni ), e la loro P.IVA doppia non si controlla ( pagina 5, punto 2 ). Da decidere: (151) quando blocca il codice fiscale delle organizzazioni, che oggi non controlla nessuno (151 gruppi di aziende con lo stesso codice fiscale), e se blocca un codice fiscale uguale alla P.IVA di un'altra organizzazione: cambierebbe la decisione del 30/09, che blocca solo la P.IVA; (152) se studio e azienda con la stessa P.IVA restano permessi («lo studio che compra», 214 casi); (153) se la sede zonale dell'U.C.I., l'unica coppia di patronati con lo stesso codice fiscale, è un patronato a sé; (154) se le 51 coppie di aziende con e senza «IT», arrivate dalla sync di HubSpot, si uniscono dopo il 24/10 con vincente quella con «IT»; (155) se bloccare già ora le email e i codici fiscali dei partner scritti direttamente da Personale e da Finance, lasciando solo segnalati sync e import fino al 2/11; (156) quando creare dall'SQL Editor l'indice unico delle aziende, che impedisce le gemelle nuove, e gli indici delle email dei partner: quelli di studi e patronati ci sono già; (157) se l'errore «esiste già» porta il link al record esistente. Espedito; la 154 prima del 24/10, la 155 prima del 2/11

- P.IVA dei patronati (domanda 144): la P.IVA obbligatoria da Prospect in su, e niente trattativa senza P.IVA, valgono anche per i patronati? Oggi no: 25 patronati da Prospect in su non hanno la P.IVA (15 Prospect e 10 Aderente, su 341). Se sì, servono una correzione delle funzioni e una decisione su quei 25. Espedito

- Lead dei patronati (domanda 144): il partner di riferimento porta il patronato a Lead, come il collegamento del partner porta l'azienda? Oggi no: il patronato diventa Lead solo con un interesse manifestato. Espedito

- Premialità del partner quando cambia il partner della pratica: resta a chi era scritto o segue il partner nuovo? Oggi segue il partner attuale. Espedito, Finance

- Unione di due aziende con P.IVA diverse: le pratiche del doppione, legate alla sua P.IVA, passano all'azienda che vince? E la P.IVA scritta sulla pratica, che indica chi è fatturato, cambia? Espedito, Finance, prima del 24/10

- Caporete che guida una rete senza esserne membro: la trattativa oggi non fotografa né rete né caporete; proposta: la rete è quella che guida. Espedito, Daniela, prima del 13/10

- Professione, profili di placement e profilo in uscita dai corsi: per Daniela 114 (chi conferma le righe proposte e i nomi di chi fa Ricerca e selezione, entro il 2/11), 116 (Repertori, ridotta a EQF e codici regionali), 119 (soglie e pesi di JobSignal), 120 (codici ISTAT da controllare), 124 (file dei monitor) e 127 (qualificazione «completa», prima della B1); per Espedito 121 con Sara Aboudarda (lettura per JobSignal, entro il 28/10), 122 (tirocinio concluso), 123 (raccordo CP2011 → CP2021), 125 (licenza dell'Atlante) e 126 (aggiornamento dell'Atlante). Le domande 113, 115, 117 e 118 sono chiuse dal 2/10. Dettagli nella seconda pagina . Daniela, Espedito con Sara

- Sezione TMK a panieri di lavorazione (domanda 138; sezione sospesa fino a dopo il 19/10): come si ridisegna (panieri simili alle liste statiche, chi li prepara, chi li lavora, cosa resta di campagne e code) e come cambia l'esito «Appuntamento fissato»: registra solo l'Account e la riunione si fissa dalla scheda, oppure data e ora a mano con l'avviso all'Account, come prima del Calendar. Il codice fiscale degli Account è uscito l'08/10 dall'elenco dei calendari che il TMK legge; l'esito del TMK che cercava l'Account per codice fiscale va rifatto prima di riaccendere la sezione. Espedito, dopo il 19/10

- Form di MercuryPro (domande 111 e 112): come arrivano in Mercury i due form dell'app MercuryPro (invio al collegamento dei form di Mercury, proposto, o lettura diretta delle tabelle dell'ERP) e se un'email sconosciuta del form «Suite Professionale per Consulenti del Lavoro» crea un contatto Suspect. Rinviate da Espedito il 2/10 al team di MercuryPro e Piattaforma servizi. Espedito con il suo team, senza scadenza

Fonte: spec «CRM in Mercury: uscita da HubSpot» del 24/09/2026, piano 1 in produzione dallo stesso giorno, export del 26/09, proposte discusse con Daniela e Andrea il 26/09, commenti di Daniela del 25/09, decisioni di Espedito del 27-30/09 (anche sulla pagina di Daniela del 30/09: unione dei doppioni e le 12 questioni D1-D12) e del 1/10 (STOP C, stile, professioni), nota di Daniela dell'1/10 su professione e placement e decisioni di Espedito del 2/10, piani 3a, 5a, 5b, 5c, 5d e 7a, tendine geografiche, piano dello stile e piano delle professioni (approvato il 1/10), import del 3/10 e decisioni di Espedito del 3-5/10 (consensi all'import, esiti delle attività importate, contatti «Professionista»), spec e piano dell'oggetto Eventi del 5/10 con le decisioni di Espedito sul piano, canali Slack dei form e linguetta Marketing (decisioni del 5/10), spec Gmail e Calendar del 06/10/2026 con le decisioni di Espedito del 05/10/2026 e del 06/10/2026 (barra di Gmail, riunioni nel Calendar, riunione nel calendario di un collega, nota interna, griglia di 60 giorni lavorativi nel modulo Registra, calendario di partenza del proprietario, invitati e «Apri nel Calendar»; Eventi: iscritti da file senza nota, iscrizioni importate di eventi senza data nascoste nella linea del tempo), decisioni di Espedito del 07/10/2026 (permessi del CRM, TMK area tecnica e sezione TMK in sospeso, forzature, ordine delle tab, barra di Gmail, oggetti collegati creati dalla scheda; azienda ospitante tra tutte le aziende, D2 del piano 5c) e prove di sicurezza del Calendar del 07/10/2026; spec della creazione della trattativa del 07/10/2026 con le decisioni di Espedito del pomeriggio e della sera (partner fisso, sconto e premialità nel modulo, premialità proposta, schede per linea, prodotto e fase nel modulo, domande 11, 12 e 139, «Crea» bloccato con il partner fuori fase Partner), decisioni di Espedito del 07/10/2026 sui fondi interprofessionali e sulla cronologia (domanda 140), controlli e lavori della sera del 07/10/2026 (poteri del CRM, ordinamenti delle tabelle, Storico delle attività, database della trattativa); spec dei filtri avanzati dell'08/10/2026 con le decisioni di Espedito, piano dei fondi riscritto l'08/10/2026, decisioni di Espedito dell'08/10/2026 (domande 10, 13, 16, 17, 21, 46, 128, 138, 141, 142 e 143: incasso centralizzato e studi «Rete …», premialità zero per lo studio del partner, «Professionista» che restano contatti, persona della trattativa, EPAR, vinta in un colpo, consensi importati, sezione TMK sospesa, fondi, calendari) e controllo delle regole delle fasi sulle funzioni del database dell'08/10/2026; spec delle fasi dei partner del 09/10/2026 con le decisioni di Espedito dello stesso giorno (fasi calcolate dalle trattative e dall'Account, Ex partner e «Negativo» con i loro pulsanti, registro dei passaggi, tabella dei partner senza «Vista» e con i filtri «Negativo» e «Senza numero», partner in ogni fase tranne Ex partner; domande 7 e 144 b chiuse), P.IVA con «IT» (decisione di Espedito del 09/10/2026), correzione del sync notturno del 09/10/2026, ricalcolo delle fasi dei partner del 09/10/2026 (11:23-11:26, con il controllo) e decisioni di Espedito della tarda mattina del 09/10/2026 (fase di contatti e aziende da HubSpot fino al 19/10, filtri «Negativo» e «Senza numero» a interruttore, tappa Partner dalla prima trattativa vinta, «Riassegna» senza il blocco del passaggio al TMK, gruppo «Lavorazione TMK» della scheda svuotato, niente schede vuote per i nuovi Partner); richieste e decisioni di Espedito del 09/10/2026 a mezzogiorno (azioni Ex partner e Negativo tra le azioni rapide, campi di interesse dei contatti tolti anche dal database alle 12:39, voci del TMK tolte dalla scheda e dalla tabella dei partner e spente nei filtri avanzati alle 12:47, «Duplica il gruppo» nei filtri avanzati, premialità della «Nuova trattativa» vuota e obbligatoria nel modulo e nel database, schema dei campi obbligatori, doppioni da impedire), rapporti del 09/10/2026 sulle voci del TMK, sul tipo della premialità e sui doppioni (domande 147-158) e lettura del codice del branch e del catalogo del database del 09/10/2026 per la pagina dei campi obbligatori.
