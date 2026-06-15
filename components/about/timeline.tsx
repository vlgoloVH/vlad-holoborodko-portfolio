import { Reveal } from "@/components/ui/reveal";
import { EXPERIENCE } from "@/lib/experience";

export function Timeline() {
  return (
    <div className="border-t border-line">
      {EXPERIENCE.map((item, i) => (
        <Reveal key={item.company} delay={i * 0.04}>
          <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[160px_1fr] md:gap-12">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.period}
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold uppercase text-ink md:text-2xl">
                  {item.company}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {item.role}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
