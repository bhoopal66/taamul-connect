import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, ChevronDown, ChevronUp, Calculator, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface EIBORRate {
  tenor: string;
  tenorAr: string;
  rate: number;
  change: number;
  highlighted?: boolean;
}

const eiborRates: EIBORRate[] = [
  { tenor: "Overnight", tenorAr: "ليلة واحدة", rate: 5.2400, change: 0.0000 },
  { tenor: "1 Month", tenorAr: "شهر واحد", rate: 5.1250, change: -0.0050 },
  { tenor: "3 Month", tenorAr: "٣ أشهر", rate: 4.9310, change: -0.0120, highlighted: true },
  { tenor: "6 Month", tenorAr: "٦ أشهر", rate: 4.7680, change: 0.0030 },
  { tenor: "1 Year", tenorAr: "سنة واحدة", rate: 4.6150, change: -0.0080 },
];

const panelBanks = [
  { name: "Abu Dhabi Commercial Bank (ADCB)", rate: 4.9300 },
  { name: "Emirates NBD", rate: 4.9320 },
  { name: "HSBC", rate: 4.9310 },
  { name: "Mashreq Bank", rate: 4.9280 },
  { name: "First Abu Dhabi Bank (FAB)", rate: 4.9330 },
  { name: "Dubai Islamic Bank (DIB)", rate: 4.9290 },
  { name: "Abu Dhabi Islamic Bank (ADIB)", rate: 4.9310 },
  { name: "Commercial Bank of Dubai (CBD)", rate: 4.9320 },
  { name: "National Bank of Fujairah (NBF)", rate: 4.9300 },
];

const ChangeIndicator = ({ change }: { change: number }) => {
  if (change === 0) return <span className="flex items-center gap-1 text-muted-foreground"><Minus className="h-3.5 w-3.5" /> 0.0000</span>;
  if (change > 0) return <span className="flex items-center gap-1 text-emerald-600"><TrendingUp className="h-3.5 w-3.5" /> +{change.toFixed(4)}</span>;
  return <span className="flex items-center gap-1 text-red-500"><TrendingDown className="h-3.5 w-3.5" /> {change.toFixed(4)}</span>;
};

const InterestEstimator = ({ baseRate, isRTL, t }: { baseRate: number; isRTL: boolean; t: (key: string) => string }) => {
  const [loanAmount, setLoanAmount] = useState<string>("1000000");
  const [spread, setSpread] = useState<string>("2");

  const result = useMemo(() => {
    const principal = parseFloat(loanAmount) || 0;
    const bankSpread = parseFloat(spread) || 0;
    const totalRate = baseRate + bankSpread;
    const monthlyRate = totalRate / 100 / 12;
    const months = 12;
    if (principal <= 0 || monthlyRate <= 0) return { monthly: 0, totalRate: 0 };
    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return { monthly, totalRate };
  }, [loanAmount, spread, baseRate]);

  return (
    <div className={cn("bg-card border border-border rounded-2xl p-6 shadow-card", isRTL && "text-right")}>
      <div className={cn("flex items-center gap-2 mb-5", isRTL && "flex-row-reverse")}>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{t('eiborDashboard.estimator')}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t('eiborDashboard.loanAmount')}</label>
          <div className={cn("relative", isRTL && "text-right")}>
            <span className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground text-sm", isRTL ? "right-3" : "left-3")}>AED</span>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className={cn(
                "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                isRTL ? "pr-12 text-right" : "pl-12"
              )}
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t('eiborDashboard.bankSpread')}</label>
          <div className={cn("relative", isRTL && "text-right")}>
            <input
              type="number"
              step="0.1"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
              className={cn(
                "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                isRTL ? "pl-8 text-right" : "pr-8"
              )}
            />
            <span className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground text-sm", isRTL ? "left-3" : "right-3")}>%</span>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-4 space-y-2">
          <div className={cn("flex justify-between items-center text-sm", isRTL && "flex-row-reverse")}>
            <span className="text-muted-foreground">{t('eiborDashboard.effectiveRate')}</span>
            <span className="font-semibold text-foreground">{result.totalRate.toFixed(2)}%</span>
          </div>
          <div className={cn("flex justify-between items-center", isRTL && "flex-row-reverse")}>
            <span className="text-sm text-muted-foreground">{t('eiborDashboard.estMonthly')}</span>
            <span className="text-xl font-bold text-primary" dir="ltr">
              AED {result.monthly > 0 ? result.monthly.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—"}
            </span>
          </div>
          <p className="text-xs text-muted-foreground pt-1">{t('eiborDashboard.basedOn3M')}</p>
        </div>
      </div>
    </div>
  );
};

