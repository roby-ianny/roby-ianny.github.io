---
title: "Un mese con GrapheneOS"
description: "In questo post raccconto la mia esperienza personale con GrapheneOS"
date: "Oct 10 2025"
---

Di recente ho fatto un esperimento, ho installato GrapheneOS sul mio dispositivo principale, un Google Pixel 6,  e l'ho utilizzato per circa un mese, al termine di questa esperienza sono tornato alla versione stock, in questo post vorrei raccontarvi cosa ho imparato da questa esperienza e perché sono tornato ad Android Stock.

## Cos'è GrapheneOS?

GrapheneOS è una custom ROM Android (disponibile solo per i dispositivi della serie Google Pixel nel momento in cui scrivo) che migliora molti aspetti di Android a livello di privacy e sicurezza.

### Chi può utilizzarlo?

A mio parere questa ROM non è solo per gli appassionati di sicurezza, chiunque può utilizzarla vista la semplicità dell'[installazione](https://grapheneos.org/install/) (basta un browser basato su Chromium), la vedo utile per chi non vuole dipendere dai servizi Google oppure per chi vuole utilizzare lo smartphone in maniera più consapevole.

Appena si installa il sistema operativo, i servizi Google non sono presenti, ma si possono comunque installare tramite pochi tap nel caso fosse necessario, in tal caso viene installato solo quel che serve per far funzionare il Play Store in modo da scaricare le applicazioni da lì.

