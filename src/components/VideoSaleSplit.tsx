"use client";

import { motion } from "framer-motion";
import { VIDEO_SALE_BANNER } from "@/data/media";

const badgeVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function VideoSaleSplit() {
  return (
    <section className="pb-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="relative flex h-[320px] flex-col justify-center overflow-hidden rounded-2xl p-8.5 text-white">
            <video
              src={VIDEO_SALE_BANNER}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={badgeVariants}
              className="relative z-[2] mb-4 inline-block w-fit rounded-[20px] bg-surface px-4 py-2 text-xs font-semibold text-text-dark"
            >
              Free shipping for exhausts above ₹8,000
            </motion.span>
            <h3 className="relative z-[2] text-[clamp(20px,3vw,30px)] font-heading uppercase tracking-wide">
              Built for the Ride.
              <br />
              Engineered for You.
            </h3>
            <p className="relative z-[2] mt-2.5 max-w-[380px] text-white/80">
              Watch how our gear is tested on real roads, in real conditions, by real riders.
            </p>
          </div>

          <div className="flex h-[320px] flex-col justify-center rounded-2xl bg-gradient-to-br from-primary-dark to-black p-8.5 text-white">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={badgeVariants}
              className="mb-4 inline-block w-fit rounded-[20px] bg-accent px-4 py-2 text-xs font-semibold text-white"
            >
              Limited Time Offer
            </motion.span>
            <h3 className="text-[clamp(20px,3vw,30px)] font-heading uppercase tracking-wide">
              Flat 36% Off
              <br />
              Hazard Module
            </h3>
            <p className="mt-2.5 max-w-[380px] text-white/80">Upgrade your ride&apos;s safety system before the offer disappears.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
