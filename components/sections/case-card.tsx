"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Case } from "@/lib/cases";
import { CoverPlaceholder } from "@/components/ui/cover-placeholder";

export function CaseCard({ item, index }: { item: Case; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/cases/${item.slug}`}
      data-cursor="View"
      className={`group block ${index % 2 === 1 ? "md:mt-16" : ""}`}
    >
      <div className="overflow-hidden rounded-sm">
        <motion.div whileHover="hover" initial="rest" className="relative">
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <CoverPlaceholder label={item.title} index={number} />
          </motion.div>

          <motion.div
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-ink"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold uppercase text-ink transition-colors duration-300 group-hover:text-accent md:text-2xl">
          {item.title}
        </h3>
        <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
          {item.year}
        </span>
      </div>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        {item.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {[item.industry, item.businessType, item.platform].map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
