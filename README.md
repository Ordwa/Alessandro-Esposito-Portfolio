# Alessandro-Esposito-Portfolio
Questo repository funge da hub digitale alternativo a CV e LinkedIn, consolidando il profilo del IT Architecture Consultant. Centralizza portfolio professionale, case study, percorso lavorativo, certificazioni e tanto altro, offrendo una panoramica completa delle competenze strategiche e operative.

## Sito portfolio

Il portfolio è una pagina statica pensata per funzionare come hub professionale unico:

- profilo consulenziale
- competenze e aree di intervento
- case study narrativi
- percorso lavorativo su timeline verticale
- certificati e attestati
- contatti e link professionali

Apri `index.html` nel browser per visualizzarlo.

## Modifica contenuti

Tutti i testi principali del sito sono in `content.js`. Per aggiornare titoli, paragrafi, competenze, case study, percorso, certificati e contatti modifica quel file senza toccare `index.html`.

Le competenze sono mostrate come accordion collegati ai case study:

- ogni voce in `capabilities.items` ha un `caseStudyId`
- ogni voce in `caseStudies.items` ha un `id`
- quando `caseStudyId` e `id` coincidono, l'accordion della competenza mostra quel case study inline

I case study possono contenere cliente/progetto, mentre il `Percorso` deve restare focalizzato sulle aziende per cui hai lavorato.

Per aggiungere una nuova esperienza nel percorso, aggiungi un oggetto nell'array `journey.items` indicando:

- `years`
- `role`
- `company`
- `copy`
- `tags`

Per aggiungere un certificato, carica il file in `documents/certificates/` e aggiungi una voce in `certificates.items` con il percorso del file.

## CV

Il pulsante CV punta a `documents/cv/Alessandro_Esposito_CV_ITA.pdf` e apre l'anteprima del PDF nel browser. Se aggiungi un nuovo file con un nome diverso, aggiorna `person.cvPath`, `hero.secondaryAction.target` e l'azione `Apri CV` in `content.js`.
