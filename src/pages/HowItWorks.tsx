import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare,
  FileCheck, 
  Search, 
  Send, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Users
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your business needs, transaction volumes, and financing requirements to recommend the right solution.",
    icon: MessageSquare,
    details: [
      "Business profile review",
      "Requirements assessment",
      "Solution recommendation",
      "Timeline discussion"
    ]
  },
  {
    number: "02",
    title: "Document Collection",
    description: "Our team collects and reviews all required documentation to ensure a complete, error-free application.",
    icon: FileCheck,
    details: [
      "Trade License & MOA",
      "VAT returns (last 4 Qtrs)",
      "Bank statements",
      "Passport & EID copies"
    ]
  },
  {
    number: "03",
    title: "Bank Selection",
    description: "Based on your profile, we match you with the most suitable banks from our partner network for higher approval rates.",
    icon: Search,
    details: [
      "Compare multiple bank offers",
      "Match terms to your needs",
      "Negotiate best rates",
      "Present top options"
    ]
  },
  {
    number: "04",
    title: "Application Submission",
    description: "We submit your application directly to the bank and follow up on your behalf throughout the process.",
    icon: Send,
    details: [
      "Complete application filing",
      "Document submission",
      "Bank coordination",
      "Progress tracking"
    ]
  },
  {
    number: "05",
    title: "Approval",
    description: "Bank reviews and approves your application. We assist with final setup and any additional services you need.",
    icon: CheckCircle2,
    details: [
      "Bank credit review",
      "Terms finalization",
      "Approval confirmation",
      "Account/loan activation"
    ]
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Your data is protected with bank-grade security throughout the process"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A relationship manager guides you through every step of the journey"
  },
  {
    icon: ArrowRight,
    title: "Expert Guidance",
    description: "Benefit from our deep industry knowledge and strong banking relationships"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h1>
            <p className="text-xl text-white mb-8">
              From application to disbursement, we've streamlined the business loan process 
              to get you funded faster with minimum hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg relative z-10">
                      <step.icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-grow bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <span className="text-sm font-bold text-primary tracking-wider">
                        STEP {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-1">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Process?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed every step to maximize efficiency and minimize your effort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Take the first step towards securing the funding your business needs. 
              Our team is ready to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  Talk to Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-6 max-w-2xl mx-auto">
              *Timeline is subject to customer risk profile and business activity. Final approval is at the sole discretion of the bank.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
