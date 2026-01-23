import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FloatingButtons = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    preferredTime: "",
  });

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in learning more about TAAMUL's business financing solutions.");
    window.open(`https://wa.me/97142345678?text=${message}`, "_blank");
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Callback request:", callbackForm);
    setIsCallbackOpen(false);
    setCallbackForm({ name: "", phone: "", preferredTime: "" });
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-success rounded-full shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-success-foreground" />
      </button>

      {/* Callback Button - Bottom Right */}
      <button
        onClick={() => setIsCallbackOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent rounded-full shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-pulse-slow"
        aria-label="Request Callback"
      >
        <Phone className="h-6 w-6 text-accent-foreground" />
      </button>

      {/* Callback Modal */}
      <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Request a Callback
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">
            Leave your details and our team will call you back within 24 hours.
          </p>
          <form onSubmit={handleCallbackSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="callback-name">Full Name</Label>
              <Input
                id="callback-name"
                placeholder="John Smith"
                value={callbackForm.name}
                onChange={(e) =>
                  setCallbackForm({ ...callbackForm, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback-phone">Phone Number</Label>
              <Input
                id="callback-phone"
                placeholder="+971 50 123 4567"
                value={callbackForm.phone}
                onChange={(e) =>
                  setCallbackForm({ ...callbackForm, phone: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback-time">Preferred Time</Label>
              <select
                id="callback-time"
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                value={callbackForm.preferredTime}
                onChange={(e) =>
                  setCallbackForm({
                    ...callbackForm,
                    preferredTime: e.target.value,
                  })
                }
                required
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
              </select>
            </div>
            <Button type="submit" variant="cta" size="lg" className="w-full">
              Request Callback
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingButtons;
