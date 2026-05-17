/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, type MouseEvent } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProductWalkthrough from "./components/ProductWalkthrough";
import PersonaSection from "./components/PersonaSection";
import ComparisonSection from "./components/ComparisonSection";
import SaaSComparison from "./components/SaaSComparison";
import BonusStack from "./components/BonusStack";
import TestimonialsSection from "./components/TestimonialsSection";
import GuaranteeSection from "./components/GuaranteeSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import LiveSalesNotification from "./components/LiveSalesNotification";
import ExitIntentPopup from "./components/ExitIntentPopup";
import Footer from "./components/Footer";
import { PAYMENT_URL } from "./constants";
import { trackInitiateCheckout, trackLead, trackPurchase, trackViewContent } from "./lib/metaPixel";

let hasTrackedViewContent = false;
let hasTrackedLead = false;
let hasTrackedPurchase = false;

export default function App() {
  useEffect(() => {
    const isThankYouPage = window.location.pathname.replace(/\/$/, "") === "/thank-you";

    if (isThankYouPage) {
      if (!hasTrackedPurchase) {
        hasTrackedPurchase = true;
        trackPurchase();
      }
      return;
    }

    if (!hasTrackedViewContent) {
      hasTrackedViewContent = true;
      trackViewContent();
    }

    const handleScroll = () => {
      if (hasTrackedLead) return;

      const { scrollHeight } = document.documentElement;
      const scrolledPastHalf = window.scrollY + window.innerHeight >= scrollHeight * 0.5;

      if (scrolledPastHalf) {
        hasTrackedLead = true;
        trackLead();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest("a[href]");

    if (!(link instanceof HTMLAnchorElement)) return;

    const paymentUrl = new URL(PAYMENT_URL, window.location.href);
    const clickedUrl = new URL(link.href, window.location.href);
    const isPaymentLink =
      clickedUrl.origin === paymentUrl.origin &&
      clickedUrl.pathname === paymentUrl.pathname;

    if (isPaymentLink) {
      trackInitiateCheckout();
    }
  };

  return (
    <div
      onClickCapture={handleClickCapture}
      className="min-h-screen w-full max-w-full bg-white text-[#1A1A1A] font-sans relative overflow-x-clip selection:bg-purple-100 selection:text-purple-900"
    >
      {/* Background Decoration — clipped so blur never widens the page */}
      <div className="decorative-layer fixed" aria-hidden="true">
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-40 gpu"></div>
        <div className="absolute bottom-[-25px] left-[-25px] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-40 gpu"></div>
      </div>

      <Navbar />
      <main className="relative w-full max-w-full overflow-x-clip">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <div id="features" className="scroll-mt-20" aria-hidden="true"></div>
        <ProductWalkthrough />
        <PersonaSection />
        <ComparisonSection />
        <div id="pricing" className="scroll-mt-20" aria-hidden="true"></div>
        <SaaSComparison />
        <BonusStack />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <LiveSalesNotification />
      <ExitIntentPopup />
      <Footer />

      {/* Bottom Grid/Dot Pattern */}
      <div className="absolute bottom-0 left-0 w-full max-w-full h-[150px] opacity-[0.03] pointer-events-none -z-10 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#1A1A1A 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
    </div>
  );
}
