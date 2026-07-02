"use client";

import { useState } from "react";
import Image from "next/image";
import { WhatsAppIcon, FacebookIcon, YouTubeIcon, InstaIcon, PinterestIcon, ArrowRightIcon } from "@/lib/icons";

const ABOUT_LINKS = ["Photos", "Video", "Site Map", "Contact Us", "Brands", "Careers"];
const DELIVERY_LINKS = ["Privacy Policy", "Terms & Conditions", "Returns", "Cancellation", "Shipping Policy"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-primary pt-[60px] text-text-light">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-white/12 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/logo.png" alt="Store Logo" width={160} height={40} className="mb-4 h-10 w-auto brightness-0 invert" />
            <p className="mb-2 text-[13px] text-white/75">221B Speedway Industrial Estate, Pune, Maharashtra 411001, India</p>
            <p className="mb-2 text-[13px] text-white/75">Phone: +91 98765 43210</p>
            <p className="mb-2 text-[13px] text-white/75">Email: sollabstech@gmail.com</p>
            <a href="#" className="my-3 inline-flex items-center gap-2 rounded-[24px] bg-[#25D366] px-4 py-2.5 text-[13px] text-white">
              <WhatsAppIcon className="h-4 w-4" /> Message Us
            </a>
            <div className="mt-3.5 flex gap-3">
              {[FacebookIcon, YouTubeIcon, InstaIcon, PinterestIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4.5 text-sm text-text-light">About</h4>
            <ul>
              {ABOUT_LINKS.map((l) => (
                <li key={l} className="mb-2.5">
                  <a href="#" className="text-[13.5px] text-white/75 transition-colors hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-sm text-text-light">Delivery &amp; Returns</h4>
            <ul>
              {DELIVERY_LINKS.map((l) => (
                <li key={l} className="mb-2.5">
                  <a href="#" className="text-[13.5px] text-white/75 transition-colors hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-sm text-text-light">Newsletter</h4>
            <div className="rounded-xl bg-white/[0.06] p-5">
              <p className="text-[13px] text-white/75">Subscribe for exclusive deals &amp; new arrivals.</p>
              <form onSubmit={onSubmit} className="mt-3 flex overflow-hidden rounded-[30px] bg-white/10">
                <input
                  type="email"
                  required
                  value={submitted ? "Subscribed!" : email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent px-4 py-3 text-[13px] text-white placeholder:text-white/50 outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="flex w-[46px] items-center justify-center bg-accent text-white">
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-5.5 text-xs text-white/60">
          <span>&copy; 2026 Velocity Armor. All rights reserved.</span>
          <span>Powered by Velocity Armor</span>
          <div className="flex gap-2">
            {["VISA", "MC", "UPI", "RUPAY", "COD"].map((p) => (
              <span key={p} className="rounded bg-white/10 px-2 py-1 text-[10px]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
