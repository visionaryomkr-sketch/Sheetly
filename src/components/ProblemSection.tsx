import { motion } from "motion/react";

const problems = [
  {
    icon: "💸",
    title: "The Subscription Trap",
    description: "You signed up for Notion to organize clients. Then some invoicing app. Then an accounting tool for GST. ₹3,000–5,000 leaves your account every month. Automatically. Silently. And somehow — your business still runs on Excel.",
    color: "bg-red-100"
  },
  {
    icon: "🤯",
    title: "The 11-Tab Workday",
    description: "You open Chrome for client emails, Switch to Notion for project updates, Open Excel for invoice tracking, Open WhatsApp to chase payments. Open Calendar to check deadlines, You're not working,You're APP-SWITCHING. Average business owner loses 2-3 hours daily. just navigating between tools. That's 15 hours every week. 60 hours per month.",
    color: "bg-orange-100"
  },
  {
    icon: "👥",
    title: "Busy Team. Zero Progress.",
    description: "Monday morning meeting — everyone nods. Wednesday — you follow up on WhatsApp. Friday — the deadline is tomorrow and nobody has a clear update. Client calls: What's the status?. You say: Let me check and get back to you. You started this business to lead. Not to spend your days chasing your own team.",
    color: "bg-yellow-100"
  },
  {
    icon: "💰",
    title: "Good Month. Empty Bank.",
    description: "You had a good month. Revenue looked solid. But at the end of it — your bank balance tells a different story. Which client paid? Who still owes you? Which expense was that? Is this profit or loss? You're running a business. without ever really knowing the score.",
    color: "bg-pink-100"
  },
  {
    icon: "😰",
    title: "Tax Season Nightmare",
    description: "It's that time of the quarter again. You open your laptop.You open your laptop. Stare at 6 different files. Call your CA. He sighs. Again. 3 days of panic, late nights, and scattered receipts — for something that should take 3 hours. Every. Single. Quarter. Same stress. Same chaos. Same CA bill.",
    color: "bg-purple-100"
  },
  {
    icon: "🚫",
    title: "Unprofessional Image",
    description: "You deliver great work. Your clients are happy. But then they refer a friend — And that friend sees your WhatsApp invoice. Your Excel quote. Your I'll send you the details on chat. And they quietly go to your competitor. Not because your work is worse. Because your business doesn't look serious. First impressions close deals. Or kill them.",
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
            Every business owner faces these exact problems daily. The good news? There's a simple solution.
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
            
            You already know you need a better system.
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
