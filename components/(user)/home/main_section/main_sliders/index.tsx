"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperItem from "../main_slider_item";

import img from "@/images/saygac-slider-img.png"
import { HeroSlide } from "@/types/links";


const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "NÖMRƏ BİR",
    title: "Nömrə Bir yapışdırıcı",
    subtitle: "Keyfiyyətli və dözümlü tikinti materialları ilə layihələrinizi gerçəkləşdirin.",
    image: img,
    imageAlt: "Nömrə Bir yapışdırıcı",
    link: "/products/tikinti_materiallari",
    cta: "Daha ətraflı",
    secondaryCta: { text: "Bizimlə əlaqə saxlayın", link: "/contact" },
    bg: "#BFDC6E",
    accent: "#A3232C",
    payText: "Apple Pay və ya Google Pay vasitəsilə kart ilə ödəniş zamanı",
    note: "Məhsul haqqında ətraflı məlumat və sifariş üçün bizimlə əlaqə saxlayın.",
  },
  {
    id: 2,
    badge: "YENİ",
    title: "Smart qaz sayğacları",
    subtitle: "Modemli və NB-IoT sistemli yeni nəsil sayğaclar. Mexaniki, turbin, rotor və ultrasəs tiplər.",
    image: img,
    imageAlt: "Smart tipli qaz sayğacı",
    link: "/products/qaz_avadanliqlari/saygaclar",
    cta: "Sayğaclara bax",
    secondaryCta: { text: "Bizimlə əlaqə saxlayın", link: "/contact" },
    bg: "#CFE3F5",
    accent: "#0B4F9C",
    payText: "Apple Pay və ya Google Pay vasitəsilə kart ilə ödəniş zamanı",
    note: "Sertifikat və texniki göstəricilər üçün bizimlə əlaqə saxlayın.",
  },
  {
    id: 3,
    badge: "SƏNAYE",
    title: "Qaz korrektorları",
    subtitle: "Qazın həcmini təzyiq, temperatur və sıxılma əmsalına görə standart şəraitə avtomatik gətirir.",
    image: img,
    imageAlt: "Qaz korrektoru",
    link: "/products/qaz_avadanliqlari/korrektorlar",
    cta: "Daha ətraflı",
    secondaryCta: { text: "Bizimlə əlaqə saxlayın", link: "/contact" },
    bg: "#F3E3C3",
    accent: "#8A4B0F",
    payText: "Apple Pay və ya Google Pay vasitəsilə kart ilə ödəniş zamanı",
    note: "Layihəniz üçün uyğun korrektoru birlikdə seçək. Bizimlə əlaqə saxlayın.",
  },
  {
    id: 4,
    badge: "TƏHLÜKƏSİZLİK",
    title: "Qaz filtrləri",
    subtitle: "Qaz xəttini çirkdən qoruyun, avadanlığın ömrünü uzadın.",
    image: img,
    imageAlt: "Qaz filtri",
    link: "/products/qaz_avadanliqlari/filtrler",
    cta: "Filtrlərə bax",
    secondaryCta: { text: "Bizimlə əlaqə saxlayın", link: "/contact" },
    bg: "#D8EBD9",
    accent: "#1E6B3A",
    payText: "Apple Pay və ya Google Pay vasitəsilə kart ilə ödəniş zamanı",
    note: "Filtr ölçüsü və qaz təzyiqinə uyğun model seçimi üçün bizimlə əlaqə saxlayın.",
  },
  {
    id: 5,
    badge: "SERTİFİKATLI",
    title: "Qaz tənzimləyiciləri",
    subtitle: "Təhlükəsiz və sertifikatlı qaz avadanlıqları. Məhsul seçimində peşəkar dəstək.",
    image: img,
    imageAlt: "Qaz tənzimləyicisi",
    link: "/products/qaz_avadanliqlari/tenzimleyiciler",
    cta: "Tənzimləyicilərə bax",
    secondaryCta: { text: "Bizimlə əlaqə saxlayın", link: "/contact" },
    bg: "#E4DDF2",
    accent: "#4B2E8C",
    payText: "Apple Pay və ya Google Pay vasitəsilə kart ilə ödəniş zamanı",
    note: "Təzyiq göstəricilərinə uyğun tənzimləyici seçimi üçün bizimlə əlaqə saxlayın.",
  },
];


const dotsClass = [
  "hero-dots",
  // Swiper-in öz mövqeyini ləğv edib bannerin altına sallayırıq
  "!absolute !inset-x-0 !bottom-[-22px] md:!bottom-[-30px] !mx-auto !w-fit z-10",
  "!flex min-w-[160px] md:min-w-[200px] items-center justify-center",
  "h-8 md:h-[60px] px-4 md:px-7 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]",
  // nöqtələr: 14px, aralıq 35px (mobildə 10px / 22px)
  "[&_.swiper-pagination-bullet]:!size-2.5 md:[&_.swiper-pagination-bullet]:!size-3.5",
  "[&_.swiper-pagination-bullet]:!mx-1.5 md:[&_.swiper-pagination-bullet]:!mx-[10.5px]",
  "[&_.swiper-pagination-bullet]:!bg-[#c8c8c8] [&_.swiper-pagination-bullet]:!opacity-100",
  "[&_.swiper-pagination-bullet-active]:!bg-[#6e6e6e]",
].join(" ");

const SwiperSliders = () => {
  return (
    <div className="relative mb-11 w-full fluid">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ el: ".hero-dots", clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
      className="mySwiper h-[450px] w-full max-[767px]:h-[380px]"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <SwiperItem slide={slide} priority={i === 0} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={dotsClass} />
    </div>
  );
};
export default SwiperSliders;
