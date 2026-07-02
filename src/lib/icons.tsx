import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const BikeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="18.5" cy="17.5" r="3.5" />
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9.5 11.5L9 8h4l3 4h3M9 8l2 4h5" />
  </svg>
);

export const SupportIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1v-6H3z" />
  </svg>
);

export const SecureIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const GenuineIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 13 7 22l5-3 5 3-1.5-9" />
  </svg>
);

export const RidersIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const DeliveryIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <rect x="1" y="7" width="15" height="10" rx="1" />
    <path d="M16 10h4l3 3v4h-7z" />
    <circle cx="6" cy="19" r="1.6" />
    <circle cx="18.5" cy="19" r="1.6" />
  </svg>
);

export const JacketIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M8 4 4 7v13h4V9l1 11h6l1-11v11h4V7l-4-3-3 2-3-2z" />
  </svg>
);

export const GlovesIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M8 11V4a1.5 1.5 0 0 1 3 0v5M11 9V3a1.5 1.5 0 0 1 3 0v6M14 9V4a1.5 1.5 0 0 1 3 0v9M17 12V8a1.5 1.5 0 0 1 3 0v7c0 3-2 6-6 6H9a5 5 0 0 1-5-5v-3l2-4" />
  </svg>
);

export const PantIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M6 3h12l1 8-2 10h-3l-1-9-1 9H9L7 11z" />
  </svg>
);

export const BootsIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M7 2v9l-5 4v3h13c3 0 5-2 5-2s0-2-2-3-4-1-4-3V2z" />
  </svg>
);

export const GuardIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" />
  </svg>
);

export const HelmetIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M4 15a8 8 0 0 1 16 0v2H4z" />
    <path d="M4 17c0 2 3 3 8 3s8-1 8-3" />
    <path d="M14 9h4" />
  </svg>
);

export const ExhaustIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="M3 9h9l4-3h5v9h-5l-4-3H3z" />
    <circle cx="6.5" cy="10.5" r="1.5" />
  </svg>
);

export const InstaIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.4.46.7.27 1.2.63 1.7 1.15.5.5.87 1 1.15 1.7.24.6.4 1.3.46 2.4.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4a4.9 4.9 0 0 1-1.15 1.7 4.9 4.9 0 0 1-1.7 1.15c-.6.24-1.3.4-2.4.46-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.9 4.9 0 0 1-1.7-1.15 4.9 4.9 0 0 1-1.15-1.7c-.24-.6-.4-1.3-.46-2.4C2 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.46-2.4.27-.7.63-1.2 1.15-1.7.5-.5 1-.87 1.7-1.15.6-.24 1.3-.4 2.4-.46C8.99 2.01 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const MicIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

export const AccountIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const CartIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ArrowUpIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.2 4.74 1.2 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.5 3.66-8.16 8.24-8.16 4.58 0 8.24 3.66 8.24 8.16 0 4.5-3.66 8.22-8.24 8.22z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);

export const YouTubeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.6-.46-5.3a2.9 2.9 0 0 0-2-2C18.9 4.2 12 4.2 12 4.2s-6.9 0-8.54.5a2.9 2.9 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.46 5.3a2.9 2.9 0 0 0 2 2c1.64.5 8.54.5 8.54.5s6.9 0 8.54-.5a2.9 2.9 0 0 0 2-2C23 15.6 23 12 23 12zM9.75 15.5v-7l6 3.5z" />
  </svg>
);

export const PinterestIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-3.64 19.3c-.05-.8-.09-2.03.02-2.9.1-.8.66-5.1.66-5.1s-.17-.34-.17-.83c0-.78.45-1.36 1.02-1.36.48 0 .71.36.71.79 0 .48-.31 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.58 0-1.35-.97-2.29-2.36-2.29-1.6 0-2.54 1.2-2.54 2.45 0 .48.18.99.42 1.28a.17.17 0 0 1 .04.16c-.04.2-.15.6-.17.68-.03.11-.1.14-.23.08-.86-.4-1.4-1.66-1.4-2.67 0-2.17 1.58-4.17 4.55-4.17 2.39 0 4.25 1.7 4.25 3.97 0 2.37-1.49 4.27-3.57 4.27-.7 0-1.35-.36-1.58-.79l-.43 1.64c-.16.6-.58 1.36-.87 1.82A10 10 0 1 0 12 2z" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
