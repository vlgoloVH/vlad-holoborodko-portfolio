"use client";

import Link from "next/link";
import Image from "next/image";
import { Case } from "@/lib/cases";
import { Reveal } from "@/components/ui/reveal";

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
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Context</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 01 ]</span>
            </div>
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
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">My Role</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 02 ]</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base mb-12">
              {caseData.role.summary}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal delay={0.05}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Responsibilities</p>
              <ul className="space-y-4">
                {caseData.role.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1 shrink-0">→</span>
                    <p className="text-sm leading-snug text-muted md:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Collaborated With</p>
              <div className="flex flex-wrap gap-2">
                {caseData.role.team.map((item, i) => (
                  <span key={i} className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs tracking-wide text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04. PRODUCT TRANSFORMATION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Product Transformation</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 03 ]</span>
            </div>
            <p className="mt-2 font-display text-display-sm leading-snug text-ink max-w-3xl mb-4">
              Not a redesign. A full platform transformation.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
              The work covered every layer of the product — structure, experience, design foundation, and ecosystem scale.
            </p>
          </Reveal>

          <div className="mt-20 space-y-0">
            {caseData.transformation.map((theme, i) => (
              <Reveal key={i} delay={0.05}>
                <div>
                  <div className="py-20">
                    <div className="w-full aspect-[16/8] bg-surface rounded-sm mb-12 flex items-center justify-center overflow-hidden">
                      {theme.visual ? (
                        <Image src={theme.visual} alt={theme.title} width={1400} height={700} className="w-full h-full object-cover" />
                      ) : (
                        <p className="font-mono text-xs uppercase tracking-widest text-muted">{theme.title} — visual coming soon</p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">{theme.number}</p>
                        <h3 className="font-display text-display-sm font-semibold uppercase text-ink mb-6">{theme.title}</h3>
                        <p className="text-sm leading-relaxed text-muted md:text-base">{theme.description}</p>
                      </div>
                      <div className="space-y-3 pt-2">
                        {theme.points.map((point, j) => (
                          <div key={j} className="flex items-start gap-3 border-b border-line pb-3 last:border-0">
                            <span className="text-accent mt-1 shrink-0 text-xs">→</span>
                            <p className="text-sm leading-snug text-ink">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < caseData.transformation.length - 1 && <div className="border-b border-line" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SELECTED SCREENS */}
      <section className="px-6 py-24 md:px-10 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Selected Screens</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 04 ]</span>
            </div>
          </Reveal>
          {caseData.selectedScreens && caseData.selectedScreens.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseData.selectedScreens.map((screen, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="aspect-[9/16] bg-bg rounded-sm overflow-hidden">
                    <Image src={screen.src} alt={screen.label} width={300} height={533} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Explore", "Property Details", "Portfolio", "Wallet", "Investment Flow", "Registration", "Reinvest", "Partner Platform"].map((label, i) => (
                  <div key={i} className="aspect-[9/16] bg-bg rounded-sm flex items-center justify-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted text-center px-2">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 06. IMPACT */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between mb-16">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Impact</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 05 ]</span>
            </div>
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
      <section className="px-6 py-24 md:px-10 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">[ 06 — Reflection ]</p>
            <blockquote className="font-display text-display-sm font-semibold uppercase leading-snug text-ink max-w-3xl">
              {caseData.reflection}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 08. MORE WORK */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">More Work</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 07 ]</span>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            {otherCases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link href={`/cases/${c.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-surface rounded-sm mb-5 overflow-hidden">
                    {c.cover ? (
                      <Image src={c.cover} alt={c.title} width={700} height={525} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="font-mono text-xs uppercase tracking-widest text-muted">{c.title}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold uppercase text-ink group-hover:text-accent transition-colors duration-300 md:text-2xl">{c.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted shrink-0">{c.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
