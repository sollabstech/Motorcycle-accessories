import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopByBike from "@/components/ShopByBike";
import CollectionBanners from "@/components/CollectionBanners";
import BrandBanners from "@/components/BrandBanners";
import NewLaunch from "@/components/NewLaunch";
import PromoTiles from "@/components/PromoTiles";
import VideoSaleSplit from "@/components/VideoSaleSplit";
import GlowTiles from "@/components/GlowTiles";
import GearPills from "@/components/GearPills";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import InstagramFeed from "@/components/InstagramFeed";
import RecentlyViewed from "@/components/RecentlyViewed";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ShopByBike />
        <CollectionBanners />
        <BrandBanners />
        <NewLaunch />
        <PromoTiles />
        <VideoSaleSplit />
        <GlowTiles />
        <GearPills />
        <Testimonials />
        <Blog />
        <InstagramFeed />
        <RecentlyViewed />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
