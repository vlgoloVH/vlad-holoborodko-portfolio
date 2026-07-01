import type { CaseData } from "@/components/case-detail/case-layout";

export const spaceNeedleData: CaseData = {
  slug: "space-needle",
  heroMockup: "/Hero_mockup_spaceneedle_2800x1400.jpg",
  tagline: "Designing the complete digital ecosystem for one of Seattle's most iconic landmarks — from in-tower camera experiences to ticketing kiosks, web flows, partner platforms, and internal operations.",
  context: {
    invite: "Space Needle brought me in to design tablet interfaces for their in-tower camera experiences — Oculus Selfie, Halo Selfie, SkyHigh, and more. What started as a focused UI project evolved into a long-term partnership across the entire digital product ecosystem.",
    situation: "The Space Needle had multiple disconnected digital touchpoints — in-tower tablets, ticketing kiosks, web purchase flows, box office tools, and internal management systems — each built independently without a unified design language or experience logic.",
    outcome: "Over the course of the engagement, I redesigned and unified the entire ecosystem: camera experience tablets, ticketing kiosks, web purchase flows, box office interfaces, an internal management platform, and Spacebook — all adapted for partner attractions Chihuly Garden and Glass and Seattle Top Tix.",
  },
  role: {
    summary: "Brought in as Senior Product Designer to design tablet interfaces for Space Needle's in-tower camera experiences — I ended up staying for over a year as the scope expanded to cover every digital touchpoint the attraction operates, from guest-facing kiosks and web flows to the internal platform that runs day-to-day operations.",
    summaryExtra: "Across the engagement I worked on six distinct products serving three very different audiences: tourists experiencing the tower for the first time, on-site staff handling ticketing and sales, and operations managers controlling pricing, inventory, and scheduling across all channels. Each product had its own context, constraints, and success criteria — and all of them had to work together as a single coherent ecosystem.",
    owned: ["In-Tower Camera Tablet UI", "Ticketing Kiosk Redesign", "Web Purchase Flow", "Box Office Interface", "Internal Management Platform", "Spacebook (Web & Tablet)", "Partner Platform Adaptation"],
    withWhom: ["Product Management", "Engineering", "Operations Team", "Marketing"],
    howIWorked: ["End-to-end product design", "Multi-platform thinking", "Cross-functional collaboration", "Iterative delivery", "Partner adaptation", "Research-informed decisions"],
  },
  overviewImages: ["/Image_1_spaceneedle_2800x1400.jpg", "/Image_2_spaceneedle_2800x1400.jpg", "/Image_3_spaceneedle_2800x1400.jpg", "/Image_4_spaceneedle_2800x1400.jpg", "", ""],
  overviewTagline: "One ecosystem. Six products. Three brands.",
  transformation: [
    {
      number: "01 — In-Tower Camera Experiences",
      title: "Designing the magic inside the tower",
      description: "My first project at Space Needle — designing tablet interfaces for three distinct in-tower camera experiences. Each had its own context, camera setup, and guest flow, but all shared the same constraint: it had to work for anyone, instantly, with no prior experience.",
      visual: "",
      points: [
        "Oculus Selfie — overhead shot looking straight down through the iconic glass oculus stairs",
        "Halo Selfie — 360° camera experience on the outer observation ring",
        "SkyHigh Selfie — photo experience at 520 feet on the open-air deck",
        "Touchscreen tablet UI designed for guests of all ages and tech familiarity",
        "Instant photo preview and delivery to the Space Needle app",
        "Optimized for high-traffic, fast-paced guest interactions",
      ],
    },
    {
      number: "02 — Ticketing Kiosks",
      title: "Reimagining self-service ticketing",
      description: "Self-service ticketing for one of Seattle's busiest attractions — redesigned for speed, clarity, and two very different kiosk formats. The design had to handle everything from a single adult ticket to complex group bookings, without friction.",
      visual: "",
      points: [
        "Full redesign of standard ticketing kiosk UI",
        "New large-format kiosk interface for high-traffic entry points",
        "Streamlined ticket selection, date picking, and checkout flow",
        "Accessibility-first design for diverse guest demographics",
        "Consistent experience across both kiosk form factors",
        "Designed for speed — average transaction time reduced significantly",
      ],
    },
    {
      number: "03 — Web Purchase Flow",
      title: "Tickets online, on any device",
      description: "The web purchase flow had to convert visitors into buyers — on desktop and mobile, for guests planning ahead and for last-minute purchases. Clear pricing, smooth checkout, and zero unnecessary steps.",
      visual: "",
      points: [
        "End-to-end web ticketing flow for Space Needle",
        "Responsive design across desktop and mobile",
        "Date and time selection with real-time availability",
        "Add-on experiences integrated into the purchase flow",
        "Streamlined checkout with minimal drop-off points",
        "Optimized for both planned visits and impulse purchases",
      ],
    },
    {
      number: "04 — Box Office",
      title: "Designed for the people on the ground",
      description: "The box office interface is used by Space Needle staff every single day — selling tickets, handling modifications, managing groups, and processing payments at the counter. Speed and reliability were non-negotiable.",
      visual: "",
      points: [
        "POS interface designed for on-site staff at the ticket counter",
        "Fast ticket lookup, date modification, and group booking",
        "Real-time availability and capacity visibility",
        "Integrated payment processing across multiple tender types",
        "Error-tolerant flows for high-pressure, high-volume situations",
        "Designed to minimize training time for new staff",
      ],
    },
    {
      number: "05 — Internal Management Platform",
      title: "Powering operations behind the scenes",
      description: "The management platform gives Space Needle operations teams full control over every variable that affects the guest experience — pricing, inventory, schedules, discounts, bundles, and real-time sales data across all channels.",
      visual: "",
      points: [
        "Pricing configuration by month, week, day, and individual time slot",
        "Ticket inventory and capacity management per channel",
        "Bundle, package, and discount configuration",
        "Real-time sales tracking across kiosks, web, and box office",
        "Spacebook web — guests find and download their visit photos",
        "Spacebook tablet — in-tower version for immediate photo access",
      ],
    },
    {
      number: "06 — Partner Platforms",
      title: "One foundation. Three brands.",
      description: "Every product designed for Space Needle was adapted for two partner attractions — Chihuly Garden and Glass and Seattle Top Tix. Same underlying logic, same component architecture, completely different brand expressions.",
      visual: "",
      points: [
        "Kiosk UI adapted for Chihuly Garden and Glass",
        "Kiosk UI adapted for Seattle Top Tix",
        "Web purchase flow adapted for both partner platforms",
        "Brand token system enabling full visual differentiation",
        "Shared component architecture across all three brands",
        "Partner onboarding accelerated through reusable foundations",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "6+", label: "Products designed", body: "Camera tablets, kiosks, web flows, box office, management platform, and Spacebook." },
      { value: "3", label: "Brands covered", body: "Space Needle, Chihuly Garden and Glass, and Seattle Top Tix — all sharing unified design foundations." },
      { value: "2", label: "Kiosk formats", body: "Standard and large-format ticketing kiosks, both redesigned from the ground up." },
      { value: "1", label: "Design system", body: "One unified foundation powering all touchpoints across all three brands." },
    ],
    summary: "What began as a tablet UI project became a full digital ecosystem redesign — spanning customer-facing experiences, partner platforms, and internal operations across one of America's most iconic attractions.",
  },
  reflection: {
    insights: [
      {
        number: "01",
        insight: "Designing for tourists means designing for people who have never used your product before — and may never use it again. Clarity and speed are everything.",
      },
      {
        number: "02",
        insight: "When one design system powers three brands, the architecture decisions you make early determine how much freedom — or constraint — every team has later.",
      },
      {
        number: "03",
        insight: "The internal tools that staff use every day matter just as much as the customer-facing ones. A well-designed back-office makes the whole guest experience better.",
      },
    ],
  },
};
