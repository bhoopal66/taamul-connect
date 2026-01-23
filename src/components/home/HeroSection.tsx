import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Building2, Users, Award, FileText, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-40 w-16 h-16 border border-primary/30 rotate-45 animate-float" />
        <div className="absolute top-48 right-20 w-24 h-24 border border-primary/20 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-60 w-20 h-20 bg-card/50 rounded-lg rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 right-80 w-12 h-12 bg-primary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 500+ UAE Businesses
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Smart Business Banking &{" "}
              <span className="text-gradient-gold">Financing</span> Solutions
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Open your business account in days, not weeks. Access flexible financing to fuel your growth. We make business banking simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/apply" className="flex items-center gap-2">
                  Check Eligibility
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/how-it-works" className="flex items-center gap-2">
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link 
                to="/business-accounts" 
                className="group flex items-center justify-between bg-card hover:bg-muted border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/30 flex-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Accounts</p>
                    <p className="text-sm text-muted-foreground">Open in days</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link 
                to="/loans/term-loans" 
                className="group flex items-center justify-between bg-card hover:bg-muted border border-border rounded-xl p-4 transition-all duration-300 hover:border-primary/30 flex-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Landmark className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Loans</p>
                    <p className="text-sm text-muted-foreground">Up to AED 5M</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Right Content - Abstract Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 bg-card rounded-2xl shadow-elevated border border-border p-6 animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Approved</p>
                    <p className="text-xl font-bold text-foreground">AED 2,500,000</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium text-primary">7.5% p.a.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-medium text-foreground">60 months</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-muted/50 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
              
              {/* Stats Cards */}
              <div className="absolute top-16 left-8 bg-card border border-border rounded-xl p-4 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                <p className="text-sm text-muted-foreground">Processing Time</p>
                <p className="text-lg font-bold text-success">48 Hours</p>
              </div>

              <div className="absolute bottom-16 right-8 bg-card border border-border rounded-xl p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm text-muted-foreground">Approval Rate</p>
                <p className="text-lg font-bold text-primary">87%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;