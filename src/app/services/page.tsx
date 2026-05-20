import type { Metadata } from "next";
import { PricingTable } from "@/components/PricingTable";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Services & Pricing — Mobile Car Detailing Toronto",
  description:
    "Transparent pricing for waterless mobile car detailing in Toronto. Standard washes from $30, interiors from $135, ceramic coating $599.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-12 bg-eco-mesh bg-grain">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="label-eyebrow mb-6">Services & Rates</p>
            <h1 className="display-xl text-5xl md:text-8xl text-forest max-w-[14ch]">
              Honest prices.<br />
              <span className="italic-display text-moss">Every package, listed.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-forest/75 max-w-2xl leading-relaxed">
              No upsell theatre. Pick your package, we show up, we deliver. Prices listed per car / SUV+minivan where applicable.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingTable />
      <FAQ />
    </>
  );
}
