import { GEAR_CATEGORIES } from "@/data/misc";
import Reveal from "./Reveal";

export default function GearPills() {
  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
          <h2 className="relative font-heading text-[clamp(24px,3vw,36px)] uppercase tracking-wide text-text-dark after:mt-3.5 after:block after:h-1 after:w-[70px] after:rounded-full after:bg-accent">
            Riding Gear
          </h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4.5">
          {GEAR_CATEGORIES.map(({ Icon, label }) => (
            <div key={label} className="group relative flex items-center gap-2.5 overflow-hidden rounded-[30px] bg-surface px-6 py-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
              <Icon className="h-[22px] w-[22px] text-accent" />
              <span className="font-heading text-[12.5px] uppercase tracking-wide">{label}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
