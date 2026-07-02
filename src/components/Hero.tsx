"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { HERO_SLIDES, TRUST_BADGES } from "@/data/misc";
import { HERO_IMAGES, HERO_VIDEOS } from "@/data/media";

function useTypewriter(text: string) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [text]);
  return display;
}

function useCountdown() {
  const [endTime] = useState(() => Date.now() + 2 * 86400000 + 14 * 3600000 + 32 * 60000);
  const [remaining, setRemaining] = useState({ d: "00", h: "00", m: "00", s: "00" });
  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, endTime - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setRemaining({
        d: String(d).padStart(2, "0"),
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [endTime]);
  return remaining;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [parallax, setParallax] = useState(0);
  const slide = HERO_SLIDES[index];
  const typed = useTypewriter(slide.line2);
  const countdown = useCountdown();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = (i: number) => setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) v.play().catch(() => {});
      else v.pause();
    });
  }, [index]);

  return (
    <section id="top" className="relative h-screen min-h-[560px] overflow-hidden">
      {HERO_SLIDES.map((_, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === index ? "opacity-100" : "opacity-0"}`}>
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={HERO_VIDEOS[i]}
            poster={HERO_IMAGES[i]}
            muted
            loop
            playsInline
            autoPlay={i === 0}
            className="absolute -inset-[5%] h-[110%] w-[110%] object-cover"
            style={{ transform: `translateY(${parallax}px)` }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />

      <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden opacity-60">
        <span className="absolute top-[28%] h-px w-1/3 animate-speed-lines bg-gradient-to-r from-transparent via-white/70 to-transparent" style={{ animationDelay: "0s" }} />
        <span className="absolute top-[52%] h-px w-1/4 animate-speed-lines bg-gradient-to-r from-transparent via-accent/80 to-transparent" style={{ animationDelay: "0.8s" }} />
        <span className="absolute top-[71%] h-px w-1/3 animate-speed-lines bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{ animationDelay: "1.6s" }} />
      </div>

      <div className="relative z-[5] flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <h1 className="font-heading text-[32px] uppercase leading-tight tracking-wide sm:text-5xl md:text-[68px]">
          <span className="block">{slide.line1}</span>
          <span className="block text-accent">
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-[3px] border-accent">{typed}</span>
          </span>
        </h1>
        <p className="mt-4.5 max-w-[600px] font-body text-sm font-light text-white/85 sm:text-lg md:text-xl">{slide.sub}</p>

        <a
          href="#new-launch"
          className="animate-border-pulse group relative mt-8 overflow-hidden rounded border-2 border-accent px-10 py-4 font-heading text-sm uppercase tracking-[0.08em] text-white transition-colors hover:animate-engine-rev"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-350 group-hover:scale-x-100" />
          <span className="relative">Shop Now</span>
        </a>

        <div className="relative z-[6] mt-6.5 flex gap-3.5 rounded-[10px] border border-white/15 bg-black/35 px-5.5 py-3.5 backdrop-blur-md">
          {(["d", "h", "m", "s"] as const).map((k) => (
            <div key={k} className="text-center">
              <div className="font-heading text-[22px] font-bold text-accent">{countdown[k]}</div>
              <div className="text-[10px] uppercase tracking-[0.08em] text-gray-300">{{ d: "Days", h: "Hrs", m: "Min", s: "Sec" }[k]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 z-[6] flex w-full -translate-y-1/2 justify-between px-6">
        <button
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-accent"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-accent"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-[190px] left-1/2 z-[6] flex -translate-x-1/2 gap-2.5 max-md:bottom-[230px]">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "scale-[1.3] bg-accent" : "bg-white/40"}`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[6] flex flex-wrap justify-center gap-4 px-5 pb-5.5 max-md:pb-3.5">
        {TRUST_BADGES.map(({ Icon, label, tip }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="group relative flex items-center gap-2.5 rounded-[10px] border border-white/20 bg-white/12 px-4.5 py-3 text-white backdrop-blur-[10px]"
          >
            <Icon className="h-[22px] w-[22px] shrink-0 text-accent" />
            <span className="font-heading text-xs uppercase">{label}</span>
            <div className="pointer-events-none absolute bottom-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1.5 font-body text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">
              {tip}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
