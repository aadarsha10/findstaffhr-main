import Image from "next/image";
import Pin1 from "@/assets/AboutUs/pin1.svg";
import Pin2 from "@/assets/AboutUs/pin2.svg";
import Mission from "@/assets/AboutUs/mission.svg";
import Vision from "@/assets/AboutUs/vision.svg";
import values from "@/assets/AboutUs/values.png";
import React from "react";
import HighlightText from "@/services/HighlightText";
// import Cards from "@/assets/AboutUs/doubleCards.svg";

export default function DoubleCards() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center py-24">
      <div className="mb-32 flex flex-col items-center justify-start">
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl  font-normal leading-tight tracking-normal flex items-center mb-2">
          <span className=" mr-2">Our core</span>
          <HighlightText
            className="font-semibold px-1 sm:px-2 md:px-4 "
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Values
          </HighlightText>
        </h1>
        <p className="text-[#334155] text-start text-base mt-4">
          Aarohi HR Solutions is a company that values integrity, excellence,
          customer focus, collaboration, ethics, and quality services. These
          core values shape the way the company conducts business and interacts
          with clients. The company prides itself on being honest and fair in
          all of its business dealings. It is committed to upholding high
          ethical standards and treating clients with respect and
          transparency.We are dedicated to consistently providing high-quality
          services to its clients. Overall, Aarohi HR Solutions is a company
          that values integrity, excellence, customer focus, collaboration,
          ethics, and quality services. These values drive the company&apos;s
          business practices and shape the way it interacts with clients.
        </p>
        <Image src={values} alt="Cards" className="mt-10 rounded-xl w-full" />
      </div>

      <div className="w-full h-full relative flex flex-col md:flex-row items-center justify-between gap-52">
        <div className="absolute hidden md:block left-1/2 top-0 transform -translate-x-1/2 w-[532.954px] h-[337.75px] border border-dashed border-[#64748B] rounded-[90%]"></div>

        {/* Mission Card */}
        <div className="w-full h-full self-start">
          <div className="relative w-[400px] h-[282.346px] transform rotate-[4.04deg] p-[38.133px_10.895px_10.895px_10.895px] flex flex-col items-start gap-[10.895px] rounded-[21.79px] border-[0.908px] border-solid border-blue-100 bg-white">
            <Image
              src={Pin1}
              alt="Pin"
              className="absolute -top-5 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-blue-500 bg-blue-100">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Mission} alt="Mission" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">
                  Our Mission
                </h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled
                  workers with companies that need them — safely, fairly, and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="w-full h-full self-end">
          <div className="relative w-[400px] h-[282.346px] transform rotate-[-9.8deg] p-[38.133px_10.895px_10.895px_10.895px] flex flex-col items-start gap-[10.895px] rounded-[21.79px] border-[0.908px] border-solid border-[#E2E8F0] bg-white ">
            <Image
              src={Pin2}
              alt="Pin"
              className="absolute -top-5 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-orange-500 bg-orange-100">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Vision} alt="Vision" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">
                  Our Vision
                </h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled
                  workers with companies that need them — safely, fairly, and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
