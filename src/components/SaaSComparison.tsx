import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, XCircle, ArrowRight, DollarSign, Wallet } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

const comparisonData = [
  { feature: "Cost (Yearly)", notion: "₹9,600+", others: "₹15,000-24,000+", sheetly: "₹499 ONCE ✅", highlight: true },
  { feature: "5-Year Total Cost", notion: "₹48,000", others: "₹75,000-1,20,000", sheetly: "Still ₹499 ✅", highlight: true },
  { feature: "Time to Master", notion: "1 month", others: "2-4 weeks", sheetly: "5 minutes ✅" },
  { feature: "Setup & Configuration", notion: "Hours of work", others: "Days of setup", sheetly: "Instant ✅" },
  { feature: "INR & GST Support", notion: "❌ No", others: "❌ Limited", sheetly: "✅ Built-in" },
  { feature: "Offline Access", notion: "❌ No", others: "❌ No", sheetly: "✅ Yes (Excel)" },
  { feature: "Customization Level", notion: "⚠️ Limited", others: "⚠️ Restricted", sheetly: "✅ 100% Free" },
  { feature: "Data Ownership", notion: "Their servers", others: "Their cloud", sheetly: "✅ Your device" },
  { feature: "Subscription Trap", notion: "❌ Yes", others: "❌ Yes", sheetly: "✅ Never" },
  { feature: "Hidden Charges", notion: "⚠️ Often", others: "⚠️ Yes", sheetly: "✅ Zero fees" },
  { feature: "Support", notion: "❌ No", others: "❌ No", sheetly: "✅ WhatsApp" },
  { feature: "If You Cancel", notion: "Lose all data", others: "Lose all data", sheetly: "✅ Yours forever" },
];

