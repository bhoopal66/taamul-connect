import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  FileCheck,
  LifeBuoy,
  CalendarClock,
  Building2,
  FileText,
  Shield,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Structured Mezzanine Financing",
    description: "Bridging the gap between senior debt and equity for companies requiring growth capital without ownership dilution.",
  },
  {
    icon: FileCheck,
    title: "Subordinated Debt & Convertible Instruments",
    description: "Providing flexible funding with structured repayment options and investor-aligned incentives.",
  },
  {
    icon: LifeBuoy,
    title: "Special Situations & Distressed Financing",
    description: "Assisting businesses with turnaround capital, bridging finance, and complex restructuring solutions.",
  },
  {
    icon: CalendarClock,
    title: "Custom Payment & Exit Structures",
    description: "Designing repayment models that align with cash flow cycles and long-term business objectives.",
  },
];

const benefits = [
  "Access growth capital without diluting equity ownership",
  "Flexible repayment structures aligned with cash flow",
  "Bridge financing for acquisitions and expansion",
  "Preserve working capital for operational needs",
  "Customized terms based on business requirements",
  "Expert guidance through complex financing structures",
];

const useCases = [
  "Business expansion and market entry",
  "Acquisition financing and buyouts",
  "Management buyouts (MBOs)",
  "Capital restructuring and turnarounds",
  "Real estate development projects",
  "Bridge financing for strategic transactions",
];

const MezzanineFinancing = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--background))] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--background))]/10 rounded-full text-[hsl(var(--background))]/90 text-sm font-medium backdrop-blur-sm mb-6">
              <Building2 className="h-4 w-4" />
              Hybrid Financing
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              Mezzanine &{" "}
              <span className="text-accent">Hybrid Financing</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))]/80 mb-8 max-w-2xl">
              Flexible capital solutions for expansion and restructuring. 
              Access growth funding without diluting your ownership stake.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Explore Options
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm text-foreground mb-4">
              Flexible Financing Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored hybrid financing options that bridge the gap between debt and equity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Key Benefits</h3>
              </div>
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Ideal Use Cases</h3>
              </div>
              <div className="space-y-4">
                {useCases.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--background))] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm text-[hsl(var(--background))] mb-6">
              Unlock Growth Without Dilution
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              Explore flexible financing structures tailored to your business needs and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Talk to Expert
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default MezzanineFinancing;
