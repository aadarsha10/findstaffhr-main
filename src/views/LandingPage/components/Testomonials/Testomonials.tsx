"use client";
import React, { useState } from "react";
import TestomonialSlide from "./Components/TestomonialSlide";

export default function Testomonials() {
  const [isForCompanies, setIsForCompanies] = useState(true);

  // Handle toggle click
  const handleToggle = () => {
    setIsForCompanies(!isForCompanies);
  };
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <header className="w-full flex flex-col items-center">
        <p className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-xl tracking-wider leading-tight font-semibold">
          Testimonials
        </p>
        <p className="text-primary text-center space-x-2 text-5xl tracking-wider leading-tight font-normal">
          <span className="relative group font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Trusted by Employers
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </span>{" "}
          <br />
          Valued by Workers.
        </p>
        <p className="text-primary-gray max-w-[874px] mt-6 text-center font-primary text-xl font-normal leading-normal">
          We’re proud to have helped businesses grow and individuals achieve
          life-changing opportunities. Here’s what they have to say about
          working with FindStaff.
        </p>
      </header>
      <section className="w-full flex flex-col items-center py-16">
        <div className="flex items-center gap-4">
          <p
            className={`min-w-[106px] text-[18px] font-primary font-normal leading-normal transition-all duration-500 ease-in-out ${
              isForCompanies ? "text-primary-gray font-normal" : "text-gray-300"
            }`}
          >
            Companies
          </p>
          <button onClick={handleToggle}>
            <div
              className={`flex w-[75px] p-[6px] items-center gap-[7.5px] rounded-[749.25px] ${
                !isForCompanies
                  ? "bg-[rgba(98,177,40,0.12)]"
                  : "bg-[rgba(51,65,85,0.12)]"
              }`}
            >
              <div
                className={`w-6 h-6 flex-shrink-0 aspect-square rounded-full ${
                  isForCompanies
                    ? "bg-[#334155] translate-x-0 transition-all duration-500 ease-in-out"
                    : "bg-secondary-green translate-x-[39px] transition-all duration-500 ease-in-out"
                }`}
              ></div>
            </div>
          </button>
          <p
            className={`min-w-[136px] text-[18px] font-primary leading-normal transition-all duration-500 ease-in-out ${
              !isForCompanies
                ? "text-secondary-green font-semibold"
                : "text-gray-300"
            }`}
          >
            Employees
          </p>
        </div>
      </section>
      <body>
        {/* testominials slide */}
        <TestomonialSlide />
      </body>
    </div>
  );
}
