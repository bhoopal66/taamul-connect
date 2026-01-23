import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium backdrop-blur-sm">
              <Award className="h-4 w-4" />
              Trusted by 500+ UAE Businesses
            </div>

            <h1 className="text-display-sm md:text-display text-primary-foreground leading-tight">
              Powering UAE Business Growth Through{" "}
              <span className="text-accent">Strategic Financing</span>
            </h1>

            <p className="text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Access flexible business loans from AED 100,000 to AED 50 million.
              Partner with UAE's leading banks through our streamlined application process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/apply" className="flex items-center gap-2">
                  Apply for Business Loan
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#calculator" className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculate Eligibility
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">15+</p>
                  <p className="text-sm text-primary-foreground/70">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">500+</p>
                  <p className="text-sm text-primary-foreground/70">Businesses Served</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">AED 2B+</p>
                  <p className="text-sm text-primary-foreground/70">Loans Facilitated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 bg-card rounded-2xl shadow-elevated p-6 animate-float">
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
                    <span className="font-medium text-foreground">7.5% p.a.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tenure</span>
                    <span className="font-medium text-foreground">60 months</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
              
              {/* Stats Cards */}
              <div className="absolute top-16 left-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                <p className="text-sm text-muted-foreground">Processing Time</p>
                <p className="text-lg font-bold text-success">48 Hours</p>
              </div>

              <div className="absolute bottom-16 right-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-sm text-muted-foreground">Approval Rate</p>
                <p className="text-lg font-bold text-accent">87%</p>
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
