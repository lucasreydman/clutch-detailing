import type { Metadata } from "next";
import { EcoStats } from "@/components/EcoStats";
import { Reveal } from "@/components/Reveal";
import { BookNowButton } from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "About — Waterless Detailing in Toronto",
  description:
    "Clutch Detailing is a hyper-local mobile detailing service exclusively serving Lawrence Park, Hoggs Hollow, and surrounding neighbourhoods. Premium results with a fraction of the water.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pb-32 bg-eco-mesh bg-grain">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="label-eyebrow mb-6">Our story</p>
            <h1 className="display-xl text-5xl md:text-8xl text-forest max-w-[15ch]">
              The best wash<br />
              <span className="italic-display text-moss">with the lightest footprint.</span>
            </h1>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-12 mt-20 md:mt-28">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-xl md:text-2xl font-display text-forest leading-snug max-w-2xl">
                  At Clutch Detailing we are committed to making the car-washing experience easy, convenient, and environmentally sustainable — all at the same time.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 space-y-6 text-forest/80 leading-relaxed max-w-2xl">
                  <p>
                    Currently we're exclusively servicing Lawrence Park, Hoggs Hollow, and surrounding neighbourhoods. We come to your driveway with all our own gear so you don't have to lift a finger.
                  </p>
                  <p>
                    A driveway wash with a hose can send hundreds of litres of soapy runoff into the storm drain. Multiply that by every Saturday morning across the city — that's a lot of detergent ending up in Lake Ontario. Our approach is built around using less. Snow foam pre-wash to lift dirt before any contact. Two-bucket method with grit guards. pH-balanced, biodegradable products.
                  </p>
                  <p>
                    We're a small, local team — and we like it that way. You'll see the same faces every time. We learn your car, we learn your standards, and we get faster and better with every visit.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:pl-8">
              <Reveal delay={0.15}>
                <div className="rounded-3xl bg-bone-warm/60 border hairline p-8 md:p-10 sticky top-28">
                  <p className="label-eyebrow mb-4">At a glance</p>
                  <dl className="space-y-5">
                    <Row k="Founded" v="2024 · Lawrence Park" />
                    <Row k="Service area" v="Lawrence Park · Hoggs Hollow · Surrounding neighbourhoods" />
                    <Row k="Method" v="Waterless / low-water wash" />
                    <Row k="Products" v="Chemical Guys · CRMX ceramics" />
                    <Row k="Booking" v="Live calendar, no deposit" />
                  </dl>
                  <div className="mt-8">
                    <BookNowButton full />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <EcoStats />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 pb-4 border-b hairline last:border-0 last:pb-0">
      <dt className="text-xs label-eyebrow shrink-0">{k}</dt>
      <dd className="text-forest text-right text-[15px]">{v}</dd>
    </div>
  );
}
