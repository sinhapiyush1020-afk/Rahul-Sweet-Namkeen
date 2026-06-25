import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SweetsShowcase from "./components/SweetsShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import OccasionSection from "./components/OccasionSection";
import Reviews from "./components/Reviews";
import LocationSection from "./components/LocationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function App() {
  const whatsappUrl =
    "https://wa.me/917275141414?text=Namaste%20Rahul%20Sweets%20%26%20Namkeen!%20I%20am%20visiting%20your%20website%20and%20want%20to%20enquire%20about%20your%20sweet%20specials%20and%20gift%20boxes.";

  // ✅ Dynamic meta tags update on mount
  useEffect(() => {
    document.title =
      "Rahul Sweets & Namkeen | Best Mithai Shop in Shastri Nagar, Kanpur";

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "Kanpur ki sabse premium mithai – Kaju Katli, Gulab Jamun, Motichoor Laddu, Jalebi aur Gift Boxes. Shastri Nagar mein fresh desi ghee se bani sweets. Call: 7275141414");
    setMeta("og:title", "Rahul Sweets & Namkeen – Premium Mithai, Shastri Nagar Kanpur", "property");
    setMeta("og:description", "Fresh desi ghee se bani premium mithai – Kaju Katli, Gulab Jamun, Jalebi aur Wedding Gift Boxes. Kanpur ke Shastri Nagar mein. Order karo: 7275141414", "property");
  }, []);

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-stone-800 antialiased selection:bg-bento-gold/30 selection:text-bento-maroon-deep font-sans">
      {/* Premium Navbar */}
      <Header />

      {/* Main layout contents */}
      <main>
        {/* 1. Hero Landing Page */}
        <Hero />

        {/* 2. Legacy About Section */}
        <About />

        {/* 3. Dynamic Sweet Menu Showcase */}
        <SweetsShowcase />

        {/* 4. Why Choose Us (Value propositions) */}
        <WhyChooseUs />

        {/* 5. Special Occasions and Events catering details */}
        <OccasionSection />

        {/* 6. Testimonial Feedbacks and Aggregate Ratings */}
        <Reviews />

        {/* 7. Google Location and opening details */}
        <LocationSection />

        {/* 8. Interactive Enquiry and WhatsApp redirects */}
        <ContactForm />
      </main>

      {/* Premium footer */}
      <Footer />

      {/* Multi-turn AI Assistant Chat Widget */}
      <Chatbot />

      {/* Floating Action WhatsApp Button (Bottom Left) */}
      <div className="fixed bottom-24 sm:bottom-6 left-6 z-40">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/30 border border-emerald-400/20"
          aria-label="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </motion.a>
      </div>

      {/* Sticky Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full z-45 bg-white/95 backdrop-blur-md border-t border-bento-border/80 p-3 flex gap-3 shadow-[0_-10px_25px_rgba(128,0,0,0.05)]">
        <a
          href="tel:07275141414"
          className="flex-1 bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href="https://maps.google.com/?q=Rahul+Sweets+%26+Namkeen+Sabji+Mandi+Shastri+Nagar+Kanpur"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-white text-bento-maroon border border-bento-border font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 text-sm active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}