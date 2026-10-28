"use client";
import React, { Children, CSSProperties, ReactNode } from "react";
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
  loop: true
} satisfies SwiperOptions;

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

      <div>
        <button
          type="button"
          aria-label="Əvvəlki"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-[50%] left-0 min:[1000px]-left-10 z-99 max-[1000px]:w-8 max-[1000px]:h-8 w-12 h-12 bg-(--logo-color) rounded-[50%] font-extralight text-4xl max-[1000px]:text-xl text-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Növbəti"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-[50%] right-0 min:[1000px]-right-10 z-99 max-[1000px]:w-8 max-[1000px]:h-8 w-12 h-12 bg-(--logo-color) rounded-[50%] font-extralight text-4xl max-[1000px]:text-xl text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarouselComponent;
