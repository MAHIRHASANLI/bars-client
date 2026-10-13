import { HeroSlide } from "@/types/links";
import Image from "next/image";
import Link from "next/link";

const SwiperItem = ({ slide, priority = false }: { slide: HeroSlide; priority?: boolean }) => {
  return (
    <div
      className="relative flex h-full w-full overflow-hidden text-[#111]
        before:pointer-events-none before:absolute before:-top-10 before:left-[10%]
        before:h-[300px] before:w-[370px] before:rounded-full before:bg-white/35 before:blur-[60px] before:content-['']
        lg:min-h-[clamp(420px,32vw,600px)]"
      style={{
        backgroundColor: slide.bg ?? "#BFDC6E",
        fontFamily: "var(--font-hero, Montserrat, system-ui, sans-serif)",
      }}
    >
      {/* pb: pagination nöqtələrinin bannerə girən hissəsi üçün boşluq */}
      <div className="relative mx-auto grid w-full max-w-[1490px] grid-cols-1 items-center gap-4 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-10 lg:pb-16">
        {/* Mətn (mobildə şəklin altında) */}
        <div className="flex flex-col items-center gap-3 text-center sm:gap-3.5">
          <h1
            className="m-0 text-[clamp(28px,2.6vw,50px)] font-extrabold leading-[1.1] tracking-[-0.01em]"
            style={{ color: slide.accent ?? "#A3232C" }}
          >
            {slide.title}
          </h1>

          <p className="m-0 max-w-[440px] text-[clamp(15px,1.15vw,22px)] leading-[1.4]">
            {slide.subtitle}
          </p>

          {slide.payText && (
            <span className="inline-flex max-w-full items-center rounded-full bg-white/50 px-4 py-1 text-center text-[clamp(12px,0.95vw,18px)] leading-snug">
              {slide.payText}
            </span>
          )}

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-[18px] gap-y-3">
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

          {/* Artıq absolute deyil: mətnin altında, üst-üstə düşmür */}
          {slide.note && (
            <p className="mt-1 max-w-[520px] text-[13px] leading-snug text-[#444] md:text-sm lg:text-base">
              {slide.note}
            </p>
          )}
        </div>

        {/* Ad + şəkil (mobildə və planşetdə yuxarıda) */}
        <div className="order-first flex flex-col items-center gap-1.5 lg:order-none">
          <span className="text-[clamp(18px,1.55vw,30px)] font-extrabold tracking-[0.01em]">
            {slide.badge}
          </span>
          <div className="relative aspect-[4/3] w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[420px]">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 420px"
              priority={priority}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperItem;