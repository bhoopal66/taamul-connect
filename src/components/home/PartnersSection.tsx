import { AnimatedSection } from "@/components/ui/animated-section";

const partnerBanks = [
  { name: "Emirates NBD", abbr: "ENBD" },
  { name: "First Abu Dhabi Bank", abbr: "FAB" },
  { name: "Abu Dhabi Commercial Bank", abbr: "ADCB" },
  { name: "Dubai Islamic Bank", abbr: "DIB" },
  { name: "Mashreq Bank", abbr: "MASHREQ" },
  { name: "Commercial Bank of Dubai", abbr: "CBD" },
  { name: "RAKBANK", abbr: "RAK" },
  { name: "National Bank of Fujairah", abbr: "NBF" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <AnimatedSection className="text-center">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide text-sm">
            Our Banking Partners
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Partnering with UAE's Leading Banks
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <AnimatedSection delay={0.2} direction="none">
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
                  <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {bank.abbr}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PartnersSection;
