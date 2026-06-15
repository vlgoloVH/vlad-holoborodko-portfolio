"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="border-b border-white/10 bg-white/10 px-6 py-6 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-content items-center justify-between">
          <Link
            href="/"
            className="font-display text-base font-semibold uppercase tracking-wide text-white mix-blend-difference transition-opacity duration-300 hover:opacity-70"
          >
            {SITE.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-xs uppercase tracking-widest text-white/70 mix-blend-difference transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white mix-blend-difference transition-opacity duration-300 hover:opacity-70" />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white mix-blend-difference transition-opacity duration-300 hover:opacity-70" />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white mix-blend-difference"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.div>

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
