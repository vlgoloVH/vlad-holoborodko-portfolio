import { CASES } from "@/lib/cases";
import { Reveal } from "@/components/ui/reveal";
import { CaseCard } from "@/components/sections/case-card";

export function CasesGrid() {
  return (
    <section id="work" className="px-6 py-20 md:px-10 md:py-28 lg:scroll-mt-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              Featured Projects
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              [ 02 — Case Studies ]
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
          {CASES.map((item, index) => (
             <Reveal key={item.slug} delay={index * 0.05}>
              <CaseCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
