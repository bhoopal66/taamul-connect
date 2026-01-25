import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  MessageSquare,
  Shield,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactSchema = z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: t('contact.validation.nameRequired') })
      .max(100, { message: t('contact.validation.nameTooLong') }),
    email: z
      .string()
      .trim()
      .email({ message: t('contact.validation.invalidEmail') })
      .max(255, { message: t('contact.validation.emailTooLong') }),
    phone: z
      .string()
      .trim()
      .min(1, { message: t('contact.validation.phoneRequired') })
      .max(20, { message: t('contact.validation.phoneTooLong') }),
    company: z
      .string()
      .trim()
      .max(200, { message: t('contact.validation.companyTooLong') })
      .optional(),
    subject: z.string().min(1, { message: t('contact.validation.subjectRequired') }),
    message: z
      .string()
      .trim()
      .min(1, { message: t('contact.validation.messageRequired') })
      .max(1000, { message: t('contact.validation.messageTooLong') }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const contactInfo = [
    {
      icon: Building2,
      titleKey: "contact.headOffice",
      detailKeys: [
        "contact.officeDetails.companyName",
        "contact.officeDetails.address1",
        "contact.officeDetails.address2",
      ],
    },
    {
      icon: Phone,
      titleKey: "contact.phone",
      details: ["+971 4 452 1111", "+971 50 123 4567"],
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      details: ["info@taamul.ae", "support@taamul.ae"],
    },
    {
      icon: Clock,
      titleKey: "contact.officeHours",
      detailKeys: [
        "contact.officeDetails.hours1",
        "contact.officeDetails.hours2",
        "contact.officeDetails.hours3",
      ],
    },
  ];

  const subjects = [
    { key: "contact.subjects.businessLoan", value: "Business Loan Inquiry" },
    { key: "contact.subjects.accountOpening", value: "Account Opening" },
    { key: "contact.subjects.partnership", value: "Partnership Opportunity" },
    { key: "contact.subjects.general", value: "General Inquiry" },
    { key: "contact.subjects.support", value: "Support Request" },
  ];

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: t('contact.successTitle'),
      description: t('contact.successDescription'),
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Headphones className="h-4 w-4" />
              {t('contact.badge')}
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t('contact.heading')}{" "}
              <span className="text-accent">{t('contact.headingHighlight')}</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl text-white mb-10 max-w-2xl ${isRTL ? 'mr-0' : 'mx-auto'}`}
            >
              {t('contact.description')}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`flex flex-wrap justify-center gap-6 md:gap-10 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">{t('contact.freeConsultation')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">{t('contact.quickResponse')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">{t('contact.confidential')}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--muted))"
            />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Contact Form */}
            <div className={`bg-card rounded-2xl p-8 shadow-card ${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {t('contact.sendMessage')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('contact.formDescription')}
                  </p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className={isRTL ? 'text-right' : ''}>
                          <FormLabel>{t('contact.fullName')} *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} className={isRTL ? 'text-right' : ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className={isRTL ? 'text-right' : ''}>
                          <FormLabel>{t('contact.emailAddress')} *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              {...field}
                              className={isRTL ? 'text-right' : ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className={isRTL ? 'text-right' : ''}>
                          <FormLabel>{t('contact.phoneNumber')} *</FormLabel>
                          <FormControl>
                            <Input placeholder="+971 50 123 4567" {...field} className={isRTL ? 'text-right' : ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem className={isRTL ? 'text-right' : ''}>
                          <FormLabel>{t('contact.companyName')}</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company LLC" {...field} className={isRTL ? 'text-right' : ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className={isRTL ? 'text-right' : ''}>
                        <FormLabel>{t('contact.subject')} *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className={isRTL ? 'text-right' : ''}>
                              <SelectValue placeholder={t('contact.selectSubject')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject.value} value={subject.value} className={isRTL ? 'text-right' : ''}>
                                {t(subject.key)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className={isRTL ? 'text-right' : ''}>
                        <FormLabel>{t('contact.message')} *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('contact.messagePlaceholder')}
                            className={`min-h-[120px] resize-none ${isRTL ? 'text-right' : ''}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className={`w-full ${isRTL ? 'flex-row-reverse' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.sending')
                    ) : (
                      <>
                        {t('contact.sendButton')}
                        <Send className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info & Map */}
            <div className={`space-y-8 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.titleKey}
                    className={`bg-card rounded-2xl p-6 shadow-card ${isRTL ? 'text-right' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(info.titleKey)}
                    </h3>
                    {info.detailKeys ? (
                      info.detailKeys.map((key, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {t(key)}
                        </p>
                      ))
                    ) : (
                      info.details?.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))
                    )}
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.0876543210987!2d55.342345!3d25.251748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4c5b6a7890%3A0x1234567890abcdef!2sGarhoud%20Star%20Building!5e0!3m2!1sen!2sae!4v1704067200000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TAAMUL Office Location - 319 Gharhoud Star Building, Dubai"
                  />
                </div>
                <div className="p-4 bg-primary/5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=25.251748,55.342345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-primary font-medium text-sm hover:underline flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <MapPin className="h-4 w-4" />
                    {t('contact.openInMaps')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {t('contact.needImmediate')}
              </h3>
              <p className="text-white/80">
                {t('contact.teamAvailable')}
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button
                asChild
                variant="hero"
                size="xl"
              >
                <a href="tel:+97144521111" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="h-5 w-5" />
                  {t('contact.callNow')}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('contact.whatsappUs')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
