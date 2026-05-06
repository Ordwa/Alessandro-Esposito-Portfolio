window.siteContent = {
  meta: {
    title: "Alessandro Esposito | IT Architecture Consultant",
    description:
      "Portfolio professionale di Alessandro Esposito, IT Architecture Consultant: competenze, case study, percorso, certificazioni e contatti in un unico hub digitale.",
  },
  person: {
    name: "Alessandro Esposito",
    initials: "AE",
    role: "IT Architecture Consultant",
    email: "espositoalessandro1997@gmail.com",
    linkedin: "https://www.linkedin.com/in/alessandro-esposito-0880751a6/",
    cvPath: "documents/cv/Alessandro_Esposito_CV_ITA.pdf",
  },
  navigation: [
    { label: "Profilo", target: "#profilo" },
    { label: "Competenze e Case Study", target: "#competenze" },
    { label: "Percorso", target: "#percorso" },
    { label: "Certificati", target: "#certificati" },
    { label: "Contatti", target: "#contatti" },
  ],
  hero: {
    eyebrow: "IT Architecture Consultant",
    title: "Alessandro Esposito",
    copy:
      "Hub professionale per competenze, case study, percorso, certificazioni e contatti",
    quote: "If a machine is expected to be infallible, it cannot also be intelligent.",
    quoteSource:
      "Alan M. Turing - 1947",
    primaryAction: { label: "Contattami", target: "#contatti" },
    secondaryAction: { label: "CV", target: "documents/cv/Alessandro_Esposito_CV_ITA.pdf" },
  },
  snapshot: [
    {
      label: "Focus",
      value: "IT Strategy, Roadmap, Business Continuity, Disaster Recovery, Digital Transformation",
    },
    {
      label: "Output",
      value: "Architetture scalabili, soluzioni di modernizzazione tecnica, coordinamento progetti complessi",
    },
    {
      label: "Approccio",
      value: "Business outcome, stakeholder management, delivery tecnica misurabile",
    },
  ],
  profile: {
    eyebrow: "Profilo",
    title: "Strategia IT e delivery tecnica per trasformare esigenze di business in soluzioni misurabili",
    paragraphs: [
      "Sono un IT Consultant con esperienza nella gestione di progetti IT complessi, dalla fase di pre-sales alla delivery tecnica e al supporto post-produzione.",
      "Ho lavorato in una giovane azienda italiana coordinando team cross-funzionali, contribuendo alla progettazione di architetture scalabili e introducendo pratiche DevOps, integrazione tra sistemi legacy e piattaforme cloud.",
      "Mantengo un forte orientamento al business: facilito il dialogo con gli stakeholder e traduco esigenze operative in soluzioni tecnologiche concrete, sostenibili e misurabili.",
    ],
  },
  capabilities: {
    eyebrow: "Competenze e Case Study",
    title: "Competenze applicate in progetti reali",
    items: [
      {
        id: "it-strategy",
        number: "01",
        title: "IT Strategy",
        copy: "Review infrastrutturale e definizione di strategie IT e roadmap evolutive allineate a obiettivi di business, efficienza e sostenibilita.",
        caseStudyId: "automotive-review",
      },
      {
        id: "it-governance-&-risk-management",
        number: "02",
        title: "IT Governance & Risk Management",
        copy: "Governance di progetti di gestione del rischio infrastrutturale, continuita operativa, disaster recovery e obsolescenza tecnologica.",
        caseStudyId: "construction-os-obsolescence",
      },
      {
        id: "digital-transformation",
        number: "03",
        title: "Digital Transformation",
        copy: "Percorsi di modernizzazione tecnica, sostituzione componenti critici, riduzione del rischio e continuita operativa durante il cambiamento.",
        caseStudyId: "construction-hfm-db-replacement",
      },
      {
        id: "it-outsourcing-&-vendor-management",
        number: "04",
        title: "IT Outsourcing & Vendor Management",
        copy: "Coordinamento stakeholder, fornitori IT, team di delivery, tempi, budget, obiettivi e performance contrattuali.",
        caseStudyId: "automotive-dlm-selection",
      },
    ],
  },
  skillGroups: [
    {
      title: "Hard skill",
      items: ["IT Project Management", "ITSM", "Business Continuity", "Disaster Recovery", "ERP", "Cloud & Infrastructure"],
    },
    {
      title: "Soft skill",
      items: ["Stakeholder management", "Coordinamento fornitori", "Comunicazione tecnica", "Problem solving", "Orientamento al business"],
    },
    {
      title: "Lingue",
      items: ["Italiano madrelingua", "Inglese professionale"],
    },
  ],
  caseStudies: {
    eyebrow: "Case study",
    title: "Case study collegati alle competenze",
    items: [
      {
        id: "automotive-review",
        tag: "IT Strategy",
        client: "Leader Automotive italiano",
        company: "Var Group S.p.A.",
        title: "Review infrastrutturale e Roadmap evolutiva",
        copy: "Obiettivo: Definizione di strategie e roadmap evolutive su un contesto enterprise con doppio data center in business continuity, VMware vSphere, NetApp MetroCluster, oltre 1000 VM tra production e development, con estensione a cloud AWS per disaster recovery e servizi avanzati.",
        evidence: "Impatto: Traduzione degli obiettivi di business in una roadmap eseguibile: Business Continuity, Disaster Recovery su cloud AWS, architettura piu flessibile e sostenibile, percorso concreto di modernizzazione e adozione di servizi cloud avanzati.",
        capabilities: ["IT Strategy & Roadmap", "Infrastructure Governance", "Business Continuity & Disaster Recovery", "Modernization"],
      },
      {
        id: "construction-os-obsolescence",
        tag: "Infrastructure Governance",
        client: "Leader Construction italiano",
        company: "Var Group S.p.A.",
        title: "Gestione obsolescenza O.S.",
        copy: "Obiettivo: Assessment e governance dell'aggiornamento o sostituzione di sistemi operativi obsoleti su parco VM, con prioritizzazione per rischio, dipendenze applicative e criticita di business.",
        evidence: "Impatto: Riduzione del rischio infrastrutturale, maggiore controllo delle dipendenze applicative, pianificazione degli interventi e continuita operativa durante le finestre di manutenzione.",
        capabilities: ["Infrastructure Governance", "Project Management", "Risk Management"],
      },
      {
        id: "construction-hfm-db-replacement",
        tag: "Database Modernization",
        client: "Leader Construction italiano",
        company: "Var Group S.p.A.",
        title: "Sostituzione Database Oracle",
        copy: "Obiettivo: Gestire la sostituzione del database a supporto di Hyperion Financial Management, preservando compatibilita applicativa, finestre operative, rollback plan e continuita dei processi finance.",
        evidence: "Impatto: Riduzione del rischio tecnico, allineamento tra stakeholder Finance e IT e maggiore resilienza dei processi amministrativi durante il cambiamento.",
        capabilities: ["Digital Transformation", "Database Migration", "Business Continuity"],
      },
      {
        id: "automotive-dlm-selection",
        tag: "Software Selection",
        client: "Leader Automotive italiano",
        company: "Var Group S.p.A.",
        title: "Software Selection Data Lifecycle Management",
        copy: "Obiettivo: Selezionare una soluzione di Data Lifecycle Management per la gestione del ciclo di vita dei dati, con definizione dei requisiti, scouting e valutazione delle soluzioni, confronto tra vendor e supporto alla decisione finale.",
        evidence: "Impatto: Processo decisionale piu governato, confronto piu chiaro tra soluzioni e vendor, raccolta requisiti piu solida e migliore allineamento tra business, IT e fornitori.",
        capabilities: ["Project & Vendor Management", "Software Selection", "Stakeholder Management"],
      },
    ],
  },
  journey: {
    eyebrow: "Percorso",
    title: "Percorso professionale",
    items: [
      {
        years: "Oggi - 2025",
        role: "IT Architecture Consultant",
        company: "Var Group s.p.a.",
        copy: "Consulenza strategica e Advisory IT su roadmap evolutive, governance tecnologica, coordinamento stakeholder e supporto a programmi complessi di trasformazione digitale.",
        tags: ["IT Strategy", "IT Governance", "Disaster Recovery"],
      },
      {
        years: "2025 - 2024",
        role: "IT Project Manager",
        company: "Alpha Team s.r.l.",
        copy: "Pianificazione, gestione e coordinamento di progetti IT per continuita operativa, disaster recovery, trasformazione digitale e modernizzazione dei processi.",
        tags: ["Project Management", "BC/DR", "ITSM", "Digital Transformation"],
      },
      {
        years: "2024 - 2022",
        role: "System Engineer",
        company: "Alpha Team s.r.l.",
        copy: "Gestione, configurazione e presidio operativo di ambienti infrastrutturali, con attenzione a prestazioni, scalabilita e requisiti di business.",
        tags: ["System Engineering", "ERP", "Infrastructure", "Operations"],
      },
      {
        years: "2022 - 2021",
        role: "Web Developer e Supporto IT",
        company: "GUIBIZ s.r.l.",
        copy: "Esperienza iniziale in contesto IT, utile a consolidare basi operative, orientamento al cliente e comprensione dei processi tecnici di supporto.",
        tags: ["IT", "Operations", "Customer orientation"],
      },
      {
        years: "2021 - 2017",
        role: "Laurea triennale in Informatica L-31",
        company: "Universita Telematica Pegaso - Universita degli Studi di Pisa",
        copy: "Formazione accademica in Informatica, con focus su programmazione, sistemi operativi, basi di dati, reti e sicurezza informatica.",
        tags: ["Formazione", "Informatica", "Università"],
      },
    ],
  },
  certificates: {
    eyebrow: "Certificati",
    title: "Certificazioni e attestati professionali",
    intro:
      "Sezione alimentata dai PDF presenti in documents/certificates. Aggiungi nuovi file nella cartella e una voce in questo elenco.",
    items: [
      {
        title: "Leadership Development Program - Open",
        issuer: "LDP OPEN",
        year: "2026",
        file: "documents/certificates/Attestato_LDP OPEN - Diversity Equity Inclusion_Esposito.pdf",
      },
      {
        title: "Data Literacy",
        issuer: "Webinar Data Literacy",
        year: "2026",
        file: "documents/certificates/Attestato_Webinar Data Literacy - 01_04_2026_Esposito.pdf",
      },
      {
        title: "Sustainability",
        issuer: "Var Group",
        year: "2026",
        file: "documents/certificates/Attestato_Sustainability Var Group_Esposito.pdf",
      },
      {
        title: "OKR Objective Key Results - Coach Academy",
        issuer: "OKR Coach Academy",
        year: "2025",
        file: "documents/certificates/Attestato_OKR Coach Academy_Esposito.pdf",
      },
      {
        title: "Direttiva NIS2",
        issuer: "Network and Information Security",
        year: "2025",
        file: "documents/certificates/Attestato_Direttiva NIS2 (Network and Information Security)_Esposito.pdf",
      },
      {
        title: "DPA e NDA",
        issuer: "Data Processing Agreement e Non Disclosure Agreement",
        year: "2025",
        file: "documents/certificates/Attestato_DPA and NDA Istruzioni per l'uso_Esposito.pdf",
      },
      {
        title: "Subappalto e Sub-Responsabile del trattamento",
        issuer: "Formazione compliance",
        year: "2025",
        file: "documents/certificates/Attestato Subappalto e Sub-Responsabile del trattamento Esposito.pdf",
      },
      {
        title: "Qualificazione ISIPM-Base",
        issuer: "ISIPM",
        year: "2024",
        file: "documents/certificates/Attestato Qualificazione ISIPM-Base.pdf",
      },
      {
        title: "TeamSystem Enterprise Tecnico",
        issuer: "TeamSystem",
        year: "2023",
        file: "documents/certificates/Certificazione TS Enterprise Tecnico - Esposito_Alessandro.pdf",
      },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Per opportunita, collaborazioni o confronti tecnici",
    actions: [
      { label: "Email", target: "mailto:espositoalessandro1997@gmail.com", variant: "primary" },
      {
        label: "LinkedIn",
        target: "https://www.linkedin.com/in/alessandro-esposito-0880751a6/",
        variant: "secondary",
        external: true,
      },
      { label: "CV", target: "documents/cv/Alessandro_Esposito_CV_ITA.pdf", variant: "secondary" },
    ],
  },
  footer: {
    copyright: "© 2026 Alessandro Esposito",
    backToTop: "Torna su",
  },
};
