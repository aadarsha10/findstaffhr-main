import Link from "next/link";
import Image from "next/image";
import {Linkedin, Instagram, Facebook} from "lucide-react";
// import FindStaff from "../../assets/Footer/Find-staff.svg";
// import MainLogo from "@/assets/Navbar/mainLogo.png";
import Vector from "../../assets/Footer/Vector.svg";
import Logo2 from "../../assets/Footer/logo2.png";

// Social media links data
const socialLinks = [
  {icon: Linkedin, href: "#", ariaLabel: "LinkedIn"},
  {icon: Instagram, href: "#", ariaLabel: "Instagram"},
  {icon: Facebook, href: "#", ariaLabel: "Facebook"},
];

// Company links data
const companyLinks = [
  {href: "/", label: "Home"},
  {href: "/aboutus", label: "About us"},
  {href: "/ourservices/companies", label: "Our Services"},
];

// Sectors links data
const sectorLinks = [
  {href: "", label: "Construction & Engineering"},
  {href: "", label: "Hospitality"},
  {href: "", label: "Tourism"},
  {href: "", label: "Domestic & Care Services"},
  {href: "", label: "Logistics & Warehousing"},
  {href: "", label: "Retail & Customer Service"},
  {href: "", label: "Manufacturing & Industrial"},
];

// Contact information
const contactInfo = [
  {
    heading: null,
    items: ["Aarohi HR Solutions (P) Ltd.", "Basundhara-3, Kathmandu"],
  },
  {
    heading: "Phone / Address",
    items: ["+977 1 4961807", "Basundhara-3, Kathmandu"],
  },
  {heading: "Email", items: ["info@aarohihrsolutions.com"]},
  {
    heading: "Working Hours",
    items: ["Sunday to Friday | 9:00 AM – 6:00 PM (NST)"],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D8A3C] relative min-h-[400px] font-primary md:min-h-[300px] rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-10 mb-10 mx-2 md:mx-10">
      {/* Background Vector */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <Image
          src={Vector}
          alt="Background Design"
          width={1200}
          height={142}
          style={{width: "100%", height: "auto"}}
          priority={false}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main Content - Restructured */}
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-16 lg:gap-20">
          {/* Logo and description section - Now at top */}
          <div className="w-full">
            <div className="flex flex-col items-start">
              <Link href="/">
              <Image
                src={Logo2}
                alt="Aarohi HR Solutions Logo"
                width={194}
                height={90}
                className="w-[120px] md:w-[194px] h-auto"
              />
              </Link>


              <p className="text-xs sm:text-sm text-white mt-4 md:mt-6 leading-relaxed max-w-xs">
                Hire reliable, pre-screened talent from Asia with full
                recruitment, visa, and relocation support - tailored for
                Global&apos;s fast-paced industries.
              </p>

             
              


              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white hover:text-gray-200 transition-colors hover:scale-110"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon size={20} className="md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white mt-4 md:mt-6 leading-relaxed max-w-xs">
                Govt. Lic. No: 1244/074/075 <br /> Reg. No.: 165209/073/074
              </p>
            </div>
          </div>

          {/* Links grid section - Now at bottom with increased gap */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Company */}
              <div>
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Company
                </h3>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm text-white hover:text-gray-200 transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sectors */}
              <div>
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Sectors
                </h3>
                <ul className="space-y-2">
                  {sectorLinks.map((link, index) => (
                    <li key={index}>
                      <div
                        // href={link.href}
                        className="text-xs md:text-sm text-white hover:text-gray-200 transition-colors block"
                      >
                        {link.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-start">
                <h3 className="text-sm md:text-base text-white font-bold mb-3">
                  Contact us
                </h3>
                <div className="text-xs md:text-sm text-white space-y-4">
                  {contactInfo.map((section, index) => (
                    <div key={index} className="mb-2">
                      {section.heading && (
                        <p className="font-bold text-gray-100">
                          {section.heading}
                        </p>
                      )}
                      {section.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-200">
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 md:mt-32">
          <div className="w-full mx-auto mb-6 md:mb-8">
            {/* <Image
              src={FindStaff}
              alt="Aarohi HR Solutions"
              width={1200}
              height={48}
              style={{width: "100%", height: "auto"}}
              className="opacity-90"
            /> */}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center font-semibold gap-3 md:gap-0 text-[10px] md:text-xs text-white">
            <p>All rights reserved © {currentYear} Aarohi HR Solutions</p>
            <span className="order-3 md:order-2">Crafted by Dobaato</span>
            <div className="flex gap-2 order-2 md:order-3">
              <Link
                href="/privacy"
                className="hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="/terms"
                className="hover:text-gray-200 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
