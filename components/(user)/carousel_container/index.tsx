// Carousel.tsx
"use client";

import { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // carousel.presets.ts
import type { SwiperOptions } from "swiper/types";

const carouselPresets = {
  // 8 karta qədər, kiçik kartlar
  compact: {
    slidesPerView: 2.3,
    spaceBetween: 12,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 10 },
      360: { slidesPerView: 3.2, spaceBetween: 10 },
      640: { slidesPerView: 4.3, spaceBetween: 20 },
      800: { slidesPerView: 5.5, spaceBetween: 60 },
      1024: { slidesPerView: 6.5, spaceBetween: 50 },
      1280: { slidesPerView: 7.5, spaceBetween: 30 },
    },
  },
  // 5 karta qədər, iri kartlar
  wide: {
    slidesPerView: 1.4,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 1.2, spaceBetween: 20 },
      800: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 25 },
    },
  },
    // Ekranda yalnız 1 tam şəkil
  single: {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 20},
    },
  },
} satisfies Record<string, SwiperOptions>;


type Props = {
  children: ReactNode[];
  preset?: CarouselPreset;
  className?: string;
};

type CarouselPreset = keyof typeof carouselPresets;

// Tailwind class-ları tam yazılmalıdır
const presetClasses: Record<CarouselPreset, string> = {
  compact:
    "overflow-hidden! py-10! -my-10! lg:overflow-visible! lg:py-0! lg:my-0! lg:[clip-path:inset(-40px_-100vw_-40px_-24px)]",
  wide:
    "overflow-hidden! py-10! -my-10! lg:overflow-visible! lg:py-0! lg:my-0! lg:[clip-path:inset(-40px_-100vw_-40px_-24px)]",
  single: "overflow-hidden!",
};

const CarouselComponent = ({
  children,
  preset = "compact",
  className = "",
}: Props) => (
  <Swiper
    {...carouselPresets[preset]}
    autoplay={{ delay: 8000, disableOnInteraction: false }}
    navigation
    modules={[Navigation, Autoplay]}
    className={`products-swiper ${presetClasses[preset]} ${className}`}
  >
    {Children.toArray(children).map((child, i) => (
      <SwiperSlide key={i} className={preset === "single" ? "" : "h-auto!"}>
        {child}
      </SwiperSlide>
    ))}
  </Swiper>
);
export default CarouselComponent;
