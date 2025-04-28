"use client";
import React, { useState } from "react";

export default function HowItWorksSection() {
  const [isForWorkers, setIsForWorkers] = useState(true);
  const [currentContent, setCurrentContent] = useState<"workers" | "companies">(
    "workers"
  );

  // Handle toggle click
  const handleToggle = () => {
    setIsForWorkers(!isForWorkers);
    setCurrentContent(!isForWorkers ? "workers" : "companies");
  };
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <header className="w-full flex flex-col items-center ">
        <p className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-xl tracking-wider leading-tight font-semibold">
          How It Works
        </p>
        <p className="text-primary text-center space-x-2  text-5xl tracking-wider leading-tight font-normal">
          <span className="relative group font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Simplifying Hiring
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </span>{" "}
          <br />
          For your Long term sustainability
        </p>
        <p className="text-primary-gray max-w-[874px] mt-6  text-center font-primary text-xl font-normal leading-normal">
          At FindStaff, we help you land the job that matches your skills and
          goals. You’ll discover opportunities that truly fit & take the next
          step in your career with confidence.
        </p>
      </header>
      <section className="w-full flex flex-col items-center py-16">
        <div className="flex items-center gap-4">
          <p
            className={`min-w-[106px] text-[18px] font-primary font-normal leading-normal transition-all duration-500 ease-in-out ${
              isForWorkers ? "text-primary-gray font-normal" : "text-gray-300"
            }`}
          >
            For workers
          </p>
          <button onClick={handleToggle}>
            <div
              className={`flex w-[75px] p-[6px] items-center gap-[7.5px] rounded-[749.25px] ${
                !isForWorkers
                  ? "bg-[rgba(98,177,40,0.12)]"
                  : "bg-[rgba(51,65,85,0.12)]"
              }`}
            >
              <div
                className={`w-6 h-6 flex-shrink-0 aspect-square rounded-full ${
                  isForWorkers
                    ? "bg-[#334155] translate-x-0 transition-all duration-500 ease-in-out"
                    : "bg-secondary-green translate-x-[39px] transition-all duration-500 ease-in-out"
                }`}
              ></div>
            </div>
          </button>
          <p
            className={`min-w-[136px] text-[18px] font-primary leading-normal transition-all duration-500 ease-in-out ${
              !isForWorkers
                ? "text-secondary-green font-semibold"
                : "text-gray-300"
            }`}
          >
            For Companies
          </p>
        </div>
      </section>

      <body className="w-full flex flex-col justify-center items-center ">
        <section className="w-full flex justify-center items-center  ">
          <div className="w-2/5 h-full border border-gray-200 rounded-2xl">
            <div>Image</div>
            <div className=" w-full flex flex-col p-6">
              <p className=" font-primary  text-xl font-semibold mb-1">
                Tell us your job requirements
              </p>
              <p className=" font-primary text-primary-gray text-sm font-normal ">
                Share your skills, experience, and what kind of job you&apos;re
                looking for. We take the time to understand your goals and to
                find the right match for your career journey.
              </p>
            </div>
          </div>
          <div className="w-3/5 h-full bg-blue-500"></div>
        </section>
      </body>
    </div>
  );
}
