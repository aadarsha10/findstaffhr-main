"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect, useRef} from "react";
// import Logo from "@/assets/Navbar/Logo.svg";
import {Button} from "../ui/button";
import {Menu, ChevronDown} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import MainLogo from "@/assets/Navbar/mainLogo.png";

// Define the navigation items to avoid repetition
const navItems = [
  {title: "Home", href: "/"},
  {
    title: "Our Services",
    href: "",
    dropdown: [
      {title: "For Companies", href: "/ourservices/companies"},
      {title: "For Employees", href: "/ourservices/employees"},
    ],
  },
  {title: "Licenses", href: "/licenses"},
  {title: "About Us", href: "/aboutus"},
  {title: "Jobs", href: "/jobs"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Improved active link detection
  const isActive = (href: string) => {
    // Check exact match
    if (pathname === href) return true;
    
    // Check if it's a parent path (for subpages)
    if (href !== '/' && pathname?.startsWith(href + '/')) return true;
    
    // Special case for dropdown items in parent sections
    if (href.includes('/ourservices/') && pathname?.startsWith('/ourservices')) return true;
    
    return false;
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Function to handle dropdown navigation without closing dropdown
  const handleDropdownLinkClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      // If already on the page, prevent default to avoid page reload
      e.preventDefault();
    }
    // Keep dropdown open for a short time even after clicking
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between w-full py-6">
          <Link href="/" className="z-40">
            <Image src={MainLogo} alt="logo" width={186} height={74} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-primary text-sm font-normal gap-[10px]">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                    setActiveDropdown(item.title);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 300);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-primary font-medium"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div 
                    className={`absolute z-50 top-full left-0 w-[180px] pt-2 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === item.title 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible translate-y-1"
                    }`}
                    onMouseEnter={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                      }
                      setActiveDropdown(item.title);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 300);
                    }}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link 
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className={`block w-full px-4 py-2 hover:bg-gray-50 transition-colors ${
                            isActive(dropdownItem.href) ? "text-primary font-medium" : ""
                          }`}
                          onClick={(e) => handleDropdownLinkClick(e, dropdownItem.href)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>

          <Link href={"/contactus"} className="hidden md:block ">
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
              withAnimatedArrow
              arrowSize={28}
              StyleBg="#0091e6"
            >
              <span>Contact Us </span>
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] max-w-[350px] pt-16 px-6"
            >
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.title} className="flex flex-col">
                      <span className={`text-lg font-primary py-2 border-b border-gray-100 transition-colors ${
                        isActive(item.href) ? "text-primary font-medium" : ""
                      }`}>
                        {item.title}
                      </span>
                      <div className="ml-4 flex flex-col">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className={`text-lg font-primary py-2 border-b border-gray-100 transition-colors ${
                              isActive(dropdownItem.href) ? "text-primary font-medium" : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`text-lg font-primary py-2 border-b border-gray-100 transition-colors ${
                        isActive(item.href) ? "text-primary font-medium" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                ))}
                <Button
                  variant="withArrow"
                  className=" h-14 w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group "
                  withAnimatedArrow
                  arrowSize={28}
                  onClick={() => setIsOpen(false)}
                  StyleBg="#0091e6"
                >
                  <span>Contact Us</span>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
