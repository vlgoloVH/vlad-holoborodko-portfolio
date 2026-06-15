"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pt-44 lg:pl-10">
      <div className="spec-grid pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_70%)] opacity-40" />

      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between">
          <span>— Product Designer · Est. 2015</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </div>

        <Reveal delay={0.05} className="mt-6">
          <h1 className="font-display text-display-xl font-semibold uppercase leading-[0.95] text-ink">
            Vlad
            <br />
            Holoborodko
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <p className="font-display text-display-sm leading-snug text-ink">
              I design calm, considered products for teams solving{" "}
              <span className="text-accent">genuinely complex</span> problems.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col justify-between gap-6">
            <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
              Ten years across fintech, travel, HR tech and healthcare — taking
              products from a rough problem statement to a shipped, measurable
              outcome. Research, UX, UI and the business case behind every
              screen.
            </p>

            <Link
              href="#work"
              data-cursor="View"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-accent"
            >
              View selected work
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent"
              >
                <ArrowDown size={14} />
              </motion.span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
