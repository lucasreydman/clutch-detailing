"use client";

import { team } from "@/lib/team";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="label-eyebrow mb-4">The team</p>
          <h2 className="display-xl text-5xl md:text-7xl text-forest max-w-[16ch] mb-20 text-balance">
            Our <span className="italic-display text-moss">detailers.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group relative rounded-3xl border hairline overflow-hidden bg-bone-warm/40 p-8 md:p-12 hover:bg-bone-warm/70 transition-colors duration-500">
                {/* Initial monogram */}
                <div className="flex items-start justify-between mb-12">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-forest text-bone flex items-center justify-center font-display text-4xl md:text-5xl tracking-tight">
                    {m.initials}
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="w-11 h-11 rounded-full border hairline flex items-center justify-center text-forest hover:bg-forest hover:text-bone transition-colors tap touch-manipulation"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.55v14H.22V8zm7.5 0h4.36v1.93h.06c.6-1.13 2.08-2.33 4.28-2.33 4.58 0 5.43 3.01 5.43 6.93V22h-4.55v-6.27c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.32V22H7.72V8z" />
                    </svg>
                  </a>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-forest tracking-tight">
                  {m.name}
                </h3>
                <p className="text-moss mt-1 italic-display">{m.role}</p>
                <p className="mt-6 text-forest/75 leading-relaxed text-pretty">{m.bio}</p>

                <a
                  href={`tel:${m.phone}`}
                  aria-label={`Call ${m.name}`}
                  className="mt-8 inline-flex items-center gap-3 h-12 px-5 rounded-full bg-forest text-bone hover:bg-forest-soft tap touch-manipulation text-[15px] font-medium"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{m.phoneDisplay}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
