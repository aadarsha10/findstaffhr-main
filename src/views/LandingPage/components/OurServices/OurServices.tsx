"use client";
import React, { useState } from "react";
import OurServiceCard from "./components/OurServiceCard";

// Import service images
import service1 from "@/assets/LandingPage/OurServices/service1.png";
import service2 from "@/assets/LandingPage/OurServices/service2.png";
import service3 from "@/assets/LandingPage/OurServices/service3.png";
import service4 from "@/assets/LandingPage/OurServices/service4.png";
import service5 from "@/assets/LandingPage/OurServices/service5.png";
import service6 from "@/assets/LandingPage/OurServices/service6.png";
import HighlightText from "@/services/highlightText";

export default function OurServices() {
  const [isForWorkers, setIsForWorkers] = useState(true);
  const [currentContent, setCurrentContent] = useState<"workers" | "companies">(
    "workers"
  );

  // Services data for workers
  const workersData = [
    {
      id: 1,
      title: "Skill Assessment & Job finding",
      description:
        "Thorough background checks, trade tests, and interviews to ensure you find the right job.",
      imageUrl: service1.src,
    },
    {
      id: 2,
      title: "International Recruitment",
      description:
        "We find and screen reliable candidates from trusted talent pools across Asia.",
      imageUrl: service2.src,
    },
    {
      id: 3,
      title: "Visa & Work Permit Processing",
      description:
        "We manage the full legal process—Ministry approvals, visas, and documentation.",
      imageUrl: service4.src,
    },
    {
      id: 4,
      title: "Employer Document Preparation",
      description:
        "We prepare all required legal documents—offer letters, contracts, and POAs.",
      imageUrl: service5.src,
    },
    {
      id: 5,
      title: "Relocation & Travel Coordination",
      description:
        "Flight booking, accommodation support, and smooth worker arrival in Dubai.",
      imageUrl: service6.src,
    },
    {
      id: 6,
      title: "Onboarding & Local Support",
      description:
        "Our team ensures workers settle in and are ready to contribute from day one.",
      imageUrl: service3.src,
    },
  ];

  // Services data for companies
  const companiesData = [
    {
      id: 1,
      title: "Talent Sourcing & Screening",
      description:
        "We source pre-vetted, skilled workers from across Asia to match your exact requirements.",
      imageUrl: service3.src,
    },
    {
      id: 2,
      title: "Legal Compliance Management",
      description:
        "We handle all legal requirements and ensure full compliance with UAE labor regulations.",
      imageUrl: service1.src,
    },
    {
      id: 3,
      title: "Visa & Immigration Services",
      description:
        "Complete management of worker visas, permits, and government approvals.",
      imageUrl: service6.src,
    },
    {
      id: 4,
      title: "Documentation & Contracts",
      description:
        "Preparation and processing of all employment contracts and legal documentation.",
      imageUrl: service2.src,
    },
    {
      id: 5,
      title: "Worker Transportation",
      description:
        "Coordinated transportation from home country to Dubai with all logistics handled.",
      imageUrl: service5.src,
    },
    {
      id: 6,
      title: "Workforce Integration",
      description:
        "Seamless onboarding and cultural integration to ensure workers are productive from day one.",
      imageUrl: service4.src,
    },
  ];

  // Handle toggle click
  const handleToggle = () => {
    setIsForWorkers(!isForWorkers);
    setCurrentContent(!isForWorkers ? "workers" : "companies");
  };

  // Get current data based on mode
  const currentData =
    currentContent === "workers" ? workersData : companiesData;

  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <div className="w-full flex flex-col items-start mb-16">
        <h2 className="text-tertiary-green mb-1 font-primary text-start space-x-2 text-xl tracking-wider leading-tight font-semibold">
          Our services
        </h2>
        <div className="text-primary text-start space-x-2 text-5xl tracking-wider leading-tight font-normal">
          <h1 className="relative group flex flex-col w-fit font-semibold  overflow-hidden">
            <HighlightText
              className="font-semibold px-4 text-start"
              highlightColor="bg-tertiary-green"
              duration={700}
              delayAnimation={700}
            >
              End-to-End Solutions
            </HighlightText>{" "}
          </h1>{" "}
          {/* Title with crossfade animation */}
          <span className=" relative min-w-[300px]">
            {/* Workers text */}
            <span
              className={`absolute top-0 left-0 whitespace-nowrap transition-opacity duration-500 ease-in-out ${
                currentContent === "workers" ? "opacity-100" : "opacity-0"
              }`}
            >
              for People searching for Work
            </span>

            {/* Companies text */}
            <span
              className={`absolute top-0 left-0 whitespace-nowrap transition-opacity duration-500 ease-in-out ${
                currentContent === "companies" ? "opacity-100" : "opacity-0"
              }`}
            >
              for Dubai Businesses
            </span>
          </span>
        </div>

        <div className="flex justify-between items-center mt-20">
          {/* Description with crossfade animation */}
          <div className="relative max-w-[831px]">
            {/* Workers description */}
            <p
              className={`text-primary-gray text-left font-primary text-xl font-normal leading-normal absolute transition-opacity duration-500 ease-in-out ${
                currentContent === "workers" ? "opacity-100" : "opacity-0"
              }`}
            >
              Customized solutions for people looking for work opportunities in
              Dubai. From Construction to Tourism, from Hospitality to
              Manufacturing, we all all sectors.
            </p>

            {/* Companies description */}
            <p
              className={`text-primary-gray text-left font-primary text-xl font-normal leading-normal absolute transition-opacity duration-500 ease-in-out ${
                currentContent === "companies" ? "opacity-100" : "opacity-0"
              }`}
            >
              From sourcing skilled workers across Asia to handling
              documentation, visas, and relocation—FindStaff takes care of the
              entire hiring process, so you don&apos;t have to.
            </p>

            {/* Invisible spacer to maintain height */}
            <p className="text-primary-gray text-left font-primary text-xl font-normal leading-normal invisible">
              {currentContent === "workers"
                ? "Customized solutions for people looking for work opportunities in Dubai. From Construction to Tourism, from Hospitality to Manufacturing, we all all sectors."
                : "From sourcing skilled workers across Asia to handling documentation, visas, and relocation—FindStaff takes care of the entire hiring process, so you don't have to."}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p
              className={`min-w-[106px] text-[18px] font-primary font-normal leading-normal transition-all duration-500 ease-in-out ${
                isForWorkers ? "text-primary-gray font-normal" : "text-gray-300"
              }`}
            >
              For workers
            </p>
            <button onClick={handleToggle}>
              <div
                className={`flex w-[75px] p-[6px] items-center gap-[7.5px] rounded-[749.25px] ${
                  !isForWorkers
                    ? "bg-[rgba(98,177,40,0.12)]"
                    : "bg-[rgba(51,65,85,0.12)]"
                }`}
              >
                <div
                  className={`w-6 h-6 flex-shrink-0 aspect-square rounded-full ${
                    isForWorkers
                      ? "bg-[#334155] translate-x-0 transition-all duration-500 ease-in-out"
                      : "bg-secondary-green translate-x-[39px] transition-all duration-500 ease-in-out"
                  }`}
                ></div>
              </div>
            </button>
            <p
              className={`min-w-[136px] text-[18px] font-primary leading-normal transition-all duration-500 ease-in-out ${
                !isForWorkers
                  ? "text-secondary-green font-semibold"
                  : "text-gray-300"
              }`}
            >
              For Companies
            </p>
          </div>
        </div>
      </div>

      {/* Cards grid with crossfade animation */}
      <div className="w-full relative">
        {/* Workers cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "workers" ? "opacity-100" : "opacity-0"
          }`}
        >
          {workersData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Companies cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full absolute inset-0 transition-opacity duration-500 ease-in-out ${
            currentContent === "companies" ? "opacity-100" : "opacity-0"
          }`}
        >
          {companiesData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Invisible spacer grid to maintain height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full invisible">
          {currentData.map((service) => (
            <OurServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
