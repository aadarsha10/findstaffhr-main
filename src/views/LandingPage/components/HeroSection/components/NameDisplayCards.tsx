import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
// Import logos from assets
import cursor1 from "@/assets/LandingPage/HeroSection/cursor1.svg";
import cursor2 from "@/assets/LandingPage/HeroSection/cursor2.svg";
import cursor3 from "@/assets/LandingPage/HeroSection/cursor3.svg";
import cursor4 from "@/assets/LandingPage/HeroSection/cursor4.svg";

interface NameCardProps {
  name: string;
  field: string;
  rotation: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  bgColorClass: string;
  avatarUrl: string;
  logoSrc: StaticImageData;
}

const NameCard: React.FC<NameCardProps> = ({
  name,
  field,
  rotation,
  position,
  bgColorClass,
  avatarUrl,
  logoSrc,
}) => {
  const positionClasses = {
    "top-left": "absolute top-8 -left-44",
    "top-right": "absolute top-8 -right-44",
    "bottom-left": "absolute bottom-96 -left-44",
    "bottom-right": "absolute bottom-96 -right-44",
  };

  const avatarPositionClasses = {
    "top-left": "absolute -bottom-12 -right-12",
    "top-right": "absolute -bottom-12 -left-12",
    "bottom-left": "absolute -top-12 -right-12",
    "bottom-right": "absolute -top-12 -left-12",
  };

  const logoPositionClasses = {
    "top-left": "absolute -bottom-20 -right-20",
    "top-right": "absolute -bottom-20 -left-20",
    "bottom-left": "absolute -top-20 -right-20",
    "bottom-right": "absolute -top-20 -left-20",
  };

  return (
    <div className={`${positionClasses[position]}`}>
      {/* Name Card */}
      <div
        className={`inline-flex p-3 flex-col items-start rounded-xl border-2 border-white shadow-lg ${bgColorClass}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="flex items-center gap-2">
          <p className="text-white font-primary text-[12px] font-semibold">
            {name}
          </p>
        </div>
        <p className="text-white font-primary text-[12px] font-normal">
          {field}
        </p>
      </div>

      {/* Avatar */}
      <div
        className={`${avatarPositionClasses[position]} w-[42px] h-[42px] rounded-full border-2 border-white bg-gray-300 bg-center bg-cover bg-no-repeat overflow-hidden`}
        style={{
          transform: `rotate(${rotation * 0.8}deg)`,
          backgroundImage: `url(${avatarUrl})`,
        }}
      >
        {/* Removing the Image component to use background-image instead */}
      </div>

      {/* arrow */}
      <div className={`${logoPositionClasses[position]} w-10 h-10`}>
        <Image src={logoSrc} alt="Logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default function NameDisplayCards() {
  const nameData = [
    {
      name: "Kshitiz Baniya",
      field: "Hospitality",
      rotation: 7,
      position: "top-left" as const,
      bgColorClass: "bg-[#F43F5E]",
      avatarUrl:
        "https://images.unsplash.com/photo-1566810039093-63307ce3f6b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGVzfGVufDB8fDB8fHww",
      logoSrc: cursor1,
    },
    {
      name: "Jeevan Thapa",
      field: "Tourism",
      rotation: -7,
      position: "top-right" as const,
      bgColorClass: "bg-[#F59E0B]",
      avatarUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200",
      logoSrc: cursor3,
    },
    {
      name: "Maneer Pandey",
      field: "Construction",
      rotation: -7,
      position: "bottom-left" as const,
      bgColorClass: "bg-[#11BC42]",
      avatarUrl:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200",
      logoSrc: cursor4,
    },
    {
      name: "Manisha Tanden",
      field: "Home Care",
      rotation: 7,
      position: "bottom-right" as const,
      bgColorClass: "bg-[#A855F7]",
      avatarUrl:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logoSrc: cursor2,
    },
  ];

  return (
    <div className="w-full relative" style={{ height: "100vh" }}>
      {nameData.map((data, index) => (
        <NameCard
          key={index}
          name={data.name}
          field={data.field}
          rotation={data.rotation}
          position={data.position}
          bgColorClass={data.bgColorClass}
          avatarUrl={data.avatarUrl}
          logoSrc={data.logoSrc}
        />
      ))}
    </div>
  );
}
