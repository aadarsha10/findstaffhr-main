import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import BestSuitableJob from "./components/BestSuitableJob/BestSuitableJob";
import OurServices from "./components/OurServices/OurServices";
import IndustriesWeServe from "./components/IndustriesWeServe/IndustriesWeServe";

export default function LandingPage() {
  return (
    <div className="flex flex-col  py-16">
      <HeroSection />
      <TrustedBy />
      <BestSuitableJob />
      <OurServices />
      <IndustriesWeServe />
    </div>
  );
}
