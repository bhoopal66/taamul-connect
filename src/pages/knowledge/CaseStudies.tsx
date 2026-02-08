import { motion } from "framer-motion";
import { Award, TrendingUp, Clock, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CaseStudy {
  clientKey: string;
  industryKey: string;
  challengeKey: string;
  solutionKey: string;
  resultKeys: string[];
  statBefore: string;
  statAfter: string;
  statLabel: string;
  fundingAmount: string;
  timeline: string;
}

const caseStudies: CaseStudy[] = [
  {
    clientKey: "caseStudies.case1.client",
    industryKey: "caseStudies.case1.industry",
    challengeKey: "caseStudies.case1.challenge",
    solutionKey: "caseStudies.case1.solution",
    resultKeys: [
      "caseStudies.case1.result1",
      "caseStudies.case1.result2",
      "caseStudies.case1.result3",
    ],
    statBefore: "AED 1.2M",
    statAfter: "AED 8M",
    statLabel: "caseStudies.fundingSecured",
    fundingAmount: "AED 8,000,000",
    timeline: "14 days",
  },
  {
    clientKey: "caseStudies.case2.client",
    industryKey: "caseStudies.case2.industry",
    challengeKey: "caseStudies.case2.challenge",
    solutionKey: "caseStudies.case2.solution",
    resultKeys: [
      "caseStudies.case2.result1",
      "caseStudies.case2.result2",
      "caseStudies.case2.result3",
    ],
    statBefore: "0",
    statAfter: "AED 3.5M",
    statLabel: "caseStudies.fundingSecured",
    fundingAmount: "AED 3,500,000",
    timeline: "21 days",
  },
  {
    clientKey: "caseStudies.case3.client",
    industryKey: "caseStudies.case3.industry",
    challengeKey: "caseStudies.case3.challenge",
    solutionKey: "caseStudies.case3.solution",
    resultKeys: [
      "caseStudies.case3.result1",
      "caseStudies.case3.result2",
      "caseStudies.case3.result3",
    ],
    statBefore: "AED 5M",
    statAfter: "AED 25M",
    statLabel: "caseStudies.fundingSecured",
    fundingAmount: "AED 25,000,000",
    timeline: "30 days",
  },
  {
    clientKey: "caseStudies.case4.client",
    industryKey: "caseStudies.case4.industry",
    challengeKey: "caseStudies.case4.challenge",
    solutionKey: "caseStudies.case4.solution",
    resultKeys: [
      "caseStudies.case4.result1",
      "caseStudies.case4.result2",
      "caseStudies.case4.result3",
    ],
    statBefore: "AED 800K",
    statAfter: "AED 4.2M",
    statLabel: "caseStudies.fundingSecured",
    fundingAmount: "AED 4,200,000",
    timeline: "10 days",
  },
];

const StatCard = ({ label, value, icon: Icon, isRTL }: { label: string; value: string; icon: any; isRTL: boolean }) => (
  <div className={cn("flex items-center gap-3 bg-muted rounded-xl p-4", isRTL && "flex-row-reverse")}>
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-bold text-foreground" dir="ltr">{value}</p>
    </div>
  </div>
);

const CaseStudies = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTJ2NGgyem0tMzAgMGgyVjBoLTJ2NHptMjcgMjVhMSAxIDAgMCAxLTIgMCAxIDEgMCAwIDEgMiAwem0tMjAgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={cn("text-center max-w-3xl mx-auto", isRTL && "text-right")}
            >
              <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6", isRTL && "flex-row-reverse")}>
                <Award className="h-4 w-4" />
                {t("caseStudies.badge")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {t("caseStudies.heading")}
              </h1>
              <p className="text-lg text-white/80">
                {t("caseStudies.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "AED 40M+", labelKey: "caseStudies.statTotalFunding" },
                { value: "120+", labelKey: "caseStudies.statClients" },
                { value: "98%", labelKey: "caseStudies.statApproval" },
                { value: "14 days", labelKey: "caseStudies.statAvgTime" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="text-center p-6 bg-card border border-border rounded-2xl shadow-card">
                    <p className="text-2xl lg:text-3xl font-bold text-primary" dir="ltr">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="space-y-16 max-w-5xl mx-auto">
              {caseStudies.map((cs, index) => (
                <AnimatedSection key={index}>
                  <div className="bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                    {/* Header bar */}
                    <div className={cn("bg-primary/5 border-b border-border px-6 py-4 flex items-center justify-between", isRTL && "flex-row-reverse")}>
                      <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{t(cs.clientKey)}</h3>
                          <p className="text-sm text-muted-foreground">{t(cs.industryKey)}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                        {t("caseStudies.caseLabel")} #{index + 1}
                      </span>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Challenge & Solution */}
                        <div className="space-y-6">
                          <div>
                            <h4 className={cn("text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2", isRTL && "text-right")}>
                              {t("caseStudies.challengeLabel")}
                            </h4>
                            <p className={cn("text-foreground", isRTL && "text-right")}>{t(cs.challengeKey)}</p>
                          </div>
                          <div>
                            <h4 className={cn("text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2", isRTL && "text-right")}>
                              {t("caseStudies.solutionLabel")}
                            </h4>
                            <p className={cn("text-foreground", isRTL && "text-right")}>{t(cs.solutionKey)}</p>
                          </div>
                        </div>

                        {/* Right: Results & Stats */}
                        <div className="space-y-6">
                          <div>
                            <h4 className={cn("text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3", isRTL && "text-right")}>
                              {t("caseStudies.resultsLabel")}
                            </h4>
                            <ul className="space-y-2">
                              {cs.resultKeys.map((rk, ri) => (
                                <li key={ri} className={cn("flex items-start gap-2 text-sm text-foreground", isRTL && "flex-row-reverse text-right")}>
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span>{t(rk)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Before/After Stats */}
                          <div className="grid grid-cols-2 gap-3">
                            <StatCard label={t("caseStudies.fundingAmount")} value={cs.fundingAmount} icon={TrendingUp} isRTL={isRTL} />
                            <StatCard label={t("caseStudies.approvalTime")} value={cs.timeline} icon={Clock} isRTL={isRTL} />
                          </div>

                          {/* Before → After */}
                          <div className={cn("flex items-center gap-3 bg-primary/5 rounded-xl p-4", isRTL && "flex-row-reverse")}>
                            <div className="text-center flex-1">
                              <p className="text-xs text-muted-foreground">{t("caseStudies.before")}</p>
                              <p className="text-lg font-bold text-muted-foreground" dir="ltr">{cs.statBefore}</p>
                            </div>
                            <ArrowRight className={cn("h-5 w-5 text-primary shrink-0", isRTL && "rotate-180")} />
                            <div className="text-center flex-1">
                              <p className="text-xs text-muted-foreground">{t("caseStudies.after")}</p>
                              <p className="text-lg font-bold text-primary" dir="ltr">{cs.statAfter}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <AnimatedSection className="container mx-auto px-4">
            <div className={cn("text-center max-w-2xl mx-auto", isRTL && "text-right")}>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("caseStudies.ctaTitle")}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t("caseStudies.ctaDesc")}</p>
              <Button asChild size="lg">
                <Link to="/contact">{t("caseStudies.ctaButton")}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default CaseStudies;
