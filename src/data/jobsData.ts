import ad1 from "@/assets/Jobs/ad1.png";
import ad2 from "@/assets/Jobs/ad2.png";
import ad3 from "@/assets/Jobs/ad3.png";
import { StaticImageData } from "next/image";

export interface Job {
  id: number;
  company: string;
  location: string;
  type: string;
  salary: string;
  title: string;
  employees: string;
  imageUrl: StaticImageData;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  PerksAndBenefits?: string[];
}

const jobsData: Job[] = [
  {
    id: 1,
    company: "Alpha Omega Solutions",
    location: "Qatar",
    salary: "QAR 5000 - QAR 7000",
    title: "Waiter/Waitress",
    type: "Full-time",
    employees: "10-50 employees",
    imageUrl: ad1,
    description: "We are hiring friendly and customer-focused Waiters/Waitresses for top-tier restaurants and hotels abroad. As part of the service team, you'll be responsible for delivering a seamless dining experience, taking orders, serving food, and ensuring guest satisfaction.",
    responsibilities: [
      "Taking orders and serving food to guests",
      "Ensuring a clean and comfortable dining environment",
      "Providing excellent customer service",
      "Handling payment and resolving any issues",
    ],
    requirements: [
      "Previous experience in a similar role",
      "Excellent customer service skills",
      "Ability to work in a fast-paced environment",
      "Flexibility to work various shifts",
    ],
    PerksAndBenefits: [
      "Competitive salary",
      "Free meals",
      "Free parking",
      "Free shuttle service",
      "Free gym",
    ],

    

  },
  {
    id: 2,
    company: "TechVision Global",
    location: "UAE",
    salary: "AED 6000 - AED 8500",
    title: "Full-time",
    type: "Full-time",
    employees: "50-200 employees",
    imageUrl: ad2,
    description: "TechVision Global is a leading technology company with operations across the Middle East. We are looking for innovative professionals who are passionate about technology and ready to make an impact in a fast-paced environment.",
    responsibilities: [
      "Developing and maintaining software applications",
      "Collaborating with cross-functional teams to analyze, design, and implement new features",
      "Optimizing application performance and ensuring scalability",
      "Debugging and troubleshooting software issues",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficient in Java, Python, or C#",
      "Strong problem-solving skills",
      "Excellent communication skills",
    ],
    PerksAndBenefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) retirement plan",
      "Flexible working hours",
      "Professional development opportunities",
    ],
  },
  {
    id: 3,
    company: "Nexus Innovations",
    location: "Saudi Arabia",
    salary: "SAR 7000 - SAR 9000",
    title: "Contract",
    type: "Contract",
    employees: "20-50 employees",
    imageUrl: ad3,
    description: "Nexus Innovations is at the forefront of digital transformation in Saudi Arabia. We are currently hiring contractors for our various projects, offering competitive rates and the opportunity to work on cutting-edge technologies.",
    responsibilities: [
      "Developing and maintaining software applications",
      "Collaborating with cross-functional teams to analyze, design, and implement new features",
      "Optimizing application performance and ensuring scalability",
      "Debugging and troubleshooting software issues",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficient in Java, Python, or C#",
      "Strong problem-solving skills",
      "Excellent communication skills",
    ],
    PerksAndBenefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) retirement plan",
      "Flexible working hours",
      "Professional development opportunities",
    ],
  },
];

export default jobsData; 