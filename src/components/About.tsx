import { Shield, Sparkles, Heart, Utensils } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

export default function About() {
  const features = [
    {
      title: "Fresh Preparation",
      description: "Made daily in small batches to guarantee unmatched richness and taste.",
      icon: Utensils,
      color: "bg-bento-cream text-bento-maroon border-bento-border/40",
    },
    {
      title: "Quality Ingredients",
      description: "We use only pure desi ghee, organic dry fruits, and ultra-fresh mawa.",
      icon: Shield,
      color: "bg-bento-cream text-bento-maroon border-bento-border/40",
    },
    {
      title: "Traditional Taste",
      description: "Time-tested classic recipes that reflect the royal culinary heritage of India.",
      icon: Sparkles,
      color: "bg-bento-cream text-bento-maroon border-bento-border/40",
    },
    {
      title: "Customer Satisfaction",
      description: "Humble service, clean surroundings, and sweet moments since our inception.",
      icon: Heart,
      color: "bg-bento-cream text-bento-maroon border-bento-border/40",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Decorative Traditional Sweets Motif Borders */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-bento-cream/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-bento-cream/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[32px] overflow-hidden bg-white p-4 border border-bento-border shadow-lg aspect-[4/5] max-w-md mx-auto"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.ghee}
                  alt="Premium Desi Ghee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative brand tag overlaid */}
                <div className="absolute bottom-4 left-4 right-4 bg-bento-maroon-deep/95 backdrop-blur-md p-4 rounded-xl border border-bento-gold/30 text-center">
                  <span className="font-serif text-bento-gold font-semibold text-base block">
                    100% Shudh Desi Ghee
                  </span>
                  <span className="text-bento-cream text-[10px] font-sans tracking-widest uppercase block mt-1 font-semibold">
                    Purity and Pious Preparation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & Values Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
                Heritage & Purity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bento-maroon-deep tracking-tight leading-tight">
                About Rahul Sweets & Namkeen
              </h2>
              <div className="w-16 h-1 bg-bento-gold rounded-full" />
              <p className="text-stone-700 text-lg font-sans font-light leading-relaxed">
                Rahul Sweets & Namkeen brings traditional Indian sweets with authentic taste and quality ingredients. Our focus is freshness, hygiene, and serving delicious sweets that make every celebration special. We take immense pride in crafting delicacies that elevate the festive spirit of Kanpur.
              </p>
            </div>

            {/* Features Mini Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, index) => {
                const IconComp = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-[20px] border border-bento-border shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4"
                  >
                    <div className={`p-3 rounded-xl border flex-shrink-0 ${feat.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-bento-maroon-deep font-bold text-base">
                        {feat.title}
                      </h3>
                      <p className="text-stone-500 text-xs font-sans leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
