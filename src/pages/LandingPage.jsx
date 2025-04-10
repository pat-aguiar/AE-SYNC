import HeroSection from "./HeroSection";
import WhatSection from "./WhatSection";
import Footer from "./Footer";
import NavBar from "./NavBar";
import FeatureSection from "./FeatureSection";

const LandingPage = () => {
  return (
    <div className="relative font-manrope">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      {/* <WhatSection /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
