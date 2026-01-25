import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Percent,
  Calendar,
  Banknote,
  TrendingUp,
  FileText,
  Shield,
  Zap,
  RefreshCw,
  Target,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Quick Disbursement",
    description: "Fast access to funds to address immediate cash flow needs",
  },
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Interest rates from 8% p.a. with flexible repayment structures",
  },
  {
    icon: TrendingUp,
    title: "Revolving Facility",
    description: "Draw, repay, and redraw funds as per your business requirements",
  },
  {
    icon: Clock,
    title: "Minimal Documentation",
    description: "Streamlined process with reduced paperwork for faster approval",
  },
];

const eligibility = [
  "Business operating in UAE for at least 1 year",
  "Minimum annual turnover of AED 500,000",
  "Valid trade license",
  "Bank statements showing regular transactions",
  "Positive cash flow from operations",
  "No major defaults in credit history",
];

const documents = [
  "Trade License, Office Ejari & Memorandum of Association",
  "Bank statements (6-12 months)",
  "VAT returns of last 4 Qtrs",
  "Accounts receivable aging report",
  "Passport copies of shareholders & EID of authorised signatory",
  "Company profile",
];

const whyChooseUs = [
  {
    icon: RefreshCw,
    title: "Revolving Credit",
    description: "Flexible draw and repay facility that adapts to your business cycles",
  },
  {
    icon: Wallet,
    title: "Cash Flow Focus",
    description: "Designed to bridge gaps and maintain smooth daily operations",
  },
  {
    icon: Target,
    title: "Tailored Limits",
    description: "Credit limits based on your specific business turnover and needs",
  },
  {
    icon: Shield,
    title: "Bank Partnerships",
    description: "Access to 15+ partner banks for the best rates and terms",
  },
];

const WorkingCapital = () => {
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
              <TrendingUp className="h-4 w-4" />
              Business Loans
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              Working Capital{" "}
              <span className="text-accent">Solutions</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))]/80 mb-8 max-w-2xl">
              Bridge cash flow gaps and maintain smooth operations with flexible 
              working capital financing designed for UAE businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm text-foreground mb-4">
              Why Choose Our Working Capital Loans?
            </h2>
            <p className="text-lg text-muted-foreground">
              Keep your business running smoothly with quick access to operational funds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            *Interest rates and loan amounts are subject to lender's discretion and may vary based on credit assessment.
          </p>
        </div>
      </section>

      {/* Why Choose Us - Dark Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm text-white mb-4">
              The <span className="text-accent">Taamul</span> Advantage
            </h2>
            <p className="text-lg text-white/80">
              Flexible financing solutions designed to keep your business moving forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Eligibility Criteria</h3>
              </div>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Required Documents</h3>
              </div>
              <div className="space-y-4">
                {documents.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            *Banks may request additional documents at their discretion based on customer profile and business activity.
          </p>
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
              Need Funds for Daily Operations?
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              Quick approval process – get your working capital fast. Keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Talk to Expert</Link>
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

export default WorkingCapital;
