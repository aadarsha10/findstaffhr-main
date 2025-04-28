"use client";
import Image from "next/image";
import React from "react";
import Frame2 from "../../../../../assets/LandingPage/HowItWorks/Frame2.svg";

export default function FrameImage() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

      <div className="relative w-auto h-auto">
        <Image
          src={Frame2}
          alt="Frame image"
          className="object-contain"
          width={400}
          height={200}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
}
