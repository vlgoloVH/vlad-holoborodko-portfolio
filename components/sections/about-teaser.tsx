import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { SKILLS } from "@/lib/experience";

export function AboutTeaser() {
  return (
    <section className="section-invert px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-display-md font-semibold uppercase text-ink">
              About
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              [ 01 — INTRO ]
            </span>
          </div>
        </Reveal>

        {/* 3 equal columns */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 md:items-start">

          {/* Left — Bio */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-sm uppercase tracking-widest text-muted">
                  <span
                    className="mr-2 inline-block animate-[wave_2s_ease-in-out_infinite]"
                    style={{ transformOrigin: "70% 70%" }}
                  >
                    👋
                  </span>
                  Hey there, I&apos;m Vlad!
                </p>
                <p className="font-display text-2xl leading-relaxed text-ink">
                  I&apos;m a Product Designer with 11+ years of experience building
                  digital products across diverse industries and markets. I help teams
                  transform complex ideas into intuitive experiences that create
                  meaningful value for users and measurable results for businesses.
                </p>
              </div>

              <Link
                href="/about"
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                Learn more about me
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Center — Photo */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/profile_photo.jpg"
                alt="Vlad Holoborodko"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* Right — Skills */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                  What I do
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.practice.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
      `}</style>
    </section>
  );
}
