import Image from "next/image";
import React from "react";

interface OurServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function OurServiceCard({
  title,
  description,
  imageUrl,
}: OurServiceCardProps) {
  return (
    <div className="group">
      <div className="relative rounded-[24px] p-[2px] transition-all duration-300 ease-in-out overflow-hidden">
        {/* Gradient border that shows on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#E9EEF3] to-[#06C53C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"
          aria-hidden="true"
        />

        {/* Card content */}
        <div className="relative flex flex-col justify-center items-start flex-1 bg-white rounded-[23px] overflow-hidden border border-[#E2E8F0] h-full z-10">
          <div className="w-full h-[160px] rounded-t-[22px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={160}
              height={160}
            />
          </div>
          <div className="p-6">
            <h3 className="self-stretch font-primary text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#06C53C] transition-colors duration-300">
              {title}
            </h3>
            <p className="self-stretch text-[#334155] font-primary text-sm font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
