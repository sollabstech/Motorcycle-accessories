import type { ComponentType } from "react";
import {
  BikeIcon,
  SupportIcon,
  SecureIcon,
  GenuineIcon,
  RidersIcon,
  DeliveryIcon,
  JacketIcon,
  GlovesIcon,
  PantIcon,
  BootsIcon,
  GuardIcon,
  ExhaustIcon,
  type IconProps,
} from "@/lib/icons";

export const BIKE_BRANDS = [
  "Kawasaki",
  "KTM",
  "Hero",
  "Royal Enfield",
  "Honda",
  "Yamaha",
  "Triumph",
  "TVS",
  "Bajaj",
  "BMW",
];

export interface TrustBadge {
  Icon: ComponentType<IconProps>;
  label: string;
  tip: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  { Icon: SupportIcon, label: "Customer Support", tip: "24/7 support via call & chat" },
  { Icon: SecureIcon, label: "Safe & Secure Payments", tip: "100% encrypted checkout" },
  { Icon: GenuineIcon, label: "100% Genuine", tip: "Authentic products only" },
  { Icon: RidersIcon, label: "2M+ Riders", tip: "Trusted community nationwide" },
  { Icon: DeliveryIcon, label: "Fast Delivery", tip: "Dispatched within 24 hours" },
];

export interface GearCategory {
  Icon: ComponentType<IconProps>;
  label: string;
}

export const GEAR_CATEGORIES: GearCategory[] = [
  { Icon: JacketIcon, label: "Jacket" },
  { Icon: GlovesIcon, label: "Gloves" },
  { Icon: PantIcon, label: "Riding Pant" },
  { Icon: BootsIcon, label: "Boots" },
  { Icon: GuardIcon, label: "Rider Guards" },
];

export interface PromoTile {
  name: string;
  alt: boolean;
  Icon: ComponentType<IconProps>;
}

export const PROMO_TILES: PromoTile[] = [
  { name: "Racing Spare Parts Accessories", alt: false, Icon: ExhaustIcon },
  { name: "Yamaha RX 100 Accessories", alt: true, Icon: BikeIcon },
  { name: "Exhaust", alt: false, Icon: ExhaustIcon },
];

export const COLLECTION_BANNERS = [
  "Kawasaki KLX 230 Accessories",
  "YSR 155 Accessories",
  "RTX 300 Accessories",
];

export const BRAND_BANNERS = ["Rynox", "Axor", "Luggage & Touring"];

export const INSTA_LIKES = [214, 532, 89, 1200, 347, 678, 95, 410, 203, 861];

export const HERO_SLIDES = [
  {
    gradient: "linear-gradient(135deg,#111,#333)",
    line1: "GEAR UP FOR THE",
    line2: "OPEN ROAD",
    sub: "Premium motorcycle accessories, riding gear & touring essentials — trusted by 2M+ riders across the country.",
  },
  {
    gradient: "linear-gradient(135deg,#1a1a1a,#3a2210)",
    line1: "RIDE HARDER,",
    line2: "RIDE SAFER",
    sub: "Certified helmets and protective gear engineered for real-world performance.",
  },
  {
    gradient: "linear-gradient(135deg,#0d0d0d,#2b2b2b)",
    line1: "BUILT FOR EVERY",
    line2: "TERRAIN",
    sub: "Touring luggage and rugged accessories for riders who never stop exploring.",
  },
];
