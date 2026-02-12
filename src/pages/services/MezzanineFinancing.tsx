import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  FileCheck,
  LifeBuoy,
  CalendarClock,
  Building2,
  FileText,
  Shield,
  Target,
  TrendingUp,
  Zap,
  Scale,
  Puzzle,
  Gem,
  ShieldCheck,
  PiggyBank,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import TaamulAdvantageSection from "@/components/loans/TaamulAdvantageSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const MezzanineFinancing = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Layers,
      titleKey: "mezzanineFinancing.services.structuredMezzanine",
      descKey: "mezzanineFinancing.services.structuredMezzanineDesc",
    },
    {
      icon: FileCheck,
      titleKey: "mezzanineFinancing.services.subordinatedDebt",
      descKey: "mezzanineFinancing.services.subordinatedDebtDesc",
    },
    {
      icon: LifeBuoy,
      titleKey: "mezzanineFinancing.services.specialSituations",
      descKey: "mezzanineFinancing.services.specialSituationsDesc",
    },
    {
      icon: CalendarClock,
      titleKey: "mezzanineFinancing.services.customPayment",
      descKey: "mezzanineFinancing.services.customPaymentDesc",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      titleKey: "mezzanineFinancing.whyChoose.tailoredStructures",
      descKey: "mezzanineFinancing.whyChoose.tailoredStructuresDesc",
    },
    {
      icon: TrendingUp,
      titleKey: "mezzanineFinancing.whyChoose.growthFocus",
      descKey: "mezzanineFinancing.whyChoose.growthFocusDesc",
    },
    {
      icon: Scale,
      titleKey: "mezzanineFinancing.whyChoose.balancedTerms",
      descKey: "mezzanineFinancing.whyChoose.balancedTermsDesc",
    },
    {
      icon: Zap,
      titleKey: "mezzanineFinancing.whyChoose.quickTurnaround",
      descKey: "mezzanineFinancing.whyChoose.quickTurnaroundDesc",
    },
  ];

  const benefits = ["b1", "b2", "b3", "b4", "b5", "b6"];
  const useCases = ["u1", "u2", "u3", "u4", "u5", "u6"];

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
              {t("mezzanineFinancing.badge")}
            </div>

            <h1 className="text-display-sm md:text-display text-[hsl(var(--background))] mb-6">
              {t("mezzanineFinancing.title")}{" "}
              <span className="text-accent">{t("mezzanineFinancing.titleHighlight")}</span>
            </h1>

            <p className="text-xl text-[hsl(var(--background))]/80 mb-8 max-w-2xl">
              {t("mezzanineFinancing.description")}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t("mezzanineFinancing.exploreOptions")}
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
              {t("mezzanineFinancing.servicesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("mezzanineFinancing.servicesDesc")}
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
            icon: Puzzle,
            title: "Hybrid Capital Architecture",
            titleAr: "هندسة رأس المال الهجين",
            desc: "We design bespoke mezzanine structures — convertible notes, PIK instruments, and equity kickers — tailored to your capital stack.",
            descAr: "نصمم هياكل ميزانين مخصصة — سندات قابلة للتحويل وأدوات PIK وحوافز أسهم — مصممة حسب هيكل رأس مالك.",
          },
          {
            icon: Gem,
            title: "Private Credit Network",
            titleAr: "شبكة ائتمان خاصة",
            desc: "Access to family offices, private debt funds, and alternative lenders actively deploying mezzanine capital in the GCC.",
            descAr: "وصول لمكاتب عائلية وصناديق ديون خاصة ومقرضين بديلين ينشرون رأس مال ميزانين بنشاط في الخليج.",
          },
          {
            icon: Scale,
            title: "Equity Dilution Protection",
            titleAr: "حماية من تخفيف حقوق الملكية",
            desc: "Mezzanine preserves ownership control. We structure terms that minimize dilution while maximizing growth capital.",
            descAr: "الميزانين يحافظ على السيطرة على الملكية. نهيكل شروطاً تقلل التخفيف مع تعظيم رأس مال النمو.",
          },
          {
            icon: ShieldCheck,
            title: "Senior Lender Coordination",
            titleAr: "تنسيق مع المقرض الأول",
            desc: "We manage inter-creditor negotiations between senior and mezzanine lenders to ensure smooth facility coexistence.",
            descAr: "ندير مفاوضات ما بين الدائنين الأوائل ومقرضي الميزانين لضمان تعايش سلس للتسهيلات.",
          },
          {
            icon: PiggyBank,
            title: "Flexible Repayment Engineering",
            titleAr: "هندسة سداد مرنة",
            desc: "PIK interest, bullet maturities, and cash-sweep mechanisms — we engineer repayment to match your cash generation cycle.",
            descAr: "فوائد PIK واستحقاقات نهائية وآليات مسح نقدي — نهندس السداد ليتوافق مع دورة توليد النقد لديك.",
          },
        ]}
        description="Mezzanine financing bridges the gap between senior debt and equity. Our team structures creative capital solutions for ambitious growth plans."
        descriptionAr="تمويل الميزانين يسد الفجوة بين الدين الأول وحقوق الملكية. فريقنا يهيكل حلول رأسمالية إبداعية لخطط النمو الطموحة."
      />

      {/* Benefits & Use Cases */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("mezzanineFinancing.keyBenefits")}</h3>
              </div>
              <div className="space-y-4">
                {benefits.map((key) => (
                  <div key={key} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{t(`mezzanineFinancing.benefits.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t("mezzanineFinancing.idealUseCases")}</h3>
              </div>
              <div className="space-y-4">
                {useCases.map((key) => (
                  <div key={key} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className={`text-foreground ${isRTL ? 'text-right flex-1' : ''}`}>{t(`mezzanineFinancing.useCases.${key}`)}</p>
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
              {t("mezzanineFinancing.ctaTitle")}
            </h2>
            <p className="text-xl text-[hsl(var(--background))]/80 mb-10">
              {t("mezzanineFinancing.ctaDesc")}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t("mezzanineFinancing.talkToExpert")}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/about">{t("mezzanineFinancing.learnAboutUs")}</Link>
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

export default MezzanineFinancing;
