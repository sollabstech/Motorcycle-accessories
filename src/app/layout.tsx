import type { Metadata } from "next";
import { Quantico, Barlow } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import PaletteLoader from "@/components/PaletteLoader";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Velocity Armor | Motorcycle Accessories & Riding Gear",
  description: "Premium motorcycle accessories, riding gear & touring essentials.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${quantico.variable} ${barlow.variable}`}>
      <body className="font-body text-text-dark antialiased" style={{ background: "var(--color-bg)" }}>
        <PaletteLoader />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
