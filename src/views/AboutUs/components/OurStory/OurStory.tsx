import HighlightText from "@/services/HighlightText";
import Image from "next/image";
import React from "react";
import Map from "@/assets/AboutUs/map.svg";

export default function OurStory() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
      <header className="text-start flex flex-col items-start justify-start gap-2 mb-24">
        <h2 className="text-primary-gray text-lg font-semibold">Our Story</h2>
        <h1 className="text-primary  text-start font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-5xl mt-16 md:mt-0">
          From Greece to{" "}
          <HighlightText
            className="font-semibold px-1 sm:px-2 md:px-4"
            highlightColor="bg-tertiary-green"
            duration={700}
            delayAnimation={700}
          >
            Global
          </HighlightText>{" "}
          <br />
          <span className="sm:hidden mt-2">
            {" "}
            Connecting Talent with opportunity
          </span>
          <span className="hidden sm:inline mt-2">
            {" "}
            Connecting Talent with opportunity
          </span>
        </h1>
        <p className="text-primary-gray   mt-6 text-start font-primary text-base sm:text-lg md:text-xl font-normal leading-normal">
          Aarohi HR Solutions began in Greece with a mission to connect
          hardworking individuals with global opportunities. <br /> Today, we
          bridge the gap between skilled workers from Asia and growing
          businesses in Global. Through ethical recruitment and transparent
          relocation, we’re empowering lives and supporting industries — one
          placement at a time.
        </p>
      </header>
      <section className="w-full h-full flex items-center justify-center">
        {/* Image */}
        <Image
          src={Map}
          priority
          quality={100}
          alt="Our Story Image"
          className="w-full max-w-5xl h-auto object-cover "
        />
      </section>
    </div>
  );
}
