import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return key; // Return key if not found in any language
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      loans: "Loans",
      services: "Services",
      businessAccounts: "Business Accounts",
      howItWorks: "How It Works",
      about: "About",
      contact: "Contact",
      contactUs: "Contact Us",
      viewAllServices: "View all services",
      loanProducts: "Loan Products",
      comprehensiveFinancing: "Comprehensive financing solutions for your business"
    },
    // Top Bar
    topBar: {
      tagline: "UAE's Trusted Business Finance Partner"
    },
    // Loan Services
    loanServices: {
      businessLoans: "Business Loans",
      businessLoansDesc: "Fixed-term financing for business growth",
      workingCapital: "Working Capital",
      workingCapitalDesc: "Manage daily operations smoothly",
      securedLoans: "Secured Loans",
      securedLoansDesc: "Asset-backed financing solutions",
      smeLoans: "SME Loans",
      smeLoansDesc: "Tailored for small & medium enterprises",
      corporateLoans: "Corporate Loans",
      corporateLoansDesc: "Large-scale corporate financing",
      equipmentFinancing: "Equipment Financing",
      equipmentFinancingDesc: "Fund machinery & equipment",
      tradeFinance: "Trade Finance",
      tradeFinanceDesc: "Import/export financing solutions",
      syndicatedLoans: "Syndicated Loans",
      syndicatedLoansDesc: "Partnership lending programs"
    },
    // Advisory Services
    advisoryServices: {
      debtAdvisory: "Debt Advisory & Structuring",
      debtAdvisoryDesc: "Optimize your debt portfolio",
      mezzanineFinancing: "Mezzanine & Hybrid Financing",
      mezzanineFinancingDesc: "Flexible capital solutions",
      bankFinancing: "Bank Financing",
      bankFinancingDesc: "Comprehensive bank loan products"
    },
    // About Page
    about: {
      title: "About TAAMUL",
      subtitle: "We are a trusted Direct Selling Agent (DSA) bridging the gap between ambitious UAE businesses and the financing they need to grow.",
      stats: {
        businessesFunded: "Businesses Funded",
        loansFacilitated: "Loans Facilitated",
        bankingPartners: "Banking Partners",
        clientSatisfaction: "Client Satisfaction"
      },
      mission: {
        title: "Our Mission",
        description: "To empower UAE businesses with seamless access to tailored financing solutions. We simplify the complex world of business lending by connecting companies with the right banking partners, ensuring faster approvals, competitive rates, and a hassle-free experience from application to disbursement."
      },
      vision: {
        title: "Our Vision",
        description: "To become the most trusted financial intermediary in the UAE, known for transforming how businesses access capital. We envision a future where every viable business can secure the funding it needs to thrive, supported by technology and guided by expertise."
      },
      journey: {
        title: "Our Journey",
        subtitle: "From a small team with a big vision to a leading financial services partner"
      },
      milestones: {
        founded: "Founded in Dubai",
        foundedDesc: "TAAMUL Credit Review Services LLC was established in Dubai with a vision to simplify business financing in the UAE.",
        rakbank: "RAKBANK Partnership",
        rakbankDesc: "Established our first major lender partnership with RAKBANK, expanding access to business financing solutions.",
        ublRuya: "UBL & Ruya Bank Partnerships",
        ublRuyaDesc: "Strengthened our lending network by partnering with UBL and Ruya Bank, offering more diverse financing options.",
        nbfWio: "NBF & WIO Bank Partnerships",
        nbfWioDesc: "Expanded partnerships with National Bank of Fujairah (NBF) and WIO Bank, further enhancing our lending capabilities.",
        fintech: "Fintech Partnerships",
        fintechDesc: "Partnered with leading fintech platforms including Credible X, Flapcap, Comfi, Funding Souq, Zelo, and Flow 48."
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide every interaction and decision we make",
        integrity: "Integrity",
        integrityDesc: "We operate with complete transparency and honesty in every client interaction and banking relationship.",
        clientCentric: "Client-Centric",
        clientCentricDesc: "Your success is our success. We tailor solutions to meet your unique business needs and goals.",
        excellence: "Excellence",
        excellenceDesc: "We strive for the highest standards in service delivery, continuously improving our processes.",
        partnership: "Partnership",
        partnershipDesc: "We build lasting relationships with clients and banks, founded on trust and mutual respect."
      },
      team: {
        title: "Meet the Founders",
        subtitle: "Decades of combined experience in finance, banking, and business advisory",
        ourLeadership: "Our Leadership"
      },
      whyPartner: {
        title: "Why Partner With TAAMUL?",
        description: "We combine deep banking relationships, industry expertise, and a client-first approach to deliver financing solutions that truly work for your business.",
        benefits: {
          access: "Access to 10+ banking partners with competitive rates",
          dedicated: "Dedicated relationship manager for personalized service",
          fastTrack: "Fast-track processing with average 7-10 day approval",
          noUpfront: "No upfront fees - we succeed when you succeed",
          expert: "Expert guidance through every step of the process"
        },
        badges: {
          authorisedDsa: "Authorised DSA",
          yearsInDubai: "8+ Years in Dubai",
          expertTeam: "Expert Team",
          clientFirst: "Client First"
        }
      },
      cta: {
        title: "Ready to Work With Us?",
        subtitle: "Let's discuss how we can help your business secure the funding it needs to grow."
      }
    },
    // Common
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      applyNow: "Apply Now"
    }
  },
  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      loans: "القروض",
      services: "الخدمات",
      businessAccounts: "حسابات الأعمال",
      howItWorks: "كيف يعمل",
      about: "من نحن",
      contact: "اتصل بنا",
      contactUs: "تواصل معنا",
      viewAllServices: "عرض جميع الخدمات",
      loanProducts: "منتجات القروض",
      comprehensiveFinancing: "حلول تمويل شاملة لأعمالك"
    },
    // Top Bar
    topBar: {
      tagline: "شريك التمويل التجاري الموثوق في الإمارات"
    },
    // Loan Services
    loanServices: {
      businessLoans: "قروض الأعمال",
      businessLoansDesc: "تمويل محدد المدة لنمو الأعمال",
      workingCapital: "رأس المال العامل",
      workingCapitalDesc: "إدارة العمليات اليومية بسلاسة",
      securedLoans: "القروض المضمونة",
      securedLoansDesc: "حلول تمويل مدعومة بالأصول",
      smeLoans: "قروض المشاريع الصغيرة والمتوسطة",
      smeLoansDesc: "مصممة للمؤسسات الصغيرة والمتوسطة",
      corporateLoans: "قروض الشركات",
      corporateLoansDesc: "تمويل الشركات الكبيرة",
      equipmentFinancing: "تمويل المعدات",
      equipmentFinancingDesc: "تمويل الآلات والمعدات",
      tradeFinance: "تمويل التجارة",
      tradeFinanceDesc: "حلول تمويل الاستيراد والتصدير",
      syndicatedLoans: "القروض المشتركة",
      syndicatedLoansDesc: "برامج الإقراض الشراكية"
    },
    // Advisory Services
    advisoryServices: {
      debtAdvisory: "استشارات وهيكلة الديون",
      debtAdvisoryDesc: "تحسين محفظة ديونك",
      mezzanineFinancing: "التمويل المتوسط والمختلط",
      mezzanineFinancingDesc: "حلول رأس المال المرنة",
      bankFinancing: "التمويل البنكي",
      bankFinancingDesc: "منتجات القروض البنكية الشاملة"
    },
    // About Page
    about: {
      title: "عن تعامل",
      subtitle: "نحن وكيل مبيعات مباشر موثوق نربط بين الشركات الإماراتية الطموحة والتمويل الذي تحتاجه للنمو.",
      stats: {
        businessesFunded: "شركات تم تمويلها",
        loansFacilitated: "قروض تم تسهيلها",
        bankingPartners: "شركاء مصرفيون",
        clientSatisfaction: "رضا العملاء"
      },
      mission: {
        title: "مهمتنا",
        description: "تمكين الشركات الإماراتية من الوصول السلس إلى حلول التمويل المخصصة. نحن نبسط عالم الإقراض التجاري المعقد من خلال ربط الشركات بالشركاء المصرفيين المناسبين، مما يضمن موافقات أسرع وأسعار تنافسية وتجربة خالية من المتاعب من التقديم إلى الصرف."
      },
      vision: {
        title: "رؤيتنا",
        description: "أن نصبح الوسيط المالي الأكثر موثوقية في الإمارات، والمعروف بتحويل طريقة وصول الشركات إلى رأس المال. نتصور مستقبلاً تستطيع فيه كل شركة قابلة للاستمرار تأمين التمويل الذي تحتاجه للازدهار، بدعم التكنولوجيا وإرشاد الخبرة."
      },
      journey: {
        title: "رحلتنا",
        subtitle: "من فريق صغير برؤية كبيرة إلى شريك رائد في الخدمات المالية"
      },
      milestones: {
        founded: "التأسيس في دبي",
        foundedDesc: "تأسست شركة تعامل لخدمات مراجعة الائتمان في دبي برؤية لتبسيط تمويل الأعمال في الإمارات.",
        rakbank: "شراكة راك بنك",
        rakbankDesc: "أنشأنا أول شراكة رئيسية مع راك بنك، مما وسع الوصول إلى حلول تمويل الأعمال.",
        ublRuya: "شراكات UBL وبنك رؤية",
        ublRuyaDesc: "عززنا شبكة الإقراض من خلال الشراكة مع UBL وبنك رؤية، مقدمين خيارات تمويل أكثر تنوعاً.",
        nbfWio: "شراكات NBF وWIO",
        nbfWioDesc: "وسعنا الشراكات مع بنك الفجيرة الوطني (NBF) وبنك WIO، مما عزز قدراتنا الإقراضية.",
        fintech: "شراكات التكنولوجيا المالية",
        fintechDesc: "شراكة مع منصات التكنولوجيا المالية الرائدة بما في ذلك Credible X وFlapcap وComfi وFunding Souq وZelo وFlow 48."
      },
      values: {
        title: "قيمنا",
        subtitle: "المبادئ التي توجه كل تفاعل وقرار نتخذه",
        integrity: "النزاهة",
        integrityDesc: "نعمل بشفافية وصدق تامين في كل تفاعل مع العملاء وعلاقة مصرفية.",
        clientCentric: "التركيز على العميل",
        clientCentricDesc: "نجاحك هو نجاحنا. نصمم الحلول لتلبية احتياجات وأهداف عملك الفريدة.",
        excellence: "التميز",
        excellenceDesc: "نسعى لأعلى المعايير في تقديم الخدمة، مع تحسين عملياتنا باستمرار.",
        partnership: "الشراكة",
        partnershipDesc: "نبني علاقات دائمة مع العملاء والبنوك، قائمة على الثقة والاحترام المتبادل."
      },
      team: {
        title: "تعرف على المؤسسين",
        subtitle: "عقود من الخبرة المشتركة في التمويل والمصارف والاستشارات التجارية",
        ourLeadership: "قيادتنا"
      },
      whyPartner: {
        title: "لماذا تشترك مع تعامل؟",
        description: "نجمع بين العلاقات المصرفية العميقة والخبرة الصناعية والنهج الذي يركز على العميل أولاً لتقديم حلول تمويل تعمل حقاً لعملك.",
        benefits: {
          access: "الوصول إلى أكثر من 10 شركاء مصرفيين بأسعار تنافسية",
          dedicated: "مدير علاقات مخصص للخدمة الشخصية",
          fastTrack: "معالجة سريعة بمتوسط موافقة 7-10 أيام",
          noUpfront: "بدون رسوم مقدمة - ننجح عندما تنجح",
          expert: "إرشاد خبير خلال كل خطوة من العملية"
        },
        badges: {
          authorisedDsa: "وكيل معتمد",
          yearsInDubai: "+8 سنوات في دبي",
          expertTeam: "فريق خبراء",
          clientFirst: "العميل أولاً"
        }
      },
      cta: {
        title: "هل أنت مستعد للعمل معنا؟",
        subtitle: "دعنا نناقش كيف يمكننا مساعدة عملك في تأمين التمويل الذي يحتاجه للنمو."
      }
    },
    // Common
    common: {
      learnMore: "اعرف المزيد",
      getStarted: "ابدأ الآن",
      applyNow: "قدم الآن"
    }
  }
};
