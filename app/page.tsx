import type { Metadata } from "next";
import Hero from "./_sections/Hero";
import TrustBrands from "./_sections/TrustBrands";
import USPCards from "./_sections/USPCards";
import Services from "./_sections/Services";
import Process from "./_sections/Process";
import Portfolio from "./_sections/Portfolio";
import Pricing from "./_sections/Pricing";
import Testimonials from "./_sections/Testimonials";
import FAQ from "./_sections/FAQ";
import FinalCTA from "./_sections/FinalCTA";

export const metadata: Metadata = {
  title: "LF Studio – Deine Website in 5 Tagen ab 499 €",
  description:
    "Professionelle Websites für kleine Betriebe – ohne Agentur-Preise, ohne Stress. Ab 499 €, fertig in 5 Werktagen.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBrands />
      <USPCards />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
