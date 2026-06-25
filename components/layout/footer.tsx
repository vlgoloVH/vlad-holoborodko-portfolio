import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-invert border-t border-line">
      <div className="px-8 md:px-14">
        <div className="mx-auto flex max-w-content flex-col gap-4 py-8 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.role}
          </p>
          <a
            href="#top"
          className="transition-colors duration-300 hover:text-accent"
          >
          <span className="hidden md:inline">Back to top ↑</span>
          <span className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:border-accent hover:text-accent transition-colors duration-300">
          ↑
          </span>
        </a>
        </div>
      </div>
    </footer>
  );
}
