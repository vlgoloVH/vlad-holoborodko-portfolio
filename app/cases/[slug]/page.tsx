import { notFound } from "next/navigation";
import { CASES } from "@/lib/cases";
import { CaseLayout, CaseData } from "@/components/case-detail/case-layout";

interface Props {
  params: { slug: string };
}

const caseDataMap: Record<string, CaseData> = {
  smartcrowd: {
    slug: "smartcrowd",
    tagline: "Transforming a fragmented investment platform into a scalable multi-platform ecosystem.",
    shortDescription:
      "I was brought in to audit SmartCrowd's product experience and later joined as Lead Product Designer to redesign the mobile app, web platform, partner products, and design system foundation.",
    executiveSummary: {
      narrative:
        "SmartCrowd initially invited me to analyze the existing platform, uncover UX and product gaps, and propose improvements. After the audit, I joined the team to lead the redesign of the core investment experience across mobile and web. The work expanded beyond visual redesign — it included rethinking the app structure, improving existing flows, introducing new features, creating a scalable design system, supporting partner platforms, and collaborating closely with cross-functional teams.",
      deliverables: [
        "Full product audit",
        "Mobile app redesign",
        "Web platform redesign",
        "Partner platform adaptation",
        "Design system foundation",
        "User interviews & workshops",
      ],
    },
    scope: [
      { title: "Mobile App Redesign", description: "Redesigned core app structure, investment flows, portfolio experience, wallet, onboarding, and property discovery." },
      { title: "Web Platform", description: "Extended and adapted the product experience for web users, including portfolio, investment, and account-related flows." },
      { title: "Partner Platforms", description: "Adapted SmartCrowd's product logic for partner platforms with different branding, colors, and selected functionality." },
      { title: "Design System", description: "Created scalable components, design tokens, light and dark themes, and reusable patterns across mobile and web." },
      { title: "Product Strategy", description: "Worked with product stakeholders to rethink existing functionality, define new features, and improve product direction." },
      { title: "Research & Collaboration", description: "Facilitated user interviews, brainstorms, workshops, and alignment sessions with product, engineering, compliance, and other teams." },
    ],
    audit: {
      text: "Before joining the company full-time, I was invited to review the entire platform and identify where the experience could be improved. The audit helped uncover inconsistencies, fragmented journeys, usability issues, and opportunities to make the investment experience clearer and more scalable.",
      findings: [
        "UX inconsistencies across screens",
        "Fragmented navigation structure",
        "Complex investment flows",
        "Outdated interface patterns",
        "Missing scalable design foundation",
        "Partner platform limitations",
      ],
    },
    challenges: {
      user: "Investors needed a clearer way to discover properties, understand investment opportunities, track portfolio performance, and manage their account with confidence.",
      business: "The company needed a scalable product experience that could support growth, new features, partner products, and compliance-driven flows.",
      design: "The product needed a unified design system, consistent UX patterns, and flexible theming across mobile, web, dark mode, light mode, and partner brands.",
    },
    timeline: [
      { title: "Product Audit", description: "Analyzed the existing platform and identified major UX, UI, and product opportunities." },
      { title: "Information Architecture", description: "Rethought the structure of the app and simplified the way users move through the product." },
      { title: "Core Experience Redesign", description: "Redesigned key flows across property discovery, investment, portfolio, wallet, registration, and account management." },
      { title: "New Feature Design", description: "Designed and shipped new product capabilities such as reinvestment, portfolio improvements, payment updates, and partner experiences." },
      { title: "Design System", description: "Built reusable components, tokens, and themes to support consistency and faster delivery." },
      { title: "Partner Platform Scaling", description: "Adapted the platform logic and design foundation for partner products with different branding and functionality." },
      { title: "Continuous Iteration", description: "Worked with product, engineering, compliance, QA, and users to improve and refine the experience over time." },
    ],
    responsibilities: [
      { title: "Product Design Leadership", description: "Led the redesign of the core SmartCrowd experience across multiple platforms." },
      { title: "UX Strategy", description: "Helped define product direction, user flows, information architecture, and feature logic." },
      { title: "Design System Ownership", description: "Created scalable components, design tokens, and light/dark themes for mobile and web." },
      { title: "Cross-functional Collaboration", description: "Worked closely with product managers, developers, compliance, marketing, and QA." },
      { title: "User Research", description: "Conducted user interviews and used insights to improve product decisions and flows." },
      { title: "Mentorship", description: "Supported and mentored another designer on the team throughout the project." },
    ],
    principles: [
      { title: "Clarity over complexity", description: "Make investment decisions easier to understand without oversimplifying important financial information." },
      { title: "Confidence through transparency", description: "Help investors understand returns, risks, property details, portfolio performance, and next steps." },
      { title: "Scalable by default", description: "Create patterns that work across mobile, web, partner platforms, light mode, dark mode, and future features." },
      { title: "Regulation-aware UX", description: "Design experiences that respect compliance requirements while keeping flows understandable and user-friendly." },
    ],
    transformation: [
      {
        number: "01 — Product Architecture",
        title: "Rethinking the platform structure",
        description: "The existing app had grown organically without a clear structural logic. Navigation was inconsistent, information was hard to find, and the overall architecture didn't reflect how investors actually think about and manage their money. We started by mapping the entire product, identifying what needed to be simplified, consolidated, or removed.",
        points: [
          "Mapped the full existing product structure and identified structural gaps",
          "Simplified navigation from a fragmented multi-level system to a clear 5-tab architecture",
          "Consolidated overlapping sections and removed redundant entry points",
          "Rethought information hierarchy across all major product areas",
          "Created a new IA that reflects the investor mental model — not the technical backend structure",
          "Defined clear product zones: Explore, Invest, Portfolio, Wallet, Account",
        ],
      },
      {
        number: "02 — Experience Redesign",
        title: "Reimagining the investment experience",
        description: "Rather than fixing individual screens, we redesigned the entire investment experience as one connected ecosystem. Every flow — from discovering a property to tracking returns — was rethought to reduce friction, build confidence, and feel consistent across mobile and web.",
        points: [
          "Redesigned the full mobile app experience across iOS and Android",
          "Built a consistent web platform experience that extended the mobile logic",
          "Rethought property discovery, investment flows, portfolio tracking, and account management",
          "Introduced new product capabilities: Auto Reinvest, improved Wallet, enhanced KYC",
          "Ensured visual and functional consistency across all platforms",
          "Collaborated with engineering to define interaction patterns and component behavior",
        ],
      },
      {
        number: "03 — Design System & Foundations",
        title: "Building a scalable design foundation",
        description: "To support the redesign and all future product work, we built a comprehensive design system from scratch. This wasn't just a component library — it was a shared language between design and engineering that enabled faster, more consistent delivery across all platforms and brands.",
        points: [
          "Created 100+ reusable components covering all major UI patterns",
          "Defined semantic design tokens for color, spacing, typography, and elevation",
          "Built full light mode and dark mode support across mobile and web",
          "Documented component usage, states, variants, and responsive behavior",
          "Established a developer handoff process that reduced implementation friction",
          "Designed the system to support partner brand adaptation through token overrides",
        ],
      },
      {
        number: "04 — Multi-Brand Ecosystem",
        title: "Scaling beyond a single product",
        description: "SmartCrowd's platform logic was adapted for partner products that required different branding, color systems, and sometimes a reduced feature set. The design system's token architecture made this possible without rebuilding flows from scratch — one scalable foundation, multiple branded experiences.",
        points: [
          "Adapted the core platform for multiple partner products with distinct visual identities",
          "Used token-based theming to swap brand colors, typography, and component styles",
          "Maintained UX consistency across all brand variants while respecting each brand's identity",
          "Enabled faster partner onboarding through reusable design foundations",
          "Documented brand adaptation guidelines for design and engineering teams",
        ],
      },
    ],
        designSystem: {
      description: "A token-based system built to scale across three platforms and multiple brands.",
      highlights: ["100+ Components", "Semantic tokens", "Light & dark themes", "Mobile & web", "Partner brands", "Dev handoff"],
    },
    partnerPlatforms: {
      description: "SmartCrowd's platform logic was used by partner products requiring different branding and adapted feature sets.",
    },
    research: {
      description: "The redesign was shaped through product discussions, brainstorming sessions, user interviews, stakeholder alignment, and continuous collaboration with cross-functional teams.",
      cards: ["User interviews", "Product brainstorms", "Compliance alignment", "Developer handoff"],
    },
    selectedScreens: [],
    impact: {
      items: [
        "Full mobile app redesigned",
        "Web platform redesigned",
        "Partner platforms supported",
        "Design system created",
        "Light & dark themes",
        "New IA established",
        "New features shipped",
        "Cross-functional delivery improved",
      ],
      summary:
        "The redesign created a more unified, scalable, and consistent product experience across SmartCrowd's ecosystem. It also gave the team a stronger foundation for launching new features, adapting partner products, and maintaining design consistency across platforms.",
    },
    reflection:
      "This project strengthened my ability to lead design in a complex product environment where user needs, business goals, regulatory requirements, and technical constraints all had to be balanced. It also reinforced the importance of scalable systems, cross-functional collaboration, and clear product thinking when designing financial products.",
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
