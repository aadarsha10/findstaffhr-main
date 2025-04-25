"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import BackgroundSvg from "@/assets/LandingPage/TrustedBy/Background.svg";
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

export default function TrustedBy() {
  const sliderImages = useMemo(
    () => [slider1, slider2, slider3, slider4, slider5],
    []
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [translateX, setTranslateX] = useState(0);
  // @ts-expect-error - known issue with requestAnimationFrame ID typing
  const animationRef = useRef<number>();

  const updateSliderPosition = useCallback((): void => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate the maximum scroll distance once slider is loaded
    const maxScroll = slider.scrollWidth / 2;
    const speed = 3.5; // pixels per frame - increased speed

    // Update position based on direction
    let newTranslateX = translateX + speed * direction;

    // Check if we need to change direction
    if (newTranslateX >= 0) {
      // Reached right edge (start position)
      newTranslateX = 0;
      setDirection(-1);
    } else if (newTranslateX <= -maxScroll) {
      // Reached left edge (full scroll to left)
      newTranslateX = -maxScroll;
      setDirection(1);
    }

    setTranslateX(newTranslateX);
    slider.style.transform = `translateX(${newTranslateX}px)`;

    animationRef.current = requestAnimationFrame(updateSliderPosition);
  }, [direction, translateX]);

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(updateSliderPosition);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateSliderPosition]);

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
          <div
            className="trusted-slider w-full overflow-hidden relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)",
            }}
          >
            <div
              ref={sliderRef}
              className="slider-track flex items-center gap-10 transition-none"
            >
              {/* Double the images to create a seamless loop */}
              {[...sliderImages, ...sliderImages].map((image, index) => (
                <div key={index} className="slider-item flex-shrink-0">
                  <div className="flex items-center justify-center h-16">
                    <Image
                      src={image.src}
                      alt={`Trusted partner ${
                        (index % sliderImages.length) + 1
                      }`}
                      className="object-contain h-auto w-auto grayscale"
                      width={70}
                      height={70}
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

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
