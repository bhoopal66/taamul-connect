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

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  company: z
    .string()
    .trim()
    .max(200, { message: "Company name must be less than 200 characters" })
    .optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    details: [
      "Taamul Credit Review Services LLC",
      "319 Gharhoud Star Building",
      "Dubai, UAE",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 4 452 1111", "+971 50 123 4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@taamul.ae", "support@taamul.ae"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Mon - Fri: 10:00 AM - 2:00 PM",
      "Sat: 10:00 AM - 2:00 PM",
      "Sun: Closed",
    ],
  },
];

const subjects = [
  "Business Loan Inquiry",
  "Account Opening",
  "Partnership Opportunity",
  "General Inquiry",
  "Support Request",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
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
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6"
            >
              <Headphones className="h-4 w-4" />
              Expert Support Available
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let's Discuss Your{" "}
              <span className="text-accent">Financing Needs</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white mb-10 max-w-2xl mx-auto"
            >
              Our team of experts is ready to help you find the perfect financial solution for your business.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Confidential</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll respond within 24 hours.
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
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              {...field}
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
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+971 50 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company LLC" {...field} />
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
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
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
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your financing needs..."
                            className="min-h-[120px] resize-none"
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
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-card rounded-2xl p-6 shadow-card"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
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
                    className="text-primary font-medium text-sm hover:underline flex items-center justify-center gap-2"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/80">
                Our team is available during business hours to answer your questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="hero"
                size="xl"
              >
                <a href="tel:+97144521111" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
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
                  className="flex items-center gap-2"
                >
                  WhatsApp Us
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
