import React from "react";
import IndustriesWeServeCard from "./components/IndustriesWeServeCard";
import Industries1 from "@/assets/LandingPage/IndustriesWeServe/industries1.png";
import Industries2 from "@/assets/LandingPage/IndustriesWeServe/industries2.png";
import Industries3 from "@/assets/LandingPage/IndustriesWeServe/industries3.png";
import Industries4 from "@/assets/LandingPage/IndustriesWeServe/industries4.png";
import Industries5 from "@/assets/LandingPage/IndustriesWeServe/industries5.png";
import Industries6 from "@/assets/LandingPage/IndustriesWeServe/industries6.png";

export default function IndustriesWeServe() {
  const industriesData = [
    {
      id: 1,
      title: "Hospitality & Tourism",
      description: "Delivering exceptional guest experiences",
      imageUrl: Industries1.src,
      jobs: [
        "Waiters & Waitresses",
        "Housekeepers",
        "Front Desk Staff",
        "Kitchen Helpers",
        "Baristas",
      ],
    },
    {
      id: 2,
      title: "Construction & Engineering",
      description: "Reliable manpower for your toughest projects",
      imageUrl: Industries2.src,
      jobs: [
        "Masons",
        "Electricians",
        "Plumbers",
        "Steel Fixers",
        "Construction Helpers",
      ],
    },
    {
      id: 3,
      title: "Cleaning & Facility Management",
      description: "Keeping Dubai spotless and operational",
      imageUrl: Industries3.src,
      jobs: [
        "Commercial Cleaners",
        "Office Janitors",
        "Building Maintenance Staff",
        "Housekeepers",
        "Sanitation Workers",
      ],
    },
    {
      id: 4,
      title: "Logistics & Warehousing",
      description: "Organized, efficient, and on time",
      imageUrl: Industries4.src,
      jobs: [
        "Warehouse Assistants",
        "Inventory Clerks",
        "Loaders & Unloaders",
        "Delivery Helpers",
        "Forklift Operators",
      ],
    },
    {
      id: 5,
      title: "Hotels, F&B Service",
      description: "Serving up excellence across Dubai",
      imageUrl: Industries5.src,
      jobs: [
        "Restaurant Staff",
        "Kitchen Porters",
        "Cooks & Commis Chefsf",
        "Dishwashers",
        "Bakery Assistants",
      ],
    },
    {
      id: 6,
      title: "Kitchen & Pastry",
      description: "Keeping Dubai spotless and operational",
      imageUrl: Industries6.src,
      jobs: ["Chef", "Helpers", "Movers", "Commis Sushi", "Sushi Chef"],
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl justify-center px-4 md:px-6 flex flex-col items-center py-24 w-full">
      <div className="w-full flex flex-col items-start mb-16">
        <p className="text-tertiary-green mb-1 font-primary text-start space-x-2 text-[20px] tracking-wider leading-tight font-semibold">
          Industries We Serve
        </p>
        <div className="text-primary text-start space-x-2 text-[54px] tracking-wider leading-tight font-normal">
          <p className="relative group flex flex-col w-fit font-semibold px-4 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
              Connecting Great Talent
            </span>
            <span className="absolute inset-0 w-0 bg-tertiary-green group-hover:w-full transition-all duration-500 ease-in-out left-0 right-auto -z-10"></span>
          </p>{" "}
          {/* Title without animation */}
          <span className="inline-block font-primary text-[54px] font-normal leading-normal">
            with the Right Opportunities
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* Description without animation */}
          <p className="text-primary-gray  text-left font-primary text-[20px] font-normal leading-normal">
            From fast-growing businesses in Dubai to skilled individuals across
            Asia—FindStaff bridges the gap between demand and talent across key
            industries. Whether you&apos;re hiring or job hunting, we&apos;re
            here to help you move forward.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {industriesData.map((industry) => (
          <IndustriesWeServeCard
            key={industry.id}
            title={industry.title}
            description={industry.description}
            imageUrl={industry.imageUrl}
            jobs={industry.jobs}
          />
        ))}
      </div>
    </div>
  );
}
