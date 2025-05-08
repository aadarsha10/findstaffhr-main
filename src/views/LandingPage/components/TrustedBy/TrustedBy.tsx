"use client";

import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import BackgroundSvg from "@/assets/LandingPage/TrustedBy/Background.svg";

import Image from "next/image";

// Import all slider SVGs
import slider1 from "@/assets/LandingPage/TrustedBy/slider1.png";
import slider2 from "@/assets/LandingPage/TrustedBy/slider2.png";
import slider3 from "@/assets/LandingPage/TrustedBy/slider3.png";
import slider4 from "@/assets/LandingPage/TrustedBy/slider4.png";
import slider5 from "@/assets/LandingPage/TrustedBy/slider5.png";

interface TrustedByProps {
  heading: string;
  headerStyle: string;
  showBackground?: boolean;
  className: string;
}

export default function TrustedBy({
  heading,
  headerStyle,
  showBackground = true,
  className,
}: TrustedByProps) {
  const sliderImages = useMemo(
    () => [slider1, slider2, slider3, slider4, slider5],
    []
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  // @ts-expect-error - known issue with requestAnimationFrame ID typing
  const animationRef = useRef<number>();
  const [itemWidth, setItemWidth] = useState(0);

  const updateSliderPosition = useCallback((): void => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Speed of animation (pixels per frame) - slightly faster for better visibility
    const speed = 0.8;

    // Move continuously to the left (negative direction)
    let newTranslateX = translateX - speed;

    // If we've moved one full set of images to the left, reset position to create infinite loop effect
    const singleSetWidth = itemWidth * sliderImages.length;
    if (singleSetWidth > 0 && Math.abs(newTranslateX) >= singleSetWidth) {
      // Reset by the width of one full set to create seamless loop
      newTranslateX += singleSetWidth;
    }

    setTranslateX(newTranslateX);
    slider.style.transform = `translateX(${newTranslateX}px)`;

    animationRef.current = requestAnimationFrame(updateSliderPosition);
  }, [translateX, itemWidth, sliderImages]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Calculate the width of a single item (including gap)
      const firstItem = slider.querySelector(".slider-item");
      if (firstItem) {
        // Get the width of the item plus the gap (10px from the gap-10 class)
        const calculatedItemWidth =
          firstItem.getBoundingClientRect().width + 40; // 40px for the gap
        setItemWidth(calculatedItemWidth);
      }
    }

    // Start animation
    animationRef.current = requestAnimationFrame(updateSliderPosition);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateSliderPosition]);

  // Add a resize observer to recalculate dimensions if window size changes
  useEffect(() => {
    const handleResize = () => {
      const slider = sliderRef.current;
      if (slider) {
        const firstItem = slider.querySelector(".slider-item");
        if (firstItem) {
          const calculatedItemWidth =
            firstItem.getBoundingClientRect().width + 40;
          setItemWidth(calculatedItemWidth);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundStyles = showBackground
    ? {
        backgroundImage: `url(${BackgroundSvg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "auto",
        minHeight: "246px",
      }
    : {
        minHeight: "180px", // Smaller height when no background
      };

  return (
    <div
      className={`flex flex-col relative w-full -mt-10 ${className}`}
      style={backgroundStyles}
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-6 flex flex-col items-center md:mt-12 mt-16 w-full">
        <div className="w-full">
          <p
            className={`text-[#020617] font-primary ${headerStyle}  text-xl tracking-wide leading-tight font-normal mb-4`}
          >
            {heading}
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
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
              {/* Triple the images to create a more seamless continuous loop */}
              {[...sliderImages, ...sliderImages, ...sliderImages].map(
                (image, index) => (
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
                        style={{maxWidth: "100%", maxHeight: "100%"}}
                        quality={80}
                        loading={index < 5 ? "eager" : "lazy"}
                        sizes="70px"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
