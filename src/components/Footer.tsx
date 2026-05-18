import { useState, type ReactNode } from "react";

const whatsappHref = "https://wa.me/916201530733";
const supportEmail = "birzcrown@gmail.com";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "FAQ", href: "#faq" },
];

const trustBadges = [
  "🔒 Secure Payment via Razorpay",
  "⚡ Instant Email Delivery",
  "🔄 7-Day Money Back Guarantee",
  "📱 Works on Google Sheets & Excel",
];

type PolicyKey = "privacy" | "refund" | null;

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyKey>(null);

  const openPolicy = (policy: Exclude<PolicyKey, null>) => {
    setActivePolicy(policy);
    window.history.replaceState(null, "", `#${policy}-policy`);
  };

  const closePolicy = () => {
    setActivePolicy(null);
    if (window.location.hash === "#privacy-policy" || window.location.hash === "#refund-policy") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <>
      <footer className="relative z-10 w-full overflow-x-clip border-t border-white/10 bg-[#0a0a0a] text-[#9ca3af]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="grid gap-10 text-center md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:text-left lg:gap-16">
            <div className="flex flex-col items-center md:items-start">
              <a href="#hero" className="font-display text-3xl font-bold tracking-[-0.03em]">
                <span className="rainbow-text">Sheetly</span>
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6b7280]">
                Run Your Entire Service Business From ONE Spreadsheet
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 mb-16 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,211,102,0.25)] transition-colors duration-200 hover:bg-[#1fb85a] sm:mb-0 sm:w-auto"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            <div className="grid w-full gap-8 md:w-auto md:grid-cols-2 md:gap-12 lg:gap-16">
              <FooterLinkColumn title="Product" links={productLinks} />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white">Support</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  <FooterLink href={`mailto:${supportEmail}`}>Contact Us</FooterLink>
                  <FooterButton onClick={() => openPolicy("refund")}>Refund Policy</FooterButton>
                  <FooterButton onClick={() => openPolicy("privacy")}>Privacy Policy</FooterButton>
                  <FooterLink href={whatsappHref} external>
                    WhatsApp Support
                  </FooterLink>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-10 border-y border-white/10 bg-white/[0.03] py-5 md:my-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => {
                const [icon, ...labelParts] = badge.split(" ");
                return (
                  <div
                    key={badge}
                    className="flex items-center justify-center gap-3 rounded-lg border border-white/[0.08] px-4 py-3 text-center text-sm text-[#e5e5e5] sm:justify-start sm:text-left"
                  >
                    <span aria-hidden="true">{icon}</span>
                    <span>{labelParts.join(" ")}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-[13px] text-[#6b7280] md:flex-row md:text-left">
            <p>© 2025 Sheetly. All Rights Reserved.</p>
            <p>Made with ❤️ in India 🇮🇳</p>
            <p>🔒 Secured by Razorpay</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-4 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-110 md:bottom-6 md:right-6"
      >
        <WhatsAppIcon />
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max rounded-lg bg-black px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Chat with us on WhatsApp
        </span>
      </a>

      <PolicyModal activePolicy={activePolicy} onClose={closePolicy} email={supportEmail} />
    </>
  );
}

function FooterLinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <FooterLink key={link.href} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  key?: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="inline-flex text-[#9ca3af] transition-colors duration-200 hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

function FooterButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="text-[#9ca3af] transition-colors duration-200 hover:text-white"
      >
        {children}
      </button>
    </li>
  );
}

function PolicyModal({
  activePolicy,
  onClose,
  email,
}: {
  activePolicy: PolicyKey;
  onClose: () => void;
  email: string;
}) {
  const isPrivacy = activePolicy === "privacy";

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm transition-opacity duration-200 ${
        activePolicy ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!activePolicy}
      onClick={onClose}
    >
      <section
        id={isPrivacy ? "privacy-policy" : "refund-policy"}
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-title"
        className="max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] p-6 text-left text-[#d1d5db] shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id="policy-title" className="font-display text-2xl font-bold text-white md:text-3xl">
            {isPrivacy ? "Privacy Policy" : "Refund Policy — 7-Day Money Back Guarantee"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close policy"
            className="rounded-full border border-white/10 px-3 py-1 text-lg leading-none text-white transition-colors duration-200 hover:bg-white/10"
          >
            ×
          </button>
        </div>

        {isPrivacy ? (
          <p className="mt-6 text-sm leading-7 text-[#9ca3af] md:text-base">
            At Sheetly, we respect your privacy. We collect only the information necessary to process your order — name,
            email address, and payment details. Your data is processed securely via Razorpay and is never sold or shared
            with third parties. After purchase, your email is used only to deliver your product and provide support. You
            may contact us at{" "}
            <a href={`mailto:${email}`} className="text-white underline underline-offset-4">
              {email}
            </a>{" "}
            to request data deletion at any time.
          </p>
        ) : (
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#9ca3af] md:text-base">
            <p>
              We offer a 7-day money-back guarantee on all Sheetly purchases. If you are not satisfied with your
              purchase, email us within 7 days of purchase and we will process a full refund within 48 hours — no
              questions asked.
            </p>
            <div>
              <h3 className="font-semibold text-white">✅ You GET a Full Refund If:</h3>
              <ul className="mt-2 space-y-1">
                <li>• Product has technical issues we cannot resolve</li>
                <li>• Features mentioned on this page are missing</li>
                <li>• File is corrupted or does not open properly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">❌ We CANNOT Refund If:</h3>
              <ul className="mt-2 space-y-1">
                <li>• You simply changed your mind after use</li>
                <li>• Request is made after the 7-day window</li>
                <li>• File was downloaded but not genuinely tried</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
      <path d="M16.04 3.2A12.74 12.74 0 0 0 5.18 22.6L3.7 28.8l6.34-1.44A12.75 12.75 0 1 0 16.04 3.2Zm0 2.28a10.46 10.46 0 0 1 8.92 15.92 10.45 10.45 0 0 1-13.98 3.72l-.45-.25-3.43.78.8-3.31-.3-.48A10.46 10.46 0 0 1 16.04 5.48Zm-4.1 5.3c-.24 0-.62.08-.95.44-.33.36-1.25 1.22-1.25 2.98s1.28 3.46 1.46 3.7c.18.24 2.48 3.96 6.1 5.38 3.01 1.18 3.62.94 4.27.88.65-.06 2.1-.86 2.4-1.7.3-.83.3-1.54.2-1.7-.09-.15-.33-.24-.7-.42-.36-.18-2.1-1.04-2.43-1.16-.33-.12-.57-.18-.8.18-.24.36-.92 1.16-1.13 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.78a10.8 10.8 0 0 1-2-2.48c-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.94-1.1-2.66-.29-.7-.58-.6-.8-.61h-.63Z" />
    </svg>
  );
}
