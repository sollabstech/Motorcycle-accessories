"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import Reveal from "./Reveal";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[320px] shrink-0 rounded-2xl bg-surface p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-2.5 text-sm tracking-[2px] text-amber-400">★★★★★</div>
      <p className="mb-3.5 text-sm leading-relaxed text-gray-700">&ldquo;{t.text}&rdquo;</p>
      <div className="font-heading text-[13px] uppercase">{t.name}</div>
      <div className="text-[11px] text-gray-400">{t.loc}</div>
      <div className="mt-2 inline-block rounded-md bg-gray-100 px-2.5 py-1 text-[10.5px] text-gray-500">{t.product}</div>
    </motion.div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollBy = (amount: number) => trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });

  return (
    <section className="bg-surface py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-[clamp(24px,3vw,36px)] italic uppercase tracking-wide text-text-dark">Voice of Satisfaction</h2>
          <div className="flex gap-2.5">
            <button
              aria-label="Scroll testimonials left"
              onClick={() => scrollBy(-340)}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
            >
              <ChevronLeftIcon className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label="Scroll testimonials right"
              onClick={() => scrollBy(340)}
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
            >
              <ChevronRightIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="no-scrollbar flex overflow-x-auto scroll-smooth"
        >
          <div className="flex w-max gap-5">
            {doubled.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
