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
import taamulLogo from "@/assets/taamul-logo-new.png";
const loanServices = [
  { name: "Business Loans", href: "/loans/business-loans", description: "Fixed-term financing for business growth" },
  { name: "Working Capital", href: "/loans/working-capital", description: "Manage daily operations smoothly" },
  { name: "Secured Loans", href: "/loans/secured-loans", description: "Asset-backed financing solutions" },
  { name: "SME Loans", href: "/loans/sme-loans", description: "Tailored for small & medium enterprises" },
  { name: "Corporate Loans", href: "/loans/corporate-loans", description: "Large-scale corporate financing" },
  { name: "Equipment Financing", href: "/loans/equipment-financing", description: "Fund machinery & equipment" },
  { name: "Trade Finance", href: "/loans/trade-finance", description: "Import/export financing solutions" },
  { name: "Syndicated Loans", href: "/loans/syndicated", description: "Partnership lending programs" },
];

const advisoryServices = [
  { name: "Debt Advisory & Structuring", href: "/services/debt-advisory", description: "Optimize your debt portfolio" },
  { name: "Mezzanine & Hybrid Financing", href: "/services/mezzanine-financing", description: "Flexible capital solutions" },
  { name: "Bank Financing", href: "/services", description: "Comprehensive bank loan products" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+97142234567" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-3.5 w-3.5" />
                +971 4 223 4567
              </a>
              <a href="mailto:info@taamul.ae" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-3.5 w-3.5" />
                info@taamul.ae
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80">UAE's Trusted Business Finance Partner</span>
              <button
                onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
                {language}
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
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={taamulLogo} alt="Taamul Credit Review Services" className="h-12 lg:h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={cn(
                        "text-[15px] font-medium transition-colors hover:text-accent",
                        isActive("/") ? "text-accent" : "text-foreground"
                      )}
                    >
                      Home
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
                      Loans
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-card border border-border rounded-lg shadow-elevated">
                        <div className="mb-4 pb-3 border-b border-border">
                          <h3 className="font-semibold text-foreground">Loan Products</h3>
                          <p className="text-sm text-muted-foreground">Comprehensive financing solutions for your business</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {loanServices.map((loan) => (
                            <NavigationMenuLink key={loan.href} asChild>
                              <Link
                                to={loan.href}
                                className={cn(
                                  "block p-3 rounded-lg hover:bg-muted transition-colors group",
                                  isActive(loan.href) && "bg-accent/5"
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
                        <div className="mt-4 pt-3 border-t border-border">
                          <Link
                            to="/services"
                            className="text-sm text-accent hover:text-accent/80 font-medium"
                          >
                            View all services →
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
                      Services
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
                                  isActive(service.href) && "bg-accent/5"
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
                      <span className="block text-center">Business</span>
                      <span className="block text-center text-[13px]">Accounts</span>
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
                      How It Works
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
                      About
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
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side - CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="default" size="default">
                <Link to="/contact">Contact Us</Link>
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
          <div className="container mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            <Link
              to="/"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              Home
            </Link>

            {/* Mobile Loans Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("loans")}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors",
                  isLoanActive() ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
                )}
              >
                <span>Loans</span>
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
                <div className="pl-4 py-2 space-y-1">
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
                  isServiceActive() ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
                )}
              >
                <span>Services</span>
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
                <div className="pl-4 py-2 space-y-1">
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
              Business Accounts
            </Link>

            <Link
              to="/how-it-works"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/how-it-works") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              How It Works
            </Link>

            <Link
              to="/about"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/about") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={cn(
                "block px-4 py-3 rounded-lg font-medium transition-colors",
                isActive("/contact") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted"
              )}
            >
              Contact
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between px-4 py-2 bg-muted/50 rounded-lg">
                <span className="text-sm text-muted-foreground">Language</span>
                <button
                  onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card rounded-md text-sm font-medium border border-border"
                >
                  <Globe className="h-4 w-4" />
                  {language === "EN" ? "English" : "العربية"}
                </button>
              </div>

              <div className="flex items-center gap-3 px-4">
                <a href="tel:+97142234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <Phone className="h-4 w-4" />
                  +971 4 223 4567
                </a>
              </div>

              <div className="flex justify-center">
                <Button asChild variant="default" size="lg" className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
