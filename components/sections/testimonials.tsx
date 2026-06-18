"use client";

import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/site";
import { useEffect, useRef } from "react";

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-line bg-bg p-6 flex flex-col gap-4 md:w-96">
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

function MarqueeRow({ items, reverse = false }: { items: typeof TESTIMONIALS; reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = reverse ? -track.scrollWidth / 2 : 0;
    const speed = reverse ? 0.4 : 0.4;
    let raf: number;
    const tick = () => {
      x += reverse ? speed : -speed;
      const half = track.scrollWidth / 2;
      if (!reverse && x <= -half) x = 0;
      if (reverse && x >= 0) x = -half;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reverse]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex gap-4 w-max">
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} quote={t.quote} name={t.name} role={t.role} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = TESTIMONIALS;
  const row2 = [...TESTIMONIALS].reverse();

  return (
    <section className="px-0 py-20 md:py-28 overflow-hidden">
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
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
