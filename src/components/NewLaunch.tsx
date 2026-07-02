import { PRODUCTS } from "@/data/products";
import ProductCarousel from "./ProductCarousel";
import Reveal from "./Reveal";

export default function NewLaunch() {
  return (
    <section id="new-launch" className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark">New Launch</h2>
          <a href="#" className="inline-block font-heading text-sm uppercase tracking-wide text-accent transition-transform hover:translate-x-1.5">
            View all &rarr;
          </a>
        </Reveal>
        <ProductCarousel products={PRODUCTS} />
      </div>
    </section>
  );
}
