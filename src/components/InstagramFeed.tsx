"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { InstaIcon, CloseIcon } from "@/lib/icons";
import { INSTA_LIKES } from "@/data/misc";
import { INSTAGRAM_IMAGES } from "@/data/media";
import Reveal from "./Reveal";

export default function InstagramFeed() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex justify-center">
          <h2 className="relative font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark after:mt-3.5 after:block after:h-1 after:w-[70px] after:rounded-full after:bg-accent after:mx-auto">
            Follow Us
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {INSTA_LIKES.map((likes, i) => (
            <motion.button
              key={i}
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-[10px] bg-gradient-to-br from-secondary to-primary"
            >
              <Image
                src={INSTAGRAM_IMAGES[i]}
                alt={`Instagram post ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <InstaIcon className="h-[26px] w-[26px]" />
                <span className="text-xs">{likes} likes</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/75 backdrop-blur-md"
            onClick={() => setOpenIndex(null)}
          >
            <button aria-label="Close" className="absolute right-10 top-7 text-white" onClick={() => setOpenIndex(null)}>
              <CloseIcon className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-square w-[min(70vw,500px)] overflow-hidden rounded-2xl"
            >
              <Image src={INSTAGRAM_IMAGES[openIndex]} alt="Instagram post enlarged" fill sizes="500px" className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
