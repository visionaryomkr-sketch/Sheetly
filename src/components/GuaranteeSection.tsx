import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Zap, Gift, CheckCircle2, XCircle } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FEF3C7] to-[#FDE68A]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full mix-blend-overlay animate-float"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`, 
              width: `${Math.random() * 10}px`, 
              height: `${Math.random() * 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-white bg-gradient-to-r from-[#166534] to-[#14532D] mb-6 md:mb-8 shadow-xl uppercase"
          >
            🛡️ ZERO RISK PURCHASE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold text-primary mb-6 md:mb-8 leading-tight tracking-[-0.04em]"
          >
            <span className="text-[#16A34A]">100%</span> Money-Back Guarantee
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-2xl text-gray-800 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Try Sheetly risk-free for 7 days. If our product doesn't work for you, we'll refund every rupee. No questions asked.
          </motion.p>
        </div>

        {/* Huge Guarantee Badge */}
        <div className="flex justify-center mb-16 md:mb-20 relative">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 md:border-8 border-white shadow-[0_0_50px_rgba(234,179,8,0.3)] md:shadow-[0_0_100px_rgba(234,179,8,0.5)] flex flex-col items-center justify-center text-white relative group"
          >
            <div className="text-center relative z-10 p-4 font-display">
              <div className="text-4xl md:text-6xl font-extrabold mb-1 tracking-[-0.04em]">100%</div>
              <div className="text-[10px] md:text-xs font-medium tracking-[0.1em] uppercase mb-1">MONEY BACK</div>
              <div className="text-[10px] md:text-xs font-medium tracking-[0.1em] uppercase">GUARANTEE</div>
            </div>
            
            <div className="absolute bottom-4 sm:bottom-6 bg-white text-yellow-600 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-[9px] md:text-xs font-black rotate-[-5deg] shadow-lg">
              7 DAYS
            </div>
          </motion.div>
        </div>

        {/* Guarantee Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
          {[
            { icon: "🤝", title: "No Questions Asked", desc: "Just email us within 7 days. We won't ask why or try to convince you to stay." },
            { icon: "🎁", title: "Keep All Bonuses", desc: "Even if you refund, all the bonus templates are yours to keep forever. Our gift to you." },
            { icon: "⚡", title: "Quick Refund Process", desc: "Refunds processed within 48 hours back to your original payment method." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] border-2 border-yellow-100 shadow-xl text-center group transition-all"
            >
              <div className="text-4xl md:text-6xl mb-4 md:mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 md:mb-4 font-display tracking-[-0.02em] leading-tight text-center">{item.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal tracking-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Refund Policy Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[24px] md:rounded-[40px] border-2 border-yellow-200 overflow-hidden shadow-2xl mb-16 md:mb-24"
        >
          <div className="p-6 md:p-16 border-b border-yellow-50 bg-yellow-50/30">
            <h3 className="text-xl md:text-4xl font-semibold text-center text-primary mb-2 md:mb-4 font-display tracking-[-0.02em] leading-tight">📋 Our Fair Refund Policy</h3>
            <p className="text-center text-[10px] sm:text-sm text-gray-500 font-normal tracking-normal">Exact conditions for transparency:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-yellow-50">
              <h5 className="text-base md:text-xl font-semibold text-[#166534] mb-6 flex items-center gap-2 font-display tracking-[-0.02em]">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> You GET a Full Refund If:
              </h5>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Technical issues we can't resolve",
                  "Missing features mentioned on this page",
                  "File is corrupted or doesn't open properly"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-700 font-normal tracking-normal">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 md:p-12 bg-gray-50/20">
              <h5 className="text-base md:text-xl font-semibold text-[#991B1B] mb-6 flex items-center gap-2 font-display tracking-[-0.02em]">
                <XCircle className="w-5 h-5 md:w-6 md:h-6" /> We CANNOT Refund If:
              </h5>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "You simply changed your mind after use",
                  "Decision made after the 7-day window",
                  "Request without trying the file"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-700 font-normal tracking-normal">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Confidence statement */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6 font-display tracking-[-0.03em] leading-tight"
          >
            Why So Confident? Because Sheetly <span className="rainbow-text">Just Works</span>.
          </motion.h3>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-normal tracking-normal">
            Out of 1,000+ customers, only 8 requested refunds. That's a <span className="font-bold text-primary font-display tracking-[-0.02em]">99.3% satisfaction</span>. We're confident you'll love it too.
          </p>
        </div>

        {/* Final CTA */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <motion.a
             href={PAYMENT_URL}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-flex items-center justify-center w-full sm:w-auto max-w-[95%] px-6 py-4 md:px-16 md:py-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-base sm:text-xl md:text-3xl font-bold rounded-[20px] md:rounded-[24px] shadow-2xl transition-all duration-300 font-display tracking-[-0.03em]"
          >
            <span className="md:hidden">Get It Risk-Free — {PRODUCT_PRICE}</span>
            <span className="hidden md:inline">Start My 7-Day Risk-Free Trial — {PRODUCT_PRICE}</span>
            <ArrowRight className="ml-3 sm:ml-4 w-6 h-6 md:w-8 md:h-8" />
          </motion.a>
          
          <div className="mt-8 flex justify-center flex-wrap items-center gap-4 text-primary font-medium uppercase tracking-[0.1em] text-[9px] sm:text-xs font-sans">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Instant Access</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 7-Day Refund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sparkles Helper Component is already imported as an emoji/icon
const Sparkles = ({ className }: { className: string }) => (
  <div className={className}>✨</div>
);
