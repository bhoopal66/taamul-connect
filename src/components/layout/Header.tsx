import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const loanServices = [
  { name: "Term Loans", href: "/loans/term-loans" },
  { name: "Working Capital", href: "/loans/working-capital" },
  { name: "Secured Loans", href: "/loans/secured-loans" },
  { name: "SME Loans", href: "/loans/sme-loans" },
  { name: "Corporate Loans", href: "/loans/corporate-loans" },
  { name: "Equipment Financing", href: "/loans/equipment-financing" },
  { name: "Trade Finance", href: "/loans/trade-finance" },
  { name: "Co-Lending", href: "/loans/co-lending" },
];

const advisoryServices = [
  { name: "Debt Advisory & Structuring", href: "/services/debt-advisory" },
  { name: "Mezzanine & Hybrid Financing", href: "/services/mezzanine-financing" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span
              className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              TAAMUL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isActive("/")
                  ? "text-accent"
                  : isScrolled
                  ? "text-foreground"
                  : "text-primary-foreground"
              )}
            >
              Home
            </Link>

            {/* Loans Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center gap-1 font-medium transition-colors hover:text-accent",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                Loans <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border shadow-elevated">
                {loanServices.map((loan) => (
                  <DropdownMenuItem key={loan.href} asChild>
                    <Link
                      to={loan.href}
                      className="w-full cursor-pointer hover:bg-muted"
                    >
                      {loan.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center gap-1 font-medium transition-colors hover:text-accent",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border shadow-elevated">
                <DropdownMenuItem asChild>
                  <Link
                    to="/services"
                    className="w-full cursor-pointer hover:bg-muted font-medium"
                  >
                    All Services
                  </Link>
                </DropdownMenuItem>
                <div className="border-t border-border my-1" />
                {advisoryServices.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      to={service.href}
                      className="w-full cursor-pointer hover:bg-muted"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/business-accounts"
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isActive("/business-accounts")
                  ? "text-accent"
                  : isScrolled
                  ? "text-foreground"
                  : "text-primary-foreground"
              )}
            >
              Business Accounts
            </Link>

            <Link
              to="/how-it-works"
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              How It Works
            </Link>

            <Link
              to="/about"
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={cn(
                "font-medium transition-colors hover:text-accent",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              <Globe className="h-4 w-4" />
              {language}
            </button>

            <Button asChild variant={isScrolled ? "default" : "hero"} size="lg">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in-up">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Loan Services
                </p>
                <div className="space-y-1 pl-2">
                  {loanServices.map((loan) => (
                    <Link
                      key={loan.href}
                      to={loan.href}
                      className="block py-2 text-foreground hover:text-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {loan.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Advisory Services
                </p>
                <div className="space-y-1 pl-2">
                  <Link
                    to="/services"
                    className="block py-2 text-accent font-medium hover:text-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                  {advisoryServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block py-2 text-foreground hover:text-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/business-accounts"
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business Accounts
              </Link>

              <Link
                to="/how-it-works"
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>

              <Link
                to="/about"
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 pt-4 space-y-3">
                <Button asChild variant="default" size="lg" className="w-full">
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <button
                  onClick={() => setLanguage(language === "EN" ? "AR" : "EN")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-lg"
                >
                  <Globe className="h-4 w-4" />
                  {language === "EN" ? "العربية" : "English"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
