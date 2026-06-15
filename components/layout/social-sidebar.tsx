"use client";

import { useEffect, useState } from "react";
import { Linkedin, Instagram, Dribbble } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Dribbble: Dribbble,
  Instagram: Instagram,
};

const BAND_HEIGHT = 220;

export function SocialSidebar() {
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-invert"));
    if (!sections.length) return;

    const check = () => {
      const center = window.innerHeight / 2;
      const top = center - BAND_HEIGHT / 2;
      const bottom = center + BAND_HEIGHT / 2;
      const overlap = sections.some((s) => {
        const rect = s.getBoundingClientRect();
        return rect.top < bottom && rect.bottom > top;
      });
      setOverDark(overlap);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      className={`fixed inset-y-0 right-4 z-40 hidden flex-col items-center justify-center gap-4 md:right-6 lg:flex ${
        overDark ? "section-invert" : ""
      }`}
    >
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.label];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            data-cursor="Open"
            className="glass-bg flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink backdrop-blur-md transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {Icon && <Icon size={18} strokeWidth={1.5} />}
          </a>
        );
      })}
    </div>
  );
}
