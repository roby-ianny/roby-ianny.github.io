---
title: "Setup di Ollama per OpenWebUI e Continue.dev"
description: "In questo post, scritto durante la procedura, racconterò come ho configurato ollama sul mio pc con una Intel ARC B580 con Vulkan"
date: "Mar 15 2026"
---

Questo post è un po' particolare perché lo utilizzerò per documentare cosa farò per raggiungere il mio obiettivo.
Ammetto che al momento le mie conoscenze sul far girare LLM in locale sono molto limitate, quindi mi scuso in anticipo se ci saranno errori.
Penso però che questo post possa essere utile per chi è nella mia stessa situazione.

Dato che ho terminato la quota gratuita per le inline suggestions di GitHub copilot, mi è venuto in mente che potrei sostituirlo con un qualcosa di eseguito in locale e che utilizzi modelli open weight.
Ho pensato quindi al seguente setup:
- Ollama per far girare i modelli ed esporli ai servizi che vogliono utilizzarli
- Continue.dev per sostituire Copilot
- OpenWebUI per chattare con gli assistenti anche da browser

## Step 0: Setup di Ollama

Personalmente, ho optato per la via più semplice, ho scelto quindi di utilizzare l'immagine docker ufficiale, come riportato nella [documentazione](https://docs.ollama.com/docker#docker) e [abilitare Vulkan](https://docs.ollama.com/docker#vulkan-support) per l'accelerazione hardware sfruttando la GPU

```console
roby@fedora$ sudo dnf install mesa-vulkan-drivers vulkan-loader vulkan-tools # installazione dei driver vulkan
roby@fedora$ sudo dnf install podman # o docker, come preferite
roby@fedora$ vulkaninfo --summary # controlla che sia tutto ok
roby@fedora$ docker run -d --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 -e OLLAMA_VULKAN=1 --name ollama ollama/ollama
roby@fedora$ docker exec -it ollama ollama run qwen3.5:0.8b #provo un modello piccolo per vedere se funziona tutto
roby@fedora:~$ docker exec -it ollama ollama ps # verifichiamo che il modello sia sulla GPU
Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg.
NAME            ID              SIZE      PROCESSOR    CONTEXT    UNTIL              
qwen3.5:0.8b    f3817196d142    2.1 GB    100% GPU     4096       3 minutes from now    
```

Nel mio caso ho usato `--device /dev/dri` perché serve per localizzare la GPU Intel


## Step 1: Setup di Continue

Qui arriva la parte semplice in quanto il setup è molto diretto, basta installare l'estensione [continue.dev](https://marketplace.visualstudio.com/items?itemName=Continue.continue), lo si può fare lanciando il seguente comando da VSCode 

```
ext install Continue.continue
```

Una volta installata l'estensione, si potrà configurare in modo semplice seguendo la [documentazione](https://docs.continue.dev/guides/ollama-guide), nel mio caso, ho impostato di utilizzare l'[autodetect](https://docs.continue.dev/guides/ollama-guide#method-2-using-autodetect), il mio file di configurazione sarà quindi:

```yaml
name: MyFirstConfig 
version: 1.0.0
schema: v1

models:
  - name: Autodetect
    provider: ollama
    model: AUTODETECT
    roles:
      - chat
      - edit
      - apply
      - rerank
      - autocomplete
```

Ora possiamo dire di aver sostituito Copilot con Continue

## Step 2: Setup di OpenWebUI
Basta usare [l'immagine docker](https://docs.openwebui.com/) proposta sul sito ufficiale, nel nostro caso, scegliamo la versione senza ollama, dato che è in esecuzione su un container separato

```console
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

E in poco tempo abbiamo tutto up and running e utilizzando solamente dei container!

Fonti:
- [Documentazione di Ollama](https://docs.ollama.com/docker#docker)
- [Setup di Ollama con Continue](https://docs.continue.dev/guides/ollama-guide)
- [Documentazione di OpenWebUI](https://docs.openwebui.com/)