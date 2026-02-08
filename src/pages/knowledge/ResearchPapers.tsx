import { BookOpen } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";

const ResearchPapers = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="container mx-auto px-4 relative z-10">
            <div className={cn("text-center max-w-3xl mx-auto", isRTL && "text-right")}>
              <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6", isRTL && "flex-row-reverse")}>
                <BookOpen className="h-4 w-4" />
                {t("nav.researchPapers")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t("nav.researchPapers")}</h1>
              <p className="text-lg text-white">{t("nav.researchPapersDesc")}</p>
            </div>
          </div>
        </section>
        <section className="py-24 bg-background">
          <AnimatedSection className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{isRTL ? "قريباً" : "Coming Soon"}</h2>
              <p className="text-muted-foreground">{isRTL ? "نحن نعمل على نشر أبحاث ودراسات متعمقة حول سوق التمويل في الإمارات." : "We're working on publishing in-depth research and studies about the UAE financing market."}</p>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ResearchPapers;
