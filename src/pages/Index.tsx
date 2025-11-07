import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { ClientsSection } from "@/components/ClientsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <WhyMeSection />
      <ClientsSection />
      <PricingSection />
      <CTASection />
    </main>
  );
};

export default Index;
