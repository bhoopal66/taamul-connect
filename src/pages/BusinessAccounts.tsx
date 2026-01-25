import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  PiggyBank,
  Lock,
  Building2,
  Check,
  ArrowRight,
  Phone,
  Shield,
  Zap,
  Globe,
  Clock,
  Award,
  Headphones,
  MessageSquare,
  Search,
  FileCheck,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { useLanguage } from "@/contexts/LanguageContext";

const BusinessAccounts = () => {
  const { t, isRTL } = useLanguage();

  const accountTypes = [
    {
      icon: Wallet,
      titleKey: "businessAccountsSection.currentAccount",
      descKey: "businessAccountsSection.currentAccountDesc",
    },
    {
      icon: Users,
      titleKey: "businessAccountsSection.wpsAccount",
      descKey: "businessAccountsSection.wpsAccountDesc",
    },
    {
      icon: PiggyBank,
      titleKey: "businessAccountsSection.businessSavings",
      descKey: "businessAccountsSection.businessSavingsDesc",
    },
    {
      icon: Lock,
      titleKey: "businessAccountsSection.escrowAccount",
      descKey: "businessAccountsSection.escrowAccountDesc",
    },
    {
      icon: Building2,
      titleKey: "businessAccountsSection.corporateAccount",
      descKey: "businessAccountsSection.corporateAccountDesc",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: MessageSquare,
      titleKey: "businessAccounts.process.consultation",
      durationKey: "businessAccounts.process.consultationDuration",
      descKey: "businessAccounts.process.consultationDesc",
    },
    {
      step: "02",
      icon: FileCheck,
      titleKey: "businessAccounts.process.documentCollection",
      durationKey: "businessAccounts.process.documentCollectionDuration",
      descKey: "businessAccounts.process.documentCollectionDesc",
    },
    {
      step: "03",
      icon: Search,
      titleKey: "businessAccounts.process.bankSelection",
      durationKey: "businessAccounts.process.bankSelectionDuration",
      descKey: "businessAccounts.process.bankSelectionDesc",
    },
    {
      step: "04",
      icon: Send,
      titleKey: "businessAccounts.process.applicationSubmission",
      durationKey: "businessAccounts.process.applicationSubmissionDuration",
      descKey: "businessAccounts.process.applicationSubmissionDesc",
    },
    {
      step: "05",
      icon: CheckCircle2,
      titleKey: "businessAccounts.process.approval",
      durationKey: "businessAccounts.process.approvalDuration",
      descKey: "businessAccounts.process.approvalDesc",
    },
  ];

  const requirements = [
    {
      titleKey: "businessAccounts.forMainland",
      documentsKeys: [
        "businessAccounts.documents.mainland.tradeLicense",
        "businessAccounts.documents.mainland.moa",
        "businessAccounts.documents.mainland.emiratesId",
        "businessAccounts.documents.mainland.passport",
        "businessAccounts.documents.mainland.address",
        "businessAccounts.documents.mainland.boardResolution",
      ],
    },
    {
      titleKey: "businessAccounts.forFreeZone",
      documentsKeys: [
        "businessAccounts.documents.freezone.tradeLicense",
        "businessAccounts.documents.freezone.incorporation",
        "businessAccounts.documents.freezone.shareCertificate",
        "businessAccounts.documents.freezone.emiratesId",
        "businessAccounts.documents.freezone.passport",
        "businessAccounts.documents.freezone.lease",
      ],
    },
    {
      titleKey: "businessAccounts.forOffshore",
      documentsKeys: [
        "businessAccounts.documents.offshore.incorporation",
        "businessAccounts.documents.offshore.moa",
        "businessAccounts.documents.offshore.goodStanding",
        "businessAccounts.documents.offshore.passport",
        "businessAccounts.documents.offshore.address",
        "businessAccounts.documents.offshore.reference",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      titleKey: "businessAccounts.benefits.bankSecurity",
      descKey: "businessAccounts.benefits.bankSecurityDesc",
    },
    {
      icon: Zap,
      titleKey: "businessAccounts.benefits.fastOpening",
      descKey: "businessAccounts.benefits.fastOpeningDesc",
    },
    {
      icon: Globe,
      titleKey: "businessAccounts.benefits.multiCurrency",
      descKey: "businessAccounts.benefits.multiCurrencyDesc",
    },
    {
      icon: Clock,
      titleKey: "businessAccounts.benefits.clientFocus",
      descKey: "businessAccounts.benefits.clientFocusDesc",
    },
    {
      icon: Award,
      titleKey: "businessAccounts.benefits.partnerNetwork",
      descKey: "businessAccounts.benefits.partnerNetworkDesc",
    },
    {
      icon: Headphones,
      titleKey: "businessAccounts.benefits.dedicatedSupport",
      descKey: "businessAccounts.benefits.dedicatedSupportDesc",
    },
  ];

  const faqs = [
    { questionKey: "businessAccounts.faqItems.q1", answerKey: "businessAccounts.faqItems.a1" },
    { questionKey: "businessAccounts.faqItems.q2", answerKey: "businessAccounts.faqItems.a2" },
    { questionKey: "businessAccounts.faqItems.q3", answerKey: "businessAccounts.faqItems.a3" },
    { questionKey: "businessAccounts.faqItems.q4", answerKey: "businessAccounts.faqItems.a4" },
    { questionKey: "businessAccounts.faqItems.q5", answerKey: "businessAccounts.faqItems.a5" },
    { questionKey: "businessAccounts.faqItems.q6", answerKey: "businessAccounts.faqItems.a6" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Building2 className="h-4 w-4" />
              {t('businessAccounts.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t('businessAccounts.heading')} <br className="hidden md:block" />
              <span className="text-accent">{t('businessAccounts.headingHighlight')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white mb-10 max-w-2xl mx-auto"
            >
              {t('businessAccounts.description')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <Button asChild variant="hero" size="xl">
                <a href="#accounts" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('businessAccounts.exploreAccounts')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  {t('common.contactUs')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`text-center max-w-3xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              {t('businessAccounts.whyChooseUs')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('businessAccounts.businessBankingSimple')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('businessAccounts.businessBankingDesc')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedItem key={index} index={index} baseDelay={0.1}>
                <div className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors ${isRTL ? 'ml-auto' : ''}`}>
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(benefit.descKey)}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types Grid */}
      <section id="accounts" className="py-20 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`text-center max-w-3xl mx-auto mb-12 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              {t('businessAccounts.accountTypes')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('businessAccounts.weHelpOpen')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('businessAccounts.accountTypesDesc')}
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {accountTypes.map((account, index) => (
              <AnimatedItem key={index} index={index} baseDelay={0.1}>
                <div className={`flex flex-col items-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 min-w-[180px] border border-border hover:border-primary/30 ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <account.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                    {t(account.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {t(account.descKey)}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedSection delay={0.3} direction="none" className="text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('common.talkToExpert')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`text-center max-w-3xl mx-auto mb-14 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              {t('businessAccounts.ourProcess')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('businessAccounts.howWeHelp')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('businessAccounts.processDesc')}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-border hidden md:block`} />
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <AnimatedItem key={step.step} index={index} baseDelay={0.1}>
                    <div className={`flex gap-6 items-start group ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <step.icon className="h-7 w-7" />
                        </div>
                        <span className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center`}>
                          {step.step}
                        </span>
                      </div>
                      <div className={`flex-1 pb-8 ${isRTL ? 'text-right' : ''}`}>
                        <div className={`flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <h3 className="text-xl font-semibold text-foreground">
                            {t(step.titleKey)}
                          </h3>
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <Clock className="h-3 w-3" />
                            {t(step.durationKey)}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(step.descKey)}
                        </p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>

          {/* Total Timeline Badge */}
          <AnimatedSection delay={0.4} direction="none" className="mt-12 text-center">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                {t('businessAccounts.totalDays')}
              </span>
            </div>
            <p className={`text-sm text-muted-foreground max-w-2xl mx-auto mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('businessAccounts.processDisclaimer')}
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('common.talkToExpert')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className={`text-center max-w-3xl mx-auto mb-12 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              {t('businessAccounts.requiredDocuments')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('businessAccounts.documentationReqs')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('businessAccounts.documentationDesc')}
            </p>
          </AnimatedSection>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? 'md:grid-flow-dense' : ''}`}>
            {requirements.map((req, index) => (
              <AnimatedItem key={index} index={index} baseDelay={0.1}>
                <div className={`bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 group h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {t(req.titleKey)}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {req.documentsKeys.map((docKey) => (
                      <li key={docKey} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{t(docKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            ))}
          </div>

          <AnimatedSection delay={0.3} direction="none" className="mt-8 text-center">
            <p className={`text-sm text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {t('businessAccounts.documentsDisclaimer')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
              <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
                {t('businessAccounts.faq')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('businessAccounts.commonQuestions')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('businessAccounts.faqDesc')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-card transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                  >
                    <AccordionTrigger className={`text-foreground hover:no-underline py-5 text-lg font-medium ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                      {t(faq.questionKey)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {t(faq.answerKey)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className={`max-w-3xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('businessAccounts.ctaHeading')}
            </h2>
            <p className="text-xl text-white mb-10">
              {t('businessAccounts.ctaDesc')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.contactUs')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="tel:+97144521111" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="h-5 w-5" />
                  {t('businessAccounts.speakToAdvisor')}
                </a>
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

export default BusinessAccounts;
