import type { CaseData } from "@/components/case-detail/case-layout";

export const notaryHubData: CaseData = {
  slug: "notary-hub",
  heroMockup: "", // TODO: add hero image, e.g. "/Hero_mockup_notaryhub_2800x1400.jpg"
  tagline: "Redesigning the LegalTech platform notaries run their practice on — from client intake to remote online notarization.",
  context: {
    invite: "NotaryHub brought me in to redesign their LegalTech SaaS platform — the system notaries use to manage clients, documents, approvals, and remote notarization sessions in one place.",
    situation: "The platform had grown feature by feature without a coherent structure. Notaries juggled clients, documents, approvals, and notarization sessions across cluttered screens and manual steps, which made everyday work slow and error-prone.",
    outcome: "A redesigned platform that unifies the full notary workflow — client management, document handling, approvals, and remote online notarization — into one clear, guided experience.",
  },
  role: {
    summary: "As Lead Product Designer, I owned the complete redesign of the NotaryHub platform — from restructuring the information architecture to designing every core workflow notaries use to run their practice day to day.",
    summaryExtra: "I mapped the real notary workflow end to end, then rebuilt the product around it: client intake, document preparation, approvals, and the remote online notarization session itself. Throughout, I kept the experience clear and auditable — critical for a regulated legal product — and validated flows with the people who use them every day.",
    owned: ["Product Discovery", "Information Architecture", "Workflow Design", "Interface Design", "Prototyping & Validation"],
    withWhom: ["Product Management", "Engineering", "Legal / Compliance"],
    howIWorked: ["End-to-end redesign", "Workflow-driven design", "Cross-functional collaboration", "Iterative delivery", "Validated with real users"],
  },
  overviewImages: ["", "", "", ""], // TODO: add platform screen exports
  overviewTagline: "One platform for the entire notarization workflow.",
  transformation: [
    {
      number: "01 — Clients & Cases",
      title: "One place to manage every client",
      description: "Client information lived across disconnected tools and paperwork. We designed a clear system for intake and case management, so notaries always have the full context on who they're working with.",
      visual: "", // TODO
      points: [
        "Structured client intake in place of manual paperwork",
        "Every case tied to its client, documents, and status",
        "Full history and context available at a glance",
      ],
    },
    {
      number: "02 — Documents & Preparation",
      title: "From upload to ready-to-sign",
      description: "Preparing documents for notarization was fragmented and easy to get wrong. We designed a focused flow to upload, organize, and prepare documents, so everything is ready before a session begins.",
      visual: "", // TODO
      points: [
        "Upload and organize documents against each case",
        "Prepare and tag signing fields before the session",
        "Clear document status from draft to notarized",
      ],
    },
    {
      number: "03 — Approvals & Workflow",
      title: "A clear path through every step",
      description: "Approvals happened over email and manual checks, with no shared view of where things stood. We designed a workflow that routes each document through review and approval with a clear, auditable trail.",
      visual: "", // TODO
      points: [
        "Route documents through defined review and approval steps",
        "Shared visibility of what's pending, approved, or blocked",
        "An auditable trail behind every decision",
      ],
    },
    {
      number: "04 — Remote Online Notarization",
      title: "Notarizing securely, from anywhere",
      description: "The core of the product — conducting a legally valid notarization online. We designed the session experience around identity verification, live signing, and trust, so notaries and clients can complete it confidently from anywhere.",
      visual: "", // TODO
      points: [
        "Guided remote notarization session for notary and client",
        "Identity verification and secure e-signing built in",
        "Every session recorded and logged for compliance",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "4", label: "Core modules", body: "Clients, documents, approvals, and remote notarization — one connected platform." },
      { value: "1", label: "Unified platform", body: "Replaces disconnected tools and manual paperwork with a single source of truth." },
      { value: "100%", label: "Remote-ready", body: "The full notarization workflow, from intake to signed document, online." },
      { value: "24/7", label: "Access", body: "Notaries and clients can start and track work anytime, from anywhere." },
    ],
    summary: "By rebuilding the platform around the real notary workflow, the product turned a fragmented, manual process into one clear, auditable experience.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "In regulated legal workflows, trust comes from clarity — every step has to be obvious, and every action auditable.",
      },
      {
        number: "02",
        insight: "The hardest part wasn't the notarization itself, but everything around it — intake, documents, and approvals that had to feel effortless.",
      },
      {
        number: "03",
        insight: "Designing for professionals who repeat the same flow daily means optimizing for speed and confidence, not novelty.",
      },
    ],
  },
};
