import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CoverPlaceholder } from "@/components/ui/cover-placeholder";
import { SKILLS } from "@/lib/experience";

export function AboutTeaser() {
  return (
    <section className="section-invert px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              About
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              [ 01 — Intro ]
            </span>
          </div>
        </Reveal>

        {/* 3-column grid: skills | photo | bio */}
        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-12">

          {/* Left — Skills */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                  What I do
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.practice.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Center — Photo */}
          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
              <CoverPlaceholder label="Portrait" ratio="aspect-[4/5]" />
            </div>
          </Reveal>

          {/* Right — Bio */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-3 text-2xl">
                  <span
                    className="inline-block animate-[wave_2s_ease-in-out_infinite]"
                    style={{ transformOrigin: "70% 70%" }}
                  >
                    👋
                  </span>
                </p>
                <p className="font-display text-display-sm font-semibold text-ink">
                  Hey there, I&apos;m Vlad!
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted md:text-base">
                I&apos;m a Product Designer with 11+ years of experience building
                digital products across diverse industries and markets. I help teams
                transform complex ideas into intuitive experiences that create
                meaningful value for users and measurable results for businesses.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Learn more about me
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
      `}</style>
    </section>
  );
}
