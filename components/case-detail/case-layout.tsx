"use client";

import { useRef, useEffect, useState } from "react";
import { TransformationSticky } from "@/components/case-detail/transformation-sticky";
import Link from "next/link";
import Image from "next/image";
import { Case } from "@/lib/cases";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight, Mail, Layers } from "lucide-react";
import { Contact } from "@/components/sections/contact";

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
    items: { value: string; label: string; body?: string }[];
    summary: string;
  };
  reflection: string;
}

interface CaseLayoutProps {
  caseData: CaseData;
  caseMeta: Case;
  otherCases: Case[];
}

function ProductOverviewScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const isScrollbarDragging = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (!isDragging.current) {
        el.scrollLeft += 1;
        const max = el.scrollWidth - el.clientWidth;
        setProgress(max > 0 ? el.scrollLeft / max : 0);
      }
    }, 16);

    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      const dx = e.pageX - startX.current;
      scrollRef.current.scrollLeft = startScrollLeft.current - dx;
      const max = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setProgress(max > 0 ? scrollRef.current.scrollLeft / max : 0);
    };
    const onUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    document.body.style.userSelect = "none";
  };

  const onScrollbarMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isScrollbarDragging.current = true;
    const bar = scrollbarRef.current;
    if (!bar) return;
    const thumbWidth = bar.getBoundingClientRect().width * 0.3;
    const onMove = (ev: MouseEvent) => {
      if (!isScrollbarDragging.current || !scrollRef.current || !bar) return;
      const rect = bar.getBoundingClientRect();
      const maxLeft = rect.width - thumbWidth;
      const x = Math.max(0, Math.min(ev.clientX - rect.left - thumbWidth / 2, maxLeft));
      const newProgress = x / maxLeft;
      const max = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = newProgress * max;
    };
    const onUp = () => {
      isScrollbarDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        className="w-full aspect-[16/8] rounded-sm overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none" }}
      >
        <img
          src="/Product_overview_smartcrowd_8256x1400.jpg"
          alt="Product overview"
          className="h-full w-auto max-w-none"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <div
        ref={scrollbarRef}
        className="relative h-2.5 rounded-full bg-line cursor-pointer mt-4"
        onMouseDown={onScrollbarMouseDown}
      >
        <div
          className="absolute top-0 h-full rounded-full bg-accent"
          style={{ width: "30%", left: `${progress * 70}%`, transition: "left 0.05s linear" }}
        />
      </div>
    </div>
  );
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
            <div className="relative w-full bg-surface aspect-[16/8] rounded-sm overflow-hidden">
              {caseData.heroMockup ? (
                <Image src={caseData.heroMockup} alt={caseMeta.title} fill className="object-cover object-center" />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">Hero mockup — coming soon</p>
                </div>
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
              { label: "The Invite", text: caseData.context.invite, icon: Mail },
              { label: "What Followed", text: caseData.context.outcome, icon: ArrowUpRight },
              { label: "The Outcome", text: "A fragmented platform became a unified, scalable ecosystem — covering mobile, web, and partner products. The foundation I built continues to support SmartCrowd's growth today.", icon: Layers },
            ].map((col, i) => (
              <Reveal key={col.label} delay={i * 0.05}>
                <div className="pt-6">
                  <col.icon size={20} strokeWidth={1.5} className="text-accent mb-4" />
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
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <Reveal>
              <div className="flex flex-col gap-8">
                <h2 className="font-display text-display-md font-semibold uppercase text-ink">My Role</h2>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  As Lead Product Designer, I owned the full design direction of SmartCrowd — from the initial product audit that identified core UX gaps, to leading the complete redesign of the mobile app, web platform, and partner products. I set the strategic design direction, shaped information architecture, and ensured every platform felt unified and intentional.
                </p>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  Beyond execution, I built the design system from scratch — creating a scalable token-based foundation with light and dark themes that served both SmartCrowd and its partner brands. I worked closely with Product, Engineering, Compliance, and Marketing, and mentored another designer on the team throughout the project.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-10">
                {[
                  {
                    label: "What I Owned",
                    items: ["Product Strategy", "Information Architecture", "Mobile · iOS & Android", "Web Platform", "Design System", "Partner Platforms", "User Research"],
                  },
                  {
                    label: "With Whom",
                    items: ["Product Management", "Engineering", "Compliance", "Marketing", "QA", "1 Designer"],
                  },
                  {
                    label: "How I Worked",
                    items: ["End-to-end execution", "Hands-on design leadership", "Cross-functional collaboration", "Research-driven decisions", "Iterative delivery", "Design mentorship"],
                  },
                ].map((col, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">{col.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {col.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-4 py-2 font-mono text-sm tracking-wide text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04. PRODUCT TRANSFORMATION */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-4">Product Transformation</h2>
            <p className="font-display text-display-sm leading-snug text-ink max-w-3xl mb-12">
              Not a redesign. <span className="text-accent">A full platform transformation.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ProductOverviewScroll />
          </Reveal>
        </div>
      </section>

      <TransformationSticky themes={caseData.transformation} />

      {/* 06. IMPACT */}
      <section className="px-6 pt-0 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-2 md:grid-cols-4 items-stretch">
            {caseData.impact.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative section-invert flex flex-col gap-4 px-8 py-14 h-full">
                  {i > 0 && <div className="absolute left-0 top-10 bottom-10 w-px bg-white/10" />}
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">{item.label}</span>
                  <span className="font-display text-display-lg font-semibold text-ink">{item.value}</span>
                  {item.body && <p className="text-sm leading-relaxed text-muted">{item.body}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07. REFLECTION */}
      <section className="px-6 pt-0 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-display-md font-semibold uppercase text-ink mb-8">Reflection</h2>
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
                <div className="border-t border-line pt-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">{item.number}</p>
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
                  className="group flex flex-col items-center justify-center gap-4 p-16 md:p-24 border-b md:border-b-0 md:border-r border-line hover:bg-surface transition-colors duration-300 text-center"
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
                  className="group flex flex-col items-center justify-center gap-4 p-16 md:p-24 hover:bg-surface transition-colors duration-300 text-center"
                >
                  <div className="text-center">
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

      <Contact />

    </main>
  );
}
