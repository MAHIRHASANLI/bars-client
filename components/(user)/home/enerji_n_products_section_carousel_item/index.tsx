import LikeButton from "@/shared/buttons/like_button";
import PrimaryButton from "@/shared/buttons/primary_button";
import { ProductType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";
import Image from "next/image";


const CarouselItemComponent = ({ item }: { item: ProductType }) => {

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
      <h3 className="mb-1 text-2xl font-semibold leading-tight text-[#1d1d1f] max-[1000px]:text-xl">
        {item.title}
      </h3>

      {/* Alt başlıq: min-h 2 sətirlikdir ki, qiymət bütün kartlarda eyni xəttdə dursun */}
      <p className=" min-h-[2.4em] text-sm font-semibold leading-[1.2] text-[#1d1d1f] max-[1000px]:text-xs">
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
        <div className="text-base leading-[1.2] max-[800px]:text-xs">
          <span className="text-(--logo-color)">
            {formatPrice(item.price)} ₼
          </span>

          <span className="ml-2 text-(--color-tone-orange)">Topdan qiymət</span>
        </div>

        {/* Almaq düyməsi */}
        <div className="mt-7 w-full text-center">
          <PrimaryButton href="/">Almaq</PrimaryButton>
        </div>
      </div>

     <LikeButton/>
    </div>
  );
};

export default CarouselItemComponent;
