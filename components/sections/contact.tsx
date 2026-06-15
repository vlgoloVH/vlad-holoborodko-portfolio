import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-20 md:px-10 md:py-28 lg:scroll-mt-24">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
            — Get in touch
          </p>
          <h2 className="font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
            Let&apos;s make
            <br />
            something clear,
            <br />
            together{" "}
            <ArrowUpRight className="inline-block h-[0.7em] w-[0.7em] text-accent" />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Open to senior product design roles and select freelance
            engagements — research, UX, UI or design-systems work. If you&apos;re
            solving a hard problem and need someone to make it feel obvious,
            I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href={`mailto:${SITE.email}`}
            data-cursor="Email"
            className="font-display text-2xl uppercase text-ink transition-colors duration-300 hover:text-accent md:text-3xl"
          >
            {SITE.email}
          </a>

          <nav className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
