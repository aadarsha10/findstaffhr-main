"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

import Logo from "../../../../../assets/Navbar/Logo.svg";
import Vector2 from "../../../../../assets/LandingPage/HowItWorks/Vector2.svg";
import Vector1 from "../../../../../assets/LandingPage/HowItWorks/Vector1.svg";
import Vector3 from "../../../../../assets/LandingPage/HowItWorks/Vector3.svg";
import Vector4 from "../../../../../assets/LandingPage/HowItWorks/Vector4.svg";
import Vector5 from "../../../../../assets/LandingPage/HowItWorks/Vector5.svg";
import Vector6 from "../../../../../assets/LandingPage/HowItWorks/Vector6.svg";

export default function LogoWithJobFields() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTopVector, setCurrentTopVector] = useState(Vector3);
  const [currentBottomVector, setCurrentBottomVector] = useState(Vector4);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentTopVector((prev: StaticImageData) =>
          prev === Vector3 ? Vector5 : Vector3
        );
        setCurrentBottomVector((prev: StaticImageData) =>
          prev === Vector4 ? Vector6 : Vector4
        );
      }
    }, 1000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="absolute inline-flex flex-col items-center gap-10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentTopVector(Vector3);
        setCurrentBottomVector(Vector4);
      }}
    >
      {/* Logo in separate div with higher z-index */}
      <div className="relative z-50 h-full w-full p-2 rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.1)] overflow-visible">
        <Image src={Logo} alt="Logo" width={80} height={35} />
        <Image
          src={isHovered ? Vector2 : currentTopVector}
          alt="Avatar"
          width={260}
          className="absolute -top-3 min-w-[180px] -left-11 z-10 transition-opacity duration-500"
          height={260}
        />
        <Image
          src={isHovered ? Vector1 : currentBottomVector}
          alt="Avatar"
          width={260}
          className="absolute -bottom-3 min-w-[180px] -left-11 z-10 transition-opacity duration-500"
          height={260}
        />
        <p className="absolute top-1 -left-36 text-primary-gray text-sm font-primary font-normal leading-normal bg-secondary-green rounded-xl px-3 py-2 text-white shadow-xl">
          Employee
        </p>
        <p className="absolute bottom-0 -right-40 text-primary-gray text-sm font-primary font-normal leading-normal bg-[#9333EA] rounded-xl px-3 py-2 text-white shadow-xl">
          Organization
        </p>
      </div>
    </div>
  );
}
