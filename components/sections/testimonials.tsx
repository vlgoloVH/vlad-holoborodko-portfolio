import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              What people say
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              [ 03 — Notes ]
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="flex flex-col gap-6">
              <p className="font-display text-lg leading-snug text-ink md:text-xl">
                “{t.quote}”
              </p>
              <div className="mt-auto border-t border-line pt-4">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {t.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
