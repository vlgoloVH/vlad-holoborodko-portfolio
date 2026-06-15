export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Finlytic",
    role: "Lead Product Designer",
    period: "2022 — Present",
    description:
      "Leading design for the core analytics platform, owning the design system and partnering with data science on reporting features used by 8,000+ analysts.",
  },
  {
    company: "Wayfare",
    role: "Senior Product Designer",
    period: "2020 — 2022",
    description:
      "Redesigned the booking and checkout flows across web and mobile, and established the company's first shared pattern library for transactional flows.",
  },
  {
    company: "Pulse Health",
    role: "Senior Product Designer",
    period: "2019 — 2020",
    description:
      "Designed patient-facing booking, pre-visit and consultation experiences with a focus on accessibility and clinical trust.",
  },
  {
    company: "Cohort HR",
    role: "Product Designer",
    period: "2017 — 2019",
    description:
      "Owned onboarding and core workflow design for an HR platform through its Series A and B, working closely with founders on early product strategy.",
  },
  {
    company: "Atlas Studio",
    role: "Product Designer",
    period: "2015 — 2017",
    description:
      "Started as the first design hire across three internal product teams; led the creation of the company's first shared design system.",
  },
];

export const SKILLS = {
  practice: [
    "Discovery & user research",
    "Information architecture",
    "Interaction & visual design",
    "Design systems",
    "Prototyping & usability testing",
    "Roadmap & strategy input",
  ],
  collaboration: [
    "Cross-functional facilitation",
    "Stakeholder workshops",
    "Content & UX writing",
    "Mentoring junior designers",
    "Design critique & review",
  ],
  tools: [
    "Figma",
    "FigJam",
    "Framer",
    "Maze",
    "Amplitude",
    "Notion",
    "Storybook",
  ],
};
