import { Hero } from "@/components/sections/hero";
import { CasesGrid } from "@/components/sections/cases-grid";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <div className="relative z-0 md:sticky md:top-0 md:h-screen">
      <Hero />
    </div>

      <div className="relative z-10 bg-[var(--color-bg)]">
        <AboutTeaser />
        <CasesGrid />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
