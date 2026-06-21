import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer with 7+ years of experience across fintech, proptech, SaaS and enterprise platforms.",
};

const STACK = [
  { label: "Design", tools: ["Figma", "FigJam", "Framer", "Mobbin"] },
  { label: "Design Systems", tools: ["Storybook", "Design Tokens"] },
  { label: "Research", tools: ["Maze", "User Interviews"] },
  { label: "Analytics", tools: ["Amplitude", "SQL"] },
  { label: "Collaboration", tools: ["Jira", "Notion"] },
  { label: "AI", tools: ["Claude", "ChatGPT", "Figma Make"] },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "Understand users, business goals, constraints, and opportunities.",
  },
  {
    step: "02",
    title: "Define",
    body: "Turn messy problems into clear product direction, flows, and priorities.",
  },
  {
    step: "03",
    title: "Design",
    body: "Create intuitive interfaces, prototypes, and scalable design patterns.",
  },
  {
    step: "04",
    title: "Validate",
    body: "Test assumptions, use feedback, and improve with data.",
  },
];

const VALUE = [
  {
    title: "Product thinking",
    body: "Connecting user needs with business goals and product outcomes.",
  },
  {
    title: "Systems thinking",
    body: "Designing scalable patterns, reusable components, and consistent experiences.",
  },
  {
    title: "Cross-functional collaboration",
    body: "Working closely with PMs, engineers, stakeholders, and compliance teams.",
  },
  {
    title: "Data-informed decisions",
    body: "Using research, analytics, and product signals to guide design choices.",
  },
];

const EXPERIENCE = [
  {
    year: "2025–2026",
    company: "SmartCrowd",
    role: "Lead Product Designer",
    body: "Redesigned core investment experiences across mobile and web, including portfolio, wallet, property discovery, investment flows, and new product features.",
  },
  {
    year: "2025",
    company: "Fozzy Group",
    role: "Product Designer",
    body: "Worked on back-office and operational product experiences for internal teams across one of Ukraine's largest retail ecosystems.",
  },
  {
    year: "2018–2019",
    company: "Notary HUB",
    role: "Product Designer",
    body: "Designed and improved complex notary-related digital platforms and product flows, introducing remote online notarization workflows.",
  },
];

const STATS = [
  { value: "7+", label: "Years of experience" },
  { value: "3", label: "Fintech · Proptech · SaaS" },
  { value: "20+", label: "Products shipped" },
  { value: "Lead", label: "Product Design level" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="px-8 pb-24 pt-36 md:px-14 md:pt-44">
        <div className="mx-auto max-w-content">
          <div className="grid gap-16 md:grid-cols-[380px_1fr] md:items-start">

            <Reveal delay={0.05}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-surface">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#a39a8a" }}>Portrait</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted opacity-60">replace with final photo</span>
                </div>
                <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-line" />
                <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-line" />
                <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-line" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line" />
              </div>
            </Reveal>

            <div className="flex flex-col justify-between gap-12 md:pt-4">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  — About
                </p>
                <h1 className="mt-6 font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
                  Designing products where user needs, business goals
                  <span className="text-accent">,</span> and technical reality
                  meet<span className="text-accent">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  I&apos;m Vlad Holoborodko, a Product Designer with 7+ years of
                  experience designing digital products across fintech, proptech,
                  SaaS, and enterprise platforms.
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                  Based in Kyiv · Available for remote roles · Product / UX / UI
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#work"
                    className="group inline-flex items-center gap-3 rounded-full border border-ink px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    View work
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="group inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    Download CV
                    <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
      {/* ── 2. Stats ── */}
      <section className="border-y border-line px-8 py-16 md:px-14">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {[
              { value: "7+", label: "Years of experience", body: "A proven track record of delivering outcome-focused design solutions." },
              { value: "20+", label: "Products shipped", body: "Shipped products across fintech, proptech, SaaS and enterprise platforms." },
              { value: "3", label: "Industries shaped", body: "Fintech, PropTech, and LegalTech products used by real customers." },
              { value: "Lead", label: "Design level", body: "Led design from discovery to delivery, across mobile and web platforms." },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="section-invert flex flex-col gap-4 px-8 py-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {s.label}
                  </span>
                  <span className="font-display text-display-md font-semibold text-ink">
                    {s.value}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── 3. About me ── */}
      <section className="px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                — About me
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="space-y-6 text-sm leading-relaxed text-muted md:text-base">
                <p>
                  Over the past 7 years, I&apos;ve worked with startups and product
                  teams to design products used by real customers — not just
                  polished screens. My focus is on the intersection of user
                  needs, business goals, and technical constraints, because
                  that&apos;s where the most interesting design problems live.
                </p>
                <p>
                  Most recently, I led product design initiatives at SmartCrowd,
                  working across mobile and web platforms — from product
                  discovery and design systems to end-to-end feature delivery.
                  Before that I&apos;ve shipped products in LegalTech, enterprise
                  software, EdTech, and retail ecosystems.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Selected experience ── */}
      <section className="border-t border-line px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Selected experience
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                [ 2015 — Now ]
              </span>
            </div>
          </Reveal>

          <div className="mt-12 border-t border-line">
            {EXPERIENCE.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.05}>
                <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[160px_1fr_auto] md:gap-12 md:items-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase text-ink md:text-2xl">
                      {item.company}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                      {item.role}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How I work ── */}
      <section className="section-invert px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              How I work
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="flex flex-col gap-6 bg-bg px-8 py-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {p.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What I bring ── */}
      <section className="px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              What I bring
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {VALUE.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="flex flex-col gap-4 px-8 py-10" style={{ backgroundColor: "#181613" }}>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Product Design Stack ── */}
      <section className="section-invert border-t border-line px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              Product Design Stack
            </h2>
          </Reveal>

          <div className="mt-12 space-y-10">
            {STACK.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-line pt-8 md:grid-cols-[160px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line px-4 py-2 font-mono text-xs tracking-wide text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Beyond design ── */}
      <section className="px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                — Beyond design
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                I&apos;m interested in AI, product strategy, entrepreneurship, and
                how digital products can create real business value. Outside of
                interface design, I enjoy exploring how products grow, how teams
                make decisions, and how good systems scale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <Contact />
    </>
  );
}
