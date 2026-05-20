import { Hero } from "@/components/Hero";
import { EcoStats } from "@/components/EcoStats";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <EcoStats />
      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}
