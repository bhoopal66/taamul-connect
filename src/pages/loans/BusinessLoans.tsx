import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Percent,
  Calendar,
  Banknote,
  Building2,
  FileText,
  Shield,
  Calculator,
  Info,
  CreditCard,
  TrendingUp,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const features = [
  {
    icon: Banknote,
    title: "Flexible Amounts",
    description: "Loans from AED 100,000 to AED 50 million based on your business needs",
  },
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Interest rates starting from 7% p.a. with transparent fee structure",
  },
  {
    icon: Calendar,
    title: "Long Tenure",
    description: "Repayment periods up to maximum 48 months with customizable EMI options",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Streamlined documentation process with faster turnaround times",
  },
  {
    icon: CreditCard,
    title: "Loan Against POS Machine",
    description: "Get financing based on your POS transaction history and sales volume",
  },
];

const eligibility = [
  "Business operating in UAE for at least 1 year",
  "Minimum annual turnover of AED 500K onwards",
  "Valid trade license",
  "Audited financial statements for 2+ years",
  "Positive credit history with no defaults",
  "UAE residence visa for business owners",
];

const documents = [
  "Trade License, Office Ejari & Memorandum of Association",
  "Audited financial statements (2 years)",
  "Bank statements (12 months)",
  "Company profile and business plan",
  "Passport copies of shareholders & EID of authorised signatory",
  "VAT returns of last 4 Qtrs",
];

const BusinessLoans = () => {
  const [turnover, setTurnover] = useState(5000000);

  const eligibleAmount = useMemo(() => {
    let amount = turnover / 8;
    return Math.min(amount, 3000000);
  }, [turnover]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(value);
  };

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
              Business Loans
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              Business Loans for{" "}
              <span className="text-accent">Business Expansion</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))]/80 mb-8 max-w-2xl">
              Fixed-term financing solutions for capital investments, expansion projects,
              and business growth. We streamline applications to help you get quick approval
              with predictable monthly repayments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#calculator" className="flex items-center gap-2">
                  Check Eligibility
                </a>
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

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm text-foreground mb-4">
              Why Choose Our Business Loans?
            </h2>
            <p className="text-lg text-muted-foreground">
              Designed for UAE businesses looking for structured, long-term financing solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            *Interest rates are subject to lender's discretion and may vary based on credit assessment.
          </p>
        </div>
      </section>

      {/* POS Machine Loan Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium backdrop-blur-sm mb-6">
              <CreditCard className="h-4 w-4" />
              POS Machine Financing
            </div>
            <h2 className="text-display-sm text-white mb-4">
              How <span className="text-accent">POS Loan</span> Works
            </h2>
            <p className="text-lg text-white/80">
              Get financing based on your card payment transactions. A simple, transparent process 
              designed for businesses with consistent POS sales.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: "01",
                icon: FileText,
                title: "Share Your POS Data",
                description: "Provide access to your POS transaction history from the last 6 months",
              },
              {
                step: "02",
                icon: TrendingUp,
                title: "We Analyze Sales",
                description: "Our team reviews your average monthly card sales and transaction patterns",
              },
              {
                step: "03",
                icon: Calculator,
                title: "Loan Amount Calculated",
                description: "Eligible amount is determined based on your average monthly POS turnover",
              },
              {
                step: "04",
                icon: Banknote,
                title: "Quick Disbursement",
                description: "Once approved, funds are credited directly to your business account",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-5xl font-bold text-white/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-white/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Loan Calculation Example */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">How Loan Amount is Calculated</h3>
                <p className="text-sm text-white/70">Based on your POS transaction volume</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <div className="text-center mb-6">
                <p className="text-sm text-white/70 mb-2">Formula</p>
                <p className="text-xl font-bold text-white">Annual POS Turnover × 80%</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                  <p className="text-sm text-white/70 mb-2">Wio Bank</p>
                  <p className="text-sm text-white/60 mb-1">Maximum Limit</p>
                  <p className="text-2xl font-bold text-accent">AED 1,000,000</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                  <p className="text-sm text-white/70 mb-2">RAK Bank</p>
                  <p className="text-sm text-white/60 mb-1">Maximum Limit</p>
                  <p className="text-2xl font-bold text-accent">AED 5,000,000</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-white/60 text-center">
              *Actual loan amount depends on lender's assessment, credit history, and business profile.
            </p>
          </div>

          {/* Eligibility & Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* POS Eligibility */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">POS Loan Eligibility</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Active POS machine with minimum 6 months history",
                  "Minimum monthly POS turnover of AED 50,000",
                  "Valid trade license in UAE",
                  "Business bank account with POS transactions",
                  "No outstanding defaults on existing loans",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Why Choose POS Financing?</h3>
              </div>
              <div className="space-y-3">
                {[
                  "No collateral required – your POS sales act as security",
                  "Faster approval compared to traditional business loans",
                  "Flexible repayment aligned with your cash flow",
                  "Minimal documentation required",
                  "Ideal for retail, F&B, and service businesses",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Talk to Expert About POS Loans
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
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

            {/* Documents */}
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

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Business Loan Eligibility Calculator</h3>
                  <p className="text-muted-foreground">Get an instant estimate</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Annual Turnover Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-foreground">
                      Annual Turnover
                    </label>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(turnover)}
                    </span>
                  </div>
                  <Slider
                    value={[turnover]}
                    onValueChange={(value) => setTurnover(value[0])}
                    min={500000}
                    max={100000000}
                    step={500000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>AED 500K</span>
                    <span>AED 100M</span>
                  </div>
                </div>

                {/* Minimum Requirement Note */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Minimum 1 year in business required
                  </p>
                </div>
              </div>

              {/* Result */}
              <motion.div 
                key={eligibleAmount}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-6 rounded-2xl gradient-hero text-primary-foreground"
              >
                <p className="text-sm opacity-80 mb-1">Estimated Eligible Amount</p>
                <p className="text-4xl font-bold mb-2">
                  {formatCurrency(eligibleAmount)}
                </p>
                <p className="text-xs opacity-70 mb-4">*This is an estimate. Actual amount may vary.</p>
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Talk to Expert
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              Start your application today. Our experts will guide you through the process.
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

export default BusinessLoans;
