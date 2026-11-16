import { HeroSlide } from "@/types/links";
import Image from "next/image";
import Link from "next/link";

const SwiperItem = ({
  slide,
  priority = false,
}: {
  slide: HeroSlide;
  priority?: boolean;
}) => {
  return (
    <div
      className="relative h-full w-full overflow-hidden text-[#111]
        before:pointer-events-none before:absolute before:-top-10 before:left-[10%]
        before:h-[300px] before:w-[370px] before:rounded-full before:bg-white/35 before:blur-[60px] before:content-['']"
      style={{
        backgroundColor: slide.bg ?? "#BFDC6E",
        fontFamily: "var(--font-hero, Montserrat, system-ui, sans-serif)",
      }}
    >
      {/* pb: pagination nöqtələrinin bannerə girən hissəsi üçün boşluq */}
      <div className="relative mx-auto grid h-full w-full max-w-[1490px] grid-cols-1 grid-rows-[auto_1fr] items-center gap-2 px-5 pb-12 pt-5 sm:px-8 md:grid-cols-2 md:grid-rows-1 md:gap-8 md:px-10 md:pb-10 md:pt-6 lg:px-12">
        {/* Ad + şəkil (≤767px yuxarıda, md+ sağda) */}
        <div className="order-first flex min-h-0 flex-col items-center gap-1.5 md:order-last md:h-full md:justify-center">
          <span className="text-[clamp(16px,1.55vw,30px)] font-extrabold tracking-[0.01em]">
            {slide.badge}
          </span>
          <div className="relative h-[120px] w-full max-w-[240px] sm:h-[150px] sm:max-w-[300px] md:h-auto md:max-w-[420px] md:flex-1">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 420px"
              priority={priority}
              className="object-contain"
            />
          </div>
        </div>

        {/* Mətn */}
        <div className="flex min-h-0 flex-col items-center justify-center gap-2 text-center md:h-full md:gap-3">
          <h1
            className="m-0 line-clamp-2 text-[clamp(24px,2.6vw,50px)] font-extrabold leading-[1.1] tracking-[-0.01em]"
            style={{ color: slide.accent ?? "#A3232C" }}
          >
            {slide.title}
          </h1>

          <p className="m-0 line-clamp-3 max-w-[440px] text-[clamp(14px,1.15vw,22px)] leading-[1.4]">
            {slide.subtitle}
          </p>

          {/* Kiçik ekranda gizlədilir ki, hündürlük artmasın */}
          {slide.payText && (
            <span className="hidden max-w-full items-center rounded-full bg-white/50 px-4 py-1 text-center text-[clamp(12px,0.95vw,18px)] leading-snug md:inline-flex">
              {slide.payText}
            </span>
          )}

          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2">
            <Link
              href={slide.link}
              className="inline-flex h-10 items-center rounded-full border-[1.5px] border-[#111] px-6 text-base text-[#111] no-underline transition-colors hover:bg-[#111] hover:text-white motion-reduce:transition-none sm:px-7 sm:text-lg"
            >
              {slide.cta}
            </Link>
            {slide.secondaryCta && (
              <Link
                href={slide.secondaryCta.link}
                className="text-sm text-[#111] underline underline-offset-[3px] sm:text-base"
              >
                {slide.secondaryCta.text}
              </Link>
            )}
          </div>

          {slide.note && (
            <p className="hidden max-w-[520px] text-sm leading-snug text-[#444] md:line-clamp-2 md:block lg:text-base">
              {slide.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwiperItem;