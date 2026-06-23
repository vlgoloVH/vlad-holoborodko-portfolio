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
  shortDescription: string;
  executiveSummary: {
    narrative: string;
    deliverables: string[];
  };
  scope: {
    title: string;
    description: string;
  }[];
  audit: {
    text: string;
    findings: string[];
  };
  challenges: {
    user: string;
    business: string;
    design: string;
  };
  timeline: {
    title: string;
    description: string;
  }[];
  responsibilities: {
    title: string;
    description: string;
  }[];
  principles: {
    title: string;
    description: string;
  }[];
  transformation: TransformationTheme[];
  research: {
    description: string;
    cards: string[];
  };
  selectedScreens?: {
    label: string;
    src: string;
  }[];
  impact: {
    items: string[];
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
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {caseData.shortDescription}
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

      {/* 02. EXECUTIVE SUMMARY */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Executive Summary
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 01 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-16">
            <Reveal delay={0.05}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink mb-6">
                From product audit to full platform transformation
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">{caseData.executiveSummary.narrative}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {caseData.executiveSummary.deliverables.map((item, i) => (
                  <div key={i} className="rounded-sm border border-line px-4 py-3">
                    <p className="text-sm leading-snug text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03. PROJECT SCOPE */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Project Scope
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 02 ]</span>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {caseData.scope.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-sm border border-white/10 p-6 h-full">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">0{i + 1}</p>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04. PRODUCT AUDIT */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Product Audit
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 03 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-16 items-start">
            <Reveal delay={0.05}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink mb-6">
                Starting with a full product audit
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base mb-6">{caseData.audit.text}</p>
              <p className="text-sm text-muted italic border-l-2 border-accent pl-4">
                The audit became the foundation for the product redesign roadmap.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {caseData.audit.findings.map((finding, i) => (
                  <div key={i} className="rounded-sm border border-line p-4 flex items-start gap-3">
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    <p className="text-sm leading-snug text-ink">{finding}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05. THE CHALLENGE */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                The Challenge
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 04 ]</span>
            </div>
            <p className="mt-4 font-display text-display-sm leading-snug text-ink max-w-2xl">
              The platform had grown faster than its experience.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { label: "User Challenge", text: caseData.challenges.user },
              { label: "Business Challenge", text: caseData.challenges.business },
              { label: "Design Challenge", text: caseData.challenges.design },
            ].map((col, i) => (
              <Reveal key={col.label} delay={i * 0.05}>
                <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">{col.label}</p>
                <p className="text-sm leading-relaxed text-muted md:text-base">{col.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06. TIMELINE */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Timeline
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 05 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-line" />
            {caseData.timeline.map((step, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative pl-12 pb-10">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-line bg-bg flex items-center justify-center">
                    <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07. DESIGN LEADERSHIP */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Design Leadership
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 06 ]</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              I led product design across mobile, web, and partner experiences — combining hands-on execution, product thinking, research, stakeholder collaboration, and design leadership.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {caseData.responsibilities.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-sm border border-white/10 p-6 h-full">
                  <h3 className="font-display text-xl font-semibold uppercase text-ink mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08. DESIGN PRINCIPLES */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Design Principles
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 07 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {caseData.principles.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="font-display text-xl font-semibold uppercase text-ink mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09. PRODUCT TRANSFORMATION */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Product Transformation
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 08 ]</span>
            </div>
            <p className="mt-4 font-display text-display-sm leading-snug text-ink max-w-3xl">
              Transforming a fragmented platform into a scalable ecosystem.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              The transformation was not about redesigning individual screens. It was about rethinking the entire product — its structure, experience, foundation, and scale.
            </p>
            <div className=" mt-6 w-full" />
          </Reveal>

          <div className="mt-12 space-y-0">
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

      {/* 10. SELECTED SCREENS */}
      {caseData.selectedScreens && caseData.selectedScreens.length > 0 && (
        <section className="px-6 py-24 md:px-10 md:py-32 bg-surface">
          <div className="mx-auto max-w-content">
            <Reveal>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-display-md font-semibold uppercase text-ink">Selected Screens</h2>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 09 ]</span>
              </div>
              <div className=" mt-6 w-full" />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseData.selectedScreens.map((screen, i) => (
                <div key={i} className="aspect-[9/16] bg-bg rounded-sm overflow-hidden">
                  <Image src={screen.src} alt={screen.label} width={300} height={533} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. RESEARCH */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Research & Collaboration</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 10 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-16">
            <Reveal delay={0.05}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink mb-6">Designing with users and teams</h3>
              <p className="text-sm leading-relaxed text-muted md:text-base mb-6">{caseData.research.description}</p>
              <p className="text-sm leading-relaxed text-muted">
                Because the product operates in a regulated investment space, many design decisions required balancing user needs, business goals, technical feasibility, and compliance requirements.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {caseData.research.cards.map((card, i) => (
                  <div key={i} className="rounded-sm border border-line p-5">
                    <p className="font-display text-xl font-semibold uppercase text-ink">{card}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12. IMPACT */}
      <section className="section-invert px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">Impact</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 11 ]</span>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {caseData.impact.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-sm border border-white/10 p-5 h-full">
                  <span className="text-accent text-lg">✦</span>
                  <p className="text-sm mt-2 leading-snug text-muted">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">{caseData.impact.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* 13. REFLECTION */}
      <section className="px-6 py-24 md:px-10 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-8">[ 12 — Reflection ]</p>
            <blockquote className="font-display text-display-sm font-semibold uppercase leading-snug text-ink max-w-3xl">
              {caseData.reflection}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 14. MORE WORK */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">More Work</h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">[ 13 ]</span>
            </div>
            <div className=" mt-6 w-full" />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
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

      {/* 15. CONTACT CTA */}
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
