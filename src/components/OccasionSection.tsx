import { Calendar, Heart, Gift, Award, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function OccasionSection() {
  const occasions = [
    {
      title: "Diwali & Festivals",
      description: "Sweets represent the essence of prosperity. Brighten up your homes with our special dry fruit bites and authentic laddoos.",
      icon: Gift,
      badge: "Festive Joy",
    },
    {
      title: "Grand Weddings",
      description: "Celebrate your eternal bonds with customized sweet platters, high-end dry fruit cases, and custom-ordered legacy recipes.",
      icon: Heart,
      badge: "Sweets of Union",
    },
    {
      title: "Birthdays & Milestones",
      description: "Sweeten your special days with spongy, warm gulab jamuns and custom kaju-katli packages to delight your loved ones.",
      icon: Calendar,
      badge: "Celebrations",
    },
    {
      title: "Family Functions",
      description: "Be it a small gathering or a warm puja, share high-quality traditional sweets that bring everyone closer.",
      icon: Award,
      badge: "Warm Gatherings",
    },
  ];

  const handleOrderRedirect = () => {
    const contactSection = document.getElementById("contact");
    const messageField = document.getElementById("enquiry-message") as HTMLTextAreaElement | null;
    if (contactSection) {
      if (messageField) {
        messageField.value = "Namaste, I would like to order a Custom Sweet Gift Box for our upcoming celebration! Please share details about customization options.";
        const event = new Event("input", { bubbles: true });
        messageField.dispatchEvent(event);
      }
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="occasions" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Festivity background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
            Catering & Gift Packagings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-bento-maroon-deep">
            Make Every Celebration Sweeter
          </h2>
          <div className="w-16 h-1 bg-bento-gold rounded-full mx-auto" />
          <p className="text-stone-600 text-base font-sans font-light">
            We specialize in bespoke sweet box arrangements and party catering to make your major milestones and family celebrations truly unforgettable.
          </p>
        </div>

        {/* Occasions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {occasions.map((occ, index) => {
            const Icon = occ.icon;
            return (
              <motion.div
                key={occ.title}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[24px] border border-bento-border hover:border-bento-maroon shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-bento-cream border border-bento-border/50 text-bento-maroon flex items-center justify-center flex-shrink-0 group-hover:bg-bento-maroon group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-bento-maroon font-bold block">
                    {occ.badge}
                  </span>
                  <h3 className="font-serif text-bento-maroon-deep text-lg font-bold">
                    {occ.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-sans font-light leading-relaxed">
                    {occ.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call To Action Box (Festival Platter CTA Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden p-8 sm:p-12 bg-bento-maroon-deep border border-bento-maroon text-center sm:text-left shadow-2xl"
        >
          {/* Subtle golden grid pattern in background */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-bento-gold leading-tight">
                Gift Pure Happiness and Traditional Love
              </h3>
              <p className="text-bento-cream text-sm sm:text-base font-sans font-light max-w-2xl">
                Ready to make a grand impression? Enquire about our special custom packaging models, festive dry fruit hampers, or book catering services for bulk corporate and wedding orders.
              </p>
            </div>
            
            <button
              onClick={handleOrderRedirect}
              className="w-full lg:w-auto bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Order Your Sweet Box Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
