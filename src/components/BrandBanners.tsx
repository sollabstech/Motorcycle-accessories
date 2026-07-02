import { BRAND_BANNERS } from "@/data/misc";
import { BRAND_BANNER_VIDEOS } from "@/data/media";

export default function BrandBanners() {
  return (
    <section className="pb-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {BRAND_BANNERS.map((name, i) => (
            <div key={name} className="shimmer-sweep group relative flex h-[320px] items-end overflow-hidden rounded-2xl p-5.5 text-white">
              <video
                src={BRAND_BANNER_VIDEOS[i]}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 z-[2] rounded bg-accent px-2.5 py-1.5 font-heading text-[10px] tracking-wide text-white">
                {name}
              </span>
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
