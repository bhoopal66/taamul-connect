import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Rocket,
  Percent,
  Users,
  Shield,
  FileText,
  Clock,
  Briefcase,
  Target,
  Handshake,
  TrendingUp,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import TaamulAdvantageSection from "@/components/loans/TaamulAdvantageSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SMELoans = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Rocket,
      title: t('loanPages.growthFocused'),
      description: t('loanPages.growthFocusedDesc'),
    },
    {
      icon: Clock,
      title: t('loanPages.fastProcessing'),
      description: t('loanPages.fastProcessingDesc'),
    },
    {
      icon: Users,
      title: t('loanPages.dedicatedSupport'),
      description: t('loanPages.dedicatedSupportDesc'),
    },
    {
      icon: Briefcase,
      title: t('loanPages.flexibleTerms'),
      description: t('loanPages.flexibleTermsDesc'),
    },
  ];

  const eligibility = [
    t('loanPages.eligibility3Years'),
    t('loanPages.minTurnover5M'),
    t('loanPages.validTradeLicenseEjari'),
    t('loanPages.noTurnoverDrop'),
    t('loanPages.auditedOrManagement'),
    t('loanPages.noMajorDefaults'),
  ];

  const documents = [
    t('loanPages.tradeLicenseMOA'),
    t('loanPages.financialStatements1to2'),
    t('loanPages.bankStatements6to12'),
    t('loanPages.vatReturns'),
    t('loanPages.passportCopies'),
    t('loanPages.businessPlanStartups'),
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
          <div className={`max-w-3xl ${isRTL ? 'mr-0 text-right' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--background))]/10 rounded-full text-[hsl(var(--background))]/90 text-sm font-medium backdrop-blur-sm mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Rocket className="h-4 w-4" />
              {t('loanPages.businessLoans')}
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              {t('loanPages.smeLoansTitle')}{" "}
              <span className="text-accent">{t('loanPages.smeLoansHighlight')}</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))] mb-8 max-w-2xl">
              {t('loanPages.smeLoansDesc')}
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
              {t('loanPages.smeLoansFeaturesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('loanPages.smeLoansFeaturesDesc')}
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

      {/* Taamul Advantage Section */}
      <TaamulAdvantageSection
        advantages={[
          {
            icon: Target,
            title: "SME-Specialized Underwriting",
            titleAr: "اكتتاب متخصص للمنشآت الصغيرة",
            desc: "We understand SME cash flows and present your application in the format banks prefer for faster approvals.",
            descAr: "نفهم التدفقات النقدية للمنشآت الصغيرة ونقدم طلبك بالصيغة التي تفضلها البنوك لموافقات أسرع.",
          },
          {
            icon: Handshake,
            title: "Startup-Friendly Lender Access",
            titleAr: "وصول لمقرضين صديقين للشركات الناشئة",
            desc: "Direct relationships with banks and fintechs that actively welcome businesses with 1-3 years of operations.",
            descAr: "علاقات مباشرة مع بنوك وشركات تقنية مالية ترحب بالمنشآت التي لديها 1-3 سنوات من العمليات.",
          },
          {
            icon: TrendingUp,
            title: "Growth-Stage Structuring",
            titleAr: "هيكلة مرحلة النمو",
            desc: "We structure repayment schedules aligned with your revenue growth trajectory, not rigid bank templates.",
            descAr: "نهيكل جداول السداد بما يتوافق مع مسار نمو إيراداتك، وليس قوالب البنوك الجامدة.",
          },
          {
            icon: Zap,
            title: "Accelerated Processing",
            titleAr: "معالجة متسارعة",
            desc: "Pre-vetted documentation packages mean your SME application moves to credit committee faster.",
            descAr: "حزم التوثيق المُدققة مسبقاً تعني انتقال طلب منشأتك إلى لجنة الائتمان بشكل أسرع.",
          },
          {
            icon: Users,
            title: "Dedicated SME Relationship Manager",
            titleAr: "مدير علاقات مخصص للمنشآت الصغيرة",
            desc: "A single point of contact who speaks your language and fights for the best terms on your behalf.",
            descAr: "نقطة اتصال واحدة تتحدث لغتك وتسعى للحصول على أفضل الشروط نيابة عنك.",
          },
        ]}
        description="We've built our reputation helping SMEs and startups navigate the UAE lending landscape — so you can focus on building your business."
        descriptionAr="بنينا سمعتنا في مساعدة المنشآت الصغيرة والمتوسطة والناشئة على التنقل في بيئة الإقراض الإماراتية — لتتمكن من التركيز على بناء أعمالك."
      />

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
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{item}</p>
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
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{item}</p>
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
              {t('loanPages.smeLoansCtaTitle')}
            </h2>
            <p className="text-xl text-[hsl(var(--background))] mb-10">
              {t('loanPages.smeLoansCtaDesc')}
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

export default SMELoans;