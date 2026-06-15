import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Case } from "@/lib/cases";

export function CaseNav({ prev, next }: { prev: Case; next: Case }) {
  return (
    <div className="grid border-t border-line sm:grid-cols-2">
      <Link
        href={`/cases/${prev.slug}`}
        data-cursor="Prev"
        className="group flex flex-col gap-2 border-b border-line px-6 py-10 transition-colors duration-300 hover:bg-surface sm:border-b-0 sm:border-r md:px-10"
      >
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Previous case
        </span>
        <span className="font-display text-2xl font-semibold uppercase text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {prev.title}
        </span>
      </Link>

      <Link
        href={`/cases/${next.slug}`}
        data-cursor="Next"
        className="group flex flex-col items-end gap-2 px-6 py-10 text-right transition-colors duration-300 hover:bg-surface md:px-10"
      >
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          Next case
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="font-display text-2xl font-semibold uppercase text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {next.title}
        </span>
      </Link>
    </div>
  );
}
