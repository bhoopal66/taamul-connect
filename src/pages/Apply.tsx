import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  User,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, title: "Business Info", icon: Building2 },
  { number: 2, title: "Owner Details", icon: User },
  { number: 3, title: "Loan Requirements", icon: FileText },
];

const industries = [
  "Trading & Distribution",
  "Manufacturing",
  "Construction",
  "Retail",
  "Technology",
  "Healthcare",
  "Hospitality",
  "Professional Services",
  "Transportation & Logistics",
  "Real Estate",
  "Other",
];

const loanPurposes = [
  "Business Expansion",
  "Working Capital",
  "Equipment Purchase",
  "Inventory Financing",
  "Debt Consolidation",
  "Property Purchase",
  "Other",
];

const Apply = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Business Info
    companyName: "",
    tradeLicenseNumber: "",
    industry: "",
    yearsInBusiness: "",
    annualTurnover: "",
    numberOfEmployees: "",
    
    // Step 2 - Owner Details
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerNationality: "",
    ownerVisaStatus: "",
    
    // Step 3 - Loan Requirements
    loanAmount: "",
    loanPurpose: "",
    preferredTenure: "",
    existingLoans: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
      if (!formData.tradeLicenseNumber.trim()) newErrors.tradeLicenseNumber = "Trade license is required";
      if (!formData.industry) newErrors.industry = "Please select an industry";
      if (!formData.yearsInBusiness) newErrors.yearsInBusiness = "Years in business is required";
      if (!formData.annualTurnover.trim()) newErrors.annualTurnover = "Annual turnover is required";
    }

    if (step === 2) {
      if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
      if (!formData.ownerEmail.trim()) {
        newErrors.ownerEmail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.ownerEmail)) {
        newErrors.ownerEmail = "Please enter a valid email";
      }
      if (!formData.ownerPhone.trim()) newErrors.ownerPhone = "Phone number is required";
    }

    if (step === 3) {
      if (!formData.loanAmount.trim()) newErrors.loanAmount = "Loan amount is required";
      if (!formData.loanPurpose) newErrors.loanPurpose = "Please select loan purpose";
      if (!formData.preferredTenure) newErrors.preferredTenure = "Please select tenure";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Submit form
        console.log("Form submitted:", formData);
        // Navigate to success or thank you page
        alert("Application submitted successfully! Our team will contact you within 48 hours.");
        navigate("/");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-display-sm text-foreground mb-4">
                Apply for Business Loan
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete the form below to get started. It only takes 5 minutes.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                          currentStep > step.number
                            ? "bg-success text-success-foreground"
                            : currentStep === step.number
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-muted-foreground border border-border"
                        )}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          <step.icon className="h-6 w-6" />
                        )}
                      </div>
                      <span
                        className={cn(
                          "mt-2 text-sm font-medium",
                          currentStep >= step.number
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "hidden sm:block w-24 lg:w-40 h-1 mx-4 rounded-full transition-all duration-300",
                          currentStep > step.number
                            ? "bg-success"
                            : "bg-border"
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl shadow-elevated p-8">
              {/* Step 1: Business Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Business Information
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        placeholder="ABC Trading LLC"
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                        className={errors.companyName ? "border-destructive" : ""}
                      />
                      {errors.companyName && (
                        <p className="text-sm text-destructive">{errors.companyName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tradeLicenseNumber">Trade License Number *</Label>
                      <Input
                        id="tradeLicenseNumber"
                        placeholder="123456"
                        value={formData.tradeLicenseNumber}
                        onChange={(e) => updateFormData("tradeLicenseNumber", e.target.value)}
                        className={errors.tradeLicenseNumber ? "border-destructive" : ""}
                      />
                      {errors.tradeLicenseNumber && (
                        <p className="text-sm text-destructive">{errors.tradeLicenseNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <select
                        id="industry"
                        className={cn(
                          "w-full h-10 px-3 rounded-lg border bg-background text-foreground",
                          errors.industry ? "border-destructive" : "border-input"
                        )}
                        value={formData.industry}
                        onChange={(e) => updateFormData("industry", e.target.value)}
                      >
                        <option value="">Select Industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && (
                        <p className="text-sm text-destructive">{errors.industry}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                      <select
                        id="yearsInBusiness"
                        className={cn(
                          "w-full h-10 px-3 rounded-lg border bg-background text-foreground",
                          errors.yearsInBusiness ? "border-destructive" : "border-input"
                        )}
                        value={formData.yearsInBusiness}
                        onChange={(e) => updateFormData("yearsInBusiness", e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="1-2">1-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                      {errors.yearsInBusiness && (
                        <p className="text-sm text-destructive">{errors.yearsInBusiness}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="annualTurnover">Annual Turnover (AED) *</Label>
                      <Input
                        id="annualTurnover"
                        placeholder="5,000,000"
                        value={formData.annualTurnover}
                        onChange={(e) => updateFormData("annualTurnover", e.target.value)}
                        className={errors.annualTurnover ? "border-destructive" : ""}
                      />
                      {errors.annualTurnover && (
                        <p className="text-sm text-destructive">{errors.annualTurnover}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numberOfEmployees">Number of Employees</Label>
                      <Input
                        id="numberOfEmployees"
                        placeholder="25"
                        value={formData.numberOfEmployees}
                        onChange={(e) => updateFormData("numberOfEmployees", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Owner Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Owner / Director Details
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Full Name *</Label>
                      <Input
                        id="ownerName"
                        placeholder="John Smith"
                        value={formData.ownerName}
                        onChange={(e) => updateFormData("ownerName", e.target.value)}
                        className={errors.ownerName ? "border-destructive" : ""}
                      />
                      {errors.ownerName && (
                        <p className="text-sm text-destructive">{errors.ownerName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ownerEmail">Email Address *</Label>
                      <Input
                        id="ownerEmail"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.ownerEmail}
                        onChange={(e) => updateFormData("ownerEmail", e.target.value)}
                        className={errors.ownerEmail ? "border-destructive" : ""}
                      />
                      {errors.ownerEmail && (
                        <p className="text-sm text-destructive">{errors.ownerEmail}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ownerPhone">Phone Number *</Label>
                      <Input
                        id="ownerPhone"
                        placeholder="+971 50 123 4567"
                        value={formData.ownerPhone}
                        onChange={(e) => updateFormData("ownerPhone", e.target.value)}
                        className={errors.ownerPhone ? "border-destructive" : ""}
                      />
                      {errors.ownerPhone && (
                        <p className="text-sm text-destructive">{errors.ownerPhone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ownerNationality">Nationality</Label>
                      <Input
                        id="ownerNationality"
                        placeholder="British"
                        value={formData.ownerNationality}
                        onChange={(e) => updateFormData("ownerNationality", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerVisaStatus">UAE Visa Status</Label>
                    <select
                      id="ownerVisaStatus"
                      className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                      value={formData.ownerVisaStatus}
                      onChange={(e) => updateFormData("ownerVisaStatus", e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="investor">Investor Visa</option>
                      <option value="employment">Employment Visa</option>
                      <option value="golden">Golden Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Loan Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Loan Requirements
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount Required (AED) *</Label>
                      <Input
                        id="loanAmount"
                        placeholder="2,000,000"
                        value={formData.loanAmount}
                        onChange={(e) => updateFormData("loanAmount", e.target.value)}
                        className={errors.loanAmount ? "border-destructive" : ""}
                      />
                      {errors.loanAmount && (
                        <p className="text-sm text-destructive">{errors.loanAmount}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loanPurpose">Purpose of Loan *</Label>
                      <select
                        id="loanPurpose"
                        className={cn(
                          "w-full h-10 px-3 rounded-lg border bg-background text-foreground",
                          errors.loanPurpose ? "border-destructive" : "border-input"
                        )}
                        value={formData.loanPurpose}
                        onChange={(e) => updateFormData("loanPurpose", e.target.value)}
                      >
                        <option value="">Select Purpose</option>
                        {loanPurposes.map((purpose) => (
                          <option key={purpose} value={purpose}>{purpose}</option>
                        ))}
                      </select>
                      {errors.loanPurpose && (
                        <p className="text-sm text-destructive">{errors.loanPurpose}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredTenure">Preferred Tenure *</Label>
                      <select
                        id="preferredTenure"
                        className={cn(
                          "w-full h-10 px-3 rounded-lg border bg-background text-foreground",
                          errors.preferredTenure ? "border-destructive" : "border-input"
                        )}
                        value={formData.preferredTenure}
                        onChange={(e) => updateFormData("preferredTenure", e.target.value)}
                      >
                        <option value="">Select Tenure</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                        <option value="48">48 months</option>
                        <option value="60">60 months</option>
                      </select>
                      {errors.preferredTenure && (
                        <p className="text-sm text-destructive">{errors.preferredTenure}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="existingLoans">Existing Loans (AED)</Label>
                      <Input
                        id="existingLoans"
                        placeholder="0"
                        value={formData.existingLoans}
                        onChange={(e) => updateFormData("existingLoans", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <textarea
                      id="additionalNotes"
                      className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-input bg-background text-foreground resize-none"
                      placeholder="Any additional information about your business or financing needs..."
                      value={formData.additionalNotes}
                      onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? "invisible" : ""}
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </Button>

                <Button
                  variant="cta"
                  size="lg"
                  onClick={handleNext}
                >
                  {currentStep === 3 ? "Submit Application" : "Continue"}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Trust Message */}
            <p className="text-center text-muted-foreground text-sm mt-8">
              Your information is secure and will only be used for loan processing.
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
