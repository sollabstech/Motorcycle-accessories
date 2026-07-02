"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@/lib/icons";
import type { Product } from "@/data/products";
import { PRODUCT_IMAGES } from "@/data/media";
import { useCart } from "@/context/CartContext";

const STOCK_COLOR: Record<Product["stock"], string> = {
  in: "bg-green-600",
  low: "bg-amber-500",
  verylow: "bg-red-600",
};

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [pop, setPop] = useState(false);
  const { addToCart } = useCart();

  const toggleWishlist = () => {
    setWishlisted((w) => !w);
    setPop(false);
    requestAnimationFrame(() => setPop(true));
  };

  return (
    <div className="group relative w-[255px] shrink-0 overflow-hidden rounded-[14px] bg-surface shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)]">
      <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#e9e9e9] to-[#d8d8d8]">
        <button
          aria-label="Toggle wishlist"
          onClick={toggleWishlist}
          onAnimationEnd={() => setPop(false)}
          className="absolute right-2.5 top-2.5 z-[3] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/90"
        >
          <HeartIcon
            className={`h-[18px] w-[18px] transition-colors ${wishlisted ? "fill-accent text-accent" : "text-gray-400"} ${pop ? "animate-heart-pop" : ""}`}
          />
        </button>
        <Image
          src={PRODUCT_IMAGES[product.id]}
          alt={product.title}
          fill
          sizes="255px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative p-4 pb-[62px] pt-3.5">
        <div className="text-[11px] uppercase tracking-wide text-gray-400">{product.brand}</div>
        <div className="line-clamp-2 my-1.5 min-h-[34px] font-heading text-[13.5px] uppercase">{product.title}</div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[13px] text-gray-400 line-through">₹{product.old.toLocaleString("en-IN")}</span>
          <span className="text-base font-semibold text-accent">₹{product.sale.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-0.5 text-[11px] text-gray-500">or ₹{product.emi}/Month</div>
        <div className="mt-1.5 flex items-center gap-1.5 text-[11.5px]">
          <span className={`h-2 w-2 rounded-full ${STOCK_COLOR[product.stock]}`} />
          {product.stockLabel}
        </div>
      </div>

      <button
        onClick={addToCart}
        className="absolute inset-x-0 bottom-0 translate-y-full bg-primary py-3.5 text-center font-heading text-[12.5px] uppercase tracking-wide text-white transition-transform duration-300 group-hover:translate-y-0"
      >
        Add to Cart
      </button>
    </div>
  );
}
