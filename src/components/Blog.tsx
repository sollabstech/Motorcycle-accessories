import Image from "next/image";
import { BLOGS } from "@/data/blogs";
import { BLOG_IMAGES } from "@/data/media";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark">Featured Blog</h2>
          <a href="#" className="inline-block font-heading text-sm uppercase tracking-wide text-accent transition-transform hover:translate-x-1.5">
            View all &rarr;
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((b, i) => (
            <div
              key={b.title}
              className="group overflow-hidden rounded-2xl bg-surface shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_32px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary to-primary">
                <Image
                  src={BLOG_IMAGES[i]}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-400 group-hover:scale-[1.1]"
                />
              </div>
              <div className="p-4.5">
                <span className="mb-2.5 inline-block rounded-[20px] bg-accent px-2.5 py-1 text-[10px] uppercase text-white">{b.tag}</span>
                <div className="line-clamp-2 mb-2 text-sm font-heading uppercase">{b.title}</div>
                <p className="line-clamp-2 mb-2.5 text-[13px] text-gray-600">{b.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <span>{b.date}</span>
                  <a href="#" className="font-heading text-accent">
                    Read more &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
