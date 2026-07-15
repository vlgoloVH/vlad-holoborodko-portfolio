import { Hero } from "@/components/sections/hero";
import { CasesGrid } from "@/components/sections/cases-grid";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-0 h-screen">
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
