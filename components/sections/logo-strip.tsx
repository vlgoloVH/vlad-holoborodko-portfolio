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
    <section className="px-6 py-12 md:px-10">
      <div className="mx-auto max-w-content space-y-8">
        {/* Label */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Companies I&apos;ve shipped products with
          </p>
        </Reveal>
      </div>

      {/* Infinite marquee - full bleed */}
      <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
      `}</style>
    </section>
  );
}