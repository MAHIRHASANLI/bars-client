"use client";
import React, { Children, ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import type { Swiper as SwiperType } from "swiper";

const carouselPresets = {
  slidesPerView: 1.4,
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 20 },
    700: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 3, spaceBetween: 40 },
  },
  autoplay: { delay: 15000, disableOnInteraction: false },
} satisfies SwiperOptions;

const arrowClass =
  "absolute top-1/2 z-99 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-(--logo-color) text-4xl font-extralight text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40 max-[1000px]:h-8 max-[1000px]:w-8 max-[1000px]:text-xl";

const FeaturedCarouselComponent = ({ children }: { children: ReactNode }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const syncState = (s: SwiperType) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <div className="relative pt-6 pb-8 max-[1000px]:pt-3 max-[1000px]:pb-5">
      <Swiper
        {...carouselPresets}
        modules={[Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s;
          syncState(s);
        }}
        onSlideChange={syncState}
        onResize={syncState}
      >
        {Children.toArray(children).map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Əvvəlki"
        disabled={isBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${arrowClass} left-0 min-[1000px]:-left-10`}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Növbəti"
        disabled={isEnd}
        onClick={() => swiperRef.current?.slideNext()}
        className={`${arrowClass} right-0 min-[1000px]:-right-10`}
      >
        ›
      </button>
    </div>
  );
};

export default FeaturedCarouselComponent;