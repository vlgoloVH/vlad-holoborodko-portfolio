"use client";

import Link from "next/link";
import Image from "next/image";
import { Case } from "@/lib/cases";

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
  designSystem: {
    description: string;
    visual?: string;
    highlights: string[];
  };
  partnerPlatforms: {
    description: string;
  };
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
      <section className="px-8 md:px-14 pt-20 pb-0">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6">
            Case Study · {caseMeta.year}
          </p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.92] mb-8">
            {caseMeta.title}
          </h1>
          <p className="text-2xl md:text-3xl font-display text-muted max-w-3xl leading-snug mb-6">
            {caseData.tagline}
          </p>
          <p className="text-base text-muted max-w-2xl leading-relaxed mb-12">
            {caseData.shortDescription}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-border pt-8">
            {[
              { label: "Role", value: caseMeta.meta.role },
              { label: "Industry", value: caseMeta.industry },
              { label: "Platform", value: caseMeta.platform },
              { label: "Duration", value: caseMeta.meta.duration },
              { label: "Team", value: caseMeta.meta.team },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 w-full bg-[#f0ede6] dark:bg-white/5">
          <div className="mx-auto max-w-content px-8 md:px-14">
            <div className="w-full aspect-[16/8] flex items-center justify-center">
              {caseData.heroMockup ? (
                <Image src={caseData.heroMockup} alt={caseMeta.title} fill className="object-cover" />
              ) : (
                <p className="font-mono text-xs text-muted">Hero mockup — coming soon</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 02. EXECUTIVE SUMMARY */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Executive Summary</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl mb-6">From product audit to full platform transformation</h2>
              <p className="text-muted leading-relaxed">{caseData.executiveSummary.narrative}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 content-start">
              {caseData.executiveSummary.deliverables.map((item, i) => (
                <div key={i} className="border border-border rounded-sm px-4 py-3">
                  <p className="text-sm leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. PROJECT SCOPE */}
      <section className="px-8 md:px-14 py-24 bg-[#f0ede6] dark:bg-white/5">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Project Scope</p>
          <h2 className="font-display text-4xl mb-12">A multi-platform product redesign</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseData.scope.map((item, i) => (
              <div key={i} className="border border-border rounded-sm p-6 bg-bg dark:bg-white/5">
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">0{i + 1}</p>
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. PRODUCT AUDIT */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Product Audit</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl mb-6">Starting with a full product audit</h2>
              <p className="text-muted leading-relaxed mb-4">{caseData.audit.text}</p>
              <p className="text-sm text-muted italic border-l-2 border-accent pl-4">
                The audit became the foundation for the product redesign roadmap.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {caseData.audit.findings.map((finding, i) => (
                <div key={i} className="border border-border rounded-sm p-4 flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  <p className="text-sm leading-snug">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. THE CHALLENGE */}
      <section className="section-invert px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-12">The Challenge</p>
          <h2 className="font-display text-4xl mb-12">The platform had grown faster than its experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "User Challenge", text: caseData.challenges.user },
              { label: "Business Challenge", text: caseData.challenges.business },
              { label: "Design Challenge", text: caseData.challenges.design },
            ].map((col) => (
              <div key={col.label}>
                <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-4">{col.label}</p>
                <p className="opacity-75 leading-relaxed text-sm">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. TIMELINE */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Transformation Timeline</p>
          <h2 className="font-display text-4xl mb-12">How the product evolved</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-0">
              {caseData.timeline.map((step, i) => (
                <div key={i} className="relative pl-12 pb-10">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-border bg-bg flex items-center justify-center">
                    <span className="font-mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. DESIGN LEADERSHIP */}
      <section className="px-8 md:px-14 py-24 bg-[#f0ede6] dark:bg-white/5">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Design Leadership</p>
          <h2 className="font-display text-4xl mb-4">Lead Product Designer</h2>
          <p className="text-muted max-w-2xl leading-relaxed mb-12">
            I led product design across mobile, web, and partner experiences. My role combined hands-on design execution, product thinking, research, stakeholder collaboration, and design leadership.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseData.responsibilities.map((item, i) => (
              <div key={i} className="border border-border rounded-sm p-6 bg-bg dark:bg-white/5">
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. DESIGN PRINCIPLES */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Design Principles</p>
          <h2 className="font-display text-4xl mb-12">Principles that guided the redesign</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {caseData.principles.map((item, i) => (
              <div key={i} className="border-t-2 border-accent pt-6">
                <h3 className="font-display text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. PRODUCT TRANSFORMATION */}
      <section className="px-8 md:px-14 py-24 border-t border-border">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Product Transformation</p>
          <h2 className="font-display text-4xl mb-4 max-w-2xl">
            Transforming a fragmented platform into a scalable ecosystem.
          </h2>
          <p className="text-muted max-w-xl leading-relaxed mb-20">
            The transformation was not about redesigning individual screens. It was about rethinking the entire product — its structure, experience, foundation, and scale.
          </p>
          <div className="space-y-0">
            {caseData.transformation.map((theme, i) => (
              <div key={i}>
                <div className="py-20">
                  <div className="w-full aspect-[16/8] bg-[#f0ede6] dark:bg-white/5 rounded-sm mb-12 flex items-center justify-center overflow-hidden">
                    {theme.visual ? (
                      <Image src={theme.visual} alt={theme.title} width={1400} height={700} className="w-full h-full object-cover" />
                    ) : (
                      <p className="font-mono text-xs text-muted">{theme.title} — visual coming soon</p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">{theme.number}</p>
                      <h3 className="font-display text-4xl mb-6">{theme.title}</h3>
                      <p className="text-muted leading-relaxed text-base">{theme.description}</p>
                    </div>
                    <div className="space-y-3 pt-2">
                      {theme.points.map((point, j) => (
                        <div key={j} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                          <span className="text-accent mt-1 shrink-0 text-xs">→</span>
                          <p className="text-sm leading-snug">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {i < caseData.transformation.length - 1 && <div className="border-b border-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SELECTED SCREENS */}
      {caseData.selectedScreens && caseData.selectedScreens.length > 0 && (
        <section className="px-8 md:px-14 py-24 bg-[#f0ede6] dark:bg-white/5">
          <div className="mx-auto max-w-content">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Selected Screens</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseData.selectedScreens.map((screen, i) => (
                <div key={i} className="aspect-[9/16] bg-white/50 dark:bg-white/5 rounded-sm overflow-hidden">
                  <Image src={screen.src} alt={screen.label} width={300} height={533} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. RESEARCH */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widests uppercase text-muted mb-12">Research & Collaboration</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl mb-6">Designing with users and teams</h2>
              <p className="text-muted leading-relaxed mb-6">{caseData.research.description}</p>
              <p className="text-sm text-muted leading-relaxed">
                Because the product operates in a regulated investment space, many design decisions required balancing user needs, business goals, technical feasibility, and compliance requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              {caseData.research.cards.map((card, i) => (
                <div key={i} className="border border-border rounded-sm p-5">
                  <p className="font-display text-base">{card}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. IMPACT */}
      <section className="section-invert px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-16">Impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {caseData.impact.items.map((item, i) => (
              <div key={i} className="border border-white/10 rounded-sm p-5">
                <span className="text-accent text-lg">✦</span>
                <p className="text-sm mt-2 leading-snug opacity-80">{item}</p>
              </div>
            ))}
          </div>
          <p className="opacity-60 max-w-2xl leading-relaxed">{caseData.impact.summary}</p>
        </div>
      </section>

      {/* 13. REFLECTION */}
      <section className="px-8 md:px-14 py-24 bg-[#f0ede6] dark:bg-white/5">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Reflection</p>
          <blockquote className="font-display text-2xl md:text-3xl leading-snug max-w-3xl text-ink/80 dark:text-white/70">
            {caseData.reflection}
          </blockquote>
        </div>
      </section>

      {/* 14. MORE WORK */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">Explore More Work</p>
          <div className="grid md:grid-cols-2 gap-6">
            {otherCases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} className="group block border border-border rounded-sm p-8 hover:border-ink/30 dark:hover:border-white/30 transition-colors">
                <div className="aspect-[16/9] bg-[#f0ede6] dark:bg-white/5 rounded-sm mb-6 overflow-hidden">
                  {c.cover ? (
                    <Image src={c.cover} alt={c.title} width={700} height={394} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="font-mono text-xs text-muted">{c.title}</p>
                    </div>
                  )}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl mb-1">{c.title}</h3>
                    <p className="text-sm text-muted">{c.industry}</p>
                  </div>
                  <span className="text-muted group-hover:text-ink dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-200">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CONTACT CTA */}
      <section className="section-invert px-8 md:px-14 py-32">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-8">
              Looking for a Product Designer who can simplify complex products?
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-12">
              Let's build something meaningful.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://linkedin.com/in/vladholoborodko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-sm hover:border-white/60 transition-colors rounded-full">
                LinkedIn →
              </a>
              <a href="mailto:vlgolo1996@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm hover:bg-accent/90 transition-colors rounded-full">
                Email me →
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
