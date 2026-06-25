import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EnquiryForm } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (formData.phone.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Simulate network request to save enquiry
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const defaultText = `Namaste Rahul Sweets & Namkeen! I want to enquire about sweets/special packages. Please contact me back.`;
    const encodedText = encodeURIComponent(
      formData.message.trim() 
        ? `Namaste, My Name is ${formData.name}. Phone: ${formData.phone}. message: ${formData.message}` 
        : defaultText
    );
    window.open(`https://wa.me/917275141414?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bento-maroon-deep tracking-tight leading-tight">
                Send Us An Enquiry
              </h2>
              <div className="w-16 h-1 bg-bento-gold rounded-full" />
              <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
                Planning a family gathering, wedding ceremony, or major festival sweet gift hampers? Fill out the quick form or click to message us on WhatsApp directly. Our team will get back to you with custom catalog offers.
              </p>
            </div>

            {/* Quick Contacts details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-[20px] border border-bento-border shadow-sm">
                <div className="p-3 bg-bento-cream border border-bento-border text-bento-maroon rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-stone-500 font-bold text-xs tracking-wide uppercase">Call Directly</h4>
                  <a href="tel:07275141414" className="text-bento-maroon-deep text-lg font-bold font-mono hover:text-bento-maroon transition-colors">
                    07275141414
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 rounded-[20px] border border-bento-border shadow-sm">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 rounded-xl flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-stone-500 font-bold text-xs tracking-wide uppercase">WhatsApp Quick Chat</h4>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="text-bento-maroon-deep text-lg font-bold hover:text-emerald-600 transition-colors cursor-pointer text-left"
                  >
                    Send Instant Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[32px] border border-bento-border shadow-md relative overflow-hidden">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-bento-gold" />

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Feedback States */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Enquiry Sent Successfully!</h4>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Thank you for contacting Rahul Sweets & Namkeen. We will review your details and call you back shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Submission Error</h4>
                      <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input: Name */}
              <div className="space-y-2">
                <label htmlFor="enquiry-name" className="text-bento-maroon-deep font-serif font-bold text-sm block">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-bento-border bg-[#faf9f6]/40 focus:ring-2 focus:ring-bento-gold/20 focus:border-bento-maroon outline-none text-stone-900 transition-all font-sans text-sm"
                  required
                />
              </div>

              {/* Input: Phone */}
              <div className="space-y-2">
                <label htmlFor="enquiry-phone" className="text-bento-maroon-deep font-serif font-bold text-sm block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-bento-border bg-[#faf9f6]/40 focus:ring-2 focus:ring-bento-gold/20 focus:border-bento-maroon outline-none text-stone-900 transition-all font-mono text-sm"
                  maxLength={12}
                  required
                />
              </div>

              {/* Input: Message */}
              <div className="space-y-2">
                <label htmlFor="enquiry-message" className="text-bento-maroon-deep font-serif font-bold text-sm block">
                  Enquiry Message / Special Orders
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let us know what sweets or boxes you are looking for..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-bento-border bg-[#faf9f6]/40 focus:ring-2 focus:ring-bento-gold/20 focus:border-bento-maroon outline-none text-stone-900 transition-all font-sans text-sm resize-none"
                />
              </div>

              {/* Actions Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
