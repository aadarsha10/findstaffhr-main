"use client";
import React, { useState } from "react";
import Icon from "@/assets/LandingPage/IndustriesWeServe/Icon.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface IndustriesWeServeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  jobs: string[];
}

// Custom Button component for industry cards
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({ children, className }: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        "group/btn  bg-gray-100 text-primary-gray rounded-[999px] h-12 w-[160px] pl-[14px] pr-[4px] py-2 hover:bg-gray-200",
        className
      )}
      withAnimatedArrow
      arrowSize={24}
      arrowColor="#64748B"
      arrowContainerClassName=" flex p-5 items-center justify-center rounded-[999px] bg-gray-200 relative overflow-hidden"
    >
      <span className="min-w-[95px]">{children}</span>
    </Button>
  );
};

export default function IndustriesWeServeCard({
  title,
  description,
  imageUrl,
  jobs,
}: IndustriesWeServeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-full rounded-[24px] p-[2px] transition-all duration-500 ease-in-out ${
        isHovered
          ? "bg-gradient-to-b from-[#E9EEF3] to-[#06C53C]"
          : "bg-transparent border border-gray-200"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundClip: "padding-box", // Ensure gradient only covers padding area (border)
      }}
    >
      {/* Card content */}
      <div className="flex flex-col h-full bg-white rounded-[23px] overflow-hidden relative border border-transparent">
        <div
          className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div
          className={`p-6 flex flex-col justify-between transition-all duration-500 ease-in-out ${
            isHovered ? "h-[280px]" : "h-[200px]"
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
            className={`flex gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-100  h-[48px]" : "opacity-0  h-0"
            }`}
          >
            <CustomButton>Apply for Job</CustomButton>
            <CustomButton>Request Staff</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
