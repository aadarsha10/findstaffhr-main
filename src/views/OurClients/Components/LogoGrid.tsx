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
import slider13 from "@/assets/LandingPage/TrustedBy/slider13.png";
import slider14 from "@/assets/LandingPage/TrustedBy/slider14.png";
import slider15 from "@/assets/LandingPage/TrustedBy/slider15.png";
import slider16 from "@/assets/LandingPage/TrustedBy/slider16.png";
import slider17 from "@/assets/LandingPage/TrustedBy/slider17.png";
import slider18 from "@/assets/LandingPage/TrustedBy/slider18.png";
import slider19 from "@/assets/LandingPage/TrustedBy/slider19.png";
import slider20 from "@/assets/LandingPage/TrustedBy/slider20.png";
import slider21 from "@/assets/LandingPage/TrustedBy/slider21.png";
import slider22 from "@/assets/LandingPage/TrustedBy/slider22.png";
import slider23 from "@/assets/LandingPage/TrustedBy/slider23.png";
import slider24 from "@/assets/LandingPage/TrustedBy/slider24.png";
import slider25 from "@/assets/LandingPage/TrustedBy/slider25.png";
import slider26 from "@/assets/LandingPage/TrustedBy/slider26.png";
import slider27 from "@/assets/LandingPage/TrustedBy/slider27.png";
import slider28 from "@/assets/LandingPage/TrustedBy/slider28.png";
import slider29 from "@/assets/LandingPage/TrustedBy/slider29.png";
import slider30 from "@/assets/LandingPage/TrustedBy/slider30.png";
import slider31 from "@/assets/LandingPage/TrustedBy/slider31.png";
import slider32 from "@/assets/LandingPage/TrustedBy/slider32.png";
import slider33 from "@/assets/LandingPage/TrustedBy/slider33.png";
import slider34 from "@/assets/LandingPage/TrustedBy/slider34.png";
import slider35 from "@/assets/LandingPage/TrustedBy/slider35.png";
import slider36 from "@/assets/LandingPage/TrustedBy/slider36.png";
import slider37 from "@/assets/LandingPage/TrustedBy/slider37.png";
import slider38 from "@/assets/LandingPage/TrustedBy/slider38.png";
import slider39 from "@/assets/LandingPage/TrustedBy/slider39.png";
import slider40 from "@/assets/LandingPage/TrustedBy/slider40.png";
import slider41 from "@/assets/LandingPage/TrustedBy/slider41.png";
import slider42 from "@/assets/LandingPage/TrustedBy/slider42.png";
import slider43 from "@/assets/LandingPage/TrustedBy/slider43.png";
import slider44 from "@/assets/LandingPage/TrustedBy/slider44.png";
import slider45 from "@/assets/LandingPage/TrustedBy/slider45.png";
import slider46 from "@/assets/LandingPage/TrustedBy/slider46.png";
import slider47 from "@/assets/LandingPage/TrustedBy/slider47.png";
import slider48 from "@/assets/LandingPage/TrustedBy/slider48.png";
import slider49 from "@/assets/LandingPage/TrustedBy/slider49.png";
import slider50 from "@/assets/LandingPage/TrustedBy/slider50.png";
import slider51 from "@/assets/LandingPage/TrustedBy/slider51.png";
import slider52 from "@/assets/LandingPage/TrustedBy/slider52.png";
import slider53 from "@/assets/LandingPage/TrustedBy/slider53.png";
import slider54 from "@/assets/LandingPage/TrustedBy/slider54.png";
import slider55 from "@/assets/LandingPage/TrustedBy/slider55.png";
import slider56 from "@/assets/LandingPage/TrustedBy/slider56.png";
import slider57 from "@/assets/LandingPage/TrustedBy/slider57.png";
import slider58 from "@/assets/LandingPage/TrustedBy/slider58.png";


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
    { id: 13, src: slider13, alt: "Partner 13" },
    { id: 14, src: slider14, alt: "Partner 14" },
    { id: 15, src: slider15, alt: "Partner 15" },
    { id: 16, src: slider16, alt: "Partner 16" },
    { id: 17, src: slider17, alt: "Partner 17" },
    { id: 18, src: slider18, alt: "Partner 18" },
    { id: 19, src: slider19, alt: "Partner 19" },
    { id: 20, src: slider20, alt: "Partner 20" },
    { id: 21, src: slider21, alt: "Partner 21" },
    { id: 22, src: slider22, alt: "Partner 22" },
    { id: 23, src: slider23, alt: "Partner 23" },
    { id: 24, src: slider24, alt: "Partner 24" },
    { id: 25, src: slider25, alt: "Partner 25" },
    { id: 26, src: slider26, alt: "Partner 26" },
    { id: 27, src: slider27, alt: "Partner 27" },
    { id: 28, src: slider28, alt: "Partner 28" },
    { id: 29, src: slider29, alt: "Partner 29" },
    { id: 30, src: slider30, alt: "Partner 30" },
    { id: 31, src: slider31, alt: "Partner 31" },
    { id: 32, src: slider32, alt: "Partner 32" },
    { id: 33, src: slider33, alt: "Partner 33" },
    { id: 34, src: slider34, alt: "Partner 34" },
    { id: 35, src: slider35, alt: "Partner 35" },
    { id: 36, src: slider36, alt: "Partner 36" },
    { id: 37, src: slider37, alt: "Partner 37" },
    { id: 38, src: slider38, alt: "Partner 38" },
    { id: 39, src: slider39, alt: "Partner 39" },
    { id: 40, src: slider40, alt: "Partner 40" },
    { id: 41, src: slider41, alt: "Partner 41" },
    { id: 42, src: slider42, alt: "Partner 42" },
    { id: 43, src: slider43, alt: "Partner 43" },
    { id: 44, src: slider44, alt: "Partner 44" },
    { id: 45, src: slider45, alt: "Partner 45" },
    { id: 46, src: slider46, alt: "Partner 46" },
    { id: 47, src: slider47, alt: "Partner 47" },
    { id: 48, src: slider48, alt: "Partner 48" },
    { id: 49, src: slider49, alt: "Partner 49" },
    { id: 50, src: slider50, alt: "Partner 50" }, 
    { id: 51, src: slider51, alt: "Partner 51" },
    { id: 52, src: slider52, alt: "Partner 52" },
    { id: 53, src: slider53, alt: "Partner 53" },
    { id: 54, src: slider54, alt: "Partner 54" },
    { id: 55, src: slider55, alt: "Partner 55" },
    { id: 56, src: slider56, alt: "Partner 56" },
    { id: 57, src: slider57, alt: "Partner 57" },
    { id: 58, src: slider58, alt: "Partner 58" },
    ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-quaternary-green/30">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-left mb-12 text-primary-green">Our Valued Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="logo-card bg-primary-green/30 group relative overflow-hidden rounded-lg p-6 flex items-center justify-center border border-quaternary-green shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-tertiary-green rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-tertiary-green rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              
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
