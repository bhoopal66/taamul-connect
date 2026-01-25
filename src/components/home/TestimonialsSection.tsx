import { Link } from "react-router-dom";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote: "TAAMUL helped us secure AED 8 million in working capital within just 3 weeks. Their team understood our industry and found us the perfect banking partner.",
    author: "Alex",
    position: "CEO",
    company: "FORE FRONT FACILITIES MANAGEMENT LLC",
    rating: 5,
  },
  {
    quote: "As an SME, we struggled to get traditional bank financing. TAAMUL's expertise opened doors we didn't know existed. Highly recommended for any business owner.",
    author: "Kashif",
    position: "Consultant",
    company: "Kurshid Impex",
    rating: 5,
  },
  {
    quote: "The transparency and professionalism throughout the process was exceptional. They negotiated rates that saved us over AED 200,000 in interest over the loan term.",
    author: "Sivakrishman",
    position: "GM",
    company: "EIL",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wide text-sm">
            Testimonials
          </p>
          <h2 className="text-display-sm text-foreground mb-4">
            Trusted by Businesses Across the UAE
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about their experience working with TAAMUL.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={index} index={index} baseDelay={0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 relative h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Quote className="h-4 w-4 text-accent-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatedSection delay={0.3} direction="none" className="text-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/contact" className="flex items-center gap-2">
              Talk to Expert
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
