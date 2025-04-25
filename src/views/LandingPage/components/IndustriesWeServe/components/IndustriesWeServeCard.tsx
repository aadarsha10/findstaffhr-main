import React from "react";
import Icon from "@/assets/LandingPage/IndustriesWeServe/icon.svg";
import Image from "next/image";

interface OurServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  jobs: string[];
}

export default function OurServiceCard({
  title,
  description,
  imageUrl,
  jobs,
}: OurServiceCardProps) {
  return (
    <div className="group h-full">
      <div
        className="relative rounded-[24px] p-[2px] transition-all duration-300 ease-in-out h-full"
        style={{
          background: "linear-gradient(to bottom, transparent, transparent)",
          backgroundSize: "100% 100%",
          backgroundPosition: "0 0",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-[24px]"
          style={{
            background:
              "linear-gradient(to bottom,rgb(233, 238, 243), #06C53C)",
            zIndex: -1,
          }}
        />
        <div className="flex flex-col justify-between h-full bg-white rounded-[23px] overflow-hidden relative border border-[#E2E8F0]">
          <div
            className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="self-stretch font-primary text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out group-hover:text-[#06C53C]">
              {title}
            </h3>
            <p className="self-stretch text-[#334155] font-primary text-sm mb-4 font-normal flex-grow">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {jobs.map((job) => (
                <p
                  key={job}
                  className="self-stretch bg-quaternary-green flex items-center gap-2 rounded-full px-2 py-1 text-primary-gray font-primary text-sm font-normal"
                >
                  <Image src={Icon} alt="icon" />
                  {job}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
