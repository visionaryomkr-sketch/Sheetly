import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-full overflow-x-clip backdrop-blur-md border-b border-gray-100 bg-white/70 h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold tracking-[-0.03em] font-display">
          <span className="rainbow-text">Sheetly</span>
        </div>
        
        <div className="flex items-center">
          <motion.a
            href={PAYMENT_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-xs md:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center tracking-[-0.02em] font-display"
          >
            <span className="md:hidden">Get Access {PRODUCT_PRICE}</span>
            <span className="hidden md:inline">Get Access {PRODUCT_PRICE}</span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
