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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
          <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
            {t('servicesSection.title')}
          </p>
          <h2 className="text-display-sm text-foreground mb-4">
            {t('servicesSection.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('servicesSection.description')}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <AnimatedItem key={service.titleKey} index={index} baseDelay={0.05}>
              <Link
                to={service.href}
                className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20 block h-full ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('servicesSection.learnMore')}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </span>
              </Link>
            </AnimatedItem>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection delay={0.3} direction="none" className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('servicesSection.talkToExpert')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
