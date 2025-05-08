import Image from "next/image"
import Pin1 from "@/assets/AboutUs/pin1.svg";
import Pin2 from "@/assets/AboutUs/pin2.svg";
import Mission from "@/assets/AboutUs/mission.svg";
import Vision from "@/assets/AboutUs/vision.svg";
import React from "react";
// import Cards from "@/assets/AboutUs/doubleCards.svg";

export default function DoubleCards() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center py-24">

      <div className="w-full h-full relative flex flex-col md:flex-row items-center justify-between gap-52">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[532.954px] h-[337.75px] border border-dashed border-[#64748B] rounded-[90%]"></div>
        
        {/* Mission Card */}
        <div className="w-full h-full self-start">
          <div className="relative w-[400px] h-[282.346px] transform rotate-[4.04deg] p-[38.133px_10.895px_10.895px_10.895px] flex flex-col items-start gap-[10.895px] rounded-[21.79px] border-[0.908px] border-solid border-[#E2E8F0] bg-white">
            <Image 
              src={Pin1} 
              alt="Pin" 
              className="absolute -top-5 left-1/2 transform -translate-x-1/2"
            />
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-[#D0FBDC] bg-[#E8FDEE]">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Mission} alt="Mission" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">Our Mission</h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled workers with companies that need them — safely, fairly, and efficiently.
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
            <div className="flex w-[380.666px] p-[21.79px] flex-col justify-between items-end flex-1 rounded-[21.79px] border-[0.908px] border-solid border-[#D3A3FF] bg-[#F5EAFF]">
              <div className="flex w-[38.133px] h-[38.133px] transform rotate-[-5.124deg] p-[4.767px] justify-center items-center aspect-[38.13/38.13]">
                <Image src={Vision} alt="Vision" />
              </div>
              <div className="flex flex-col items-start gap-[14.527px] self-stretch">
                <h2 className="text-[#0F172A] text-2xl font-medium">Our Vision</h2>
                <p className="text-[#334155] text-sm font-normal leading-[150%]">
                  To bridge global opportunity gaps by connecting skilled workers with companies that need them — safely, fairly, and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
