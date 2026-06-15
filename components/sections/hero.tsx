import { Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pt-44">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between">
          <span>— Product Designer · Est. 2015</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </span>
        </div>

        <div className="mt-10 grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h1 className="font-display text-display-md font-semibold uppercase leading-[1.05] text-ink">
                Designing experiences that drive action
                <span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <p className="font-display text-display-sm leading-snug text-ink">
                I design calm, considered products for teams solving{" "}
                <span className="text-accent">genuinely complex</span> problems.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a
              href="/resume.pdf"
              download
              data-cursor="Download"
              className="group relative mx-auto flex h-40 w-40 items-center justify-center md:h-48 md:w-48"
            >
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-muted"
              >
                <defs>
                  <path
                    id="resume-circle"
                    d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                    fill="none"
                  />
                </defs>
                <text fill="currentColor" className="font-mono text-[10px] uppercase tracking-[0.3em]">
                  <textPath href="#resume-circle">
                    Download resume • Download resume • Download resume •
                  </textPath>
                </text>
              </svg>

              <span className="glass-bg flex h-16 w-16 items-center justify-center rounded-full border border-line text-ink backdrop-blur-md transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                <Download size={20} strokeWidth={1.5} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
