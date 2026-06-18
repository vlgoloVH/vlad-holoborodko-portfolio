"use client";

import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/site";
import { useRef, useState } from "react";

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="w-[420px] shrink-0 rounded-2xl border border-line bg-bg p-8 flex flex-col gap-6" style={{ height: "300px" }}>
      <span className="font-display text-4xl leading-none text-accent">"</span>
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

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

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" } as React.CSSProperties}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        <div
          className="flex gap-4 pb-4"
          style={{ paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))" }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} />
          ))}
          <div className="w-6 shrink-0 md:w-10" />
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 md:px-10 mt-6">
        <div className="relative h-1 rounded-full bg-line">
          <div
            className="absolute h-full rounded-full bg-accent transition-all duration-100"
            style={{ width: "30%", left: `${progress * 70}%` }}
          />
        </div>
      </div>
    </section>
  );
}
