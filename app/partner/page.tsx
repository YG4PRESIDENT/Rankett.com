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

export default function PartnerPage() {
  return (
    <>
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
