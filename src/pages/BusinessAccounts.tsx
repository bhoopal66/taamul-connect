import { Link } from "react-router-dom";
import {
  Wallet,
  Users,
  PiggyBank,
  Lock,
  Building2,
  Check,
  X,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const accountTypes = [
  {
    id: "current",
    icon: Wallet,
    title: "Current Account",
    description: "Day-to-day business transactions with unlimited access",
    minBalance: "AED 10,000",
    monthlyFee: "AED 50",
    interestRate: "0%",
    overdraftFacility: true,
    chequebook: true,
    debitCard: true,
    onlineBanking: true,
    multiCurrency: true,
    dedicatedManager: false,
    transactionLimit: "Unlimited",
    idealFor: "SMEs & Startups",
  },
  {
    id: "wps",
    icon: Users,
    title: "WPS Account",
    description: "Wage Protection System compliant payroll management",
    minBalance: "AED 0",
    monthlyFee: "Free",
    interestRate: "0%",
    overdraftFacility: false,
    chequebook: false,
    debitCard: true,
    onlineBanking: true,
    multiCurrency: false,
    dedicatedManager: false,
    transactionLimit: "50/month",
    idealFor: "Employees",
  },
  {
    id: "savings",
    icon: PiggyBank,
    title: "Business Savings",
    description: "Earn competitive interest on your idle business funds",
    minBalance: "AED 25,000",
    monthlyFee: "Free",
    interestRate: "Up to 3.5%",
    overdraftFacility: false,
    chequebook: false,
    debitCard: true,
    onlineBanking: true,
    multiCurrency: true,
    dedicatedManager: false,
    transactionLimit: "6/month",
    idealFor: "Growing Businesses",
  },
  {
    id: "escrow",
    icon: Lock,
    title: "Escrow Account",
    description: "Secure third-party transactions with regulatory compliance",
    minBalance: "AED 100,000",
    monthlyFee: "AED 200",
    interestRate: "1.5%",
    overdraftFacility: false,
    chequebook: true,
    debitCard: false,
    onlineBanking: true,
    multiCurrency: true,
    dedicatedManager: true,
    transactionLimit: "As per agreement",
    idealFor: "Real Estate & Legal",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Account",
    description: "Enterprise-grade banking with premium services",
    minBalance: "AED 500,000",
    monthlyFee: "AED 500",
    interestRate: "Up to 2%",
    overdraftFacility: true,
    chequebook: true,
    debitCard: true,
    onlineBanking: true,
    multiCurrency: true,
    dedicatedManager: true,
    transactionLimit: "Unlimited",
    idealFor: "Large Enterprises",
  },
];

const features = [
  { key: "minBalance", label: "Minimum Balance" },
  { key: "monthlyFee", label: "Monthly Fee" },
  { key: "interestRate", label: "Interest Rate" },
  { key: "transactionLimit", label: "Transaction Limit" },
  { key: "idealFor", label: "Ideal For" },
];

const booleanFeatures = [
  { key: "overdraftFacility", label: "Overdraft Facility" },
  { key: "chequebook", label: "Chequebook" },
  { key: "debitCard", label: "Debit Card" },
  { key: "onlineBanking", label: "Online Banking" },
  { key: "multiCurrency", label: "Multi-Currency" },
  { key: "dedicatedManager", label: "Dedicated Relationship Manager" },
];

const requirements = [
  {
    title: "For UAE Mainland Companies",
    documents: [
      "Valid Trade License",
      "Memorandum of Association (MOA)",
      "Emirates ID of all partners/shareholders",
      "Passport copies of all partners/shareholders",
      "Proof of business address (Ejari/Tenancy contract)",
      "Board resolution for authorized signatories",
    ],
  },
  {
    title: "For Free Zone Companies",
    documents: [
      "Free Zone Trade License",
      "Certificate of Incorporation",
      "Share Certificate",
      "Emirates ID of all shareholders",
      "Passport copies of all shareholders",
      "Lease agreement from Free Zone authority",
    ],
  },
  {
    title: "For Offshore Companies",
    documents: [
      "Certificate of Incorporation",
      "Memorandum & Articles of Association",
      "Certificate of Good Standing",
      "Passport copies of all directors/shareholders",
      "Proof of residential address",
      "Reference letter from existing bank",
    ],
  },
];

const BusinessAccounts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              Business Accounts
            </p>
            <h1 className="text-display-md text-white mb-6">
              Choose the Right Account for Your Business
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Compare our range of business accounts and find the perfect fit for your company's banking needs.
            </p>
          </div>
        </div>
      </section>

      {/* Account Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {accountTypes.map((account) => (
              <div
                key={account.id}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <account.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {account.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {account.description}
                </p>
                <p className="text-primary font-semibold text-sm">
                  {account.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-sm text-foreground mb-4">
              Detailed Comparison
            </h2>
            <p className="text-lg text-muted-foreground">
              Review all features and requirements to make an informed decision.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-white font-semibold min-w-[180px]">
                    Feature
                  </TableHead>
                  {accountTypes.map((account) => (
                    <TableHead
                      key={account.id}
                      className="text-white font-semibold text-center min-w-[140px]"
                    >
                      {account.title}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Text Features */}
                {features.map((feature, index) => (
                  <TableRow
                    key={feature.key}
                    className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}
                  >
                    <TableCell className="font-medium text-foreground">
                      {feature.label}
                    </TableCell>
                    {accountTypes.map((account) => (
                      <TableCell
                        key={account.id}
                        className="text-center text-muted-foreground"
                      >
                        {account[feature.key as keyof typeof account] as string}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Boolean Features */}
                {booleanFeatures.map((feature, index) => (
                  <TableRow
                    key={feature.key}
                    className={
                      (features.length + index) % 2 === 0
                        ? "bg-muted/50"
                        : "bg-background"
                    }
                  >
                    <TableCell className="font-medium text-foreground">
                      {feature.label}
                    </TableCell>
                    {accountTypes.map((account) => (
                      <TableCell key={account.id} className="text-center">
                        {account[feature.key as keyof typeof account] ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-destructive mx-auto" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-sm text-foreground mb-4">
              Documentation Requirements
            </h2>
            <p className="text-lg text-muted-foreground">
              Prepare the following documents based on your company type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req) => (
              <div
                key={req.title}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm text-white mb-6">
              Ready to Open Your Business Account?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our team will help you choose the right account and guide you through the application process with our partner banks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/apply" className="flex items-center gap-2">
                  Start Application
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="tel:+97144521111" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Speak to an Advisor
                </a>
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

export default BusinessAccounts;