const EIBORDashboardSection = () => {
  const { t, isRTL } = useLanguage();
  const [bankFixingsOpen, setBankFixingsOpen] = useState(false);
  const threeMonthRate = eiborRates.find((r) => r.highlighted)?.rate ?? 4.931;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className={cn("text-center max-w-3xl mx-auto mb-12", isRTL && "text-right")}>
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground mb-4", isRTL && "flex-row-reverse")}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            {t('eiborDashboard.liveBadge')}
          </div>
          <h2 className="text-display-sm text-foreground mb-3">{t('eiborDashboard.heading')}</h2>
          <p className="text-lg text-muted-foreground">{t('eiborDashboard.description')}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* EIBOR Rates Table */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                {/* Desktop Table */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className={cn("px-6 py-4 text-sm font-semibold text-foreground", isRTL ? "text-right" : "text-left")}>{t('eiborDashboard.tenor')}</th>
                        <th className={cn("px-6 py-4 text-sm font-semibold text-foreground", isRTL ? "text-left" : "text-right")}>{t('eiborDashboard.rateCol')}</th>
                        <th className={cn("px-6 py-4 text-sm font-semibold text-foreground", isRTL ? "text-left" : "text-right")}>{t('eiborDashboard.dailyChange')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eiborRates.map((item) => (
                        <tr
                          key={item.tenor}
                          className={cn(
                            "border-b border-border last:border-0 transition-colors",
                            item.highlighted ? "bg-primary/5" : "hover:bg-muted/30"
                          )}
                        >
                          <td className={cn("px-6 py-4", isRTL ? "text-right" : "text-left")}>
                            <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                              <span className={cn("font-medium text-foreground", item.highlighted && "text-primary font-bold text-lg")}>
                                {isRTL ? item.tenorAr : item.tenor}
                              </span>
                              {item.highlighted && (
                                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                                  {t('eiborDashboard.benchmark')}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className={cn("px-6 py-4 font-mono", isRTL ? "text-left" : "text-right", item.highlighted ? "text-primary font-bold text-xl" : "text-foreground font-semibold")} dir="ltr">
                            {item.rate.toFixed(4)}%
                          </td>
                          <td className={cn("px-6 py-4 text-sm font-mono", isRTL ? "text-left" : "text-right")} dir="ltr">
                            <div className={cn("flex items-center", isRTL ? "justify-start" : "justify-end")}>
                              <ChangeIndicator change={item.change} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden divide-y divide-border">
                  {eiborRates.map((item) => (
                    <div
                      key={item.tenor}
                      className={cn("p-4", item.highlighted && "bg-primary/5")}
                    >
                      <div className={cn("flex justify-between items-start mb-2", isRTL && "flex-row-reverse")}>
                        <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                          <span className={cn("font-medium text-foreground", item.highlighted && "text-primary font-bold")}>
                            {isRTL ? item.tenorAr : item.tenor}
                          </span>
                          {item.highlighted && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                              {t('eiborDashboard.benchmark')}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-mono" dir="ltr">
                          <ChangeIndicator change={item.change} />
                        </div>
                      </div>
                      <div className={cn("font-mono", item.highlighted ? "text-primary font-bold text-2xl" : "text-foreground font-semibold text-lg")} dir="ltr">
                        {item.rate.toFixed(4)}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bank-Wise Fixings Drawer */}
                <div className="border-t border-border">
                  <button
                    onClick={() => setBankFixingsOpen(!bankFixingsOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-foreground hover:bg-muted/30 transition-colors",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                      <Building2 className="h-4 w-4 text-primary" />
                      {t('eiborDashboard.bankFixings')}
                    </div>
                    {bankFixingsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  
                  {bankFixingsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="divide-y divide-border">
                        {panelBanks.map((bank) => (
                          <div
                            key={bank.name}
                            className={cn("flex items-center justify-between px-6 py-3 text-sm hover:bg-muted/30 transition-colors", isRTL && "flex-row-reverse")}
                          >
                            <span className="text-foreground">{bank.name}</span>
                            <span className="font-mono font-semibold text-foreground" dir="ltr">{bank.rate.toFixed(4)}%</span>
                          </div>
                        ))}
                      </div>
                      <p className={cn("px-6 py-3 text-xs text-muted-foreground bg-muted/30", isRTL && "text-right")}>
                        {t('eiborDashboard.bankFixingsNote')}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Interest Estimator */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.2}>
              <InterestEstimator baseRate={threeMonthRate} isRTL={isRTL} t={t} />
            </AnimatedSection>
          </div>
        </div>

        {/* Disclaimer */}
        <p className={cn("text-xs text-muted-foreground text-center mt-8 max-w-3xl mx-auto", isRTL && "text-right")}>
          {t('eiborDashboard.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default EIBORDashboardSection;
