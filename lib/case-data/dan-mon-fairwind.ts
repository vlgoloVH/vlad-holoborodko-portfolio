import type { CaseData } from "@/components/case-detail/case-layout";

export const danMonFairwindData: CaseData = {
  slug: "notary-hub",
  heroMockup: "/Hero_mockup_notaryhub_2800x1400.jpg",
  tagline: "Designing NotaryHub end to end: the Remote Online Notarization platform for notaries, companies, and their clients, plus the internal back-office system that keeps it running.",
  context: {
    invite: "NotaryHub is a US platform for Remote Online Notarization (RON). They brought me in to design the whole product: both the client-facing side that notaries, companies, and clients use to notarize documents online, and the internal system that runs everything behind the scenes.",
    situation: "Notarizing a document used to mean meeting a notary in person. RON removes that step, but doing it legally is a lot to handle. Identity checks, live video signing, digital signatures, compliance, and three very different audiences, plus a back office to manage it all. The real challenge was making that feel simple.",
    outcome: "The result is a complete, MISMO-compliant RON product. It's a responsive web platform (a PWA) where consumers, notaries, and companies get documents notarized online, backed by an internal system that runs the whole operation. NotaryHub is now known as one of the easiest and most accessible RON platforms in the US.",
  },
  role: {
    summary: "I designed the entire NotaryHub product. That covered every screen of the responsive web platform and the internal back office that powers it. I owned the experience for all three sides of the client platform (consumers, notaries, and companies), along with the admin tools the team uses to manage users, sessions, and compliance data.",
    summaryExtra: "This is a regulated, legally binding product, so every step had to be clear, secure, and easy to audit. That meant identity verification, knowledge-based authentication, document prep, live video signing, and digital signatures. I had to balance a first-time consumer against a professional notary running dozens of signings, make it work for both, and still give the internal team the data-heavy tools they needed to run the platform.",
    owned: ["Product Design (Web)", "Responsive / PWA Design", "Internal Back-Office / Admin", "Information Architecture", "End-to-End Workflows", "Data & Records Structure"],
    withWhom: ["Product Management", "Engineering", "Legal / Compliance", "Operations"],
    howIWorked: ["End-to-end design", "Multi-sided platform thinking", "Responsive / PWA", "Cross-functional collaboration", "Iterative delivery"],
  },
  overviewImages: ["/Image_1_notaryhub_2800x1400.jpg", "/Image_2_notaryhub_2800x1400.jpg", "/Image_3_notaryhub_2800x1400.jpg", "/Image_4_notaryhub_2800x1400.jpg"],
  overviewTagline: "One product: the client platform and the internal back office that runs it.",
  transformation: [
    {
      number: "01 — For Consumers",
      title: "Get a document notarized in minutes",
      description: "Plenty of people had never used an online notary before, so the flow had to be obvious. We built a consumer experience where anyone can upload a document, verify their identity, and connect with a notary, finishing a notarization in as little as five minutes.",
      visual: "", // TODO
      points: [
        "Request a notary on demand, or schedule one you already trust",
        "Simple, guided identity verification and document upload",
        "Sign live over video and download the finished document right away",
      ],
    },
    {
      number: "02 — For Notaries",
      title: "Run a modern notary practice",
      description: "Notaries needed one place to manage signings, prepare documents, set their pricing, and get paid, all while reaching clients well beyond their local area. We designed the tools to help them run and grow an online practice.",
      visual: "", // TODO
      points: [
        "Manage appointments and signing sessions in one place",
        "Prepare and mark up documents with built-in tools",
        "Set flexible pricing and get paid instantly once a signing is done",
      ],
    },
    {
      number: "03 — The RON Session",
      title: "A legally valid signing, done remotely",
      description: "This is the core of the product: the live remote notarization. We designed the session around trust, with verified identity, real-time document review, live video, digital signatures, and a built-in audit trail that keeps every notarization compliant.",
      visual: "", // TODO
      points: [
        "Live video session between the notary and the signer",
        "Documents shared in real time, with guided e-signing",
        "Digital signature and embedded fingerprint keep records tamper-proof",
      ],
    },
    {
      number: "04 — For Companies",
      title: "Notarization at enterprise scale",
      description: "Notary companies needed to run RON across their own staff and clients. We designed the corporate side so an organization can manage its notaries, sessions, and signings at scale, with fees handled internally.",
      visual: "", // TODO
      points: [
        "Company accounts that manage multiple notaries and staff",
        "Notarization for constituents with no per-signing fee",
        "One consistent, compliant experience across the whole organization",
      ],
    },
    {
      number: "05 — Internal Back-Office",
      title: "The system that runs the platform",
      description: "Behind the customer-facing product is the engine that keeps it running. I designed the internal back office, where the team manages notaries, users, sessions, documents, and compliance records across the platform's databases.",
      visual: "", // TODO
      points: [
        "Manage notaries, users, and companies from one admin system",
        "Keep track of sessions, documents, and identity records at scale",
        "Structured, data-heavy views built for compliance and audit",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "3", label: "Audiences served", body: "Consumers, individual notaries, and notary companies, all in one platform." },
      { value: "PWA", label: "Responsive web app", body: "A single web platform (PWA) that adapts from desktop to mobile." },
      { value: "1", label: "Back-office system", body: "The internal admin and data platform that runs the whole operation." },
      { value: "5 min", label: "Fastest signing", body: "A remote notarization can be done in as little as five minutes." },
    ],
    summary: "By designing both the client platform and the internal back office, NotaryHub grew into a complete, MISMO-compliant RON product, and one that's known as one of the most accessible and easy-to-use platforms around.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "When a product is legally binding, trust is the real feature. Every step has to be clear, secure, and easy to audit.",
      },
      {
        number: "02",
        insight: "A three-sided platform only works when each audience feels like it was built just for them: the consumer, the notary, and the company.",
      },
      {
        number: "03",
        insight: "A polished front end is only half the job. A well-designed back office is what actually lets the whole platform run and scale.",
      },
    ],
  },
};
