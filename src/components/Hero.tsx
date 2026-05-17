import { motion } from "motion/react";
import { CheckCircle2, Star, Users, Lock, Zap, ArrowRight, TrendingDown } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE, ORIGINAL_PRICE, SAVINGS } from "../constants";
import ZoomableImage from "./ZoomableImage";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-32 min-h-[90vh] flex items-center overflow-visible w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left gpu"
          >
            {/* Launch Offer Badge */}
            <div className="flex mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase text-[#EA580C] bg-[#FFF7ED] border border-[#FED7AA] shadow-sm">
                <span className="mr-1.5 flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                🔥 LAUNCH OFFER - SAVE {SAVINGS}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.1] md:leading-[1.05] font-extrabold tracking-[-0.04em] text-primary mb-6">
              Run Your Entire Service Business From <span className="rainbow-text block">ONE Spreadsheet</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-xl text-[#6B7280] leading-relaxed max-w-lg mb-8 font-normal">
              16 powerful tabs. 31+ features. Lifetime access. Replace your expensive SaaS subscriptions with a one-time investment that actually works.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-10">
              {["Built for India", "Zero Learning Curve", "Lifetime Updates"].map((text) => (
                <span key={text} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[11px] sm:text-[13px] font-medium text-gray-600 italic flex items-center tracking-normal">
                  ✅ {text}
                </span>
              ))}
            </div>

            {/* CTA Section */}
            <div className="w-full sm:w-auto space-y-4 flex flex-col items-center lg:items-start">
              <motion.a
                href={PAYMENT_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto max-w-[95%] sm:max-w-none px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-base sm:text-xl font-bold rounded-xl shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.4)] transition-all duration-300"
              >
                <span className="md:hidden">Get Access {PRODUCT_PRICE}</span>
                <span className="hidden md:inline">Get Instant Access — {PRODUCT_PRICE}</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm font-normal">
                  <span className="text-gray-400 line-through mr-3">Original: {ORIGINAL_PRICE}</span>
                  <span className="text-[#10B981] font-bold underline decoration-2 underline-offset-4">Today: {PRODUCT_PRICE}</span>
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full border-t border-gray-100">
              <div className="flex items-center justify-center lg:justify-start text-[11px] sm:text-[12px] font-medium text-[#6B7280] tracking-normal">
                <span className="text-[#FACC15] mr-2">⭐⭐⭐⭐⭐</span> 4.9/5 Rating
              </div>
              <div className="flex items-center justify-center lg:justify-start text-[11px] sm:text-[12px] font-medium text-[#6B7280] tracking-normal">
                <span className="bg-blue-100 p-1.5 rounded-md mr-2 text-blue-600">👥</span> 424+ Users
              </div>
              <div className="flex items-center justify-center lg:justify-start text-[11px] sm:text-[12px] font-medium text-[#6B7280] tracking-normal">
                <span className="bg-orange-100 p-1.5 rounded-md mr-2 text-orange-600">🔒</span> Razorpay
              </div>
              <div className="flex items-center justify-center lg:justify-start text-[11px] sm:text-[12px] font-medium text-[#6B7280] tracking-normal">
                <span className="bg-green-100 p-1.5 rounded-md mr-2 text-green-600">⚡</span> Instant
              </div>
            </div>
          </motion.div>

          {/* Right Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-1 relative w-full max-w-full mx-auto gpu overflow-visible"
          >
            <div className="md:animate-float">
              <div className="rainbow-border-container rounded-[20px] shadow-2xl relative group overflow-visible">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-10 rounded-[20px]"></div>
                <div className="relative bg-white rounded-[16px] overflow-visible aspect-[4/3] md:aspect-auto border border-gray-100">
                  <ZoomableImage
                    src="src/Images/hero-image.webp"
                    alt="Sheetly Business Dashboard Mockup"
                    className="w-full h-auto max-w-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating tags/badges over image */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 hidden sm:block gpu">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">Cost Savings</p>
                      <p className="text-sm font-bold text-gray-800">₹24,000 / Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-400 mix-blend-screen filter blur-[60px] opacity-10 -z-10 animate-pulse-slow gpu"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
