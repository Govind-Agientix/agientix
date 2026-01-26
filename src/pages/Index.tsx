import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { SixReasonsSection } from "@/components/home/SixReasonsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <TimelineSection />
        <TestimonialsSection />
        <MetricsSection />
        <TrustSection />
        <SixReasonsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
