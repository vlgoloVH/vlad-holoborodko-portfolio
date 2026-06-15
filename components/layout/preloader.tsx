"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("vh-loaded")) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("vh-loaded", "true");
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="font-display text-2xl uppercase tracking-widest text-ink"
          >
            Vlad Holoborodko
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
