"use client";

import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/site";
import { useRef, useState, useCallback } from "react";

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
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const isScrollbarDragging = useRef(false);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    document.body.style.userSelect = "none";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - dx;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  }, []);

  const onScrollbarMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isScrollbarDragging.current = true;
    const bar = scrollbarRef.current;
    if (!bar) return;
    const thumbWidth = bar.getBoundingClientRect().width * 0.3;

    const onMove = (ev: MouseEvent) => {
      if (!isScrollbarDragging.current || !scrollRef.current || !bar) return;
      const rect = bar.getBoundingClientRect();
      const maxLeft = rect.width - thumbWidth;
      const x = Math.max(0, Math.min(ev.clientX - rect.left - thumbWidth / 2, maxLeft));
      const newProgress = x / maxLeft;
      const max = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = newProgress * max;
    };

    const onUp = () => {
      isScrollbarDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, []);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              What people say
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
           [ 03 — Recommendations ]
            </span>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
          } as React.CSSProperties}
        >
          <div
            className="flex gap-4 pb-4"
            style={{
              paddingLeft: "max(1.5rem, calc(50vw - 700px))",
              paddingRight: 0,
            }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} quote={t.quote} name={t.name} role={t.role} />
            ))}
           <div style={{ width: "max(3rem, calc(50vw - 700px + 1.5rem))", flexShrink: 0 }} />
          </div>
        </div>

        <div
          ref={scrollbarRef}
          className="relative h-2.5 rounded-full bg-line cursor-pointer mt-6"
          onMouseDown={onScrollbarMouseDown}
        >
          <div
            className="absolute top-0 h-full rounded-full bg-accent"
            style={{ width: "30%", left: `${progress * 70}%`, transition: "left 0.05s linear" }}
          />
        </div>
      </div>
    </section>
  );
}
