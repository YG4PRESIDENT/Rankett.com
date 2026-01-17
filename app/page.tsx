import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Hero & Intro
import HeroHome from "@/components/home/HeroHome";
import OneLineQualifier from "@/components/home/OneLineQualifier";
import LoomVideoSection from "@/components/home/LoomVideoSection";

// Testimonials
import Testimonial from "@/components/home/Testimonial";

// Features Section
import AIBrandPortrayal from "@/components/features/AIBrandPortrayal";
import StealSpotlight from "@/components/features/StealSpotlight";
import FeaturesMatrix from "@/components/home/FeaturesMatrix";

// Pricing Section
import AccessTiers from "@/components/pricing/AccessTiers";
import FulfillmentTiers from "@/components/pricing/FulfillmentTiers";
import TheMathSection from "@/components/home/TheMathSection";

// Case Studies Section
import CaseStudyCard from "@/components/casestudies/CaseStudyCard";
import IndustryCoverage from "@/components/casestudies/IndustryCoverage";

// How It Works & CTA
import HowItWorks from "@/components/home/HowItWorks";
import FAQChat from "@/components/home/FAQChat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroHome />
        <OneLineQualifier />
        <LoomVideoSection />

        <Testimonial slot={1} />

        {/* Features Section */}
        <section id="features">
          <FeaturesMatrix />
          <AIBrandPortrayal />
          <StealSpotlight />
        </section>

        <Testimonial slot={2} />

        {/* Pricing Section */}
        <section id="pricing">
          <TheMathSection />
          <AccessTiers />
          <FulfillmentTiers />
        </section>

        <Testimonial slot={3} />

        {/* Case Studies Section */}
        <section id="casestudies">
          <CaseStudyCard />
          <IndustryCoverage />
        </section>

        {/* How It Works & FAQ */}
        <HowItWorks />
        <FAQChat />
      </main>
      <Footer />
    </>
  );
}
