import { Link } from "react-router-dom";
import { ArrowRight, Building2, Landmark, Wallet, CreditCard, Building, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const partnerBanks = [
  { 
    name: "RAKBANK", 
    abbr: "RAK", 
    color: "from-red-600 to-red-800",
    textColor: "text-white",
    icon: Landmark
  },
  { 
    name: "UBL", 
    abbr: "UBL", 
    color: "from-green-600 to-green-800",
    textColor: "text-white",
    icon: Building2
  },
  { 
    name: "Ruya Bank", 
    abbr: "RUYA", 
    color: "from-teal-500 to-teal-700",
    textColor: "text-white",
    icon: Wallet
  },
  { 
    name: "National Bank of Fujairah", 
    abbr: "NBF", 
    color: "from-blue-700 to-blue-900",
    textColor: "text-white",
    icon: Building
  },
  { 
    name: "WIO Bank", 
    abbr: "WIO", 
    color: "from-purple-600 to-purple-800",
    textColor: "text-white",
    icon: CreditCard
  },
  { 
    name: "Mashreq Bank", 
    abbr: "MSQ", 
    color: "from-orange-500 to-orange-700",
    textColor: "text-white",
    icon: Banknote
  },
];

const fintechPartners = [
  { 
    name: "Credible X", 
    abbr: "CX", 
    color: "from-indigo-500 to-indigo-700",
    textColor: "text-white"
  },
  { 
    name: "Flapcap", 
    abbr: "FC", 
    color: "from-cyan-500 to-cyan-700",
    textColor: "text-white"
  },
  { 
    name: "Comfi", 
    abbr: "CF", 
    color: "from-rose-500 to-rose-700",
    textColor: "text-white"
  },
  { 
    name: "Funding Souq", 
    abbr: "FS", 
    color: "from-amber-500 to-amber-700",
    textColor: "text-white"
  },
  { 
    name: "Zelo", 
    abbr: "ZL", 
    color: "from-emerald-500 to-emerald-700",
    textColor: "text-white"
  },
  { 
    name: "Flow 48", 
    abbr: "F48", 
    color: "from-violet-500 to-violet-700",
    textColor: "text-white"
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <AnimatedSection className="text-center">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide text-sm">
            Our Partners
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Banking & Fintech Partners
          </h2>
        </AnimatedSection>
      </div>

      {/* Banking Partners Marquee */}
      <AnimatedSection delay={0.2} direction="none">
        <p className="text-center text-sm font-medium text-muted-foreground mb-4">Banking Partners</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...partnerBanks, ...partnerBanks].map((bank, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 group"
              >
                <div className={`w-44 h-24 bg-gradient-to-br ${bank.color} rounded-xl shadow-md flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}>
                  <bank.icon className={`h-6 w-6 ${bank.textColor} mb-1 opacity-80`} />
                  <span className={`text-lg font-bold ${bank.textColor}`}>
                    {bank.abbr}
                  </span>
                  <span className={`text-[10px] ${bank.textColor} opacity-75 mt-0.5`}>
                    {bank.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Fintech Partners Marquee */}
      <AnimatedSection delay={0.3} direction="none" className="mt-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-4">Fintech Partners</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />
          
          <div className="flex animate-marquee-reverse">
            {[...fintechPartners, ...fintechPartners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 group"
              >
                <div className={`w-40 h-24 bg-gradient-to-br ${partner.color} rounded-xl shadow-md flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}>
                  <span className={`text-2xl font-black ${partner.textColor}`}>
                    {partner.abbr}
                  </span>
                  <span className={`text-[10px] ${partner.textColor} opacity-75 mt-1`}>
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Button */}
      <AnimatedSection delay={0.4} direction="none" className="text-center mt-10">
        <Button asChild variant="default" size="lg">
          <Link to="/contact" className="flex items-center gap-2">
            Talk to Expert
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </AnimatedSection>
    </section>
  );
};

export default PartnersSection;
