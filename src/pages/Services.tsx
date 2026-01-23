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
  TrendingUp,
  Layers,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const loanServices = [
  {
    icon: Landmark,
    title: "Term Loans",
    description: "Fixed-term financing for expansion, equipment, or capital investments with predictable repayments.",
    details: "Our term loans offer flexible tenures from 1 to 7 years, competitive interest rates, and customized repayment schedules tailored to your cash flow patterns.",
    features: ["Loan amounts from AED 500K to AED 50M", "Flexible tenure options", "Competitive fixed rates", "Quick disbursement"],
    href: "/loans/term-loans",
  },
  {
    icon: Banknote,
    title: "Working Capital",
    description: "Bridge cash flow gaps and maintain smooth operations with flexible working capital solutions.",
    details: "Keep your business running smoothly with our working capital facilities designed to manage day-to-day operational expenses and short-term financial needs.",
    features: ["Revolving credit facilities", "Invoice financing", "Seasonal funding", "Quick approval process"],
    href: "/loans/working-capital",
  },
  {
    icon: Shield,
    title: "Secured Loans",
    description: "Leverage your assets for better rates and higher loan amounts with secured financing options.",
    details: "Use your property, equipment, or other valuable assets as collateral to access larger loan amounts at more competitive interest rates.",
    features: ["Property-backed loans", "Equipment financing", "Higher loan limits", "Lower interest rates"],
    href: "/loans/secured-loans",
  },
  {
    icon: Building,
    title: "SME Loans",
    description: "Tailored financing solutions designed specifically for small and medium enterprises in the UAE.",
    details: "Purpose-built financial products for SMEs, featuring simplified documentation, faster processing, and terms that understand the unique challenges of growing businesses.",
    features: ["Simplified documentation", "Fast approval", "Government-backed options", "Growth-focused terms"],
    href: "/loans/sme-loans",
  },
  {
    icon: Building2,
    title: "Corporate Loans",
    description: "Large-scale financing for established corporations with competitive rates and flexible terms.",
    details: "Comprehensive financing solutions for large enterprises, including syndicated loans, project financing, and structured credit facilities for major capital requirements.",
    features: ["High-value facilities", "Syndicated lending", "Project financing", "Customized structures"],
    href: "/loans/corporate-loans",
  },
  {
    icon: Cog,
    title: "Equipment Financing",
    description: "Acquire machinery, vehicles, and equipment without impacting your working capital.",
    details: "Finance the purchase of essential business equipment while preserving your capital for other operational needs. Includes options for new and pre-owned equipment.",
    features: ["Up to 100% financing", "Fixed monthly payments", "Tax benefits", "Ownership at end of term"],
    href: "/loans/equipment-financing",
  },
  {
    icon: Ship,
    title: "Trade Finance",
    description: "Facilitate international trade with LCs, guarantees, and import/export financing solutions.",
    details: "Comprehensive trade finance instruments including Letters of Credit, Bank Guarantees, and pre/post-shipment financing to support your international trade activities.",
    features: ["Letters of Credit", "Bank Guarantees", "Import/Export financing", "Supply chain solutions"],
    href: "/loans/trade-finance",
  },
  {
    icon: Users,
    title: "Co-Lending",
    description: "Access larger loan amounts through our network of partner banks and financial institutions.",
    details: "Our extensive network of banking partners enables us to structure and syndicate larger financing requirements, giving you access to capital beyond single-lender limits.",
    features: ["Access to larger amounts", "Multiple lender options", "Competitive terms", "Single point of contact"],
    href: "/loans/co-lending",
  },
];

const advisoryServices = [
  {
    icon: TrendingUp,
    title: "Debt Advisory & Structuring",
    description: "Optimize your capital structure and secure improved loan terms through expert debt advisory.",
    details: "Our experienced advisors work with you to analyze your current debt profile, identify optimization opportunities, and negotiate better terms with lenders.",
    features: ["Debt restructuring", "Refinancing strategy", "Lender negotiations", "Capital structure optimization"],
    href: "/services/debt-advisory",
  },
  {
    icon: Layers,
    title: "Mezzanine & Hybrid Financing",
    description: "Flexible capital solutions bridging debt and equity for growth without ownership dilution.",
    details: "Access growth capital through innovative financing structures that combine the benefits of debt and equity, allowing you to fund expansion while maintaining ownership control.",
    features: ["Subordinated debt", "Convertible instruments", "Growth capital", "Flexible repayment"],
    href: "/services/mezzanine-financing",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold mb-4 uppercase tracking-wide text-sm">
              Our Services
            </p>
            <h1 className="text-display-md md:text-display-lg text-foreground mb-6">
              Comprehensive Business{" "}
              <span className="text-primary">Financing Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From startups to established corporations, we offer a complete range of financing products and advisory services to fuel your business growth and optimize your capital structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Loan Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                Loan Services
              </p>
            </div>
            <h2 className="text-display-sm text-foreground mb-4">
              Business Financing Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore our comprehensive range of loan products designed to meet diverse business needs, from working capital to large-scale corporate financing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {loanServices.map((service, index) => (
              <AnimatedItem key={service.title} index={index} baseDelay={0.05}>
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-accent/20 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.details}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-accent rounded-full"></div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                Advisory Services
              </p>
            </div>
            <h2 className="text-display-sm text-foreground mb-4">
              Strategic Financial Advisory
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Beyond financing, our expert advisors help you optimize your capital structure and access innovative funding solutions for sustainable growth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => (
              <AnimatedItem key={service.title} index={index} baseDelay={0.05}>
                <div className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-accent/20 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.details}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm text-primary-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team of financial experts is ready to help you find the perfect financing solution for your business needs. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/apply">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
