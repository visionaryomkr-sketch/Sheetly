import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

interface PersonaCardProps {
  avatar: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradientColor: string;
  index: number;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ avatar, title, subtitle, description, tags, gradientColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white p-6 md:p-8 rounded-[24px] border-2 border-transparent hover:border-gray-50 relative group transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
    >
      <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left h-full">
        <div 
          className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-4xl mb-4 md:mb-6 shadow-inner relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${gradientColor}20, ${gradientColor}10)` }}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {avatar}
          </motion.span>
        </div>
        
        <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 font-display tracking-[-0.02em]">{title}</h4>
        <p className="text-[10px] sm:text-xs font-medium text-gray-400 mb-4 md:mb-6 font-sans italic tracking-normal">{subtitle}</p>
        
        <p className="text-sm md:text-base text-secondary leading-relaxed mb-6 md:mb-8 flex-grow font-normal tracking-normal">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 md:gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-50 border border-gray-100 rounded-full text-[9px] sm:text-[10px] md:text-[12px] font-bold text-gray-500 uppercase tracking-[0.05em]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function PersonaSection() {
  const personas = [
    {
      avatar: "👨‍💻",
      title: "The Freelancer",
      subtitle: "Designer • Developer • Writer",
      description: "Managing 3-10 active clients across multiple projects. Tired of juggling spreadsheets, payment trackers, and to-do apps.",
      gradientColor: "#8B5CF6",
      tags: ["Multiple clients", "Project tracking", "Invoicing"]
    },
    {
      avatar: "👩‍💼",
      title: "The Agency Owner",
      subtitle: "Marketing • Design • Consulting",
      description: "Running a small team of 2-15 people. Multiple ongoing client projects. Need centralized tracking and team coordination.",
      gradientColor: "#EC4899",
      tags: ["Team management", "Project coordination", "Financial tracking"]
    },
    {
      avatar: "🎯",
      title: "The Solopreneur",
      subtitle: "Coach • Course Creator • Online Service",
      description: "Running a one-person business that needs to look like a team. Premium pricing, premium feel, professional systems.",
      gradientColor: "#F97316",
      tags: ["Personal brand", "Premium clients", "Time-saving"]
    },
    {
      avatar: "📸",
      title: "The Creative Pro",
      subtitle: "Photographer • Videographer • Artist",
      description: "Wedding bookings, commercial projects, deliverables tracking. Manage shoots, edits, payments professionally.",
      gradientColor: "#FACC15",
      tags: ["Booking management", "Deliverable tracking", "Payment schedules"]
    },
    {
      avatar: "🎓",
      title: "The Coach",
      subtitle: "Business Coach • Consultant • Trainer",
      description: "1-on-1 sessions, group programs, course students. Track every client's journey, payment status, and progress.",
      gradientColor: "#10B981",
      tags: ["Session tracking", "Client journey", "Recurring revenue"]
    },
    {
      avatar: "💼",
      title: "The Service Pro",
      subtitle: "Lawyer • Accountant • Architect",
      description: "Professional services with retainer clients. Need detailed records, time tracking, professional invoicing, and reports.",
      gradientColor: "#3B82F6",
      tags: ["Retainer tracking", "Time logs", "Professional reports"]
    }
  ];

  return (
    <section id="personas" className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] to-[#FDF2F8] contain-paint">
      {/* Background Orbs */}
      <div className="decorative-layer" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-200/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-40 gpu"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-200/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 uppercase"
          >
            👥 PERFECT FOR YOU IF...
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 tracking-[-0.03em]"
          >
            Built for <span className="rainbow-text">Modern Service Businesses</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Whether you're a solo freelancer or running a growing agency, Sheetly adapts to your workflow. See if you fit one of these profiles:
          </motion.p>
        </div>

        {/* persona grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} index={index} />
          ))}
        </div>

        {/* bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20 px-4"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 font-display tracking-[-0.03em]">Don't See Your Profession?</h3>
          <p className="text-sm sm:text-base md:text-lg text-secondary max-w-2xl mx-auto mb-8 md:mb-10 font-normal tracking-normal">
            Sheetly works for ANY service-based business. If you have clients, projects, invoices, and finances to manage — Sheetly is built for you.
          </p>
          
          <motion.a
            href={PAYMENT_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all tracking-[-0.02em] font-display"
          >
            <span>Yes, This Is For Me — {PRODUCT_PRICE}</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
