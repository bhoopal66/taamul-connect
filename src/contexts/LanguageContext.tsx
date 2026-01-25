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
      faqTitle: "Frequently Asked Questions",
      faqHeading: "Common Questions About Business Financing",
      faqDesc: "Find answers to the most common questions about our services and financing process.",
      faq: {
        q1: "What are the basic eligibility requirements for a business loan?",
        a1: "To qualify for a business loan, your company typically needs to be registered in the UAE for at least 1-2 years, have a valid trade license, demonstrate consistent revenue (usually AED 500K+ annually), and have a good credit history.",
        q2: "What documents are required for a loan application?",
        a2: "Standard documentation includes: valid trade license, company registration documents (MOA/AOA), 6-12 months of bank statements, audited financial statements for the past 2 years, Emirates ID and passport copies of shareholders, and VAT registration certificate.",
        q3: "How long does the loan approval process take?",
        a3: "Our streamlined process typically takes 3-5 days from complete document submission to approval. Simple working capital facilities may be approved within 48-72 hours, while larger corporate loans may take 2-3 weeks.",
        q4: "What interest rates can I expect?",
        a4: "Interest rates depend on multiple factors including loan type, amount, tenure, collateral, and your company's financial profile. Rates typically range from 7% to 15% per annum."
      }
    },
    // Debt Advisory Page
    debtAdvisory: {
      badge: "Advisory Services",
      title: "Debt Advisory &",
      titleHighlight: "Structuring",
      description: "Enhancing financial flexibility through tailored debt solutions. We help businesses optimize their capital structure and secure the best financing terms.",
      getConsultation: "Get Consultation",
      servicesTitle: "Our Debt Advisory Services",
      servicesDesc: "Comprehensive solutions to optimize your debt portfolio and enhance financial stability.",
      services: {
        capitalStructure: "Capital Structure Optimization",
        capitalStructureDesc: "Designing the right mix of short-term and long-term debt to enhance liquidity and financial stability.",
        debtRefinancing: "Debt Refinancing & Liability Restructuring",
        debtRefinancingDesc: "Securing improved loan terms, reducing financial costs, and restructuring existing obligations to free up capital.",
        structuringNegotiation: "Structuring & Negotiation Support",
        structuringNegotiationDesc: "Negotiating with banks, credit funds, and private lenders to secure the most competitive financing terms.",
        riskAnalysis: "Financial Risk Analysis & Scenario Planning",
        riskAnalysisDesc: "Assessing capital requirements, debt repayment strategies, and financial risks to ensure sustainable debt servicing."
      },
      advantageTitle: "The",
      advantageHighlight: "Taamul",
      advantageWord: "Advantage",
      advantageDesc: "Expert debt advisory services backed by deep market expertise and strong lender relationships.",
      whyChoose: {
        strategicExpertise: "Strategic Expertise",
        strategicExpertiseDesc: "Deep understanding of capital markets and lending dynamics in the UAE",
        bankingRelationships: "Banking Relationships",
        bankingRelationshipsDesc: "Direct access to 50+ partner banks and financial institutions",
        fastExecution: "Fast Execution",
        fastExecutionDesc: "Streamlined processes for quick turnaround on complex transactions",
        riskMitigation: "Risk Mitigation",
        riskMitigationDesc: "Comprehensive risk analysis to protect your financial interests"
      },
      keyBenefits: "Key Benefits",
      ourProcess: "Our Process",
      benefits: {
        b1: "Reduce overall cost of capital through strategic debt structuring",
        b2: "Improve cash flow management with optimized repayment schedules",
        b3: "Access to 50+ banking partners for competitive terms",
        b4: "Expert guidance through complex financial negotiations",
        b5: "Tailored solutions aligned with your business objectives",
        b6: "Ongoing support for covenant compliance and monitoring"
      },
      process: {
        p1: "Initial consultation and financial health assessment",
        p2: "Analysis of current debt portfolio and capital structure",
        p3: "Development of customized restructuring strategy",
        p4: "Lender negotiation and term sheet finalization",
        p5: "Implementation and ongoing monitoring support"
      },
      ctaTitle: "Optimize Your Debt Structure Today",
      ctaDesc: "Let our experts help you navigate complex financial decisions and secure optimal terms.",
      scheduleConsultation: "Schedule Consultation",
      learnAboutUs: "Learn About Us"
    },
    // Mezzanine Financing Page
    mezzanineFinancing: {
      badge: "Hybrid Financing",
      title: "Mezzanine &",
      titleHighlight: "Hybrid Financing",
      description: "Flexible capital solutions for expansion and restructuring. Access growth funding without diluting your ownership stake.",
      exploreOptions: "Explore Options",
      servicesTitle: "Flexible Financing Solutions",
      servicesDesc: "Tailored hybrid financing options that bridge the gap between debt and equity.",
      services: {
        structuredMezzanine: "Structured Mezzanine Financing",
        structuredMezzanineDesc: "Bridging the gap between senior debt and equity for companies requiring growth capital without ownership dilution.",
        subordinatedDebt: "Subordinated Debt & Convertible Instruments",
        subordinatedDebtDesc: "Providing flexible funding with structured repayment options and investor-aligned incentives.",
        specialSituations: "Special Situations & Distressed Financing",
        specialSituationsDesc: "Assisting businesses with turnaround capital, bridging finance, and complex restructuring solutions.",
        customPayment: "Custom Payment & Exit Structures",
        customPaymentDesc: "Designing repayment models that align with cash flow cycles and long-term business objectives."
      },
      advantageTitle: "The",
      advantageHighlight: "Taamul",
      advantageWord: "Advantage",
      advantageDesc: "Flexible hybrid financing solutions designed for growth-focused businesses.",
      whyChoose: {
        tailoredStructures: "Tailored Structures",
        tailoredStructuresDesc: "Custom financing solutions designed around your specific business needs",
        growthFocus: "Growth Focus",
        growthFocusDesc: "Capital solutions that fuel expansion without sacrificing ownership",
        balancedTerms: "Balanced Terms",
        balancedTermsDesc: "Optimal balance between cost of capital and repayment flexibility",
        quickTurnaround: "Quick Turnaround",
        quickTurnaroundDesc: "Efficient execution for time-sensitive transactions and opportunities"
      },
      keyBenefits: "Key Benefits",
      idealUseCases: "Ideal Use Cases",
      benefits: {
        b1: "Access growth capital without diluting equity ownership",
        b2: "Flexible repayment structures aligned with cash flow",
        b3: "Bridge financing for acquisitions and expansion",
        b4: "Preserve working capital for operational needs",
        b5: "Customized terms based on business requirements",
        b6: "Expert guidance through complex financing structures"
      },
      useCases: {
        u1: "Business expansion and market entry",
        u2: "Acquisition financing and buyouts",
        u3: "Management buyouts (MBOs)",
        u4: "Capital restructuring and turnarounds",
        u5: "Real estate development projects",
        u6: "Bridge financing for strategic transactions"
      },
      ctaTitle: "Unlock Growth Without Dilution",
      ctaDesc: "Explore flexible financing structures tailored to your business needs and growth objectives.",
      talkToExpert: "Talk to Expert",
      learnAboutUs: "Learn About Us"
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
      commonQuestions: "Common Questions About Business Accounts",
      faqDesc: "Find answers to common questions about business accounts.",
      faqItems: {
        q1: "How long does it take to open a business account?",
        a1: "The account opening process typically takes 5-7 working days once all documents are submitted. Some banks may expedite the process for certain account types or existing customers.",
        q2: "Can I open a business account without a physical office?",
        a2: "Yes, many free zone companies can open accounts using their free zone address. However, some banks may require proof of a physical business presence for certain account types.",
        q3: "What is the minimum initial deposit required?",
        a3: "The minimum initial deposit varies by account type. Current accounts typically require AED 10,000, while corporate accounts may require AED 500,000 or more. WPS accounts have no minimum balance requirement.",
        q4: "Can I open multiple business accounts with different banks?",
        a4: "Yes, you can open accounts with multiple banks. In fact, we recommend maintaining accounts with 2-3 banks for better financial flexibility and backup options.",
        q5: "Do you help with account opening for new businesses?",
        a5: "Absolutely! We specialize in helping new businesses open their first corporate accounts. We'll guide you through the documentation requirements and connect you with banks that are most receptive to new business accounts.",
        q6: "What if my application is rejected?",
        a6: "If your application is rejected by one bank, we'll help you understand the reasons and work with alternative banks that may be more suitable for your business profile. Our extensive network increases your chances of approval."
      }
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
    },
    // Loan Pages Common
    loanPages: {
      businessLoans: "Business Loans",
      checkEligibility: "Check Eligibility",
      eligibilityCriteria: "Eligibility Criteria",
      requiredDocuments: "Required Documents",
      disclaimer: "*Interest rates and loan amounts are subject to lender's discretion and may vary based on credit assessment.",
      documentsDisclaimer: "*Banks may request additional documents at their discretion based on customer profile and business activity.",
      taamulAdvantage: "The Taamul Advantage",
      taamul: "Taamul",
      advantage: "Advantage",
      advantageDesc: "Experience a smarter way to access business financing with our client-first approach.",
      // Business Loans
      businessLoansTitle: "Business Loans for",
      businessLoansHighlight: "Business Expansion",
      businessLoansDesc: "Fixed-term financing solutions for capital investments, expansion projects, and business growth. We streamline applications to help you get quick approval with predictable monthly repayments.",
      businessLoansFeaturesTitle: "Why Choose Our Business Loans?",
      businessLoansFeaturesDesc: "Designed for UAE businesses looking for structured, long-term financing solutions.",
      flexibleAmounts: "Flexible Amounts",
      flexibleAmountsDesc: "Loans from AED 100,000 to AED 50 million based on your business needs",
      competitiveRates: "Competitive Rates",
      competitiveRatesDesc: "Interest rates starting from 7% p.a. with transparent fee structure",
      longTenure: "Long Tenure",
      longTenureDesc: "Repayment periods up to maximum 48 months with customizable EMI options",
      quickApproval: "Quick Approval",
      quickApprovalDesc: "Streamlined documentation process with faster turnaround times",
      businessLoansCtaTitle: "Ready to Grow Your Business?",
      businessLoansCtaDesc: "Get competitive financing for your business expansion. Start your application today.",
      // Working Capital
      workingCapitalTitle: "Working Capital",
      workingCapitalHighlight: "Solutions",
      workingCapitalDesc: "Bridge cash flow gaps and maintain smooth operations with flexible working capital financing designed for UAE businesses.",
      workingCapitalFeaturesTitle: "Why Choose Our Working Capital Loans?",
      workingCapitalFeaturesDesc: "Keep your business running smoothly with quick access to operational funds.",
      quickDisbursement: "Quick Disbursement",
      quickDisbursementDesc: "Fast access to funds to address immediate cash flow needs",
      revolvingFacility: "Revolving Facility",
      revolvingFacilityDesc: "Draw, repay, and redraw funds as per your business requirements",
      minimalDocumentation: "Minimal Documentation",
      minimalDocumentationDesc: "Streamlined process with reduced paperwork for faster approval",
      workingCapitalCtaTitle: "Need Funds for Daily Operations?",
      workingCapitalCtaDesc: "Quick approval process – get your working capital fast. Keep your business running smoothly.",
      // Secured Loans
      securedLoansTitle: "Secured Business",
      securedLoansHighlight: "Loans",
      securedLoansDesc: "Leverage your assets for better rates and higher loan amounts. Unlock the value in your property, equipment, or inventory.",
      securedLoansFeaturesTitle: "Benefits of Secured Financing",
      securedLoansFeaturesDesc: "Get the best rates and terms by leveraging your business assets.",
      lowerInterestRates: "Lower Interest Rates",
      lowerInterestRatesDesc: "Enjoy reduced rates starting from 6% p.a. due to collateral security",
      extendedTenure: "Extended Tenure",
      extendedTenureDesc: "Repayment periods up to 84 months for larger loan amounts",
      higherLoanAmounts: "Higher Loan Amounts",
      higherLoanAmountsDesc: "Access up to 80% of collateral value with secured financing",
      securedLoansCtaTitle: "Unlock Your Asset Value Today",
      securedLoansCtaDesc: "Get competitive rates with secured financing. Your assets work for you.",
      // SME Loans
      smeLoansTitle: "SME Financing",
      smeLoansHighlight: "Solutions",
      smeLoansDesc: "Tailored financing solutions designed specifically for small and medium enterprises in the UAE. Fuel your growth with the right funding partner.",
      smeLoansFeaturesTitle: "Why SMEs Choose Us",
      smeLoansFeaturesDesc: "We understand the unique challenges of growing businesses in the UAE market.",
      growthFocused: "Growth Focused",
      growthFocusedDesc: "Financing designed specifically to help SMEs scale and expand operations",
      fastProcessing: "Fast Processing",
      fastProcessingDesc: "Streamlined documentation process with faster turnaround times",
      dedicatedSupport: "Dedicated Support",
      dedicatedSupportDesc: "Personal relationship manager who understands SME challenges",
      flexibleTerms: "Flexible Terms",
      flexibleTermsDesc: "Customized repayment schedules aligned with your cash flow cycles",
      smeLoansCtaTitle: "Ready to Scale Your SME?",
      smeLoansCtaDesc: "Get tailored financing designed for your business growth. Let's discuss your needs.",
      // Corporate Loans
      corporateLoansTitle: "Corporate",
      corporateLoansHighlight: "Financing",
      corporateLoansDesc: "Large-scale financing solutions for established corporations. Competitive rates and flexible terms for your strategic initiatives.",
      corporateLoansFeaturesTitle: "Structured Financing",
      corporateLoansFeaturesDesc: "Sophisticated financial solutions for complex corporate requirements.",
      largeLoanAmounts: "Large Loan Amounts",
      largeLoanAmountsDesc: "Access financing from AED 10 million to AED 500 million for major initiatives",
      premiumRates: "Premium Rates",
      premiumRatesDesc: "Preferential interest rates starting from 5.5% p.a. for qualified corporates",
      multiCurrencyOptions: "Multi-Currency Options",
      multiCurrencyOptionsDesc: "Financing available in AED, USD, EUR and other major currencies",
      corporateLoansCtaTitle: "Let's Discuss Your Corporate Needs",
      corporateLoansCtaDesc: "Our corporate banking team is ready to structure the right solution for you.",
      // Equipment Financing
      equipmentTitle: "New & Used* Equipment",
      equipmentHighlight: "Financing",
      equipmentDesc: "Acquire new or used machinery, vehicles, and equipment without impacting your working capital. The equipment serves as its own collateral.",
      equipmentFeaturesTitle: "Benefits of Equipment Financing",
      equipmentFeaturesDesc: "Get the equipment you need while preserving your capital for operations.",
      upTo80Financing: "Up to 80% Equipment Financing",
      upTo80FinancingDesc: "Finance up to 80% of machinery and equipment costs",
      allAssetTypes: "All Asset Types",
      allAssetTypesDesc: "Finance machinery, vehicles, technology, and specialized equipment",
      maintenanceIncluded: "Maintenance Included",
      maintenanceIncludedDesc: "Optional packages that include maintenance and insurance coverage",
      equipmentCtaTitle: "Ready to Finance Purchase of Equipment?",
      equipmentCtaDesc: "Whether new or used, finance your equipment with competitive terms. Start your application today.",
      // Trade Finance
      tradeFinanceTitle: "Trade Finance",
      tradeFinanceHighlight: "Solutions",
      tradeFinanceDesc: "Facilitate international trade with LCs, guarantees, and import/export financing solutions. Secure your cross-border transactions.",
      tradeFinanceFeaturesTitle: "Comprehensive Trade Solutions",
      tradeFinanceFeaturesDesc: "Everything you need to manage international trade with confidence.",
      lettersOfCredit: "Letters of Credit",
      lettersOfCreditDesc: "Secure your international transactions with bank-backed LCs",
      importExportFinance: "Import/Export Finance",
      importExportFinanceDesc: "Pre and post-shipment financing for smooth trade operations",
      bankGuarantees: "Bank Guarantees",
      bankGuaranteesDesc: "Performance, advance payment, and bid bond guarantees",
      tradeFinanceCtaTitle: "Expand Your Global Trade",
      tradeFinanceCtaDesc: "Secure your international transactions with our trade finance solutions.",
      // Syndicated Loans
      syndicatedTitle: "Syndicated",
      syndicatedHighlight: "Loans",
      syndicatedDesc: "Access larger loan amounts through our network of partner banks and financial institutions. Ideal for major expansion projects.",
      syndicatedFeaturesTitle: "Benefits of Syndicated Loans",
      syndicatedFeaturesDesc: "Unlock larger financing through our consortium lending arrangements.",
      multipleLenders: "Multiple Lenders",
      multipleLendersDesc: "Access larger amounts through our network of partner banks and NBFCs",
      higherLimits: "Higher Limits",
      higherLimitsDesc: "Secure financing beyond single-bank limits for major projects",
      riskDistribution: "Risk Distribution",
      riskDistributionDesc: "Spread risk across multiple financial institutions for better terms",
      competitivePricing: "Competitive Pricing",
      competitivePricingDesc: "Benefit from competitive bidding between participating lenders",
      syndicatedCtaTitle: "Need Large-Scale Financing?",
      syndicatedCtaDesc: "Let us structure a syndicated lending arrangement tailored to your requirements.",
      // Common eligibility
      eligibility1Year: "Business operating in UAE for at least 1 year",
      eligibility2Years: "Business operating in UAE for at least 2 years",
      eligibility3Years: "Registered business in UAE for minimum 3 years",
      eligibility5Years: "Established corporation with 5+ years of operations",
      minTurnover500K: "Minimum annual turnover of AED 500K onwards",
      minTurnover1M: "Minimum annual turnover of AED 1 million",
      minTurnover2M: "Minimum annual turnover of AED 2 million",
      minTurnover5M: "Annual turnover over AED 5 million",
      minTurnover50M: "Annual turnover exceeding AED 50 million",
      validTradeLicense: "Valid trade license",
      auditedFinancials2Years: "Audited financial statements for 2+ years",
      auditedFinancials3Years: "Audited financial statements for 3+ years",
      positiveCredit: "Positive credit history with no defaults",
      uaeResidenceVisa: "UAE residence visa for signatories",
      // Common documents
      tradeLicenseMOA: "Trade License, Office Ejari & Memorandum of Association",
      bankStatements6to12: "Bank statements (6-12 months)",
      bankStatements12: "Bank statements (12 months)",
      passportCopies: "Passport copies of shareholders & EID of authorised signatory",
      vatReturns: "VAT returns of last 4 Qtrs",
      // Advantages
      authorizedDSA: "Authorized Direct Selling Agent (DSA)",
      authorizedDSADesc: "We work directly with leading banks and financial institutions as an authorized partner",
      noConsultancyFees: "No Consultancy or Success Fees",
      noConsultancyFeesDesc: "Our services come at zero cost to you – no hidden charges or success-based commissions",
      multipleFundingOptions: "Multiple Funding Options Under One Roof",
      multipleFundingOptionsDesc: "Access a wide range of lending partners and financing solutions through a single point of contact",
      smeStartupFriendly: "SME & Startup-Friendly Solutions",
      smeStartupFriendlyDesc: "Tailored financing options designed specifically for small businesses and emerging enterprises",
      endToEndSupport: "End-to-End Application Support",
      endToEndSupportDesc: "From documentation to disbursement, we guide you through every step of the process"
    },
    // Business Loans Page
    businessLoansPage: {
      loanCalculator: "Loan Eligibility Calculator",
      getInstantEstimate: "Get an instant estimate",
      annualTurnover: "Annual Turnover",
      minRequirement: "Minimum 1 year in business required",
      estimatedAmount: "Estimated Eligible Amount",
      estimateDisclaimer: "*This is an estimate. Actual amount may vary.",
      auditedFinancials2Years: "Audited financial statements (2 years)",
      companyProfile: "Company profile and business plan",
      // POS Section
      posFinancing: "POS Machine Financing",
      howPosWorks: "How POS Loan Works",
      posLoan: "POS Loan",
      works: "Works",
      posDesc: "Get financing based on your card payment transactions. A simple, transparent process designed for businesses with consistent POS sales.",
      sharePosData: "Share Your POS Data",
      sharePosDataDesc: "Provide access to your POS transaction history from the last 6 months",
      analyzeSales: "We Analyze Sales",
      analyzeSalesDesc: "Our team reviews your average monthly card sales and transaction patterns",
      loanCalculated: "Loan Amount Calculated",
      loanCalculatedDesc: "Eligible amount is determined based on your average monthly POS turnover",
      quickDisbursement: "Quick Disbursement",
      quickDisbursementDesc: "Once approved, funds are credited directly to your business account",
      posCalculator: "POS Loan Calculator",
      calculateEligible: "Calculate your eligible loan amount",
      selectBank: "Select Bank",
      max: "Max",
      annualPosTurnover: "Annual POS Turnover",
      bankMax: "Bank Max",
      eligibleLoanAmount: "Your Eligible Loan Amount",
      posDisclaimer: "*Actual loan amount depends on lender's assessment, credit history, and business profile.",
      posEligibility: "POS Loan Eligibility",
      posElig1: "Active POS machine with minimum 6 months history",
      posElig2: "Minimum monthly POS turnover of AED 50,000",
      posElig3: "Annual POS turnover must be at least 30% to 40% of total annual turnover",
      posElig4: "Valid trade license in UAE",
      posElig5: "Business bank account with POS transactions",
      posElig6: "No outstanding defaults on existing loans",
      whyPosFinancing: "Why Choose POS Financing?",
      posBenefit1: "No collateral required – your POS sales act as security",
      posBenefit2: "Faster approval compared to traditional business loans",
      posBenefit3: "Flexible repayment aligned with your cash flow",
      posBenefit4: "Minimal documentation required",
      posBenefit5: "Ideal for retail, F&B, and service businesses",
      talkAboutPos: "Talk to Expert About POS Loans"
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
      faqTitle: "الأسئلة الشائعة",
      faqHeading: "أسئلة شائعة حول تمويل الأعمال",
      faqDesc: "اعثر على إجابات لأكثر الأسئلة شيوعاً حول خدماتنا وعملية التمويل.",
      faq: {
        q1: "ما هي متطلبات الأهلية الأساسية للحصول على قرض تجاري؟",
        a1: "للتأهل للحصول على قرض تجاري، يجب أن تكون شركتك مسجلة في الإمارات لمدة 1-2 سنة على الأقل، ولديها رخصة تجارية سارية، وتُظهر إيرادات ثابتة (عادة 500 ألف درهم أو أكثر سنوياً)، ولديها سجل ائتماني جيد.",
        q2: "ما هي المستندات المطلوبة لتقديم طلب القرض؟",
        a2: "تشمل الوثائق القياسية: الرخصة التجارية السارية، مستندات تسجيل الشركة (عقد التأسيس/النظام الأساسي)، كشوف حساب بنكية لمدة 6-12 شهراً، البيانات المالية المدققة لآخر سنتين، نسخ الهوية الإماراتية وجواز السفر للمساهمين، وشهادة التسجيل الضريبي.",
        q3: "كم تستغرق عملية الموافقة على القرض؟",
        a3: "تستغرق عمليتنا المبسطة عادة 3-5 أيام من تقديم المستندات الكاملة حتى الموافقة. قد تتم الموافقة على تسهيلات رأس المال العامل البسيطة خلال 48-72 ساعة، بينما قد تستغرق القروض المؤسسية الكبيرة 2-3 أسابيع.",
        q4: "ما هي أسعار الفائدة المتوقعة؟",
        a4: "تعتمد أسعار الفائدة على عوامل متعددة بما في ذلك نوع القرض والمبلغ والمدة والضمانات والملف المالي لشركتك. تتراوح الأسعار عادة بين 7% و15% سنوياً."
      }
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
      commonQuestions: "أسئلة شائعة حول حسابات الأعمال",
      faqDesc: "اعثر على إجابات للأسئلة الشائعة حول حسابات الأعمال.",
      faqItems: {
        q1: "كم من الوقت يستغرق فتح حساب تجاري؟",
        a1: "تستغرق عملية فتح الحساب عادة 5-7 أيام عمل بعد تقديم جميع المستندات. قد تُسرّع بعض البنوك العملية لأنواع معينة من الحسابات أو العملاء الحاليين.",
        q2: "هل يمكنني فتح حساب تجاري بدون مكتب فعلي؟",
        a2: "نعم، يمكن للعديد من شركات المناطق الحرة فتح حسابات باستخدام عنوان المنطقة الحرة. ومع ذلك، قد تطلب بعض البنوك إثبات وجود مكان عمل فعلي لأنواع معينة من الحسابات.",
        q3: "ما هو الحد الأدنى للإيداع المطلوب؟",
        a3: "يختلف الحد الأدنى للإيداع حسب نوع الحساب. تتطلب الحسابات الجارية عادة 10,000 درهم، بينما قد تتطلب حسابات الشركات 500,000 درهم أو أكثر. لا توجد متطلبات حد أدنى للرصيد لحسابات WPS.",
        q4: "هل يمكنني فتح حسابات تجارية متعددة في بنوك مختلفة؟",
        a4: "نعم، يمكنك فتح حسابات في بنوك متعددة. في الواقع، نوصي بالحفاظ على حسابات في 2-3 بنوك لمرونة مالية أفضل وخيارات احتياطية.",
        q5: "هل تساعدون في فتح حسابات للشركات الجديدة؟",
        a5: "بالتأكيد! نحن متخصصون في مساعدة الشركات الجديدة في فتح حساباتها المؤسسية الأولى. سنرشدك خلال متطلبات التوثيق ونربطك بالبنوك الأكثر تقبلاً لحسابات الشركات الجديدة.",
        q6: "ماذا لو تم رفض طلبي؟",
        a6: "إذا تم رفض طلبك من بنك واحد، سنساعدك في فهم الأسباب والعمل مع بنوك بديلة قد تكون أكثر ملاءمة لملف عملك. شبكتنا الواسعة تزيد من فرص موافقتك."
      }
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
    },
    // Loan Pages Common
    loanPages: {
      businessLoans: "قروض الأعمال",
      checkEligibility: "تحقق من الأهلية",
      eligibilityCriteria: "معايير الأهلية",
      requiredDocuments: "المستندات المطلوبة",
      disclaimer: "*أسعار الفائدة ومبالغ القروض تخضع لتقدير المقرض وقد تختلف بناءً على تقييم الائتمان.",
      documentsDisclaimer: "*قد تطلب البنوك مستندات إضافية حسب تقديرها بناءً على ملف العميل ونشاط العمل.",
      taamulAdvantage: "ميزة تعامل",
      taamul: "تعامل",
      advantage: "ميزة",
      advantageDesc: "اختبر طريقة أذكى للوصول إلى تمويل الأعمال مع نهجنا الذي يركز على العميل أولاً.",
      // Business Loans
      businessLoansTitle: "قروض الأعمال من أجل",
      businessLoansHighlight: "توسع الأعمال",
      businessLoansDesc: "حلول تمويل محددة المدة لاستثمارات رأس المال ومشاريع التوسع ونمو الأعمال. نحن نبسط الطلبات لمساعدتك في الحصول على موافقة سريعة مع أقساط شهرية متوقعة.",
      businessLoansFeaturesTitle: "لماذا تختار قروض الأعمال لدينا؟",
      businessLoansFeaturesDesc: "مصممة للشركات الإماراتية التي تبحث عن حلول تمويل منظمة وطويلة الأجل.",
      flexibleAmounts: "مبالغ مرنة",
      flexibleAmountsDesc: "قروض من 100,000 درهم إلى 50 مليون درهم بناءً على احتياجات عملك",
      competitiveRates: "أسعار تنافسية",
      competitiveRatesDesc: "أسعار فائدة تبدأ من 7% سنوياً مع هيكل رسوم شفاف",
      longTenure: "مدة طويلة",
      longTenureDesc: "فترات سداد تصل إلى 48 شهراً كحد أقصى مع خيارات أقساط قابلة للتخصيص",
      quickApproval: "موافقة سريعة",
      quickApprovalDesc: "عملية توثيق مبسطة مع أوقات استجابة أسرع",
      businessLoansCtaTitle: "هل أنت مستعد لتنمية عملك؟",
      businessLoansCtaDesc: "احصل على تمويل تنافسي لتوسيع عملك. ابدأ طلبك اليوم.",
      // Working Capital
      workingCapitalTitle: "رأس المال العامل",
      workingCapitalHighlight: "الحلول",
      workingCapitalDesc: "سد فجوات التدفق النقدي والحفاظ على العمليات السلسة مع تمويل رأس المال العامل المرن المصمم للشركات الإماراتية.",
      workingCapitalFeaturesTitle: "لماذا تختار قروض رأس المال العامل لدينا؟",
      workingCapitalFeaturesDesc: "حافظ على سير عملك بسلاسة مع الوصول السريع إلى الأموال التشغيلية.",
      quickDisbursement: "صرف سريع",
      quickDisbursementDesc: "وصول سريع إلى الأموال لمعالجة احتياجات التدفق النقدي الفورية",
      revolvingFacility: "تسهيل متجدد",
      revolvingFacilityDesc: "اسحب وسدد وأعد السحب حسب متطلبات عملك",
      minimalDocumentation: "توثيق بسيط",
      minimalDocumentationDesc: "عملية مبسطة مع أوراق أقل للموافقة الأسرع",
      workingCapitalCtaTitle: "هل تحتاج أموال للعمليات اليومية؟",
      workingCapitalCtaDesc: "عملية موافقة سريعة – احصل على رأس المال العامل بسرعة. حافظ على سير عملك بسلاسة.",
      // Secured Loans
      securedLoansTitle: "قروض الأعمال",
      securedLoansHighlight: "المضمونة",
      securedLoansDesc: "استفد من أصولك للحصول على أسعار أفضل ومبالغ قروض أعلى. أطلق العنان لقيمة ممتلكاتك أو معداتك أو مخزونك.",
      securedLoansFeaturesTitle: "فوائد التمويل المضمون",
      securedLoansFeaturesDesc: "احصل على أفضل الأسعار والشروط من خلال الاستفادة من أصول عملك.",
      lowerInterestRates: "أسعار فائدة أقل",
      lowerInterestRatesDesc: "استمتع بأسعار مخفضة تبدأ من 6% سنوياً بفضل ضمان الرهن",
      extendedTenure: "مدة ممتدة",
      extendedTenureDesc: "فترات سداد تصل إلى 84 شهراً لمبالغ القروض الكبيرة",
      higherLoanAmounts: "مبالغ قروض أعلى",
      higherLoanAmountsDesc: "الوصول إلى ما يصل إلى 80% من قيمة الضمان مع التمويل المضمون",
      securedLoansCtaTitle: "أطلق العنان لقيمة أصولك اليوم",
      securedLoansCtaDesc: "احصل على أسعار تنافسية مع التمويل المضمون. أصولك تعمل لصالحك.",
      // SME Loans
      smeLoansTitle: "تمويل المشاريع الصغيرة والمتوسطة",
      smeLoansHighlight: "الحلول",
      smeLoansDesc: "حلول تمويل مخصصة مصممة خصيصاً للمؤسسات الصغيرة والمتوسطة في الإمارات. ادعم نموك مع الشريك التمويلي المناسب.",
      smeLoansFeaturesTitle: "لماذا تختارنا المشاريع الصغيرة والمتوسطة",
      smeLoansFeaturesDesc: "نحن نفهم التحديات الفريدة للشركات النامية في سوق الإمارات.",
      growthFocused: "التركيز على النمو",
      growthFocusedDesc: "تمويل مصمم خصيصاً لمساعدة المشاريع الصغيرة والمتوسطة على التوسع والنمو",
      fastProcessing: "معالجة سريعة",
      fastProcessingDesc: "عملية توثيق مبسطة مع أوقات استجابة أسرع",
      dedicatedSupport: "دعم مخصص",
      dedicatedSupportDesc: "مدير علاقات شخصي يفهم تحديات المشاريع الصغيرة والمتوسطة",
      flexibleTerms: "شروط مرنة",
      flexibleTermsDesc: "جداول سداد مخصصة تتوافق مع دورات التدفق النقدي الخاصة بك",
      smeLoansCtaTitle: "هل أنت مستعد لتوسيع مشروعك الصغير والمتوسط؟",
      smeLoansCtaDesc: "احصل على تمويل مخصص مصمم لنمو عملك. دعنا نناقش احتياجاتك.",
      // Corporate Loans
      corporateLoansTitle: "تمويل",
      corporateLoansHighlight: "الشركات",
      corporateLoansDesc: "حلول تمويل كبيرة للشركات الراسخة. أسعار تنافسية وشروط مرنة لمبادراتك الاستراتيجية.",
      corporateLoansFeaturesTitle: "التمويل المهيكل",
      corporateLoansFeaturesDesc: "حلول مالية متطورة للمتطلبات المؤسسية المعقدة.",
      largeLoanAmounts: "مبالغ قروض كبيرة",
      largeLoanAmountsDesc: "الوصول إلى تمويل من 10 مليون إلى 500 مليون درهم للمبادرات الكبرى",
      premiumRates: "أسعار مميزة",
      premiumRatesDesc: "أسعار فائدة تفضيلية تبدأ من 5.5% سنوياً للشركات المؤهلة",
      multiCurrencyOptions: "خيارات العملات المتعددة",
      multiCurrencyOptionsDesc: "تمويل متاح بالدرهم والدولار واليورو والعملات الرئيسية الأخرى",
      corporateLoansCtaTitle: "دعنا نناقش احتياجات شركتك",
      corporateLoansCtaDesc: "فريق الخدمات المصرفية للشركات لدينا مستعد لهيكلة الحل المناسب لك.",
      // Equipment Financing
      equipmentTitle: "تمويل المعدات الجديدة والمستعملة*",
      equipmentHighlight: "التمويل",
      equipmentDesc: "احصل على الآلات والمركبات والمعدات الجديدة أو المستعملة دون التأثير على رأس المال العامل. المعدات تعمل كضمان خاص بها.",
      equipmentFeaturesTitle: "فوائد تمويل المعدات",
      equipmentFeaturesDesc: "احصل على المعدات التي تحتاجها مع الحفاظ على رأس مالك للعمليات.",
      upTo80Financing: "تمويل يصل إلى 80% من المعدات",
      upTo80FinancingDesc: "تمويل يصل إلى 80% من تكاليف الآلات والمعدات",
      allAssetTypes: "جميع أنواع الأصول",
      allAssetTypesDesc: "تمويل الآلات والمركبات والتكنولوجيا والمعدات المتخصصة",
      maintenanceIncluded: "الصيانة مشمولة",
      maintenanceIncludedDesc: "باقات اختيارية تشمل الصيانة والتغطية التأمينية",
      equipmentCtaTitle: "هل أنت مستعد لتمويل شراء المعدات؟",
      equipmentCtaDesc: "سواء كانت جديدة أو مستعملة، قم بتمويل معداتك بشروط تنافسية. ابدأ طلبك اليوم.",
      // Trade Finance
      tradeFinanceTitle: "تمويل التجارة",
      tradeFinanceHighlight: "الحلول",
      tradeFinanceDesc: "تسهيل التجارة الدولية مع خطابات الاعتماد والضمانات وحلول تمويل الاستيراد والتصدير. أمّن معاملاتك عبر الحدود.",
      tradeFinanceFeaturesTitle: "حلول تجارية شاملة",
      tradeFinanceFeaturesDesc: "كل ما تحتاجه لإدارة التجارة الدولية بثقة.",
      lettersOfCredit: "خطابات الاعتماد",
      lettersOfCreditDesc: "أمّن معاملاتك الدولية مع خطابات اعتماد مدعومة من البنك",
      importExportFinance: "تمويل الاستيراد/التصدير",
      importExportFinanceDesc: "تمويل ما قبل وبعد الشحن للعمليات التجارية السلسة",
      bankGuarantees: "الضمانات البنكية",
      bankGuaranteesDesc: "ضمانات الأداء والدفعة المقدمة وضمانات العطاء",
      tradeFinanceCtaTitle: "وسّع تجارتك العالمية",
      tradeFinanceCtaDesc: "أمّن معاملاتك الدولية مع حلول تمويل التجارة لدينا.",
      // Syndicated Loans
      syndicatedTitle: "القروض",
      syndicatedHighlight: "المشتركة",
      syndicatedDesc: "الوصول إلى مبالغ قروض أكبر من خلال شبكتنا من البنوك والمؤسسات المالية الشريكة. مثالية لمشاريع التوسع الكبرى.",
      syndicatedFeaturesTitle: "فوائد القروض المشتركة",
      syndicatedFeaturesDesc: "افتح تمويلاً أكبر من خلال ترتيبات الإقراض الجماعي لدينا.",
      multipleLenders: "مقرضون متعددون",
      multipleLendersDesc: "الوصول إلى مبالغ أكبر من خلال شبكتنا من البنوك والمؤسسات المالية غير المصرفية الشريكة",
      higherLimits: "حدود أعلى",
      higherLimitsDesc: "تأمين تمويل يتجاوز حدود البنك الواحد للمشاريع الكبرى",
      riskDistribution: "توزيع المخاطر",
      riskDistributionDesc: "توزيع المخاطر عبر مؤسسات مالية متعددة للحصول على شروط أفضل",
      competitivePricing: "تسعير تنافسي",
      competitivePricingDesc: "استفد من المنافسة بين المقرضين المشاركين",
      syndicatedCtaTitle: "هل تحتاج تمويلاً كبيراً؟",
      syndicatedCtaDesc: "دعنا نهيكل ترتيب إقراض مشترك مصمم لمتطلباتك.",
      // Common eligibility
      eligibility1Year: "شركة تعمل في الإمارات لمدة سنة واحدة على الأقل",
      eligibility2Years: "شركة تعمل في الإمارات لمدة سنتين على الأقل",
      eligibility3Years: "شركة مسجلة في الإمارات لمدة 3 سنوات على الأقل",
      eligibility5Years: "شركة راسخة بخبرة 5+ سنوات من العمليات",
      minTurnover500K: "حد أدنى لرقم الأعمال السنوي 500 ألف درهم فأكثر",
      minTurnover1M: "حد أدنى لرقم الأعمال السنوي مليون درهم",
      minTurnover2M: "حد أدنى لرقم الأعمال السنوي 2 مليون درهم",
      minTurnover5M: "رقم أعمال سنوي يتجاوز 5 ملايين درهم",
      minTurnover50M: "رقم أعمال سنوي يتجاوز 50 مليون درهم",
      validTradeLicense: "رخصة تجارية سارية",
      auditedFinancials2Years: "بيانات مالية مدققة لمدة سنتين أو أكثر",
      auditedFinancials3Years: "بيانات مالية مدققة لمدة 3 سنوات أو أكثر",
      positiveCredit: "سجل ائتماني إيجابي بدون تعثرات",
      uaeResidenceVisa: "تأشيرة إقامة إماراتية للموقعين",
      // Common documents
      tradeLicenseMOA: "الرخصة التجارية وإيجاري المكتب وعقد التأسيس",
      bankStatements6to12: "كشوف حساب بنكية (6-12 شهراً)",
      bankStatements12: "كشوف حساب بنكية (12 شهراً)",
      passportCopies: "نسخ جوازات السفر للمساهمين والهوية الإماراتية للموقع المخول",
      vatReturns: "إقرارات ضريبة القيمة المضافة لآخر 4 أرباع",
      // Advantages
      authorizedDSA: "وكيل مبيعات مباشر معتمد (DSA)",
      authorizedDSADesc: "نعمل مباشرة مع البنوك والمؤسسات المالية الرائدة كشريك معتمد",
      noConsultancyFees: "بدون رسوم استشارية أو نجاح",
      noConsultancyFeesDesc: "خدماتنا مجانية بالكامل - لا رسوم خفية أو عمولات مبنية على النجاح",
      multipleFundingOptions: "خيارات تمويل متعددة تحت سقف واحد",
      multipleFundingOptionsDesc: "الوصول إلى مجموعة واسعة من شركاء الإقراض وحلول التمويل من خلال نقطة اتصال واحدة",
      smeStartupFriendly: "حلول صديقة للمشاريع الصغيرة والناشئة",
      smeStartupFriendlyDesc: "خيارات تمويل مخصصة مصممة خصيصاً للشركات الصغيرة والمؤسسات الناشئة",
      endToEndSupport: "دعم من البداية إلى النهاية",
      endToEndSupportDesc: "من التوثيق إلى الصرف، نرشدك خلال كل خطوة من العملية"
    },
    // Business Loans Page
    businessLoansPage: {
      loanCalculator: "حاسبة أهلية القرض",
      getInstantEstimate: "احصل على تقدير فوري",
      annualTurnover: "رقم الأعمال السنوي",
      minRequirement: "مطلوب سنة واحدة على الأقل في العمل",
      estimatedAmount: "المبلغ المؤهل المقدر",
      estimateDisclaimer: "*هذا تقدير فقط. قد يختلف المبلغ الفعلي.",
      auditedFinancials2Years: "بيانات مالية مدققة (سنتين)",
      companyProfile: "ملف الشركة وخطة العمل",
      // POS Section
      posFinancing: "تمويل أجهزة نقاط البيع",
      howPosWorks: "كيف يعمل قرض نقاط البيع",
      posLoan: "قرض نقاط البيع",
      works: "يعمل",
      posDesc: "احصل على تمويل بناءً على معاملات بطاقات الدفع الخاصة بك. عملية بسيطة وشفافة مصممة للشركات ذات مبيعات نقاط البيع المستقرة.",
      sharePosData: "شارك بيانات نقاط البيع",
      sharePosDataDesc: "وفر الوصول إلى سجل معاملات نقاط البيع للأشهر الستة الماضية",
      analyzeSales: "نحلل المبيعات",
      analyzeSalesDesc: "يراجع فريقنا متوسط مبيعات البطاقات الشهرية وأنماط المعاملات",
      loanCalculated: "حساب مبلغ القرض",
      loanCalculatedDesc: "يتم تحديد المبلغ المؤهل بناءً على متوسط إيرادات نقاط البيع الشهرية",
      quickDisbursement: "صرف سريع",
      quickDisbursementDesc: "بمجرد الموافقة، يتم إيداع الأموال مباشرة في حساب عملك",
      posCalculator: "حاسبة قرض نقاط البيع",
      calculateEligible: "احسب مبلغ القرض المؤهل",
      selectBank: "اختر البنك",
      max: "الحد الأقصى",
      annualPosTurnover: "إيرادات نقاط البيع السنوية",
      bankMax: "الحد الأقصى للبنك",
      eligibleLoanAmount: "مبلغ القرض المؤهل",
      posDisclaimer: "*مبلغ القرض الفعلي يعتمد على تقييم المقرض والسجل الائتماني وملف العمل.",
      posEligibility: "أهلية قرض نقاط البيع",
      posElig1: "جهاز نقاط بيع نشط مع تاريخ لا يقل عن 6 أشهر",
      posElig2: "حد أدنى لإيرادات نقاط البيع الشهرية 50,000 درهم",
      posElig3: "يجب أن تكون إيرادات نقاط البيع السنوية 30% إلى 40% على الأقل من إجمالي الإيرادات السنوية",
      posElig4: "رخصة تجارية سارية في الإمارات",
      posElig5: "حساب بنكي تجاري مع معاملات نقاط البيع",
      posElig6: "لا توجد تعثرات على القروض الحالية",
      whyPosFinancing: "لماذا تختار تمويل نقاط البيع؟",
      posBenefit1: "لا ضمان مطلوب – مبيعات نقاط البيع تعمل كضمان",
      posBenefit2: "موافقة أسرع مقارنة بقروض الأعمال التقليدية",
      posBenefit3: "سداد مرن يتوافق مع تدفقك النقدي",
      posBenefit4: "توثيق بسيط مطلوب",
      posBenefit5: "مثالي لشركات التجزئة والمطاعم والخدمات",
      talkAboutPos: "تحدث مع خبير حول قروض نقاط البيع"
    },
    // Debt Advisory Page
    debtAdvisory: {
      badge: "الخدمات الاستشارية",
      title: "استشارات وهيكلة",
      titleHighlight: "الديون",
      description: "تعزيز المرونة المالية من خلال حلول ديون مخصصة. نساعد الشركات في تحسين هيكل رأس المال وتأمين أفضل شروط التمويل.",
      getConsultation: "احصل على استشارة",
      servicesTitle: "خدماتنا الاستشارية للديون",
      servicesDesc: "حلول شاملة لتحسين محفظة ديونك وتعزيز الاستقرار المالي.",
      services: {
        capitalStructure: "تحسين هيكل رأس المال",
        capitalStructureDesc: "تصميم المزيج الصحيح من الديون قصيرة وطويلة الأجل لتعزيز السيولة والاستقرار المالي.",
        debtRefinancing: "إعادة تمويل الديون وإعادة هيكلة الالتزامات",
        debtRefinancingDesc: "تأمين شروط قروض محسنة، وخفض التكاليف المالية، وإعادة هيكلة الالتزامات الحالية لتحرير رأس المال.",
        structuringNegotiation: "دعم الهيكلة والتفاوض",
        structuringNegotiationDesc: "التفاوض مع البنوك وصناديق الائتمان والمقرضين الخاصين لتأمين أكثر شروط التمويل تنافسية.",
        riskAnalysis: "تحليل المخاطر المالية والتخطيط للسيناريوهات",
        riskAnalysisDesc: "تقييم متطلبات رأس المال واستراتيجيات سداد الديون والمخاطر المالية لضمان خدمة ديون مستدامة."
      },
      advantageTitle: "ميزة",
      advantageHighlight: "تعامل",
      advantageWord: "",
      advantageDesc: "خدمات استشارية متخصصة في الديون مدعومة بخبرة سوقية عميقة وعلاقات قوية مع المقرضين.",
      whyChoose: {
        strategicExpertise: "الخبرة الاستراتيجية",
        strategicExpertiseDesc: "فهم عميق لأسواق رأس المال وديناميكيات الإقراض في الإمارات",
        bankingRelationships: "العلاقات المصرفية",
        bankingRelationshipsDesc: "وصول مباشر إلى أكثر من 50 بنك شريك ومؤسسة مالية",
        fastExecution: "التنفيذ السريع",
        fastExecutionDesc: "عمليات مبسطة للتحول السريع في المعاملات المعقدة",
        riskMitigation: "تخفيف المخاطر",
        riskMitigationDesc: "تحليل شامل للمخاطر لحماية مصالحك المالية"
      },
      keyBenefits: "الفوائد الرئيسية",
      ourProcess: "عمليتنا",
      benefits: {
        b1: "خفض التكلفة الإجمالية لرأس المال من خلال هيكلة الديون الاستراتيجية",
        b2: "تحسين إدارة التدفق النقدي مع جداول سداد محسنة",
        b3: "الوصول إلى أكثر من 50 شريك مصرفي للحصول على شروط تنافسية",
        b4: "إرشاد الخبراء خلال المفاوضات المالية المعقدة",
        b5: "حلول مخصصة تتوافق مع أهداف عملك",
        b6: "دعم مستمر للامتثال للشروط والمراقبة"
      },
      process: {
        p1: "الاستشارة الأولية وتقييم الصحة المالية",
        p2: "تحليل محفظة الديون الحالية وهيكل رأس المال",
        p3: "تطوير استراتيجية إعادة هيكلة مخصصة",
        p4: "التفاوض مع المقرضين ووضع اللمسات النهائية على صحيفة الشروط",
        p5: "التنفيذ ودعم المراقبة المستمرة"
      },
      ctaTitle: "حسّن هيكل ديونك اليوم",
      ctaDesc: "دع خبراءنا يساعدونك في التنقل عبر القرارات المالية المعقدة وتأمين الشروط المثلى.",
      scheduleConsultation: "جدولة استشارة",
      learnAboutUs: "تعرف علينا"
    },
    // Mezzanine Financing Page
    mezzanineFinancing: {
      badge: "التمويل المختلط",
      title: "التمويل المتوسط و",
      titleHighlight: "المختلط",
      description: "حلول رأس مال مرنة للتوسع وإعادة الهيكلة. احصل على تمويل النمو دون تخفيف حصتك في الملكية.",
      exploreOptions: "استكشف الخيارات",
      servicesTitle: "حلول تمويل مرنة",
      servicesDesc: "خيارات تمويل مختلطة مصممة لسد الفجوة بين الديون وحقوق الملكية.",
      services: {
        structuredMezzanine: "التمويل المتوسط المهيكل",
        structuredMezzanineDesc: "سد الفجوة بين الديون الرئيسية وحقوق الملكية للشركات التي تحتاج رأس مال للنمو دون تخفيف الملكية.",
        subordinatedDebt: "الديون الثانوية والأدوات القابلة للتحويل",
        subordinatedDebtDesc: "توفير تمويل مرن مع خيارات سداد مهيكلة وحوافز متوافقة مع المستثمرين.",
        specialSituations: "الحالات الخاصة والتمويل المتعثر",
        specialSituationsDesc: "مساعدة الشركات برأس مال التحول والتمويل الجسري وحلول إعادة الهيكلة المعقدة.",
        customPayment: "هياكل الدفع والخروج المخصصة",
        customPaymentDesc: "تصميم نماذج سداد تتوافق مع دورات التدفق النقدي وأهداف العمل طويلة الأجل."
      },
      advantageTitle: "ميزة",
      advantageHighlight: "تعامل",
      advantageWord: "",
      advantageDesc: "حلول تمويل مختلطة مرنة مصممة للشركات التي تركز على النمو.",
      whyChoose: {
        tailoredStructures: "هياكل مخصصة",
        tailoredStructuresDesc: "حلول تمويل مخصصة مصممة حول احتياجات عملك المحددة",
        growthFocus: "التركيز على النمو",
        growthFocusDesc: "حلول رأس المال التي تغذي التوسع دون التضحية بالملكية",
        balancedTerms: "شروط متوازنة",
        balancedTermsDesc: "توازن مثالي بين تكلفة رأس المال ومرونة السداد",
        quickTurnaround: "تحول سريع",
        quickTurnaroundDesc: "تنفيذ فعال للمعاملات الحساسة للوقت والفرص"
      },
      keyBenefits: "الفوائد الرئيسية",
      idealUseCases: "حالات الاستخدام المثالية",
      benefits: {
        b1: "الوصول إلى رأس مال النمو دون تخفيف ملكية الأسهم",
        b2: "هياكل سداد مرنة متوافقة مع التدفق النقدي",
        b3: "تمويل جسري للاستحواذات والتوسع",
        b4: "الحفاظ على رأس المال العامل للاحتياجات التشغيلية",
        b5: "شروط مخصصة بناءً على متطلبات العمل",
        b6: "إرشاد الخبراء خلال هياكل التمويل المعقدة"
      },
      useCases: {
        u1: "توسع الأعمال ودخول السوق",
        u2: "تمويل الاستحواذ والشراء",
        u3: "الاستحواذ الإداري (MBOs)",
        u4: "إعادة هيكلة رأس المال والتحولات",
        u5: "مشاريع التطوير العقاري",
        u6: "التمويل الجسري للمعاملات الاستراتيجية"
      },
      ctaTitle: "أطلق النمو بدون تخفيف",
      ctaDesc: "استكشف هياكل تمويل مرنة مصممة لاحتياجات عملك وأهداف النمو.",
      talkToExpert: "تحدث مع خبير",
      learnAboutUs: "تعرف علينا"
    }
  }
};
