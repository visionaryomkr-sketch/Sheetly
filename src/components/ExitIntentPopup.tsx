import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, X } from "lucide-react";
import { PAYMENT_URL } from "../constants";

const SESSION_KEY = "exitPopupShown";
const COUPON_CODE = "SAVE20";
const REGULAR_PRICE = "₹899";
const DISCOUNTED_PRICE = "₹719";
const SAVINGS_AMOUNT = "₹180";
const INITIAL_TIME = 5 * 60;
const MIN_TIME_BEFORE_SHOW = 10 * 1000;
const MOBILE_TIME_BEFORE_SHOW = 30 * 1000;
const ENGAGED_SCROLL_RATIO = 0.3;

function getCouponUrl() {
  try {
    const url = new URL(PAYMENT_URL);
    url.searchParams.set("coupon", COUPON_CODE);
    return url.toString();
  } catch {
    const separator = PAYMENT_URL.includes("?") ? "&" : "?";
    return `${PAYMENT_URL}${separator}coupon=${COUPON_CODE}`;
  }
}

function readSessionFlag() {
  try {
    return (
      sessionStorage.getItem(SESSION_KEY) === "true" ||
      sessionStorage.getItem("sheetlyPurchased") === "true" ||
      localStorage.getItem("sheetlyPurchased") === "true"
    );
  } catch {
    return false;
  }
}

