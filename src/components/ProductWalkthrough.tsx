import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, LayoutDashboard, Users, CreditCard, ClipboardCheck, Calendar, Wallet, TrendingUp, Sparkles } from "lucide-react";
import { PAYMENT_URL, PRODUCT_PRICE } from "../constants";
import FeatureImageSlider, { normalizeFeatureImages } from "./FeatureImageSlider";

interface FeatureBlockData {
  id: string;
  tabNumber: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  /** @deprecated Use `images` — kept for backward compatibility */
  image?: string;
  isReversed?: boolean;
  gradientColors: string;
}

interface FeatureBlockProps extends FeatureBlockData {}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  id,
  tabNumber,
  badgeColor,
  icon,
  iconBg,
  title,
  description,
  bullets,
  images,
  isReversed,
  gradientColors
}) => {
  const slides = normalizeFeatureImages(images);
  return (
    <div
      id={id}
      className={`grid grid-cols-1 ${isReversed ? 'lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]' : 'lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]'} items-center gap-10 md:gap-14 lg:gap-16 xl:gap-20 py-6 md:py-10 lg:py-14 overflow-visible`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} relative min-w-0 w-full overflow-visible px-0 sm:px-4 lg:px-0 gpu`}
      >
        <div className="overflow-visible py-2 sm:py-6 md:animate-float">
          <div className="relative left-1/2 mx-auto w-[calc(100vw-1rem)] max-w-[640px] -translate-x-1/2 rounded-[24px] overflow-visible group shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:left-auto sm:w-full sm:max-w-full sm:translate-x-0 lg:shadow-[0_28px_80px_rgba(15,23,42,0.16)]">
            {/* Animated Gradient Border - Optimized */}
            <div className="relative rounded-[24px] overflow-hidden p-[3px] md:p-[4px]">
              <div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-gradient-rotate gpu hidden md:block"
                style={{ background: `conic-gradient(${gradientColors})` }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-r md:hidden"
                style={{ background: `linear-gradient(to right, ${gradientColors.split(',').slice(0, 3).join(',')})` }}
              ></div>

              <div className="relative bg-white rounded-[20px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] xl:aspect-[16/9]">
                <FeatureImageSlider images={slides} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${isReversed ? 'lg:order-2' : 'lg:order-1'} w-full min-w-0 text-center lg:text-left flex flex-col items-center lg:items-start px-4 sm:px-0`}
      >
        <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] ${badgeColor} mb-4 sm:mb-6`}>
          {tabNumber}
        </span>

        <div className={`w-12 h-12 md:w-16 md:h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm`}>
          <div className="scale-75 sm:scale-100">
            {icon}
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-primary mb-4 md:mb-6 leading-tight tracking-[-0.03em]">
          {title}
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
          {description}
        </p>

        <ul className="space-y-3 text-left w-full sm:w-auto">
          {bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="flex items-start gap-3 text-gray-700 font-normal text-sm sm:text-base"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

interface SmallCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  index: number;
}

const SmallCard: React.FC<SmallCardProps> = ({ icon, title, description, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`${color} p-6 rounded-2xl border border-white/50 shadow-sm transition-all duration-300`}
  >
    <div className="text-2xl mb-4">{icon}</div>
    <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display tracking-[-0.02em]">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed font-normal">{description}</p>
  </motion.div>
);

export default function ProductWalkthrough() {
  const RAINBOW_GRADIENT = "#8B5CF6, #EC4899, #F97316, #FACC15, #10B981, #3B82F6, #8B5CF6";

  const featureBlocks: FeatureBlockData[] = [
    {
      id: "dashboard",
      tabNumber: "TAB 01",
      badgeColor: "bg-purple-100 text-purple-700",
      icon: <LayoutDashboard className="w-8 h-8 text-purple-600" />,
      iconBg: "bg-purple-50",
      title: "Smart Business Dashboard",
      description: "The Dashboard is your command center. The moment you open Sheetly, you see everything that matters — today's tasks, pending invoices, recent client activity, and your financial summary — all automatically pulled from every other tab. No manual updates needed.",
      bullets: ["See exactly what needs your attention right now, including upcoming deadlines and overdue invoices.", "Plan ahead without opening a single other tab.", "Instantly view selected client's details, last communication, and invoice status.", "Filter invoices by status:— Fully Paid, Unpaid, Part-Paid — and see payment overview for any date range.", "Hyperlinks to every tab directly from Dashboard:— Client Management, Communication Log, Task Tracker, Invoices, Calendar, Income Entry, Expense Entry, Monthly View, 12-Month View, Custom View, Reconciliation, Budget, Balance."],
      images: [
        "/Images/dashboard-insight.webp",
        "/Images/business-dashboard.webp",
      ],
      gradientColors: RAINBOW_GRADIENT
    },
    {
      id: "crm",
      tabNumber: "TAB 02",
      badgeColor: "bg-pink-100 text-pink-700",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      iconBg: "bg-pink-50",
      title: "Complete Client Management (CRM)",
      description: "A full-featured CRM system built inside your spreadsheet. Store unlimited client profiles with contact details, business information, relationship history, contract dates, payment preferences, and personal notes.",
      bullets: ["Unlimited Client Profiles:— No limit on number of clients.", "Client/Company Name:— Primary identifier linked across all tabs.", "Business Type:— Select from 20+ categories", "Complete Contact Information:— Email, phone number(s), full address.", "Client Status:— Active, Inactive, Completed, Lost, On Hold, Follow-up, Pending, Referral, Prospect, VIP.", "Priority Level:— Know which clients need most attention.", "Payment Method Preference:— UPI, Cash, Bank Transfer, etc. per client", "Last Update Tracking:— Automatically shows when record was last modified.", "Contract Dates:— Start date, end date, contract start, contract end.", "Notes / Preferences / Special Requests:— Free text field for anything important — dietary preferences, communication style, specific requirements", "Client Highlighter:— Search any client instantly and highlight their row", "Filter & Sort:— Filter by status, priority, type, or any column", "Dashboard Integration:— Selected client's details appear on Dashboard automatically"],
      images: [
        "/Images/client-managnment.webp",
        "/Images/client.webp",
      ],
      isReversed: true,
      gradientColors: "#EC4899, #F97316, #EC4899"
    },
    {
      id: "invoicing",
      tabNumber: "TAB 03",
      badgeColor: "bg-orange-100 text-orange-700",
      icon: <CreditCard className="w-8 h-8 text-orange-600" />,
      iconBg: "bg-orange-50",
      title: "Professional Invoicing System",
      description: "A complete invoicing system that lets you create, manage, and track all your invoices in one place. Know exactly who has paid, who hasn't, and how much is still due — at any moment. Never miss a payment again.",
      bullets: ["Transform your invoicing process with your customizable invoice numbers, designed to be auto-sequential for added efficiency!", "Implement a dropdown menu for selecting client names that is seamlessly integrated with the client database.", "Automatic Status Updates effortlessly manage your payment statuses, Fully Paid, Unpaid, Part-Paid, Over-Paid, or Cancelled—ensuring that each status is updated automatically based on the payments you enter.", "Invoice types include Standard Invoice, Offer/Quote, Draft, and Recurring. Each option is designed to meet your unique billing needs efficiently","Experience the convenience of the Selected Client View, where you can effortlessly access all invoices for a single client directly on the Dashboard."],
      images: [
        "/Images/invoice-tracker.webp",
        "/Images/invoice-dashboard.webp",
        "/Images/invoice.webp",
    
      ],
      gradientColors: "#F97316, #FACC15, #F97316"
    },
    {
      id: "tasks",
      tabNumber: "TAB 04",
      badgeColor: "bg-yellow-100 text-yellow-700",
      icon: <ClipboardCheck className="w-8 h-8 text-yellow-600" />,
      iconBg: "bg-yellow-50",
      title: "Powerful Task & Project Tracker",
      description: "A powerful task management system that keeps your entire workload organized. Assign tasks, set priorities, track progress, and ensure nothing falls through the cracks — for you and your team.",
      bullets: ["Task/Project Name:— Clear description of what needs to be done","Client/Company Link:— Connect every task to the relevant client", "Start Date & Due Date:— Full timeline visibility.", "Team Assignment:— Assign to any of your 20 team members.", "Today's Task Counter:— Dashboard shows how many tasks are due today.", "Auto-Sync with Calendar:— Due date added? Task appears on Calendar automatically",  "Once you tick the Completion Checkbox, the task vanishes from your Calendar, but don’t worry—the history remains intact for your reference.", "Connect each task seamlessly to the relevant client, ensuring that every effort is aligned and meaningful. Let's foster strong relationships with you and your client to enhance collaboration."],
      images: [

        "/Images/task-manage.webp",  
        "/Images/task-dashboard.webp",
      ],
      isReversed: true,
      gradientColors: "#FACC15, #10B981, #FACC15"
    },
    {
      id: "calendar",
      tabNumber: "TAB 05",
      badgeColor: "bg-green-100 text-green-700",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      iconBg: "bg-green-50",
      title: "Visual Smart Calendar",
      description: "A full monthly calendar that automatically populates with your tasks, invoices, client follow-ups, and custom appointments. No manual entry into the calendar — it all syncs automatically.",
      bullets: ["Auto-Populated Events:— Tasks, invoices, and communications appear automatically based on due dates.","Custom Entries Section:— Manually add personal appointments, meetings, and training sessions.", "Today's Date Highlighted:— Always know where you are.", " Month's Events Counter:— Total events for selected month at a glance.", "Month & Year Selection:— Navigate to any month instantly.", "Today's Date Highlighted:— Always know where you are.", "Tasks + Communications + Invoices:— All three types visible in one calendar.", "Filter by Status:— Hide completed or cancelled tasks from calendar view.", "Right Side Panel — Full month's task list with due dates for quick scanning."],
      images: [
        "/Images/calender-insight.webp",
        "/Images/calender-deadline.webp",
      ],
      gradientColors: "#10B981, #3B82F6, #10B981"
    },
    {
      id: "bookkeeping",
      tabNumber: "TAB 06",
      badgeColor: "bg-blue-100 text-blue-700",
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      iconBg: "bg-blue-50",
      title: "Income & Expense",
      description: "Manage your finances with precision. Track every income, every expense, and every transaction with confidence. Streamline GST calculations and conduct thorough spending analysis. Conquer tax season effortlessly—it’s time to take charge and eliminate any financial uncertainty!",
      bullets: ["Invoice Number:— Link income entry directly to invoice", "Income Category:— From your custom categories set in Setup", "Tax Percentage:— Default 10% or custom per entry", "Net Amount & Tax Amount:— Auto-calculated", "Payment Method:— UPI, Cash, Bank Transfer, Debit Card, PayPal, etc.", "Notes/Details:— Additional information", "Expense ID:— Auto-generated for reference", "Expense Category:— From 40+ custom categories in Setup tab", "Net Amount & Tax Amount:— Auto-calculated", "Payment Method:— Full Indian and International payment method support", "Notes/Details:— Vendor name, purpose, receipt reference", "Direct & Operating Cost Classification:— Know exactly which expenses are business-critical"],
      images: [
        "/Images/bookkeeping.webp",
        "/Images/income.webp",
      ],
      isReversed: true,
      gradientColors: "#3B82F6, #8B5CF6, #3B82F6"
    },
    {
      id: "analytics",
      tabNumber: "TAB 07",
      badgeColor: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700",
      icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
      iconBg: "bg-pink-50",
      title: "Monthly Financial View",
      description: "Select any month and see your complete financial performance — income breakdown by category, expense breakdown by category, profit vs goal, and visual charts. All automatically populated from your Income and Expense entries.",
      bullets: ["Month Selector:— Choose any month instantly", "Amount Type:— Toggle between Total or Net amounts", "Month's Profit:— Clear profit figure.", "Month's Profit Goal:— Compare actual vs target","Payment Method Income Allocation:— How clients paid you.", "Monthly Income vs Expenses Bar Chart — Visual comparison.", "Actual vs Goal Chart — Are you hitting your targets?", "Income Categories Breakdown:— Which services earned most.", "Direct links:— Jump to Income Entry or Expense Entry instantly", "Expense Categories Breakdown:— Where money went."],
      images: [
        "/Images/relationship.webp",
        "/Images/finance.webp",
        "/Images/master-finance.webp",
        "/Images/all-service.webp",
      ],
      gradientColors: RAINBOW_GRADIENT
    }
  ];

  const additionalTabs = [
    { icon: "📋", title: "Communication Log", description: "Track every client interaction", color: "bg-purple-50" },
    { icon: "⚙️", title: "Setup Page", description: "Customize for your business needs", color: "bg-blue-50" },
    { icon: "💼", title: "Budget Planner", description: "Set goals and track progress", color: "bg-pink-50" },
    { icon: "⚖️", title: "Balance Sheet", description: "Financial health at a glance", color: "bg-green-50" },
    { icon: "🧾", title: "Print Invoices", description: "Professional PDF generation", color: "bg-orange-50" },
    { icon: "🔄", title: "Reconciliation", description: "Match transactions effortlessly", color: "bg-yellow-50" },
    { icon: "📚", title: "Instructions Tab", description: "Detailed usage guide included", color: "bg-cyan-50" },
    { icon: "📆", title: "12-Month View", description: "Yearly trend analysis", color: "bg-indigo-50" },
    { icon: "🎨", title: "Custom Period", description: "Analyze any timeframe", color: "bg-rose-50" },
  ];

  return (
    <section id="walkthrough" className="py-16 md:py-28 lg:py-32 relative overflow-visible bg-white">
      {/* Background Orbs */}
      <div className="decorative-layer" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-100/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 hidden md:block gpu"></div>
        <div className="absolute bottom-1/4 -left-20 w-48 h-48 md:w-80 md:h-80 bg-pink-100/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 hidden md:block gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 relative z-10 overflow-visible">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.1em] text-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-6 uppercase"
          >
            🎯 INSIDE THE PRODUCT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-4 md:mb-6 tracking-[-0.03em]"
          >
            Take a Tour of <span className="rainbow-text">What's Inside</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed font-normal"
          >
            18 powerful tabs working together. Each feature meticulously designed to save you hours every week. Here's what you get:
          </motion.p>
        </div>

        {/* Feature Blocks */}
        <div className="space-y-10 md:space-y-14 lg:space-y-16 overflow-visible">
          {featureBlocks.map((block) => (
            <FeatureBlock
              key={block.id}
              id={block.id}
              tabNumber={block.tabNumber}
              badgeColor={block.badgeColor}
              icon={block.icon}
              iconBg={block.iconBg}
              title={block.title}
              description={block.description}
              bullets={block.bullets}
              images={normalizeFeatureImages(block.images, block.image)}
              isReversed={block.isReversed}
              gradientColors={block.gradientColors}
            />
          ))}
        </div>

        {/* Additional Tabs Section */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">AND THERE'S MORE...</p>
            <h3 className="text-2xl md:text-4xl font-semibold text-primary font-display tracking-[-0.02em]">9 More Powerful Tabs Included</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {additionalTabs.map((tab, i) => (
              <SmallCard
                key={i}
                icon={tab.icon}
                title={tab.title}
                description={tab.description}
                color={tab.color}
                index={i}
              />
            ))}
          </div>
        </div>


        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-6 sm:p-10 md:p-16 rounded-[32px] bg-gradient-to-br from-white via-[#F5F3FF] to-[#FFF7ED] border-2 border-purple-50 text-center relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>

          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6 font-display tracking-[-0.03em]">
            All This For Just <span className="rainbow-text font-extrabold">{PRODUCT_PRICE}</span>
          </h3>

          <p className="text-base md:text-xl text-secondary mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            16 tabs. 31+ features. Lifetime access. Free updates forever. Stop renting software, start owning your business infrastructure.
          </p>

          <motion.a
            href={PAYMENT_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-lg md:text-2xl font-bold rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 tracking-tight"
          >
            <span className="md:hidden">Get Access — {PRODUCT_PRICE}</span>
            <span className="hidden md:inline">Get Instant Access Now — {PRODUCT_PRICE}</span>
            <ArrowRight className="ml-3 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>

          <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 text-[11px] sm:text-sm font-medium text-secondary">
            <span className="flex items-center"><CreditCard className="w-5 h-5 mr-2 text-blue-500" /> Razorpay Secure</span>
            <span className="flex items-center"><Sparkles className="w-5 h-5 mr-2 text-orange-500" /> Instant Email Delivery</span>
            <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-500" /> 7-Day Money Back</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
