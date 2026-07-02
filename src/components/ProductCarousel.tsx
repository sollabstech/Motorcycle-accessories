"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import type { Product } from "@/data/products";
import { useDragScroll } from "@/hooks/useDragScroll";
import ProductCard from "./ProductCard";

function SkeletonCard() {
  return (
    <div className="h-[342px] w-[255px] shrink-0 animate-shimmer rounded-[14px] bg-[length:400%_100%] bg-[linear-gradient(90deg,#e6e6e6_25%,#f2f2f2_37%,#e6e6e6_63%)]" />
  );
}

export default function ProductCarousel({ products, delay = 1500 }: { products: Product[]; delay?: number }) {
  const { ref, scrollBy } = useDragScroll<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative">
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-290)}
        className="absolute left-[-18px] top-[45%] z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
      >
        <ChevronLeftIcon className="h-[18px] w-[18px]" />
      </button>

      <div ref={ref} className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto pb-1.5 active:cursor-grabbing">
        {loaded
          ? products.map((p) => <ProductCard key={p.id} product={p} />)
          : Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>

      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(290)}
        className="absolute right-[-18px] top-[45%] z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
      >
        <ChevronRightIcon className="h-[18px] w-[18px]" />
      </button>
    </div>
  );
}
