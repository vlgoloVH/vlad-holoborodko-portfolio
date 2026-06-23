import { notFound } from "next/navigation";
import { CASES } from "@/lib/cases";
import { CaseLayout, CaseData } from "@/components/case-detail/case-layout";

interface Props {
  params: { slug: string };
}

const caseDataMap: Record<string, CaseData> = {
  smartcrowd: {
    slug: "smartcrowd",
    heroMockup: undefined,
    overview: {
      about:
        "SmartCrowd is a DFSA-regulated fractional real estate investment platform that lets retail investors in the UAE co-own properties with as little as AED 500. The product spans iOS, Android, and a web platform — covering everything from property discovery to rental returns distribution.",
      challenge:
        "As the platform expanded, user journeys became fragmented across mobile and web experiences, creating friction throughout the investment lifecycle. The business needed a cohesive design system and rethought flows to support growth while staying compliant with DFSA regulations.",
    },
    impact: {
      role: [
        "Led product design across iOS, Android, and Web",
        "Defined UX strategy and design direction end-to-end",
        "Collaborated closely with PMs and engineering",
        "Built and maintained a scalable token-based design system",
        "Mentored a junior designer on the team",
      ],
      areas: [
        "Portfolio",
        "Investment Flow",
        "Wallet",
        "Auto Reinvest",
        "Registration & KYC",
        "STF Marketplace",
      ],
    },
    understanding: {
      business: [
        "Increase investment conversion rate",
        "Improve user retention and repeat investments",
        "Grow the secondary trading marketplace (STF)",
        "Support regulatory compliance across all flows",
      ],
      users: [
        "Understand investment opportunities clearly",
        "Track portfolio performance and returns",
        "Invest and withdraw with full confidence",
        "Feel secure within a regulated environment",
      ],
      constraints: [
        "DFSA regulations on investment communication",
        "KYC and AML verification requirements",
        "Multi-platform consistency: iOS, Android, Web",
        "Existing technical architecture limitations",
      ],
    },
    productAreas: [
      {
        title: "Portfolio Experience",
        problem:
          "Investors had no clear view of their holdings, returns, or overall performance. Data was scattered across multiple screens with no visual hierarchy, leading to confusion and lack of trust in the numbers shown.",
        solution:
          "Designed a unified portfolio dashboard with a clear net worth summary, individual property cards showing ROI and occupancy, and a timeline of distributions received.",
        result:
          "Users reported higher confidence in their investment decisions. Session depth on the portfolio screen increased significantly after the redesign.",
      },
      {
        title: "Investment Flow",
        problem:
          "The previous flow had 11 steps with unclear progress and too many drop-off points. Regulatory disclosures were buried and felt like legal obstacles rather than trust builders.",
        solution:
          "Reduced the flow to 5 focused steps with inline progress tracking, contextual disclosures that explain why information is needed, and a clear review screen before commitment.",
        result:
          "Conversion from property view to completed investment improved. The KYC pass rate also increased due to clearer in-flow guidance.",
      },
      {
        title: "Wallet & Payments",
        problem:
          "Deposit and withdrawal flows were inconsistent between platforms. Users were unsure of their transaction status and contacted support repeatedly for basic status questions.",
        solution:
          "Built a unified Wallet hub with real-time transaction status, clear state indicators for pending / processing / completed states, and push notifications tied to each state change.",
        result:
          "Support tickets related to payment status dropped after the new wallet shipped. User satisfaction scores for the payment experience increased meaningfully.",
      },
      {
        title: "Auto Reinvest",
        problem:
          "SmartCrowd distributes rental returns monthly, but most users let that cash sit idle in their wallet. There was no mechanism to automatically put returns back to work.",
        solution:
          "Designed a Reinvest feature that lets users set rules — reinvest above a threshold, into specific property types — and preview the compounding effect over a chosen time horizon.",
        result:
          "A meaningful share of monthly distributions were redirected into new investments within the first quarter of launch, creating a measurable compounding flywheel.",
      },
      {
        title: "Design System",
        problem:
          "With three platforms and a growing team, design and engineering were making inconsistent decisions. Each new screen required solving the same visual problems from scratch.",
        solution:
          "Built a token-based design system in Figma with fully documented components, responsive behavior specs, and a shared vocabulary between design and development.",
        result:
          "New feature design time decreased. Engineering handoff quality improved. The system became the foundation for all subsequent work on the platform.",
      },
    ],
    designSystem: {
      description:
        "A token-based system built to scale across three platforms. Every component documented with variants, states, responsive behavior, and usage guidelines — serving as a shared source of truth for design and engineering.",
      highlights: [
        "100+ Components",
        "Semantic tokens",
        "Dark / Light modes",
        "Responsive specs",
        "Figma variables",
        "Dev handoff docs",
      ],
    },
    selectedScreens: [],
    metrics: [
      { value: "11+", label: "Major product areas redesigned" },
      { value: "3", label: "Platforms unified under one design system" },
      { value: "100+", label: "Components systemized" },
      { value: "1", label: "Scalable design language established" },
    ],
    reflection:
      "This project strengthened my ability to balance business goals, regulatory requirements, and user needs while designing complex investment experiences across multiple platforms. Working within DFSA constraints taught me that good compliance UX doesn't feel like compliance at all.",
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
