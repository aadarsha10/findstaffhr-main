import Hero from "@/components/atom/Hero";
import React from "react";
import MultipleDataCards from "./components/MultipleDataCards";

import DoubleCircleCard from "./components/DoubleCircleCard";

export default function Licenses() {
  return (
    <>
      <Hero
        highlightText="Our Legal Commitment"
        subtitle="Ensuring Safe and Transparent Services"
        description="FindStaff is fully licensed and compliant with all relevant laws and regulations in Dubai, providing businesses and job seekers with trustworthy and legally sound staffing services." beforehighlight={""}      />
      <MultipleDataCards />

      <DoubleCircleCard />
    </>
  );
}
