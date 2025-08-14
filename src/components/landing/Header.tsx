/*
================================================================================
| FILE: /components/landing/Header.tsx
|
| The header is a Client Component because it uses onClick handlers for smooth
| scrolling, which requires JavaScript.
================================================================================
*/
"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import logo from "@/app/android-chrome-512x512.png";
export const Header = () => {
  const scrollToId = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8" aria-hidden="true">
            <Image
              src={logo}
              width={512} // Using the image's actual width
              height={512} // Using the image's actual height
              alt="Selam Home & Office Cleaning Services logo"
              className="h-full w-full object-contain" // This is the key fix
              priority
              placeholder="blur"
            />
          </div>
          <span className="font-semibold">
            Selam Home & Office Cleaning Services
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="hover:opacity-80 transition-opacity"
            >
              {link.label}
            </button>
          ))}
          <Button asChild variant="cta" size="sm">
            <a href="#contact" aria-label="Book now">
              Book Now
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="cta" size="sm" asChild>
            <a href="#contact">Book Now</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
