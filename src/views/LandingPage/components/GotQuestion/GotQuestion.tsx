import React from "react";
import Image from "next/image";
import serviceCall from "@/assets/LandingPage/GotAnswers/service-call.svg";

export default function GotQuestion() {
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex  py-24 w-full">
      <div className="w-1/2 h-full flex flex-col gap-16 items-start justify-between">
        <header className="w-full flex flex-col items-start">
          <p className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-xl tracking-wider leading-tight font-semibold">
            Got Questions?
          </p>
          <p className="text-primary text-center space-x-2 text-5xl tracking-wider leading-tight font-normal">
            <span className="relative group font-semibold px-4 overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
                We’ve Got Answers
              </span>
              <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
            </span>{" "}
          </p>
          <p className="text-primary-gray max-w-[874px] mt-2 text-start font-primary text-base font-normal leading-normal">
            Everything You Need to Know
          </p>
        </header>
        <section>
          <Image
            src={serviceCall}
            alt="Got Question"
            height={252}
            width={298}
          />
        </section>
      </div>
      <div className="w-1/2 h-80 flex items-center justify-center bg-red-500"></div>
    </div>
  );
}
