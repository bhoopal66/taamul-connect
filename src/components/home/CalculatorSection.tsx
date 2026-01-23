import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const industries = [
  "Trading & Distribution",
  "Manufacturing",
  "Construction",
  "Retail",
  "Technology",
  "Healthcare",
  "Hospitality",
  "Professional Services",
  "Transportation & Logistics",
  "Real Estate",
  "Other",
];

const CalculatorSection = () => {
  const [turnover, setTurnover] = useState(5000000);
  const [yearsInBusiness, setYearsInBusiness] = useState("3-5");
  const [industry, setIndustry] = useState("Trading & Distribution");

  const eligibleAmount = useMemo(() => {
    // Base calculation: up to 50% of annual turnover
    let base = turnover * 0.5;

    // Adjust based on years in business
    const yearsMultiplier: Record<string, number> = {
      "1-2": 0.6,
      "3-5": 0.8,
      "5-10": 1.0,
      "10+": 1.2,
    };
    base *= yearsMultiplier[yearsInBusiness] || 0.8;

    // Industry adjustment (simplified)
    const riskierIndustries = ["Construction", "Real Estate", "Hospitality"];
    if (riskierIndustries.includes(industry)) {
      base *= 0.85;
    }

    return Math.min(base, 50000000); // Cap at 50M
  }, [turnover, yearsInBusiness, industry]);

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
          <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Loan Eligibility Calculator</h3>
                <p className="text-muted-foreground">Get an instant estimate</p>
              </div>
            </div>

            <div className="space-y-8">
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

              {/* Years in Business */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Years in Business
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["1-2", "3-5", "5-10", "10+"].map((years) => (
                    <button
                      key={years}
                      onClick={() => setYearsInBusiness(years)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        yearsInBusiness === years
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {years} years
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Selector */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="mt-8 p-6 rounded-2xl gradient-hero text-primary-foreground">
              <p className="text-sm opacity-80 mb-1">Estimated Eligible Amount</p>
              <p className="text-4xl font-bold mb-4">
                {formatCurrency(eligibleAmount)}
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Get Full Results
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
                Why Choose TAAMUL?
              </p>
              <h2 className="text-display-sm text-foreground mb-4">
                Fast, Transparent Business Financing
              </h2>
              <p className="text-lg text-muted-foreground">
                We've simplified the business loan process so you can focus on what matters most - growing your business.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Pre-approved offers within 48 hours",
                "Access to 15+ leading UAE banks",
                "Competitive interest rates from 7% p.a.",
                "Flexible tenure up to 60 months",
                "Minimal documentation required",
                "Dedicated relationship manager",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
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
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
