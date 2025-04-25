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
      <div
        className="relative rounded-[24px] p-[2px] transition-all duration-300 ease-in-out"
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
        <div className="flex flex-col justify-center items-start flex-1 bg-white rounded-[23px] overflow-hidden relative border border-[#E2E8F0]">
          <div
            className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="p-6">
            <h3 className="self-stretch font-primary text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out group-hover:text-[#06C53C]">
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