Nel caso dovessero presentarsi dei problemi, molti di essi si possono risolvere, la soluzione spesso la si può trovare nel [forum ufficiale](https://discuss.grapheneos.org/). 
Un problema che ho avuto era lo speech-to-text che non funzionava su Duolingo, ho risolto trovando sul forum una [discussione](https://discuss.grapheneos.org/d/9787-cant-speak-on-duolingo) su come risolvere il problema.

## Cosa mi è piaciuto e cosa ho imparato da questa esperienza

La possibilità di gestire più permessi delle app è una delle funzionalità che ho più apprezzato, in particolare la possibilità di scegliere se un app può accedere a internet o meno. 
Disabilitare l'accesso a internet può essere utile per la privacy perché si può evitare la telemetria da parte di alcune applicazioni dove l'accesso a internet non è strettamente necessario, io ad esempio ho disabilitato l'accesso alla rete ad applicazioni come GBoard, Google Calendar e alcuni giochi offline (evitando anche le pubblicità).

Per chi è interessato ai dumb-phone, al termine dell'installazione del sistem operativo, sul telefono ci sono solo pochissime applicazioni essenziali come: telefono,  messaggi, fotocamera e poco altro.
Questo mi ha aiutato per utilizzare il telefono in maniera più consapevole, installando solo le poche applicazioni che mi servivano realmente.

## Perchè sono tornato indietro

Come per ogni cosa, non tutto è oro quel che luccica. Per avere questa sicurezza e privacy in più bisogna fare alcune rinunce.
Alcuni produttori utilizzano un API chiamata PlayIntegrity per bloccare tutte o alcune funzionalità sui dispositivi che utilizzano una Custom ROM.
Un esempio è Google Wallet che blocca i pagamenti tramite NFC, oppure la funzionalità di documenti digitali dell'app IO.

So che per chi tiene alla privacy questa non è una grande rinuncia, dato che in molti per tutelare la privacy evitano questi metodi di pagamento e i documenti digitali (ci sono diverse opinioni a riguardo), ma, almeno per il momento, preferisco avere queste comodità. Dato che nel caso mi dimenticassi o perdessi il portafogli, posso utilizzare il mio smartphone.

Ci sono inoltre le funzionalità esclusive per i Pixel, uno dei principali motivi che mi hanno portato a scegliere questo smartphone, tra cui i sottotitoli live oppure la selezione del testo dalla schermata delle applicazioni recenti.

## Cosa ho imparato

Avevo installato questa custom ROM principalmente per utilizzare lo smartphone in modo più consapevole e non per la privacy, anche perchè prima di reinstallare la ROM stock sul telefono avevo il play store e diverse applicazioni di Google, il che a livello di privacy aveva poco senso.

Però questa esperienza mi ha dato delle idee utili su come migliorare il modo in cui utilizzo lo smartphone, ci sono molte app che ho volutamente deciso di non installare perchè posso semplicemente andare sul sito tramite il browser.
In questo modo posso utilizzare i socia l e altre app che causano distrazioni in maniera più consapevole, andando direttamente sul sito solo quando mi serve e bloccando alcune funzionalità inutili grazie alle estensioni del browser.

Inoltre mi sono ritrovato a utilizzare alcune alternative open source alle app di Google, ad esempio ho disinstallato Gmail in favore di Thunderbird e ho utilizzato un Organic Maps al posto di Google Maps.

## Conclusioni

In conclusione, posso dire che il mio obiettivo è stato raggiunto. Ho ridotto il tempo di utilizzo e ho anche scoperto nuove cose sul funzionamento di Android, tanto da pensare di voler fare la tesi di laurea su uno di questi concetti appresi.

Vorrei anche aggiungere un piccolo auto-rimprovero, perchè alla fine GrapheneOS non rende lo smartphone inutilizzabile, sono tornato ad Android Stock principalmente per comodità (e anche per un po' di prigrizia).

Detto questo spero di non aver dato cattiva luce a questo progetto, anzi, è molto interessante e continuerò a seguire la sua evoluzione, soprattutto ora che alcune cose sono cambiate nel mondo Android, inoltre, il team di GrapheneOS sta lavorando con un produttore per avere dei dispositivi 100% compatibili con GrapheneOS (magari in questo modo risolveranno anche il problema di PlayIntegrity). 
Se avete un Google Pixel, vi consiglio vivamente di provarlo, data la semplicità di installazione e di disinstallazione (anch'essa documentata sul sito ufficiale).

Vi ringrazio per la lettura, qui sotto lascio una lista di alcune app open source e le estensioni per firefox che ho utilizzato (alcune le utilizzo tutt'ora e alcune le utilizzo da molto prima).

Applicazioni:
- Grayjay
  - Client alternativo a YouTube, Spotify, Soundcloud, Twitch e altri servizi
- FUTO Keyboard
  - Alternativa a GBoard con funzionalità di trascrizioni e simili
- Aves
  - App galleria in locale (che ho installato tutt'ora dato che ho disinstallato Google Photos)
- Davx⁵
  - Sincronizzazione CalDAV su android (la utilizzo per sincronizzare i miei calendari su Nextcloud)
- Thunderbird
  - Il popolare mail client, ora anche su android
- Organic Maps
  - Alternativa a Google Maps che utilizza Open Street Maps
- Kvaesitso
  - Launcher per android che propone un utilizzo diverso rispetto ai launcher tradizionali
- Feeder
  - Aggregatore di Feed RSS, da utilizzare in alternativa alla sezione notizie di Google 
- Breezy Weather
  - App meteo che può attingere dati da fonti diverse 
- Droid-ify
  - Client alternativo di FDroid con grafica più accattivante
- Immich
  - Alternativa self-hosted a Google Photos
- Stratum
  - Generatore di OTP alternativo a Microsoft Authenticator e Google Authenticator

Estensioni per Firefox
- TikNot
  - Permette di visualizzare i link di TikTok da browser senza che viene richiesta l'installazione dell'app, sono anni che non uso TikTok ma mi permette di vedere i video che mi mandando gli amici
- SocialFocus
  - Permette di personalizzare l'esperienza sui siti di vari social, impostando dei limiti di tempo e disabilitando alcune funzionalità, Instagram è il mio tallone d'Achille e grazie a questa estensione posso utilizzarlo in maniera più sana