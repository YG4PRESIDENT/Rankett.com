import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesMatrix from "@/components/home/FeaturesMatrix";
import AIBrandPortrayal from "@/components/features/AIBrandPortrayal";
import StealSpotlight from "@/components/features/StealSpotlight";
import FeaturesCTA from "@/components/features/FeaturesCTA";

export const metadata = {
  title: "Features - Rankett",
  description: "See how AI models portray your brand. Track visibility across ChatGPT, Claude, Gemini, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <FeaturesMatrix />
        <AIBrandPortrayal />
        <StealSpotlight />
        <FeaturesCTA />
      </main>
      <Footer />
    </>
  );
}
