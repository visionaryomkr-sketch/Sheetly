import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, CreditCard, Star } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

interface BonusCardProps {
  badge: string;
  badgeColor: string;
  icon: string | React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  value: string;
  todayLabel: string;
  isMain?: boolean;
}

const BonusCard: React.FC<BonusCardProps> = ({ badge, badgeColor, icon, iconBg, title, description, value, todayLabel, isMain }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-6 sm:p-8 md:p-10 rounded-[20px] bg-white border-2 transition-all duration-300 group shadow-lg ${isMain ? 'border-transparent shadow-purple-500/20' : 'border-gray-100 hover:border-gray-200 shadow-gray-200/50'}`}
    >
      {isMain && (
        <div className="absolute inset-0 overflow-hidden rounded-[20px] p-[2px] pointer-events-none z-0">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-gradient-rotate bg-[conic-gradient(#8B5CF6,#EC4899,#F97316,#FACC15,#10B981,#3B82F6,#8B5CF6)]"></div>
          <div className="absolute inset-0 bg-white rounded-[18px]"></div>
        </div>
      )}
      
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-8">
        <div className="shrink-0">
          <div className={`w-12 h-12 md:w-16 md:h-16 ${iconBg} rounded-full flex items-center justify-center text-xl md:text-3xl shadow-inner`}>
            {icon}
          </div>
        </div>

        <div className="flex-grow">
          <span className={`inline-flex px-3 py-1 rounded-full text-[9px] md:text-[10px] font-medium uppercase tracking-[0.1em] ${badgeColor} mb-2 md:mb-4`}>
            {badge}
          </span>
          <h3 className={`text-lg md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 font-display tracking-[-0.02em] leading-tight ${isMain ? 'rainbow-text' : ''}`}>{title}</h3>
          <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed font-normal tracking-normal">{description}</p>
        </div>

        <div className="shrink-0 flex flex-col items-center md:items-end justify-center pt-2">
          <span className="text-gray-400 line-through text-[10px] md:text-sm font-bold mb-0.5 md:mb-1 tracking-normal">Value: {value}</span>
          <span className={`text-base md:text-xl font-bold font-display tracking-[-0.02em] ${todayLabel === 'FREE 🎉' ? 'text-green-600' : 'text-purple-600'}`}>{todayLabel}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function BonusStack() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="bonuses" className="py-16 md:py-32 relative overflow-hidden bg-[#0F172A] contain-paint">
      {/* Optimized Background Star Simulation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none gpu">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full opacity-50" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`, 
              width: `${1 + Math.random() * 1.5}px`, 
              height: `${1 + Math.random() * 1.5}px`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] gpu"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[80px] gpu"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] mb-6 shadow-[0_0_20px_rgba(236,72,153,0.4)] uppercase"
          >
            🎁 EXCLUSIVE LAUNCH BONUSES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-[-0.04em]"
          >
            Get 12,496 <span className="text-red-500 line-through decoration-[4px] md:decoration-[6px]">Value</span> for <span className="rainbow-text block md:inline">Just {PRODUCT_PRICE}</span>
          </motion.h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-normal">
            Order today and unlock the complete value stack. This bundle is only available during the launch period.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <BonusCard 
            isMain
            badge="🎯 MAIN PRODUCT"
            badgeColor="bg-purple-100 text-purple-700"
            icon="📊"
            iconBg="bg-gradient-to-br from-purple-50 to-pink-50"
            title="All-in-One Service Business Template"
            description="16 powerful tabs covering CRM, invoicing, tasks, finances, and analytics. The complete business management system."
            value="₹4,999"
            todayLabel="INCLUDED ✅"
          />

          <BonusCard 
            badge="🎁 BONUS #1"
            badgeColor="bg-orange-100 text-orange-700"
            icon="🛍️"
            iconBg="bg-orange-50"
            title="Professional Pricing Calculator"
            description="Stop undercharging for your services. This pricing calculator helps you find the perfect price using 5 different pricing strategies — with automatic profit margin calculation. Know exactly what to charge before sending your next proposal."
            value="₹2,499"
            todayLabel="FREE 🎉"
          />

          <BonusCard 
            badge="🎁 BONUS #2"
            badgeColor="bg-pink-100 text-pink-700"
            icon="💸"
            iconBg="bg-pink-50"
            title="Income & Expense Tracker"
            description="The simplest way to see your complete financial picture. Just enter your transactions — monthly, annual, and custom dashboards build themselves automatically. Beginner-friendly with sample data included."
            value="₹1,999"
            todayLabel="FREE 🎉"
          />
          
          <div className="hidden sm:block space-y-4 md:space-y-6">
            <BonusCard 
              badge="🎁 BONUS #3"
              badgeColor="bg-purple-100 text-purple-700"
              icon="🔄"
              iconBg="bg-purple-50"
              title="Lifetime Updates"
              description="Never pay for updates. Get every new tab and refinement delivered straight to your inbox forever."
              value="₹2,999"
              todayLabel="FREE 🎉"
            />

          </div>
          
          <div className="sm:hidden text-center text-gray-500 text-xs italic">
            + 3 more bonuses included in the bundle!
          </div>
        </div>

        {/* Value Calculation Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-16 md:mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-black p-6 sm:p-8 md:p-12 rounded-[32px] border-[3px] md:border-[4px] border-white shadow-[0_0_50px_rgba(249,115,22,0.3)] text-center text-white relative">
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] uppercase mb-3 md:mb-4 opacity-80">TOTAL PACKAGE VALUE</p>
            <div className="text-4xl md:text-7xl font-bold line-through opacity-50 mb-3 md:mb-4 font-display tracking-[-0.03em] bg-black">₹12,496</div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-2xl md:text-4xl mb-4"
            >
              ↓
            </motion.div>
            <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#FCD34D] drop-shadow-[0_0_20px_rgba(252,211,77,0.5)] animate-pulse-gold rounded-2xl p-2 md:p-4 font-display tracking-[-0.04em] bg-[#1a1717]">
              Today: {PRODUCT_PRICE}
            </div>
            
            <div className="mt-6 md:mt-8 inline-block bg-red-600 text-white font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm sm:text-base md:text-xl md:rotate-[-2deg] shadow-lg tracking-[-0.02em]">
              You Save ₹11,197 (90% OFF)
            </div>
          </div>
        </motion.div>

        {/* Urgency Timer */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm sm:text-base md:text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> THIS OFFER EXPIRES IN:
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 w-16 md:w-28 text-white font-bold text-xl md:text-5xl shadow-xl border border-white/10 font-display tracking-[-0.04em]">
                {formatNum(timeLeft.hours)}
              </div>
              <span className="text-[8px] md:text-xs font-medium text-gray-500 mt-2 tracking-[0.1em] uppercase">HOURS</span>
            </div>
            <span className="text-xl md:text-5xl font-bold text-gray-600">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 w-16 md:w-28 text-white font-bold text-xl md:text-5xl shadow-xl border border-white/10 font-display tracking-[-0.04em]">
                {formatNum(timeLeft.minutes)}
              </div>
              <span className="text-[8px] md:text-xs font-medium text-gray-500 mt-2 tracking-[0.1em] uppercase">MINUTES</span>
            </div>
            <span className="text-xl md:text-5xl font-bold text-gray-600">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-6 w-16 md:w-28 text-white font-bold text-xl md:text-5xl shadow-xl border border-white/10 font-display tracking-[-0.04em]">
                {formatNum(timeLeft.seconds)}
              </div>
              <span className="text-[8px] md:text-xs font-medium text-gray-500 mt-2 tracking-[0.1em] uppercase">SECONDS</span>
            </div>
          </div>
          <p className="mt-6 text-yellow-300 font-bold italic font-sans text-xs sm:text-base">After this, price increases to ₹4,999</p>
        </div>

        {/* Huge CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.a
            href={PAYMENT_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full sm:w-auto max-w-[95%] px-6 py-4 md:px-20 md:py-8 bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] text-white text-base sm:text-xl md:text-3xl font-bold rounded-2xl shadow-[0_0_60px_-10px_rgba(236,72,153,0.6)] transition-all duration-500 hover:shadow-[0_0_80px_-5px_rgba(236,72,153,0.8)] font-display tracking-[-0.02em]"
          >
            <span>CLAIM YOUR BUNDLE — {PRODUCT_PRICE}</span>
            <ArrowRight className="ml-3 sm:ml-4 w-6 h-6 md:w-8 md:h-8" />
          </motion.a>
          
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-gray-400 font-medium text-[10px] sm:text-xs md:text-sm">
            <span className="flex items-center gap-2 font-normal"><CreditCard className="w-4 h-4" /> Razorpay Secure</span>
            <span className="flex items-center gap-2 font-normal"><Zap className="w-4 h-4" /> Instant Delivery</span>
            <span className="flex items-center gap-2 font-normal"><ShieldCheck className="w-4 h-4" /> 7-Day Refund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
