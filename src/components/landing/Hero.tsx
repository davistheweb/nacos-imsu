"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { rubikFont } from "@/lib/font";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export const Hero: React.FC = () => {
  const [api, setApi] = useState<any>();
  return (
    <Carousel
      setApi={setApi}
      opts={{ dragFree: false, watchDrag: false, loop: true, duration: 50 }}
      plugins={[Autoplay({ delay: 5000 })]}
      className="h-full w-full"
    >
      <CarouselContent>
        <CarouselItem className="carouselSlide1 flex h-100 items-center justify-center md:h-170">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1
              className={`text-center font-extrabold text-white md:w-200 md:text-7xl ${rubikFont.className}`}
            >
              Nigeria Association Of Computing Students
            </h1>
            <h1
              className={`text-custom-green text-center font-extrabold md:w-200 lg:text-7xl ${rubikFont.className}`}
            >
              IMSU Chapter
            </h1>
            <p className="w-60 text-center text-white md:w-full md:text-xl">
              We are student IT professionals passionate for groundbreaking
              technologu innovations.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="carouselSlide2 flex h-100 items-center justify-center md:h-170">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1
              className={`text-center text-2xl font-extrabold text-white md:w-200 md:text-7xl ${rubikFont.className}`}
            >
              Networking The World
            </h1>

            <p className="text-center text-white md:text-xl">
              We Reinvent; We Optimize; We Build Capacity
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <button
        className="absolute top-[60%] z-20 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-none border-0 bg-transparent text-white md:top-[55%] md:left-30"
        onClick={() => api?.scrollPrev()}
      >
        <ChevronLeft
          size={70}
          color="white"
        />
      </button>
      <button
        className="absolute top-[60%] right-4 z-20 h-12 w-12 -translate-y-1/2 cursor-pointer md:top-[55%] md:right-30"
        onClick={() => api.scrollNext()}
      >
        <ChevronRight
          size={70}
          color="white"
        />
      </button>
    </Carousel>
  );
};
