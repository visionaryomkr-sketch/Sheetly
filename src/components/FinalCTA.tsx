import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-[32px] md:rounded-[48px] p-8 md:p-20 border border-white/10 overflow-hidden shadow-2xl relative">
          {/* Decorative Orbs */}
          <div className="decorative-layer rounded-[32px] md:rounded-[48px]" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase mb-8"
            >
              <Zap className="w-4 h-4 text-yellow-400 fill-current" /> Limited Time Offer
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-[-0.04em] leading-[1.1]"
            >
              Stop Wasting Hours on Admin. <br className="hidden md:block" />
              Start <span className="rainbow-text">Scaling Your Business</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-2xl text-gray-400 mb-12 font-normal leading-relaxed tracking-normal"
            >
              Get instant access to the exact system that power high-performance agencies and freelancers. One-time payment. Lifetime value.
            </motion.p>

            <div className="flex flex-col items-center gap-8">
              <motion.a
                href={PAYMENT_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 md:px-16 py-5 md:py-8 bg-white text-black text-lg md:text-2xl font-bold rounded-[20px] md:rounded-[24px] overflow-hidden transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] font-display tracking-[-0.03em]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center">
                  <span className="md:hidden">Get Access — {PRODUCT_PRICE}</span>
                  <span className="hidden md:inline">YES! I WANT SHEETLY NOW — {PRODUCT_PRICE}</span>
                  <ArrowRight className="ml-4 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.1em] font-sans">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Instant Download
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.1em] font-sans">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" /> Secured Checkout
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-medium uppercase tracking-[0.1em] font-sans">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> One-Time Payment
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8">
           <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-[10px] sm:text-xs">Securely Processed via Razorpay</p>
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-5 sm:h-7" />
              </div>
              <img src="https://img.icons8.com/color/48/upi.png" alt="UPI" className="h-8 sm:h-10" />
              <img src="https://img.icons8.com/color/48/phonepe.png" alt="PhonePe" className="h-8 sm:h-10" />
              <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-8 sm:h-10" />
              <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm" className="h-6 sm:h-8" />
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500">RuPay</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500">NET BANKING</div>
           </div>
           <div className="flex items-center gap-3 mt-4 px-6 py-2 bg-white/5 rounded-full border border-white/10">
             <span className="text-xl">🇮🇳</span>
             <span className="text-white/60 text-xs sm:text-sm font-medium">Indian Payments. Indian Support. 100% Made for Indian Businesses.</span>
           </div>
        </div>
      </div>
    </section>
  );
}
