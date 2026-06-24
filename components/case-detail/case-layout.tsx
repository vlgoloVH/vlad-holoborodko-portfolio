"use client";

import { TransformationSticky } from "@/components/case-detail/transformation-sticky";
import Link from "next/link";
import Image from "next/image";
import { Case } from "@/lib/cases";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";


export interface TransformationTheme {
  number: string;
  title: string;
  description: string;
  visual?: string;
  points: string[];
}

export interface CaseData {
  slug: string;
  heroMockup?: string;
  tagline: string;
  context: {
    invite: string;
    situation: string;
    outcome: string;
  };
  role: {
    summary: string;
    responsibilities: string[];
    team: string[];
  };
  transformation: TransformationTheme[];
  selectedScreens?: {
    label: string;
    src: string;
  }[];
  impact: {
    items: { value: string; label: string }[];
    summary: string;
  };
  reflection: string;
}

interface CaseLayoutProps {
  caseData: CaseData;
  caseMeta: Case;
  otherCases: Case[];
}

export function CaseLayout({ caseData, caseMeta, otherCases }: CaseLayoutProps) {
  const prev = otherCases[0] ?? null;
  const next = otherCases[1] ?? null;

  return (
    <main>

      {/* 01. HERO */}
      <section className="px-6 pb-0 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
              — Case Study · {caseMeta.year}
            </p>
            <h1 className="font-display text-display-xl font-semibold uppercase leading-[0.95] text-ink">
              {caseMeta.title}
            </h1>
            <p className="mt-6 font-display text-display-sm leading-snug text-ink max-w-3xl">
              {caseData.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3 md:grid-cols-5">
              {[
                { label: "Role", value: caseMeta.meta.role },
                { label: "Industry", value: caseMeta.industry },
                { label: "Platform", value: caseMeta.platform },
                { label: "Duration", value: caseMeta.meta.duration },
                { label: "Team", value: caseMeta.meta.team },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-snug text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="w-full bg-surface aspect-[16/8] rounded-sm flex items-center justify-center overflow-hidden">
              {caseData.heroMockup ? (
                <Image src={caseData.heroMockup} alt={caseMeta.title} fill className="object-cover" />
              ) : (
                <p className="font-mono text-xs uppercase tracking-widest text-muted">Hero mockup — coming soon</p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02. CONTEXT */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-12">Context</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "The Invite", text: caseData.context.invite },
              { label: "The Situation", text: caseData.context.situation },
              { label: "What Followed", text: caseData.context.outcome },
            ].map((col, i) => (
              <Reveal key={col.label} delay={i * 0.05}>
                <div className="border-t-2 border-accent pt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">{col.label}</p>
                  <p className="text-sm leading-relaxed text-muted md:text-base">{col.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03. MY ROLE */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-16">My Role</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <p className="text-sm leading-relaxed text-muted md:text-base">
                As Lead Product Designer, I owned the full design direction of SmartCrowd — from the initial product audit that identified core UX gaps, to leading the complete redesign of the mobile app, web platform, and partner products. I set the strategic design direction, shaped information architecture, and ensured every platform felt unified and intentional.
              </p>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                Beyond execution, I built the design system from scratch — creating a scalable token-based foundation with light and dark themes that served both SmartCrowd and its partner brands. I worked closely with Product, Engineering, Compliance, and Marketing, and mentored another designer on the team throughout the project.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: "What I Owned",
                items: ["Product Strategy", "Information Architecture", "Mobile · iOS & Android", "Web Platform", "Design System", "Partner Platforms", "User Research"],
              },
              {
                label: "How I Worked",
                items: ["End-to-end execution", "Hands-on design leadership", "Cross-functional collaboration", "Research-driven decisions", "Iterative delivery", "Design mentorship"],
              },
              {
                label: "With Whom",
                items: ["Product Management", "Engineering", "Compliance", "Marketing", "QA", "1 Designer"],
              },
            ].map((col, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-[#1c1a14] rounded-sm p-8 h-full flex flex-col gap-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">{col.label}</p>
                  <ul className="flex flex-col gap-0 flex-1">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 py-3">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* 04. PRODUCT TRANSFORMATION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-4">Product Transformation</h2>
            <p className="font-display text-display-sm leading-snug text-ink max-w-3xl mb-4">
              Not a redesign. A full platform transformation.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base mb-12">
              The work covered every layer of the product — structure, experience, design foundation, and ecosystem scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-full aspect-[16/8] bg-surface rounded-sm flex items-center justify-center overflow-hidden">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Product overview — visual coming soon</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-content">
          <TransformationSticky themes={caseData.transformation} />
        </div>
      </div>
      
      {/* 05. SELECTED SCREENS — horizontal scroll */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-content">
            <Reveal>
              <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-12">Selected Screens</h2>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.05}>
          <div className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-10 scrollbar-hide snap-x snap-mandatory">
            {(caseData.selectedScreens && caseData.selectedScreens.length > 0
              ? caseData.selectedScreens.map((s) => ({ label: s.label, src: s.src }))
              : ["Explore", "Property Details", "Portfolio", "Wallet", "Investment Flow", "Registration", "Reinvest", "Partner Platform"].map((label) => ({ label, src: "" }))
            ).map((screen, i) => (
              <div
                key={i}
                className="shrink-0 snap-start w-[240px] md:w-[300px] aspect-[9/16] bg-surface rounded-sm overflow-hidden flex items-center justify-center"
              >
                {screen.src ? (
                  <Image src={screen.src} alt={screen.label} width={300} height={533} className="w-full h-full object-cover" />
                ) : (
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted text-center px-4">{screen.label}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 06. IMPACT */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-16">Impact</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 items-stretch mb-16">
            {caseData.impact.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative flex flex-col gap-4 px-8 py-12 h-full">
                  {i > 0 && <div className="absolute left-0 top-10 bottom-10 w-px bg-white/10" />}
                  <span className="font-display text-display-xl font-semibold leading-none text-accent">
                    {item.value}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">{caseData.impact.summary}</p>
          </Reveal>
        </div>
      </section>

            {/* 07. REFLECTION */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-16">Reflection</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                insight: "Real product leadership means holding the full picture — user needs, business goals, technical constraints, and compliance — all at once.",
              },
              {
                number: "02",
                insight: "The most valuable thing I built wasn't a screen. It was a foundation the entire team could keep building on.",
              },
              {
                number: "03",
                insight: "Designing for regulated financial products taught me that clarity and compliance aren't opposites — good UX makes both possible.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-t border-white/20 pt-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">{item.number}</p>
                  <p className="font-display text-xl leading-snug text-ink md:text-2xl">{item.insight}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* 08. PREV / NEXT */}
      {(prev || next) && (
        <section className="border-t border-line">
          <div className="grid md:grid-cols-2">
            {prev ? (
              <Reveal>
                <Link
                  href={`/cases/${prev.slug}`}
                  className="group flex flex-col justify-between gap-8 p-10 md:p-16 border-b md:border-b-0 md:border-r border-line hover:bg-surface transition-colors duration-300"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">← Previous</p>
                    <h3 className="font-display text-display-sm font-semibold uppercase text-ink group-hover:text-accent transition-colors duration-300">
                      {prev.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{prev.industry}</p>
                  </div>
                </Link>
              </Reveal>
            ) : <div />}

            {next ? (
              <Reveal delay={0.05}>
                <Link
                  href={`/cases/${next.slug}`}
                  className="group flex flex-col justify-between gap-8 p-10 md:p-16 hover:bg-surface transition-colors duration-300"
                >
                  <div className="md:text-right">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Next →</p>
                    <h3 className="font-display text-display-sm font-semibold uppercase text-ink group-hover:text-accent transition-colors duration-300">
                      {next.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{next.industry}</p>
                  </div>
                </Link>
              </Reveal>
            ) : <div />}
          </div>
        </section>
      )}

      {/* CONTACT CTA */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">
              — Looking for a Product Designer who can simplify complex products?
            </p>
            <h2 className="font-display text-display-lg font-semibold uppercase leading-[0.95] text-ink mb-12">
              Let's build something meaningful.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/vladholoborodko" target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink">
                LinkedIn →
              </a>
              <a href="mailto:vlgolo1996@gmail.com" className="rounded-full border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent-ink transition-colors duration-300 hover:bg-accent/90">
                Email me →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
