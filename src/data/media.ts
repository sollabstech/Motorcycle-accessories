/**
 * Real photos sourced from Unsplash (unsplash.com, free license) and one video
 * from Pexels (pexels.com, free license), fetched and verified at build time.
 * Placeholder content only — swap for your own product photography later.
 */
function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;
}

export const IMG = {
  highwayRider: unsplash("1698306757374-58cd76868b5e"),
  dirtBikeField: unsplash("1637431124792-1b7a4b1fdccd"),
  dayRiderHelmet: unsplash("1600497934947-23786a93f382"),
  jacketAction: unsplash("1612014206760-b942d390bb04"),
  leatherJacketStanding: unsplash("1654720110542-dddee085756f"),
  motocrossGreen: unsplash("1619369321561-8e69104a2ebd"),
  exhaustCloseup: unsplash("1672626923169-dae917c72864"),
  glovesBoots: unsplash("1605669226801-86285dacf048"),
  jacketRider: unsplash("1558975355-c31d06c2f254"),
  helmetRedBlack: unsplash("1590506995460-d0d9892b54da"),
  workshopGear: unsplash("1636761358757-0a616eb9e17e"),
};

export const HERO_IMAGES = [IMG.highwayRider, IMG.dirtBikeField, IMG.dayRiderHelmet];

/** Autoplay hero background videos (Pexels, free license) — HERO_IMAGES above are used as <video poster> while these load. */
export const HERO_VIDEOS = [
  "https://videos.pexels.com/video-files/10439710/10439710-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/5803633/5803633-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/4922590/4922590-hd_1920_1080_30fps.mp4",
];

export const BIKE_BRAND_IMAGES: Record<string, string> = {
  Kawasaki: IMG.motocrossGreen,
  KTM: IMG.dirtBikeField,
  Hero: IMG.dayRiderHelmet,
  "Royal Enfield": IMG.leatherJacketStanding,
  Honda: IMG.highwayRider,
  Yamaha: IMG.jacketAction,
  Triumph: IMG.jacketRider,
  TVS: IMG.helmetRedBlack,
  Bajaj: IMG.exhaustCloseup,
  BMW: IMG.workshopGear,
};

export const PRODUCT_IMAGES: Record<string, string> = {
  p1: IMG.leatherJacketStanding,
  p2: IMG.helmetRedBlack,
  p3: IMG.exhaustCloseup,
  p4: IMG.workshopGear,
  p5: IMG.glovesBoots,
  p6: IMG.dayRiderHelmet,
  p7: IMG.motocrossGreen,
  p8: IMG.jacketRider,
};

export const BLOG_IMAGES = [IMG.workshopGear, IMG.leatherJacketStanding, IMG.highwayRider];

export const COLLECTION_BANNER_IMAGES = [IMG.motocrossGreen, IMG.dirtBikeField, IMG.dayRiderHelmet];

export const BRAND_BANNER_IMAGES = [IMG.leatherJacketStanding, IMG.helmetRedBlack, IMG.workshopGear];

/** Short autoplay video clips (Pexels, free license) for the brand spotlight banners. */
export const BRAND_BANNER_VIDEOS = [
  "https://videos.pexels.com/video-files/4922672/4922672-sd_960_540_30fps.mp4",
  "https://videos.pexels.com/video-files/5803520/5803520-sd_960_540_25fps.mp4",
  "https://videos.pexels.com/video-files/3191901/3191901-sd_960_540_25fps.mp4",
];

export const INSTAGRAM_IMAGES = [
  IMG.highwayRider,
  IMG.dirtBikeField,
  IMG.dayRiderHelmet,
  IMG.jacketAction,
  IMG.leatherJacketStanding,
  IMG.motocrossGreen,
  IMG.exhaustCloseup,
  IMG.glovesBoots,
  IMG.jacketRider,
  IMG.helmetRedBlack,
];

export const PROMO_TILE_IMAGES = [IMG.exhaustCloseup, IMG.jacketAction, IMG.motocrossGreen];

export const VIDEO_SALE_BANNER = "https://videos.pexels.com/video-files/5195174/5195174-uhd_1440_2732_25fps.mp4";

export const GLOW_TILE_GIF = "https://media.giphy.com/media/6soFKwjOTewmN4nEIZ/giphy.gif";
