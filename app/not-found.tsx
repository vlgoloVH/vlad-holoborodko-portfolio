import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="spec-grid flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center md:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        — Error 404
      </p>
      <h1 className="mt-4 font-display text-display-xl font-semibold uppercase leading-[0.95] text-ink">
        Page not
        <br />
        found<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
        The page you&apos;re looking for has been moved, renamed, or never
        existed — much like an early-stage roadmap.
      </p>
      <Link
        href="/"
        data-cursor="Home"
        className="group mt-10 inline-flex items-center gap-3 rounded-full border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
      >
        <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
        Back to home
      </Link>
    </section>
  );
}
