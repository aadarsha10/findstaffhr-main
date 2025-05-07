import Image from "next/image";
import React from "react";
import Tower from "@/assets/ContactUs/tower.svg";

export default function ContactHeroSection() {
  return (
    <div className="bg-gradient-to-b from-white via-transparent to-secondary-green/10 h-[105vh] w-full">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-16 pb-0 flex flex-col md:flex-row items-center justify-between gap-8">
        <section className="flex flex-col items-start justify-center w-full md:w-1/2 text-left">
          <header className="flex flex-col items-start justify-items-start w-full">
            <h2 className="text-base text-secondary-green font-medium">
              Contact us
            </h2>
            <h1 className="text-[42px] font-semibold text-left">
              Reach Out to Our Team
            </h1>
            <p>
              We&apos;re here to help—whether you&apos;re hiring or job hunting
              in Dubai. Reach us through the details below.
            </p>
            <Image
              src={Tower}
              alt="hero-about-section"
              className="w-full h-full object-cover mt-4"
            />
            <div className="flex flex-col items-start justify-items-start w-full mt-4">
              <p className="text-[#475569] text-sm font-normal">
                Business Hour
              </p>
              <p className="text-[#0F172A] text-sm font-normal">
                Sunday – Friday <br />9 AM to 6 PM (Neapl Standard Time)
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full mt-4">
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">
                  Office Address:
                </p>
                <p className="text-[#0F172A] text-sm font-normal">
                  Aarohi HR Solutions (P) Ltd
                  <br />
                  Basundhara-3, Kathmandu
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">Phone</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  +977 1 4961807
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">Email</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  info@aarohihrsolutions.com
                </p>
              </div>
            </div>
          </header>
        </section>
        <section className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="w-full max-w-[550px] p-8 flex flex-col items-start gap-8 rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            <div className="w-full">
              <h2 className="text-[#020617] text-2xl font-normal">Send Message</h2>
            </div>
            
            <form className="w-full flex flex-col gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName" className="text-[#334155] text-sm font-normal mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-[#334155] text-sm font-normal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="text-[#334155] text-sm font-normal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="subject" className="text-[#334155] text-sm font-normal mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter message subject"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="message" className="text-[#334155] text-sm font-normal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-3 py-3 px-6 bg-secondary-green text-white font-medium rounded-full hover:bg-primary-green transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
