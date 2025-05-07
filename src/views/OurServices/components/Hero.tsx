import Image from 'next/image'
import React from 'react'
import bottomImage from "@/assets/Services-assets/bottomImage.svg";
import HighlightText from '@/services/HighlightText';

interface HeroProps {
  highlightText: string;
  subtitle: string;
  description: string;
}

export default function Hero({ highlightText, subtitle, description }: HeroProps) {
  return (
    <div
      className="h-auto w-full relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(17, 188, 66, 0.00) 13.38%, rgba(17, 188, 66, 0.15) 95.29%)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 mb-24">
        <header className="w-full flex flex-col items-center mb-8 md:mb-16">
          <h2 className="text-tertiary-green mb-1 font-primary text-center space-x-2 text-base md:text-xl tracking-wider leading-tight font-semibold">
            Our services
          </h2>
          <div className="text-primary text-center space-x-2 text-3xl md:text-4xl lg:text-5xl tracking-wider leading-tight font-normal">
            <h1 className="relative group flex flex-col w-fit font-semibold overflow-hidden">
              <HighlightText
                className="font-semibold px-2 md:px-4 text-center"
                highlightColor="bg-tertiary-green"
                duration={700}
                delayAnimation={700}
              >
                {highlightText}
              </HighlightText>{" "}
            </h1>{" "}
            <p className=" mt-2 md:mt-0 h-8 sm:h-auto">
              <span
                className={` whitespace-normal sm:whitespace-nowrap text-3xl md:text-4xl lg:text-5xltransition-opacity duration-500 ease-in-out max-w-[300px] sm:max-w-[300px] `}
              >
                {subtitle}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            {" "}
            <p
              className={`text-primary-gray max-w-4xl  font-primary text-base  font-normal leading-normal  `}
            >
              {description}
            </p>
          </div>
        </header>
        <Image
          src={bottomImage}
          alt="Bottom decoration"
          className="w-full absolute bottom-0 left-0"
        />
      </div>
    </div>
  )
}
