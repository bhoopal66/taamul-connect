import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Banknote,
  Shield,
  Building,
  Building2,
  Cog,
  Ship,
  Users,
  TrendingUp,
  Layers,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, isRTL } = useLanguage();

  const faqItems = [
    {
      questionKey: "services.faq.q1",
      answerKey: "services.faq.a1",
    },
    {
      questionKey: "services.faq.q2",
      answerKey: "services.faq.a2",
    },
    {
      questionKey: "services.faq.q3",
      answerKey: "services.faq.a3",
    },
    {
      questionKey: "services.faq.q4",
      answerKey: "services.faq.a4",
    },
  ];

  const loanServices = [
    {
      icon: Landmark,
      titleKey: "loanServices.businessLoans",
      descKey: "loanServices.businessLoansDesc",
      href: "/loans/business-loans",
    },
    {
      icon: Banknote,
      titleKey: "loanServices.workingCapital",
      descKey: "loanServices.workingCapitalDesc",
      href: "/loans/working-capital",
    },
    {
      icon: Shield,
      titleKey: "loanServices.securedLoans",
      descKey: "loanServices.securedLoansDesc",
      href: "/loans/secured-loans",
    },
    {
      icon: Building,
      titleKey: "loanServices.smeLoans",
      descKey: "loanServices.smeLoansDesc",
      href: "/loans/sme-loans",
    },
    {
      icon: Building2,
      titleKey: "loanServices.corporateLoans",
      descKey: "loanServices.corporateLoansDesc",
      href: "/loans/corporate-loans",
    },
    {
      icon: Cog,
      titleKey: "loanServices.equipmentFinancing",
      descKey: "loanServices.equipmentFinancingDesc",
      href: "/loans/equipment-financing",
    },
    {
      icon: Ship,
      titleKey: "loanServices.tradeFinance",
      descKey: "loanServices.tradeFinanceDesc",
      href: "/loans/trade-finance",
    },
    {
      icon: Users,
      titleKey: "loanServices.syndicatedLoans",
      descKey: "loanServices.syndicatedLoansDesc",
      href: "/loans/syndicated",
    },
  ];

  const advisoryServices = [
    {
      icon: TrendingUp,
      titleKey: "advisoryServices.debtAdvisory",
      descKey: "advisoryServices.debtAdvisoryDesc",
      href: "/services/debt-advisory",
    },
    {
      icon: Layers,
      titleKey: "advisoryServices.mezzanineFinancing",
      descKey: "advisoryServices.mezzanineFinancingDesc",
      href: "/services/mezzanine-financing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className={`max-w-5xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
              <p className="font-semibold mb-4 uppercase tracking-widest text-sm text-gold">
                {t('services.title')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('services.heading')}{" "}
                <span className="text-gold">{t('services.headingHighlight')}</span>
              </h1>
              <p className={`text-lg md:text-xl text-white max-w-3xl ${isRTL ? 'mr-0' : 'mx-auto'} mb-10`}>
                {t('services.description')}
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button size="xl" variant="hero" asChild>
                  <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('services.getStarted')}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </Button>
                <Button size="xl" variant="heroOutline" asChild>
                  <Link to="/how-it-works">{t('services.seeHowItWorks')}</Link>
                </Button>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${isRTL ? 'text-right' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm text-white">{t('services.partnerBanks')}</div>
              </div>
              <div className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${isRTL ? 'text-right' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">AED 500M+</div>
                <div className="text-sm text-white">{t('hero.loansFacilitated')}</div>
              </div>
              <div className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${isRTL ? 'text-right' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</div>
                <div className="text-sm text-white">{t('services.financingProducts')}</div>
              </div>
              <div className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${isRTL ? 'text-right' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
                <div className="text-sm text-white">{t('services.freeConsultation')}</div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className={`flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Shield className="h-5 w-5" />
                <span className="text-sm">{t('services.secureConfidential')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">{t('services.uaeLicensed')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Users className="h-5 w-5" />
                <span className="text-sm">{t('services.dedicatedExperts')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Building2 className="h-5 w-5" />
                <span className="text-sm">{t('services.allBusinessSizes')}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Loan Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                {t('services.loanServices')}
              </p>
            </div>
            <h2 className="text-display-sm text-foreground mb-4">
              {t('services.businessFinancingProducts')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('services.loanServicesDesc')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {loanServices.map((service, index) => (
              <AnimatedItem key={service.titleKey} index={index} baseDelay={0.05}>
                <div className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-accent/20 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {t(service.descKey)}
                      </p>
                      <Link
                        to={service.href}
                        className={`inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {t('common.learnMore')}
                        <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-1 w-12 bg-accent rounded-full"></div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                {t('services.advisoryServices')}
              </p>
            </div>
            <h2 className="text-display-sm text-foreground mb-4">
              {t('services.strategicFinancial')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('services.advisoryServicesDesc')}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => (
              <AnimatedItem key={service.titleKey} index={index} baseDelay={0.05}>
                <div className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-transparent hover:border-accent/20 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {t(service.descKey)}
                      </p>
                      <Link
                        to={service.href}
                        className={`inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {t('common.learnMore')}
                        <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`mb-12 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-accent font-semibold uppercase tracking-wide text-sm">
                {t('services.faqTitle')}
              </p>
            </div>
            <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <div>
                <h2 className="text-display-sm text-foreground mb-4">
                  {t('services.faqHeading')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  {t('services.faqDesc')}
                </p>
              </div>
              <Button variant="outline" asChild className="shrink-0">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <HelpCircle className="h-4 w-4" />
                  {t('contact.needImmediate')}
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className={`bg-card rounded-xl border border-border px-6 shadow-card ${isRTL ? 'text-right' : ''}`}
                  >
                    <AccordionTrigger className={`text-foreground font-semibold hover:text-primary py-6 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                      {t(faq.questionKey)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {t(faq.answerKey)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-primary-foreground mb-6">
              {t('ctaSection.heading')}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {t('ctaSection.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.getStarted')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">{t('common.contactUs')}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
