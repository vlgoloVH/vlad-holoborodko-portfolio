import type { CaseData } from "@/components/case-detail/case-layout";

export const fozzyGroupData: CaseData = {
  slug: "fozzy-group",
  heroMockup: "/Hero_mockup_fozzy_2800x1400.jpg",
  tagline: "Designing for the internal back-office of Silpo, the flagship supermarket chain of one of Ukraine's largest retailers.",
  context: {
    invite: "Fozzy Group is one of Ukraine's largest retailers, and Silpo is its flagship supermarket chain with hundreds of stores across the country. I joined the team designing Silpo's internal back-office, the system the business runs its retail operations on.",
    situation: "A retailer this size runs on a lot of complex internal tools, and Silpo's back-office had grown dense over years of added features. Teams worked around clunky flows and inconsistent screens, which slowed down everyday operations across a huge, data-heavy product.",
    outcome: "Working alongside other designers, I helped rework the back-office. We improved the existing tools, designed new flows, and built a large design system that brought consistency and speed to the whole product.",
  },
  role: {
    summary: "I designed for Silpo's internal back-office, the operational system behind one of Ukraine's largest supermarket chains. My focus was improving the existing product, shaping new workflows, and contributing to a large-scale design system, working closely with other designers across the team.",
    summaryExtra: "A product this big couldn't be redesigned in one sweep. I worked feature by feature, untangling complex, data-heavy flows and making them clearer, while helping build the shared design system that kept everything consistent as both the product and the team grew.",
    owned: ["Back-Office UX", "Workflow Design", "Design System", "Data-Heavy Interfaces", "Interface Design"],
    withWhom: ["Product Management", "Engineering", "Other Designers", "Operations Teams"],
    howIWorked: ["Feature-by-feature delivery", "Design system contribution", "Cross-functional collaboration", "Close design collaboration", "Iterative improvement"],
  },
  overviewImages: [
  "/Image_1_fozzy_2800x1400.jpg",
  "/Image_2_fozzy_2800x1400.jpg",
  "/Image_3_fozzy_2800x1400.jpg",
  "/Image_4_fozzy_2800x1400.jpg",
],
  overviewTagline: "Improving the system Silpo runs on, and the design system behind it.",
  transformation: [
    {
      number: "01 — The Audit",
      title: "Finding out how broken the system really was",
      description: "Before any new screen got built, we needed to understand how the existing back-office had actually grown over the years. I audited the tools and interfaces across teams, mapping where patterns and workflows had drifted apart, and where that inconsistency was costing people the most time.",
      visual: "", // TODO
      points: [
        "Audited existing tools and interfaces across multiple teams",
        "Mapped where inconsistent patterns slowed people down the most",
        "Prioritized what to fix first based on real daily friction, not guesswork",
      ],
    },
    {
      number: "02 — The Design System",
      title: "One system behind the whole product",
      description: "Tying it all together was a large design system. Working with other designers, I helped build the shared components, patterns, and rules that keep a product this size consistent and let the team move faster.",
      visual: "", // TODO
      points: [
        "Built shared components and patterns at scale",
        "Brought consistency across a huge, sprawling product",
        "Helped the team ship faster on a common foundation",
      ],
    },
    {
      number: "03 — New Flows",
      title: "Designing what the system was missing",
      description: "With a shared foundation in place, the business could ask for more than fixes. I designed new flows from scratch, turning complex operational requirements into steps that felt straightforward for the people using them.",
      visual: "", // TODO
      points: [
        "Designed new workflows from the ground up on top of the shared system",
        "Turned complex retail requirements into simple, guided steps",
        "Shaped features around how teams actually work",
      ],
    },
    {
      number: "04 — Data-Heavy Tools",
      title: "Making dense data usable",
      description: "Retail operations run on a lot of data: inventory, pricing, logistics, and more. I designed the dense, table-heavy interfaces this needs, so people can find and act on information quickly instead of getting lost in it.",
      visual: "", // TODO
      points: [
        "Designed data-heavy tables, filters, and dashboards",
        "Made large volumes of information scannable and actionable",
        "Balanced density with clarity for expert daily users",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "300+", label: "Silpo stores", body: "The retail network the back-office keeps running day to day." },
      { value: "2nd", label: "Retailer in Ukraine", body: "Fozzy Group, Silpo's parent, is the country's second-largest retail company." },
      { value: "1", label: "Design system", body: "A large, shared system unifying the whole back-office product." },
      { value: "4", label: "Focus areas", body: "Improving tools, new flows, data-heavy interfaces, and the design system." },
    ],
    summary: "By improving the existing system, designing new flows, and building a large design system, the work made Silpo's back-office faster, clearer, and more consistent for the teams who run the business every day.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "On a product this large, you can't redesign everything at once. Real progress comes feature by feature, one clear flow at a time.",
      },
      {
        number: "02",
        insight: "A design system isn't just components. On a product this size, it's what keeps a whole team of designers moving in the same direction.",
      },
      {
        number: "03",
        insight: "Back-office tools rarely get the spotlight, but they're where a retailer this big actually runs. Getting them right matters.",
      },
    ],
  },
};
