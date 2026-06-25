import { useState } from "react";
import { Sparkles, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SWEETS_DATA } from "../data";
import { SweetItem } from "../types";

export default function SweetsShowcase() {
  const [activeCategory, setActiveCategory] = useState<"all" | "indian-sweets" | "special-items">("all");

  const categories = [
    { id: "all", label: "Full Menu" },
    { id: "indian-sweets", label: "Indian Sweets" },
    { id: "special-items", label: "Festivals & Special Orders" },
  ];

  const filteredSweets = activeCategory === "all"
    ? SWEETS_DATA
    : SWEETS_DATA.filter(item => item.category === activeCategory);

  const handleEnquire = (sweetName: string) => {
    // Smooth scroll to contact and pre-fill message if available
    const contactSection = document.getElementById("contact");
    const messageField = document.getElementById("enquiry-message") as HTMLTextAreaElement | null;
    if (contactSection) {
      if (messageField) {
        messageField.value = `Namaste, I am interested in placing an order for "${sweetName}". Please provide details about pricing and availability.`;
        // Trigger standard change event so react state gets updated if bound
        const event = new Event("input", { bubbles: true });
        messageField.dispatchEvent(event);
      }
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sweets" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Visual Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
            Our Sweet Platter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-bento-maroon-deep">
            Explore Our Sweets
          </h2>
          <div className="w-16 h-1 bg-bento-gold rounded-full mx-auto" />
          <p className="text-stone-600 text-base font-sans font-light">
            Indulge in Kanpur's finest sweet heritage. Handcrafted daily with pure love, pristine hygiene, and the richest ingredients.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl border border-bento-border flex space-x-1 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer relative ${
                  activeCategory === cat.id
                    ? "text-white font-bold"
                    : "text-stone-500 hover:text-bento-maroon"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-bento-maroon rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sweets Grid with AnimatePresence for smooth transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSweets.map((sweet) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={sweet.id}
                className="group bg-white border border-bento-border/70 hover:border-bento-maroon rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container with Hover zoom and Tag */}
                <div className="relative overflow-hidden aspect-[4/3] bg-stone-100 p-3 pb-0">
                  <div className="w-full h-full overflow-hidden rounded-2xl relative">
                    <img
                      src={sweet.image}
                      alt={sweet.englishName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle dark gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
                    
                    {/* Popular Sweets Badge */}
                    {sweet.isPopular && (
                      <span className="absolute top-3 right-3 bg-bento-gold text-bento-maroon-deep font-bold font-sans text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-bento-maroon-deep" />
                        <span>Best Seller</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-bento-maroon-deep text-lg font-bold group-hover:text-bento-maroon transition-colors">
                        {sweet.englishName}
                      </h3>
                      <span className="font-serif text-stone-400 text-sm italic font-normal">
                        {sweet.name}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm font-sans font-light leading-relaxed">
                      {sweet.description}
                    </p>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-mono text-bento-maroon/70 font-bold">
                      {sweet.category === "indian-sweets" ? "✓ Fresh Daily" : "✓ Special Orders"}
                    </span>
                    <button
                      onClick={() => handleEnquire(sweet.englishName)}
                      className="text-stone-800 hover:text-bento-maroon text-sm font-bold flex items-center space-x-1 group/btn cursor-pointer transition-colors"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform text-bento-maroon" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
