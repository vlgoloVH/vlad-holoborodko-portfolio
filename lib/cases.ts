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
  platform: string;
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
    cover: "/SmartCrowd_preview.jpg",
    industry: "PropTech · Fintech",
    businessType: "B2C",
    platform: "Web · iOS · Android",
    tags: ["Fintech", "Proptech", "Product Design"],
    meta: {
      duration: "12 months",
      role: "Lead Product Designer",
      team: "70+",
      tools: ["Figma", "FigJam", "Maze", "Notion"],
      skills: ["Fintech", "Proptech", "Product Design"],
    },
    sections: [],
  },
  {
    slug: "notary-hub",
    title: "Notary HUB",
    client: "Notary HUB — LegalTech SaaS Platform",
    year: "2018-2019",
    description:
      "Led a complete redesign of a LegalTech SaaS platform that helps notaries manage clients, documents, approvals, and remote online notarization workflows.",
    cover: "/NotaryHUB_preview.jpg",
    industry: "LegalTech",
    businessType: "B2B",
    platform: "Web",
    tags: ["LegalTech", "SaaS", "Product Design"],
    meta: {
      duration: "8 months",
      role: "Lead Product Designer",
      team: "10+",
      tools: ["Figma"],
      skills: ["Product Design"],
    },
    sections: [],
  },
  {
    slug: "space-needle",
    title: "Space Needle",
    client: "Space Needle — Ticketing Experience",
    year: "2024-2025",
    description:
      "Designed the end-to-end ticketing experience for one of Seattle's most iconic attractions. Created customer-facing products across kiosks, web, and box offices, alongside a powerful internal platform for managing ticket inventory, pricing, discounts, schedules, and sales operations.",
    tags: ["B2C", "B2B", "Enterprise"],
    cover: "/SpaceNeedle_preview.jpg",
    industry: "Travel & Entertainment",
    businessType: "B2C",
    platform: "Web · Kiosk · Tablet",
    meta: {
      duration: "12+ months",
      role: "Senior Product Designer",
      team: "20+",
      tools: ["Figma", "Lottie", "UserTesting", "Amplitude"],
      skills: ["UX research", "Interaction design", "Prototyping", "A/B testing"],
    },
    sections: [],
  },
  {
    slug: "dan-mon-fairwind",
    title: "Dan-Mon Fairwind",
    client: "Dan-Mon Fairwind — Enterprise CRM",
    year: "2022-2023",
    description:
      "Designed an enterprise CRM platform that supports the complete sales lifecycle for marine equipment and spare parts, helping global teams manage opportunities, quotations, procurement, and customer relationships in one place.",
    tags: ["Enterprise", "CRM", "B2B"],
    cover: "/DanMon_preview.jpg",
    industry: "Maritime · Spare Parts",
    businessType: "B2B",
    platform: "Web",
    meta: {
      duration: "6 months",
      role: "Product Designer",
      team: "15+",
      tools: ["Figma"],
      skills: ["Enterprise UX", "Workflow Mapping", "Information Architecture", "Design System"],
    },
    sections: [],
  },
  {
    slug: "fozzy-group",
    title: "Fozzy Group",
    client: "Fozzy Group — Internal Back-Office Platform",
    year: "2025",
    description:
      "Designed an internal back-office platform that helps teams manage operational processes, data, and workflows across one of Ukraine's largest retail ecosystems.",
    tags: ["Enterprise", "Operations", "B2B"],
    cover: "/FozzyGroup_preview.jpg",
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
    sections: [],
  },
  {
    slug: "bitterbrains",
    title: "BitterBrains",
    client: "BitterBrains — Developer Education Platform",
    year: "2019-2025",
    description:
      "Designing products that help millions of developers learn, validate their skills, and grow their careers through education, certifications, and global community events.",
    tags: ["EdTech", "SaaS", "Community"],
    cover: "/BitterBrail_preview.jpg",
    industry: "EdTech · Developer Education",
    businessType: "B2B",
    platform: "Web",
    meta: {
      duration: "5+ years",
      role: "Product Designer",
      team: "30+",
      tools: ["Figma", "FullStory", "Typeform"],
      skills: ["Onboarding design", "Workflow mapping", "Content design", "Usability testing"],
    },
    sections: [],
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
