import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const CalculatorSection = () => {
  const { t, isRTL } = useLanguage();
  const [turnover, setTurnover] = useState(5000000);
  const [rateMode, setRateMode] = useState<"eibor" | "manual">("eibor");
  const [eiborTenor, setEiborTenor] = useState<"3_month" | "6_month">("3_month");
  const [months, setMonths] = useState<string>("12");
  const [spread, setSpread] = useState<string>("2");
  const [manualRate, setManualRate] = useState<string>("7");
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
    let totalRate: number;

    if (rateMode === "manual") {
      totalRate = parseFloat(manualRate) || 0;
    } else {
      const baseRate = eiborRates[eiborTenor];
      const bankSpread = parseFloat(spread) || 0;
      totalRate = baseRate + bankSpread;
    }

    const numMonths = parseInt(months) || 12;
    const monthlyRate = totalRate / 100 / 12;

    if (principal <= 0 || monthlyRate <= 0 || numMonths <= 0) return { monthly: 0, totalRate: 0 };
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numMonths)) / (Math.pow(1 + monthlyRate, numMonths) - 1);
    return { monthly, totalRate };
  }, [eligibleAmount, rateMode, eiborTenor, eiborRates, spread, manualRate, months]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AE", {
      style: "currency",
      currency: "AED",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const benefits = [
    t('businessLoansPage.benefit1'),
    t('businessLoansPage.benefit2'),
    t('businessLoansPage.benefit3'),
    t('businessLoansPage.benefit4'),
    t('businessLoansPage.benefit5'),
    t('businessLoansPage.benefit6'),
  ];

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Calculator */}
          <AnimatedSection direction={isRTL ? "right" : "left"}>
            <div className={cn("bg-card rounded-3xl p-8 shadow-elevated border border-border", isRTL && "text-right")}>
              <div className={cn("flex items-center gap-3 mb-8", isRTL && "flex-row-reverse")}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{t('businessLoansPage.loanCalculator')}</h3>
                  <p className="text-muted-foreground">{t('businessLoansPage.getInstantEstimate')}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Annual Turnover Slider */}
                <div className="space-y-4">
                  <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
                    <label className="text-sm font-medium text-foreground">{t('businessLoansPage.annualTurnover')}</label>
                    <span className="text-lg font-bold text-primary" dir="ltr">{formatCurrency(turnover)}</span>
                  </div>
                  <Slider
                    value={[turnover]}
                    onValueChange={(value) => setTurnover(value[0])}
                    min={500000}
                    max={100000000}
                    step={500000}
                    className="w-full"
                    dir="ltr"
                  />
                  <div className={cn("flex justify-between text-xs text-muted-foreground", isRTL && "flex-row-reverse")} dir="ltr">
                    <span>AED 500K</span>
                    <span>AED 100M</span>
                  </div>
                </div>

                {/* Rate Mode Toggle */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">{isRTL ? "طريقة تحديد سعر الفائدة" : "Interest Rate Method"}</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setRateMode("eibor")}
                      className={cn(
                        "px-4 py-2.5 rounded-xl border text-sm font-medium transition-all",
                        rateMode === "eibor"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {isRTL ? "إيبور + هامش" : "EIBOR + Spread"}
                    </button>
                    <button
                      onClick={() => setRateMode("manual")}
                      className={cn(
                        "px-4 py-2.5 rounded-xl border text-sm font-medium transition-all",
                        rateMode === "manual"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {isRTL ? "إدخال يدوي" : "Manual Rate"}
                    </button>
                  </div>
                </div>

                {rateMode === "eibor" ? (
                  <>
                    {/* EIBOR Tenor Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t('businessLoansPage.eiborBaseRate')}</label>
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
                              {tenor === "3_month" ? t('businessLoansPage.threeMonthEibor') : t('businessLoansPage.sixMonthEibor')}
                            </span>
                            <span className="font-bold" dir="ltr">{eiborRates[tenor].toFixed(4)}%</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bank Spread */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">{t('businessLoansPage.bankSpread')}</label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={spread}
                          onChange={(e) => setSpread(e.target.value)}
                          className={cn(
                            "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                            isRTL ? "pl-8 text-right" : "pr-8"
                          )}
                          dir="ltr"
                        />
                        <span className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground text-sm", isRTL ? "left-3" : "right-3")}>%</span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Manual Interest Rate */
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{isRTL ? "سعر الفائدة السنوي (%)" : "Annual Interest Rate (%)"}</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="30"
                        value={manualRate}
                        onChange={(e) => setManualRate(e.target.value)}
                        className={cn(
                          "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                          isRTL ? "pl-8 text-right" : "pr-8"
                        )}
                        dir="ltr"
                      />
                      <span className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground text-sm", isRTL ? "left-3" : "right-3")}>%</span>
                    </div>
                  </div>
                )}

                {/* Tenure */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('businessLoansPage.tenureMonths')}</label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className={cn(
                      "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                      isRTL && "text-right"
                    )}
                    dir="ltr"
                  />
                </div>

                {/* Minimum Requirement Note */}
                <div className={cn("flex items-center gap-2 p-3 bg-muted rounded-lg", isRTL && "flex-row-reverse")}>
                  <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{t('businessLoansPage.minRequirement')}</p>
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
                <div className={cn("flex justify-between items-center mb-3", isRTL && "flex-row-reverse")}>
                  <div>
                    <p className="text-sm opacity-80 mb-1">{t('businessLoansPage.estimatedAmount')}</p>
                    <p className="text-3xl font-bold" dir="ltr">{formatCurrency(eligibleAmount)}</p>
                  </div>
                  <div className={cn(isRTL ? "text-left" : "text-right")}>
                    <p className="text-sm opacity-80 mb-1">{t('businessLoansPage.effectiveRate')}</p>
                    <p className="text-xl font-bold" dir="ltr">{loanEstimate.totalRate.toFixed(2)}%</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3 mb-4">
                  <p className="text-sm opacity-80 mb-1">
                    {t('businessLoansPage.estMonthlyPayment')} ({months || 12} {isRTL ? "شهر" : "months"})
                    <span className="block text-xs opacity-60 mt-0.5">
                      {isRTL ? "محسوب على مبلغ القرض المؤهل" : "Calculated on eligible loan amount"}
                    </span>
                  </p>
                  <p className="text-3xl font-bold" dir="ltr">
                    {loanEstimate.monthly > 0
                      ? formatCurrency(Math.round(loanEstimate.monthly))
                      : "—"}
                  </p>
                </div>
                <p className="text-xs opacity-70 mb-4">{t('businessLoansPage.estimateDisclaimer')}</p>
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/contact" className={cn("flex items-center justify-center gap-2", isRTL && "flex-row-reverse")}>
                    {t('home.talkToExpert')}
                    <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Benefits */}
          <AnimatedSection direction={isRTL ? "left" : "right"} delay={0.1}>
            <div className={cn("space-y-8", isRTL && "text-right")}>
              <div>
                <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
                  {t('businessLoansPage.whyChooseTaamul')}
                </p>
                <h2 className="text-display-sm text-foreground mb-4">
                  {t('businessLoansPage.fastTransparent')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('businessLoansPage.fastTransparentDesc')}
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <AnimatedItem key={index} index={index} baseDelay={0.3}>
                    <div className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                      <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  </AnimatedItem>
                ))}
              </div>

              <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
                <Button asChild variant="default" size="lg">
                  <Link to="/how-it-works">{t('nav.howItWorks')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t('home.talkToExpert')}</Link>
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
