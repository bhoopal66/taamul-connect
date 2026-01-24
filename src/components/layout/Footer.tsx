import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import taamulLogo from "@/assets/taamul-logo.png";
const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={taamulLogo} alt="Taamul Credit Review Services" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 leading-relaxed">
              TAAMUL Credit Review Services LLC is your trusted partner for business financing solutions in the UAE. We connect businesses with the right financial products.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/loans/term-loans" className="text-white/80 hover:text-white transition-colors">
                  Term Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/working-capital" className="text-white/80 hover:text-white transition-colors">
                  Working Capital
                </Link>
              </li>
              <li>
                <Link to="/loans/sme-loans" className="text-white/80 hover:text-white transition-colors">
                  SME Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/corporate-loans" className="text-white/80 hover:text-white transition-colors">
                  Corporate Loans
                </Link>
              </li>
              <li>
                <Link to="/loans/trade-finance" className="text-white/80 hover:text-white transition-colors">
                  Trade Finance
                </Link>
              </li>
              <li>
                <Link to="/business-accounts" className="text-white/80 hover:text-white transition-colors">
                  Business Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#calculator" className="text-white/80 hover:text-white transition-colors">
                  Loan Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-accent" />
                <span className="text-white/80">
                  319 Gharhoud Star Building, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+97142345678" className="text-white/80 hover:text-white transition-colors">
                  +971 4 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@taamul.ae" className="text-white/80 hover:text-white transition-colors">
                  info@taamul.ae
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-medium mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button variant="hero" size="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 TAAMUL Credit Review Services LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
