---
title: "Setup ollama con Intel Arc B580"
description: "In questo post, scritto durante la procedura, racconterò come ho configurato ollama sul mio pc con una Intel ARC B580 con SYCL"
date: "Mar 15 2026"
draft: True
---

Questo post è un po' particolare perchè lo utilizzerò per documentare cosa farò per raggiungere il mio obiettivo.
Ammetto che al momento le mie conoscenze sul far girare LLM in locale sono molto limitate, quindi chiedo scusa se ci saranno errori dovuti alla mia ingenuità. Penso però che questo post possa essere utile per chi è nella mia stessa situazione.

Dato che ho terminato la quota gratuita per le inline suggestions di GitHub copilot, mi è venuto in mente che potrei sostituirlo con un qualcosa di eseguito in locale e che utilizzi modelli open weight.

## Compatibilità con la scheda video
Il mio problema principale è che la mia scheda video è una Intel Arc B580, purtroppo, al momento in cui scrivo questo articolo, le schede video Intel non vengono direttamente citate dalla [documentazione ufficiale di Ollama](https://docs.ollama.com/linux)

Fortunatamente, ho trovato questa [guida ufficiale sul sito di Intel](https://www.intel.com/content/www/us/en/content-details/826081/running-ollama-with-open-webui-on-intel-hardware-platform.html) che indica di installare i driver (che ho già installato) e il oneAPI Base Toolkit, procediamo quindi con l'installazione

## Installazione di oneAPI Base Toolit

Andando sulla [pagina ufficiale](https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit-download.html?packages=oneapi-toolkit&oneapi-toolkit-os=linux&oneapi-lin=yum-zypper) si può vedere che sono documentati i vari metodi di installazione, in base anche alla propria distro linux.
Al momento in cui scrivo, sto utilizzando Fedora Workstation 43, i passaggi che riporto sono quelli che ho seguito dalla pagina indicata prima:


```console
roby@fedora$ tee > /tmp/oneAPI.repo << EOF
[oneAPI]
name=Intel® oneAPI repository
baseurl=https://yum.repos.intel.com/oneapi
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://yum.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS.PUB
EOF
roby@fedora$ sudo mv /tmp/oneAPI.repo /etc/yum.repos.d # prima creo il file della repo e poi lo aggiungo
roby@fedora:~$ sudo dnf install intel-oneapi-base-toolkit
```

Fonti:
- [Guida Ufficiale Intel](https://www.intel.com/content/www/us/en/content-details/826081/running-ollama-with-open-webui-on-intel-hardware-platform.html)
- [Get the Intel oneAPI Base Toolkit](https://www.intel.com/content/www/us/en/developer/tools/oneapi/base-toolkit-download.html?packages=oneapi-toolkit&oneapi-toolkit-os=linux&oneapi-lin=yum-zypper) 
  - Ho avuto alcuni problemi a leggere questa pagina con firefox (non so se il problema siano le mie estensioni o firefox in generale), ho quindi ricorso a un browser Chromium-based per accedere alla pagina
- [Ollama e GPU intel](https://docs.ollama.com/gpu)