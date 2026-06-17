export type CaseSection = {
  id: string;
  title: string;
  body: string[];
};

export type Case = {
  slug: string;
  title: string;
  client: string;
  year: string;
  description: string;
  cover: string;
  industry: string;
  businessType: "B2B" | "B2C" | "SaaS";
  platform: "Web" | "Mobile" | "Desktop";
  tags?: string[];
  meta: {
    duration: string;
    role: string;
    team: string;
    tools: string[];
    skills: string[];
  };
  sections: CaseSection[];
};

export const CASES: Case[] = [
  {
    slug: "smartcrowd",
    title: "SmartCrowd",
    client: "SmartCrowd — Real Estate Investment Platform",
    year: "2025-2026",
    description:
      "Redesigning the UAE's leading real estate investment platform to help investors discover, invest, and manage properties with confidence.",
    cover: "/cases/SmartCrowd_preview.jpg",
  industry: "Fintech",
    businessType: "B2C",
    platform: "Web",
    tags: ["Fintech", "Proptech", "Product Design"],
    meta: {
      duration: "7 months",
      role: "Lead Product Designer",
      team: "2 PMs, 6 engineers, 1 data analyst",
      tools: ["Figma", "FigJam", "Maze", "Notion"],
      skills: ["Fintech", "Proptech", "Product Design"],
    },
    sections: [
      {
        id: "summary",
        title: "Executive summary",
        body: [
          "Finlytic's dashboard had grown organically for five years into a dense grid of tables that only power users understood. Churn among mid-market accounts was rising, and the support team was fielding the same 'how do I find X' questions every week.",
          "Over seven months I led the redesign of the core analytics workspace — from the reporting model to the visual system — shipping a modular dashboard that let analysts build their own views without engineering help.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        body: [
          "New users took an average of 11 days to create their first custom report, and most never did — they relied on the support team to export data manually instead.",
          "The existing UI exposed every filter and column at once, which made the product feel powerful in a sales demo but unusable in daily work. Customers were paying for capability they couldn't access.",
        ],
      },
      {
        id: "context",
        title: "Context & constraints",
        body: [
          "The underlying data model was a constraint we couldn't change in this cycle — over 40 report types had to remain queryable, and the redesign had to ship incrementally behind a feature flag so existing customers weren't disrupted mid-quarter.",
          "Engineering capacity was split across two squads, so the design system had to be built component-by-component in a way that let each squad ship independently without visual drift.",
        ],
      },
      {
        id: "research",
        title: "Research",
        body: [
          "I ran 14 contextual interviews with analysts across three customer segments, plus a diary study with five power users over two weeks to understand how reports were actually assembled day to day.",
          "The clearest finding: people thought in 'report recipes' — a saved combination of filters, groupings and a chart type — but the product had no concept of saving or sharing that. Every session started from zero.",
        ],
      },
      {
        id: "process",
        title: "Process",
        body: [
          "We mapped the existing report-builder flow against the mental model from research and found a 6-step gap between 'open the app' and 'see the chart I need'. From there I ran three rounds of low-fidelity prototypes with the diary-study cohort, testing a 'report recipe' concept that let users name, save and reuse a configuration.",
          "Each round was scored against time-to-first-report and a post-task confidence rating, which gave the team a concrete metric to align engineering priorities around — rather than opinions about layout.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        body: [
          "The final design introduced a left-hand workspace of saved recipes, a progressive filter panel that only shows relevant fields for the selected report type, and a chart layer that updates live as filters change.",
          "I also designed a lightweight component library — tables, filter chips, chart frames and empty states — documented in Figma and handed to both squads as a shared source of truth, which cut design QA time on new features by roughly half.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Time-to-first-report dropped from 11 days to under 40 minutes for new accounts in the beta cohort. Support tickets tagged 'how do I build a report' fell by 58% within the first quarter post-launch.",
          "Net revenue retention for mid-market accounts on the new dashboard improved by 6 points quarter-over-quarter, which the leadership team attributed directly to reduced churn risk flagged by the customer success team.",
        ],
      },
    ],
  },
  {
    slug: "space-needle",
    title: "Space Needle",
    client: "Space Needle — Ticketing Experience",
    year: "2024-2025",
    description:
      "Designed the end-to-end ticketing experience for one of Seattle's most iconic attractions. Created customer-facing products across kiosks, web, and box offices, alongside a powerful internal platform for managing ticket inventory, pricing, discounts, schedules, and sales operations.",
    tags: ["B2C", "B2B", "Enterprise"],
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
    industry: "Travel",
    businessType: "B2C",
    platform: "Mobile",
    meta: {
      duration: "5 months",
      role: "Senior Product Designer",
      team: "1 PM, 4 engineers, 1 researcher",
      tools: ["Figma", "Lottie", "UserTesting", "Amplitude"],
      skills: ["UX research", "Interaction design", "Prototyping", "A/B testing"],
    },
    sections: [
      {
        id: "summary",
        title: "Executive summary",
        body: [
          "Wayfare's booking funnel lost almost half its users between selecting a trip and completing checkout. I led a redesign of that flow, focused on trust signals, pricing clarity and reducing the number of decisions required per screen.",
          "The redesigned flow shipped to 100% of users after a staged rollout and became the template for the company's hotel and car-rental flows that followed.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        body: [
          "Funnel analysis showed the steepest drop-off (23%) happened on the 'extras' screen, where users were shown six optional add-ons before seeing a running total — many assumed the price had changed and abandoned the booking.",
          "Session recordings showed repeated back-and-forth between the summary and details screens, suggesting users didn't trust the price they were being shown until the very last step.",
        ],
      },
      {
        id: "context",
        title: "Context & constraints",
        body: [
          "Add-on revenue (insurance, seat selection, baggage) made up a meaningful share of margin, so the brief explicitly required that we couldn't simply remove these steps — the challenge was presenting them without eroding trust.",
          "The app needed to support five languages and a wide range of currencies, which shaped how we approached price formatting and layout density from the start.",
        ],
      },
      {
        id: "research",
        title: "Research",
        body: [
          "Moderated usability sessions with 9 participants booking real trips revealed that a persistent, itemised price summary — visible throughout the flow rather than only at the end — was the single change participants asked for unprompted.",
          "We also tested three different patterns for presenting add-ons: a single bundled upsell, a checklist, and a 'build your trip' stepper. The stepper performed best on both completion time and post-task trust ratings.",
        ],
      },
      {
        id: "process",
        title: "Process",
        body: [
          "I prototyped the stepper pattern with a sticky price summary and ran an A/B test against the existing flow with 14% of traffic over three weeks, tracking completion rate, time-on-task and add-on attach rate as the key metrics.",
          "A secondary test isolated the effect of the sticky summary alone, to make sure gains weren't solely from the new add-on pattern — this helped the team understand which change to prioritise if engineering time became constrained.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        body: [
          "The shipped flow breaks the booking into four short steps with a persistent price summary that animates to show exactly what changed and why, plus a simplified add-on stepper that defaults to 'no thanks' rather than pre-selected extras.",
          "Microcopy throughout was rewritten with the content team to remove jargon like 'fare rules' in favour of plain language ('changes & refunds'), which research had flagged as a recurring point of confusion.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Checkout completion rose by 18% relative to the control flow, and add-on attach rate held steady despite the less aggressive presentation — protecting the revenue line the business cared about.",
          "The sticky price summary pattern was adopted across the hotel and car-rental booking flows within two quarters, becoming a shared pattern in the design system.",
        ],
      },
    ],
  },
  {
    slug: "bitterbrains",
    title: "BitterBrains",
    client: "BitterBrains — Developer Education Platform",
    year: "2019-2025",
    description:
      "Designing products that help millions of developers learn, validate their skills, and grow their careers through education, certifications, and global community events.",
    tags: ["EdTech", "SaaS", "Community"],
    cover:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop",
    industry: "HR Tech",
    businessType: "B2B",
    platform: "Web",
    meta: {
      duration: "4 months",
      role: "Product Designer",
      team: "1 PM, 3 engineers",
      tools: ["Figma", "FullStory", "Typeform"],
      skills: ["Onboarding design", "Workflow mapping", "Content design", "Usability testing"],
    },
    sections: [
      {
        id: "summary",
        title: "Executive summary",
        body: [
          "Cohort's setup flow asked new HR admins to configure pay schedules, departments, roles and integrations before they could invite a single employee — and most never finished.",
          "I redesigned setup as a guided, sequential experience that gets a workspace 'usable' in under 10 minutes, with advanced configuration moved to an in-product checklist that admins complete over their first weeks.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        body: [
          "Only 34% of new workspaces completed setup within the first session. Support data showed admins frequently abandoned on the integrations step, which required information (payroll provider API keys) they didn't have to hand.",
          "Sales had positioned Cohort as 'set up in minutes', but the actual experience required roughly 40 individual fields across 6 screens before any value was visible.",
        ],
      },
      {
        id: "context",
        title: "Context & constraints",
        body: [
          "Compliance requirements meant certain fields (tax jurisdiction, pay frequency) genuinely had to be collected before payroll features could activate — we couldn't remove them, only reorder and reframe when they were asked for.",
          "The engineering team was mid-migration to a new permissions model, so any new flow had to work with both the old and new permission schemas during a transition period.",
        ],
      },
      {
        id: "research",
        title: "Research",
        body: [
          "I shadowed 6 HR admins setting up workspaces for the first time and found a consistent pattern: people wanted to see 'their' data (their team, their org chart) as early as possible, and were willing to defer compliance fields if told clearly they'd be prompted later.",
          "A short survey of 40 recently onboarded admins confirmed that 'I didn't have the information needed' was the top reason for pausing setup — particularly for payroll integrations.",
        ],
      },
      {
        id: "process",
        title: "Process",
        body: [
          "I mapped every field in the original setup flow against 'required to activate core value' vs 'required eventually', which split the 40-field form roughly in half. The first half became a streamlined 3-screen flow; the second became a persistent setup checklist in the sidebar.",
          "Wireframes were tested with 5 admins using a clickable prototype, refining the checklist's framing after participants initially read it as a list of incomplete tasks rather than a guided next-steps panel.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        body: [
          "The new flow asks only for company name, team size and pay frequency before showing the admin their workspace with sample data already populated — making the product feel 'alive' immediately.",
          "A persistent checklist then walks admins through integrations, departments and roles at their own pace, with progress visible from the dashboard and contextual help linked to each item.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "First-session setup completion rose from 34% to 81%. Time-to-first-invited-employee dropped from an average of 3.2 days to same-day for 70% of new accounts.",
          "Support tickets related to setup dropped by roughly a third, freeing the support team to focus on higher-value account configuration questions.",
        ],
      },
    ],
  },
  {
    slug: "dan-mon-fairwind",
    title: "Dan-Mon Fairwind",
    client: "Dan-Mon Fairwind — Enterprise CRM",
    year: "2022-2023",
    description:
      "Designed an enterprise CRM platform that supports the complete sales lifecycle for marine equipment and spare parts, helping global teams manage opportunities, quotations, procurement, and customer relationships in one place.",
    tags: ["Enterprise", "CRM", "B2B"],
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    industry: "Healthcare",
    businessType: "B2C",
    platform: "Mobile",
    meta: {
      duration: "6 months",
      role: "Senior Product Designer",
      team: "1 PM, 5 engineers, 1 clinical advisor",
      tools: ["Figma", "Principle", "Maze"],
      skills: ["Accessibility", "Service design", "Prototyping", "Cross-functional collaboration"],
    },
    sections: [
      {
        id: "summary",
        title: "Executive summary",
        body: [
          "Pulse Health needed a patient app that worked for people who were anxious, in pain, or simply unfamiliar with video calls — without feeling clinical or cold.",
          "I led the design of the booking, pre-visit and consultation flows, working closely with a clinical advisor to ensure language and pacing matched real patient expectations.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        body: [
          "Early pilot data showed 22% of booked consultations ended in a 'no-show' or technical failure — often because patients hadn't tested their camera or microphone beforehand, or didn't know what to expect from the call.",
          "Patients reported feeling unprepared and anxious going into appointments, with no clear sense of what information they'd need to have ready.",
        ],
      },
      {
        id: "context",
        title: "Context & constraints",
        body: [
          "As a healthcare product, every flow had to meet accessibility requirements (WCAG AA) and be legible for an older demographic with lower digital confidence than Pulse Health's earlier B2B product.",
          "Clinical workflows couldn't be altered — the redesign had to work within existing appointment durations and the clinician-side tooling, which was out of scope for this project.",
        ],
      },
      {
        id: "research",
        title: "Research",
        body: [
          "I conducted 10 remote interviews with patients who had completed a virtual consultation, plus 2 in-person sessions with older participants to test comprehension of the booking flow on a tablet.",
          "A recurring theme: patients wanted a 'tech check' before the appointment, similar to a pre-flight checklist, and wanted to know in advance roughly how long the call would last and what to have ready.",
        ],
      },
      {
        id: "process",
        title: "Process",
        body: [
          "I designed a pre-visit checklist — camera, microphone, a quiet space, and any documents to have on hand — delivered as a notification 30 minutes before the appointment, and tested its timing and tone with the same participant group.",
          "For the consultation screen itself, I worked with the clinical advisor to design calm, low-stimulation visuals: a single primary action at a time, large touch targets, and a persistent 'having trouble?' link to a fallback phone line.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        body: [
          "The shipped app includes a guided booking flow with plain-language time estimates, an automated pre-visit tech check that patients can complete in under a minute, and a consultation screen designed around accessibility-first principles — including a one-tap switch to audio-only if video fails.",
          "All copy was reviewed with the clinical advisor and a plain-language consultant to keep instructions calm and free of medical jargon.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "No-show and technical-failure rate fell from 22% to 9% in the three months after launch. Post-appointment surveys showed a measurable increase in patients reporting they 'felt prepared' going into their consultation.",
          "The pre-visit checklist pattern was later adopted for Pulse Health's in-app pharmacy and lab-results features as a general 'before you start' pattern.",
        ],
      },
    ],
  },
  {
    slug: "fozzy-group",
    title: "Fozzy Group",
    client: "Fozzy Group — Internal Back-Office Platform",
    year: "2025",
    description:
      "Designed an internal back-office platform that helps teams manage operational processes, data, and workflows across one of Ukraine's largest retail ecosystems.",
    tags: ["Enterprise", "Operations", "B2B"],
    cover:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2000&auto=format&fit=crop",
    industry: "Enterprise Software",
    businessType: "B2B",
    platform: "Desktop",
    meta: {
      duration: "8 months",
      role: "Design Systems Lead",
      team: "3 designers, 4 engineers across teams",
      tools: ["Figma", "Storybook", "Zeroheight"],
      skills: ["Design systems", "Component architecture", "Documentation", "Stakeholder alignment"],
    },
    sections: [
      {
        id: "summary",
        title: "Executive summary",
        body: [
          "Three product teams at Atlas Studio had each built their own button, form and table components — leading to visual inconsistency and duplicated engineering effort across the suite.",
          "I led the design and rollout of a shared design system, working with one designer and one engineer from each team to ensure adoption rather than a top-down mandate that would be ignored.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        body: [
          "An audit found 14 different button styles and 6 different table components in production across the three products, each with subtly different spacing, states and accessibility behaviour.",
          "New features regularly shipped with inconsistent patterns because designers had no shared reference, and engineers rebuilt similar components from scratch for each team.",
        ],
      },
      {
        id: "context",
        title: "Context & constraints",
        body: [
          "Each product team had its own roadmap and release cadence, so the system had to be adoptable incrementally — teams couldn't be asked to pause feature work for a full migration.",
          "The three products used different front-end frameworks for legacy reasons, so the system needed to be defined at the design-token and pattern level first, with framework-specific implementations built afterward.",
        ],
      },
      {
        id: "research",
        title: "Research",
        body: [
          "I interviewed designers and engineers on each team to understand which components caused the most friction and where teams had already converged informally on similar patterns — these became the first candidates for the shared library.",
          "A short audit of accessibility issues across existing components (contrast, focus states, keyboard navigation) gave the project an additional business case beyond consistency alone.",
        ],
      },
      {
        id: "process",
        title: "Process",
        body: [
          "Working with one designer and one engineer from each team as 'system partners', I prioritised the first 12 components by usage frequency and inconsistency severity, defining tokens for colour, spacing and type before any component work began.",
          "Each component shipped with documentation covering usage guidance, accessibility notes and do/don't examples, reviewed by the partner from each team before being published — which built buy-in far more effectively than a centrally-owned spec would have.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        body: [
          "The result was a token-based design system with 12 core components, documented in a shared library and implemented for each team's framework by their own engineers with support from the systems team.",
          "A lightweight contribution process let teams propose new components or changes, which kept the system evolving with real product needs rather than becoming a bottleneck.",
        ],
      },
      {
        id: "results",
        title: "Results",
        body: [
          "Within two quarters, all three teams had adopted the shared button, form and table components, reducing the 14 button variants to 3 intentional ones (primary, secondary, destructive).",
          "Engineering estimated a 30% reduction in time spent on UI implementation for new features that relied on system components, and design QA time on new releases dropped accordingly.",
        ],
      },
    ],
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string) {
  const index = CASES.findIndex((c) => c.slug === slug);
  const prev = CASES[(index - 1 + CASES.length) % CASES.length];
  const next = CASES[(index + 1) % CASES.length];
  return { prev, next };
}
