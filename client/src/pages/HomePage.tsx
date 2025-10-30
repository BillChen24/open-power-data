import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import LatestDataSection from "@/components/LatestDataSection";
import CountryGallery from "@/components/CountryGallery";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <LatestDataSection />
        <CountryGallery />
      </main>
      <Footer />
    </div>
  );
}
