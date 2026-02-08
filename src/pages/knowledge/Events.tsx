import { useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";
import EventCard from "@/components/events/EventCard";

const EVENT_KEYS = ["e1", "e2", "e3", "e4", "e5", "e6"] as const;

const Events = () => {
  const { t, isRTL } = useLanguage();

  const events = useMemo(() => {
    return EVENT_KEYS.map((key) => ({
      key,
      title: t(`events.items.${key}.title`),
      description: t(`events.items.${key}.description`),
      location: t(`events.items.${key}.location`),
      date: t(`events.items.${key}.date`),
      time: t(`events.items.${key}.time`),
      type: t(`events.items.${key}.type`),
      price: t(`events.items.${key}.price`),
      spots: t(`events.items.${key}.spots`),
    }));
  }, [t]);

  const typeLabels: Record<string, string> = {
    online: t("events.online"),
    inPerson: t("events.inPerson"),
    hybrid: t("events.hybrid"),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTJ2NGgyem0tMzAgMGgyVjBoLTJ2NHptMjcgMjVhMSAxIDAgMCAxLTIgMCAxIDEgMCAwIDEgMiAwem0tMjAgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={cn("text-center max-w-3xl mx-auto", isRTL && "text-right")}
            >
              <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6", isRTL && "flex-row-reverse")}>
                <Calendar className="h-4 w-4" />
                {t("nav.events")}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {t("events.heroTitle")}
              </h1>
              <p className="text-lg text-white">
                {t("events.heroDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: "6", labelKey: "events.upcoming" },
                { value: "4", label: isRTL ? "مدن" : "Cities" },
                { value: "3", label: isRTL ? "مجاني" : "Free Events" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="text-center p-5 bg-card border border-border rounded-2xl shadow-card">
                    <p className="text-2xl lg:text-3xl font-bold text-primary" dir="ltr">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.labelKey ? t(stat.labelKey) : stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className={cn("mb-10", isRTL && "text-right")}>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("events.upcoming")}</h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {events.map((event, i) => (
                <EventCard
                  key={event.key}
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  time={event.time}
                  type={event.type}
                  typeLabel={typeLabels[event.type] || event.type}
                  price={event.price}
                  spots={event.spots}
                  spotsLeftLabel={t("events.spotsLeft")}
                  registerLabel={t("events.registerNow")}
                  freeLabel={t("events.free")}
                  index={i}
                  isRTL={isRTL}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Events;
