"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Reveal, RevealText } from "@/components/ui/reveal";
import { LogoStrip } from "@/components/sections/logo-strip";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden border-none bg-[var(--color-bg)] px-8 md:px-14">
      <div className="flex flex-1 items-center pt-16">
        <div className="mx-auto w-full max-w-content">
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
          <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <h1 className="font-display text-display-xl font-semibold uppercase leading-[0.95] text-ink">
                <RevealText delay={0.1} animate={ready}>Designing</RevealText>
                <RevealText delay={0.2} animate={ready}><span className="text-accent">products</span></RevealText>
                <RevealText delay={0.3} animate={ready}>that drive</RevealText>
                <RevealText delay={0.4} animate={ready}><span className="text-accent">growth</span><span className="text-accent">.</span></RevealText>
              </h1>
              <Reveal delay={0.5} className="mt-4">
                <p className="font-display text-display-sm leading-snug text-ink max-w-3xl">
                  I design calm, considered products for teams solving{" "}
                  <span className="text-accent">genuinely complex</span> problems.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.6}>
              <a
                href="/resume.pdf"
                download
                data-cursor="Download"
                className="group relative mx-auto flex h-44 w-44 items-center justify-center md:h-56 md:w-56"
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
                  <text fill="currentColor" className="font-mono text-[14px] uppercase tracking-[0.25em]">
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
      </div>
      <div className="w-full border-none">
        <LogoStrip />
      </div>
    </section>
  );
}
