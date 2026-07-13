import type { CaseData } from "@/components/case-detail/case-layout";

export const danMonFairwindData: CaseData = {
  slug: "dan-mon-fairwind",
  heroMockup: "/Hero_mockup_danmo_2800x1400.jpg",
  tagline: "Designing the enterprise CRM that runs the full sales-to-supply lifecycle for a global marine spare-parts business.",
  context: {
    invite: "Dan-Mon Fairwind runs a global marine spare-parts business on a web of spreadsheets, email, and disconnected tools. They brought me in to design a single internal CRM their whole team could run the business on — from first enquiry to delivered order.",
    situation: "Every enquiry, quote, purchase order, and customer lived in a different place. Sales chased quotes over email, procurement re-keyed the same data, and no one had a clear view of a deal from start to finish. As volume grew, context and margin leaked at every handoff.",
    outcome: "A unified enterprise CRM covering the complete lifecycle — opportunities, quotations, procurement, order fulfilment, and customer relationships — giving the team one connected system and a single source of truth for every deal.",
  },
  role: {
    summary: "I owned end-to-end design of the internal CRM — the system the entire company uses to manage the sales-to-supply lifecycle. From product discovery and workflow mapping to information architecture and interface design across every module, I shaped how the team turns enquiries into quotes, purchase orders, and delivered parts.",
    summaryExtra: "I worked upstream from the screens: mapping the real, messy workflow first — across sales, procurement, and operations — then designing each module to mirror how the business actually runs. I built a shared pattern library so complex, data-heavy tools stayed consistent, and validated every flow with the people who use it daily.",
    owned: ["Product Discovery", "Workflow Mapping", "Information Architecture", "Interface Design", "Platform Design System", "Prototyping & Validation"],
    withWhom: ["Founders / Operations Lead", "Sales Team", "Procurement Team", "Engineering"],
    howIWorked: ["End-to-end execution", "Workflow-driven design", "Hands-on with the team", "Module-by-module delivery", "Validated with daily users"],
  },
  overviewImages: ["/Image_1_danmo_2800x1400.jpg", "/Image_2_danmo_2800x1400.jpg", "/Image_3_danmo_2800x1400.jpg", "/Image_4_danmo_2800x1400.jpg"],
  overviewTagline: "One CRM for the entire sales lifecycle.",
  transformation: [
    {
      number: "01 — Opportunities & Pipeline",
      title: "One view of every deal in play",
      description: "Enquiries used to live in inboxes with no shared status. We designed a pipeline that gives sales one view of every opportunity — from first enquiry to won or lost — with the context needed to move each deal forward.",
      visual: "", // TODO
      points: [
        "Capture every enquiry in one place, not scattered across inboxes",
        "Track each opportunity through clear pipeline stages",
        "Full context on each deal — customer, parts, history — at a glance",
      ],
    },
    {
      number: "02 — Quotations",
      title: "From enquiry to quote in one flow",
      description: "Building a quote meant sourcing prices, then re-keying everything into a document. We designed a quotation module that turns an opportunity into a professional quote without leaving the system.",
      visual: "", // TODO
      points: [
        "Generate quotes directly from an opportunity",
        "Pull parts, pricing, and supplier data into one place",
        "Track quote status — sent, accepted, revised — end to end",
      ],
    },
    {
      number: "03 — Procurement & Fulfilment",
      title: "From won deal to delivered order",
      description: "Once a quote was accepted, procurement re-entered the same data to order from suppliers, then tracked delivery separately. We connected the whole flow so an accepted quote moves straight into supplier orders and on to the customer.",
      visual: "", // TODO
      points: [
        "Convert accepted quotes into supplier purchase orders",
        "Source and compare across multiple suppliers",
        "Track fulfilment from supplier to customer delivery",
        "Every order connected back to its original deal",
      ],
    },
    {
      number: "04 — Customers & Accounts",
      title: "The full history behind every relationship",
      description: "Customer information was spread across people and files. We built account management so every relationship carries its full history — enquiries, quotes, orders — in one place.",
      visual: "", // TODO
      points: [
        "A single record for every customer and account",
        "Full history of enquiries, quotes, and orders per account",
        "The context to serve repeat customers faster",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "4", label: "Connected modules", body: "Opportunities, quotations, procurement & fulfilment, and accounts — one system." },
      { value: "1", label: "Source of truth", body: "A single CRM replaces scattered spreadsheets, email, and disconnected tools." },
      { value: "100%", label: "Lifecycle coverage", body: "The full sales-to-supply journey designed, from enquiry to delivered order." },
      { value: "60+", label: "Countries reached", body: "Supports sourcing, fulfilment, and delivery to customers worldwide." },
    ],
    summary: "By designing the CRM around how the business truly runs, the team gained one connected view of every deal — and the speed, clarity, and control to scale a complex global operation.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "For internal tools, clarity and speed beat visual polish — every extra click and re-keyed field costs the team real time and margin.",
      },
      {
        number: "02",
        insight: "Mapping the real, messy workflow across sales, procurement, and ops mattered more than any single screen — the system had to mirror how the business actually runs.",
      },
      {
        number: "03",
        insight: "A consistent pattern library made complex, data-heavy modules feel like one coherent product the whole team could learn quickly.",
      },
    ],
  },
};
