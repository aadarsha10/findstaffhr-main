"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/Navbar/Logo.svg";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div
      className="container mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center "
      data-navbar
    >
      <div className="flex items-center justify-between w-full py-6">
        <Link href="/">
          <Image src={Logo} alt="logo" width={166} height={54} />
        </Link>
        <div className="flex items-center font-primary text-sm font-normal gap-[10px]">
          <Link href="/" className="px-3 py-2">
            Home
          </Link>
          <Link href="/" className="px-3 py-2">
            Our Services
          </Link>
          <Link href="/" className="px-3 py-2">
            Sectors
          </Link>
          <Link href="/" className="px-3 py-2">
            How it works
          </Link>
        </div>
        <Button
          variant="withArrow"
          className="h-14 w-[180px] pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
          withAnimatedArrow
          arrowSize={28}
        >
          <span>Contact Us</span>
        </Button>
      </div>
    </div>
  );
}
