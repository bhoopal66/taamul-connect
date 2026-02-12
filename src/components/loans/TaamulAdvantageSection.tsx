import { motion } from "framer-motion";
import { BadgeCheck, Gift, Layers, Users, Headphones, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
}

interface TaamulAdvantageSectionProps {
  advantages?: AdvantageItem[];
  description?: string;
  descriptionAr?: string;
}

const defaultAdvantages: AdvantageItem[] = [
  {
    icon: BadgeCheck,
    title: "Authorized DSA",
    titleAr: "وكيل مبيعات معتمد",
    desc: "Official Direct Selling Agent for leading UAE banks and financial institutions.",
    descAr: "وكيل مبيعات مباشر رسمي للبنوك والمؤسسات المالية الرائدة في الإمارات.",
  },
  {
    icon: Gift,
    title: "No Fees",
    titleAr: "بدون رسوم",
    desc: "Zero consultancy fees, no success charges – we earn from bank partnerships only.",
    descAr: "صفر رسوم استشارية، بدون رسوم نجاح – نكسب من شراكات البنوك فقط.",
  },
  {
    icon: Layers,
    title: "Multiple Options",
    titleAr: "خيارات متعددة",
    desc: "Access 15+ banking and fintech partners under one roof for the best terms.",
    descAr: "الوصول إلى أكثر من 15 شريكاً مصرفياً وتقنياً تحت سقف واحد للحصول على أفضل الشروط.",
  },
  {
    icon: Users,
    title: "SME & Startup Friendly",
    titleAr: "صديق للمشاريع الصغيرة",
    desc: "Tailored solutions designed specifically for growing businesses and new ventures.",
    descAr: "حلول مخصصة مصممة خصيصاً للشركات النامية والمشاريع الجديدة.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    titleAr: "دعم شامل",
    desc: "Complete application assistance from documentation to final disbursement.",
    descAr: "مساعدة كاملة في التقديم من التوثيق إلى الصرف النهائي.",
  },
];

const TaamulAdvantageSection = ({
  advantages,
  description,
  descriptionAr,
}: TaamulAdvantageSectionProps) => {
  const { t, isRTL } = useLanguage();

  const items = advantages || defaultAdvantages;
  const desc = isRTL
    ? (descriptionAr || "تعاون مع متخصصي تمويل الأعمال الموثوقين في الإمارات لتجربة تمويل سلسة.")
    : (description || "Partner with UAE's trusted business finance specialists for a seamless funding experience.");

  const gridCols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";

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
            {desc}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 ${gridCols} gap-6`}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${isRTL ? 'text-right' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {isRTL ? item.titleAr : item.title}
              </h3>
              <p className="text-sm text-white/80">
                {isRTL ? item.descAr : item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaamulAdvantageSection;
