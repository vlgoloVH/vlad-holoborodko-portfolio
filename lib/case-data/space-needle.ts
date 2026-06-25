import type { CaseData } from "@/components/case-detail/case-layout";

export const spaceNeedleData: CaseData = {
  slug: "space-needle",
  heroMockup: "",
  tagline: "Designing the end-to-end ticketing experience for one of Seattle's most iconic attractions — across kiosks, web, box offices, and internal operations.",
  context: {
    invite: "Space Needle brought me in to redesign their entire ticketing ecosystem — both the customer-facing experience and the internal platform used by staff to manage inventory, pricing, and sales operations.",
    situation: "The existing ticketing experience was fragmented across multiple touchpoints with no unified design language. Customer-facing products felt outdated, while internal tools were complex and difficult to train new staff on.",
    outcome: "I led the design of a unified ticketing system spanning web, kiosk, and box office — alongside a powerful back-office platform for managing schedules, pricing, discounts, and inventory.",
  },
  role: {
    summary: "As Senior Product Designer, I owned the end-to-end design across all customer-facing and internal touchpoints.",
    responsibilities: [
      "Designed customer-facing ticketing flows for web, kiosk, and box office",
      "Created internal back-office platform for ticket inventory and pricing management",
      "Defined information architecture across all touchpoints",
      "Conducted user research and usability testing",
      "Collaborated with engineering and operations teams",
    ],
    team: ["1 PM", "4 Engineers", "1 Researcher"],
  },
  transformation: [
    {
      number: "01 — Customer Experience",
      title: "Reimagining the ticketing flow",
      description: "The customer-facing experience needed to feel as iconic as the attraction itself. We redesigned the complete purchase journey — from discovery to ticket confirmation — across web and kiosk touchpoints.",
      visual: "",
      points: [
        "Full redesign of the web ticketing flow",
        "Kiosk experience designed for speed and accessibility",
        "Simplified date and time selection",
        "Clear pricing and ticket type presentation",
        "Streamlined checkout with minimal friction",
        "Mobile-optimized experience throughout",
      ],
    },
    {
      number: "02 — Box Office",
      title: "Empowering front-line staff",
      description: "Box office staff needed a fast, reliable tool to serve guests quickly — especially during peak hours. We designed a purpose-built interface optimized for speed and ease of training.",
      visual: "",
      points: [
        "Purpose-built POS interface for box office staff",
        "Fast ticket lookup and modification flows",
        "Group booking and special pricing support",
        "Real-time availability display",
        "Integrated payment processing",
        "Training-friendly interface design",
      ],
    },
    {
      number: "03 — Back-Office Platform",
      title: "A powerful operations hub",
      description: "Behind the scenes, operations teams needed full control over inventory, scheduling, pricing, and discounts. We built a comprehensive internal platform that gave managers the visibility and control they needed.",
      visual: "",
      points: [
        "Ticket inventory and capacity management",
        "Dynamic pricing and discount configuration",
        "Schedule and event management",
        "Sales reporting and analytics dashboard",
        "Staff access and permissions management",
        "Integration with external ticketing partners",
      ],
    },
    {
      number: "04 — Design System",
      title: "One foundation, multiple touchpoints",
      description: "To ensure consistency across all products, we built a shared design system that worked across customer-facing and internal platforms — with the flexibility to adapt to each context.",
      visual: "",
      points: [
        "Unified component library across all touchpoints",
        "Accessibility-first design throughout",
        "Responsive patterns for web and kiosk",
        "Consistent interaction patterns",
        "Scalable token-based foundations",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "4", label: "Touchpoints designed", body: "Web, kiosk, box office, and back-office platform — all unified under one design system." },
      { value: "5mo", label: "Project duration", body: "Full end-to-end design delivered in 5 months from discovery to handoff." },
      { value: "B2C+B2B", label: "Dual audience", body: "Designed for both end customers and internal operations staff simultaneously." },
      { value: "1", label: "Design system", body: "One unified foundation powering all touchpoints with consistent patterns and components." },
    ],
    summary: "A fragmented ticketing experience became a unified, scalable system — serving both guests and operations teams with clarity and speed.",
  },
  reflection: "Working on Space Needle taught me that iconic brands require equally considered digital experiences. The challenge of designing for both guests and staff simultaneously pushed me to think about how the same underlying system can serve very different needs.",
};
