import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, Phone, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Sweets Menu", href: "#sweets" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Occasions", href: "#occasions" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-bento-border py-3"
          : "bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-bento-border/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-bento-maroon rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-bento-gold" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-bento-maroon-deep block group-hover:text-bento-maroon transition-colors">
                Rahul Sweets & Namkeen
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 -mt-1 block font-mono">
                Kanpur's Legacy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-stone-700 hover:text-bento-maroon font-medium text-sm transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bento-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call & Direct Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:07275141414"
              className="flex items-center space-x-2 text-stone-700 hover:text-bento-maroon font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-bento-maroon" />
              <span>07275141414</span>
            </a>
            <a
              href="https://maps.google.com/?q=C7RJ+2Q+Kanpur+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="bg-bento-maroon hover:bg-bento-maroon-deep text-white font-semibold px-4 py-2 rounded-xl text-sm flex items-center space-x-1.5 shadow-md active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4 text-bento-gold" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-bento-maroon focus:outline-none p-1.5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-bento-border overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-stone-700 hover:text-bento-maroon py-2.5 px-3 rounded-xl hover:bg-bento-cream/50 font-medium text-base transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-100 flex flex-col space-y-3 px-3">
                <a
                  href="tel:07275141414"
                  className="flex items-center space-x-3 text-stone-700 py-1.5"
                >
                  <Phone className="w-5 h-5 text-bento-maroon" />
                  <span className="font-semibold">07275141414</span>
                </a>
                <a
                  href="https://maps.google.com/?q=C7RJ+2Q+Kanpur+Uttar+Pradesh"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-bento-maroon text-white text-center font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MapPin className="w-5 h-5 text-bento-gold" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
