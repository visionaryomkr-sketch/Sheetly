import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, XCircle, Zap, CreditCard, Sparkles } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

export default function ComparisonSection() {
  const beforeItems = [
    "5 different Excel files for tracking",
    "3+ apps subscriptions (₹3,000/month)",
    "Notion setup taking 1+ month",
    "Missing client payment follow-ups",
    "Tax season nightmare",
    "Tasks scattered everywhere",
    "No clear business overview",
    "Mental overload daily",
    "Unprofessional invoice formats",
    "₹1.5 LAKH+ on subscriptions over 5 years"
  ];

  const afterItems = [
    "ONE master spreadsheet for everything",
    "Pay ₹1,299 ONCE — lifetime access",
    "Setup in 5 minutes, use forever",
    "Auto-tracking for all payments",
    "Tax season = piece of cake",
    "All tasks in one organized place",
    "Beautiful dashboard at a glance",
    "Mental peace and clarity",
    "Professional PDF invoices auto-generated",
    "₹1.5 LAKH+ saved over 5 years"
  ];

  return (
    <section id="comparison" className="py-16 md:py-32 bg-white relative overflow-hidden contain-paint">
      <div className="decorative-layer" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-50 rounded-full blur-[60px] gpu opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-red-50 rounded-full blur-[60px] gpu opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-purple-700 bg-purple-50 border border-purple-100 mb-6 uppercase"
          >
            ✨ THE TRANSFORMATION
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight tracking-[-0.03em]"
          >
            Your Business: <span className="text-[#DC2626]">Before</span> vs <span className="rainbow-text">After Sheetly</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed font-normal"
          >
            See the dramatic difference Sheetly makes in your daily business operations.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch pt-4 md:pt-8">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#FEF2F2] to-[#FFE4E4] p-6 sm:p-8 md:p-12 rounded-[32px] border-2 border-red-200 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10">
              <XCircle className="w-24 h-24 md:w-32 md:h-32 text-red-900" />
            </div>
            
            <div className="text-center mb-8 md:mb-10">
              <span className="text-4xl md:text-6xl mb-4 md:mb-6 block">😩</span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-[#991B1B] uppercase tracking-[-0.03em] mb-2">BEFORE Sheetly</h3>
              <p className="text-xs md:text-sm italic text-red-600 font-medium tracking-[0.05em] uppercase font-sans">The Daily Chaos</p>
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {beforeItems.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-4 text-[#7F1D1D] font-normal border-b border-red-200/50 pb-3 last:border-0"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="pt-6 md:pt-8 border-t border-red-200/50">
              <div className="flex flex-col gap-3">
                <p className="text-base md:text-lg font-bold text-[#991B1B] flex items-center font-display tracking-tight">
                  <span className="mr-3 scale-75 md:scale-100">⏰</span> 2+ hours daily on admin
                </p>
                <p className="text-base md:text-lg font-bold text-[#991B1B] flex items-center font-display tracking-tight">
                  <span className="mr-3 scale-75 md:scale-100">💸</span> ₹3,000+/month bleeding away
                </p>
              </div>
            </div>
          </motion.div>

          {/* VS Divider - Desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-display font-extrabold text-3xl shadow-2xl border-4 border-white tracking-[-0.04em]"
            >
              VS
            </motion.div>
          </div>

          {/* VS Divider - Mobile */}
          <div className="lg:hidden flex justify-center -my-6 relative z-20">
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-display font-extrabold text-xl shadow-xl border-4 border-white tracking-[-0.04em]">
              VS
            </div>
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-[32px] border-2 border-transparent shadow-2xl relative overflow-hidden group"
          >
            {/* Rainbow border gradient animation */}
            <div className="absolute inset-0 p-[2px] rounded-[32px] pointer-events-none z-0">
               <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-gradient-rotate opacity-20"
                    style={{ background: `conic-gradient(#8B5CF6, #EC4899, #F97316, #FACC15, #10B981, #3B82F6, #8B5CF6)` }}>
               </div>
               <div className="absolute inset-0 bg-white rounded-[30px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8 md:mb-10">
                <motion.span 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl md:text-6xl mb-4 md:mb-6 block"
                >
                  🎉
                </motion.span>
                <h3 className="text-2xl md:text-3xl font-bold font-display rainbow-text uppercase tracking-[-0.03em] mb-2">AFTER Sheetly</h3>
                <p className="text-xs md:text-sm italic text-purple-600 font-medium tracking-[0.05em] uppercase font-sans">The Organized Life</p>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {afterItems.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-4 text-emerald-800 font-normal border-b border-gray-50 pb-3 last:border-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-6 md:pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg font-bold font-display tracking-tight rainbow-text flex items-center">
                    <span className="mr-3 scale-75 md:scale-100">⏰</span> 30 mins daily — 90 mins saved!
                  </p>
                  <p className="text-base md:text-lg font-bold font-display tracking-tight rainbow-text flex items-center">
                    <span className="mr-3 scale-75 md:scale-100">💰</span> ₹3,000+/month back in your pocket
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Impact */}
        <div className="mt-20 md:mt-24 text-center">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary mb-6 md:mb-8 tracking-[-0.03em]"
          >
            The Difference: <span className="rainbow-text">₹13,500 Saved</span> + <span className="rainbow-text">90 Minutes Daily</span>
          </motion.h3>
          
          <p className="text-sm sm:text-base md:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 md:mb-12 font-normal">
            Imagine what you could do with 90 extra minutes every day and ₹13,500 back in your pocket every year.
          </p>
          
          <div className="flex flex-col items-center">
            <motion.a
              href={PAYMENT_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-lg md:text-2xl font-bold rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 tracking-tight"
            >
              <span>Get The Transformation — {PRODUCT_PRICE}</span>
              <ArrowRight className="ml-3 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7" />
            </motion.a>
            
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-[11px] sm:text-sm font-semibold text-secondary">
              <span className="flex items-center"><CreditCard className="w-5 h-5 mr-2 text-blue-500" /> Razorpay Secure</span>
              <span className="flex items-center"><Zap className="w-5 h-5 mr-2 text-orange-500" /> Instant Access</span>
              <span className="flex items-center"><Sparkles className="w-5 h-5 mr-2 text-emerald-500" /> 7-Day Refund</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
