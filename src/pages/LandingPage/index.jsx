import HeroSection from "./HeroSection";
import ExampleCarousel from "./ExampleCarousel";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import FeatureSection from "./FeatureSection";
import PillarsSection from "./PillarsSection";
import WhySection from "./WhySection";

const LandingPage = () => {
  return (
    <div className="relative font-manrope">
      <div className="-z-10 absolute top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange-dark from-3% to-brand-gray/5 to-50% h-full w-full"/>
      <NavBar sticky="sticky" />
      <HeroSection />
      <FeatureSection />
      <ExampleCarousel />
      <PillarsSection />
      <WhySection />
      <Footer />
    </div>
  );
};

export default LandingPage;
