"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface TransformationTheme {
  number: string;
  title: string;
  description: string;
  visual?: string;
  points: string[];
}

interface Props {
  themes: TransformationTheme[];
}

export function TransformationSticky({ themes }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(i);
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div className="px-6 md:px-10">
      <div className="mx-auto max-w-content">
        <div className="relative md:grid md:grid-cols-2 md:gap-8">
          {/* Left — scrolling text */}
          <div>
            {themes.map((theme, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="md:min-h-screen flex flex-col justify-start pt-24 pb-4 md:pt-28 md:pb-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">{theme.number}</p>
                <h3 className="font-display text-display-sm font-semibold uppercase text-ink mb-6">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-muted md:text-base mb-10">{theme.description}</p>
                <ul className="space-y-0">
                  {theme.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 py-3">
                      <span className="text-accent mt-1 shrink-0 text-xs">→</span>
                      <p className="text-sm leading-snug text-ink">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:hidden w-full aspect-[4/3] bg-surface rounded-sm flex items-center justify-center overflow-hidden">
                  {theme.visual ? (
                    <Image src={theme.visual} alt={theme.title} width={700} height={525} className="w-full h-full object-cover" />
                  ) : (
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted text-center px-4">{theme.title}<br />visual coming soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — sticky image */}
          <div className="hidden md:block">
            <div className="sticky top-24 h-[72vh]">
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-surface">
                {themes.map((theme, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                  >
                    {theme.visual ? (
                      <Image src={theme.visual} alt={theme.title} fill className="object-cover" />
                    ) : (
                      <p className="font-mono text-xs uppercase tracking-widest text-muted text-center px-8">
                        {theme.title}<br />visual coming soon
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
