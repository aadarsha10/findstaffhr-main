import HighlightText from "@/services/HighlightText";
import Image from "next/image";
import React from "react";
import Tower from "@/assets/ContactUs/tower.svg";

export default function ContactHeroSection() {
  return (
    <div className=" bg-gradient-to-b from-white via-transparent to-secondary-green/10 w-full h-full">
      <div className=" container mx-auto max-w-7xl px-4 md:px-6 py-16 flex w-full h-full flex-col md:flex-row items-center justify-between gap-8 w-full">
        <section className="flex flex-col items-start justify-center w-full md:w-1/2 text-left">
          <header className="flex flex-col items-start justify-items-start  w-full  ">
            <h2 className="text-base text-secondary-green  font-medium">
              Contact us
            </h2>
            <h1 className="text-[42px] font-semibold text-left">
              Reach Out to Our Team
            </h1>
            <p>
              We&apos;re here to help—whether you're hiring or job hunting in
              Dubai. Reach us through the details below.
            </p>
            <Image
              src={Tower}
              alt="hero-about-section"
              className="w-full h-full object-cover mt-4"
            />
            <div className="flex flex-col items-start justify-items-start  w-full mt-4 ">
              <p className="text-[#475569] text-sm font-normal">
                Business Hour
              </p>
              <p className="text-[#0F172A] text-sm font-normal">
                Sunday – Friday <br />9 AM to 6 PM (Neapl Standard Time)
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full mt-4 ">
              <div className="flex flex-col items-start justify-items-start  w-full ">
                <p className="text-[#475569] text-sm font-normal mb-2">
                  Office Address:
                </p>
                <p className="text-[#0F172A] text-sm font-normal">
                  Aarohi HR Solutions (P) Ltd
                  <br />
                  Basundhara-3, Kathmandu
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start  w-full ">
                <p className="text-[#475569] text-sm font-normal mb-2">Phone</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  +977 1 4961807
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start  w-full ">
                <p className="text-[#475569] text-sm font-normal mb-2">Email</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  info@aarohihrsolutions.com
                </p>
              </div>
            </div>
          </header>
        </section>
        <section className="flex flex-col items-center justify-center  w-full h-full md:w-1/2">
          <div className="shadow-md w-[550px] h-full">
            <div className="flex flex-col items-start justify-center w-full h-full bg-white p-8 rounded-lg">
              <h2 className="text-base text-secondary-green  font-medium">
                Contact us
              </h2>
              <h1 className="text-[42px] font-semibold text-left">
                Reach Out to Our Team
              </h1>
              <p>
                We&apos;re here to help—whether you're hiring or job hunting in
                Dubai. Reach us through the details below.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
