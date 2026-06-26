import type { CaseData } from "@/components/case-detail/case-layout";

export const spaceNeedleData: CaseData = {
  slug: "space-needle",
  heroMockup: "",
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
  overviewImages: ["", "", "", ""],
  overviewTagline: "One ecosystem. Six products. Three brands.",
  transformation: [
    {
      number: "01 — In-Tower Camera Experiences",
      title: "Designing the magic inside the tower",
      description: "My first project at Space Needle was designing tablet interfaces for the in-tower camera experiences. Guests interact with touchscreen tablets to trigger and preview their photos — from the Oculus Selfie shot looking straight down through the glass stairs, to the Halo Selfie 360° camera, to the SkyHigh experience at 520 feet above Seattle.",
      visual: "",
      points: [
        "Tablet UI for Oculus Selfie — overhead camera at the iconic glass oculus stairs",
        "Halo Selfie interface — 360° camera experience on the outer ring",
        "SkyHigh Selfie — photo experience at the open-air observation deck",
        "Clear, guided flows for guests of all ages and tech familiarity",
        "Instant photo preview and delivery to the Space Needle app",
        "Designed for high-traffic, fast-paced guest interactions",
      ],
    },
    {
      number: "02 — Ticketing Kiosks",
      title: "Reimagining self-service ticketing",
      description: "Following the camera experience work, I led the redesign of Space Needle's ticketing kiosks — both standard and large-format. The same designs were then adapted for partner attractions Chihuly Garden and Glass and Seattle Top Tix.",
      visual: "",
      points: [
        "Full redesign of standard ticketing kiosk UI",
        "New large-format kiosk interface for high-traffic entry points",
        "Streamlined ticket selection, date picking, and checkout",
        "Adapted designs for Chihuly Garden and Glass kiosks",
        "Adapted designs for Seattle Top Tix kiosks",
        "Consistent experience across all kiosk form factors and brands",
      ],
    },
    {
      number: "03 — Web & Box Office",
      title: "A unified purchase experience",
      description: "I designed the complete web ticket purchase flow for Space Needle — then adapted it for both partner platforms. Alongside this, I designed the box office interface used by on-site staff to serve guests directly at the counter.",
      visual: "",
      points: [
        "End-to-end web ticketing flow for Space Needle",
        "Adapted web flow for Chihuly Garden and Glass",
        "Adapted web flow for Seattle Top Tix",
        "Box office POS interface for on-site staff",
        "Fast ticket lookup, modification, and group booking",
        "Integrated payment processing and real-time availability",
      ],
    },
    {
      number: "04 — Internal Management Platform & Spacebook",
      title: "Powering operations behind the scenes",
      description: "I designed the internal management platform that gives Space Needle managers full control over pricing, inventory, schedules, discounts, and sales across every channel. In parallel, I designed Spacebook — a web and in-tower tablet experience that lets guests find and download their photos from their visit.",
      visual: "",
      points: [
        "Pricing configuration for months, weeks, and individual time slots",
        "Ticket inventory and capacity management per channel",
        "Bundle, package, and discount configuration",
        "Real-time sales tracking across kiosks, web, and box office",
        "Spacebook web — guests find and download their visit photos",
        "Spacebook tablet — in-tower version for immediate photo access",
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
