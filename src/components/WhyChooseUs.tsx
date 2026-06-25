import { Heart, Sparkles, Gift, Star } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Fresh & Hygienic",
      description: "Prepared with care and quality ingredients in ultra-clean modern kitchens.",
      icon: Heart,
    },
    {
      title: "Authentic Taste",
      description: "Traditional recipes passed down generations to maintain amazing flavor.",
      icon: Sparkles,
    },
    {
      title: "Perfect For Celebrations",
      description: "Elegant boxes and catering custom-tailored for weddings, festivals, and special moments.",
      icon: Gift,
    },
    {
      title: "Trusted Local Shop",
      description: "Proudly serving local happy customers in Kanpur with consistent high ratings.",
      icon: Star,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-bento-cream/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-bento-cream/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
            Our Brand Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bento-maroon-deep tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-bento-gold rounded-full mx-auto" />
          <p className="text-stone-600 text-base font-sans font-light">
            We are dedicated to offering the cleanest, most delicious and authentic sweet experience in Kanpur.
          </p>
        </div>

        {/* Bento/Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white border border-bento-border p-8 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Accent bento gold line on top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-bento-gold" />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-bento-cream/35 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-bento-cream text-bento-maroon flex items-center justify-center border border-bento-border/50">
                    <IconComponent className="w-5 h-5 text-bento-maroon" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-bento-maroon-deep text-lg font-bold group-hover:text-bento-maroon transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-stone-600 text-sm font-sans font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
