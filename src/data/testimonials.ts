import { StaticImageData } from "next/image";

// Import company logos
import hawai from "@/assets/LandingPage/Testomonials/hawai.svg";
import bmw from "@/assets/LandingPage/Testomonials/bmw.png";
import pepsi from "@/assets/LandingPage/Testomonials/pepsi.png";
import dell from "@/assets/LandingPage/Testomonials/dell.png";
import china from "@/assets/LandingPage/Testomonials/china.png";
import bear from "@/assets/LandingPage/Testomonials/bear.png";
import pg from "@/assets/LandingPage/Testomonials/p&g.png";
import queen from "@/assets/LandingPage/Testomonials/queen.png";
import wheel from "@/assets/LandingPage/Testomonials/wheel.png";

// Import person images
import person1 from "@/assets/LandingPage/Testomonials/person1.png";
import person2 from "@/assets/LandingPage/Testomonials/person2.png";
import person3 from "@/assets/LandingPage/Testomonials/person3.png";
import person4 from "@/assets/LandingPage/Testomonials/person4.png";
import person5 from "@/assets/LandingPage/Testomonials/person5.png";
import person6 from "@/assets/LandingPage/Testomonials/person6.png";
import person7 from "@/assets/LandingPage/Testomonials/person7.png";
import person8 from "@/assets/LandingPage/Testomonials/person8.png";

export interface Testimonial {
  id: number;
  logo: string | StaticImageData;
  logoAlt: string;
  text: string;
  position: string;
}

// Define company testimonials
export const companyTestimonials: Testimonial[] = [
  {
    id: 0,
    logo: hawai,
    logoAlt: "Hawaii Hotel logo",
    text: "FindStaff made hiring so simple. We had our hotel fully staffed within weeks—with skilled, polite workers who were ready to go. They handled everything from sourcing to visa paperwork flawlessly.",
    position: "Operations Manager, Marina Bay Hotel, Dubai",
  },
  {
    id: 1,
    logo: bmw,
    logoAlt: "BMW logo",
    text: "As a global brand, finding skilled manufacturing workers has always been challenging. FindStaff connected us with qualified technical staff who met our exact requirements and quality standards.",
    position: "HR Director, BMW Manufacturing",
  },
  {
    id: 2,
    logo: pepsi,
    logoAlt: "Pepsi logo",
    text: "The hospitality industry demands consistency and excellence. FindStaff has been our trusted partner in staffing our restaurants with dedicated professionals who understand our brand values.",
    position: "Regional Manager, PepsiCo Food Services",
  },
  {
    id: 3,
    logo: dell,
    logoAlt: "Dell logo",
    text: "Our tech support centers require staff with specific skills and excellent communication abilities. FindStaff consistently delivers candidates who exceed our expectations.",
    position: "Talent Acquisition Lead, Dell Technologies",
  },
  {
    id: 4,
    logo: china,
    logoAlt: "China Airlines logo",
    text: "Finding multilingual staff for our international routes has never been easier. FindStaff understood our unique requirements and found us candidates with both language skills and hospitality expertise.",
    position: "Cabin Crew Manager, China Airlines",
  },
  {
    id: 5,
    logo: bear,
    logoAlt: "Bear logo",
    text: "Our chain of luxury hotels demands the highest standards. FindStaff has consistently provided us with hospitality professionals who deliver exceptional guest experiences.",
    position: "Director of Operations, Bear Resorts & Spas",
  },
  {
    id: 6,
    logo: pg,
    logoAlt: "P&G logo",
    text: "With facilities across multiple countries, our staffing needs are complex. FindStaff has been instrumental in helping us navigate international hiring with ease and compliance.",
    position: "Global Workforce Manager, Procter & Gamble",
  },
  {
    id: 7,
    logo: queen,
    logoAlt: "Queen Hotels logo",
    text: "The seasonal nature of our business requires flexibility in staffing. FindStaff has consistently provided us with reliable seasonal workers who maintain our high standards of service.",
    position: "General Manager, Queen Hotels Group",
  },
  {
    id: 8,
    logo: wheel,
    logoAlt: "Wheel Transport logo",
    text: "Finding qualified drivers and logistics personnel across our global operations was challenging until we partnered with FindStaff. Their network and vetting process is unmatched.",
    position: "Fleet Operations Director, Wheel Transport Solutions",
  },
];

// Define employee testimonials
export const employeeTestimonials: Testimonial[] = [
  {
    id: 0,
    logo: person1,
    logoAlt: "Sarah Johnson",
    text: "Thanks to FindStaff, I found an amazing hospitality job in Dubai that matched my skills perfectly. The entire process from application to relocation was seamless and professional.",
    position: "Room Attendant at Marina Bay Hotel, Dubai",
  },
  {
    id: 1,
    logo: person2,
    logoAlt: "Michael Chen",
    text: "FindStaff connected me with a manufacturing position at BMW that has changed my life. They handled all the visa paperwork and provided support throughout my relocation journey.",
    position: "Production Technician at BMW Manufacturing",
  },
  {
    id: 2,
    logo: person3,
    logoAlt: "Priya Sharma",
    text: "I was looking for work in the food service industry, and FindStaff found me the perfect role. Their team understood my career goals and matched me with an employer that values my skills.",
    position: "Service Manager at PepsiCo Food Services",
  },
  {
    id: 3,
    logo: person4,
    logoAlt: "James Wilson",
    text: "FindStaff helped me find a tech support role that perfectly matched my technical skills and language abilities. The onboarding process was smooth, and I felt supported every step of the way.",
    position: "Technical Support Specialist at Dell Technologies",
  },
  {
    id: 4,
    logo: person5,
    logoAlt: "Lin Wei",
    text: "As a multilingual professional, I wanted a job that would value my language skills. FindStaff placed me in a cabin crew position that's perfect for my abilities and career goals.",
    position: "Cabin Crew Member at China Airlines",
  },
  {
    id: 5,
    logo: person6,
    logoAlt: "Elena Rodriguez",
    text: "FindStaff helped me secure a hospitality position at a luxury resort that truly values excellent service. The recruitment process was efficient, and they found me a role that matches my expertise.",
    position: "Guest Relations Manager at Bear Resorts & Spas",
  },
  {
    id: 6,
    logo: person7,
    logoAlt: "Abdul Rahman",
    text: "Working across borders seemed complicated until I connected with FindStaff. They guided me through the international hiring process and found me a role at a global company that values diversity.",
    position: "Supply Chain Analyst at Procter & Gamble",
  },
  {
    id: 7,
    logo: person8,
    logoAlt: "Isabella Torres",
    text: "Seasonal work can be unpredictable, but FindStaff connected me with a hospitality role that provides stability and growth opportunities. Their team really understood my career needs.",
    position: "Front Desk Supervisor at Queen Hotels Group",
  },
]; 