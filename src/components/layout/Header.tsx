import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import taamulLogo from "@/assets/taamul-logo-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const loanServices = [
    { name: t('loanServices.businessLoans'), href: "/loans/business-loans", description: t('loanServices.businessLoansDesc') },
    { name: t('loanServices.workingCapital'), href: "/loans/working-capital", description: t('loanServices.workingCapitalDesc') },
    { name: t('loanServices.securedLoans'), href: "/loans/secured-loans", description: t('loanServices.securedLoansDesc') },
    { name: t('loanServices.smeLoans'), href: "/loans/sme-loans", description: t('loanServices.smeLoansDesc') },
    { name: t('loanServices.corporateLoans'), href: "/loans/corporate-loans", description: t('loanServices.corporateLoansDesc') },
    { name: t('loanServices.equipmentFinancing'), href: "/loans/equipment-financing", description: t('loanServices.equipmentFinancingDesc') },
    { name: t('loanServices.tradeFinance'), href: "/loans/trade-finance", description: t('loanServices.tradeFinanceDesc') },
    { name: t('loanServices.syndicatedLoans'), href: "/loans/syndicated", description: t('loanServices.syndicatedLoansDesc') },
  ];

  const advisoryServices = [
    { name: t('advisoryServices.debtAdvisory'), href: "/services/debt-advisory", description: t('advisoryServices.debtAdvisoryDesc') },
    { name: t('advisoryServices.mezzanineFinancing'), href: "/services/mezzanine-financing", description: t('advisoryServices.mezzanineFinancingDesc') },
    { name: t('advisoryServices.bankFinancing'), href: "/services", description: t('advisoryServices.bankFinancingDesc') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isLoanActive = () => location.pathname.startsWith("/loans/");
  const isServiceActive = () => location.pathname.startsWith("/services");

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className={cn("flex items-center justify-between h-10 text-sm", isRTL && "flex-row-reverse")}>
            <div className={cn("flex items-center gap-6", isRTL && "flex-row-reverse")}>
              <a href="tel:+97142234567" className={cn("flex items-center gap-2 hover:text-accent transition-colors", isRTL && "flex-row-reverse")}>
                <Phone className="h-3.5 w-3.5" />
                +971 4 223 4567
              </a>
              <a href="mailto:info@taamul.ae" className={cn("flex items-center gap-2 hover:text-accent transition-colors", isRTL && "flex-row-reverse")}>
                <Mail className="h-3.5 w-3.5" />
                info@taamul.ae
              </a>
            </div>
            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              <span className="text-primary-foreground/80">{t('topBar.tagline')}</span>
              <button
                onClick={toggleLanguage}
                className={cn("flex items-center gap-1.5 px-3 py-1 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors", isRTL && "flex-row-reverse")}
              >
                <Globe className="h-3.5 w-3.5" />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-card border-b",
          isScrolled ? "shadow-card border-border" : "border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className={cn("flex items-center justify-between h-16 lg:h-20", isRTL && "flex-row-reverse")}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={taamulLogo} alt="Taamul Credit Review Services" className="h-[8.25rem] w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className={cn("hidden lg:flex items-center gap-8", isRTL && "flex-row-reverse")}>
              <NavigationMenu>
                <NavigationMenuList className={cn("gap-6", isRTL && "flex-row-reverse")}>
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent",
                        isActive("/") ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.home')}
                    </Link>
                  </NavigationMenuItem>

                  {/* Loans Mega Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-[15px] font-medium bg-transparent hover:bg-transparent hover:text-accent data-[state=open]:bg-transparent px-0 h-auto",
                        isLoanActive() ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.loans')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-card border border-border rounded-lg shadow-elevated">
                        <div className={cn("mb-4 pb-3 border-b border-border", isRTL && "text-right")}>
                          <h3 className="font-semibold text-foreground">{t('nav.loanProducts')}</h3>
                          <p className="text-sm text-muted-foreground">{t('nav.comprehensiveFinancing')}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {loanServices.map((loan) => (
                            <NavigationMenuLink key={loan.href} asChild>
                              <Link
                                to={loan.href}
                                className={cn(
                                  "block p-3 rounded-lg hover:bg-muted transition-colors group",
                                  isActive(loan.href) && "bg-accent/5",
                                  isRTL && "text-right"
                                )}
                              >
                                <span className={cn(
                                  "font-medium text-sm group-hover:text-accent transition-colors",
                                  isActive(loan.href) ? "text-accent" : "text-foreground"
                                )}>
                                  {loan.name}
                                </span>
                                <p className="text-xs text-muted-foreground mt-0.5">{loan.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <div className={cn("mt-4 pt-3 border-t border-border", isRTL && "text-right")}>
                          <Link
                            to="/services"
                            className="text-sm text-accent hover:text-accent/80 font-medium"
                          >
                            {t('nav.viewAllServices')} {isRTL ? '←' : '→'}
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-[15px] font-medium bg-transparent hover:bg-transparent hover:text-accent data-[state=open]:bg-transparent px-0 h-auto",
                        isServiceActive() ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.services')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-6 bg-card border border-border rounded-lg shadow-elevated">
                        <div className="space-y-2">
                          {advisoryServices.map((service) => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                to={service.href}
                                className={cn(
                                  "block p-3 rounded-lg hover:bg-muted transition-colors group",
                                  isActive(service.href) && "bg-accent/5",
                                  isRTL && "text-right"
                                )}
                              >
                                <span className={cn(
                                  "font-medium text-sm group-hover:text-accent transition-colors",
                                  isActive(service.href) ? "text-accent" : "text-foreground"
                                )}>
                                  {service.name}
                                </span>
                                <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/business-accounts"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent leading-tight",
                        isActive("/business-accounts") ? "text-accent" : "text-foreground"
                      )}
                    >
                      <span className="block text-center">{t('nav.businessAccounts').split(' ')[0]}</span>
                      <span className="block text-center text-[13px]">{t('nav.businessAccounts').split(' ').slice(1).join(' ')}</span>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/how-it-works"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent",
                        isActive("/how-it-works") ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.howItWorks')}
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/about"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent",
                        isActive("/about") ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.about')}
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      to="/contact"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent",
                        isActive("/contact") ? "text-accent" : "text-foreground"
                      )}
                    >
                      {t('nav.contact')}
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side - CTA */}
            <div className={cn("hidden lg:flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Button asChild variant="default" size="default">
                <Link to="/contact">{t('nav.contactUs')}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border",
            isMobileMenuOpen ? "max-h-[calc(100vh-4rem)]" : "max-h-0"
          )}
        >
          <div className={cn("container mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto", isRTL && "text-right")}>
            {/* Language Toggle for Mobile */}
            <button
              onClick={toggleLanguage}
              className={cn("w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium bg-primary/10 text-primary mb-2", isRTL && "flex-row-reverse")}
            >
              <span className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              </span>
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <Link
              to="/"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {t('nav.home')}
            </Link>

            {/* Mobile Loans Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("loans")}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors",
                  isLoanActive() ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted",
                  isRTL && "flex-row-reverse"
                )}
              >
                <span>{t('nav.loans')}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    openMobileDropdown === "loans" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openMobileDropdown === "loans" ? "max-h-96" : "max-h-0"
                )}
              >
                <div className={cn("pl-4 py-2 space-y-1", isRTL && "pl-0 pr-4")}>
                  {loanServices.map((loan) => (
                    <Link
                      key={loan.href}
                      to={loan.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                        isActive(loan.href) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
                      )}
                    >
                      {loan.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("services")}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors",
                  isServiceActive() ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted",
                  isRTL && "flex-row-reverse"
                )}
              >
                <span>{t('nav.services')}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    openMobileDropdown === "services" && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openMobileDropdown === "services" ? "max-h-60" : "max-h-0"
                )}
              >
                <div className={cn("pl-4 py-2 space-y-1", isRTL && "pl-0 pr-4")}>
                  {advisoryServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                        isActive(service.href) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
                      )}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/business-accounts"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/business-accounts") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {t('nav.businessAccounts')}
            </Link>

            <Link
              to="/how-it-works"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/how-it-works") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {t('nav.howItWorks')}
            </Link>

            <Link
              to="/about"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/about") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/contact"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/contact") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              {t('nav.contact')}
            </Link>

            <div className="pt-4">
              <Button asChild className="w-full" size="lg">
                <Link to="/contact">{t('nav.contactUs')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
