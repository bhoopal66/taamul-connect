import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import TermLoans from "./pages/loans/TermLoans";
import WorkingCapital from "./pages/loans/WorkingCapital";
import SecuredLoans from "./pages/loans/SecuredLoans";
import SMELoans from "./pages/loans/SMELoans";
import CorporateLoans from "./pages/loans/CorporateLoans";
import EquipmentFinancing from "./pages/loans/EquipmentFinancing";
import TradeFinance from "./pages/loans/TradeFinance";
import CoLending from "./pages/loans/CoLending";
import DebtAdvisory from "./pages/services/DebtAdvisory";
import MezzanineFinancing from "./pages/services/MezzanineFinancing";
import BusinessAccounts from "./pages/BusinessAccounts";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loans/term-loans" element={<TermLoans />} />
          <Route path="/loans/working-capital" element={<WorkingCapital />} />
          <Route path="/loans/secured-loans" element={<SecuredLoans />} />
          <Route path="/loans/sme-loans" element={<SMELoans />} />
          <Route path="/loans/corporate-loans" element={<CorporateLoans />} />
          <Route path="/loans/equipment-financing" element={<EquipmentFinancing />} />
          <Route path="/loans/trade-finance" element={<TradeFinance />} />
          <Route path="/loans/co-lending" element={<CoLending />} />
          <Route path="/services/debt-advisory" element={<DebtAdvisory />} />
          <Route path="/services/mezzanine-financing" element={<MezzanineFinancing />} />
          <Route path="/business-accounts" element={<BusinessAccounts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
