"use client";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useTheme } from "next-themes";

const LOGOS = [
  "BitterBrain",
  "DoPropdo",
  "Edgeless",
  "FrontNation",
  "Howdi",
  "Hyper6",
  "LegalShelf",
  "LoquidBank",
  "Marffa",
  "NotaryHUB",
  "SmartCrowd",
  "SpaceNeedle",
  "SPD",
  "VueSchool",
  "Wander",
];

export function LogoStrip() {
  const { theme } = useTheme();
  return (
    <div className="relative -mx-8 md:-mx-14">
      <section className="border-y border-line py-3 md:py-8">
        <div className="px-8 md:px-14">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-muted text-center md:text-left">
              Companies I&apos;ve shipped products with
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative mt-3 overflow-hidden md:mt-8">
          <div className="flex w-max items-center animate-[scroll_50s_linear_infinite] gap-4 motion-reduce:animate-none md:gap-10">
            {[...LOGOS, ...LOGOS].map((logo, i) => {
              const suffix = theme === "dark" ? "Dark" : "Light";
              const imagePath = `/logos/${logo}-${suffix}.svg`;
              return (
                <div
                  key={`${logo}-${suffix}-${i}`}
                  className="relative h-8 w-[90px] flex-shrink-0 transition-opacity duration-300 hover:opacity-70 md:h-14 md:w-[140px]"
                >
                  <Image
                    src={imagePath}
                    alt={logo}
                    fill
                    className="object-contain"
                    priority={i < 15}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
      `}</style>
    </div>
  );
}
