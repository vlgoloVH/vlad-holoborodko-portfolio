import { COMPANY_LOGOS } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

function LogoMark({ name }: { name: string }) {
  return (
    <span className="font-display text-lg uppercase tracking-tight text-muted/70 transition-colors duration-300 hover:text-accent md:text-xl">
      {name}
    </span>
  );
}

export function LogoStrip() {
  return (
    <section className="border-y border-line px-6 py-8 md:px-10">
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
          Companies I&apos;ve shipped products with
        </p>
      </Reveal>

      {/* Desktop / tablet: static row */}
      <div className="hidden flex-wrap items-center gap-x-12 gap-y-4 md:flex">
        {COMPANY_LOGOS.map((name) => (
          <LogoMark key={name} name={name} />
        ))}
      </div>

      {/* Mobile: infinite marquee */}
      <div className="overflow-hidden md:hidden">
        <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((name, i) => (
            <LogoMark key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
