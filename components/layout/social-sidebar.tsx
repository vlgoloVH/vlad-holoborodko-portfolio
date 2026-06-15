import { Linkedin, Instagram, Dribbble } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Dribbble: Dribbble,
  Instagram: Instagram,
};

export function SocialSidebar() {
  return (
    <div className="fixed inset-y-0 right-4 z-40 hidden flex-col items-center justify-center gap-4 md:right-6 lg:flex">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.label];
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            data-cursor="Open"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/30 text-ink backdrop-blur-md transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {Icon && <Icon size={18} strokeWidth={1.5} />}
          </a>
        );
      })}
    </div>
  );
}
