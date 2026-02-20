import Header from "@/components/Header";
import HeroAgency from "@/components/HeroAgency";
import AgencyVideoDemo from "@/components/AgencyVideoDemo";
import PooledDataHook from "@/components/PooledDataHook";
import PromptsVsKeywords from "@/components/PromptsVsKeywords";
import AgencyProfitModel from "@/components/AgencyProfitModel";
import ScopeOfWork from "@/components/ScopeOfWork";
import PartnerJourney from "@/components/PartnerJourney";
import AgencyTestimonials from "@/components/AgencyTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const partnerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly do you fulfill per tier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tier 1 ($498): 50-query tracking, 8 answer-first blogs/mo, schema/llms.txt, Featured.com mentions. Tier 2 ($1,498): +150 queries, 36 authority mentions, TLDR page summaries. Tier 3 ($2,498): +250 queries, 70+ mentions, YouTube transcripts, dominance-to-dollars reports."
      }
    },
    {
      "@type": "Question",
      "name": "How is Rankett different from SEO tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO = clicks. AI Visibility = zero-click recommendations. SEO tools track rankings and traffic. Rankett provides content + mentions + SOV tracking so AI picks your client first. Agencies charge $1.5k–$7.5k/mo retainers (vs $500 SEO packages)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Share of Voice (SOV)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SOV = % of times AI cites your client vs 50 competitors across buyer queries. Example: 'Best dentist Hillsboro' → Track ChatGPT, Perplexity, and Gemini. Average lift: 0→15% SOV in 90 days across partner accounts."
      }
    },
    {
      "@type": "Question",
      "name": "What proof/case studies exist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pooled benchmarks: Tier 1 avg 12% SOV lift in 90 days. Live vault access for partners (before/after SOV charts, competitor gaps, revenue correlations). Early adopters contribute → everyone benefits."
      }
    },
    {
      "@type": "Question",
      "name": "How do I onboard my first client?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1. Run branded audit → show client gaps. 2. Close retainer → create seat in Rankett. 3. Send client your onboarding link (yourdomain.com/onboard). 4. We deliver. You bill."
      }
    }
  ]
};

export default function PartnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerFaqSchema) }}
      />
      <Header />
      <main className="bg-slate-950">
        {/* 1. The Authority Pitch */}
        <HeroAgency />
        
        {/* 2. The Infrastructure Walkthrough */}
        <AgencyVideoDemo />
        
        {/* 3. The Network Effect Hook */}
        <PooledDataHook />
        
        {/* 4. The Market Shift Education */}
        <PromptsVsKeywords />
        
        {/* 5. The Financial Model */}
        <AgencyProfitModel />
        
        {/* 6. The Service Boundaries */}
        <ScopeOfWork />
        
        {/* 7. The Application Process */}
        <PartnerJourney />
        
        {/* 8. The Social Validation */}
        <AgencyTestimonials />
        
        {/* 9. The Details */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
