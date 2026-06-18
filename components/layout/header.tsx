"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const HEADER_HEIGHT = 88;

export function Header() {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-invert"));
    if (!sections.length) return;

    const check = () => {
      const overlap = sections.some((s) => {
        const rect = s.getBoundingClientRect();
        return rect.top < HEADER_HEIGHT && rect.bottom > 0;
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
    <header className={`fixed inset-x-0 top-0 z-50 ${overDark ? "section-invert" : ""}`}>
      <div className="glass-bg backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-wide text-ink transition-colors hover:text-accent"
          >
            Vlad Holoborodko<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-b border-line bg-bg md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
