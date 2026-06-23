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
    productAreas: [
      { title: "Property Discovery", problem: "Users struggled to explore available investment opportunities and compare properties efficiently. The explore experience lacked filtering, sorting, and the context needed to make informed decisions.", solution: "Redesigned the explore flow with smarter filtering, clearer property cards, and better visual hierarchy to help users find and evaluate opportunities faster." },
      { title: "Property Details", problem: "The property details screen presented financial information, projected returns, and documents in a dense, hard-to-navigate layout that reduced investor confidence.", solution: "Rethought the details experience with progressive disclosure — surfacing key numbers first, then allowing investors to explore documents, risks, and projections at their own pace." },
      { title: "Investment Flow", problem: "The investment journey had too many steps, unclear payment logic, and poor error handling — causing drop-offs at critical moments.", solution: "Reduced friction by consolidating steps, clarifying payment options, and adding real-time feedback so investors feel in control at every stage." },
      { title: "Portfolio", problem: "Investors had no clear view of their holdings, returns, or overall performance. Data was scattered with no visual hierarchy.", solution: "Built a unified portfolio view with net worth summary, per-property performance, and a distributions timeline — giving investors a clear picture of their growth." },
      { title: "Wallet & Payments", problem: "Deposit and withdrawal flows were inconsistent across platforms and transaction status was unclear, causing unnecessary support requests.", solution: "Designed a unified Wallet hub with real-time transaction states, clear status indicators, and push notifications tied to each payment milestone." },
      { title: "Registration & KYC", problem: "Onboarding required users to complete lengthy compliance flows with little guidance, leading to incomplete registrations and high drop-off.", solution: "Redesigned the flow with contextual explanations, clear progress indicators, and smarter step ordering that builds trust while satisfying regulatory requirements." },
      { title: "Auto Reinvest", problem: "Monthly rental income sat idle in user wallets with no mechanism to put it back to work automatically.", solution: "Designed a Reinvest feature with configurable rules, threshold controls, and a compounding preview — turning passive income into active growth." },
      { title: "Partner Platforms", problem: "Partner products shared SmartCrowd's core logic but required different branding and adapted feature sets — without a flexible system this was slow and inconsistent.", solution: "Leveraged the design system's token architecture to enable fast brand adaptation — changing colors, typography, and component variants without rebuilding flows." },
    ],
    designSystem: {
      description: "To support the redesign and future product growth, I created a design system with reusable components, design tokens, and theming support. The system helped unify mobile, web, and partner product experiences while making design and development more consistent.",
      highlights: ["100+ Components", "Semantic tokens", "Light & dark themes", "Mobile & web patterns", "Partner brand adaptation", "Developer handoff"],
    },
    partnerPlatforms: {
      description: "SmartCrowd's platform logic was also used by partner products. These platforms shared the same core investment logic but required different branding, color systems, and sometimes a reduced or adapted feature set.",
    },
    research: {
      description: "The redesign was shaped through product discussions, brainstorming sessions, user interviews, stakeholder alignment, and continuous collaboration with cross-functional teams.",
      cards: ["User interviews", "Product brainstorms", "Compliance alignment", "Developer handoff"],
    },
    selectedScreens: [],
    impact: {
      items: ["Full mobile app redesigned", "Web platform redesigned", "Partner platforms supported", "Design system created", "Light & dark themes introduced", "Core flows restructured", "New features designed", "Cross-functional delivery improved"],
      summary: "The redesign created a more unified, scalable, and consistent product experience across SmartCrowd's ecosystem. It also gave the team a stronger foundation for launching new features, adapting partner products, and maintaining design consistency across platforms.",
    },
    reflection: "This project strengthened my ability to lead design in a complex product environment where user needs, business goals, regulatory requirements, and technical constraints all had to be balanced. It also reinforced the importance of scalable systems, cross-functional collaboration, and clear product thinking when designing financial products.",
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
