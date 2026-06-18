"use client";

import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/site";

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-line bg-bg p-8 flex flex-col gap-6 md:w-[420px]" style={{ height: "320px" }}>
      <span className="font-display text-5xl leading-none text-accent">"</span>
      <p className="font-display text-base leading-snug text-ink md:text-lg flex-1">
        {quote}
      </p>
      <div>
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              What people say
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              [ 03 — Notes ]
            </span>
          </div>
        </Reveal>

        <div
          className="overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--color-accent) var(--color-line)",
          }}
        >
          <div className="flex gap-4 w-max pb-4">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
