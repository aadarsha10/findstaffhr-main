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
    <div className="flex flex-col justify-center items-start flex-1 border border-[#E2E8F0] bg-white rounded-[24px]">
      <div
        className="w-full h-[160px]  bg-center bg-no-repeat bg-cover rounded-t-[24px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="self-stretch text-black font-primary text-lg font-semibold mb-2">
          {title}
        </h3>
        <p className="self-stretch text-[#334155] font-primary text-sm font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