function writeSessionFlag() {
  try {
    sessionStorage.setItem(SESSION_KEY, "true");
  } catch {
    // Session storage may be unavailable in strict privacy modes.
  }
}

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(readSessionFlag);
  const [isEligible, setIsEligible] = useState(false);
  const [hasEngaged, setHasEngaged] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(Date.now());
  const mobileReadyRef = useRef(false);
  const couponUrl = useMemo(getCouponUrl, []);

  const showPopup = useCallback(() => {
    if (hasShown || isOpen || !isEligible || !hasEngaged) return;
    setIsOpen(true);
    setHasShown(true);
    writeSessionFlag();
  }, [hasShown, isEligible, hasEngaged, isOpen]);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const eligibilityTimer = window.setTimeout(() => setIsEligible(true), MIN_TIME_BEFORE_SHOW);
    const mobileTimer = window.setTimeout(() => {
      mobileReadyRef.current = true;
    }, MOBILE_TIME_BEFORE_SHOW);

    return () => {
      window.clearTimeout(eligibilityTimer);
      window.clearTimeout(mobileTimer);
    };
  }, []);

  useEffect(() => {
    if (hasShown || isOpen) return;

    const updateEngagement = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      if (scrollRatio >= ENGAGED_SCROLL_RATIO) {
        setHasEngaged(true);
      }
    };

    updateEngagement();
    window.addEventListener("scroll", updateEngagement, { passive: true });
    return () => window.removeEventListener("scroll", updateEngagement);
  }, [hasShown, isOpen]);

  useEffect(() => {
    if (hasShown || isOpen) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        showPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown, isOpen, showPopup]);

  useEffect(() => {
    if (hasShown || isOpen) return;

    const handleScroll = () => {
      const now = Date.now();
      const currentY = window.scrollY;
      const previousY = lastScrollYRef.current;
      const previousTime = lastScrollTimeRef.current;
      const distance = previousY - currentY;
      const elapsed = Math.max(now - previousTime, 1);
      const speed = distance / elapsed;
      const nearTop = currentY < 120;

      lastScrollYRef.current = currentY;
      lastScrollTimeRef.current = now;

      if (mobileReadyRef.current && nearTop && distance > 180 && speed > 1.1) {
        showPopup();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown, isOpen, showPopup]);

  useEffect(() => {
    if (hasShown || isOpen) return;

    const state = { sheetlyExitIntentGuard: true };
    window.history.pushState(state, "", window.location.href);

    const handlePopState = () => {
      if (mobileReadyRef.current) {
        showPopup();
        window.history.pushState(state, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [hasShown, isOpen, showPopup]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;

      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopup, isOpen]);

  useEffect(() => {
    if (!isOpen || timeRemaining <= 0) return;

    const timer = window.setInterval(() => {
      setTimeRemaining((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isOpen, timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");
  const isExpired = timeRemaining <= 0;

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
    } catch {
      // Clipboard permissions can vary; the visible feedback still guides users to the code.
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99998] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
            aria-describedby="exit-popup-description"
            className="relative z-[99999] max-h-[92vh] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white p-[2px] text-center shadow-[0_30px_120px_rgba(236,72,153,0.35)]"
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div
              className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] animate-gradient-rotate"
              style={{
                background:
                  "conic-gradient(#8B5CF6, #EC4899, #F97316, #FACC15, #10B981, #3B82F6, #8B5CF6)",
              }}
            />

            <div className="relative z-10 max-h-[calc(92vh-4px)] overflow-y-auto rounded-[22px] bg-white p-6 sm:p-10">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePopup}
                className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 hover:scale-105 hover:bg-gray-200 hover:text-gray-900"
                aria-label="Close discount offer"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.div
                className="mb-4 text-5xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
              >
                🚨
              </motion.div>

              <motion.h2
                id="exit-popup-title"
                className="mx-auto max-w-sm font-display text-[26px] font-bold leading-tight tracking-[-0.03em] text-primary sm:text-[32px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                WAIT! Don't Leave Empty Handed!
              </motion.h2>

              <motion.p
                id="exit-popup-description"
                className="mt-3 text-base leading-relaxed text-secondary sm:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                We've got a special exit offer just for you 👇
              </motion.p>

              <motion.div
                className="my-6 rounded-[20px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-6 text-white shadow-[0_20px_55px_rgba(236,72,153,0.35)] sm:p-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
              >
                <motion.div
                  className="font-display text-5xl font-extrabold tracking-[-0.02em] drop-shadow-sm sm:text-6xl"
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  20% OFF
                </motion.div>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.05em] text-white/95 sm:text-base">
                  Use This Code at Checkout
                </p>

                <motion.button
                  type="button"
                  onClick={copyCoupon}
                  className="mx-auto mt-4 inline-flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white bg-white px-6 py-4 font-display text-2xl font-bold tracking-[0.1em] text-primary shadow-lg transition-all duration-200 hover:scale-105 sm:text-3xl"
                  aria-label="Copy coupon code SAVE20"
                  animate={copied ? { scale: [1, 1.08, 1] } : { scale: [1, 1.02, 1] }}
                  transition={{ duration: copied ? 0.35 : 2.2, repeat: copied ? 0 : Infinity }}
                >
                  {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5 text-gray-500" />}
                  {COUPON_CODE}
                </motion.button>
                <p className="mt-3 text-xs italic text-white/85">
                  {copied ? "Copied!" : "👆 Tap to copy"}
                </p>
              </motion.div>

              <motion.div
                className="my-6 rounded-2xl bg-gray-50 p-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-lg text-gray-400 line-through sm:text-xl">Regular Price: {REGULAR_PRICE}</p>
                <motion.p
                  className="mt-2 bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text font-display text-4xl font-extrabold tracking-[-0.03em] text-transparent sm:text-[44px]"
                  animate={{ scale: [1, 1.025, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Your Price: {DISCOUNTED_PRICE}
                </motion.p>
                <span className="mt-3 inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white sm:text-base">
                  💰 You Save {SAVINGS_AMOUNT}
                </span>
              </motion.div>

              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                aria-live="polite"
              >
                <p className="mb-3 text-sm font-bold text-red-600 sm:text-base">
                  ⏰ This offer expires in:
                </p>

                {isExpired ? (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-lg font-bold text-red-600">
                    Offer Expired!
                  </p>
                ) : (
                  <div className="flex items-start justify-center gap-3">
                    <div>
                      <div className="min-w-[70px] rounded-xl bg-gray-800 px-4 py-3 font-mono text-4xl font-bold text-white sm:text-[44px]">
                        {minutes}
                      </div>
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Minutes</p>
                    </div>
                    <motion.div
                      className="pt-2 font-mono text-4xl font-bold text-red-600 sm:text-[44px]"
                      animate={{ opacity: [1, 0.25, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      :
                    </motion.div>
                    <div>
                      <div className="min-w-[70px] rounded-xl bg-gray-800 px-4 py-3 font-mono text-4xl font-bold text-white sm:text-[44px]">
                        {seconds}
                      </div>
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">Seconds</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.a
                href={couponUrl}
                aria-disabled={isExpired}
                onClick={(event) => {
                  if (isExpired) event.preventDefault();
                }}
                className={`flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(168,85,247,0.35)] transition-all duration-300 sm:px-8 sm:py-[18px] sm:text-xl ${
                  isExpired ? "pointer-events-none cursor-not-allowed opacity-50" : "hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(236,72,153,0.45)]"
                }`}
                animate={isExpired ? undefined : { scale: [1, 1.015, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                🎯 CLAIM 20% OFF — {DISCOUNTED_PRICE}
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.64 }}
              >
                <p className="mt-4 text-xs font-medium leading-relaxed text-secondary sm:text-sm">
                  ✅ Instant Access  •  ✅ Secure Payment  •  ✅ 7-Day Refund
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-4 min-h-11 text-sm italic text-gray-400 underline-offset-4 transition-colors hover:text-gray-600 hover:underline"
                >
                  No thanks, I'll pay full price later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
