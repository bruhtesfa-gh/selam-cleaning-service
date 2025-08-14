/*
================================================================================
| FILE: /components/landing/Hero.tsx
|
| This is a Server Component. It displays the main headline, description,
| and call-to-action buttons.
================================================================================
*/
import { Button } from "@/components/ui/button";
import { HERO_IMAGE, PHONE_NUMBER } from "@/lib/constants";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="home" className="relative">
      <div
        className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]"
        aria-hidden
      ></div>
      <div className="container mx-auto grid gap-10 py-14 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Selam Home & Office Cleaning Services in Sharjah & Dubai
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Your Peace of Mind is Our Priority. Professional, reliable and
            meticulous cleaning for homes and offices.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button variant="cta" size="xl" asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href={`tel:${PHONE_NUMBER}`} aria-label="Call us now">
                <Phone /> Call {" " + PHONE_NUMBER}
              </a>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" /> 6:00 AM - 6:00 PM
            <span className="mx-2">•</span>
            <MapPin className="h-4 w-4" /> Sharjah & Dubai
          </div>
        </div>
        <div className="relative">
          <Image
            src={HERO_IMAGE}
            alt="Immaculate living and office space, freshly cleaned"
            className="w-full rounded-xl border shadow-[var(--shadow-elegant)]"
            priority // Use priority for LCP images
            placeholder="blur"
          />
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};
