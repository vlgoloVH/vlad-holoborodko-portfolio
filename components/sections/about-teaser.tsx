import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { CoverPlaceholder } from "@/components/ui/cover-placeholder";
import { METRICS } from "@/lib/site";
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
              [ 02 — Profile ]
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <Reveal delay={0.05}>
            <CoverPlaceholder label="Portrait" ratio="aspect-[4/5]" />
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal delay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                <p className="font-display text-display-sm leading-snug text-ink">
                  Product designer with ten years of practice, working where
                  user needs, business goals and engineering reality meet.
                </p>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  I&apos;m happiest reducing complexity — finding the one
                  interface, flow or system that makes a hard problem feel
                  obvious. I&apos;ve led design at startups and partnered with
                  teams from seed stage to enterprise, always staying close to
                  research, data and delivery.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
                {METRICS.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-display text-3xl font-semibold text-ink md:text-4xl">
                      <Counter value={metric.value} suffix={metric.suffix} />
                    </dt>
                    <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                      {metric.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                    What I do
                  </p>
                  <ul className="space-y-2 text-sm text-ink">
                    {SKILLS.practice.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                    Tools
                  </p>
                  <ul className="space-y-2 text-sm text-ink">
                    {SKILLS.tools.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                href="/about"
                data-cursor="Open"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Learn more about me
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
