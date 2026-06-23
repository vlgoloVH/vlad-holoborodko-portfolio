"use client";

import Link from "next/link";
import Image from "next/image";
import { Case } from "@/lib/cases";

export interface ProductArea {
  title: string;
  visual?: string;
  problem: string;
  solution: string;
  result?: string;
}

export interface CaseData {
  slug: string;
  overview: {
    about: string;
    challenge: string;
  };
  impact: {
    role: string[];
    areas: string[];
  };
  understanding: {
    business: string[];
    users: string[];
    constraints: string[];
  };
  productAreas: ProductArea[];
  designSystem?: {
    description: string;
    visual?: string;
    highlights: string[];
  };
  selectedScreens?: {
    label: string;
    src: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  reflection: string;
  heroMockup?: string;
}

interface CaseLayoutProps {
  caseData: CaseData;
  caseMeta: Case;
  otherCases: Case[];
}

export function CaseLayout({ caseData, caseMeta, otherCases }: CaseLayoutProps) {
  const platforms = caseMeta.platform;
  const duration = caseMeta.meta.duration;
  const role = caseMeta.meta.role;
  const industry = caseMeta.industry;

  return (
    <main>
      {/* 01. HERO */}
      <section className="px-8 md:px-14 pt-20 pb-0">
        <div className="mx-auto max-w-content">
          <div className="mb-12">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6">
              Case Study
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
              {caseMeta.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl leading-snug mb-12">
              {caseMeta.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Role</p>
                <p className="text-sm font-medium">{role}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Duration</p>
                <p className="text-sm font-medium">{duration}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Platform</p>
                <p className="text-sm font-medium">{platforms}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">Industry</p>
                <p className="text-sm font-medium">{industry}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Mockup */}
      <div className="w-full bg-[#f0ede6] mt-8">
        <div className="mx-auto max-w-content px-8 md:px-14">
          {caseData.heroMockup ? (
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={caseData.heroMockup}
                alt={`${caseMeta.title} product mockup`}
                fill
                className="object-contain object-bottom"
              />
            </div>
          ) : (
            <div className="w-full aspect-[16/9] flex items-center justify-center">
              <p className="font-mono text-xs text-muted">{caseMeta.title} — mockup coming soon</p>
            </div>
          )}
        </div>
      </div>

      {/* 02. PROJECT OVERVIEW */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
            Project Overview
          </p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl mb-4">About the Product</h2>
              <p className="text-muted leading-relaxed">{caseData.overview.about}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl mb-4">The Challenge</h2>
              <p className="text-muted leading-relaxed">{caseData.overview.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. MY IMPACT */}
      <section className="section-invert px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-12">
            My Impact
          </p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl mb-8">My Role</h2>
              <ul className="space-y-3">
                {caseData.impact.role.map((item, i) => (
                  <li key={i} className="flex gap-3 opacity-80">
                    <span className="text-accent mt-1 shrink-0">→</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl mb-8">Areas Owned</h2>
              <div className="flex flex-wrap gap-2">
                {caseData.impact.areas.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 border border-white/20 text-sm rounded-full opacity-80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. UNDERSTANDING THE SPACE */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
            Understanding the Space
          </p>
          <h2 className="font-display text-4xl mb-16 max-w-xl">
            Product thinking before pixels.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-xl mb-6 pb-4 border-b border-border">
                Business Goals
              </h3>
              <ul className="space-y-3">
                {caseData.understanding.business.map((item, i) => (
                  <li key={i} className="text-muted text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl mb-6 pb-4 border-b border-border">
                User Goals
              </h3>
              <ul className="space-y-3">
                {caseData.understanding.users.map((item, i) => (
                  <li key={i} className="text-muted text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl mb-6 pb-4 border-b border-border">
                Constraints
              </h3>
              <ul className="space-y-3">
                {caseData.understanding.constraints.map((item, i) => (
                  <li key={i} className="text-muted text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05. DESIGN APPROACH */}
      <section className="px-8 md:px-14 py-24 bg-[#f0ede6]">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-16">
            Design Approach
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0 overflow-x-auto">
            {["Discover", "Define", "Design", "Validate", "Ship", "Iterate"].map((step, i, arr) => (
              <div key={step} className="flex md:flex-col items-center">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-px h-8 md:w-8 md:h-px bg-border md:hidden" />
                  <div className="flex flex-col items-center py-4 md:py-0 md:px-8">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-3 hover:border-accent hover:text-accent transition-colors">
                      <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="font-display text-base md:mt-3 text-center whitespace-nowrap">
                      {step}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block w-12 h-px bg-border shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. KEY PRODUCT AREAS */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
            Key Product Areas
          </p>
          <div className="space-y-0">
            {caseData.productAreas.map((area, i) => (
              <div key={i}>
                <div className="py-24">
                  {/* Visual */}
                  <div className="w-full aspect-[16/8] bg-[#f0ede6] rounded-sm mb-12 flex items-center justify-center overflow-hidden">
                    {area.visual ? (
                      <Image
                        src={area.visual}
                        alt={area.title}
                        width={1400}
                        height={700}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="font-mono text-xs text-muted">{area.title} — visual coming soon</p>
                    )}
                  </div>

                  {/* Text */}
                  <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 items-start">
                    <div>
                      <h3 className="font-display text-3xl mb-6">{area.title}</h3>
                      <p className="text-muted leading-relaxed">{area.problem}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Solution</p>
                      <p className="text-sm leading-relaxed">{area.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">Result</p>
                      <p className="text-sm leading-relaxed">{area.result}</p>
                    </div>
                  </div>
                </div>
                {i < caseData.productAreas.length - 1 && (
                  <div className="border-b border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. DESIGN SYSTEM */}
      {caseData.designSystem && (
        <section className="section-invert px-8 md:px-14 py-24">
          <div className="mx-auto max-w-content">
            <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-12">
              Design System
            </p>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl mb-6">Scalable Foundations</h2>
                <p className="opacity-70 leading-relaxed mb-8">{caseData.designSystem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseData.designSystem.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 border border-white/20 text-sm rounded-full opacity-70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] bg-white/5 rounded-sm flex items-center justify-center overflow-hidden">
                {caseData.designSystem.visual ? (
                  <Image
                    src={caseData.designSystem.visual}
                    alt="Design system"
                    width={700}
                    height={525}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="font-mono text-xs opacity-30">Design system visual coming soon</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 08. SELECTED SCREENS */}
      {caseData.selectedScreens && caseData.selectedScreens.length > 0 && (
        <section className="px-8 md:px-14 py-24">
          <div className="mx-auto max-w-content">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
              Selected Screens
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {caseData.selectedScreens.map((screen, i) => (
                <div key={i} className="aspect-[3/4] bg-[#f0ede6] rounded-sm overflow-hidden">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 09. IMPACT */}
      <section className="px-8 md:px-14 py-24 border-t border-border">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-16">
            Impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {caseData.metrics.map((metric, i) => (
              <div key={i}>
                <p className="font-display text-6xl md:text-7xl leading-none mb-3 text-accent">
                  {metric.value}
                </p>
                <p className="text-sm text-muted leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REFLECTIONS */}
      <section className="px-8 md:px-14 py-24 bg-[#f0ede6]">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
            Reflections
          </p>
          <blockquote className="font-display text-2xl md:text-3xl leading-snug max-w-3xl text-ink/80">
            {caseData.reflection}
          </blockquote>
        </div>
      </section>

      {/* 11. EXPLORE MORE WORK */}
      <section className="px-8 md:px-14 py-24">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs tracking-widest uppercase text-muted mb-12">
            Explore More Work
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {otherCases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="group block border border-border rounded-sm p-8 hover:border-ink/30 transition-colors"
              >
                <div className="aspect-[16/9] bg-[#f0ede6] rounded-sm mb-6 overflow-hidden">
                  {c.cover ? (
                    <Image
                      src={c.cover}
                      alt={c.title}
                      width={700}
                      height={394}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
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
                  <span className="text-muted group-hover:text-ink group-hover:translate-x-1 transition-all duration-200">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT CTA */}
      <section className="section-invert px-8 md:px-14 py-32">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-8">
              Interested in working together?
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-12">
              Let's build better products.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/vladholoborodko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-sm hover:border-white/60 transition-colors rounded-full"
              >
                LinkedIn →
              </a>
              <a
                href="mailto:vlgolo1996@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm hover:bg-accent/90 transition-colors rounded-full"
              >
                Email me →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
