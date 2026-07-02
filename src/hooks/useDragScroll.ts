"use client";

import { useEffect, useRef } from "react";

/** Enables click-and-drag + touch momentum scrolling on a horizontal carousel track. */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseUp = () => {
      isDown = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.4;
    };

    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX;
      el.scrollLeft = touchScrollLeft - (x - touchStartX) * 1.2;
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const scrollBy = (amount: number) => {
    ref.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return { ref, scrollBy };
}
