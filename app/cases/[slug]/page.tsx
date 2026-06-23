import { notFound } from "next/navigation";
import { CASES } from "@/lib/cases";
import { CaseLayout, CaseData } from "@/components/case-detail/case-layout";

interface Props {
  params: { slug: string };
}

const caseDataMap: Record<string, CaseData> = {
  smartcrowd: {
    slug: "smartcrowd",
    tagline: "Leading the transformation of a fragmented real estate investment platform into a scalable multi-platform ecosystem.",
    context: {
      invite: "SmartCrowd invited me to conduct a full audit of their existing platform — analyzing the UX, product structure, and identifying opportunities for improvement across mobile and web.",
      situation: "The platform had grown organically over time, resulting in fragmented user journeys, inconsistent patterns, and a product experience that no longer matched the company's ambitions or its users' expectations.",
      outcome: "After presenting the audit findings, I joined SmartCrowd as Lead Product Designer. What started as an audit became a full platform transformation — covering mobile, web, partner platforms, and design system.",
    },
    role: {
      summary: "I led product design end-to-end across mobile, web, and partner platforms. My role went beyond execution — I shaped product direction, built design foundations, led research, and mentored another designer on the team.",
      responsibilities: [
        "Led the full redesign of the SmartCrowd mobile app (iOS & Android) and web platform",
        "Defined product structure, information architecture, and UX strategy",
        "Created a scalable token-based design system with light and dark themes",
        "Adapted the platform for partner products with different branding and functionality",
        "Conducted user interviews and facilitated product brainstorming sessions",
        "Collaborated with Product, Engineering, Compliance, Marketing, and QA",
        "Mentored and managed another product designer on the team",
      ],
      team: [
        "Product Management",
        "Engineering",
        "Compliance",
        "Marketing",
        "QA",
        "1 Designer (mentored)",
      ],
    },
    transformation: [
      {
        number: "01 — Product Architecture",
        title: "Rethinking the platform structure",
        description: "The existing app had no clear structural logic. Navigation was fragmented, sections overlapped, and the information architecture didn't reflect how investors actually think. We mapped the entire product and rebuilt it from the ground up.",
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
        { value: "3", label: "Platforms redesigned — iOS, Android, Web" },
        { value: "2+", label: "Partner platforms adapted and shipped" },
        { value: "100+", label: "Design system components created" },
        { value: "2", label: "Theme modes — light and dark" },
      ],
      summary: "The transformation created a unified, scalable product experience across SmartCrowd's entire ecosystem — giving the team a strong foundation to ship faster, onboard partners more efficiently, and maintain design quality as the product continues to grow.",
    },
    reflection: "This project taught me that real product leadership means holding the full picture — user needs, business goals, technical constraints, and regulatory requirements — all at once. The most valuable thing I built wasn't a screen. It was a foundation the team could keep building on.",
  },
};

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export default function CasePage({ params }: Props) {
  const caseMeta = CASES.find((c) => c.slug === params.slug);
  const caseData = caseDataMap[params.slug];

  if (!caseMeta || !caseData) {
    notFound();
  }

  const otherCases = CASES.filter((c) => c.slug !== params.slug).slice(0, 4);

  return (
    <CaseLayout
      caseData={caseData}
      caseMeta={caseMeta}
      otherCases={otherCases}
    />
  );
}
