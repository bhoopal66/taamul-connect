import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Ship,
  Percent,
  Clock,
  Shield,
  FileText,
  FileCheck,
  CreditCard,
  Globe,
  Package,
  Anchor,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const TradeFinance = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: FileCheck,
      title: t('loanPages.lettersOfCredit'),
      description: t('loanPages.lettersOfCreditDesc'),
    },
    {
      icon: Ship,
      title: t('loanPages.importExportFinance'),
      description: t('loanPages.importExportFinanceDesc'),
    },
    {
      icon: CreditCard,
      title: t('loanPages.bankGuarantees'),
      description: t('loanPages.bankGuaranteesDesc'),
    },
    {
      icon: Clock,
      title: t('loanPages.quickApproval'),
      description: t('loanPages.quickApprovalDesc'),
    },
  ];

  const eligibility = [
    "Established import/export business in UAE",
    "Minimum 2 years of trade operations",
    "Annual trade volume of AED 5 million+",
    "Valid import/export code and licenses",
    "Established relationships with suppliers/buyers",
    "Clean track record with customs authorities",
  ];

  const documents = [
    t('loanPages.tradeLicenseMOA'),
    "Import/Export code registration",
    t('loanPages.bankStatements6to12'),
    t('loanPages.passportCopies'),
    t('loanPages.vatReturns'),
    "Supplier/Buyer contracts and insurance policy",
  ];

  const fundingOptions = [
    {
      title: "Letters of Credit (LC)",
      desc: "Bank-backed LCs for secure international transactions.",
    },
    {
      title: "Import/Export Financing",
      desc: "Pre and post-shipment financing for smooth trade operations.",
    },
    {
      title: "Bank Guarantees",
      desc: "Performance, advance payment, and bid bond guarantees.",
    },
    {
      title: "Documentary Collections",
      desc: "Secure payment processing through banking channels.",
    },
    {
      title: "Trade Credit Insurance",
      desc: "Protect against buyer default and political risks.",
    },
    {
      title: "Supply Chain Financing",
      desc: "Optimize working capital across your supply chain.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Banking partnerships across major trade corridors worldwide",
    },
    {
      icon: Package,
      title: "End-to-End Support",
      description: "From LC issuance to shipment tracking and payment release",
    },
    {
      icon: Anchor,
      title: "Port Expertise",
      description: "Deep understanding of UAE's major port operations",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Secure transactions with trusted banking instruments",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--background))] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={isRTL ? 'text-right lg:col-start-2' : ''}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--background))]/10 rounded-full text-[hsl(var(--background))]/90 text-sm font-medium backdrop-blur-sm mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Ship className="h-4 w-4" />
                {t('loanPages.tradeFinanceTitle')}
              </div>

              <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
                {t('loanPages.tradeFinanceTitle')}{" "}
                <span className="text-accent">{t('loanPages.tradeFinanceHighlight')}</span>
              </h1>

              <p className="text-xl text-[hsl(var(--background))] mb-8 max-w-2xl">
                {t('loanPages.tradeFinanceDesc')}
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('common.contactUs')}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Funding Options Card */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`bg-white rounded-2xl p-6 shadow-elevated ${isRTL ? 'lg:col-start-1 text-right' : ''}`}
            >
              <h3 className={`text-xl font-bold text-primary mb-5 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <FileCheck className="h-5 w-5 text-accent" />
                Funding Options
              </h3>
              <div className="space-y-4">
                {fundingOptions.map((item, index) => (
                  <div key={index} className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-primary font-medium text-base">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-foreground mb-4">
              {t('loanPages.tradeFinanceFeaturesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('loanPages.tradeFinanceFeaturesDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${isRTL ? 'text-right' : ''}`}>
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ${isRTL ? 'ml-auto' : ''}`}>
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <p className={`text-sm text-muted-foreground text-center mt-8 ${isRTL ? 'text-right' : ''}`}>
            {t('loanPages.disclaimer')}
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
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-white mb-4">
              {isRTL ? (
                <><span className="text-accent">{t('loanPages.taamul')}</span> {t('loanPages.advantage')}</>
              ) : (
                <>The <span className="text-accent">{t('loanPages.taamul')}</span> {t('loanPages.advantage')}</>
              )}
            </h2>
            <p className="text-lg text-white/80">
              {t('loanPages.advantageDesc')}
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
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
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
          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right lg:col-start-2' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('loanPages.eligibilityCriteria')}</h3>
              </div>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right lg:col-start-1' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t('loanPages.requiredDocuments')}</h3>
              </div>
              <div className="space-y-4">
                {documents.map((item, index) => (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
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
              {t('loanPages.tradeFinanceCtaTitle')}
            </h2>
            <p className="text-xl text-[hsl(var(--background))] mb-10">
              {t('loanPages.tradeFinanceCtaDesc')}
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

export default TradeFinance;