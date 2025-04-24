import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import TrustedBy from "./components/TrustedBy/TrustedBy";

export default function LandingPage() {
  return (
    <div className="flex flex-col  py-16">
      <HeroSection />
      <TrustedBy />
    </div>
  );
}
