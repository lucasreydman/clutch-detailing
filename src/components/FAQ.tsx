"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "@/lib/faq";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label-eyebrow mb-4">FAQ</p>
              <h2 className="display-xl text-4xl md:text-5xl lg:text-6xl text-forest text-balance">
                The usual <span className="italic-display text-moss">questions.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <ul className="border-t hairline">
              {faqs.map((f, i) => (
                <li key={f.q} className="border-b hairline">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left py-6 md:py-7 flex items-start justify-between gap-6 group touch-manipulation select-none"
                    aria-expanded={open === i}
                  >
                    <span className="font-display text-xl md:text-2xl text-forest tracking-tight">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-1 shrink-0 w-8 h-8 grid place-items-center rounded-full border hairline group-hover:bg-forest group-hover:text-bone group-hover:border-forest transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-forest/75 leading-relaxed max-w-2xl text-[15px] text-pretty">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
