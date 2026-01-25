import { Link } from "react-router-dom";
import {
  Wallet,
  Users,
  PiggyBank,
  Lock,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";
import { useLanguage } from "@/contexts/LanguageContext";

const BusinessAccountsSection = () => {
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

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
          <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
            {t('businessAccountsSection.title')}
          </p>
          <h2 className="text-display-sm text-foreground mb-4">
            {t('businessAccountsSection.heading')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('businessAccountsSection.description')}
          </p>
        </AnimatedSection>

        {/* Account Types */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {accountTypes.map((account, index) => (
            <AnimatedItem key={account.titleKey} index={index} baseDelay={0.1}>
              <div className={`flex flex-col items-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 min-w-[180px] ${isRTL ? 'text-right' : 'text-center'}`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <account.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(account.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(account.descKey)}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* CTA Button */}
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
  );
};

export default BusinessAccountsSection;
