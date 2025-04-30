"use client";
import React, { useState } from "react";
import OverlayImage1 from "@/assets/LandingPage/BestSuitableJob/overlay1.svg";
import OverlayImage2 from "@/assets/LandingPage/BestSuitableJob/overlay2.svg";
import HighlightText from "@/services/HighlightText";

export default function BestSuitableJob() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center py-12 md:py-24 w-full">
      <div className="w-full flex flex-col items-center mb-2 md:mb-16">
        <h1 className="text-primary text-center items-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
          Finding you{" "}
          <HighlightText
            className="font-semibold px-2 md:px-4"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Best suitable Job
          </HighlightText>{" "}
          with <br />
          skill assessment & preference
        </h1>
        <p className="text-primary-gray md:max-w-[874px] mt-4 md:mt-6 text-center font-primary text-base md:text-lg lg:text-xl font-normal leading-normal px-2">
          We match your skills and preferences to the roles that fit you best —
          helping you choose with utmost trust, clarity and confidence.
        </p>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Main image container with background image */}
        <div
          className="w-full max-w-[1600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative transition-all duration-300 ease-in-out bg-center bg-no-repeat bg-contain flex items-center justify-center"
          style={{
            backgroundImage: `url(${
              activeImage === 1 ? OverlayImage1.src : OverlayImage2.src
            })`,
            backgroundSize: "contain",
          }}
        >
          {/* Button for first image */}
          {activeImage === 1 && (
            <div
              className="p-3 md:p-4 border border-gray-300 backdrop-blur-[2px] -mt-3 md:-mt-5 text-white rounded-[12px] md:rounded-[16px] transition-all duration-500 ease-in-out flex flex-col gap-1 md:gap-2 items-center justify-center shadow-md z-10 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(101deg, rgba(0, 0, 0, 0.16) 1.74%, rgba(0, 0, 0, 0.08) 20.53%, rgba(0, 0, 0, 0.08) 85.18%, rgba(0, 0, 0, 0.16) 100%)",
              }}
            >
              <div className="group min-w-max transition-all duration-700 ease-in-out">
                <button
                  onClick={() => setActiveImage(2)}
                  className="text-base md:text-xl lg:text-[24px] bg-[#F59E0B] group-hover:bg-tertiary-green px-3 md:px-4 py-1 md:py-2 rounded-full font-primary font-normal text-center shadow-sm transition-all duration-700 ease-in-out min-w-max"
                >
                  <span className="flex items-center whitespace-nowrap transition-all duration-700 ease-in-out">
                    Without FindStaff
                    <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      &nbsp;- click me
                    </span>
                  </span>
                </button>
              </div>
              <span className="text-[10px] md:text-[12px] font-primary text-white max-w-[200px] md:max-w-[241px] text-center font-normal leading-normal">
                Find out how Find Staff helps you organize your flow
              </span>
            </div>
          )}

          {/* Button for second image */}
          {activeImage === 2 && (
            <div className="group transition-all duration-700 ease-in-out">
              <button
                onClick={() => setActiveImage(1)}
                className="py-1 md:py-2 px-3 md:px-4 -mt-3 md:-mt-5 text-white rounded-full group-hover:bg-[#F59E0B] transition-all duration-700 ease-in-out flex items-center justify-center shadow-md z-10 bg-tertiary-green group-hover:px-8 md:group-hover:px-12 min-w-max"
              >
                <span className="flex text-base md:text-xl lg:text-[24px] font-primary font-normal items-center whitespace-nowrap transition-all duration-700 ease-in-out">
                  With FindStaff
                  <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                    &nbsp;- click me
                  </span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
