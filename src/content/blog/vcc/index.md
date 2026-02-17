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
    - Utilizzano un [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor?useskin=vector), un particolare tipo di software che si occupa specificamente di virtualizzazione minimizzando gli overhead, combinando tecniche di [multiplexing e emulazione](#introduzione-alla-virtualizzazione)
    - Un esempio è una macchina virtuale Linux che gira su un PC Windows con VMware Workstation come Hypervisor

Pre brevità, omettero alcuni concetti come il [teorema di Popek e Goldberg](https://en.wikipedia.org/wiki/Popek_and_Goldberg_virtualization_requirements), la [paravirtualizzazione](https://en.wikipedia.org/w/index.php?title=Virtualization&useskin=vector#Paravirtualization) e la virtualizzazione della memoria (in particolare il [memory balooning](https://en.wikipedia.org/wiki/Memory_ballooning?useskin=vector))

## Linux, le basi

Linux è un argomento molto ampio, cito un paio di risorse utili consigliate dai docenti del corso per evitare di rendere questo capitolo molto lungo, dedicherò in seguito degli articoli che parlano specificatamente di Linux:
- [20 Best Linux Books You Can Download For Free Legally](https://itsfoss.com/learn-linux-for-free/)
- [Manuale di Bash](https://www.gnu.org/software/bash/manual/)

## Automazione e Infrastructure as Code
### Costruire e gestire ambienti virtuali con Vagrant

[Vagrant](https://en.wikipedia.org/wiki/Vagrant_(software)?useskin=vector) è un software che permette di creare e gestire ambienti virtuali garantendo portabilità e riproducibilità.

Questo ci porta al concetto di [Infrastructure as Code](#automazione-e-infrastructure-as-code), un paradigma che implementa la riproducibilità descrivendo gli ambienti nella loro completezza usando solo il codice. Diviso in tre fasi:
1. Costruzione dell'immagine
2. [Provisioning](https://en.wikipedia.org/wiki/Provisioning_(technology)?useskin=vector)
3. Gestione delle configurazioni

Vagrant si occupa dei primi due passaggi, ovvero si occupa di istanziare e connettere le macchine virtuali (o le risorse sul cloud).
È possibile farlo con un [`Vagrantfile`](https://developer.hashicorp.com/vagrant/docs/vagrantfile), attraverso il quale si può definire l'immagine di partenza, le risorse da allocare per quell'immagine, l'hypervisor da utilizzare, la configurazione di rete e gli eventuali script o comandi da eseguire dopo l'avvio.

Una volta creato il `Vagrantfile` si possono eseguire i seguenti comandi (all'interno della cartella in cui si trova il file)

```bash
vagrant up --provision # Esegue il setup delle macchine virtuali e comandi di provisioning
vagrant halt # Blocca la/le macchine virtuali
vagrant destroy # Spegne la VM, la elimina e elimina l'immagine di partenza
vagrant snapshot save nomesnapshot # Crea una snapshot dello stato attuale della/delle VM
vagrant snapshot restore nomesnapshot # Riporta la/le VM allo stato della snapshot
``` 

### [Ansible](https://www.redhat.com/it/topics/automation/learning-ansible-tutorial)

[Ansible](https://it.wikipedia.org/wiki/Ansible_(software)?useskin=vector) si occupa del provisioning e della fase finale, ovvero quella della gestione delle configurazioni, è uno strumento molto potente e anch'esso garantisce la riproducibilità.

Funziona nel seguente modo, attraverso dei file `yaml`, si definisce in modo dichiarativo lo stato desiderato delle macchine, un Nodo di controllo si occupa di eseguire questa automazione, connettendosi alle altre macchine da configurare tramite SSH o altri protocolli.

Gli hosts ai quali il control node si deve connettere, sono definiti nell'[inventario](https://docs.ansible.com/projects/ansible/latest/inventory_guide/index.html), mentre le azioni da eseguiri sono definite nei [playbook](https://www.redhat.com/it/topics/automation/what-is-an-ansible-playbook).


## Containers

## Containers Orchestrations e Clustering

## Autenticazione

## Monitoraggio

