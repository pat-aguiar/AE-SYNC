import HeroSection from "./HeroSection";
import ExampleCarousel from "./ExampleCarousel";
import Footer from "./Footer";
import NavBar from "./NavBar";
import FeatureSection from "./FeatureSection";
import PilarsSection from "./PilarsSection";

const LandingPage = () => {
  return (
    <div className="relative font-manrope">
      <div className="-z-10 absolute top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange-dark from-3% to-brand-gray/5 to-50% h-full w-full"/>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <ExampleCarousel />
      <PilarsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
