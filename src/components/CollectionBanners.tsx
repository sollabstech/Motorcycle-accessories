import Image from "next/image";
import { COLLECTION_BANNERS } from "@/data/misc";
import { COLLECTION_BANNER_IMAGES } from "@/data/media";

export default function CollectionBanners() {
  return (
    <section className="pb-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {COLLECTION_BANNERS.map((name, i) => (
            <div key={name} className="shimmer-sweep group relative flex h-[320px] items-end overflow-hidden rounded-2xl p-5.5 text-white">
              <Image
                src={COLLECTION_BANNER_IMAGES[i]}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 transition-colors group-hover:to-black/55" />
              <div className="relative z-[2] transition-transform duration-300 group-hover:scale-105">
                <h3 className="font-heading text-[19px] uppercase tracking-wide">{name}</h3>
                <span className="font-heading text-xs tracking-wide text-accent">Shop Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
