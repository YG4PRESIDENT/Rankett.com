import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesHero from "@/components/casestudies/CaseStudiesHero";
import CaseStudyTabs from "@/components/casestudies/CaseStudyTabs";
import CaseStudyCard from "@/components/casestudies/CaseStudyCard";
import IndustryCoverage from "@/components/casestudies/IndustryCoverage";

export const metadata = {
  title: "Case Studies - Rankett",
  description: "See real results from agencies using AI visibility services. Learn how marketing agencies are adding new revenue streams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudyTabs />
        <CaseStudyCard />
        <IndustryCoverage />
      </main>
      <Footer />
    </>
  );
}
