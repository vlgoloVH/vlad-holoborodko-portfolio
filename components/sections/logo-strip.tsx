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
    <section className="-mx-8 border-y border-border py-8 md:-mx-14">
      <div className="mx-auto max-w-content px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Companies I&apos;ve shipped products with
          </p>
        </Reveal>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex w-max items-center animate-[scroll_50s_linear_infinite] gap-10 motion-reduce:animate-none">
          {[...LOGOS, ...LOGOS].map((logo, i) => {
            const suffix = theme === "dark" ? "Dark" : "Light";
            const imagePath = `/logos/${logo}-${suffix}.svg`;

            return (
              <div
                key={`${logo}-${suffix}-${i}`}
                className="relative h-14 w-[140px] flex-shrink-0 transition-opacity duration-300 hover:opacity-70"
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

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
      `}</style>
    </section>
  );
}
