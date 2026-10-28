import LikeButton from "@/components/(user)/shared/buttons/like_button";
import PrimaryButton from "@/components/(user)/shared/buttons/primary_button";
import { ProductType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";
import Image from "next/image";

const FeaturedCardComponent = ({ item }: { item: ProductType }) => {
  return (
    <div className="relative flex items-center justify-center h-full min-h-98  max-[800px]:h-105 flex-col  bg-white p-4  max-[800px]:py-0  duration-300">
      <div className="relative  p-6">
        <Image
          src={item.imgUrl}
          alt={item.title}
          className="object-contain mx-auto h-60 w-64 max-[800px]:h-42 max-[800px]:w-45 transition-transform duration-300 hover:scale-104"
        />
      </div>

      {/* Badge */}
      {item.badge && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-(--logo-color)">
          {item.badge}
        </span>
      )}

      {/* Başlıq */}
      <h3 className="hover:underline cursor-pointer  text-center mb-1 text-2xl font-semibold leading-tight text-[#1d1d1f] max-[1000px]:text-xl">
        {item.title}
      </h3>

      {/* Alt başlıq: min-h 2 sətirlikdir ki, qiymət bütün kartlarda eyni xəttdə dursun */}
      <p className="text-center px-4 max-[1000px]:px-2 mb-2 max-[1000px]:mb-2 min-h-[2.4em] text-sm leading-[1.2] text-(--secondary-color) max-[1000px]:text-xs">
        {item.subtitle}
      </p>

      <div className="text-center">
        {/* Köhnə qiymət üçün həmişə eyni hündürlük */}
        <div className="h-6 text-lg leading-[1.2] text-(--secondary-color) max-[800px]:h-4 max-[800px]:text-xs">
          {item.oldPrice ? (
            <span className="line-through">{formatPrice(item.oldPrice)} ₼</span>
          ) : null}
        </div>

        {/* Cari qiymət */}
        <div className="text-base leading-[1.2] max-[800px]:text-xs font-bold">
          <span className="text-(--logo-color)">
            {formatPrice(item.price)} ₼
          </span>

          {item.oldPrice != null && item.oldPrice > item.price && (
            <span className="ml-1 text-xs text-(--color-tone-orange)">
              -{formatPrice(item.oldPrice - item.price)} ₼
            </span>
          )}
        </div>

        {/* Almaq düyməsi */}
        <div className="mt-7 w-full text-center">
          <PrimaryButton href="/">Almaq</PrimaryButton>
        </div>
      </div>

      <LikeButton />
    </div>
  );
};

export default FeaturedCardComponent;














/*
   Alt başlıq: min-h 2 sətirlikdir ki, qiymət bütün kartlarda eyni xəttdə dursun 
      <p className="text-center px-4 max-[1000px]:px-2 mb-4 max-[1000px]:mb-2 min-h-[2.4em] text-sm font-semibold leading-[1.2] text-[#1d1d1f] max-[1000px]:text-xs">
        {item.subtitle}
      </p>
*/