/*
================================================================================
| FILE: /components/landing/Gallery.tsx
|
| This is a Client Component because the Carousel from shadcn/ui requires
| client-side state and interaction.
================================================================================
*/
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GALLERY_IMAGES } from "@/lib/constants";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section id="gallery" className="bg-secondary/40 py-16">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Our Work</h2>
          <p className="mt-2 text-muted-foreground">
            See the quality and attention to detail
          </p>
        </header>
        <div className="relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {GALLERY_IMAGES.map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-2">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          className="h-56 w-full rounded-md object-cover"
                          placeholder="blur"
                          loading="lazy"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
