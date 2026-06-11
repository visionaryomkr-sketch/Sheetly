import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "motion/react";
import { Star, CheckCircle2, User, Quote, Play } from "lucide-react";
import { PAYMENT_URL } from "../constants";
import ZoomableImage from "./ZoomableImage";

const Counter = ({ value, label, prefix = "", suffix = "", decimals = 0 }: { value: number, label: string, prefix?: string, suffix?: string, decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latestValue) => setDisplayValue(latestValue),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div className="text-center">
      <h5 className="text-3xl md:text-5xl font-bold font-display rainbow-text mb-2 tracking-[-0.04em]">
        {prefix}{displayValue.toFixed(decimals)}{suffix}
      </h5>
      <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.1em] font-sans">{label}</p>
    </div>
  );
};

interface Testimonial {
  name: string;
  title: string;
  initials: string;
  quote: string;
  gradient: string;
  tint: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aryan Mehta",
    title: "Freelance Designer, Bangalore",
    initials: "AM",
    quote: "I was using Notion for tasks, a random Excel for invoices, and WhatsApp to track payments. It was a mess. Downloaded Sheetly, set it up in 15 minutes, and now everything — clients, invoices, tasks, finances — is in one place. My CA was actually impressed when I showed him my income and expense entries during tax season. Best ₹1,299 I've spent this year.",
    gradient: "from-purple-500 to-pink-500",
    tint: "hover:bg-purple-50/50"
  },
  {
    name: "Priya Sharma",
    title: "Founder (Digital Growth Agency), Mumbai",
    initials: "PS",
    quote: "Running a 6-person agency, I always struggled with task delegation and invoice tracking. I tried ClickUp, Trello, Zoho — but switching between tools was killing productivity. Sheetly solved everything in one sheet. I can see which team member is working on what, which client has pending payments, and what's due this week — all from the Dashboard. Highly recommend for agency owners.",
    gradient: "from-pink-500 to-orange-500",
    tint: "hover:bg-pink-50/50"
  },
  {
    name: "Sneha Kapoor",
    title: "Wedding Photographer, Delhi",
    initials: "SK",
    quote: "Wedding season mein 12-15 bookings manage karna bahut mushkil tha. Kaunsa client advance diya, kaunsa final payment pending hai, kaunse shoots is month hain — sab WhatsApp pe tha. Ab Sheetly mein sab hai. Calendar mein sab shoots automatically aate hain, invoice tracker mein payment status clear hai. Ek baar client ne paise diye aur maine Communication Log mein note kiya — no confusion ever. Genuinely life-changing for photographers.",
    gradient: "from-orange-500 to-yellow-500",
    tint: "hover:bg-orange-50/50"
  },
  {
    name: "Karan Singh",
    title: "Freelance Designer, Pune",
    initials: "KS",
    quote: "Honestly ₹1,299 mein itna premium product expect nahi tha. International products $50+ ke same level pe hai ye. Shocked!",
    gradient: "from-yellow-500 to-green-500",
    tint: "hover:bg-yellow-50/50"
  },
  {
    name: "Kritika Joshi",
    title: "Content Creator, Hyderabad",
    initials: "KJ",
    quote: "Brand deals, sponsored posts, UGC contracts — I had invoices scattered everywhere and no idea which brand had paid and which hadn't. Sheetly's invoice tracker with Fully Paid, Part-Paid, and Unpaid status is exactly what I needed. The UPI tracking in Balance Sheet is chef's kiss — I finally know how much actually came into my account vs what's pending. Worth every rupee.",
    gradient: "from-green-500 to-blue-500",
    tint: "hover:bg-green-50/50"
  },
  {
    name: "Ananya Gupta",
    title: "Interior Designer, Ahmedabad",
    initials: "AG",
    quote: "Interior design projects have long timelines — 3 to 6 months. Tracking client approvals, contractor payments, project milestones, and invoices was always chaotic. Sheetly's Task Tracker with client linking and the Communication Log for noting every client conversation has made my work so much cleaner. My clients think I've hired a project manager. I haven't — it's just Sheetly.",
    gradient: "from-blue-500 to-purple-500",
    tint: "hover:bg-blue-50/50"
  },
  {
    name: "Vikram Singh",
    title: "Full-Stack Developer, Chennai",
    initials: "VS",
    quote: "Bhai seedha bolunga — I was skeptical. ₹1,299 ke liye kya milega seriously. But I tried it and was genuinely shocked. The Dashboard alone is worth the price. Every morning I open it and I know — today's tasks, pending invoices, upcoming deadlines. No more opening 4 different apps. The fact that it works on Google Sheets means I can check it on my phone from anywhere. 10/10 recommend.",
    gradient: "from-purple-500 to-indigo-500",
    tint: "hover:bg-indigo-50/50"
  },
  {
    name: "Nisha Bhatia",
    title: "Independent HR Consultant, Gurgaon",
    initials: "NB",
    quote: "As an HR consultant working with multiple companies simultaneously, client confidentiality and organized records are everything. Sheetly's Client Management tab with notes and preferences, and the Communication Log with detailed conversation history, has made me significantly more professional. I now walk into every client meeting having reviewed exactly what we discussed last time. My client retention has improved noticeably since I started using Sheetly.",
    gradient: "from-indigo-500 to-rose-500",
    tint: "hover:bg-rose-50/50"
  },
  {
    name: "Simran Sharma",
    title: "Graphic Designer, Indore",
    initials: "SS",
    quote: "Indian businesses ke liye banaya gaya hai - GST, INR, Indian invoice format. International tools mein ye sab nahi milta. Loved it!",
    gradient: "from-rose-500 to-teal-500",
    tint: "hover:bg-teal-50/50"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`bg-white h-auto self-start p-6 md:p-8 rounded-[20px] border border-gray-100 shadow-sm transition-all duration-300 ${testimonial.tint} group`}
  >
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-current" />)}
    </div>
    <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 italic text-xs sm:text-base font-normal tracking-normal">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3 md:gap-4 border-t border-gray-50 pt-4 md:pt-6">
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
        {testimonial.initials}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 leading-none mb-1 font-display tracking-[-0.02em] text-base md:text-lg">{testimonial.name}</h4>
        <p className="text-[9px] md:text-[10px] text-gray-400 uppercase font-medium tracking-[0.1em] font-sans">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-32 relative overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="decorative-layer" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-100/30 rounded-full mix-blend-multiply filter blur-[120px] hidden md:block"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-pink-100/30 rounded-full mix-blend-multiply filter blur-[120px] hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-orange-700 bg-gradient-to-r from-yellow-100 to-orange-100 mb-6 shadow-sm border border-orange-200 uppercase"
          >
            ⭐ LOVED BY 1,000+ BUSINESSES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 md:mb-8 leading-tight tracking-[-0.03em]"
          >
            Real Stories from <span className="rainbow-text">Real Customers</span>
          </motion.h2>

          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex text-yellow-400 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-current" />)}
            </div>
            <p className="text-lg md:text-xl font-bold text-gray-800 font-display tracking-[-0.03em]">4.9 out of 5 stars</p>
            <p className="text-xs md:text-sm text-gray-400 font-normal tracking-normal">Based on 993+ verified reviews</p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Join freelancers, agencies, and entrepreneurs who transformed their business with Sheetly.
          </motion.p>
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 md:mb-24 relative"
        >
          <div className="relative p-[1px] md:p-[2px] rounded-[24px] md:rounded-[32px] overflow-hidden group shadow-2xl">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-gradient-rotate bg-[conic-gradient(#8B5CF6,#EC4899,#F97316,#FACC15,#10B981,#3B82F6,#8B5CF6)] opacity-30 md:opacity-50"></div>
            <div className="relative bg-white rounded-[23px] md:rounded-[30px] p-6 sm:p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="shrink-0 flex justify-center">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-6xl font-black border-4 md:border-8 border-white shadow-2xl relative overflow-hidden">
                  RS
                </div>
              </div>
              <div className="w-full text-center md:text-left relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-purple-200/50 -z-10 hidden md:block" />
                <p className="text-base sm:text-lg md:text-2xl italic font-normal text-gray-800 leading-relaxed mb-6 md:mb-8 tracking-normal">
                  "I coach 20+ clients every month — 1-on-1 sessions, group programs, and workshops. Tracking each client's session history, payment status, and follow-ups was a nightmare. Sheetly's Client Management and Communication Log solved this completely. I can see exactly where each client is in their journey, what we discussed last session, and what they owe me. The invoice generator saves me at least 2 hours every week."
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border-t border-gray-100 pt-6">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 font-display tracking-[-0.03em]">Rahul Verma</h4>
                    <p className="text-sm md:text-base text-gray-500 font-normal tracking-normal">Business & Life Coach, Pune</p>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                    <div className="flex text-yellow-400 mb-2 gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-current" />)}
                    </div>
                    <span className="text-[10px] md:text-sm font-bold text-emerald-600 flex items-center bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 tracking-normal">
                      <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 mr-1.5" /> Verified Purchase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24 items-start">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        {/* <div className="mt-24 text-center">
           <h3 className="text-2xl md:text-3xl font-bold text-primary mb-10 flex items-center justify-center gap-3 font-display tracking-[-0.03em]">
             <span className="text-3xl">🎥</span> Watch Real Customer Videos
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3].map((v) => (
               <motion.div 
                 key={v}
                 whileHover={{ scale: 1.05 }}
                 className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden group border-2 border-transparent hover:border-purple-500 transition-all cursor-pointer shadow-lg"
               >
                 <ZoomableImage
                   src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
                   alt={`Customer video testimonial ${v}`}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                   wrapperClassName="absolute inset-0"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                     <Play className="w-8 h-8 fill-current ml-1" />
                   </div>
                 </div>
                 <div className="absolute bottom-4 left-4 text-white font-bold text-shadow">
                   Watch Story →
                 </div>
               </motion.div>
             ))}
           </div>
        </div> */}

        {/* Trust Metrics */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-6 md:p-12 rounded-[24px] md:rounded-[32px] bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-2 border-white/50 relative group overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 relative z-10">
            <div className="text-center">
              <div className="bg-white/50 p-2 rounded-xl inline-block mb-3">
                <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-purple-600" />
              </div>
              <Counter value={1000} label="Customers" suffix="+" />
            </div>
            <div className="text-center">
              <div className="bg-white/50 p-2 rounded-xl inline-block mb-3">
                <Star className="w-6 md:w-8 h-6 md:h-8 text-yellow-500" />
              </div>
              <Counter value={4.9} label="Avg Rating" suffix="⭐" decimals={1} />
            </div>
            <div className="text-center">
              <div className="bg-white/50 p-2 rounded-xl inline-block mb-3">
                <Quote className="w-6 md:w-8 h-6 md:h-8 text-pink-600" />
              </div>
              <Counter value={1.5} label="Saved by Users" prefix="₹" suffix="Th+" decimals={1} />
            </div>
            <div className="text-center">
              <div className="bg-white/50 p-2 rounded-xl inline-block mb-3">
                <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
              </div>
              <Counter value={98} label="Recommend" suffix="%" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
