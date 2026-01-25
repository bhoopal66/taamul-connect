import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import teamBhoopal from "@/assets/team-bhoopal.jpg";
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
  CheckCircle2
} from "lucide-react";

const About = () => {
  const { t, isRTL } = useLanguage();

  const milestones = [
    {
      year: "2021",
      title: t('about.milestones.founded'),
      description: t('about.milestones.foundedDesc')
    },
    {
      year: "2023",
      title: t('about.milestones.rakbank'),
      description: t('about.milestones.rakbankDesc')
    },
    {
      year: "2024",
      title: t('about.milestones.ublRuya'),
      description: t('about.milestones.ublRuyaDesc')
    },
    {
      year: "2025",
      title: t('about.milestones.nbfWio'),
      description: t('about.milestones.nbfWioDesc')
    },
    {
      year: "2025",
      title: t('about.milestones.fintech'),
      description: t('about.milestones.fintechDesc')
    }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc')
    },
    {
      icon: Users,
      title: t('about.values.clientCentric'),
      description: t('about.values.clientCentricDesc')
    },
    {
      icon: TrendingUp,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc')
    },
    {
      icon: Handshake,
      title: t('about.values.partnership'),
      description: t('about.values.partnershipDesc')
    }
  ];

  const team = [
    {
      name: "Bhoopal Narayanaswamy",
      role: "Founder & CEO",
      bio: "Chartered Accountant with 30+ years' MENA experience, specializing in financial due diligence, structuring, investment management, audits, performance management, and CFO services.",
      image: teamBhoopal
    },
    {
      name: "Geetha Subramaniam",
      role: "Founder & Director",
      bio: "20+ years of experience in finance and management. CFA Level II candidate.",
      image: null
    }
  ];

  const stats = [
    { value: "500+", label: t('about.stats.businessesFunded') },
    { value: "AED 800M+", label: t('about.stats.loansFacilitated') },
    { value: "10+", label: t('about.stats.bankingPartners') },
    { value: "95%", label: t('about.stats.clientSatisfaction') }
  ];

  const benefits = [
    t('about.whyPartner.benefits.access'),
    t('about.whyPartner.benefits.dedicated'),
    t('about.whyPartner.benefits.fastTrack'),
    t('about.whyPartner.benefits.noUpfront'),
    t('about.whyPartner.benefits.expert')
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-navy-light">
        <div className="container mx-auto px-4">
          <div className={cn("max-w-4xl mx-auto text-center text-primary-foreground", isRTL && "text-right")}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className={cn("text-xl text-white mb-8 max-w-3xl mx-auto", isRTL && "mx-0")}>
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", isRTL && "direction-rtl")}>
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
          <div className={cn("grid md:grid-cols-2 gap-12 max-w-5xl mx-auto", isRTL && "direction-rtl")}>
            {/* Mission */}
            <div className={cn("bg-card rounded-2xl p-8 shadow-lg border border-border", isRTL && "text-right")}>
              <div className={cn("w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6", isRTL && "mr-0 ml-auto")}>
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.mission.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className={cn("bg-card rounded-2xl p-8 shadow-lg border border-border", isRTL && "text-right")}>
              <div className={cn("w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6", isRTL && "mr-0 ml-auto")}>
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.vision.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={cn("text-center mb-16", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.journey.title')}
            </h2>
            <p className={cn("text-muted-foreground max-w-2xl mx-auto", isRTL && "mx-0")}>
              {t('about.journey.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className={cn(
                "absolute top-0 bottom-0 w-0.5 bg-primary/20 transform",
                isRTL ? "right-4 md:right-1/2 md:translate-x-1/2" : "left-4 md:left-1/2 md:-translate-x-1/2"
              )} />

              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative flex items-start gap-8 mb-12 last:mb-0",
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className={cn(
                    "absolute w-4 h-4 bg-primary rounded-full transform mt-6 z-10 ring-4 ring-background",
                    isRTL ? "right-4 md:right-1/2 translate-x-1/2" : "left-4 md:left-1/2 -translate-x-1/2"
                  )} />

                  {/* Content */}
                  <div className={cn(
                    "md:w-1/2",
                    isRTL ? "mr-12 md:mr-0" : "ml-12 md:ml-0",
                    index % 2 === 0 
                      ? (isRTL ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right')
                      : (isRTL ? 'md:pr-12 md:text-right' : 'md:pl-12')
                  )}>
                    <div className={cn("bg-card rounded-xl p-6 shadow-md border border-border", isRTL && "text-right")}>
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
          <div className={cn("text-center mb-16", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.values.title')}
            </h2>
            <p className={cn("text-muted-foreground max-w-2xl mx-auto", isRTL && "mx-0")}>
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", isRTL && "direction-rtl")}>
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
          <div className={cn("text-center mb-16", isRTL && "text-right")}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {t('about.team.ourLeadership')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.team.title')}
            </h2>
            <p className={cn("text-muted-foreground max-w-2xl mx-auto text-lg", isRTL && "mx-0")}>
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className={cn("flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto", isRTL && "md:flex-row-reverse")}>
            {team.map((member, index) => (
              <div 
                key={index}
                className="group flex-1 max-w-md bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
              >
                {/* Avatar Section */}
                <div className="relative h-80 bg-gradient-to-br from-primary via-primary/80 to-navy-light overflow-hidden">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-40 h-40 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-32 h-32 border-2 border-white/30 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full" />
                  </div>
                  
                  {/* Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {member.image ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl scale-125" />
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="relative w-48 h-48 rounded-full object-cover object-top ring-[6px] ring-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-125" />
                        <div className="relative w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-[6px] ring-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                          <span className="text-5xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
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
            <div className={cn("grid md:grid-cols-2 gap-12 items-center", isRTL && "direction-rtl")}>
              <div className={isRTL ? "text-right" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('about.whyPartner.title')}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('about.whyPartner.description')}
                </p>
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
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
                    <div className="text-sm font-medium text-foreground">{t('about.whyPartner.badges.authorisedDsa')}</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{t('about.whyPartner.badges.yearsInDubai')}</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{t('about.whyPartner.badges.expertTeam')}</div>
                  </div>
                  <div className="bg-card rounded-xl p-5 text-center shadow-sm">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">{t('about.whyPartner.badges.clientFirst')}</div>
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
          <div className={cn("max-w-3xl mx-auto text-center text-primary-foreground", isRTL && "text-right")}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-white mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className={cn("flex flex-col sm:flex-row gap-4 justify-center", isRTL && "sm:flex-row-reverse")}>
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">
                  {t('nav.contactUs')}
                  <ArrowRight className={cn("h-5 w-5", isRTL ? "mr-2 rotate-180" : "ml-2")} />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <Link to="/contact">
                  {t('nav.contactUs')}
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
