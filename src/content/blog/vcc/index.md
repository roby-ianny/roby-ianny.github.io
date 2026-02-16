---
title: "Virtualization and Cloud Computing, concetti chiave"
description: "In questo post vorrei esporre alcuni concetti chiave che ho appreso seguendo il corso di Virtualization and Cloud Computing"
date: "Feb 17 2026"
draft: true
---

A breve dovrò sostenere l'esame di Virtualization and Cloud Computing. In questo corso, abbiamo esplorato come costruire e gestire un insieme di servizi che girano su diversi sistemi, utilizzando sistemi di gestione come Vagrant, Ansible e Docker Swarm.

Per ogni argomento presentato nel corso, farò un breve riassunto, utile quindi anche come ripasso pre-esame anche per chi dovrà affrontare questo esame :)

## Introduzione alla [virtualizzazione](https://en.wikipedia.org/wiki/Virtualization?useskin=vector)

L'obiettivo della virtualizzazione, è quello di astrarre le risorse fisiche in maniera flessibile, sicura e gestibile. Consentendo eventualmente di oltrepassare i limiti fisici (es. condivisione di risorse, overprovisioning, ...) 

Ci sono tre principali tecniche di virtualizzazione:
- Multiplexing
    - Una risorsa fisica viene resa disponibile a più entità virtuali
    - Un esempio, è lo stesso disco che viene condiviso tra diverse macchine virtuali
- Aggregazione
    - Più risorse fisiche vengono aggregate in una singola risorsa virtuale
    - Un esempio è RAID, il RAID controller aggrega diversi dischi rappresentandoli come un'unica unità
- Emulazione
 - Espone una risorsa virtuale che corrisponde a un dispositivo fisico, anche se il dispositivo fisico reale non c'è. 
 - Per esempio l'emulazione di un processore ARM con un processore amd64

## [Macchine Virtuali](https://en.wikipedia.org/wiki/Virtual_machine?useskin=vector)

Nel corso, abbiamo visto due tipi di macchine virtuali:
- Lightweight VMs
    - Si basano su meccanismi di isolamento dell'hardware e del software per fare in modo che le applicazioni vengano eseguite direttamente sul processore rimanendo isolate dal sistema operativo sottostante
    - Un esempio sono i container (v. [Docker](https://en.wikipedia.org/wiki/Docker_(software)?useskin=vector) o [Podman](https://en.wikipedia.org/wiki/Podman?useskin=vector))
- System Level VM
    - Forniscono un'istanza virtualizzata dell'hardware di un computer, con la possibilità di far girare un sistema operativo standard con un isolamento completo dal resto del sistema (a differenza dei container, in cui il kernel è lo stesso del sistema host)
    - Un esempio è una macchina virtuale Linux che gira su un PC Windows




## Linux, le basi

## Costruire e gestire ambienti virtuali (portabilità e riproducibilità)

## Automazione e Infrastructure as Code

## Containers

## Containers Orchestrations e Clustering

## Autenticazione

## Monitoraggio

