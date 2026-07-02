import Image from "next/image";
import { GLOW_TILE_GIF } from "@/data/media";

export default function GlowTiles() {
  return (
    <section className="pb-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {["Legunday Custom Accessories", "JB Racing Accessories"].map((name) => (
            <div
              key={name}
              className="animate-glow-pulse relative flex h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-primary-dark text-white transition-shadow duration-400 hover:shadow-[0_0_70px_rgba(232,89,12,0.45)]"
            >
              <Image src={GLOW_TILE_GIF} alt="" fill unoptimized className="object-cover opacity-25" />
              <div className="absolute inset-0 bg-primary-dark/70" />
              <h3 className="relative z-[2] text-[clamp(20px,3vw,30px)] font-heading uppercase tracking-wide">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
