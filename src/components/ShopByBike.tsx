"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";
import { BIKE_BRANDS } from "@/data/misc";
import { BIKE_BRAND_IMAGES } from "@/data/media";
import { useDragScroll } from "@/hooks/useDragScroll";
import Reveal from "./Reveal";

export default function ShopByBike() {
  const { ref, scrollBy } = useDragScroll<HTMLDivElement>();

  return (
    <section id="bikes" className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="relative font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark after:mt-3.5 after:block after:h-1 after:w-[70px] after:rounded-full after:bg-accent">
            Shop by Bike
          </h2>
        </Reveal>

        <div className="relative">
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-340)}
            className="absolute left-[-18px] top-[40%] z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          >
            <ChevronLeftIcon className="h-[18px] w-[18px]" />
          </button>

          <div ref={ref} className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto pb-2.5 active:cursor-grabbing">
            {BIKE_BRANDS.map((brand) => (
              <div key={brand} className="group w-[170px] shrink-0 text-center max-md:w-[150px]">
                <div className="relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-full bg-gradient-to-br from-secondary to-primary transition-[transform,box-shadow] duration-300 group-hover:scale-105 group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
                  <Image
                    src={BIKE_BRAND_IMAGES[brand]}
                    alt={brand}
                    fill
                    sizes="150px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-3 inline-block font-heading text-[13px] uppercase tracking-wide">
                  {brand}
                  <span className="mt-1 block h-0.5 w-0 bg-accent transition-all duration-250 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(340)}
            className="absolute right-[-18px] top-[40%] z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          >
            <ChevronRightIcon className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
