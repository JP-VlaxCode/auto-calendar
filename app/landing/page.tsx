import { LandingHero } from "../../components/landing/LandingHero";
import { FeaturesSection } from "../../components/landing/FeaturesSection";
import { CTASection } from "../../components/landing/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendario Compartido Inteligente | Auto Calendar",
  description: "Optimiza tu tiempo con nuestro calendario compartido y automatizaciones inteligentes.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <LandingHero />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}