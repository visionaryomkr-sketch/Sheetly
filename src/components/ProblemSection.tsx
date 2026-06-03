import { motion } from "motion/react";

const problems = [
  {
    icon: "💸",
    title: "You're Bleeding ₹3,000+ Every Month",
    description: "Notion for notes, ClickUp for tasks, Airtable for databases, Wave for invoices, Calendly for scheduling. 5 subscriptions. ₹3,000-5,000/month. ₹40,000-60,000/year. And you only use 20% of what you pay for.",
    color: "bg-red-100"
  },
  {
    icon: "🤯",
    title: "Your Productivity is Being Murdered",
    description: "You open Chrome for client emails, Switch to Notion for project updates, Open Excel for invoice tracking, Open WhatsApp to chase payments. Open Calendar to check deadlines, You're not working,You're APP-SWITCHING. Average business owner loses 2-3 hours daily. just navigating between tools. That's 15 hours every week. 60 hours per month.",
    color: "bg-orange-100"
  },
  {
    icon: "⏰",
    title: "Setup Hell",
    description: "Spent 2 weeks trying to setup Notion. Watched 50+ tutorials. Customized templates. Still not working the way you want. Time wasted: priceless.",
    color: "bg-yellow-100"
  },
  {
    icon: "📉",
    title: "Missing Payments",
    description: "Which client paid? Who's pending? When was the last invoice sent? You're constantly chasing payments because there's no clear system to track them.",
    color: "bg-pink-100"
  },
  {
    icon: "😰",
    title: "Tax Season Nightmare",
    description: "Year-end comes and your data is scattered across 10 places. Hours spent organizing receipts, calculating GST, and your CA charges extra for the cleanup mess.",
    color: "bg-purple-100"
  },
  {
    icon: "🚫",
    title: "Unprofessional Image",
    description: "Sending invoices on WhatsApp, tracking projects in random Excel files, no centralized client database. You're losing premium clients because you don't look professional.",
    color: "bg-blue-100"
  }
];

export default function ProblemSection() {
  return (
    <section id="problems" className="py-16 md:py-32 bg-gradient-to-b from-[#FEF2F2] to-white overflow-x-clip w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-red-600 bg-red-100 border border-red-200 mb-6 uppercase"
          >
            😤 THE STRUGGLE IS REAL
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-4 md:mb-6 leading-tight tracking-[-0.03em]"
          >
            Sound <span className="relative inline-block tracking-tighter">
              Familiar?
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-400 rounded-full"></span>
            </span> You're Not Alone.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed font-normal"
          >
            You work 12 hours a day. You barely sleep. You handle dozens of clients and projects. The problem isn't your hard work, The problem is your system. The good news? There's a simple solution.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#FECACA"
              }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${problem.color} rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6`}>
                {problem.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4 tracking-[-0.02em] font-display">{problem.title}</h3>
              <p className="text-sm md:text-base text-secondary leading-relaxed font-normal tracking-normal">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20 px-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-[-0.03em] font-display">
            If even ONE of these hit home... 
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              👇
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
