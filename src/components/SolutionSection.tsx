import { motion } from "motion/react";
import { ArrowRight, Sparkles, LayoutDashboard, Users, CreditCard, ClipboardCheck, Calendar, Wallet, Zap, Gem, Target, Rocket } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";
import ZoomableImage from "./ZoomableImage";

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-100",
    title: "Instant Setup",
    description: "Open. Customize. Use. Zero learning curve. Start managing your business in 5 minutes."
  },
  {
    icon: <Gem className="w-8 h-8 text-pink-600" />,
    bg: "bg-pink-100",
    title: "Pay Once, Own Forever",
    description: "No subscriptions. No hidden fees. Lifetime access with free updates included."
  },
  {
    icon: <Target className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-100",
    title: "Built for India",
    description: "GST-ready, INR currency, Indian invoice formats. Made specifically for Indian service businesses."
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-600" />,
    bg: "bg-green-100",
    title: "Scales With You",
    description: "From solo freelancer to growing agency. Works for businesses of all sizes."
  }
];

const floatingPills = [
  { icon: <LayoutDashboard className="w-4 h-4 text-purple-500" />, text: "Smart Dashboard", pos: "top-[10%] -left-[1%]" },
  { icon: <Users className="w-4 h-4 text-blue-500" />, text: "CRM System", pos: "top-[20%] -right-[1%]" },
  { icon: <CreditCard className="w-4 h-4 text-orange-500" />, text: "Invoice Manager", pos: "bottom-[30%] -left-[1%]" },
  { icon: <ClipboardCheck className="w-4 h-4 text-green-500" />, text: "Task Tracker", pos: "bottom-[15%] -right-[1%]" },
  { icon: <Calendar className="w-4 h-4 text-pink-500" />, text: "Calendar", pos: "top-[50%] -right-[1%]" },
  { icon: <Wallet className="w-4 h-4 text-emerald-500" />, text: "Bookkeeping", pos: "bottom-[5%] left-[10%]" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#F5F3FF]">
      {/* Background blobs */}
      <div className="decorative-layer" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-200/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] gpu"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-pink-200/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-purple-700 bg-purple-100/50 border border-purple-200 mb-6 uppercase"
          >
            <Sparkles className="w-3 h-3 mr-2 text-purple-500" />
            INTRODUCING THE SOLUTION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight tracking-[-0.03em]"
          >
            Meet <span className="rainbow-text">Sheetly</span> — Your Complete Business In One Spreadsheet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Stop juggling 5 different tools. Sheetly combines client management, invoicing, task tracking, financial planning, and analytics into ONE beautifully designed spreadsheet you'll actually use.
          </motion.p>
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto mb-16 md:mb-24 w-full"
        >
          <div className="rainbow-border-container rounded-[24px] shadow-2xl relative group">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm -z-10 rounded-[24px]"></div>
            <div className="relative bg-white rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-[16/10] border border-gray-100">
              <ZoomableImage
                src="/images/service-business-dashboard.webp"
                alt="Sheetly Main Dashboard"
                className="w-full h-full object-contain md:object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width="800"
                height="500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Pills - Hidden on very small screens, responsive on others */}
            {floatingPills.map((pill, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                className={`hidden lg:flex absolute ${pill.pos} items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-xl border border-gray-50 z-20`}
              >
                {pill.icon}
                <span className="text-sm font-bold text-gray-800 whitespace-nowrap tracking-normal">{pill.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pills Stack - visible on small screens */}
          <div className="flex lg:hidden flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {floatingPills.slice(0, 4).map((pill, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md border border-gray-50">
                {pill.icon}
                <span className="text-[10px] sm:text-xs font-bold text-gray-800 tracking-wide">{pill.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 md:mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${benefit.bg} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                <div className="scale-75 sm:scale-100">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-primary mb-2 md:mb-3 tracking-[-0.02em] font-display">{benefit.title}</h3>
              <p className="text-[11px] sm:text-sm md:text-base text-secondary leading-relaxed font-normal">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-base md:text-xl text-secondary italic mb-6 md:mb-8 font-normal">Ready to transform your business?</p>

          <motion.a
            href={PAYMENT_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full sm:w-auto max-w-[95%] sm:max-w-none px-6 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-base sm:text-xl font-bold rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 tracking-tight"
          >
            <span>Get Sheetly Now — {PRODUCT_PRICE}</span>
            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-[11px] sm:text-sm text-secondary">
            <span className="flex items-center"><Zap className="w-4 h-4 mr-1 text-orange-500" /> Instant access</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center"><CreditCard className="w-4 h-4 mr-1 text-blue-500" /> Secure payment via Razorpay</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1 text-green-500" /> 7-day refund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
