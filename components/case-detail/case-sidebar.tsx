"use client";

import { useEffect, useState } from "react";
import type { CaseSection } from "@/lib/cases";

export function CaseSidebar({ sections }: { sections: CaseSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Case sections" className="sticky top-28 hidden lg:block">
      <ul className="space-y-3 border-l border-line pl-5">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`group flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                active === section.id ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              <span className="w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
