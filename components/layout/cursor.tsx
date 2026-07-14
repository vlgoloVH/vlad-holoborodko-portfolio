"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [inverted, setInverted] = useState(false);
  const { resolvedTheme } = useTheme();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
    if (!fine || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const onDark = !!(e.target as HTMLElement)?.closest(".section-invert");
      setInverted(onDark);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const isDark = resolvedTheme === "dark";
  const needsLightCursor = isDark || inverted;
  const borderColor = needsLightCursor ? "#f4f1ea" : "var(--color-ink)";

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-[200] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: 14,
          height: 14,
          borderColor,
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="flex items-center justify-center rounded-full border"
      />
    </motion.div>
  );
}
