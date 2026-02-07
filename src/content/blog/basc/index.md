---
title: "Binary Analysis and Secure Coding, pipeline per l'analisi di software"
description: "In questo post vorrei esporre alcuni concetti chiave imparati al corso di Binary Analysis and Secure Coding"
date: "Feb 7 2026"
draft: false
---

Ho di recente sostenuto l'esame del corso di Binary Analysis and Secure Coding, e in questo articolo vorrei riportare brevemente quali sono gli step da seguire quando ci si ritrova davanti un software da analizzare, ad esempio in contesti come le CTF.

**Disclaimer:** Questo articolo non vuole promuovere nessun tipo di azione illegale ma è puramente a scopo divulgativo. Lavorate sempre su software solo quando autorizzati a farlo. Inoltre consiglio di evitare di eseguire programmi di dubbia provenienza sulla vostra macchina principale, meglio sempre eseguirli in ambienti isolati come una macchina virtuale.

Detto questo, procediamo.

## Fase 1 : Capire che tipo di file abbiamo davanti

Nel caso del corso di BASC[^1], si ha a che fare principalmente con file ELF, quando ho fatto questi esercizi, utilizzavo fedora linux, ma i comandi sono gli stessi o comunque molto simili anche in altre distribuzioni linux.

Per determinare il tipo di file, non è sufficiente fare affidamento all'estensione, dato che non è l'estensione a determinare il tipo di file ma è la sua struttura, in genere si può capire il tipo di file in base ai primi o agli ultimi bytes, per farlo, lo si pùo analizzare con un hex editor come [ImHex](https://imhex.werwolv.net/), oppure, si può utilizzare il comando `file`, un esempio è il seguente 

```console
roby@fedora$ file ./nomefile
nomefile: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=cb565ed38996d33e5c6966bbe1699175b9924c75, for GNU/Linux 3.2.0, stripped
```

In questo esempio, ci troviamo davanti un file [ELF](https://it.wikipedia.org/wiki/Executable_and_linkable_format?useskin=vector).

È inoltre utile sapere che esistono particolari file che possono essere interpretati diversamente, questi file si chiamano [polyglot](https://en.wikipedia.org/wiki/Polyglot_(computing)?useskin=vector), un esempio può essere un file che è contemporaneamente una cartella compressa e un eseguibile.

Un'altra cosa utile, può essere l'estrazione di stringhe all'interno di un file, questo lo si può fare con il comando `strings`

```console
roby@fedora$ touch ciao.txt # creiamo un file di esempio
roby@fedora$ echo come va? >> ciao.txt # mettiamoci del testo
roby@fedora$ strings ciao.txt  # estraiamo il testo con il comando strings
come va?
```

Per ottenere informazioni aggiuntive sui file elf, ci sono i comandi [`readelf`](https://www.man7.org/linux/man-pages/man1/readelf.1.html) e [`objdump`](https://www.man7.org/linux/man-pages/man1/objdump.1.html)

## Fase 2 : Analisi statica

L'analisi statica ci permette di visualizzare in un colpo solo tutto il codice assembly del programma, è possibile convertire l'assembly in pseudo-codice attraverso dei decompilatori, un software noto per l'analisi statica è [`Ghidra`](https://ghidra.net).

Passando un eseguibile a Ghidra, esso eseguirà diverse analisi automatizzate, al termine delle quali sarà possibile visualizzare lo pseudo-codice per poter comprendere la struttura del programma.
Oltre allo pseudo codice, quando possible, ghidra recupererà eventuali strutture dati e classi, funzione molto bene con programmi scritti in C, mentre è difficile lavorare con programmi scritti in altri linguaggi. 

L'analisi statica ha due grandi vantaggi, il primo è che si può visualizzare in modo globale il comportamento del programma, il secondo è che non è necessario eseguire il programma, molto utile se si ha a che fare con malware o software per architetture diversa e che non può essere eseguito sul nostro computer.

Sono anche presenti degli svantaggi, il primo è che non è molto facile leggere il codice, anche se decompilato, inoltre non è sempre detto che lo pseudo-codice ricostruito sia affidabile al 100%, rendendo quindi necessario controllare sempre il codice assembly. Questo è dovuto al fatto che magari il programmatore ha adottato tecniche di offuscamento oppure andando contro le convenzioni standard definite dall'ABI[^2] dell'architettura

## Fase 3 : Analisi dinamica

L'analisi dinamica permette di analizzare ed eventualmente modificare lo stato di un programma in esecuzione, ci sono diversi tool per l'analisi statica, nel corso di BASC abbiamo utilizzato [`gdb`](https://en.wikipedia.org/wiki/GNU_Debugger) con il plugin [`gef`](https://github.com/hugsy/gef).

> **Nota sul debugging:**
> 
> A un processo può essere associato uno e un solo debugger, quindi un programma può utilizzare delle tecniche di anti-debugging, agganciandosi a un processo di debug fittizio in modo che chi effettua l'analisi non può agganciarsi con il suo debugger, queste 'mitigazioni' possono essere aggirate, ma è un cane che si morde la coda, man mano che emergono nuove tecniche di antidebug, emergeranno modi per aggirare questi meccanismi.

Detto questo, tramite un debugger si possono eseguire diverse operazioni, tra cui
- Creare dei breakpoint, ovvero punti in cui il codice si interrompe durante l'esecuzione, per facilitarne l'analisi
- Esplorare e modificare il contenuto dei registri e dello stack, per comprendere lo stato attuale del programma ed eventualmente alterarne il comportamento

Anche in questo caso, l'analisi dinamica ha dei vantaggi e degli svantaggi. I vantaggi sono: il fatto che si pùo analizzare lo stato attuale del programma durante l'esecuzione e modificare il comportamento del programma, rendendo più facile l'analisi rispetto all'analisi statica, inoltre se un programma scarica del codice da remoto prima da eseguirlo, è possibile analizzare il codice scaricato solo tramite l'analisi dinamica.

Anche in questo caso, sono presenti degli svantaggi
1. Non si ha una grande compertura del codice e ad ogni run si vede solo flow di esecuzione, andando quindi a perdere eventuali comportamenti
2. A causa dei meccanismi di antidebug, un programma potrebbe comportarsi diversamente quando analizzato con un debugger, nascondendo eventuali comportamenti dannosi.  

In conclusione, se combinate, analisi statica e dinamica ci permettono di ottenere molte informazioni sul programma anche se non si ha a disposizione il codice sorgente.

## Fase 4 : Mitigazioni ed exploit

Una volta compreso il comportamento del programma, se viene individuata una vulnerabilità che può essere sfruttata, un attaccante può costruire un 'exploit' per sfruttare queste vulnerabilità e modificare il comportamento del programma per ottenere dei vantaggi.

I principali punti di ingresso per i programmi sono i buffer overflow, in genere quando viene richiesto un input ed eventuali controlli sulla lunghezza di esso sono assenti o possono essere aggirati, attraverso l'input un attaccante ha la possibilità di alterare il contenuto dello stack e modificare il comportamento del programma.

Senza scendere nei dettagli, menziono tool (utilizzati nelle CTF) quali `ropper` e `pwntools`, il primo permette di individuare dei `gadget` per eseguire degli attacchi di tipo `ropchain` e il secondo è una libreria python che permette di costruire ed eseguire degli attacchi.

Inoltre, `pwntools` ha anche delle utilities che forniscono informazioni aggiuntive sul programma, ad esempio, `checksec` mostra le mitigazioni applicate da un programma, vediamo ad esempio quali sono le mitigazioni applicate da `/bin/sh` nel mio pc

```console
roby@fedora$ pwn checksec /bin/sh
[*] '/bin/sh'
    Arch:     amd64-64-little
    RELRO:    Full RELRO
    Stack:    Canary found
    NX:       NX enabled
    PIE:      PIE enabled
    FORTIFY:  Enabled
```

## Conclusione

Questo breve articolo indicai solo il flusso di lavoro che ho seguito per risolvere gli esercizi presentati nel corso. Ci sono molte nozioni di teoria che per semplicità non ho voluto approfondire, anche perchè sennò non avrebbe senso fare un corso da 6CFU per imparare tutto questo. Spero comunque di avervi incuriosito nel caso non conosceste l'argomento, e spero di non aver annoiato i più esperti di me, dato che non sono un esperto visto che nel corso abbiamo visto solo la 'punta dell'iceberg'.

Grazie mille per aver letto questo articolo!

[^1]: Binary Analysis and Secure Coding
[^2]: Application Binary Interface