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
      "A UAE real estate investment platform where people can invest in property and manage their portfolio in one place.",
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
      "A US platform for Remote Online Notarization, letting notaries, companies, and clients sign and handle legal documents fully online.",
    cover: "/NotaryHUB_preview.jpg",
    industry: "LegalTech",
    businessType: "B2B",
    platform: "Web · PWA",
    tags: ["LegalTech", "SaaS", "Product Design"],
    meta: {
      duration: "8 months",
      role: "Lead Product Designer",
      team: "20+",
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
      "The ticketing and digital experience for Space Needle, one of Seattle's most iconic landmarks, visited by millions each year.",
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
      "A global marine supplier that sources and delivers technical spare parts for ship equipment anywhere in the world.",
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
      "Silpo, the flagship supermarket chain of Fozzy Group, one of Ukraine's largest retailers with hundreds of stores nationwide.",
    tags: ["Retail", "Back-Office", "Design System"],
    cover: "/FozzyGroup_preview.jpg",
    industry: "Retail · Enterprise",
    businessType: "B2B",
    platform: "Desktop · Web",
    meta: {
      duration: "8 months",
      role: "Senior Product Designer",
      team: "30+",
      tools: ["Figma", "Storybook", "Zeroheight"],
      skills: ["Product Catalog", "Commerce Operations", "Design Systems", "Cross-functional Collaboration"],
    },
    sections: [],
  },
  {
    slug: "bitterbrains",
    title: "BitterBrains",
    client: "BitterBrains — Developer Education Platform",
    year: "2018-2023",
    description:
      "A developer education company building online learning platforms, skill certifications, and global conferences for software engineers around the world.",
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
