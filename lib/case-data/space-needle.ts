import type { CaseData } from "@/components/case-detail/case-layout";

export const spaceNeedleData: CaseData = {
  slug: "space-needle",
  heroMockup: "",
  tagline: "Designing the complete digital ecosystem for one of Seattle's most iconic landmarks — from in-tower camera experiences to ticketing kiosks, web flows, partner platforms, and internal operations.",
  context: {
    invite: "Space Needle brought me in to design tablet interfaces for their in-tower camera experiences — Oculus Selfie, Halo Selfie, SkyHigh, and more. What started as a focused UI project evolved into a long-term partnership across the entire digital product ecosystem.",
    situation: "The Space Needle had multiple disconnected digital touchpoints — in-tower tablets, ticketing kiosks, web purchase flows, box office tools, and internal management systems — each built independently without a unified design language or experience logic.",
    outcome: "Over the course of the engagement, I redesigned and unified the entire ecosystem: camera experience tablets, ticketing kiosks (standard and large-format), web purchase flows, box office interfaces, an internal management platform, and Spacebook — all adapted for partner attractions Chihuly Garden and Glass and Seattle Top Tix.",
  },
  role: {
    summary: "As Senior Product Designer, I owned end-to-end design across all customer-facing and internal touchpoints — from discovery and research through to final handoff.",
    responsibilities: [
      "Designed tablet UI for in-tower camera experiences (Oculus Selfie, Halo Selfie, SkyHigh, and more)",
      "Redesigned standard and large-format ticketing kiosks",
      "Adapted kiosk and web designs for partner platforms (Chihuly Garden and Glass, Seattle Top Tix)",
      "Designed web ticket purchase flow for Space Needle and partners",
      "Designed box office interfaces for on-site staff",
      "Built internal management platform for pricing, inventory, schedules, and discounts",
      "Designed Spacebook — web and in-tower tablet version for guest photo retrieval",
    ],
    team: ["1 PM", "4 Engineers", "1 Researcher"],
  },
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
      description: "Following the camera experience work, I led the redesign of Space Needle's ticketing kiosks — both standard and large-format. The goal was to make self-service ticket purchase fast, clear, and enjoyable — even for first-time visitors unfamiliar with the attraction.",
      visual: "",
      points: [
        "Full redesign of standard ticketing kiosk UI",
        "New large-format kiosk interface for high-traffic entry points",
        "Streamlined ticket selection, date picking, and checkout",
        "Adapted designs for partner kiosks at Chihuly Garden and Glass",
        "Adapted designs for Seattle Top Tix partner kiosks",
        "Consistent experience across all kiosk form factors",
      ],
    },
    {
      number: "03 — Web Ticket Purchase Flow",
      title: "A unified web experience across partners",
      description: "I designed the complete web ticket purchase flow for Space Needle — covering everything from attraction selection to payment confirmation. The same design system was then adapted for Chihuly Garden and Glass and Seattle Top Tix, creating a consistent experience across all three platforms.",
      visual: "",
      points: [
        "End-to-end web ticketing flow for Space Needle",
        "Date, time slot, and ticket type selection",
        "Bundle and add-on presentation",
        "Streamlined checkout with clear pricing",
        "Adapted flow for Chihuly Garden and Glass",
        "Adapted flow for Seattle Top Tix",
      ],
    },
    {
      number: "04 — Internal Management Platform",
      title: "Giving operations full control",
      description: "Behind every ticket sold is a complex system of pricing rules, inventory limits, time slots, bundles, and discounts. I designed the internal management platform that gives Space Needle managers full visibility and control over all of this — across every sales channel simultaneously.",
      visual: "",
      points: [
        "Pricing configuration for months, weeks, and individual time slots",
        "Ticket inventory and capacity management per channel",
        "Bundle and package configuration",
        "Discount and promotional code management",
        "Real-time sales tracking across kiosks, web, and box office",
        "Staff access and permissions management",
      ],
    },
  ],
  selectedScreens: [],
  impact: {
    items: [
      { value: "6+", label: "Products designed", body: "Camera tablets, kiosks, web flows, box office, management platform, and Spacebook." },
      { value: "3", label: "Partner platforms", body: "Space Needle, Chihuly Garden and Glass, and Seattle Top Tix — all sharing unified design foundations." },
      { value: "2", label: "Kiosk formats", body: "Standard and large-format ticketing kiosks, both redesigned from the ground up." },
      { value: "1", label: "Design system", body: "One unified foundation powering all touchpoints across all brands." },
    ],
    summary: "What began as a tablet UI project became a full digital ecosystem redesign — spanning customer-facing experiences, partner platforms, and internal operations across one of America's most iconic attractions.",
  },
  reflection: "Space Needle taught me that great design at scale is about building systems, not screens. Every interface I designed had to work for a tourist who had never visited before, a staff member serving hundreds of guests a day, and a manager configuring prices at midnight for next month's schedule. Holding all three perspectives at once was the real design challenge.",
};
