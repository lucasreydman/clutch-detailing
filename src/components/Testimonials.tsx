"use client";

import { testimonials } from "@/lib/testimonials";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-bone-warm/40 bg-grain overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 w-[40vw] aspect-square rounded-full bg-sand/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="label-eyebrow">Said about us</span>
            <span className="block flex-1 h-px bg-forest/15" />
          </div>
          <h2 className="display-xl text-5xl md:text-7xl text-forest max-w-[18ch] mb-16">
            The reviews <span className="italic-display text-moss">do the talking.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1}>
              <figure className="h-full rounded-3xl bg-bone p-8 md:p-10 border hairline flex flex-col">
                <Quote />
                <blockquote className="font-display text-xl md:text-2xl text-forest leading-snug tracking-tight mt-6 mb-8 flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex items-center justify-between pt-6 border-t hairline">
                  <span className="font-medium text-forest">{t.name}</span>
                  {t.vehicle && (
                    <span className="text-sm text-forest/55 italic-display">{t.vehicle}</span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7 text-moss" fill="currentColor" aria-hidden>
      <path d="M9 8c-3 1-5 4-5 8v8h8v-8H7c0-3 1-5 3-6L9 8zm14 0c-3 1-5 4-5 8v8h8v-8h-5c0-3 1-5 3-6l-1-2z" />
    </svg>
  );
}
