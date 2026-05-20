"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/lib/services";
import { Reveal } from "./Reveal";

const featured = ["standard-wash", "full-service", "all-in", "ceramic"];

export function ServicesGrid() {
  const items = services.filter((s) => featured.includes(s.id));

  return (
    <section className="relative py-24 md:py-36 bg-bone bg-grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label-eyebrow mb-4">Our services</p>
              <h2 className="display-xl text-5xl md:text-7xl text-forest max-w-[14ch]">
                Pick the package<br />
                <span className="italic-display text-moss">that fits.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-lg text-forest/75 max-w-md leading-relaxed">
                From a quick exterior wash to a full ceramic coating. The same level of care on every job.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-6 text-forest font-medium link-underline"
              >
                View full pricing
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-forest/10 border hairline rounded-3xl overflow-hidden">
          {items.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group bg-bone p-8 md:p-12 hover:bg-bone-warm transition-colors duration-500"
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="label-eyebrow">{s.category}</span>
                <span className="font-display text-3xl md:text-4xl text-forest tabular-nums">
                  ${s.priceCar}
                  {s.priceSuv && (
                    <span className="text-base text-forest/45 ml-1">
                      / ${s.priceSuv}
                    </span>
                  )}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-forest mb-3 tracking-tight">
                {s.name}
              </h3>

              <p className="text-forest/70 leading-relaxed mb-6 max-w-md">
                {s.summary}
              </p>

              <ul className="space-y-2">
                {s.includes.slice(0, 3).map((inc) => (
                  <li key={inc} className="flex items-start gap-2 text-sm text-forest/80">
                    <span className="mt-2 block w-1 h-1 rounded-full bg-moss" />
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t hairline flex items-center justify-between">
                <span className="text-xs text-forest/50 tracking-wide uppercase">
                  {s.duration}
                </span>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest group-hover:gap-3 transition-all"
                >
                  Book this
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
