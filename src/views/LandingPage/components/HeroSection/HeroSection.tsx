"use client";

import heroImage from "@/assets/LandingPage/HeroSection/HeroImage.svg";
import { Button } from "@/components/ui/button";
import NameDisplayCards from "./components/NameDisplayCards";

export default function HeroSection() {
  return (
    <div
      className="w-full h-[calc(90vh-88px)] container mx-auto max-w-6xl px-4 md:px-6    flex flex-col items-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="relative z-10 px-4 flex flex-col items-center justify-items-start mt-5">
        <p className="text-primary text-center space-x-2  text-[54px] tracking-wider leading-tight font-normal">
          Bringing{" "}
          <span className="relative group font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Asia&apos;s Top Talent
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </span>{" "}
          to power <br />
          Dubai&apos;s Growth
        </p>
        <p className="text-primary-gray max-w-[874px] mt-6  text-center font-primary text-[20px] font-normal leading-normal">
          We&apos;re an trusted recruitment agency that handle all your visa,
          and relocation support—tailored for Dubai&apos;s fast-paced
          industries.
        </p>
        <div className="mt-10 flex gap-4 items-center">
          <Button
            variant="withArrow"
            className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
            withAnimatedArrow
            arrowSize={28}
          >
            <span>Find your Sector</span>
          </Button>
          <Button
            variant="withoutArrow"
            className="h-14 w-auto px-4 py-3  relative overflow-hidden font-primary text-sm font-normal group"
          >
            <span>Talk to Our Team</span>
          </Button>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        <NameDisplayCards />
      </div>
    </div>
  );
}
