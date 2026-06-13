import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { trackFAQSearch } from "../lib/metaPixel";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this a one-time payment or a subscription?",
    answer: "It's a one-time payment of ₹499 only. No monthly fees, no hidden costs. You get lifetime access to the entire system and all future updates for free."
  },
  {
    question: "Do I need to be an Excel expert to use this?",
    answer: "Absolutely not! Sheetly is designed to be plug-and-play. If you can type in a cell, you can use Sheetly. We've handled all the complex formulas and automation behind the scenes."
  },
  {
    question: "Will it work on my Mac/Windows/iPad?",
    answer: "Yes! Sheetly works perfectly on Microsoft Excel (2019 or later) and Google Sheets. You can access your data from any device that supports these platforms."
  },
  {
    question: "Can I customize the templates with my brand logo?",
    answer: "Yes, every template is fully customizable. You can add your logo, change colors, and modify layouts to match your brand identity perfectly."
  },
  {
    question: "What is your refund policy?",
    answer: "7-day money-back guarantee. If Sheetly doesn't work for you — email us within 7 days, full refund processed within 48 hours, no questions asked."
  }
];

const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => {
          trackFAQSearch();
          setIsOpen(!isOpen);
        }}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors font-display tracking-[-0.02em]">
          {item.question}
        </span>
        <div className={`shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-purple-100 text-purple-600 rotate-180' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

      <div className="max-w-4xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium tracking-[0.1em] text-purple-700 bg-purple-100 mb-6 uppercase">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-[-0.04em]">
            Still got <span className="rainbow-text">Questions?</span>
          </h2>
          <p className="text-base md:text-xl text-secondary max-w-2xl mx-auto font-normal tracking-normal">
            Everything you need to know about Sheetly and how it can help your business.
          </p>
        </div>

        <div className="bg-white rounded-[24px] md:rounded-[32px] p-2 md:p-10 shadow-xl border border-gray-100">
          <div className="divide-y divide-gray-100 px-4 md:px-0">
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} item={faq} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-normal mb-4 tracking-normal">Didn't find what you're looking for?</p>
          <a
            href="mailto:support@sheetly.com"
            className="text-purple-600 font-bold hover:text-purple-700 transition-colors flex items-center justify-center gap-2 font-display tracking-[-0.01em]"
          >
            <HelpCircle className="w-5 h-5" /> Contact Support Team
          </a>
        </div>
      </div>
    </section>
  );
}
