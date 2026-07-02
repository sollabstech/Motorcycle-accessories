"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

interface CartContextValue {
  count: number;
  bounce: boolean;
  addToCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [bounce, setBounce] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addToCart = useCallback(() => {
    setCount((c) => c + 1);
    setBounce(false);
    requestAnimationFrame(() => setBounce(true));
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setBounce(false), 500);
  }, []);

  return <CartContext.Provider value={{ count, bounce, addToCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
