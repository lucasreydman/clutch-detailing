"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

/**
 * App-router template: re-renders on every navigation, so each route
 * gets a fresh enter animation. Subtle on desktop, more iOS-like on mobile.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
