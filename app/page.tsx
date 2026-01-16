import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroHome from "@/components/home/HeroHome";
import OneLineQualifier from "@/components/home/OneLineQualifier";
import LoomVideoSection from "@/components/home/LoomVideoSection";
import Testimonial from "@/components/home/Testimonial";
import TheMathSection from "@/components/home/TheMathSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturesMatrix from "@/components/home/FeaturesMatrix";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import PricingCTA from "@/components/home/PricingCTA";
import FAQChat from "@/components/home/FAQChat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <OneLineQualifier />
        <LoomVideoSection />
        <Testimonial slot={1} />
        <TheMathSection />
        <Testimonial slot={2} />
        <HowItWorks />
        <Testimonial slot={3} />
        <FeaturesMatrix />
        <IndustriesGrid />
        <PricingCTA />
        <FAQChat />
      </main>
      <Footer />
    </>
  );
}
