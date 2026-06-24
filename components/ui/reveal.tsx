"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  delay = 0,
  className,
  animate = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  animate?: boolean;
}) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -40 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
    );
  );
}
