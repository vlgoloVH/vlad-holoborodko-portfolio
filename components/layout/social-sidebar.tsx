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
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
          >
            <span className="absolute inset-0 rounded-full border border-white/20 bg-white/10 backdrop-blur-md" />
            {Icon && (
              <Icon size={18} strokeWidth={1.5} className="relative text-white mix-blend-difference" />
            )}
          </a>
        );
      })}
    </div>
  );
}
