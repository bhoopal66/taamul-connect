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
    // Hero Section
    hero: {
      trustedBy: "Trusted by 500+ UAE Businesses",
      unlockPotential: "Unlock Your Business Potential with",
      smartFinancing: "Smart Financing",
      heroDesc: "Access flexible business loans from AED 50,000 to AED 50 million. Partner with UAE's leading banks through our streamlined application process.",
      completeBanking: "Complete Business Banking",
      yourOneStop: "Your One-Stop Partner for",
      businessSuccess: "Business Success",
      bankingDesc: "Beyond financing, we help you open the perfect business account, set up trade finance solutions, and manage your corporate banking needs.",
      simpleSolutions: "Simple Solutions for Complex Challenges",
      situationsComplex: "Situations can be complex,",
      solutionsSimple: "SOLUTIONS NEED NOT BE !!",
      solutionsDesc: "We simplify complex financial challenges with straightforward solutions. Our expert team navigates the complexities so you can focus on growing your business.",
      flexibleRefinancing: "Flexible Refinancing Solutions",
      topUpBuyout: "Top-up &",
      buyoutOptions: "Buy-out Options",
      refinancingDesc: "Refinance existing merchant loans or top-up your funding over time. Consolidate your debts and unlock better terms with our refinancing solutions.",
      calculateEligibility: "Calculate Eligibility",
      needBusinessAccount: "Need a",
      businessBankAccount: "BUSINESS BANK ACCOUNT?",
      yearsExperience: "Years Experience",
      businessesServed: "Businesses Served",
      loansFacilitated: "Loans Facilitated",
      accountTypes: "Account Types",
      compliance: "Compliance",
      onlineBanking: "Online Banking",
      financingSolutions: "Financing Solutions",
      advisoryTeam: "Advisory Team",
      clientFocus: "Client Focus",
      processing: "Processing",
      terms: "Terms",
      options: "Options",
      free100: "100% Free",
      noStrings: "No Strings Attached.",
      noServiceFees: "No service fees",
      noConsultancyCharges: "No consultancy charges",
      noHiddenCosts: "No hidden costs",
      weEarnFromBanks: "We earn from bank partnerships, not from you"
    },
    // Services Section
    servicesSection: {
      title: "Our Services",
      heading: "Comprehensive Business Financing Solutions",
      description: "From startups to corporations, we offer tailored financial products to fuel your business growth.",
      learnMore: "Learn More",
      talkToExpert: "Talk to Expert"
    },
    // Business Accounts Section
    businessAccountsSection: {
      title: "Business Accounts",
      heading: "Open the Right Account for Your Business",
      description: "We help you choose and open the perfect business account with our partner banks.",
      currentAccount: "Current Account",
      currentAccountDesc: "Day-to-day business transactions",
      wpsAccount: "WPS Account",
      wpsAccountDesc: "Streamlined payroll management",
      businessSavings: "Business Savings",
      businessSavingsDesc: "Earn interest on idle funds",
      escrowAccount: "Escrow Account",
      escrowAccountDesc: "Secure third-party transactions",
      corporateAccount: "Corporate Account",
      corporateAccountDesc: "Enterprise-grade banking solutions"
    },
    // Partners Section
    partnersSection: {
      title: "Our Partners",
      heading: "Banking & Fintech Partners",
      bankingPartners: "Banking Partners",
      fintechPartners: "Fintech Partners"
    },
    // Testimonials Section
    testimonialsSection: {
      title: "Testimonials",
      heading: "Trusted by Businesses Across the UAE",
      description: "See what our clients say about their experience working with TAAMUL."
    },
    // CTA Section
    ctaSection: {
      heading: "Ready to Accelerate Your Business Growth?",
      description: "Get pre-approved in 48 hours. Our experts are ready to find the perfect financing solution for your business.",
      callNow: "Call"
    },
    // Calculator Section
    calculatorSection: {
      title: "Loan Calculator",
      heading: "Estimate Your Monthly Payments",
      description: "Use our calculator to get an estimate of your monthly loan repayments.",
      loanAmount: "Loan Amount",
      interestRate: "Interest Rate",
      loanTenure: "Loan Tenure",
      months: "months",
      monthlyPayment: "Monthly Payment",
      totalInterest: "Total Interest",
      totalPayment: "Total Payment",
      disclaimer: "*This is an estimate only. Actual payments may vary."
    },
    // Contact Page
    contact: {
      badge: "Expert Support Available",
      heading: "Let's Discuss Your",
      headingHighlight: "Financing Needs",
      description: "Our team of experts is ready to help you find the perfect financial solution for your business.",
      freeConsultation: "Free Consultation",
      quickResponse: "Quick Response",
      confidential: "Confidential",
      sendMessage: "Send Us a Message",
      formDescription: "Fill out the form and we'll respond within 24 hours.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      companyName: "Company Name",
      subject: "Subject",
      selectSubject: "Select a subject",
      message: "Message",
      messagePlaceholder: "Tell us about your financing needs...",
      sendButton: "Send Message",
      sending: "Sending...",
      headOffice: "Head Office",
      phone: "Phone",
      email: "Email",
      officeHours: "Office Hours",
      openInMaps: "Open in Google Maps",
      needImmediate: "Need Immediate Assistance?",
      teamAvailable: "Our team is available during business hours to answer your questions.",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      subjects: {
        businessLoan: "Business Loan Inquiry",
        accountOpening: "Account Opening",
        partnership: "Partnership Opportunity",
        general: "General Inquiry",
        support: "Support Request"
      }
    },
    // Services Page
    services: {
      title: "Our Services",
      heading: "Comprehensive Business",
      headingHighlight: "Financing Solutions",
      description: "From startups to established corporations, we offer a complete range of financing products and advisory services to fuel your business growth.",
      getStarted: "Get Started Today",
      seeHowItWorks: "See How It Works",
      partnerBanks: "Partner Banks",
      freeConsultation: "Free Consultation",
      financingProducts: "Financing Products",
      secureConfidential: "Secure & Confidential",
      uaeLicensed: "UAE Licensed",
      dedicatedExperts: "Dedicated Experts",
      allBusinessSizes: "All Business Sizes",
      loanServices: "Loan Services",
      businessFinancingProducts: "Business Financing Products",
      loanServicesDesc: "Explore our comprehensive range of loan products designed to meet diverse business needs, from working capital to large-scale corporate financing.",
      advisoryServices: "Advisory Services",
      strategicFinancial: "Strategic Financial Advisory",
      advisoryServicesDesc: "Beyond financing, our expert advisors help you optimize your capital structure and access innovative funding solutions for sustainable growth.",
      faq: "Frequently Asked Questions",
      faqHeading: "Common Questions About Business Financing",
      faqDesc: "Find answers to the most common questions about our services and financing process."
    },
    // How It Works Page
    howItWorks: {
      title: "How It Works",
      heading: "How It Works",
      description: "From application to disbursement, we've streamlined the business loan process to get you funded faster with minimum hassle.",
      step: "STEP",
      steps: {
        consultation: "Consultation",
        consultationDesc: "We understand your business needs, transaction volumes, and financing requirements to recommend the right solution.",
        consultationDetails: ["Business profile review", "Requirements assessment", "Solution recommendation", "Timeline discussion"],
        documentCollection: "Document Collection",
        documentCollectionDesc: "Our team collects and reviews all required documentation to ensure a complete, error-free application.",
        documentCollectionDetails: ["Trade License & MOA", "VAT returns (last 4 Qtrs)", "Bank statements", "Passport & EID copies"],
        bankSelection: "Bank Selection",
        bankSelectionDesc: "Based on your profile, we match you with the most suitable banks from our partner network for higher approval rates.",
        bankSelectionDetails: ["Compare multiple bank offers", "Match terms to your needs", "Negotiate best rates", "Present top options"],
        applicationSubmission: "Application Submission",
        applicationSubmissionDesc: "We submit your application directly to the bank and follow up on your behalf throughout the process.",
        applicationSubmissionDetails: ["Complete application filing", "Document submission", "Bank coordination", "Progress tracking"],
        approval: "Approval",
        approvalDesc: "Bank reviews and approves your application. We assist with final setup and any additional services you need.",
        approvalDetails: ["Bank credit review", "Terms finalization", "Approval confirmation", "Account/loan activation"]
      },
      whyChoose: "Why Choose Our Process?",
      whyChooseDesc: "We've designed every step to maximize efficiency and minimize your effort",
      benefits: {
        secureConfidential: "Secure & Confidential",
        secureConfidentialDesc: "Your data is protected with bank-grade security throughout the process",
        dedicatedSupport: "Dedicated Support",
        dedicatedSupportDesc: "A relationship manager guides you through every step of the journey",
        expertGuidance: "Expert Guidance",
        expertGuidanceDesc: "Benefit from our deep industry knowledge and strong banking relationships"
      },
      ctaHeading: "Ready to Get Started?",
      ctaDesc: "Take the first step towards securing the funding your business needs. Our team is ready to guide you through the process.",
      disclaimer: "*Timeline is subject to customer risk profile and business activity. Final approval is at the sole discretion of the bank."
    },
    // Business Accounts Page
    businessAccounts: {
      badge: "Business Banking Solutions",
      heading: "Choose the Right Account",
      headingHighlight: "for Your Business",
      description: "Compare our range of business accounts across UAE's top banks and find the perfect fit for your company's banking needs.",
      exploreAccounts: "Explore Accounts",
      whyChooseUs: "Why Choose Us",
      businessBankingSimple: "Business Banking Made Simple",
      businessBankingDesc: "We connect you with the best banking solutions tailored to your business needs.",
      benefits: {
        bankSecurity: "Bank-Level Security",
        bankSecurityDesc: "Your funds are protected by world-class security protocols and insurance.",
        fastOpening: "Fast Account Opening",
        fastOpeningDesc: "Get your business account set up within 5-7 working days with our streamlined process.",
        multiCurrency: "Multi-Currency Support",
        multiCurrencyDesc: "Conduct international business seamlessly with multi-currency account options.",
        clientFocus: "100% Client Focus",
        clientFocusDesc: "Your success is our priority with dedicated support and personalized financial solutions.",
        partnerNetwork: "Partner Bank Network",
        partnerNetworkDesc: "Choose from UAE's top banks including ADCB, Mashreq, RAK Bank, and more.",
        dedicatedSupport: "Dedicated Support",
        dedicatedSupportDesc: "Our specialists guide you through the entire process from application to approval."
      },
      accountTypes: "Account Types",
      weHelpOpen: "We Help You Open Any Business Account",
      accountTypesDesc: "From current accounts to escrow solutions, we guide you to the right choice.",
      ourProcess: "Our Process",
      howWeHelp: "How We Help You Open an Account",
      processDesc: "Our streamlined 5-step process ensures a smooth account opening experience.",
      totalDays: "Total: 7-10 Days",
      processDisclaimer: "*Timeline is subject to customer risk profile and business activity. We do not guarantee account opening; final approval is at the sole discretion of the bank.",
      requiredDocuments: "Required Documents",
      documentationReqs: "Documentation Requirements",
      documentationDesc: "Prepare the following documents based on your company type.",
      forMainland: "For UAE Mainland Companies",
      forFreeZone: "For Free Zone Companies",
      forOffshore: "For Offshore Companies",
      faq: "Frequently Asked Questions",
      commonQuestions: "Common Questions About Business Accounts"
    },
    // Footer
    footer: {
      companyDesc: "TAAMUL Credit Review Services LLC is your trusted partner for business financing solutions in the UAE. We connect businesses with the right financial products.",
      services: "Services",
      resources: "Resources",
      howItWorks: "How It Works",
      aboutUs: "About Us",
      loanCalculator: "Loan Calculator",
      faqs: "FAQs",
      blog: "Blog",
      contactUs: "Contact Us",
      subscribeNewsletter: "Subscribe to Newsletter",
      yourEmail: "Your email",
      subscribe: "Subscribe",
      copyright: "© 2024 TAAMUL Credit Review Services LLC. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy"
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
      applyNow: "Apply Now",
      talkToExpert: "Talk to Expert",
      contactUs: "Contact Us",
      day: "Day",
      days: "Days"
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
    // Hero Section
    hero: {
      trustedBy: "موثوق به من قبل أكثر من 500 شركة إماراتية",
      unlockPotential: "أطلق العنان لإمكانات عملك مع",
      smartFinancing: "التمويل الذكي",
      heroDesc: "احصل على قروض أعمال مرنة من 50,000 درهم إلى 50 مليون درهم. شارك مع البنوك الرائدة في الإمارات من خلال عملية التقديم المبسطة.",
      completeBanking: "خدمات مصرفية متكاملة للأعمال",
      yourOneStop: "شريكك الشامل لتحقيق",
      businessSuccess: "نجاح الأعمال",
      bankingDesc: "بالإضافة إلى التمويل، نساعدك في فتح حساب الأعمال المثالي وإعداد حلول تمويل التجارة وإدارة احتياجاتك المصرفية.",
      simpleSolutions: "حلول بسيطة للتحديات المعقدة",
      situationsComplex: "قد تكون المواقف معقدة،",
      solutionsSimple: "لكن الحلول لا يجب أن تكون كذلك!!",
      solutionsDesc: "نحن نبسط التحديات المالية المعقدة بحلول واضحة. فريق خبرائنا يتعامل مع التعقيدات حتى تتمكن من التركيز على تنمية أعمالك.",
      flexibleRefinancing: "حلول إعادة تمويل مرنة",
      topUpBuyout: "تعبئة و",
      buyoutOptions: "خيارات الشراء",
      refinancingDesc: "أعد تمويل قروض التاجر الحالية أو قم بتعبئة تمويلك بمرور الوقت. ادمج ديونك واحصل على شروط أفضل مع حلول إعادة التمويل.",
      calculateEligibility: "احسب أهليتك",
      needBusinessAccount: "هل تحتاج إلى",
      businessBankAccount: "حساب مصرفي تجاري؟",
      yearsExperience: "سنوات الخبرة",
      businessesServed: "شركات تم خدمتها",
      loansFacilitated: "قروض تم تسهيلها",
      accountTypes: "أنواع الحسابات",
      compliance: "الامتثال",
      onlineBanking: "الخدمات المصرفية عبر الإنترنت",
      financingSolutions: "حلول التمويل",
      advisoryTeam: "فريق استشاري",
      clientFocus: "التركيز على العميل",
      processing: "معالجة",
      terms: "شروط",
      options: "خيارات",
      free100: "مجاني 100%",
      noStrings: "بدون شروط خفية.",
      noServiceFees: "بدون رسوم خدمة",
      noConsultancyCharges: "بدون رسوم استشارية",
      noHiddenCosts: "بدون تكاليف مخفية",
      weEarnFromBanks: "نكسب من شراكات البنوك، وليس منك"
    },
    // Services Section
    servicesSection: {
      title: "خدماتنا",
      heading: "حلول تمويل الأعمال الشاملة",
      description: "من الشركات الناشئة إلى الشركات الكبرى، نقدم منتجات مالية مخصصة لدعم نمو أعمالك.",
      learnMore: "اعرف المزيد",
      talkToExpert: "تحدث مع خبير"
    },
    // Business Accounts Section
    businessAccountsSection: {
      title: "حسابات الأعمال",
      heading: "افتح الحساب المناسب لعملك",
      description: "نساعدك في اختيار وفتح حساب الأعمال المثالي مع بنوكنا الشريكة.",
      currentAccount: "الحساب الجاري",
      currentAccountDesc: "المعاملات التجارية اليومية",
      wpsAccount: "حساب WPS",
      wpsAccountDesc: "إدارة الرواتب المبسطة",
      businessSavings: "حساب التوفير التجاري",
      businessSavingsDesc: "اكسب فائدة على الأموال الخاملة",
      escrowAccount: "حساب الضمان",
      escrowAccountDesc: "معاملات آمنة مع أطراف ثالثة",
      corporateAccount: "حساب الشركات",
      corporateAccountDesc: "حلول مصرفية للمؤسسات الكبيرة"
    },
    // Partners Section
    partnersSection: {
      title: "شركاؤنا",
      heading: "شركاء البنوك والتكنولوجيا المالية",
      bankingPartners: "الشركاء المصرفيون",
      fintechPartners: "شركاء التكنولوجيا المالية"
    },
    // Testimonials Section
    testimonialsSection: {
      title: "شهادات العملاء",
      heading: "موثوق به من قبل الشركات في جميع أنحاء الإمارات",
      description: "اطلع على آراء عملائنا حول تجربتهم في العمل مع تعامل."
    },
    // CTA Section
    ctaSection: {
      heading: "هل أنت مستعد لتسريع نمو أعمالك؟",
      description: "احصل على موافقة مسبقة خلال 48 ساعة. خبراؤنا مستعدون لإيجاد حل التمويل المثالي لعملك.",
      callNow: "اتصل"
    },
    // Calculator Section
    calculatorSection: {
      title: "حاسبة القروض",
      heading: "قدّر مدفوعاتك الشهرية",
      description: "استخدم حاسبتنا للحصول على تقدير لأقساط القرض الشهرية.",
      loanAmount: "مبلغ القرض",
      interestRate: "معدل الفائدة",
      loanTenure: "مدة القرض",
      months: "شهر",
      monthlyPayment: "الدفعة الشهرية",
      totalInterest: "إجمالي الفائدة",
      totalPayment: "إجمالي المدفوعات",
      disclaimer: "*هذا تقدير فقط. قد تختلف المدفوعات الفعلية."
    },
    // Contact Page
    contact: {
      badge: "دعم الخبراء متاح",
      heading: "دعنا نناقش",
      headingHighlight: "احتياجاتك التمويلية",
      description: "فريق خبرائنا مستعد لمساعدتك في إيجاد الحل المالي المثالي لعملك.",
      freeConsultation: "استشارة مجانية",
      quickResponse: "رد سريع",
      confidential: "سري",
      sendMessage: "أرسل لنا رسالة",
      formDescription: "املأ النموذج وسنرد عليك خلال 24 ساعة.",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      companyName: "اسم الشركة",
      subject: "الموضوع",
      selectSubject: "اختر موضوعاً",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن احتياجاتك التمويلية...",
      sendButton: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      headOffice: "المقر الرئيسي",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      officeHours: "ساعات العمل",
      openInMaps: "فتح في خرائط جوجل",
      needImmediate: "هل تحتاج مساعدة فورية؟",
      teamAvailable: "فريقنا متاح خلال ساعات العمل للإجابة على أسئلتك.",
      callNow: "اتصل الآن",
      whatsappUs: "راسلنا على واتساب",
      subjects: {
        businessLoan: "استفسار عن قرض تجاري",
        accountOpening: "فتح حساب",
        partnership: "فرصة شراكة",
        general: "استفسار عام",
        support: "طلب دعم"
      }
    },
    // Services Page
    services: {
      title: "خدماتنا",
      heading: "حلول تمويل الأعمال",
      headingHighlight: "الشاملة",
      description: "من الشركات الناشئة إلى الشركات الراسخة، نقدم مجموعة كاملة من منتجات التمويل والخدمات الاستشارية لدعم نمو أعمالك.",
      getStarted: "ابدأ اليوم",
      seeHowItWorks: "شاهد كيف يعمل",
      partnerBanks: "بنوك شريكة",
      freeConsultation: "استشارة مجانية",
      financingProducts: "منتجات التمويل",
      secureConfidential: "آمن وسري",
      uaeLicensed: "مرخص في الإمارات",
      dedicatedExperts: "خبراء متخصصون",
      allBusinessSizes: "جميع أحجام الأعمال",
      loanServices: "خدمات القروض",
      businessFinancingProducts: "منتجات تمويل الأعمال",
      loanServicesDesc: "استكشف مجموعتنا الشاملة من منتجات القروض المصممة لتلبية احتياجات الأعمال المتنوعة، من رأس المال العامل إلى التمويل المؤسسي الكبير.",
      advisoryServices: "الخدمات الاستشارية",
      strategicFinancial: "الاستشارات المالية الاستراتيجية",
      advisoryServicesDesc: "بالإضافة إلى التمويل، يساعدك مستشارونا الخبراء في تحسين هيكل رأس المال والوصول إلى حلول تمويل مبتكرة للنمو المستدام.",
      faq: "الأسئلة الشائعة",
      faqHeading: "أسئلة شائعة حول تمويل الأعمال",
      faqDesc: "اعثر على إجابات لأكثر الأسئلة شيوعاً حول خدماتنا وعملية التمويل."
    },
    // How It Works Page
    howItWorks: {
      title: "كيف يعمل",
      heading: "كيف يعمل",
      description: "من التقديم إلى الصرف، قمنا بتبسيط عملية القرض التجاري لتمويلك بشكل أسرع مع أقل قدر من المتاعب.",
      step: "الخطوة",
      steps: {
        consultation: "الاستشارة",
        consultationDesc: "نفهم احتياجات عملك وحجم المعاملات ومتطلبات التمويل للتوصية بالحل المناسب.",
        consultationDetails: ["مراجعة ملف العمل", "تقييم المتطلبات", "توصية الحل", "مناقشة الجدول الزمني"],
        documentCollection: "جمع المستندات",
        documentCollectionDesc: "يجمع فريقنا ويراجع جميع الوثائق المطلوبة لضمان تقديم طلب كامل وخالي من الأخطاء.",
        documentCollectionDetails: ["الرخصة التجارية وعقد التأسيس", "إقرارات ضريبة القيمة المضافة (آخر 4 أرباع)", "كشوف الحسابات البنكية", "نسخ جواز السفر والهوية الإماراتية"],
        bankSelection: "اختيار البنك",
        bankSelectionDesc: "بناءً على ملفك الشخصي، نطابقك مع أنسب البنوك من شبكة شركائنا لمعدلات موافقة أعلى.",
        bankSelectionDetails: ["مقارنة عروض البنوك المتعددة", "مطابقة الشروط لاحتياجاتك", "التفاوض على أفضل الأسعار", "تقديم أفضل الخيارات"],
        applicationSubmission: "تقديم الطلب",
        applicationSubmissionDesc: "نقدم طلبك مباشرة إلى البنك ونتابع نيابة عنك طوال العملية.",
        applicationSubmissionDetails: ["تقديم الطلب الكامل", "تسليم المستندات", "التنسيق مع البنك", "تتبع التقدم"],
        approval: "الموافقة",
        approvalDesc: "يراجع البنك طلبك ويوافق عليه. نساعد في الإعداد النهائي وأي خدمات إضافية تحتاجها.",
        approvalDetails: ["مراجعة الائتمان البنكي", "إنهاء الشروط", "تأكيد الموافقة", "تفعيل الحساب/القرض"]
      },
      whyChoose: "لماذا تختار عمليتنا؟",
      whyChooseDesc: "صممنا كل خطوة لتحقيق أقصى قدر من الكفاءة وتقليل جهدك",
      benefits: {
        secureConfidential: "آمن وسري",
        secureConfidentialDesc: "بياناتك محمية بأمان على مستوى البنوك طوال العملية",
        dedicatedSupport: "دعم مخصص",
        dedicatedSupportDesc: "مدير علاقات يرشدك خلال كل خطوة من الرحلة",
        expertGuidance: "إرشاد الخبراء",
        expertGuidanceDesc: "استفد من معرفتنا العميقة بالصناعة وعلاقاتنا المصرفية القوية"
      },
      ctaHeading: "هل أنت مستعد للبدء؟",
      ctaDesc: "اتخذ الخطوة الأولى نحو تأمين التمويل الذي يحتاجه عملك. فريقنا مستعد لإرشادك خلال العملية.",
      disclaimer: "*الجدول الزمني يخضع لملف المخاطر للعميل ونشاط العمل. الموافقة النهائية هي وفقاً لتقدير البنك وحده."
    },
    // Business Accounts Page
    businessAccounts: {
      badge: "حلول الخدمات المصرفية للأعمال",
      heading: "اختر الحساب المناسب",
      headingHighlight: "لعملك",
      description: "قارن بين مجموعة حسابات الأعمال لدينا عبر أفضل بنوك الإمارات واعثر على الخيار المثالي لاحتياجات شركتك المصرفية.",
      exploreAccounts: "استكشف الحسابات",
      whyChooseUs: "لماذا تختارنا",
      businessBankingSimple: "الخدمات المصرفية للأعمال بكل بساطة",
      businessBankingDesc: "نربطك بأفضل الحلول المصرفية المصممة لاحتياجات عملك.",
      benefits: {
        bankSecurity: "أمان على مستوى البنوك",
        bankSecurityDesc: "أموالك محمية ببروتوكولات أمان عالمية وتأمين.",
        fastOpening: "فتح حساب سريع",
        fastOpeningDesc: "احصل على حساب عملك خلال 5-7 أيام عمل مع عمليتنا المبسطة.",
        multiCurrency: "دعم العملات المتعددة",
        multiCurrencyDesc: "أجرِ أعمالك الدولية بسلاسة مع خيارات الحسابات متعددة العملات.",
        clientFocus: "تركيز 100% على العميل",
        clientFocusDesc: "نجاحك هو أولويتنا مع دعم مخصص وحلول مالية شخصية.",
        partnerNetwork: "شبكة البنوك الشريكة",
        partnerNetworkDesc: "اختر من أفضل بنوك الإمارات بما في ذلك ADCB ومشرق وراك بنك والمزيد.",
        dedicatedSupport: "دعم مخصص",
        dedicatedSupportDesc: "يرشدك متخصصونا خلال العملية بأكملها من التقديم إلى الموافقة."
      },
      accountTypes: "أنواع الحسابات",
      weHelpOpen: "نساعدك في فتح أي حساب تجاري",
      accountTypesDesc: "من الحسابات الجارية إلى حلول الضمان، نرشدك إلى الاختيار الصحيح.",
      ourProcess: "عمليتنا",
      howWeHelp: "كيف نساعدك في فتح حساب",
      processDesc: "عمليتنا المبسطة من 5 خطوات تضمن تجربة فتح حساب سلسة.",
      totalDays: "المجموع: 7-10 أيام",
      processDisclaimer: "*الجدول الزمني يخضع لملف المخاطر للعميل ونشاط العمل. لا نضمن فتح الحساب؛ الموافقة النهائية هي وفقاً لتقدير البنك وحده.",
      requiredDocuments: "المستندات المطلوبة",
      documentationReqs: "متطلبات التوثيق",
      documentationDesc: "جهز المستندات التالية بناءً على نوع شركتك.",
      forMainland: "للشركات في البر الرئيسي للإمارات",
      forFreeZone: "لشركات المناطق الحرة",
      forOffshore: "للشركات الخارجية",
      faq: "الأسئلة الشائعة",
      commonQuestions: "أسئلة شائعة حول حسابات الأعمال"
    },
    // Footer
    footer: {
      companyDesc: "شركة تعامل لخدمات مراجعة الائتمان ذ.م.م هي شريكك الموثوق لحلول تمويل الأعمال في الإمارات. نربط الشركات بالمنتجات المالية المناسبة.",
      services: "الخدمات",
      resources: "الموارد",
      howItWorks: "كيف يعمل",
      aboutUs: "من نحن",
      loanCalculator: "حاسبة القروض",
      faqs: "الأسئلة الشائعة",
      blog: "المدونة",
      contactUs: "اتصل بنا",
      subscribeNewsletter: "اشترك في النشرة الإخبارية",
      yourEmail: "بريدك الإلكتروني",
      subscribe: "اشترك",
      copyright: "© 2024 شركة تعامل لخدمات مراجعة الائتمان ذ.م.م. جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      cookiePolicy: "سياسة ملفات تعريف الارتباط"
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
      applyNow: "قدم الآن",
      talkToExpert: "تحدث مع خبير",
      contactUs: "تواصل معنا",
      day: "يوم",
      days: "أيام"
    }
  }
};
