import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero & Intro
import HeroHome from "@/components/home/HeroHome";
import PartnerBenefits from "@/components/home/PartnerBenefits"; // Moved up
import OneLineQualifier from "@/components/home/OneLineQualifier";

// Business Model Stack (The "Sticky Stack" Reveal)
import GhostModelStack from "@/components/home/GhostModelStack";

// Visual Matrix (Keep this, it's good visual proof)
import FeaturesMatrix from "@/components/home/FeaturesMatrix";

// New Flow Components
import WholesalePricing from "@/components/home/WholesalePricing"; // New
// Legacy or Utility
import IndustriesGrid from "@/components/home/IndustriesGrid";
import FAQChat from "@/components/home/FAQChat";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroHome />
        
        {/* 1. Partner Benefits (Now immediately after Hero) */}
        <section id="benefits">
          <PartnerBenefits />
        </section>

        <OneLineQualifier />

        {/* 2. The Business Model Stack Narrative */}
        <GhostModelStack />

        {/* 3. Visual Matrix ("Uncover what AI says") */}
        <FeaturesMatrix />

        {/* 4. Industries (Marquee) - Moved here */}
        <IndustriesGrid />

        {/* 6. Wholesale Pricing (Clean, Single Card) */}
        <section id="pricing">
          <WholesalePricing />
        </section>

        {/* 8. FAQ */}
        <FAQChat />
      </main>
      <Footer />
    </>
  );
}