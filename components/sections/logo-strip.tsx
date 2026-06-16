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
    <div className="relative left-1/2 w-screen -translate-x-1/2 border-y border-border">
    <div className="py-8" style={{ paddingLeft: "200px" }}>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Companies I&apos;ve shipped products with
          </p>
        </Reveal>
      </div>

      {/* Infinite marquee */}
      <div className="overflow-hidden pb-8">
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
    </div>
  );
}
