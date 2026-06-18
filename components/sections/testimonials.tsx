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

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf: number;
    let isDragging = false;

    const tick = () => {
      if (!isDragging) {
        x -= 0.4;
        const half = track.scrollWidth / 2;
        if (x <= -half) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => { isDragging = true; };
    const onLeave = () => { isDragging = false; };
    track.parentElement?.addEventListener("mouseenter", onEnter);
    track.parentElement?.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      track.parentElement?.removeEventListener("mouseenter", onEnter);
      track.parentElement?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

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
      </div>

      <div className="overflow-x-auto scrollbar-hide px-6 md:px-10 cursor-grab active:cursor-grabbing">
        <div ref={trackRef} className="flex gap-4 w-max pb-2">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} quote={t.quote} name={t.name} role={t.role} />
          ))}
        </div>
      </div>
    </section>
  );
}        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
