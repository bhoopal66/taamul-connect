import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  TrendingUp,
  Award,
  Building2,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Linkedin
} from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "Foundation",
    description: "TAAMUL Credit Review Services LLC was established in Dubai with a vision to simplify business financing in the UAE."
  },
  {
    year: "2023",
    title: "RAKBANK Partnership",
    description: "Established our first major lender partnership with RAKBANK, expanding access to business financing solutions."
  },
  {
    year: "2024",
    title: "UBL & Ruya Bank Partnerships",
    description: "Strengthened our lending network by partnering with UBL and Ruya Bank, offering more diverse financing options."
  },
  {
    year: "2025",
    title: "NBF & WIO Bank Partnerships",
    description: "Expanded partnerships with National Bank of Fujairah (NBF) and WIO Bank, further enhancing our lending capabilities."
  },
  {
    year: "2025",
    title: "Fintech Partnerships",
    description: "Partnered with leading fintech platforms including Credible X, Flapcap, Comfi, Funding Souq, Zelo, and Flow 48."
  }
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every client interaction and banking relationship."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We tailor solutions to meet your unique business needs and goals."
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for the highest standards in service delivery, continuously improving our processes."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships with clients and banks, founded on trust and mutual respect."
  }
];

const team = [
  {
    name: "Bhoopal Narayanaswamy",
    role: "Founder & CEO",
    bio: "Chartered Accountant with 30+ years' MENA experience, specializing in financial due diligence, structuring, investment management, audits, performance management, and CFO services.",
    image: null
  },
  {
    name: "Geetha Subramaniam",
    role: "Founder & Director",
    bio: "20+ years of experience in finance and management. CFA Level II candidate.",
    image: null
  }
];

const stats = [
  { value: "500+", label: "Businesses Funded" },
  { value: "AED 800M+", label: "Loans Facilitated" },
  { value: "10+", label: "Banking Partners" },
  { value: "95%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About TAAMUL
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              We are a trusted Direct Selling Agent (DSA) bridging the gap between 
              ambitious UAE businesses and the financing they need to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower UAE businesses with seamless access to tailored financing solutions. 
                We simplify the complex world of business lending by connecting companies with 
                the right banking partners, ensuring faster approvals, competitive rates, and 
                a hassle-free experience from application to disbursement.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted financial intermediary in the UAE, known for 
                transforming how businesses access capital. We envision a future where 
                every viable business can secure the funding it needs to thrive, supported 
                by technology and guided by expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small team with a big vision to a leading financial services partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Founders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Decades of combined experience in finance, banking, and business advisory
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group flex-1 max-w-md bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Avatar Section */}
                <div className="relative h-56 bg-gradient-to-br from-primary via-primary/80 to-navy-light overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/30 rounded-full" />
                  </div>
                  
                  {/* Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn */}
                  <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm font-medium">Connect</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Partner With TAAMUL?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We combine deep banking relationships, industry expertise, and a 
                  client-first approach to deliver financing solutions that truly 
                  work for your business.
                </p>
                <ul className="space-y-4">
                  {[
                    "Access to 10+ banking partners with competitive rates",
                    "Dedicated relationship manager for personalized service",
                    "Fast-track processing with average 7-10 day approval",
                    "No upfront fees - we succeed when you succeed",
                    "Expert guidance through every step of the process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Licensed DSA</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Dubai Based</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Expert Team</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Client First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white mb-8">
              Let's discuss how we can help your business secure the funding it needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
