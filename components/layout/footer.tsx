import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {SITE.name} — {SITE.role}
        </p>

        <nav className="flex flex-wrap gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="transition-colors duration-300 hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
