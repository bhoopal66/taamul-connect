import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import taamulLogo from "@/assets/taamul-logo.png";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${isRTL ? 'text-right' : ''}`}>
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={taamulLogo} alt="Taamul Credit Review Services" className="h-[2.85rem] w-auto brightness-0 invert" />
            </div>
            <p className="text-white leading-relaxed">
              {t('footer.companyDesc')}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
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
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/loans/business-loans" className="text-white hover:text-accent transition-colors">
                  {t('loanServices.businessLoans')}
                </Link>
              </li>
              <li>
                <Link to="/loans/working-capital" className="text-white hover:text-accent transition-colors">
                  {t('loanServices.workingCapital')}
                </Link>
              </li>
              <li>
                <Link to="/loans/sme-loans" className="text-white hover:text-accent transition-colors">
                  {t('loanServices.smeLoans')}
                </Link>
              </li>
              <li>
                <Link to="/loans/corporate-loans" className="text-white hover:text-accent transition-colors">
                  {t('loanServices.corporateLoans')}
                </Link>
              </li>
              <li>
                <Link to="/loans/trade-finance" className="text-white hover:text-accent transition-colors">
                  {t('loanServices.tradeFinance')}
                </Link>
              </li>
              <li>
                <Link to="/business-accounts" className="text-white hover:text-accent transition-colors">
                  {t('nav.businessAccounts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-white hover:text-accent transition-colors">
                  {t('footer.howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-accent transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="#calculator" className="text-white hover:text-accent transition-colors">
                  {t('footer.loanCalculator')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  {t('footer.faqs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="h-5 w-5 mt-1 text-accent" />
                <span className="text-white">
                  319 Gharhoud Star Building, Dubai, UAE
                </span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+97142345678" className="text-white hover:text-accent transition-colors">
                  +971 4 234 5678
                </a>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@taamul.ae" className="text-white hover:text-accent transition-colors">
                  info@taamul.ae
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-medium mb-3">{t('footer.subscribeNewsletter')}</h5>
              <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Input
                  type="email"
                  placeholder={t('footer.yourEmail')}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button variant="hero" size="default">
                  {t('footer.subscribe')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-white text-sm">
              {t('footer.copyright')}
            </p>
            <div className={`flex gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="text-white hover:text-accent transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                {t('footer.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
