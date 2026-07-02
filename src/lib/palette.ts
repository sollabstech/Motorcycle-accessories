export interface Palette {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  textOnPrimary: string;
  textDark: string;
  textLight: string;
  bg: string;
  surface: string;
}

export const FALLBACK_PALETTE: Palette = {
  primary: "#2b2b2b",
  primaryDark: "#1a1a1a",
  secondary: "#4a4a4a",
  accent: "#e8590c",
  textOnPrimary: "#f5f5f5",
  textDark: "#1b1b1b",
  textLight: "#f5f5f5",
  bg: "#f7f7f7",
  surface: "#ffffff",
};

function shade(hex: string, percent: number): string {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255;
  let g = (n >> 8) & 255;
  let b = n & 255;
  r = Math.max(0, Math.min(255, Math.round(r + (percent < 0 ? r : 255 - r) * percent)));
  g = Math.max(0, Math.min(255, Math.round(g + (percent < 0 ? g : 255 - g) * percent)));
  b = Math.max(0, Math.min(255, Math.round(b + (percent < 0 ? b : 255 - b) * percent)));
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function toHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
}

function relLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function saturation(r: number, g: number, b: number): number {
  const mx = Math.max(r, g, b) / 255;
  const mn = Math.min(r, g, b) / 255;
  return mx === 0 ? 0 : (mx - mn) / mx;
}

/** Samples an already-loaded image via canvas and derives a brand palette from its dominant vivid color. */
export function extractPaletteFromImage(img: HTMLImageElement): Palette {
  const canvas = document.createElement("canvas");
  const w = (canvas.width = Math.min(img.naturalWidth || img.width, 200));
  const h = (canvas.height = Math.min(
    img.naturalHeight || img.height,
    Math.round(w * ((img.naturalHeight || img.height) / (img.naturalWidth || img.width)))
  ));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("2d context unavailable");
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;

  const buckets: Record<string, { count: number; sr: number; sg: number; sb: number }> = {};
  let totalOpaque = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a < 80) continue;
    const brightness = (r + g + b) / 3;
    if (brightness > 245) continue;
    if (brightness < 10) continue;
    totalOpaque++;
    const key = [Math.round(r / 24) * 24, Math.round(g / 24) * 24, Math.round(b / 24) * 24].join(",");
    if (!buckets[key]) buckets[key] = { count: 0, sr: 0, sg: 0, sb: 0 };
    buckets[key].count++;
    buckets[key].sr += r;
    buckets[key].sg += g;
    buckets[key].sb += b;
  }
  if (totalOpaque < 10) throw new Error("Not enough opaque pixels sampled");

  const sorted = Object.values(buckets).sort((a, b) => b.count - a.count);
  const top = sorted.map((c) => ({
    r: Math.round(c.sr / c.count),
    g: Math.round(c.sg / c.count),
    b: Math.round(c.sb / c.count),
    count: c.count,
  }));

  const dominant = top[0];
  const secondary =
    top.find((c) => {
      const dr = c.r - dominant.r;
      const dg = c.g - dominant.g;
      const db = c.b - dominant.b;
      return Math.sqrt(dr * dr + dg * dg + db * db) > 60;
    }) ||
    top[1] ||
    dominant;

  const dominantSat = saturation(dominant.r, dominant.g, dominant.b);
  const secondarySat = saturation(secondary.r, secondary.g, secondary.b);
  const dominantLum = relLuminance(dominant.r, dominant.g, dominant.b);
  const secondaryLum = relLuminance(secondary.r, secondary.g, secondary.b);

  let brand = dominant;
  if (dominantLum > 0.85 && secondarySat > 0.15) {
    brand = secondary;
  } else if (secondarySat > dominantSat + 0.1 && secondaryLum < 0.9) {
    brand = secondary;
  }
  const brandHex = toHex(brand.r, brand.g, brand.b);
  const brandLum = relLuminance(brand.r, brand.g, brand.b);
  const brandSat = saturation(brand.r, brand.g, brand.b);

  let accentHex: string;
  let primaryUsedHex: string;
  let primaryDarkHex: string;
  let secondaryUsedHex: string;

  if (brandSat < 0.12) {
    primaryUsedHex = brandLum > 0.6 ? "#20232a" : shade(brandHex, -0.2);
    primaryDarkHex = shade(primaryUsedHex, -0.3);
    secondaryUsedHex = shade(primaryUsedHex, 0.25);
    accentHex = "#e8590c";
  } else {
    accentHex = brandHex;
    primaryUsedHex = shade(brandHex, -0.6);
    primaryDarkHex = shade(brandHex, -0.75);
    secondaryUsedHex = shade(brandHex, -0.35);
  }

  const primaryUsedLum = relLuminance(
    parseInt(primaryUsedHex.slice(1, 3), 16),
    parseInt(primaryUsedHex.slice(3, 5), 16),
    parseInt(primaryUsedHex.slice(5, 7), 16)
  );

  return {
    primary: primaryUsedHex,
    primaryDark: primaryDarkHex,
    secondary: secondaryUsedHex,
    accent: accentHex,
    textOnPrimary: primaryUsedLum > 0.55 ? "#1b1b1b" : "#f5f5f5",
    textDark: "#1b1b1b",
    textLight: "#f5f5f5",
    bg: "#f7f7f7",
    surface: "#ffffff",
  };
}

export function applyPalette(p: Palette) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", p.primary);
  root.style.setProperty("--color-primary-dark", p.primaryDark);
  root.style.setProperty("--color-secondary", p.secondary);
  root.style.setProperty("--color-accent", p.accent);
  root.style.setProperty("--color-text-on-primary", p.textOnPrimary);
  root.style.setProperty("--color-text-dark", p.textDark);
  root.style.setProperty("--color-text-light", p.textLight);
  root.style.setProperty("--color-bg", p.bg);
  root.style.setProperty("--color-surface", p.surface);
}

export function loadLogoAndApplyPalette(logoSrc = "/logo.png") {
  const img = new Image();
  img.crossOrigin = "anonymous";
  let settled = false;
  const fallback = () => {
    if (settled) return;
    settled = true;
    applyPalette(FALLBACK_PALETTE);
  };
  img.onload = () => {
    if (settled) return;
    try {
      const palette = extractPaletteFromImage(img);
      settled = true;
      applyPalette(palette);
    } catch {
      fallback();
    }
  };
  img.onerror = fallback;
  img.src = logoSrc;
  setTimeout(fallback, 2500);
}
