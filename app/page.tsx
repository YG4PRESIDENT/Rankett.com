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

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much can agencies charge clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tier 1: $1,500/mo → Rankett $498 = $1,002 profit (67%). Tier 2: $4,500/mo → Rankett $1,498 = $3,002 profit (67%). Tier 3: $7,500/mo → Rankett $2,498 = $5,002 profit (67%)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I fully white-label (custom domain)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes: aivisibility.youragency.com. Your logo, your colors, your positioning. Clients see your platform. Partner tier unlocks ($299/mo)."
      }
    },
    {
      "@type": "Question",
      "name": "How long until clients see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "90 days average for 12–18% Mention Rate lift. Week 1–4: Technical (schema, llms.txt, GBP). Month 2: Content injection + authority mentions. Month 3: Consistent Mention Rate gains + branded search lift."
      }
    },
    {
      "@type": "Question",
      "name": "What if you're late on deliverables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full month refund if even 1 minute late. Agencies have final approval/rejection rights. No risk to your client relationships."
      }
    },
    {
      "@type": "Question",
      "name": "Why now? Isn't this just SEO 2.0?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI search = 42% of queries (2026). Traditional SEO traffic down 25–61%. Clients demand 'show up in ChatGPT' or lose to competitors. 90-day window before saturation."
      }
    }
  ]
};

export default function RankettHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <Header />
      <main>
        <HeroHome />
        
        {/* 1. Partner Benefits (Now immediately after Hero) */}
        <section>
          <PartnerBenefits />
        </section>

        <OneLineQualifier />

        {/* 2. The Business Model Stack Narrative */}
        <section id="process">
          <GhostModelStack />
        </section>

        {/* 3. Visual Matrix ("Uncover what AI says") */}
        <section id="features">
          <FeaturesMatrix />
        </section>

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