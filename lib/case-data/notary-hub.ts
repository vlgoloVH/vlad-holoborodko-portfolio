import type { CaseData } from "@/components/case-detail/case-layout";

export const notaryHubData: CaseData = {
  slug: "notary-hub",
  heroMockup: "", // TODO: add hero image, e.g. "/Hero_mockup_notaryhub_2800x1400.jpg"
  tagline: "Designing NotaryHub end to end — the Remote Online Notarization platform for notaries, companies, and clients, plus the internal back-office system that runs it.",
  context: {
    invite: "NotaryHub, a US Remote Online Notarization (RON) platform, brought me in to design the product end to end — both the client-facing platform notaries, companies, and their clients use to notarize documents online, and the internal system that runs it behind the scenes.",
    situation: "Notarization traditionally required the notary and signer to meet in person. RON changes that — but doing it legally means handling identity verification, live audio-video signing, digital signatures, and compliance, for three very different audiences, plus a back-office to manage it all. And it still had to feel simple.",
    outcome: "A complete, MISMO-compliant RON product across web and mobile — the client platform where consumers, notaries, and companies notarize documents online, and the internal back-office system that runs it all. Today NotaryHub is known as one of the most accessible and easy-to-use RON platforms in the US.",
  },
  role: {
    summary: "I designed the entire NotaryHub product — every screen across web and native mobile, plus the internal back-office that runs it. I owned the experience for all three sides of the client platform — consumers, notaries, and companies — and the admin system the team uses to manage users, sessions, and compliance data behind the scenes.",
    summaryExtra: "Designing a legally binding, regulated product meant every step had to be clear, secure, and auditable — identity verification, knowledge-based authentication, document preparation, live audio-video signing, and digital signatures. I balanced a first-time consumer against a professional notary running dozens of signings, and made both feel effortless — while giving the internal team the data-heavy tools to run the whole platform.",
    owned: ["Product Design (Web)", "Mobile App Design (iOS & Android)", "Internal Back-Office / Admin", "Information Architecture", "End-to-End Workflows", "Data & Records Structure"],
    withWhom: ["Product Management", "Engineering", "Legal / Compliance", "Operations"],
    howIWorked: ["End-to-end design", "Multi-sided platform thinking", "Web & mobile", "Cross-functional collaboration", "Iterative delivery"],
  },
  overviewImages: ["", "", "", ""], // TODO: add platform screen exports
  overviewTagline: "One product. Client platform and internal system. Web and mobile.",
  transformation: [
    {
      number: "01 — For Consumers",
      title: "Get a document notarized in minutes",
      description: "For someone who has never used a notary online, the flow had to be obvious. We designed a consumer experience where anyone can upload a document, verify their identity, and connect with a notary — completing a notarization in as little as five minutes.",
      visual: "", // TODO
      points: [
        "Request an on-demand notary or schedule with a preferred one",
        "Guided identity verification and document upload",
        "Sign live over audio-video and download instantly",
      ],
    },
    {
      number: "02 — For Notaries",
      title: "Run a modern notary practice",
      description: "Notaries needed a workspace to manage signings, prepare documents, set pricing, and get paid — reaching clients far beyond their local area. We designed the tools that let them run and grow an online practice.",
      visual: "", // TODO
      points: [
        "Manage appointments and signing sessions in one place",
        "Built-in document preparation and signing tools",
        "Flexible pricing and instant payouts for completed signings",
      ],
    },
    {
      number: "03 — The RON Session",
      title: "A legally valid signing, done remotely",
      description: "The heart of the product — the live remote notarization. We designed the session around trust: verified identity, real-time document review, live video, digital signatures, and an embedded audit trail that keeps every notarization compliant.",
      visual: "", // TODO
      points: [
        "Live audio-video session between notary and signer",
        "Real-time document sharing and guided e-signing",
        "Digital signature and embedded fingerprint for tamper-proof records",
      ],
    },
    {
      number: "04 — For Companies",
      title: "Notarization at enterprise scale",
      description: "Notary companies needed to run RON across their own staff and constituents. We designed the corporate experience so organizations can manage notaries, sessions, and signings at scale — with fees handled internally.",
      visual: "", // TODO
      points: [
        "Company accounts managing multiple notaries and staff",
        "Notarization for constituents without per-signing fees",
        "A consistent, compliant experience across the whole organization",
      ],
    },
    {
      number: "05 — Internal Back-Office",
      title: "The system that runs the platform",
      description: "Behind the customer-facing product sits the engine that keeps it running. I designed the internal back-office — where the team manages notaries, users, sessions, documents, and compliance records across the platform's databases.",
      visual: "", // TODO
      points: [
        "Manage notaries, users, and companies from one admin system",
        "Oversee sessions, documents, and identity records at scale",
        "Structured, data-heavy views built for compliance and audit",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "3", label: "Audiences served", body: "Consumers, individual notaries, and notary companies — all in one platform." },
      { value: "2", label: "Client platforms", body: "A full web application and a native mobile experience." },
      { value: "1", label: "Back-office system", body: "The internal admin and data platform that runs the whole operation." },
      { value: "5 min", label: "Fastest signing", body: "A remote notarization can be completed in as little as five minutes." },
    ],
    summary: "By designing both the client platform and the internal back-office, NotaryHub became a complete, MISMO-compliant RON product — recognized as one of the most accessible and easy-to-use platforms in the space.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "Designing a legally binding product means trust is the real feature — every step has to be clear, secure, and auditable.",
      },
      {
        number: "02",
        insight: "A three-sided platform only works when each audience feels like it was built just for them — the consumer, the notary, and the company.",
      },
      {
        number: "03",
        insight: "The polished front-end is only half the product — a well-designed back-office is what lets the whole platform run and scale.",
      },
    ],
  },
};
