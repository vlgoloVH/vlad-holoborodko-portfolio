"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useTheme } from "next-themes";

const LOGOS = [
  "BitterBrain",
  "DoPropdo",
  "Edgeless",
  "Front Nation",
  "Howdi",
  "Hyper6",
  "Legal Shelf",
  "Loquid Bank",
  "Marffa",
  "Notary HUB",
  "Smart Crowd",
  "Space Needle",
  "SPD",
  "Vue School",
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

        {/* Infinite marquee */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-[scroll_50s_linear_infinite] gap-16 motion-reduce:animate-none">
            {[...LOGOS, ...LOGOS].map((logo, i) => {
              const suffix = theme === "dark" ? "Dark" : "Light";
              const imagePath = `/logos/${logo} - ${suffix}.svg`;

              return (
                <div
                  key={`${logo}-${suffix}-${i}`}
                  className="relative h-10 w-auto flex-shrink-0 transition-opacity duration-300 hover:opacity-70"
                >
                  <Image
                    src={imagePath}
                    alt={logo}
                    height={40}
                    width={150}
                    style={{
                      height: "auto",
                      width: "auto",
                      maxWidth: "150px",
                    }}
                    priority={i < 15}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
      `}</style>
    </section>
  );
}