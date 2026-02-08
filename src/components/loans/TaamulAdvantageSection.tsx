import { motion } from "framer-motion";
import { BadgeCheck, Gift, Layers, Users, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TaamulAdvantageSection = () => {
  const { t, isRTL } = useLanguage();

  const advantages = [
    {
      icon: BadgeCheck,
      titleKey: "taamulAdvantage.authorizedDSA",
      descKey: "taamulAdvantage.authorizedDSADesc",
    },
    {
      icon: Gift,
      titleKey: "taamulAdvantage.noFees",
      descKey: "taamulAdvantage.noFeesDesc",
    },
    {
      icon: Layers,
      titleKey: "taamulAdvantage.multipleOptions",
      descKey: "taamulAdvantage.multipleOptionsDesc",
    },
    {
      icon: Users,
      titleKey: "taamulAdvantage.smeFriendly",
      descKey: "taamulAdvantage.smeFriendlyDesc",
    },
    {
      icon: Headphones,
      titleKey: "taamulAdvantage.endToEnd",
      descKey: "taamulAdvantage.endToEndDesc",
    },
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-display-sm text-white mb-4">
            {isRTL ? (
              <>{t('loanPages.advantage')} <span className="text-accent">{t('loanPages.taamul')}</span></>
            ) : (
              <>The <span className="text-accent">{t('loanPages.taamul')}</span> {t('loanPages.advantage')}</>
            )}
          </h2>
          <p className="text-lg text-white">
            {t('taamulAdvantage.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t(item.titleKey)}</h3>
              <p className="text-sm text-white/80">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaamulAdvantageSection;
