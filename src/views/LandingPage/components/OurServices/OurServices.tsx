import React from "react";

export default function OurServices() {
  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <div className="w-full flex flex-col  items-start mb-16">
        <p className="text-tertiary-green mb-1 font-primary text-start space-x-2  text-[20px] tracking-wider leading-tight font-semibold">
          Our services
        </p>
        <p className="text-primary text-start space-x-2  text-[54px] tracking-wider leading-tight font-normal">
          <p className="relative group flex flex-col w-fit font-semibold px-4 overflow-hidden">
            <span className="relative z-10  group-hover:text-white transition-colors duration-500 ease-in-out">
              End-to-End Solutions
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </p>{" "}
          for People searching for Work
        </p>
        <div className="flex justify-between  items-center mt-6">
          <p className="text-primary-gray max-w-[831px]  text-left font-primary text-[20px] font-normal leading-normal">
            Customized solutions for people looking for work opportunities in
            Dubai. From Construction to Tourism, from Hospitality to
            Manufacturing, we all all sectors.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-primary-gray min-w-[106px] text-[18px] font-normal leading-normal">
              For workers
            </p>
            <div className="flex w-[75px] p-[6px] items-center gap-[7.5px] rounded-[749.25px] bg-[rgba(51,65,85,0.12)]">
              <div className="w-6 h-6 flex-shrink-0 aspect-square bg-[#334155] rounded-full"></div>
            </div>
            <p className="text-primary-gray min-w-[136px] text-[18px] font-normal leading-normal">
              For Companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
