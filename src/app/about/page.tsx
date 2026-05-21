import type { Metadata } from "next";
import { EcoStats } from "@/components/EcoStats";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Waterless Detailing in Toronto",
  description:
    "Clutch Detailing is a hyper-local mobile detailing service exclusively serving Lawrence Park, Hoggs Hollow, and surrounding neighbourhoods. Premium results with a fraction of the water.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pb-32 bg-eco-mesh bg-grain">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <p className="label-eyebrow mb-6">Our story</p>
            <h1 className="display-xl text-5xl md:text-8xl text-forest max-w-[15ch] text-balance">
              The best wash <span className="italic-display text-moss">with the lightest footprint.</span>
            </h1>
          </Reveal>

          <div className="mt-20 md:mt-28 max-w-2xl">
            <Reveal>
              <p className="text-xl md:text-2xl font-display text-forest leading-snug text-pretty">
                At Clutch Detailing we are committed to making the car-washing experience easy, convenient, and environmentally sustainable — all at the same time.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6 text-forest/80 leading-relaxed text-pretty">
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
        </div>
      </section>

      <EcoStats />
    </>
  );
}
