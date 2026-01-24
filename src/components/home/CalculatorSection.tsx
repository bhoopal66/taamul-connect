import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const benefits = [
  "Prevent incomplete documentation delays",
  "Access to 15+ leading UAE banks",
  "Competitive interest rates from 7% p.a.",
  "Flexible tenure up to 60 months",
  "Minimal documentation required",
  "Dedicated relationship manager",
];

const CalculatorSection = () => {
  const [turnover, setTurnover] = useState(5000000);

  const eligibleAmount = useMemo(() => {
    // Calculation: turnover divided by 8
    let amount = turnover / 8;

    // Cap at 3M
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
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Calculator */}
          <AnimatedSection direction="left">
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
          </AnimatedSection>

          {/* Right - Benefits */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
                  Why Choose TAAMUL?
                </p>
                <h2 className="text-display-sm text-foreground mb-4">
                  Fast, Transparent Business Loan Financing
                </h2>
                <p className="text-lg text-muted-foreground">
                  We've simplified the business loan process so you can focus on what matters most - growing your business.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <AnimatedItem key={benefit} index={index} baseDelay={0.3}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  </AnimatedItem>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild variant="default" size="lg">
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Talk to Expert</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
