import Image from "next/image";
import React from "react";
import quote from "@/assets/LandingPage/Testomonials/quote.svg";
import hawai from "@/assets/LandingPage/Testomonials/hawai.svg";

export default function TestomonialSlide() {
  return (
    <div className="w-full max-w-[920px] bg-white rounded-lg p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-stretch gap-6 relative">
      <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10">
        <Image
          src={quote}
          alt="quote"
          width={75}
          height={75}
          className="w-auto h-auto"
        />
      </div>

      <div className="w-full md:w-3/5 flex flex-col justify-center gap-6 md:gap-10 p-4">
        <p className="text-lg md:text-xl font-primary text-primary-gray leading-normal">
          FindStaff made hiring so simple. We had our hotel fully staffed within
          weeks—with skilled, polite workers who were ready to go. They handled
          everything from sourcing to visa paperwork flawlessly.
        </p>
        <p className="text-sm md:text-base font-primary text-secondary-green font-normal leading-normal">
          Operations Manager, Marina Bay Hotel, Dubai
        </p>
      </div>

      <div className="w-full md:w-2/5 bg-quaternary-green rounded-lg p-4 md:p-6 flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src={hawai}
            alt="Hawaii Hotel logo"
            width={140}
            height={144}
            className="w-auto h-auto max-w-[100px] md:max-w-[140px]"
          />
        </div>
      </div>
    </div>
  );
}
