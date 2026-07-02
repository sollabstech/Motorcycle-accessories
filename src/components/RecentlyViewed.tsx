"use client";

import { useEffect, useState } from "react";
import { PRODUCTS, type Product } from "@/data/products";
import ProductCarousel from "./ProductCarousel";
import Reveal from "./Reveal";

export default function RecentlyViewed() {
  const [viewed, setViewed] = useState<Product[] | null>(null);

  useEffect(() => {
    let stored: Product[] = [];
    try {
      stored = JSON.parse(sessionStorage.getItem("recentlyViewed") || "[]");
    } catch {
      stored = [];
    }
    if (stored.length === 0) {
      stored = PRODUCTS.slice(0, 4);
      sessionStorage.setItem("recentlyViewed", JSON.stringify(stored));
    }
    // sessionStorage is only available post-mount; this can't be computed during
    // render without a server/client mismatch, so it must be set from an effect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setViewed(stored);
  }, []);

  if (!viewed || viewed.length === 0) return null;

  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark">Recently Viewed</h2>
        </Reveal>
        <ProductCarousel products={viewed} delay={0} />
      </div>
    </section>
  );
}
