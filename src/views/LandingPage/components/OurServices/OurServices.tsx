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
        <p className="text-tertiary-green mb-1 font-primary text-start space-x-2 text-[20px] tracking-wider leading-tight font-semibold">
          Our services
        </p>
        <div className="text-primary text-start space-x-2 text-[54px] tracking-wider leading-tight font-normal">
          <p className="relative group flex flex-col w-fit font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              End-to-End Solutions
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </p>{" "}
          {/* Title without animation */}
          <span className="inline-block">
            {currentContent === "workers"
              ? "for People searching for Work"
              : "for Dubai Businesses"}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* Description without animation */}
          <p className="text-primary-gray max-w-[831px] text-left font-primary text-[20px] font-normal leading-normal">
            {currentContent === "workers"
              ? "Customized solutions for people looking for work opportunities in Dubai. From Construction to Tourism, from Hospitality to Manufacturing, we all all sectors."
              : "From sourcing skilled workers across Asia to handling documentation, visas, and relocation—FindStaff takes care of the entire hiring process, so you don't have to."}
          </p>

          <div className="flex items-center gap-4">
            <p
              className={`min-w-[106px] text-[18px] font-primary font-normal leading-normal ${
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
                      ? "bg-[#334155] translate-x-0"
                      : "bg-secondary-green translate-x-[39px]"
                  }`}
                ></div>
              </div>
            </button>
            <p
              className={`min-w-[136px] text-[18px] font-primary leading-normal ${
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

      {/* Cards grid without animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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
  );
}
