import { SOCIAL_LINKS } from "@/lib/site";

export function SocialSidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center justify-between py-10 lg:flex">
      <div className="h-16 w-px bg-line" />

      <nav className="flex flex-col items-center gap-7">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent [writing-mode:vertical-rl] rotate-180"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-3">
        <div className="h-16 w-px bg-line" />
        <span className="font-mono text-xs text-muted [writing-mode:vertical-rl] rotate-180">
          © 2026
        </span>
      </div>
    </div>
  );
}
