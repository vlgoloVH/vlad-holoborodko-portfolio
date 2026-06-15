import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { CasesGrid } from "@/components/sections/cases-grid";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <CasesGrid />
      <AboutTeaser />
      <Testimonials />
      <Contact />
    </>
  );
}
