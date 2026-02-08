import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const benefits = [
  "Prevent incomplete documentation delays",
  "Access to 15+ leading UAE banks",
  "Competitive interest rates from 7% p.a.",
  "Flexible tenure up to 48 months",
  "Minimal documentation required",
  "Dedicated relationship manager",
];

const CalculatorSection = () => {
  const [turnover, setTurnover] = useState(5000000);
  const [eiborTenor, setEiborTenor] = useState<"3_month" | "6_month">("3_month");
  const [months, setMonths] = useState<string>("12");
  const [spread, setSpread] = useState<string>("2");
  const [eiborRates, setEiborRates] = useState<{ "3_month": number; "6_month": number }>({
    "3_month": 3.5556,
    "6_month": 3.6764,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const { data } = await supabase
          .from("eibor_rates")
          .select("tenor, rate, rate_date")
          .in("tenor", ["3_month", "6_month"])
          .order("rate_date", { ascending: false })
          .limit(4);

        if (data && data.length > 0) {
          const latest: Record<string, number> = {};
          for (const r of data) {
            if (!latest[r.tenor]) latest[r.tenor] = parseFloat(String(r.rate));
          }
          setEiborRates((prev) => ({ ...prev, ...latest }));
        }
      } catch (err) {
        console.error("Failed to fetch EIBOR rates:", err);
      }
    };
    fetchRates();
  }, []);

  const eligibleAmount = useMemo(() => {
    let amount = turnover / 8;
    return Math.min(amount, 3000000);
  }, [turnover]);

  const loanEstimate = useMemo(() => {
    const principal = eligibleAmount;
    const baseRate = eiborRates[eiborTenor];
    const bankSpread = parseFloat(spread) || 0;
    const totalRate = baseRate + bankSpread;
    const numMonths = parseInt(months) || 12;
    const monthlyRate = totalRate / 100 / 12;

    if (principal <= 0 || monthlyRate <= 0 || numMonths <= 0) return { monthly: 0, totalRate: 0 };
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) / (Math.pow(1 + monthlyRate, numMonths) - 1);
    return { monthly, totalRate };
  }, [eligibleAmount, eiborTenor, eiborRates, spread, months]);

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
                    <label className="text-sm font-medium text-foreground">Annual Turnover</label>
                    <span className="text-lg font-bold text-primary">{formatCurrency(turnover)}</span>
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

                {/* EIBOR Tenor Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">EIBOR Base Rate</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["3_month", "6_month"] as const).map((tenor) => (
                      <button
                        key={tenor}
                        onClick={() => setEiborTenor(tenor)}
                        className={cn(
                          "px-4 py-3 rounded-xl border text-sm font-medium transition-all",
                          eiborTenor === tenor
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <span className="block text-xs text-muted-foreground mb-0.5">
                          {tenor === "3_month" ? "3 Month EIBOR" : "6 Month EIBOR"}
                        </span>
                        <span className="font-bold" dir="ltr">{eiborRates[tenor].toFixed(4)}%</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bank Spread & Months */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Bank Spread (%)</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        value={spread}
                        onChange={(e) => setSpread(e.target.value)}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Tenure (Months)</label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={months}
                      onChange={(e) => setMonths(e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* Minimum Requirement Note */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Minimum 1 year in business required</p>
                </div>
              </div>

              {/* Result */}
              <motion.div
                key={`${eligibleAmount}-${loanEstimate.monthly}`}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-6 rounded-2xl gradient-hero text-primary-foreground"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm opacity-80 mb-1">Estimated Eligible Amount</p>
                    <p className="text-3xl font-bold">{formatCurrency(eligibleAmount)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80 mb-1">Effective Rate</p>
                    <p className="text-xl font-bold">{loanEstimate.totalRate.toFixed(2)}%</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3 mb-4">
                  <p className="text-sm opacity-80 mb-1">Est. Monthly Payment ({months || 12} months)</p>
                  <p className="text-3xl font-bold" dir="ltr">
                    {loanEstimate.monthly > 0
                      ? formatCurrency(Math.round(loanEstimate.monthly))
                      : "—"}
                  </p>
                </div>
                <p className="text-xs opacity-70 mb-4">*Estimate only. Based on live EIBOR rates. Actual terms may vary.</p>
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
