"use client";

import { services, addOns, bookingUrl } from "@/lib/services";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { BookNowButton } from "./BookNowButton";

const groups = ["Exterior", "Interior", "Complete", "Coating"] as const;

export function PricingTable() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {groups.map((g, gi) => {
          const items = services.filter((s) => s.category === g);
          if (!items.length) return null;
          return (
            <div key={g} className={gi === 0 ? "" : "mt-20"}>
              <Reveal>
                <div className="flex items-baseline justify-between mb-8">
                  <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight">
                    {g}
                  </h2>
                  <span className="label-eyebrow">Cars / SUV+Van</span>
                </div>
              </Reveal>

              <div className="border-t hairline">
                {items.map((s, i) => {
                  const hasBoth = !!s.calendlyCar && !!s.calendlySuv;
                  return (
                    <Reveal key={s.id} delay={i * 0.05}>
                      <div className="group py-8 border-b hairline hover:bg-bone-warm/40 transition-colors duration-300 px-2 -mx-2 rounded">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                          <div className="max-w-xl">
                            <div className="flex items-baseline gap-3">
                              <h3 className="font-display text-2xl md:text-3xl text-forest tracking-tight">
                                {s.name}
                              </h3>
                              {s.highlight && (
                                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-moss bg-moss/10 px-2 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-forest/70 leading-relaxed text-[15px] text-pretty">
                              {s.summary}
                            </p>
                            <p className="mt-3 text-xs label-eyebrow">{s.duration}</p>
                          </div>

                          <div className="flex flex-col items-end gap-3 tabular-nums">
                            <div className="font-display text-2xl text-forest text-right leading-tight">
                              ${s.priceCar}
                              {s.priceSuv && (
                                <span className="block text-base text-forest/50">
                                  ${s.priceSuv}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Booking row — under the description, full width */}
                        <div className="mt-5 flex flex-wrap items-center gap-2 justify-end">
                          {hasBoth ? (
                            <>
                              <BookNowButton
                                size="sm"
                                variant="ghost"
                                label={`Book Car · $${s.priceCar}`}
                                url={bookingUrl(site.calendlyUrl, s.calendlyCar)}
                              />
                              <BookNowButton
                                size="sm"
                                variant="ghost"
                                label={`Book SUV/Minivan · $${s.priceSuv}`}
                                url={bookingUrl(site.calendlyUrl, s.calendlySuv)}
                              />
                            </>
                          ) : s.calendlyCar ? (
                            <BookNowButton
                              size="sm"
                              label="Book this"
                              url={bookingUrl(site.calendlyUrl, s.calendlyCar)}
                            />
                          ) : (
                            <span className="text-xs text-forest/55 italic-display pr-2">
                              Add-on — select during checkout of any wash
                            </span>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Add-ons */}
        <Reveal>
          <div className="mt-20">
            <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight mb-8">
              Add-ons
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {addOns.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center justify-between p-5 rounded-2xl border hairline bg-bone-warm/30"
                >
                  <span className="text-forest font-medium">{a.name}</span>
                  <span className="font-display text-xl text-forest">${a.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-forest/60">
              Add-ons are selected during the booking flow for any service.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-24 rounded-3xl bg-forest text-bone p-10 md:p-16 relative overflow-hidden bg-grain">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-moss/30 blur-3xl"
            />
            <div className="relative">
              <p className="label-eyebrow text-bone/60 mb-4">No deposit · No surprise fees</p>
              <h3 className="display-xl text-4xl md:text-5xl text-bone max-w-[18ch] mb-8 text-balance">
                Book your detail online.
              </h3>
              <BookNowButton
                size="lg"
                className="bg-bone text-forest hover:bg-bone-warm hover:text-forest"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
