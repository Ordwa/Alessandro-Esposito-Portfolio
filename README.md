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

Per aggiungere una nuova esperienza nel percorso, aggiungi un oggetto nell'array `journey.items` indicando:

- `years`
- `role`
- `company`
- `copy`
- `tags`

Per aggiungere un certificato, carica il file in `documents/certificates/` e aggiungi una voce in `certificates.items` con il percorso del file.

## CV

Il pulsante CV punta a `documents/cv/curriculum.pdf`. Sostituisci quel file con il curriculum aggiornato mantenendo lo stesso percorso.
