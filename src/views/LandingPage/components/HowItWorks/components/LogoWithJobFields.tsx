"use client";
import Image from "next/image";
import React from "react";
import Line1 from "../../../../../assets/LandingPage/HowItWorks/Line1.svg";
import Line2 from "../../../../../assets/LandingPage/HowItWorks/Line2.svg";
import Line3 from "../../../../../assets/LandingPage/HowItWorks/Line3.svg";
import Line4 from "../../../../../assets/LandingPage/HowItWorks/Line4.svg";
import Logo from "../../../../../assets/Navbar/Logo.svg";

export default function LogoWithJobFields() {
  return (
    <div className="absolute inline-flex flex-col items-center gap-10 group">
      {/* Logo in separate div with higher z-index */}
      <div className="relative z-50 p-2 rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.2),0_1px_4px_0_rgba(0,0,0,0.1)]">
        <Image src={Logo} alt="Logo" width={120} height={35} />
      </div>

      {/* Top-left line */}
      <Image
        src={Line1}
        alt="Line 1"
        className="absolute top-6 left-0 transform -translate-x-full -translate-y-full z-0 group-hover:scale-[1.2] transition-transform duration-300"
        width={60}
        height={60}
      />
      <p className="absolute -top-4 -left-28 transform -translate-x-[5%] -translate-y-[120%] z-50 text-primary-gray text-sm font-normal leading-normal bg-gradient-to-t from-secondary-green to-white/75 rounded-xl px-3 py-2 text-white rotate-[5deg] shadow-2xl group-hover:scale-[1.2] transition-transform duration-300">
        Construction
      </p>

      {/* Top-right line */}
      <Image
        src={Line2}
        alt="Line 2"
        className="absolute top-6 right-0 transform translate-x-full -translate-y-full z-0 group-hover:scale-[1.2] transition-transform duration-300"
        width={60}
        height={60}
      />
      <p className="absolute -top-4 -right-32 transform -translate-x-[5%] -translate-y-[120%] z-50 text-primary-gray text-sm font-normal leading-normal bg-gradient-to-t from-[#E11D48] to-white/75 rounded-xl px-3 py-2 text-white -rotate-[5deg] shadow-2xl group-hover:scale-[1.2] transition-transform duration-300">
        Domestic & Care Service
      </p>

      {/* Bottom-left line */}
      <Image
        src={Line3}
        alt="Line 3"
        className="absolute bottom-10 left-12 transform -translate-x-full translate-y-full scale-x-[-1] z-0 group-hover:scale-x-[-1.2] transition-transform duration-300"
        width={110}
        height={110}
      />
      <p className="absolute -bottom-[105px] -left-28 transform -translate-x-[5%] -translate-y-[120%] z-50 text-primary-gray text-sm font-normal leading-normal bg-gradient-to-b from-[#D97706] to-white/75 rounded-xl px-3 py-2 text-white shadow-2xl group-hover:scale-[1.2] transition-transform duration-300">
        Tourism
      </p>

      {/* Bottom-right line */}
      <Image
        src={Line4}
        alt="Line 4"
        className="absolute bottom-12 right-12 transform translate-x-full translate-y-full scale-x-[-1] z-0 group-hover:scale-x-[-1.2] transition-transform duration-300"
        width={110}
        height={100}
      />
      <p className="absolute -bottom-[105px] -right-32 transform -translate-x-[5%] -translate-y-[120%] z-50 text-primary-gray text-sm font-normal leading-normal bg-gradient-to-b from-[#9333EA] to-white/65 rounded-xl px-3 py-2 text-white shadow-2xl group-hover:scale-[1.2] transition-transform duration-300 rotate-[5deg]">
        Hospitality
      </p>
    </div>
  );
}
