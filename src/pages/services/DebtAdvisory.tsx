import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  Handshake,
  BarChart3,
  Building2,
  FileText,
  Shield,
  Target,
  Users,
  Zap,
  Brain,
  Landmark,
  ScrollText,
  LineChart,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import TaamulAdvantageSection from "@/components/loans/TaamulAdvantageSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [TrendingUp, RefreshCw, Handshake, BarChart3];
const whyChooseIcons = [Target, Users, Zap, Shield];

const DebtAdvisory = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      titleKey: "debtAdvisory.services.capitalStructure",
      descKey: "debtAdvisory.services.capitalStructureDesc",
    },
    {
      icon: RefreshCw,
      titleKey: "debtAdvisory.services.debtRefinancing",
      descKey: "debtAdvisory.services.debtRefinancingDesc",
    },
    {
      icon: Handshake,
      titleKey: "debtAdvisory.services.structuringNegotiation",
      descKey: "debtAdvisory.services.structuringNegotiationDesc",
    },
    {
      icon: BarChart3,
      titleKey: "debtAdvisory.services.riskAnalysis",
      descKey: "debtAdvisory.services.riskAnalysisDesc",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      titleKey: "debtAdvisory.whyChoose.strategicExpertise",
      descKey: "debtAdvisory.whyChoose.strategicExpertiseDesc",
    },
    {
      icon: Users,
      titleKey: "debtAdvisory.whyChoose.bankingRelationships",
      descKey: "debtAdvisory.whyChoose.bankingRelationshipsDesc",
    },
    {
      icon: Zap,
      titleKey: "debtAdvisory.whyChoose.fastExecution",
      descKey: "debtAdvisory.whyChoose.fastExecutionDesc",
    },
    {
      icon: Shield,
      titleKey: "debtAdvisory.whyChoose.riskMitigation",
      descKey: "debtAdvisory.whyChoose.riskMitigationDesc",
    },
  ];

  const benefits = ["b1", "b2", "b3", "b4", "b5", "b6"];
  const processSteps = ["p1", "p2", "p3", "p4", "p5"];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--background))] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl ${isRTL ? 'mr-0 ml-auto text-right' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--background))]/10 rounded-full text-[hsl(var(--background))]/90 text-sm font-medium backdrop-blur-sm mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Building2 className="h-4 w-4" />
              {t("debtAdvisory.badge")}
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              {t("debtAdvisory.title")}{" "}
              <span className="text-accent">{t("debtAdvisory.titleHighlight")}</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))]/80 mb-8 max-w-2xl">
              {t("debtAdvisory.description")}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t("debtAdvisory.getConsultation")}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">{t("common.contactUs")}</Link>
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

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-display-sm text-foreground mb-4">
              {t("debtAdvisory.servicesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("debtAdvisory.servicesDesc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taamul Advantage Section */}
      <TaamulAdvantageSection
        advantages={[
          {
            icon: Brain,
            title: "CFO-Level Strategic Insight",
            titleAr: "رؤية استراتيجية بمستوى المدير المالي",
            desc: "Our advisors think like your CFO — analyzing debt capacity, coverage ratios, and optimal leverage before approaching lenders.",
            descAr: "مستشارونا يفكرون كمديرك المالي — يحللون القدرة على الاقتراض ونسب التغطية والرافعة المالية المثلى قبل التواصل مع المقرضين.",
          },
          {
            icon: Landmark,
            title: "Lender-Side Experience",
            titleAr: "خبرة من جانب المقرض",
            desc: "Former bank credit officers on our team know exactly what lenders look for — giving your proposal an insider edge.",
            descAr: "مسؤولو الائتمان المصرفي السابقون في فريقنا يعرفون بالضبط ما يبحث عنه المقرضون — مما يمنح اقتراحك ميزة من الداخل.",
          },
          {
            icon: ScrollText,
            title: "Term Sheet Benchmarking",
            titleAr: "مقارنة معيارية لأوراق الشروط",
            desc: "We compare term sheets clause-by-clause across multiple banks to ensure you get the most borrower-friendly terms.",
            descAr: "نقارن أوراق الشروط بنداً بند عبر بنوك متعددة لضمان حصولك على أفضل الشروط الملائمة للمقترض.",
          },
          {
            icon: LineChart,
            title: "Debt Capacity Modeling",
            titleAr: "نمذجة القدرة على الاقتراض",
            desc: "Proprietary financial models stress-test your debt serviceability under multiple scenarios before bank submission.",
            descAr: "نماذج مالية خاصة تختبر قدرتك على خدمة الدين في سيناريوهات متعددة قبل التقديم للبنك.",
          },
          {
            icon: RefreshCw,
            title: "Refinancing Optimization",
            titleAr: "تحسين إعادة التمويل",
            desc: "We identify refinancing windows when market rates drop, saving clients an average of 0.5-1.5% on existing facilities.",
            descAr: "نحدد فرص إعادة التمويل عند انخفاض أسعار السوق، مما يوفر للعملاء بمعدل 0.5-1.5% على التسهيلات القائمة.",
          },
        ]}
        description="Strategic debt advisory that goes beyond loan placement — we optimize your entire capital structure for sustainable growth."
        descriptionAr="استشارات ديون استراتيجية تتجاوز ترتيب القروض — نحسّن هيكل رأس مالك بالكامل لنمو مستدام."
      />

      {/* Benefits & Process */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("debtAdvisory.keyBenefits")}</h3>
              </div>
              <div className="space-y-4">
                {benefits.map((key) => (
                  <div key={key} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{t(`debtAdvisory.benefits.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("debtAdvisory.ourProcess")}</h3>
              </div>
              <div className="space-y-4">
                {processSteps.map((key, index) => (
                  <div key={key} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-accent">{index + 1}</span>
                    </div>
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{t(`debtAdvisory.process.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              {t("debtAdvisory.ctaTitle")}
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              {t("debtAdvisory.ctaDesc")}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t("debtAdvisory.scheduleConsultation")}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">{t("debtAdvisory.learnAboutUs")}</Link>
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

export default DebtAdvisory;
