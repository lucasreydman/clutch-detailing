"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function EcoStats() {
  return (
    <section className="relative bg-forest text-bone overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-50" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[60vw] aspect-square rounded-full bg-moss/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[50vw] aspect-square rounded-full bg-sand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-eyebrow text-bone/60 mb-4">Our approach</p>
              <h2 className="display-xl text-5xl md:text-7xl text-bone text-balance max-w-[14ch]">
                Why we use <span className="italic-display text-sand">less water.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pl-12">
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-bone/80 leading-relaxed max-w-xl text-pretty">
                A traditional driveway wash sends hundreds of litres of detergent runoff into the storm drain and then into the lake. Our method uses pH-balanced, biodegradable products and a small fraction of the water. The result is the same finish with a much cleaner footprint.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10 border hairline border-bone/15 rounded-3xl overflow-hidden">
          <Stat value={500} suffix=" L" label="Water saved per wash" sub="Vs. traditional hose method" />
          <Stat value={100} suffix="%" label="Biodegradable products" sub="Lake-safe, plant-safe" />
          <Stat value={0} suffix=" deposit" label="To book a slot" sub="E-transfer on completion" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  sub,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <div ref={ref} className="bg-forest p-8 md:p-12">
      <div className="flex items-baseline gap-1 font-display text-bone">
        <motion.span className="text-6xl md:text-7xl tracking-tight">
          {rounded}
        </motion.span>
        <span className="text-2xl md:text-3xl text-sand">{suffix}</span>
      </div>
      <p className="mt-4 text-bone font-medium">{label}</p>
      <p className="text-sm text-bone/55 mt-1">{sub}</p>
    </div>
  );
}
