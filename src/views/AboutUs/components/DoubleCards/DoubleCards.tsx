import Image from "next/image";
import React from "react";
import Cards from "@/assets/AboutUs/doubleCards.svg";

export default function DoubleCards() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center ">
      <Image src={Cards} alt="" className="w-full h-full" />
    </div>
  );
}
