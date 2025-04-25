"use client";
import React, { useState } from "react";
import OverlayImage1 from "@/assets/LandingPage/BestSuitableJob/overlay1.svg";
import OverlayImage2 from "@/assets/LandingPage/BestSuitableJob/overlay2.svg";

export default function BestSuitableJob() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <div className="w-full flex flex-col items-center mb-16">
        <p className="text-primary text-center space-x-2  text-[54px] tracking-wider leading-tight font-normal">
          Finding you{" "}
          <span className="relative group font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Best suitable Job
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </span>{" "}
          with <br />
          skill assessment & preference
        </p>
        <p className="text-primary-gray max-w-[874px] mt-6  text-center font-primary text-[20px] font-normal leading-normal">
          We match your skills and preferences to the roles that fit you best —
          helping you choose with utmost trust, clarity and confidence.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Main image container with background image */}
        <div
          className="w-[1200px] h-[462px] relative transition-all duration-500 ease-in-out bg-center bg-no-repeat bg-contain flex items-center justify-center"
          style={{
            backgroundImage: `url(${
              activeImage === 1 ? OverlayImage1.src : OverlayImage2.src
            })`,
          }}
        >
          {/* Button for first image */}
          {activeImage === 1 && (
            <div
              className="p-4 border border-gray-300 backdrop-blur-[2px] -mt-5 text-white rounded-[16px] transition-all duration-500 ease-in-out flex flex-col gap-2 items-center justify-center shadow-md z-10 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(101deg, rgba(0, 0, 0, 0.16) 1.74%, rgba(0, 0, 0, 0.08) 20.53%, rgba(0, 0, 0, 0.08) 85.18%, rgba(0, 0, 0, 0.16) 100%)",
              }}
            >
              <div className="group min-w-max transition-all duration-700 ease-in-out">
                <button
                  onClick={() => setActiveImage(2)}
                  className="text-[24px] bg-[#F59E0B] group-hover:bg-tertiary-green px-4 py-2 rounded-full font-primary font-normal text-center shadow-sm transition-all duration-700 ease-in-out min-w-max"
                >
                  <span className="flex items-center whitespace-nowrap transition-all duration-700 ease-in-out">
                    Without FindStaff
                    <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      &nbsp;- click me
                    </span>
                  </span>
                </button>
              </div>
              <span className="text-[12px] font-primary text-white max-w-[241px] text-center font-normal leading-normal">
                Find out how Find Staff helps you organize your flow
              </span>
            </div>
          )}

          {/* Button for second image */}
          {activeImage === 2 && (
            <div className="group transition-all duration-700 ease-in-out">
              <button
                onClick={() => setActiveImage(1)}
                className="py-2  px-4 -mt-5 text-white rounded-full group-hover:bg-[#F59E0B]  transition-all duration-700 ease-in-out flex items-center justify-center shadow-md z-10 bg-tertiary-green  group-hover:px-12 min-w-max"
              >
                <span className="flex text-[24px] font-primary font-normal items-center whitespace-nowrap transition-all duration-700 ease-in-out">
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
