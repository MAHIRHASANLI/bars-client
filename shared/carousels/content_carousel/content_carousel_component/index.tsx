// Carousel.tsx
"use client";

import { Children, CSSProperties, ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";

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
    autoplay:{ delay: 7000, disableOnInteraction: false }
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
    autoplay:{ delay: 8000, disableOnInteraction: false }
  },
  // Ekranda yalnız 1 tam şəkil
  single: {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay:{ delay: 9000, disableOnInteraction: false }
  },
} satisfies Record<string, SwiperOptions>;

type CarouselPreset = keyof typeof carouselPresets;

type Props = {
  children: ReactNode[];
  preset?: CarouselPreset;
  className?: string;
};

// Tailwind class-ları tam yazılmalıdır
const shadowClasses =
  "overflow-hidden! py-10! -my-10! lg:overflow-visible! lg:py-0! lg:my-0! lg:[clip-path:var(--clip)]";

const presetClasses: Record<CarouselPreset, string> = {
  compact: shadowClasses,
  wide: shadowClasses,
  single: "overflow-hidden!",
};

const arrowClasses =
  "size-9 rounded-full bg-black/5 hover:bg-black/10 disabled:invisible";

const GeneralCarouselComponent = ({
  children,
  preset = "compact",
  className = "",
}: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncState = (s: SwiperType) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  const isSingle = preset === "single";

  // Başlanğıcda sol kölgə görünür, sürüşəndən sonra sol kəsilir.
  // Sonda sağ kəsilir, əks halda sağa daşır.
  const clip = `inset(-40px ${isEnd ? "0px" : "-100vw"} -40px ${
    isBeginning ? "-24px" : "0px"
  })`;

  return (
    <div className="w-full h-full pt-10 max-[1000px]:pt-6">
      <Swiper
        {...carouselPresets[preset]}
        
        modules={[Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s;
          syncState(s);
        }}
        onSlideChange={syncState}
        onResize={syncState}
        style={isSingle ? undefined : ({ "--clip": clip } as CSSProperties)}
        className={`products-swiper ${presetClasses[preset]} ${className}`}
      >
        {Children.toArray(children).map((child, i) => (
          <SwiperSlide key={i} className={isSingle ? "" : "h-auto!"}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {!isSingle && (
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            aria-label="Əvvəlki"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${arrowClasses} text-(--logo-color)`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Növbəti"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`${arrowClasses} text-(--logo-color-hover)`}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GeneralCarouselComponent;

/*
const GeneralCarouselComponent = ({
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
*/
