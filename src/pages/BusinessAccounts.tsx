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

const accountTypes = [
  {
    icon: Wallet,
    title: "Current Account",
    description: "Day-to-day business transactions",
  },
  {
    icon: Users,
    title: "WPS Account",
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

const processSteps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    duration: "Day 1",
    description: "We understand your business needs, transaction volumes, and banking requirements to recommend the right account type.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Document Collection",
    duration: "1 Day",
    description: "Our team collects and reviews all required documentation to ensure a complete, error-free application.",
  },
  {
    step: "03",
    icon: Search,
    title: "Bank Selection",
    duration: "1-2 Days",
    description: "Based on your profile, we match you with the most suitable banks from our partner network for higher approval rates.",
  },
  {
    step: "04",
    icon: Send,
    title: "Application Submission",
    duration: "2-3 Days",
    description: "We submit your application directly to the bank and follow up on your behalf throughout the process.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Approval",
    duration: "4-7 Days",
    description: "Bank reviews and approves your application. We assist with account activation and online banking setup.",
  },
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

const benefits = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your funds are protected by world-class security protocols and insurance.",
  },
  {
    icon: Zap,
    title: "Fast Account Opening",
    description: "Get your business account set up within 5-7 working days with our streamlined process.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Conduct international business seamlessly with multi-currency account options.",
  },
  {
    icon: Clock,
    title: "24/7 Online Banking",
    description: "Access your accounts anytime, anywhere with our secure digital banking platform.",
  },
  {
    icon: Award,
    title: "Partner Bank Network",
    description: "Choose from UAE's top banks including ADCB, Mashreq, RAK Bank, and more.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our specialists guide you through the entire process from application to approval.",
  },
];

const faqs = [
  {
    question: "How long does it take to open a business account?",
    answer: "The account opening process typically takes 5-7 working days once all documents are submitted. Some banks may expedite the process for certain account types or existing customers.",
  },
  {
    question: "Can I open a business account without a physical office?",
    answer: "Yes, many free zone companies can open accounts using their free zone address. However, some banks may require proof of a physical business presence for certain account types.",
  },
  {
    question: "What is the minimum initial deposit required?",
    answer: "The minimum initial deposit varies by account type. Current accounts typically require AED 10,000, while corporate accounts may require AED 500,000 or more. WPS accounts have no minimum balance requirement.",
  },
  {
    question: "Can I open multiple business accounts with different banks?",
    answer: "Yes, you can open accounts with multiple banks. In fact, we recommend maintaining accounts with 2-3 banks for better financial flexibility and backup options.",
  },
  {
    question: "Do you help with account opening for new businesses?",
    answer: "Absolutely! We specialize in helping new businesses open their first corporate accounts. We'll guide you through the documentation requirements and connect you with banks that are most receptive to new business accounts.",
  },
  {
    question: "What if my application is rejected?",
    answer: "If your application is rejected by one bank, we'll help you understand the reasons and work with alternative banks that may be more suitable for your business profile. Our extensive network increases your chances of approval.",
  },
];

const BusinessAccounts = () => {

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6"
            >
              <Building2 className="h-4 w-4" />
              Business Banking Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Choose the Right Account <br className="hidden md:block" />
              <span className="text-accent">for Your Business</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Compare our range of business accounts across UAE's top banks and find the perfect fit for your company's banking needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild variant="hero" size="xl">
                <a href="#accounts" className="flex items-center gap-2">
                  Explore Accounts
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Banking Made Simple
            </h2>
            <p className="text-lg text-muted-foreground">
              We connect you with the best banking solutions tailored to your business needs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedItem key={index} index={index} baseDelay={0.1}>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
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
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              Account Types
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Help You Open Any Business Account
            </h2>
            <p className="text-lg text-muted-foreground">
              From current accounts to escrow solutions, we guide you to the right choice.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {accountTypes.map((account, index) => (
              <AnimatedItem key={account.title} index={index} baseDelay={0.1}>
                <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 min-w-[180px] border border-border hover:border-primary/30">
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
              </AnimatedItem>
            ))}
          </div>

          <AnimatedSection delay={0.3} direction="none" className="text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Talk to Expert
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Help You Open an Account
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined 5-step process ensures a smooth account opening experience.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <AnimatedItem key={step.step} index={index} baseDelay={0.1}>
                    <div className="flex gap-6 items-start group">
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <step.icon className="h-7 w-7" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </span>
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                            <Clock className="h-3 w-3" />
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                Total: <span className="text-primary">7-10 Days</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              *Timeline is subject to customer risk profile and business activity. We do not guarantee account opening; final approval is at the sole discretion of the bank.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* Requirements Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
              Required Documents
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Documentation Requirements
            </h2>
            <p className="text-lg text-muted-foreground">
              Prepare the following documents based on your company type.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <AnimatedItem key={req.title} index={index} baseDelay={0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {req.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {req.documents.map((doc) => (
                      <li key={doc} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about business accounts.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-card transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                      {faq.answer}
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
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Open Your Business Account?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Our team will help you choose the right account and guide you through the application process with our partner banks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
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
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BusinessAccounts;
