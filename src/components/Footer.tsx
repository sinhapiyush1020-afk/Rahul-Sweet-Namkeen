import { MouseEvent } from "react";
import { Sparkles, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bento-maroon-deep text-bento-cream border-t border-bento-maroon/60 pt-16 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Visual glowing points */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bento-maroon rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-bento-maroon">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-bento-gold rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-bento-maroon-deep" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-bento-gold block">
                  Rahul Sweets & Namkeen
                </span>
                <span className="text-[9px] uppercase tracking-widest text-bento-cream/60 block font-mono -mt-1">
                  Traditional Legacy
                </span>
              </div>
            </div>
            
            <p className="text-bento-cream/80 text-sm font-sans font-light max-w-sm leading-relaxed">
              "Traditional taste, unforgettable moments." Handcrafting Kanpur's most premium Indian sweets, festive gift arrangements, and wedding platters with pure ghee, hygiene, and generations-proven recipes.
            </p>

            {/* Social media links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bento-maroon border border-bento-maroon/50 flex items-center justify-center hover:border-bento-gold hover:text-bento-gold transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bento-maroon border border-bento-maroon/50 flex items-center justify-center hover:border-bento-gold hover:text-bento-gold transition-colors"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917275141414"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bento-maroon border border-bento-maroon/50 flex items-center justify-center hover:border-bento-gold hover:text-bento-gold transition-colors"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-bento-gold font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, "#home")}
                  className="text-bento-cream/80 hover:text-bento-gold text-sm font-sans font-light transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "#about")}
                  className="text-bento-cream/80 hover:text-bento-gold text-sm font-sans font-light transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#sweets"
                  onClick={(e) => handleScrollTo(e, "#sweets")}
                  className="text-bento-cream/80 hover:text-bento-gold text-sm font-sans font-light transition-colors"
                >
                  Sweets Showcase
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="text-bento-cream/80 hover:text-bento-gold text-sm font-sans font-light transition-colors"
                >
                  Send Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-bento-gold font-bold text-sm tracking-wider uppercase">
              Kanpur Outlet
            </h4>
            <div className="space-y-3.5 text-bento-cream/80 text-sm font-sans font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-bento-gold flex-shrink-0 mt-0.5" />
                <span>121 637, Sabji Mandi Rd, Industrial Estate, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-bento-gold flex-shrink-0" />
                <a href="tel:07275141414" className="hover:text-bento-gold transition-colors">
                  07275141414
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bento-cream/50 font-sans font-light">
          <p>© {currentYear} Rahul Sweets & Namkeen. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Designed with Purity & Premium Craft</span>
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-bento-gold transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
