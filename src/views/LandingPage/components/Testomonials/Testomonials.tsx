"use client";
import React, { useState } from "react";
import TestomonialSlide from "./Components/TestomonialSlide";
import HighlightText from "@/services/HighlightText";

export default function Testomonials() {
  const [isForCompanies, setIsForCompanies] = useState(true);

  // Handle toggle click
  const handleToggle = () => {
    setIsForCompanies((prev) => !prev);
  };
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full">
      <header className="w-full flex flex-col items-center">
        <h2 className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
          Testimonials
        </h2>
        <h1 className="text-primary text-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          <HighlightText
            className="font-semibold px-2 md:px-4 text-start"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Trusted by Employers
          </HighlightText>
          <br />
          Valued by Workers.
        </h1>
        <p className="text-primary-gray max-w-[874px] mt-4 md:mt-6 text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal">
          We&apos;re proud to have helped businesses grow and individuals
          achieve life-changing opportunities. Here&apos;s what they have to say
          about working with FindStaff.
        </p>
      </header>
      <section className="w-full flex flex-col items-center pt-8 md:pt-16">
        <div className="flex items-center gap-2 md:gap-4">
          <p
            className={`min-w-[80px] md:min-w-[106px] text-sm md:text-[18px] font-primary font-normal leading-normal transition-all duration-500 ease-in-out ${
              isForCompanies ? "text-primary-gray font-normal" : "text-gray-300"
            }`}
          >
            Companies
          </p>
          <button onClick={handleToggle}>
            <div
              className={`flex w-[60px] md:w-[75px] p-[4px] md:p-[6px] items-center gap-[5px] md:gap-[7.5px] rounded-[749.25px] ${
                !isForCompanies
                  ? "bg-[rgba(98,177,40,0.12)]"
                  : "bg-[rgba(51,65,85,0.12)]"
              }`}
            >
              <div
                className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 aspect-square rounded-full ${
                  isForCompanies
                    ? "bg-[#334155] translate-x-0 transition-all duration-500 ease-in-out"
                    : "bg-secondary-green translate-x-[30px] md:translate-x-[39px] transition-all duration-500 ease-in-out"
                }`}
              ></div>
            </div>
          </button>
          <p
            className={`min-w-[100px] md:min-w-[136px] text-sm md:text-[18px] font-primary leading-normal transition-all duration-500 ease-in-out ${
              !isForCompanies
                ? "text-secondary-green font-semibold"
                : "text-gray-300"
            }`}
          >
            Employees
          </p>
        </div>

        <div className="w-full mt-6 md:mt-10">
          <TestomonialSlide isForCompanies={isForCompanies} />
        </div>
      </section>
    </div>
  );
}
