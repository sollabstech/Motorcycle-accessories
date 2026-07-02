const ITEMS = [
  "FREE SHIPPING ON ORDERS ABOVE ₹3,000",
  <>
    USE CODE <span className="text-accent font-bold animate-pulse-glow">F1000OFF</span> FOR FLAT ₹1000 OFF
  </>,
  "GET FLAT 100% CASHBACK ON SELECT COMBOS",
  "2M+ RIDERS TRUST US NATIONWIDE",
];

function Track() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2.5 px-10">
          <span aria-hidden>●</span> {item}
        </span>
      ))}
    </>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="relative z-[1001] overflow-hidden whitespace-nowrap bg-primary-dark py-2 font-heading text-[12.5px] tracking-wide text-text-on-primary">
      <div className="inline-flex animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
