import Image from "next/image";
import { PROMO_TILES } from "@/data/misc";
import { PROMO_TILE_IMAGES } from "@/data/media";

export default function PromoTiles() {
  return (
    <section className="pb-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PROMO_TILES.map(({ name, alt, Icon }, i) => (
            <div
              key={name}
              className="group relative flex h-[220px] items-end overflow-hidden rounded-[14px] p-6.5 text-white transition-[transform,box-shadow] hover:scale-[1.03] hover:shadow-[0_18px_34px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={PROMO_TILE_IMAGES[i]}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className={`absolute inset-0 ${alt ? "bg-gradient-to-br from-accent/80 to-[#7a3502]/85" : "bg-gradient-to-br from-primary-dark/85 to-secondary/70"}`} />
              <Icon className="absolute right-2.5 top-2.5 z-[2] h-[100px] w-[100px] opacity-25" />
              <h3 className="relative z-[2] text-lg">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
