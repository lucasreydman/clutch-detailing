"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { BookNowButton } from "./BookNowButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yArt = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "40%"]);
  const opacityArt = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-eco-mesh bg-grain overflow-hidden pt-28 md:pt-40 pb-24"
    >
      {/* Decorative leaf-arc shape, parallax */}
      <motion.div
        style={{ y: yArt, opacity: opacityArt }}
        aria-hidden
        className="absolute -right-32 top-20 md:top-12 w-[60vw] md:w-[40vw] aspect-square pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-moss/30 via-sand/40 to-bone-deep/60 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: yArt }}
        aria-hidden
        className="absolute -left-40 bottom-0 w-[50vw] aspect-square pointer-events-none"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-sand/40 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-forest/40" />
          <span className="label-eyebrow">Mobile detailing · Toronto · Est. 2024</span>
        </motion.div>

        {/* Headline */}
        <h1 className="display-xl text-[clamp(2.75rem,8.5vw,7.5rem)] max-w-[16ch] text-forest">
          <Word delay={0.25}>Showroom</Word>{" "}
          <Word delay={0.32}>clean.</Word>
          <br />
          <span className="text-moss">
            <Word delay={0.42} italic>Without</Word>{" "}
            <Word delay={0.5} italic>the water</Word>{" "}
            <Word delay={0.58} italic>bill.</Word>
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-forest/75 leading-relaxed"
        >
          Premium mobile car detailing — done in your driveway, with a fraction of the water of a traditional wash. Serving Lawrence Park, Hoggs Hollow, and Yonge & Lawrence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <BookNowButton size="lg" />
          <Link
            href="/services"
            className="inline-flex items-center h-14 px-7 rounded-full border border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-bone transition-all duration-300 text-base font-medium"
          >
            See pricing
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Stars />
          <p className="text-sm text-forest/70 max-w-md">
            Loved by Toronto's north-end drivers — Porsches, family SUVs, weekend cruisers alike.
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="hidden md:flex absolute bottom-10 right-8 items-center gap-3 text-xs label-eyebrow text-forest/50"
        >
          <span className="block w-px h-12 bg-forest/30 origin-top animate-[grow_2s_ease-out]" />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

function Word({ children, delay = 0, italic = false }: { children: React.ReactNode; delay?: number; italic?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      className={`inline-block ${italic ? "italic-display" : ""}`}
    >
      {children}
    </motion.span>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1.5" aria-label="Five star rated">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-moss"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <path d="M12 2l2.95 6.6 7.05.65-5.35 4.85 1.6 7.05L12 17.7l-6.25 3.45 1.6-7.05L2 9.25l7.05-.65L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}
