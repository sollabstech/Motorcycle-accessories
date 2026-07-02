"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, ArrowUpIcon } from "@/lib/icons";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      const timer = setTimeout(() => setShowCookieBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "1");
    setShowCookieBanner(false);
  };

  return (
    <>
      <a
        href="#"
        aria-label="WhatsApp"
        className="animate-float-bounce group fixed bottom-7 right-7 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_22px_rgba(0,0,0,0.3)]"
      >
        <span className="pointer-events-none absolute right-[66px] whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat with us
        </span>
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-7 left-7 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_22px_rgba(0,0,0,0.3)] transition-[opacity,transform] hover:-translate-y-1 ${
          showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      <div
        className={`fixed inset-x-0 bottom-0 z-[2000] flex flex-wrap items-center justify-between gap-5 bg-primary-dark px-6 py-4 text-white transition-transform duration-400 ${
          showCookieBanner ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <p className="max-w-[700px] text-[13px] text-white/80">
          We use cookies to enhance your browsing experience and analyze site traffic. By continuing, you agree to our use of cookies.
        </p>
        <button onClick={acceptCookies} className="shrink-0 rounded-md bg-accent px-5.5 py-2.5 font-heading text-[13px] uppercase text-white">
          Accept
        </button>
      </div>
    </>
  );
}
