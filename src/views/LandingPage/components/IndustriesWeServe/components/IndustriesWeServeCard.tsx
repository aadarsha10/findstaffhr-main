"use client";
import React, { useState } from "react";
import Icon from "@/assets/LandingPage/IndustriesWeServe/icon.svg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface OurServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  jobs: string[];
}

// Custom Button component
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({ children, className }: CustomButtonProps) => {
  return (
    <button
      className={cn(
        "group/btn bg-gray-100 flex items-center justify-center text-primary-gray rounded-[999px] h-12 w-[160px] pl-[14px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal hover:bg-gray-200 transition-colors duration-300",
        className
      )}
    >
      <span className="min-w-[95px]">{children}</span>
      <div className="ml-3 flex p-5 items-center justify-center rounded-[999px] bg-gray-200 relative overflow-hidden">
        <ArrowUpRight
          className="size-[24px] text-primary-gray absolute transition-all duration-500 delay-[10ms] translate-x-0 translate-y-0 opacity-100 group-hover/btn:translate-x-full group-hover/btn:-translate-y-full group-hover/btn:opacity-0"
          strokeWidth={2.5}
        />
        <ArrowUpRight
          className="size-[24px] text-primary-gray absolute transition-all duration-500 delay-[10ms] -translate-x-full translate-y-full opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
};

export default function OurServiceCard({
  title,
  description,
  imageUrl,
  jobs,
}: OurServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-[24px] p-[2px] transition-all duration-300 ease-in-out h-full"
        style={{
          background: "linear-gradient(to bottom, transparent, transparent)",
          backgroundSize: "100% 100%",
          backgroundPosition: "0 0",
        }}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out rounded-[24px] ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to bottom,rgb(233, 238, 243), #06C53C)",
            zIndex: -1,
          }}
        />
        <div className="flex flex-col h-auto bg-white rounded-[23px] overflow-hidden relative border border-[#E2E8F0]">
          <div
            className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className={`p-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${
              isHovered ? "h-[280px]" : "h-[220px]"
            }`}
          >
            <div className="flex flex-col h-[180px]">
              <h3
                className={`font-primary text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out ${
                  isHovered ? "text-[#06C53C]" : ""
                }`}
              >
                {title}
              </h3>
              <p className="text-[#334155] font-primary text-sm mb-4 font-normal">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {jobs.map((job) => (
                  <p
                    key={job}
                    className="bg-quaternary-green flex items-center gap-2 rounded-full px-2 py-1 text-primary-gray font-primary text-sm font-normal"
                  >
                    <Image src={Icon} alt="icon" />
                    {job}
                  </p>
                ))}
              </div>
            </div>
            <div
              className={`flex gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
                isHovered
                  ? "opacity-100 translate-y-0 h-[48px]"
                  : "opacity-0 translate-y-4 h-0"
              }`}
            >
              <CustomButton>
                <span>Apply for Job</span>
              </CustomButton>
              <CustomButton>
                <span>Request Staff</span>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
