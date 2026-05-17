import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, TrendingUp, Users, Zap, Eye } from 'lucide-react';

interface SalesNotification {
  id: number;
  type: 'purchase' | 'viewing' | 'stock' | 'milestone';
  name?: string;
  location?: string;
  action?: string;
  time?: string;
  avatarText?: string;
  gradient?: string;
  specialTitle?: string;
  specialSubtitle?: string;
  icon?: React.ReactNode;
}

const NOTIFICATIONS: SalesNotification[] = [
  {
    id: 1,
    type: 'purchase',
    name: "Ritika S.",
    location: "Mumbai",
    action: "purchased Sheetly Bundle",
    time: "2 minutes ago",
    avatarText: "R",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    type: 'purchase',
    name: "Karan M.",
    location: "Bangalore",
    action: "claimed launch offer",
    time: "5 minutes ago",
    avatarText: "K",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    type: 'purchase',
    name: "Priya G.",
    location: "Delhi",
    action: "got Sheetly + bonuses",
    time: "8 minutes ago",
    avatarText: "P",
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    type: 'purchase',
    name: "Amit K.",
    location: "Pune",
    action: "purchased Sheetly",
    time: "12 minutes ago",
    avatarText: "A",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 5,
    type: 'purchase',
    name: "Sneha P.",
    location: "Ahmedabad",
    action: "joined 1000+ customers",
    time: "15 minutes ago",
    avatarText: "S",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 6,
    type: 'viewing',
    specialTitle: "23 people viewing this offer",
    specialSubtitle: "Special launch offer active",
    icon: <Eye className="w-5 h-5 text-orange-500" />
  },
  {
    id: 7,
    type: 'purchase',
    name: "Rohan V.",
    location: "Hyderabad",
    action: "got lifetime access",
    time: "18 minutes ago",
    avatarText: "R",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    id: 8,
    type: 'purchase',
    name: "Neha R.",
    location: "Chennai",
    action: "claimed Sheetly Bundle",
    time: "22 minutes ago",
    avatarText: "N",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: 9,
    type: 'stock',
    specialTitle: "Only 17 copies left at launch price",
    specialSubtitle: "Launch price ending soon",
    icon: <Zap className="w-5 h-5 text-yellow-500 fill-current" />
  },
  {
    id: 10,
    type: 'purchase',
    name: "Vikram S.",
    location: "Jaipur",
    action: "purchased with bonuses",
    time: "25 minutes ago",
    avatarText: "V",
    gradient: "from-teal-500 to-emerald-600"
  },
  {
    id: 11,
    type: 'purchase',
    name: "Simran K.",
    location: "Indore",
    action: "got Sheetly",
    time: "28 minutes ago",
    avatarText: "S",
    gradient: "from-red-500 to-orange-600"
  },
  {
    id: 12,
    type: 'milestone',
    specialTitle: "1000+ happy customers!",
    specialSubtitle: "Join the high-performance club",
    icon: <Users className="w-5 h-5 text-purple-500" />
  },
  {
    id: 13,
    type: 'purchase',
    name: "Aditya M.",
    location: "Chandigarh",
    action: "claimed launch deal",
    time: "32 minutes ago",
    avatarText: "A",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 14,
    type: 'purchase',
    name: "Pooja D.",
    location: "Lucknow",
    action: "purchased Sheetly",
    time: "35 minutes ago",
    avatarText: "P",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    id: 15,
    type: 'purchase',
    name: "Manish T.",
    location: "Surat",
    action: "got Sheetly Bundle",
    time: "38 minutes ago",
    avatarText: "M",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 16,
    type: 'purchase',
    name: "Kavya N.",
    location: "Kochi",
    action: "joined Sheetly",
    time: "42 minutes ago",
    avatarText: "K",
    gradient: "from-green-400 to-blue-500"
  },
  {
    id: 17,
    type: 'purchase',
    name: "Rahul J.",
    location: "Bhopal",
    action: "purchased Sheetly + bonuses",
    time: "45 minutes ago",
    avatarText: "R",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: 18,
    type: 'purchase',
    name: "Ananya G.",
    location: "Nagpur",
    action: "claimed lifetime access",
    time: "48 minutes ago",
    avatarText: "A",
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  }
];

export default function LiveSalesNotification() {
  const [currentNotification, setCurrentNotification] = useState<SalesNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const showNextNotification = useCallback(() => {
    if (isDismissed || isPaused) return;

    // Pick a random notification
    const nextIndex = Math.floor(Math.random() * NOTIFICATIONS.length);
    setCurrentNotification(NOTIFICATIONS[nextIndex]);
    setIsVisible(true);

    // Hide after 7 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => clearTimeout(hideTimer);
  }, [isDismissed, isPaused]);

  useEffect(() => {
    // Start after 3 seconds
    const initialTimer = setTimeout(() => {
      showNextNotification();
    }, 70000);

    return () => clearTimeout(initialTimer);
  }, [showNextNotification]);

  useEffect(() => {
    let loopTimer: NodeJS.Timeout;
    if (!isVisible && !isDismissed && !isPaused) {
      // Wait 10-15 seconds before next one
      const delay = Math.floor(Math.random() * 50000) + 10000;
      loopTimer = setTimeout(() => {
        showNextNotification();
      }, delay);
    }
    return () => clearTimeout(loopTimer);
  }, [isVisible, isDismissed, isPaused, showNextNotification]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Resume after 60 seconds of dismissal
    setTimeout(() => {
      setIsDismissed(false);
    }, 60000);
  };

  const handleClick = () => {
    const pricingSection = document.getElementById('bonuses');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 120,
            duration: 0.6 
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[360px] md:bottom-8 md:left-8 z-[10000] cursor-pointer group"
          onClick={handleClick}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] flex items-center gap-3 relative overflow-hidden">
            {/* Special Type Accent */}
            {currentNotification.type === 'viewing' && <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>}
            {currentNotification.type === 'stock' && <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>}
            {currentNotification.type === 'milestone' && <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>}

            {/* Avatar Section */}
            <div className={`shrink-0 w-12 h-12 rounded-full border-2 border-white shadow-inner flex items-center justify-center text-white font-bold text-lg overflow-hidden bg-gradient-to-br ${currentNotification.gradient || 'bg-gray-100 text-primary'}`}>
              {currentNotification.type === 'purchase' ? (
                currentNotification.avatarText
              ) : (
                <div className="flex items-center justify-center">
                  {currentNotification.icon}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-grow min-w-0">
              {currentNotification.type === 'purchase' ? (
                <>
                  <p className="text-sm font-bold text-[#1A1A1A] truncate">
                    {currentNotification.name} from {currentNotification.location}
                  </p>
                  <p className="text-[13px] text-[#6B7280]">
                    {currentNotification.action}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[11px] font-medium text-[#9CA3AF] flex items-center">
                      <span className="mr-1">⏰</span> {currentNotification.time}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600 flex items-center">
                      • <CheckCircle2 className="w-3 h-3 ml-1 mr-0.5 fill-current" /> Verified
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {currentNotification.specialTitle}
                  </p>
                  <p className="text-[13px] text-[#6B7280]">
                    {currentNotification.specialSubtitle}
                  </p>
                </>
              )}
            </div>

            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="shrink-0 p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
