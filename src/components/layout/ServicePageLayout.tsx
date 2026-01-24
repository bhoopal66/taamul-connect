import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import ServiceSidebar from "@/components/layout/ServiceSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicePageLayoutProps {
  children: ReactNode;
  heroSection: ReactNode;
  breadcrumbs: BreadcrumbItem[];
}

const ServicePageLayout = ({ children, heroSection, breadcrumbs }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section (full width) */}
      {heroSection}

      {/* Content with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem key={crumb.label}>
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to={crumb.href || "/"} className="hover:text-accent">
                        {crumb.label}
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-8">
          <ServiceSidebar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicePageLayout;
