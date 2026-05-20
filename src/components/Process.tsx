"use client";

import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Book your slot",
    body: "Pick a time directly on our live calendar. No phone tag, no deposit.",
  },
  {
    n: "02",
    title: "We arrive",
    body: "Two detailers, all our own gear and biodegradable products. You don't lift a finger.",
  },
  {
    n: "03",
    title: "Inspect together",
    body: "When we're done we walk the car with you. If something's not right we fix it on the spot.",
  },
];

export function Process() {
  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-eyebrow mb-4">How it works</p>
          <h2 className="display-xl text-5xl md:text-7xl text-forest max-w-[14ch] mb-20">
            Three steps.<br />
            <span className="italic-display text-moss">Zero fuss.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-forest/20 to-transparent"
          />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-bone-warm border hairline grid place-items-center font-display text-xl text-forest mb-6 relative z-10">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-forest tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-forest/70 leading-relaxed max-w-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
