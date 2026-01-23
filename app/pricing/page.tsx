import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import AccessTiers from "@/components/pricing/AccessTiers";
import FulfillmentTiers from "@/components/pricing/FulfillmentTiers";
import PricingFlow from "@/components/pricing/PricingFlow";
import FAQChat from "@/components/home/FAQChat";

export const metadata = {
  title: "Pricing - Rankett",
  description: "Pay to access. Pay when you profit. Tools are yours from day one. Fulfillment costs only start after you close a client.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <AccessTiers />
        <PricingFlow />
        <FulfillmentTiers />
        <FAQChat />
      </main>
      <Footer />
    </>
  );
}
