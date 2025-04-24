import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
export default function LandingPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center p-4 py-16">
      <HeroSection />
    </div>
  );
}
