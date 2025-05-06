"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Logo from "@/assets/Navbar/Logo.svg";
import {Button} from "../ui/button";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import MainLogo from "@/assets/Navbar/mainLogo.png";

// Define the navigation items to avoid repetition
const navItems = [
  {title: "Home", href: "/"},
  {title: "Our Services", href: "/ourservices"},
  {title: "Licenses", href: "/licenses"},
  {title: "About Us", href: "/aboutus"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Track active link
  const isActive = (href: string) => pathname === href;

  return (
    <div className=" w-full  bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between w-full py-6">
          <Link href="/" className="z-40">
            <Image src={MainLogo} alt="logo" width={166} height={54} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center font-primary text-sm font-normal gap-[10px]">
            {navItems.map((item) => (
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
            ))}
          </div>

          <Link href={"/contactus"} className="hidden md:block ">
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group hover:cursor-pointer"
              withAnimatedArrow
              arrowSize={28}
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
                ))}
                <Button
                  variant="withArrow"
                  className=" h-14 w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group "
                  withAnimatedArrow
                  arrowSize={28}
                  onClick={() => setIsOpen(false)}
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
