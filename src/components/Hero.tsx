import { Phone, MapPin, ChevronDown, Award } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Decorative bento background grids */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#800000_1px,transparent_1px),linear-gradient(to_bottom,#800000_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        {/* Massive Bento Grid Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card (Burgundy & Gold) - spans 8 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-bento-maroon-deep rounded-[32px] p-8 sm:p-12 md:p-16 flex flex-col justify-center relative overflow-hidden border border-bento-maroon shadow-2xl min-h-[500px]"
          >
            {/* Decorative circles representing the bento theme's vector circles */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 border-[20px] border-bento-gold rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5 border-[10px] border-bento-gold rounded-full -ml-24 -mb-24 pointer-events-none"></div>
            
            <div className="space-y-6 sm:space-y-8 relative z-10">
              {/* Animated Trust Badge */}
              <div>
                <span className="inline-flex items-center space-x-2 bg-bento-gold text-bento-maroon-deep px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase">
                  <Award className="w-4 h-4 text-bento-maroon-deep" />
                  <span>Kanpur's Finest Since Decades</span>
                </span>
              </div>

              {/* Title / Headings */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  Authentic Taste <br/>
                  <span className="text-bento-gold font-serif italic mt-1 font-normal">
                    of Tradition
                  </span>
                </h1>

                <p className="text-bento-cream text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed">
                  Freshly prepared sweets, delicious flavors, and quality you can trust in Kanpur. Making your celebrations special with generations-proven recipes.
                </p>
              </div>

              {/* Buttons Group */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="tel:07275141414"
                  className="w-full sm:w-auto bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://maps.google.com/?q=C7RJ+2Q+Kanpur+Uttar+Pradesh"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto border-2 border-bento-gold/60 hover:border-bento-gold text-bento-gold hover:bg-bento-gold/10 font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => handleScrollTo("#sweets")}
                  className="text-bento-cream hover:text-bento-gold font-medium text-base py-3 px-4 underline underline-offset-8 decoration-bento-gold/40 hover:decoration-bento-gold transition-all cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side Bento Card (Pure White with Gold & Maroon details) - spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-white border border-bento-border rounded-[32px] p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            {/* Visual highlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-bento-cream rounded-bl-full opacity-50" />
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-bento-maroon">
                Our Standard
              </span>
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-bento-gold text-lg font-bold">
                  <span>4.1 ★</span>
                  <span className="text-stone-400 text-xs font-normal ml-1">Rating</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-bento-maroon-deep leading-snug">
                  Unmatched Desi Ghee Purity
                </h3>
                <p className="text-stone-600 text-sm font-sans leading-relaxed">
                  We use handpicked premium ingredients, double-refined quality testing, and prepare fresh daily to serve the absolute finest to you.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-bento-maroon">
                <span className="w-5 h-5 bg-bento-cream rounded-full flex items-center justify-center text-[10px]">✓</span>
                <span>Freshly Cooked Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-bento-maroon">
                <span className="w-5 h-5 bg-bento-cream rounded-full flex items-center justify-center text-[10px]">✓</span>
                <span>Hygienic Traditional Kitchen</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          onClick={() => handleScrollTo("#about")}
          className="text-stone-400 hover:text-bento-maroon transition-colors flex flex-col items-center space-y-1 group cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity font-bold">
            Learn More
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5 text-bento-maroon" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