export default function SaaSComparison() {
  return (
    <section id="pricing-comparison" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#F5F3FF] to-white">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 text-purple-200/20 md:animate-float hidden md:block">
        <DollarSign size={120} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-[#166534] bg-gradient-to-r from-[#DCFCE7] to-[#FEF3C7] mb-6 shadow-sm uppercase"
          >
            💰 STOP WASTING MONEY
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight tracking-[-0.03em]"
          >
            <span className="rainbow-text">Sheetly</span> vs <span className="text-[#DC2626]">Expensive SaaS</span>
          </motion.h2>
          
          <p className="text-base md:text-xl text-secondary max-w-2xl mx-auto font-normal">
            Why pay ₹2,000/month forever when you can pay ₹499 ONCE? See the brutal truth in numbers.
          </p>
        </div>

        {/* Comparison Table wrapper with overflow scroll (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:block bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto gpu contain-layout"
        >
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="p-8 text-secondary font-bold uppercase tracking-widest text-xs w-[40%] bg-transparent sticky left-0 z-20">Feature</th>
                  <th className="p-8 text-center text-gray-800 font-semibold w-[15%] font-display">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-xs mb-2">N</div>
                      <span className="text-base">Notion</span>
                      <span className="text-xs font-normal text-gray-400 mt-1 font-sans">₹800/mo</span>
                    </div>
                  </th>
                  <th className="p-8 text-center text-gray-800 font-semibold w-[15%] font-display">
                    <div className="flex flex-col items-center">
                      <div className="flex mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm -mr-1"></div>
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      </div>
                      <span className="text-base whitespace-nowrap">Other SaaS</span>
                      <span className="text-xs font-normal text-gray-400 mt-1 font-sans">₹2,000/mo</span>
                    </div>
                  </th>
                  <th className="p-8 text-center relative w-[30%] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-[#EC4899]/5 z-0"></div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 animate-pulse font-sans tracking-[0.1em]">POPULAR</div>
                    <div className="flex flex-col items-center relative z-10">
                      <span className="rainbow-text text-2xl font-bold italic font-display tracking-[-0.04em]">Sheetly</span>
                      <span className="text-green-600 font-bold text-base mt-1 font-display tracking-[-0.02em]">{PRODUCT_PRICE} ONCE</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/30 transition-colors">
                    <td className="p-6 pl-8 font-semibold text-gray-700 text-base font-display bg-white">{row.feature}</td>
                    <td className="p-6 text-center text-red-500/80 text-sm font-normal tracking-normal">{row.notion}</td>
                    <td className="p-6 text-center text-red-500/80 text-sm font-normal tracking-normal">{row.others}</td>
                    <td className={`p-6 text-center font-bold relative overflow-hidden backdrop-blur-[2px] ${row.highlight ? 'text-green-600 text-xl font-display tracking-[-0.02em]' : 'text-emerald-700 font-sans text-base tracking-normal'}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-[#EC4899]/5"></div>
                      <span className="relative z-10">{row.sheetly}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50/80">
                  <td className="p-10 font-bold text-primary text-2xl font-display tracking-[-0.03em] bg-gray-50/80 uppercase">5-YEAR VALUE</td>
                  <td className="p-10 text-center text-red-500/70 font-semibold font-display line-through text-xl tracking-[-0.02em]">₹48,000+</td>
                  <td className="p-10 text-center text-red-500/70 font-semibold font-display line-through whitespace-nowrap text-xl tracking-[-0.02em]">₹75k - 1.2L</td>
                  <td className="p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-[#EC4899]/10"></div>
                    <div className="relative z-10">
                      <div className="text-green-600 text-3xl font-bold font-display tracking-[-0.03em]">{PRODUCT_PRICE} ✅</div>
                      <div className="text-green-600/70 text-xs font-semibold uppercase tracking-[0.1em] mt-1 font-sans">ONE TIME PAYMENT</div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-lg text-center mb-6">
            <h4 className="text-xl font-bold font-display rainbow-text mb-2">Sheetly's Unfair Advantage</h4>
            <p className="text-xs text-gray-500">Pay once, own forever. No monthly traps.</p>
          </div>

          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm gpu"
            >
              <h4 className="text-base font-bold text-gray-900 mb-4 font-display flex items-center gap-2">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                {row.feature}
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-2 border-b border-gray-50">
                  <span className="text-gray-400">Notion</span>
                  <span className="text-red-500/80 font-medium">{row.notion}</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-gray-50">
                  <span className="text-gray-400">Other SaaS</span>
                  <span className="text-red-500/80 font-medium">{row.others}</span>
                </div>
                <div className="flex justify-between items-center bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <span className="text-emerald-700 font-bold text-sm">Sheetly</span>
                  <span className={`font-bold ${row.highlight ? 'text-emerald-600 text-base' : 'text-emerald-700 text-sm'}`}>{row.sheetly}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 5-Year Value Mobile Card */}
          <div className="bg-primary p-6 rounded-2xl text-white shadow-xl mt-8">
            <h4 className="text-lg font-bold font-display mb-4 uppercase tracking-wider text-center">5-Year Value Comparison</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center opacity-60">
                <span className="text-sm">Notion</span>
                <span className="text-lg line-through">₹48,000+</span>
              </div>
              <div className="flex justify-between items-center opacity-60">
                <span className="text-sm">Other SaaS</span>
                <span className="text-lg line-through">₹75k - 1.2L</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 mt-4 text-center">
                <span className="block text-gray-300 text-xs font-bold uppercase tracking-widest mb-1">YOUR INVESTMENT</span>
                <span className="block text-3xl font-bold font-display rainbow-text">{PRODUCT_PRICE}</span>
                <span className="block text-emerald-400 text-xs font-bold mt-2">✅ INSTANT SAVINGS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Callout */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-12 md:mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] border-[2px] md:border-[3px] border-green-200 rounded-[24px] p-6 md:p-12 text-center shadow-xl shadow-green-200/50 relative group">
            <h3 className="text-xl sm:text-2xl md:text-5xl font-bold font-display text-[#166534] mb-4 tracking-[-0.04em] leading-tight">You Save ₹1,18,701 Over 5 Years</h3>
            <p className="text-sm md:text-lg italic text-green-800/80 mb-8 md:mb-10 max-w-xl mx-auto font-normal">
              That's a brand new iPhone... or your dream vacation. All saved by ditching SaaS.
            </p>

            <motion.a
              href={PAYMENT_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-base md:text-xl font-bold rounded-xl shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 tracking-tight"
            >
              <span className="md:hidden">Get Sheetly — {PRODUCT_PRICE}</span>
              <span className="hidden md:inline">Stop Wasting Money — Get Sheetly {PRODUCT_PRICE}</span>
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
