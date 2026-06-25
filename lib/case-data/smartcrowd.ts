import type { CaseData } from "@/components/case-detail/case-layout";

export const smartcrowdData: CaseData = {
  slug: "smartcrowd",
  heroMockup: "/Hero_mockup_smartcrowd_2800x1400.jpg",
  tagline: "Leading the transformation of a fragmented real estate investment platform into a scalable multi-platform ecosystem.",
  context: {
    invite: "SmartCrowd invited me to conduct a full audit of their existing platform — analyzing the UX, product structure, and identifying opportunities for improvement across mobile and web.",
    situation: "The platform had grown organically over time, resulting in fragmented user journeys, inconsistent patterns, and a product experience that no longer matched the company's ambitions or its users' expectations.",
    outcome: "After presenting the audit findings, I joined SmartCrowd as Lead Product Designer. What started as an audit became a full platform transformation — covering mobile, web, partner platforms, and design system.",
  },
  role: {
    summary: "As Lead Product Designer, I owned the full design direction of SmartCrowd — from the initial product audit that identified core UX gaps, to leading the complete redesign of the mobile app, web platform, and partner products. I set the strategic design direction, shaped information architecture, and ensured every platform felt unified and intentional.",
    summaryExtra: "Beyond execution, I built the design system from scratch — creating a scalable token-based foundation with light and dark themes that served both SmartCrowd and its partner brands. I worked closely with Product, Engineering, Compliance, and Marketing, and mentored another designer on the team throughout the project.",
    owned: ["Product Strategy", "Information Architecture", "Mobile · iOS & Android", "Web Platform", "Design System", "Partner Platforms", "User Research"],
    withWhom: ["Product Management", "Engineering", "Compliance", "Marketing", "QA", "1 Designer"],
    howIWorked: ["End-to-end execution", "Hands-on design leadership", "Cross-functional collaboration", "Research-driven decisions", "Iterative delivery", "Design mentorship"],
  },
  overviewImage: "/Product_overview_smartcrowd_8256x1400.jpg",
  overviewTagline: "Not a redesign. A full platform transformation.",
  transformation: [
    {
      number: "01 — Product Architecture",
      title: "Rethinking the platform structure",
      description: "The existing app had no clear structural logic. Navigation was fragmented, sections overlapped, and the information architecture didn't reflect how investors actually think. We mapped the entire product and rebuilt it from the ground up.",
      visual: "/Product_atchitecture_smartcrowd_1300x1560.jpg",
      points: [
        "Conducted a full audit of the existing product structure and navigation",
        "Simplified from a fragmented multi-level system to a clear 5-tab architecture",
        "Consolidated overlapping sections and removed redundant entry points",
        "Rebuilt the information hierarchy around the investor mental model",
        "Defined clear product zones: Explore, Invest, Portfolio, Wallet, Account",
      ],
    },
    {
      number: "02 — Experience Redesign",
      title: "Reimagining the investment experience",
      description: "Rather than patching individual screens, we redesigned the entire investment experience as one connected product. Every flow — from discovering a property to tracking returns — was rethought to reduce friction, build confidence, and work consistently across mobile and web.",
      visual: "/Experience_redesign_smartcrowd_1300x1560.jpg",
      points: [
        "Full redesign of the mobile app across iOS and Android",
        "Web platform redesigned with consistent logic and patterns",
        "Property discovery, investment flows, portfolio, wallet, KYC — all rethought",
        "New features introduced: Auto Reinvest, improved Wallet, enhanced onboarding",
        "Existing features reimagined — not just restyled",
        "Interaction patterns and component behavior defined with engineering",
      ],
    },
    {
      number: "03 — Design System & Foundations",
      title: "Building a scalable design foundation",
      description: "To support the redesign and all future work, I built a comprehensive design system from scratch — not just a component library, but a shared language between design and engineering that works across all platforms and brands.",
      visual: "/Design_system_smartcrowd_1300x1560.jpg",
      points: [
        "100+ components covering all major UI patterns across mobile and web",
        "Semantic design tokens for color, spacing, typography, and elevation",
        "Full light mode and dark mode support",
        "Documented component states, variants, and responsive behavior",
        "Developer handoff process that reduced back-and-forth significantly",
        "Token architecture built to support partner brand adaptation",
      ],
    },
    {
      number: "04 — Partner Platform Ecosystem",
      title: "Scaling beyond a single product",
      description: "SmartCrowd's platform logic powered partner products that required different branding and adapted feature sets. The design system's token architecture made this possible without rebuilding from scratch — one foundation, multiple branded experiences.",
      visual: "/Partner_platform_smartcrowd_1300x1560.jpg",
      points: [
        "Adapted the core platform for multiple partner products",
        "Token-based theming enables full brand adaptation: colors, typography, components",
        "UX consistency maintained across all brand variants",
        "Partner onboarding accelerated through reusable foundations",
        "Each partner product feels native to its brand while sharing the same logic",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "3", label: "Platforms redesigned", body: "iOS, Android, and Web — all rebuilt from the ground up with consistent logic." },
      { value: "2+", label: "Partner platforms", body: "Adapted and shipped with full brand customization via token-based theming." },
      { value: "100+", label: "Design system components", body: "Covering all major UI patterns across mobile and web with light and dark modes." },
      { value: "2", label: "Theme modes", body: "Full light and dark mode support across the entire product ecosystem." },
    ],
    summary: "The transformation created a unified, scalable product experience across SmartCrowd's entire ecosystem.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "Real product leadership means holding the full picture — user needs, business goals, technical constraints, and compliance — all at once.",
      },
      {
        number: "02",
        insight: "The most valuable thing I built wasn't a screen. It was a foundation the entire team could keep building on.",
      },
      {
        number: "03",
        insight: "Designing for regulated financial products taught me that clarity and compliance aren't opposites — good UX makes both possible.",
      },
    ],
  },
};
