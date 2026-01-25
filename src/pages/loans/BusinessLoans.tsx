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
import { useLanguage } from "@/contexts/LanguageContext";

const banks = [
  { id: "wio", name: "Wio Bank", maxLimit: 1000000 },
  { id: "rak", name: "RAK Bank", maxLimit: 5000000 },
];

const BusinessLoans = () => {
  const { t, isRTL } = useLanguage();
  const [turnover, setTurnover] = useState(5000000);
  const [posTurnover, setPosTurnover] = useState(2000000);
  const [selectedBank, setSelectedBank] = useState("wio");

  const features = [
    {
      icon: Banknote,
      titleKey: "loanPages.flexibleAmounts",
      descKey: "loanPages.flexibleAmountsDesc",
    },
    {
      icon: Percent,
      titleKey: "loanPages.competitiveRates",
      descKey: "loanPages.competitiveRatesDesc",
    },
    {
      icon: Calendar,
      titleKey: "loanPages.longTenure",
      descKey: "loanPages.longTenureDesc",
    },
    {
      icon: Clock,
      titleKey: "loanPages.quickApproval",
      descKey: "loanPages.quickApprovalDesc",
    },
  ];

  const eligibility = [
    "loanPages.eligibility1Year",
    "loanPages.minTurnover500K",
    "loanPages.validTradeLicense",
    "loanPages.auditedFinancials2Years",
    "loanPages.positiveCredit",
    "loanPages.uaeResidenceVisa",
  ];

  const documents = [
    "loanPages.tradeLicenseMOA",
    "businessLoansPage.auditedFinancials2Years",
    "loanPages.bankStatements12",
    "businessLoansPage.companyProfile",
    "loanPages.passportCopies",
    "loanPages.vatReturns",
  ];

  const eligibleAmount = useMemo(() => {
    let amount = turnover / 8;
    return Math.min(amount, 3000000);
  }, [turnover]);

  const posEligibleAmount = useMemo(() => {
    const bank = banks.find((b) => b.id === selectedBank);
    const calculated = posTurnover * 0.8;
    return Math.min(calculated, bank?.maxLimit || 1000000);
  }, [posTurnover, selectedBank]);

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
          <div className={`max-w-3xl ${isRTL ? 'mr-0 text-right' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--background))]/10 rounded-full text-[hsl(var(--background))]/90 text-sm font-medium backdrop-blur-sm mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Building2 className="h-4 w-4" />
              {t('loanPages.businessLoans')}
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              {t('loanPages.businessLoansTitle')}{" "}
              <span className="text-accent">{t('loanPages.businessLoansHighlight')}</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))] mb-8 max-w-2xl">
              {t('loanPages.businessLoansDesc')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.contactUs')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#calculator" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('loanPages.checkEligibility')}
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

      {/* Features Section with Calculator */}
      <section id="calculator" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-foreground mb-4">
              {t('loanPages.businessLoansFeaturesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('loanPages.businessLoansFeaturesDesc')}
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.titleKey}
                  className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${isRTL ? 'text-right' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ${isRTL ? 'ml-auto' : ''}`}>
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(feature.descKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* Calculator */}
            <div className={`bg-card rounded-3xl p-8 shadow-elevated border border-border ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                  <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <label className="text-sm font-medium text-foreground">
                      {t('businessLoansPage.annualTurnover')}
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
                  <div className={`flex justify-between text-xs text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>AED 500K</span>
                    <span>AED 100M</span>
                  </div>
                </div>

                {/* Minimum Requirement Note */}
                <div className={`flex items-center gap-2 p-3 bg-muted rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {t('businessLoansPage.minRequirement')}
                  </p>
                </div>
              </div>

              {/* Result */}
              <motion.div 
                key={eligibleAmount}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`mt-8 p-6 rounded-2xl gradient-hero text-primary-foreground ${isRTL ? 'text-right' : ''}`}
              >
                <p className="text-sm opacity-80 mb-1">{t('businessLoansPage.estimatedAmount')}</p>
                <p className="text-4xl font-bold mb-2">
                  {formatCurrency(eligibleAmount)}
                </p>
                <p className="text-xs opacity-70 mb-4">{t('businessLoansPage.estimateDisclaimer')}</p>
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/contact" className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('common.talkToExpert')}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <p className={`text-sm text-muted-foreground text-center mt-8 ${isRTL ? 'text-right' : ''}`}>
            {t('loanPages.disclaimer')}
          </p>
        </div>
      </section>

      {/* Taamul Advantage Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-white mb-4">
              {t('loanPages.taamulAdvantage').split('Taamul')[0]}
              <span className="text-accent">{t('loanPages.taamul')}</span>
              {' '}{t('loanPages.advantage')}
            </h2>
            <p className="text-lg text-white/80">
              {t('loanPages.advantageDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BadgeCheck,
                titleKey: "loanPages.authorizedDSA",
                descKey: "loanPages.authorizedDSADesc",
              },
              {
                icon: Shield,
                titleKey: "loanPages.noConsultancyFees",
                descKey: "loanPages.noConsultancyFeesDesc",
              },
              {
                icon: Building2,
                titleKey: "loanPages.multipleFundingOptions",
                descKey: "loanPages.multipleFundingOptionsDesc",
              },
              {
                icon: Zap,
                titleKey: "loanPages.smeStartupFriendly",
                descKey: "loanPages.smeStartupFriendlyDesc",
              },
              {
                icon: FileText,
                titleKey: "loanPages.endToEndSupport",
                descKey: "loanPages.endToEndSupportDesc",
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                  <advantage.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(advantage.titleKey)}</h3>
                <p className="text-sm text-white/70">{t(advantage.descKey)}</p>
              </motion.div>
            ))}
          </div>
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
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium backdrop-blur-sm mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <CreditCard className="h-4 w-4" />
              {t('businessLoansPage.posFinancing')}
            </div>
            <h2 className="text-display-sm text-white mb-4">
              {t('businessLoansPage.howPosWorks').split('POS')[0]}
              <span className="text-accent">{t('businessLoansPage.posLoan')}</span>
              {t('businessLoansPage.howPosWorks').split('POS Loan')[1] || ' ' + t('businessLoansPage.works')}
            </h2>
            <p className="text-lg text-white/80">
              {t('businessLoansPage.posDesc')}
            </p>
          </div>

          {/* How It Works Steps */}
          <div className={`grid md:grid-cols-4 gap-6 mb-16 ${isRTL ? 'md:grid-flow-dense' : ''}`}>
            {[
              {
                step: "01",
                icon: FileText,
                titleKey: "businessLoansPage.sharePosData",
                descKey: "businessLoansPage.sharePosDataDesc",
              },
              {
                step: "02",
                icon: TrendingUp,
                titleKey: "businessLoansPage.analyzeSales",
                descKey: "businessLoansPage.analyzeSalesDesc",
              },
              {
                step: "03",
                icon: Calculator,
                titleKey: "businessLoansPage.loanCalculated",
                descKey: "businessLoansPage.loanCalculatedDesc",
              },
              {
                step: "04",
                icon: Banknote,
                titleKey: "businessLoansPage.quickDisbursement",
                descKey: "businessLoansPage.quickDisbursementDesc",
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
                <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-5xl font-bold text-white/20 mb-4">{item.step}</div>
                  <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-white/70">{t(item.descKey)}</p>
                </div>
                {index < 3 && !isRTL && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-white/40" />
                  </div>
                )}
                {index < 3 && isRTL && (
                  <div className="hidden md:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-white/40 rotate-180" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Interactive POS Calculator */}
          <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t('businessLoansPage.posCalculator')}</h3>
                <p className="text-sm text-white/70">{t('businessLoansPage.calculateEligible')}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Bank Selection */}
              <div>
                <label className={`block text-sm font-medium text-white/80 mb-3 ${isRTL ? 'text-right' : ''}`}>{t('businessLoansPage.selectBank')}</label>
                <div className="grid grid-cols-2 gap-3">
                  {banks.map((bank) => (
                    <button
                      key={bank.id}
                      onClick={() => setSelectedBank(bank.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 text-center ${
                        selectedBank === bank.id
                          ? "bg-accent/20 border-accent text-white"
                          : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <p className="font-semibold">{bank.name}</p>
                      <p className="text-xs text-white/60 mt-1">{t('businessLoansPage.max')}: {formatCurrency(bank.maxLimit)}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnover Slider */}
              <div>
                <div className={`flex justify-between items-center mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <label className="text-sm font-medium text-white/80">{t('businessLoansPage.annualPosTurnover')}</label>
                  <span className="text-lg font-bold text-accent">{formatCurrency(posTurnover)}</span>
                </div>
                <Slider
                  value={[posTurnover]}
                  onValueChange={(value) => setPosTurnover(value[0])}
                  min={500000}
                  max={10000000}
                  step={100000}
                  className="w-full"
                />
                <div className={`flex justify-between text-xs text-white/50 mt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>AED 500K</span>
                  <span>AED 10M</span>
                </div>
              </div>

              {/* Calculation Display */}
              <div className="bg-white/10 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <p className="text-xs text-white/60 mb-1">{t('businessLoansPage.annualTurnover')}</p>
                    <p className="text-lg font-bold text-white">{formatCurrency(posTurnover)}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-xl text-accent font-bold">× 80%</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-1">{t('businessLoansPage.bankMax')}</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrency(banks.find((b) => b.id === selectedBank)?.maxLimit || 0)}
                    </p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-4 text-center">
                  <p className="text-sm text-white/70 mb-1">{t('businessLoansPage.eligibleLoanAmount')}</p>
                  <p className="text-4xl font-bold text-accent">{formatCurrency(posEligibleAmount)}</p>
                </div>
              </div>
            </div>
            
            <p className={`text-sm text-white/60 text-center mt-6 ${isRTL ? 'text-right' : ''}`}>
              {t('businessLoansPage.posDisclaimer')}
            </p>
          </div>

          {/* Eligibility & Benefits Grid */}
          <div className={`grid lg:grid-cols-2 gap-8 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* POS Eligibility */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">{t('businessLoansPage.posEligibility')}</h3>
              </div>
              <div className="space-y-3">
                {[
                  "businessLoansPage.posElig1",
                  "businessLoansPage.posElig2",
                  "businessLoansPage.posElig3",
                  "businessLoansPage.posElig4",
                  "businessLoansPage.posElig5",
                  "businessLoansPage.posElig6",
                ].map((key, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">{t('businessLoansPage.whyPosFinancing')}</h3>
              </div>
              <div className="space-y-3">
                {[
                  "businessLoansPage.posBenefit1",
                  "businessLoansPage.posBenefit2",
                  "businessLoansPage.posBenefit3",
                  "businessLoansPage.posBenefit4",
                  "businessLoansPage.posBenefit5",
                ].map((key, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('businessLoansPage.talkAboutPos')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Eligibility */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('loanPages.eligibilityCriteria')}</h3>
              </div>
              <div className="space-y-4">
                {eligibility.map((key, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('loanPages.requiredDocuments')}</h3>
              </div>
              <div className="space-y-4">
                {documents.map((key, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{t(key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className={`text-sm text-muted-foreground text-center mt-8 ${isRTL ? 'text-right' : ''}`}>
            {t('loanPages.documentsDisclaimer')}
          </p>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(var(--background))] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-[hsl(var(--background))] mb-6">
              {t('loanPages.businessLoansCtaTitle')}
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              {t('loanPages.businessLoansCtaDesc')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.contactUs')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">{t('common.talkToExpert')}</Link>
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
