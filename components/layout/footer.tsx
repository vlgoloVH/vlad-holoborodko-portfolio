import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-invert border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-8 py-8 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between md:px-14">
        <p>
          © {new Date().getFullYear()} {SITE.name} — {SITE.role}
        </p>
        
          href="#top"
          className="transition-colors duration-300 hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
