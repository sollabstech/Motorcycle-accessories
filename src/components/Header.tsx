"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SearchIcon,
  MicIcon,
  AccountIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
} from "@/lib/icons";
import { BIKE_BRANDS } from "@/data/misc";
import { BIKE_BRAND_IMAGES } from "@/data/media";
import { useCart } from "@/context/CartContext";

const NAV_ITEMS = [
  "Super Bikes",
  "Motorcycle Accessories",
  "Riding Gears",
  "Luggage & Touring",
  "Helmets & Accessories",
  "Combos",
  "Events",
];

function useInstaCounter(target = 788000, duration = 2200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value >= 1000 ? (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + "K" : String(value);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { count, bounce } = useCart();
  const instaCount = useInstaCounter();
  const prevBounce = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    prevBounce.current = bounce;
  }, [bounce]);

  return (
    <>
      <header className={`sticky top-0 z-[1000] bg-primary transition-shadow ${scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.35)]" : ""}`}>
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 transition-[height,padding] duration-350 ease-out ${
            scrolled ? "h-[82px] py-2" : "h-[118px] py-4"
          }`}
        >
          <motion.a
            href="#top"
            className="shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Image
              src="/logo.png"
              alt="Store Logo"
              width={253}
              height={64}
              priority
              className={`w-auto brightness-0 invert transition-[height] duration-350 ${scrolled ? "h-[38px] md:h-11" : "h-[38px] md:h-16"}`}
            />
          </motion.a>

          <div className="hidden max-w-[560px] flex-1 items-center overflow-hidden rounded-[30px] bg-surface md:flex h-[46px]">
            <select className="h-full border-r border-black/10 bg-black/5 px-3 font-body text-[13px] text-text-dark">
              <option>All Categories</option>
              <option>Helmets</option>
              <option>Riding Gear</option>
              <option>Accessories</option>
              <option>Luggage</option>
            </select>
            <input
              type="text"
              placeholder="Search for helmets, jackets, exhausts..."
              className="flex-1 border-none px-3.5 font-body text-sm text-text-dark outline-none"
            />
            <button aria-label="Voice search" className="flex aspect-square h-full items-center justify-center text-accent">
              <MicIcon className="h-[18px] w-[18px]" />
            </button>
            <button aria-label="Search" className="flex aspect-square h-full items-center justify-center text-secondary">
              <SearchIcon className="h-[18px] w-[18px]" />
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-5">
            <div className="hidden items-center gap-2 rounded-[20px] border border-white/25 px-3 py-1.5 text-[12.5px] text-text-on-primary md:flex">
              <InstaIconInline />
              <span>{instaCount}</span> followers
            </div>
            <a href="#" aria-label="Account" className="text-text-on-primary">
              <AccountIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Cart" className="relative text-text-on-primary">
              <CartIcon className="h-6 w-6" />
              <span
                className={`absolute -right-2.5 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white ${
                  bounce ? "animate-badge-bounce" : ""
                }`}
              >
                {count}
              </span>
            </a>
            <button aria-label="Menu" className="text-text-on-primary md:hidden" onClick={() => setDrawerOpen(true)}>
              <MenuIcon className="h-[26px] w-[26px]" />
            </button>
          </div>
        </div>

        <nav className="hidden border-t border-white/10 bg-black/15 md:block">
          <div className="mx-auto flex max-w-[1400px] items-center gap-1 px-6">
            <ul className="flex flex-wrap items-center">
              <li className="group relative">
                <a href="#bikes" className="block whitespace-nowrap px-4 py-3.5 font-heading text-[12.5px] uppercase tracking-wide text-text-on-primary transition-colors group-hover:text-accent">
                  Shop by Bike
                </a>
                <div className="absolute left-0 top-full z-50 hidden min-w-[640px] grid-cols-5 gap-4 rounded-b-[10px] bg-surface p-6 text-text-dark shadow-[0_20px_40px_rgba(0,0,0,0.25)] group-hover:grid">
                  {BIKE_BRANDS.map((b) => (
                    <div key={b} className="text-center">
                      <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-[10px] bg-gradient-to-br from-secondary to-primary transition-transform duration-300 hover:scale-[1.08]">
                        <Image src={BIKE_BRAND_IMAGES[b]} alt={b} fill sizes="120px" className="object-cover" />
                      </div>
                      <span className="font-heading text-xs uppercase">{b}</span>
                    </div>
                  ))}
                </div>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a href="#" className="block whitespace-nowrap px-4 py-3.5 font-heading text-[12.5px] uppercase tracking-wide text-text-on-primary transition-colors hover:text-accent">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="ml-2 block whitespace-nowrap rounded bg-accent px-[18px] py-2.5 font-heading text-[12.5px] font-bold uppercase tracking-wide text-white transition-[filter] hover:brightness-110 hover:animate-engine-rev">
                  Garage Sale
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[1500] bg-black/50 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={`fixed top-0 z-[1600] h-full w-[300px] overflow-y-auto bg-primary p-6 transition-[left] duration-350 ease-out md:hidden ${
          drawerOpen ? "left-0" : "-left-[320px]"
        }`}
      >
        <button aria-label="Close menu" className="mb-5 flex text-white" onClick={() => setDrawerOpen(false)}>
          <CloseIcon className="h-[26px] w-[26px]" />
        </button>
        {["Shop by Bike", ...NAV_ITEMS].map((item) => (
          <a
            key={item}
            href="#"
            className="block border-b border-white/10 py-3 font-heading text-[13px] uppercase tracking-wide text-text-on-primary"
            onClick={() => setDrawerOpen(false)}
          >
            {item}
          </a>
        ))}
        <a href="#" className="mt-2.5 inline-block rounded bg-accent px-[18px] py-2.5 font-heading text-[13px] font-bold uppercase tracking-wide text-white">
          Garage Sale
        </a>
      </div>
    </>
  );
}

function InstaIconInline() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent">
      <path d="M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.4.46.7.27 1.2.63 1.7 1.15.5.5.87 1 1.15 1.7.24.6.4 1.3.46 2.4.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4a4.9 4.9 0 0 1-1.15 1.7 4.9 4.9 0 0 1-1.7 1.15c-.6.24-1.3.4-2.4.46-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.9 4.9 0 0 1-1.7-1.15 4.9 4.9 0 0 1-1.15-1.7c-.24-.6-.4-1.3-.46-2.4C2 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.46-2.4.27-.7.63-1.2 1.15-1.7.5-.5 1-.87 1.7-1.15.6-.24 1.3-.4 2.4-.46C8.99 2.01 9.3 2 12 2z" />
    </svg>
  );
}
