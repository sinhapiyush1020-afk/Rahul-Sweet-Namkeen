import { Star, MessageCircle, Quote } from "lucide-react";
import { motion } from "motion/react";
import { REVIEWS_DATA } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block and aggregate review rating card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-center">
          
          <div className="lg:col-span-8 text-center lg:text-left space-y-4">
            <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
              Customer Feedbacks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-bento-maroon-deep tracking-tight leading-tight">
              What Our Customers Say
            </h2>
            <div className="w-16 h-1 bg-bento-gold rounded-full mx-auto lg:mx-0" />
            <p className="text-stone-600 text-base font-sans font-light max-w-xl">
              We strive to deliver exceptional taste and authentic Indian flavors to our beloved patrons in Kanpur. Here is a glimpse of their reviews.
            </p>
          </div>

          {/* Google Star aggregate stats badge */}
          <div className="lg:col-span-4 bg-white p-6 rounded-[28px] border border-bento-border shadow-sm text-center space-y-3 max-w-xs mx-auto lg:ml-auto">
            <div className="flex justify-center text-bento-gold space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="space-y-1">
              <span className="text-4xl font-serif font-black text-bento-maroon-deep block">4.1 ⭐</span>
              <span className="text-stone-500 text-xs font-sans tracking-wide uppercase block">Google Business Rating</span>
            </div>
            <span className="text-[10px] text-stone-400 font-mono block">Based on 100+ local customer votes</span>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-bento-border shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Gold border decorative line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-bento-maroon/20 group-hover:bg-bento-maroon transition-colors" />
              <Quote className="absolute right-6 top-6 w-12 h-12 text-bento-cream/50 group-hover:text-bento-cream transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex text-bento-gold space-x-0.5">
                  {[...Array(Math.floor(rev.rating))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  {rev.rating % 1 !== 0 && (
                    <Star className="w-4 h-4 fill-current opacity-50" />
                  )}
                </div>

                {/* Content Comment */}
                <p className="text-stone-700 text-base font-sans font-light italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-100 relative z-10">
                <div>
                  <h4 className="font-serif text-bento-maroon-deep font-bold text-sm">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-stone-400 font-sans tracking-wider uppercase block">
                    {rev.date}
                  </span>
                </div>
                {rev.tag && (
                  <span className="bg-bento-cream border border-bento-border/50 text-bento-maroon font-bold font-sans text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
