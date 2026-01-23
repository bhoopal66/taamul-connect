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

const accountTypes = [
  {
    icon: Wallet,
    title: "Current Account",
    description: "Day-to-day business transactions",
  },
  {
    icon: Users,
    title: "Salary Account",
    description: "Streamlined payroll management",
  },
  {
    icon: PiggyBank,
    title: "Business Savings",
    description: "Earn interest on idle funds",
  },
  {
    icon: Lock,
    title: "Escrow Account",
    description: "Secure third-party transactions",
  },
  {
    icon: Building2,
    title: "Corporate Account",
    description: "Enterprise-grade banking solutions",
  },
];

const BusinessAccountsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
            Business Accounts
          </p>
          <h2 className="text-display-sm text-foreground mb-4">
            Open the Right Account for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We help you choose and open the perfect business account with our partner banks.
          </p>
        </div>

        {/* Account Types */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {accountTypes.map((account, index) => (
            <div
              key={account.title}
              className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 min-w-[180px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <account.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                {account.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {account.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="cta" size="xl">
            <Link to="/business-accounts" className="flex items-center gap-2">
              Compare All Account Types
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountsSection;
