import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Banknote,
  Shield,
  Building,
  Building2,
  Cog,
  Ship,
  Users,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const services = [
  {
    icon: Landmark,
    title: "Term Loans",
    description: "Fixed-term financing for expansion, equipment, or capital investments with predictable repayments.",
    href: "/loans/term-loans",
  },
  {
    icon: Banknote,
    title: "Working Capital",
    description: "Bridge cash flow gaps and maintain smooth operations with flexible working capital solutions.",
    href: "/loans/working-capital",
  },
  {
    icon: Shield,
    title: "Secured Loans",
    description: "Leverage your assets for better rates and higher loan amounts with secured financing options.",
    href: "/loans/secured-loans",
  },
  {
    icon: Building,
    title: "SME Loans",
    description: "Tailored financing solutions designed specifically for small and medium enterprises in the UAE.",
    href: "/loans/sme-loans",
  },
  {
    icon: Building2,
    title: "Corporate Loans",
    description: "Large-scale financing for established corporations with competitive rates and flexible terms.",
    href: "/loans/corporate-loans",
  },
  {
    icon: Cog,
    title: "Equipment Financing",
    description: "Acquire machinery, vehicles, and equipment without impacting your working capital.",
    href: "/loans/equipment-financing",
  },
  {
    icon: Ship,
    title: "Trade Finance",
    description: "Facilitate international trade with LCs, guarantees, and import/export financing solutions.",
    href: "/loans/trade-finance",
  },
  {
    icon: Users,
    title: "Co-Lending",
    description: "Access larger loan amounts through our network of partner banks and financial institutions.",
    href: "/loans/co-lending",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h2 className="text-display-sm text-foreground mb-4">
            Comprehensive Business Financing Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to corporations, we offer tailored financial products to fuel your business growth.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedItem key={service.title} index={index} baseDelay={0.05}>
              <Link
                to={service.href}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20 block h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
