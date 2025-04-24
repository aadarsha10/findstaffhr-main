"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import BackgroundSvg from "@/assets/LandingPage/TrustedBy/Background.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Ellipse1 from "@/assets/LandingPage/TrustedBy/Ellipse1.svg";
import Ellipse2 from "@/assets/LandingPage/TrustedBy/Ellipse2.svg";
import Ellipse3 from "@/assets/LandingPage/TrustedBy/Ellipse3.svg";
import Ellipse4 from "@/assets/LandingPage/TrustedBy/Ellipse4.svg";
import Image from "next/image";

// Import all slider SVGs
import slider1 from "@/assets/LandingPage/TrustedBy/slider1.png";
import slider2 from "@/assets/LandingPage/TrustedBy/slider2.png";
import slider3 from "@/assets/LandingPage/TrustedBy/slider3.png";
import slider4 from "@/assets/LandingPage/TrustedBy/slider4.png";
import slider5 from "@/assets/LandingPage/TrustedBy/slider5.png";
import slider6 from "@/assets/LandingPage/TrustedBy/slider6.png";
import slider7 from "@/assets/LandingPage/TrustedBy/slider7.png";
import slider8 from "@/assets/LandingPage/TrustedBy/slider8.png";
import slider9 from "@/assets/LandingPage/TrustedBy/slider9.png";
import slider10 from "@/assets/LandingPage/TrustedBy/slider10.png";

export default function TrustedBy() {
  const sliderImages = useMemo(
    () => [
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      slider6,
      slider7,
      slider8,
      slider9,
      slider10,
    ],
    []
  );

  const [direction] = useState(false);
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    // Apply linear transition to swiper wrapper
    const swiperEl = document.querySelector(".trusted-slider .swiper-wrapper");
    if (swiperEl) {
      (swiperEl as HTMLElement).style.transitionTimingFunction = "linear";
    }

    // Add fade mask to container
    const swiperContainer = document.querySelector(".trusted-slider");
    if (swiperContainer) {
      (swiperContainer as HTMLElement).style.maskImage =
        "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)";
      (swiperContainer as HTMLElement).style.webkitMaskImage =
        "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)";
    }
  }, []);

  return (
    <div
      className="flex flex-col relative w-full -mt-10"
      style={{
        backgroundImage: `url(${BackgroundSvg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "auto",
        minHeight: "246px",
      }}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-start mt-12 justify-center w-full">
        <p className="text-[#020617] font-primary text-start space-x-2 text-xl tracking-wide leading-tight font-normal">
          Trusted By
        </p>

        <div className="w-full flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            speed={8000}
            loop={true}
            freeMode={true}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: direction,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="trusted-slider w-full"
            style={{ background: "transparent" }}
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-16">
                  <Image
                    src={image.src}
                    alt={`Trusted partner ${index + 1}`}
                    className="object-contain h-auto w-auto"
                    width={70}
                    height={70}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full h-20 flex gap-10 items-center justify-center">
            <div className="flex items-center justify-center ">
              <div className="w-12 h-12 -mr-4 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={Ellipse1.src}
                  alt="Ellipse 1"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 -mr-4 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={Ellipse2.src}
                  alt="Ellipse 2"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 -mr-4 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={Ellipse3.src}
                  alt="Ellipse 3"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 -mr-4 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={Ellipse4.src}
                  alt="Ellipse 4"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className=" text-sm text-[#020617] font-primary font-normal">
                3,000+ Hires <br /> & Placements
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
