import type { Metadata } from "next";
import { Team } from "@/components/Team";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Team — The Detailers",
  description:
    "Meet Alexander Reydman and Matthew Petko — the team behind Clutch Detailing's waterless mobile detailing in north Toronto.",
};

export default function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-12 bg-eco-mesh bg-grain">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="label-eyebrow mb-6">The team</p>
            <h1 className="display-xl text-5xl md:text-8xl text-forest max-w-[15ch]">
              Meet the<br />
              <span className="italic-display text-moss">team.</span>
            </h1>
            <p className="mt-10 text-lg md:text-xl text-forest/75 max-w-2xl leading-relaxed">
              We're a two-person crew. The same hands work on every car, which is how the standard stays consistent and how customers become regulars.
            </p>
          </Reveal>
        </div>
      </section>

      <Team />
    </>
  );
}
