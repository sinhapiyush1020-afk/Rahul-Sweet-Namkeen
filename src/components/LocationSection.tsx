import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function LocationSection() {
  const address = "121 637, Sabji Mandi Rd, Industrial Estate, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005";
  const mapSearchQuery = "Rahul Sweets & Namkeen Sabji Mandi Rd Shastri Nagar Kanpur";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearchQuery)}`;

  return (
    <section id="location" className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-bento-border/40">
      {/* Background visual glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-bento-cream/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Address Card Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-bento-maroon font-mono text-xs tracking-widest uppercase font-bold block">
                Find Our Shop
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-bento-maroon-deep">
                Visit Us Today
              </h2>
              <div className="w-16 h-1 bg-bento-gold rounded-full" />
              <p className="text-stone-600 text-base font-sans font-light leading-relaxed">
                Step into our outlet in Kanpur and immerse yourself in the aroma of freshly cooked sweets, authentic flavor mixtures, and luxury gift platters. We look forward to sweetening your day!
              </p>
            </div>

            {/* Structured Address details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-bento-cream border border-bento-border text-bento-maroon rounded-2xl flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-bento-maroon-deep font-bold text-base">Shop Address</h4>
                  <p className="text-stone-600 text-sm font-sans font-light mt-0.5 leading-relaxed">
                    {address}
                  </p>
                  <span className="text-stone-400 text-xs font-mono block mt-1">
                    Location: Shastri Nagar, Kanpur, Uttar Pradesh
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-bento-cream border border-bento-border text-bento-maroon rounded-2xl flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-bento-maroon-deep font-bold text-base">Opening Hours</h4>
                  <p className="text-stone-600 text-sm font-sans font-light mt-0.5">
                    Monday – Sunday: 8:00 AM – 10:00 PM
                  </p>
                  <span className="text-bento-maroon text-xs font-sans font-bold block mt-1">
                    ● Open 7 Days a Week
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-bento-gold hover:bg-[#eac44e] text-bento-maroon-deep font-bold px-6 py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95 duration-300"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>

              <a
                href="tel:07275141414"
                className="w-full sm:w-auto bg-white hover:bg-bento-cream/20 text-bento-maroon border border-bento-border font-bold px-6 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Simulated Styled Map Area */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-[4/3] rounded-[32px] overflow-hidden border border-bento-border bg-white shadow-lg p-6 flex flex-col justify-between"
            >
              {/* Graphic Grid Background to simulate maps */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#800000_1px,transparent_1px),linear-gradient(to_bottom,#800000_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/80 to-white pointer-events-none" />

              {/* Simulated Map Markers & Routes */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Simulated Path Line */}
                <svg className="w-full h-full absolute inset-0 text-bento-maroon/20" fill="none">
                  <path d="M 100,100 L 250,150 Q 300,180 320,250 T 450,300" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4" />
                </svg>
                {/* Simulated Location Marker Wave */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 bg-bento-maroon/10 rounded-full animate-ping duration-1000" />
                  <div className="absolute w-12 h-12 bg-bento-maroon/20 rounded-full animate-pulse" />
                  <div className="relative w-6 h-6 bg-bento-maroon rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Map Floating UI Widgets */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md border border-bento-border p-4 rounded-2xl max-w-xs space-y-2 shadow-md">
                <span className="font-serif text-bento-maroon-deep font-bold text-sm block">Rahul Sweets & Namkeen</span>
                <span className="text-[10px] text-stone-500 font-mono block">Sabji Mandi Rd, Shastri Nagar, Kanpur</span>
                <div className="flex items-center space-x-1 text-bento-gold">
                  <span className="text-xs font-bold text-stone-800">4.1</span>
                  <div className="flex text-[10px]">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span className="text-[10px] text-stone-400">(100+ reviews)</span>
                </div>
              </div>

              {/* Map Action Overlay */}
              <div className="relative z-10 flex justify-end">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-bento-maroon hover:bg-bento-maroon-deep text-white text-xs px-3.5 py-2.5 rounded-xl flex items-center space-x-1.5 shadow-md font-bold"
                >
                  <span>Navigate in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-bento-gold" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 fill-current text-amber-500" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
