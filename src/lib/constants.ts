/*
================================================================================
| FILE: /lib/constants.ts
|
| This file centralizes all the static data for your landing page,
| making components cleaner and data easier to manage.
================================================================================
*/
import {
  Building2,
  CheckCircle2,
  Droplets,
  Home,
  ShowerHead,
  Sparkles,
} from "lucide-react";

// Image imports
import heroImage from "@/app/assets/hero-cleaning.jpg";
import g1 from "@/app/assets/gallery-1-kitchen.jpg";
import g2 from "@/app/assets/gallery-2-bathroom.jpg";
import g3 from "@/app/assets/gallery-3-office.jpg";
import g4 from "@/app/assets/gallery-4-polishing.jpg";
import g5 from "@/app/assets/gallery-5-floor.jpg";
import g6 from "@/app/assets/gallery-6-windows.jpg";

export const PHONE_NUMBER = "+971505979288";
export const WHATSAPP_LINK = "https://wa.me/971505979288";
export const HERO_IMAGE = heroImage;

export const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "gallery", label: "Our Work" },
  { id: "pricing", label: "Pricing" },
  { id: "whyus", label: "Why Us" },
];

export const SERVICES_LIST = [
  { icon: Home, name: "Kitchen Cleaning" },
  { icon: ShowerHead, name: "Bathroom Sanitization" },
  { icon: Building2, name: "Office Cleaning" },
  { icon: Sparkles, name: "Dusting & Polishing" },
  { icon: Droplets, name: "Mopping & Floor Care" },
  { icon: Sparkles, name: "Vacuuming" },
  { icon: Sparkles, name: "Window Cleaning" },
  { icon: Sparkles, name: "General Cleaning" },
  { icon: ShowerHead, name: "Restroom Cleaning" },
  { icon: CheckCircle2, name: "Sanitation Services" },
];

export const GALLERY_IMAGES = [
  { src: g1, alt: "Spotless modern kitchen after professional cleaning" },
  { src: g2, alt: "Sanitized bathroom with sparkling fixtures" },
  { src: g3, alt: "Pristine open-plan office space" },
  { src: g4, alt: "Dusting and polishing for a refined finish" },
  { src: g5, alt: "Mopped floor with a clean reflective sheen" },
  { src: g6, alt: "Streak-free windows with a clear view" },
];

export const PRICING_PLANS = [
  {
    title: "25 DHS / hour",
    subtitle: "Client provides materials",
    features: [
      "Professional cleaners",
      "Flexible scheduling",
      "Homes & offices",
    ],
    isPopular: false,
  },
  {
    title: "35 DHS / hour",
    subtitle: "We provide materials",
    features: ["Premium supplies", "Professional cleaners", "Homes & offices"],
    isPopular: true,
  },
];

export const WHY_US_POINTS = [
  {
    icon: Sparkles,
    title: "Professional & Reliable",
    desc: "Trained cleaners who arrive on time and deliver outstanding results.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    desc: "From corners to countertops, we clean meticulously so you can relax.",
  },
  {
    icon: Sparkles,
    title: "Flexible Scheduling",
    desc: "Homes and offices across Sharjah & Dubai, at times that suit you.",
  },
];
