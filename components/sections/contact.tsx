import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section-invert px-6 py-20 md:px-10 md:py-28 lg:scroll-mt-24">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-0 md:grid md:grid-cols-[1fr_auto] md:items-start">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
            — Get in touchhhh
          </p>
          <h2 className="font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
            Let&apos;s create
            <br />
            something
            <br />
            meaningful{" "}
            <ArrowUpRight className="inline-block h-[0.7em] w-[0.7em] text-accent" />
          </h2>
        </Reveal>
        <a
          href="/resume.pdf"
          download
          data-cursor="Download"
          className="group relative hidden md:flex h-44 w-44 items-center justify-center md:h-56 md:w-56 row-span-2"
        >
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-muted">
            <defs>
              <path id="contact-circle" d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" fill="none" />
            </defs>
            <text fill="currentColor" className="font-mono text-[14px] uppercase tracking-[0.25em]">
              <textPath href="#contact-circle">Download resume • Download resume • Download resume •</textPath>
            </text>
          </svg>
          <span className="glass-bg flex h-16 w-16 items-center justify-center rounded-full border border-line text-ink backdrop-blur-md transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
            <Download size={20} strokeWidth={1.5} />
          </span>
        </a>
        </div>
        <Reveal delay={0.1} className="mt-6">
          <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Open to senior product design roles and select freelance
            engagements — research, UX, UI or design-systems work. If you&apos;re
            solving a hard problem and need someone to make it feel obvious,
            I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
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
