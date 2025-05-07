import React from "react";
import ForCompanies from "@/views/OurServices/ForCompanies";
import ForEmployees from "@/views/OurServices/ForEmployees";
import { notFound } from "next/navigation";

interface OurServicesSlugPageProps {
  params: {
    slug: string;
  };
}

const OurServicesSlugPage = ({ params }: OurServicesSlugPageProps) => {
  const { slug } = params;

  // Render the appropriate component based on the slug
  switch (slug) {
    case "companies":
      return <ForCompanies />;
    case "employees":
      return <ForEmployees />;
    default:
      return notFound();
  }
};

export default OurServicesSlugPage; 