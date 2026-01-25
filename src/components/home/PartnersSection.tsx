import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const partnerBanks = [
  { name: "RAKBANK", abbr: "RAKBANK" },
  { name: "UBL", abbr: "UBL" },
  { name: "Ruya Bank", abbr: "RUYA" },
  { name: "National Bank of Fujairah", abbr: "NBF" },
  { name: "WIO Bank", abbr: "WIO" },
  { name: "Mashreq Bank", abbr: "MASHREQ" },
];

const fintechPartners = [
  { name: "Credible X", abbr: "CREDIBLE X" },
  { name: "Flapcap", abbr: "FLAPCAP" },
  { name: "Comfi", abbr: "COMFI" },
  { name: "Funding Souq", abbr: "FUNDING SOUQ" },
  { name: "Zelo", abbr: "ZELO" },
  { name: "Flow 48", abbr: "FLOW 48" },
  { name: "in24", abbr: "IN24" },
  { name: "Flo 488", abbr: "FLO 488" },
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
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-40 h-20 bg-card rounded-xl shadow-sm flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all duration-300 group-hover:shadow-card">
                  <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {bank.abbr}
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
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-44 h-20 bg-card rounded-xl shadow-sm flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all duration-300 group-hover:shadow-card">
                  <span className="text-sm font-bold text-muted-foreground group-hover:text-accent transition-colors">
                    {partner.abbr}
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
