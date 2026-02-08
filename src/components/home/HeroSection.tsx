import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator, Building2, Users, Award, ChevronLeft, ChevronRight, Lightbulb, CheckCircle2, Landmark, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

// Import background images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const heroSlides = [
    {
      badge: t('hero.trustedBy'),
      badgeIcon: Award,
      title: t('hero.unlockPotential'),
      highlight: t('hero.smartFinancing'),
      description: t('hero.heroDesc'),
      backgroundImage: heroSlide1,
      stats: [
        { icon: Building2, value: "15+", label: t('hero.yearsExperience') },
        { icon: Users, value: "500+", label: t('hero.businessesServed') },
        { icon: Award, value: "AED 800M+", label: t('hero.loansFacilitated') },
      ],
    },
    {
      badge: t('hero.completeBanking'),
      badgeIcon: Building2,
      title: t('hero.yourOneStop'),
      highlight: t('hero.businessSuccess'),
      description: t('hero.bankingDesc'),
      backgroundImage: heroSlide3,
      stats: [
        { icon: Building2, value: "5+", label: t('hero.accountTypes') },
        { icon: Users, value: "100%", label: t('hero.compliance') },
        { icon: Award, value: "24/7", label: t('hero.onlineBanking') },
      ],
    },
    {
      badge: t('hero.simpleSolutions'),
      badgeIcon: Lightbulb,
      title: t('hero.situationsComplex'),
      highlight: t('hero.solutionsSimple'),
      description: t('hero.solutionsDesc'),
      backgroundImage: heroSlide4,
      stats: [
        { icon: Building2, value: "10+", label: t('hero.financingSolutions') },
        { icon: Users, value: isRTL ? "خبراء" : "Expert", label: t('hero.advisoryTeam') },
        { icon: Award, value: "100%", label: t('hero.clientFocus') },
      ],
    },
    {
      badge: t('hero.flexibleRefinancing'),
      badgeIcon: RefreshCw,
      title: t('hero.topUpBuyout'),
      highlight: t('hero.buyoutOptions'),
      description: t('hero.refinancingDesc'),
      backgroundImage: heroSlide1,
      stats: [
        { icon: Building2, value: isRTL ? "سريع" : "Quick", label: t('hero.processing') },
        { icon: Users, value: isRTL ? "أفضل" : "Better", label: t('hero.terms') },
        { icon: Award, value: isRTL ? "مرن" : "Flexible", label: t('hero.options') },
      ],
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[current].backgroundImage})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)] ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Left Content - Carousel */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              direction: isRTL ? "rtl" : "ltr",
            }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-0" allowOverflow>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="pl-0 overflow-visible">
                  <AnimatePresence mode="wait">
                    {current === index && (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`space-y-8 ${isRTL ? 'text-right' : ''}`}
                      >
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <slide.badgeIcon className="h-4 w-4" />
                          {slide.badge}
                        </motion.div>

                        <motion.h1 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-display-sm md:text-display text-primary-foreground leading-tight"
                        >
                          {slide.title}{" "}
                          <span className="text-accent">{slide.highlight}</span>
                        </motion.h1>

                        <motion.p 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-xl text-primary-foreground/80 max-w-xl leading-relaxed"
                        >
                          {slide.description}
                        </motion.p>

                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className={`flex flex-col sm:flex-row gap-4 flex-wrap ${isRTL ? 'sm:flex-row-reverse' : ''}`}
                        >
                          <Button asChild variant="hero" size="xl">
                            <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              {t('common.contactUs')}
                              <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                            </Link>
                          </Button>
                          <Button asChild variant="heroOutline" size="xl">
                            <a href="#calculator" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <Calculator className="h-5 w-5" />
                              {t('hero.calculateEligibility')}
                            </a>
                          </Button>
                        </motion.div>

                        {/* Business Bank Account Highlight */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.35 }}
                        >
                          <Link 
                            to="/business-accounts"
                            className={`inline-flex items-center gap-3 px-5 py-3 bg-accent hover:bg-accent/90 border border-accent rounded-xl text-primary transition-all duration-300 group shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                              <Landmark className="h-5 w-5 text-accent" />
                            </div>
                            <div className={isRTL ? 'text-right' : ''}>
                              <p className="text-sm text-primary/70">{t('hero.needBusinessAccount')}</p>
                              <p className="text-lg font-bold text-primary uppercase tracking-wide group-hover:underline">{t('hero.businessBankAccount')}</p>
                            </div>
                            <ArrowRight className={`h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 ${isRTL ? 'rotate-180 translate-x-2 group-hover:translate-x-0' : '-translate-x-2 group-hover:translate-x-0'}`} />
                          </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className={`flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          {slide.stats.map((stat, statIndex) => (
                            <motion.div 
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 + statIndex * 0.1 }}
                              className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                            >
                              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                                <stat.icon className="h-6 w-6 text-accent" />
                              </div>
                              <div className={isRTL ? 'text-right' : ''}>
                                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="flex items-center gap-4 mt-8">
              {/* Dots with Progress */}
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                      current === index 
                        ? "w-8 bg-primary-foreground/30" 
                        : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {current === index && (
                      <motion.div
                        className="absolute inset-0 bg-accent rounded-full"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className={`flex gap-2 ${isRTL ? 'mr-auto' : 'ml-auto'}`}>
                <button
                  onClick={() => isRTL ? api?.scrollNext() : api?.scrollPrev()}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => isRTL ? api?.scrollPrev() : api?.scrollNext()}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </Carousel>

          {/* Right Content - Free Service Card */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-elevated p-8 border border-border/50 max-w-sm">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t('hero.free100')}</h3>
                  <p className="text-lg font-semibold text-primary">{t('hero.noStrings')}</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    t('hero.noServiceFees'),
                    t('hero.noConsultancyCharges'), 
                    t('hero.noHiddenCosts')
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted/50 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-6 pt-6 border-t border-border space-y-3"
                >
                  <p className="text-sm font-semibold text-primary">
                    {t('hero.authorizedDSA')}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('hero.helpBusinesses')}
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    {t('hero.subjectToApproval')}
                  </p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
