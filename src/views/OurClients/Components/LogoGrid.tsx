import React from 'react'
import Image from 'next/image'

// Import all slider images
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
import slider11 from "@/assets/LandingPage/TrustedBy/slider11.png";
import slider12 from "@/assets/LandingPage/TrustedBy/slider12.png";

export default function LogoGrid() {
  const logos = [
    { id: 1, src: slider1, alt: "Partner 1" },
    { id: 2, src: slider2, alt: "Partner 2" },
    { id: 3, src: slider3, alt: "Partner 3" },
    { id: 4, src: slider4, alt: "Partner 4" },
    { id: 5, src: slider5, alt: "Partner 5" },
    { id: 6, src: slider6, alt: "Partner 6" },
    { id: 7, src: slider7, alt: "Partner 7" },
    { id: 8, src: slider8, alt: "Partner 8" },
    { id: 9, src: slider9, alt: "Partner 9" },
    { id: 10, src: slider10, alt: "Partner 10" },
    { id: 11, src: slider11, alt: "Partner 11" },
    { id: 12, src: slider12, alt: "Partner 12" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-quaternary-green/30">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-left mb-12 text-primary-green">Our Valued Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="logo-card group relative overflow-hidden rounded-lg p-6 flex items-center justify-center bg-white border border-quaternary-green shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-tertiary-green/10 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary-green/10 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="relative z-10 flex items-center justify-center h-40 w-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-40"
                  width={200}
                  height={170}
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
