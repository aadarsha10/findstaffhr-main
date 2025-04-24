"use client";

import heroImage from "@/assets/LandingPage/HeroSection/HeroImage.svg";
import { Button } from "@/components/ui/button";
import NameDisplayCards from "./components/NameDisplayCards";

export default function HeroSection() {
  return (
    <div
      className="w-full h-[calc(90vh-88px)] flex flex-col items-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="relative z-10 px-4 flex flex-col items-center justify-items-start mt-5">
        <p className="text-primary text-center space-x-2  text-[54px] tracking-wide leading-tight font-normal">
          Bringing{" "}
          <span className=" font-semibold px-4">Asia&apos;s Top Talent</span> to
          power <br />
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
            <span className="mr-2">Find your Sector</span>
          </Button>
          <Button
            variant="withoutArrow"
            className="h-14 w-auto px-4 py-3  relative overflow-hidden font-primary text-sm font-normal group"
          >
            <span className="mr-2">Talk to Our Team</span>
          </Button>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        <NameDisplayCards />
      </div>
    </div>
  );
}
