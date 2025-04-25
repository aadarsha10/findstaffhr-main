import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import FindStaff from "../../assets/Footer/Find-staff.svg";
import Vector from "../../assets/Footer/Vector.svg";
import Logo2 from "../../assets/Footer/Logo2.svg";

// Social media links data
const socialLinks = [
  { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
  { icon: Instagram, href: "#", ariaLabel: "Instagram" },
  { icon: Facebook, href: "#", ariaLabel: "Facebook" },
];

// Company links data
const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our Services" },
];

// Sectors links data
const sectorLinks = [
  { href: "/construction", label: "Construction & Engineering" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/tourism", label: "Tourism" },
  { href: "/domestic", label: "Domestic & Care Services" },
  { href: "/logistics", label: "Logistics & Warehousing" },
  { href: "/retail", label: "Retail & Customer Service" },
  { href: "/manufacturing", label: "Manufacturing & Industrial" },
];

// Contact information
const contactInfo = [
  {
    heading: null,
    items: ["FindStaff Middle East", "Business Bay, Dubai, UAE"],
  },
  {
    heading: "Phone / WhatsApp",
    items: ["+971 584565285", "+30 694 813 9454 (Greece-based support)"],
  },
  { heading: "Email", items: ["info@findstaff.edu"] },
  {
    heading: "Working Hours",
    items: ["Monday to Friday | 9:00 AM – 6:00 PM (GST)"],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D8A3C] min-h-[600px] relative rounded-3xl mx-2">
      {/* Top left Logo */}
      <div className="absolute left-4 top-4">
        <Image
          src={Logo2}
          alt="FindStaff Logo"
          width={48}
          height={48}
          className="w-auto"
        />
      </div>

      {/* Background Vector */}
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src={Vector}
          alt="Background Design"
          layout="responsive"
          width={1200}
          height={142}
          priority={false}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-6 relative z-[4] justify-end">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-2">
          {/* Description */}
          <div>
            <p className="text-[11px] text-white mt-10 leading-relaxed">
              Hire reliable, pre-screened talent from Asia with full
              recruitment, visa, and relocation support - tailored for
              Dubai&apos;s fast-paced industries.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <social.icon size={25} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="justify-start md:ml-60">
            <h3 className="text-xs text-white font-bold mb-2">Company</h3>
            <ul className="space-y-0">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="justify-start md:ml-32">
            <h3 className="text-xs text-white font-bold mb-2">Sectors</h3>
            <ul className="space-y-0">
              {sectorLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="justify-start md:ml-8">
            <h3 className="text-xs text-white font-bold mb-2">Contact us</h3>
            <div className="text-[11px] text-white space-y-2">
              {contactInfo.map((section, index) => (
                <div key={index}>
                  {section.heading && (
                    <p className="font-bold">{section.heading}</p>
                  )}
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-32">
          <div className="w-full max-w-7xl mx-auto mb-8">
            <Image
              src={FindStaff}
              alt="FindStaff"
              layout="responsive"
              width={1200}
              height={48}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center text-[10px] text-white">
            <p>All rights reserved © {currentYear} FindStaff</p>
            <span>Crafted by Dobaato</span>
            <div className="flex gap-2">
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
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
