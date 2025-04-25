import HeroSection from "./HeroSection";
import ExampleCarousel from "./ExampleCarousel";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import FeatureSection from "./FeatureSection";
import PillarsSection from "./PillarsSection";
import WhyProfessionalsSection from "./WhyProfessionalsSection";
import WhyCompaniesSection from "./WhyCompaniesSection";

const LandingPage = () => {
  return (
    <div className="relative font-manrope">
      <div className="-z-10 absolute top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange-dark from-3% to-brand-gray/5 to-50% h-full w-full"/>
      <NavBar sticky="sticky" />
      <HeroSection />
      <FeatureSection />
      <ExampleCarousel />
      <WhyProfessionalsSection />
      <PillarsSection />
      <WhyCompaniesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
