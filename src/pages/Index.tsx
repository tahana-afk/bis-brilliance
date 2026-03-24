import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ResultsSection from "@/components/sections/ResultsSection";
import MetricsSection from "@/components/sections/MetricsSection";
import VideoSection from "@/components/sections/VideoSection";
import ScalableRevenueSection from "@/components/sections/ScalableRevenueSection";
import CreatorJourneysSection from "@/components/sections/CreatorJourneysSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FooterCTASection from "@/components/sections/FooterCTASection";
import FooterInfoSection from "@/components/sections/FooterInfoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ResultsSection />
      <MetricsSection />
      <VideoSection />
      <ScalableRevenueSection />
      <CreatorJourneysSection />
      <TestimonialSection />
      <FooterCTASection />
      <FooterInfoSection />
    </div>
  );
};

export default Index;
