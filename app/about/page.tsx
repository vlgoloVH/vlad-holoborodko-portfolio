import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CoverPlaceholder } from "@/components/ui/cover-placeholder";
import { Timeline } from "@/components/about/timeline";
import { SKILLS } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer since 2015 — background, design approach, skills and career timeline.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              — About
            </p>
            <h1 className="mt-4 font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
              Designing with both
              <br />
              hands on the problem<span className="text-accent">.</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
            <Reveal delay={0.05}>
              <CoverPlaceholder label="Portrait" ratio="aspect-[4/5]" />
            </Reveal>

            <div className="flex flex-col gap-8">
              <Reveal delay={0.1}>
                <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
                  <p>
                    I&apos;m Vlad — a product designer based in Lisbon, working
                    with teams across fintech, travel, HR tech, healthcare and
                    enterprise software since 2015. I care most about the
                    space between &ldquo;what users need&rdquo;, &ldquo;what the
                    business needs&rdquo; and &ldquo;what engineering can ship
                    this quarter&rdquo; — that&apos;s where the interesting
                    design problems live.
                  </p>
                  <p>
                    My approach starts with the problem, not the screen.
                    Before any UI work, I want to understand the metric we&apos;re
                    trying to move, the constraints the team is working under,
                    and what users are actually doing today — usually through
                    interviews, session recordings or a quick diary study.
                    From there, design becomes a shared language for the team
                    to align around: wireframes and prototypes that make
                    trade-offs visible, and a system that keeps the product
                    coherent as it grows.
                  </p>
                  <p>
                    I&apos;ve led design through Series A to enterprise scale,
                    built design systems from scratch, and mentored junior
                    designers into senior roles. I&apos;m equally comfortable
                    running a research session, presenting a roadmap to
                    leadership, or sitting with an engineer to get a detail
                    right in code.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <a
                  href="/resume.pdf"
                  data-cursor="Download"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                >
                  Download résumé
                  <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Career
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                [ 2015 — Now ]
              </span>
            </div>
          </Reveal>
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="section-invert px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-display-md font-semibold uppercase text-ink">
                Skills &amp; tools
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                [ 03 — Toolkit ]
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
            <Reveal delay={0.05}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Practice
              </p>
              <ul className="space-y-2 text-sm text-ink md:text-base">
                {SKILLS.practice.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Collaboration
              </p>
              <ul className="space-y-2 text-sm text-ink md:text-base">
                {SKILLS.collaboration.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Tools
              </p>
              <ul className="space-y-2 text-sm text-ink md:text-base">
                {SKILLS.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-12 border-t border-line pt-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Looking for someone to take a fuzzy problem and turn it into a
              shipped product?{" "}
              <Link href="/#contact" className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                Let&apos;s talk
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
