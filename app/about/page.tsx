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
          <div className="grid gap-16 md:grid-cols-[440px_1fr] md:items-start">

            <Reveal delay={0.05}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface">
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
               <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Based in Europe · Available for remote roles
                </p>
                <h1 className="mt-6 font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
                  Designing products where <span className="text-accent">clarity</span> meets complexity<span className="text-accent">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  I'm a Product Designer with 11+ years of experience building digital products across diverse industries and markets. I help teams transform complex ideas into intuitive experiences that create meaningful value for users and measurable results for businesses.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-4">
                 <a
                  href="/resume.pdf"
                    download
                    className="group inline-flex items-center gap-3 rounded-full border border-ink px-5 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    Download CV
                    <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>
                  <Link
                    href="/#work"
                    className="group inline-flex items-center gap-3 rounded-full border border-ink px-5 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    View work
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
      {/* ── 2. Stats ── */}
      <section className="px-8 py-16 md:px-14">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "7+", label: "Years of experience", body: "A proven track record of delivering outcome-focused design solutions." },
              { value: "20+", label: "Products shipped", body: "Shipped products across fintech, proptech, SaaS and enterprise platforms." },
              { value: "3", label: "Industries shaped", body: "Fintech, PropTech, and LegalTech products used by real customers." },
              { value: "Lead", label: "Design level", body: "Led design from discovery to delivery, across mobile and web platforms." },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="relative section-invert flex flex-col gap-4 px-8 py-10">
                  {i > 0 && (
                    <div className="absolute left-0 top-10 bottom-10 w-px bg-white/10" />
                  )}
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
                  My path into design started with a strong visual foundation.
                  I studied at an art school before earning a Bachelor&apos;s
                  degree in Graphic Design, where I developed an understanding
                  of visual communication, composition, and problem-solving
                  through design.
                </p>
                <p>
                  While still at university, I began my career as a freelance
                  designer, working with clients across different industries and
                  learning how to transform ideas into real products. Those early
                  experiences taught me adaptability, ownership, and the
                  importance of designing for both people and business outcomes.
                </p>
                <p>
                  Over the last 11+ years, I&apos;ve collaborated with startups,
                  scale-ups, and international companies, designing products
                  across fintech, proptech, SaaS, LegalTech, retail, and
                  enterprise software. Along the way, my focus naturally evolved
                  from visual design to product design — combining research,
                  strategy, systems thinking, and user experience to solve
                  increasingly complex challenges.
                </p>
                <p>
                  Today, I help teams turn complexity into clarity by creating
                  digital products that are intuitive, scalable, and aligned
                  with both user needs and business goals.
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

      {/* ── 5. How I work + What I bring ── */}
      <section className="section-invert px-8 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-content">

          {/* How I work */}
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              How I work
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discover",
                body: "Understand users, business goals, constraints, and opportunities.",
                accent: "Research & Insights",
              },
              {
                step: "02",
                title: "Define",
                body: "Turn messy problems into clear product direction, flows, and priorities.",
                accent: "Strategy & Direction",
              },
              {
                step: "03",
                title: "Design",
                body: "Create intuitive interfaces, prototypes, and scalable design patterns.",
                accent: "UI & Systems",
              },
              {
                step: "04",
                title: "Validate",
                body: "Test assumptions, use feedback, and improve with data.",
                accent: "Testing & Iteration",
              },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="group relative flex flex-col gap-8 bg-[#181613] px-8 py-12 transition-all duration-500 hover:bg-[#1c1a14] min-h-[380px]">
                  {i > 0 && (
                    <div className="absolute left-0 top-12 bottom-12 w-px bg-white/10" />
                  )}
                  <span className="font-display text-[80px] font-semibold leading-none text-white/5 transition-colors duration-500 group-hover:text-accent/20 select-none">
                    {p.step}
                  </span>
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="font-display text-2xl font-semibold uppercase text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-accent/40 transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 group-hover:text-accent">
                      {p.accent}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* What I bring */}
          <Reveal>
            <h2 className="mt-24 font-display text-display-md font-semibold uppercase text-ink">
              What I bring
            </h2>
          </Reveal>

          <div className="mt-12">
            {VALUE.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group grid cursor-default gap-6 border-t border-white/10 py-8 transition-all duration-500 hover:border-accent md:grid-cols-[80px_1fr_1fr] md:items-center md:py-10">
                  <span className="font-display text-display-sm font-semibold text-accent/20 transition-colors duration-500 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold uppercase text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted md:text-base">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/10" />
          </div>

        </div>
      </section>

      {/* ── 7. Product Design Stack ── */}
      <section className="border-t border-line px-8 py-24 md:px-14 md:py-32">
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
