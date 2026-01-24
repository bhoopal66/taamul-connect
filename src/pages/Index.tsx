import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import PartnersSection from "@/components/home/PartnersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CalculatorSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
