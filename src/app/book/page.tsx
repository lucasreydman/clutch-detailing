import type { Metadata } from "next";
import { CalendlyInline } from "@/components/CalendlyInline";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book — Schedule Your Detail",
  description:
    "Book your mobile detail with Clutch Detailing. Live availability, no deposit, e-transfer on completion.",
};

export default function BookPage() {
  return (
    <>
      <section className="pt-40 pb-12 bg-eco-mesh bg-grain">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="label-eyebrow mb-6">Book your detail</p>
            <h1 className="display-xl text-5xl md:text-8xl text-forest max-w-[10ch] text-balance">
              Book a <span className="italic-display text-moss">detail.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-forest/75 max-w-2xl leading-relaxed text-pretty">
              Real-time availability below. No deposit required. Payment by e-transfer or cash when the work is complete.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <CalendlyInline />
          </Reveal>
        </div>
      </section>
    </>
  );
}
