"use client";

import { useEffect } from "react";
import { loadLogoAndApplyPalette } from "@/lib/palette";

export default function PaletteLoader() {
  useEffect(() => {
    loadLogoAndApplyPalette("/logo.png");
  }, []);
  return null;
}
