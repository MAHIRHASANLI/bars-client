
import LikeButtonComponent from "@/components/(user)/shared/buttons/btn_like";
import PrimaryButton from "@/components/(user)/shared/buttons/primary_button";
import { ProductType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";
import Image from "next/image";
import BtnBasketIconComponent from "../../../buttons/btn_basket";

const FeaturedCardComponent = ({ item }: { item: ProductType }) => {
  // Endirimin olub-olmadığını yoxlayırıq.
  const hasDiscount =
    typeof item.oldPrice === "number" && item.oldPrice > item.price;

  // Qənaət olunan məbləğ.
  const savedAmount = hasDiscount ? item.oldPrice! - item.price : 0;

  return (
    <div className="relative flex h-full min-h-98 flex-col items-center justify-center bg-white p-4 duration-300 max-[800px]:h-105 max-[800px]:py-0">
      <div className="relative p-6">
        <Image
          src={item.imgUrl}
          alt={item.title}
          className="mx-auto h-60 w-64 object-contain transition-transform duration-300 hover:scale-104 max-[800px]:h-42 max-[800px]:w-45"
        />
      </div>

      {/* Badge */}
      {item.badge && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-(--logo-color)">
          {item.badge}
        </span>
      )}

      {/* Başlıq */}
      <h3 className="mb-1 cursor-pointer text-center text-2xl font-semibold leading-tight text-[#1d1d1f] hover:underline max-[1000px]:text-xl">
        {item.title}
      </h3>

      {/* Alt başlıq */}
      <p className="mb-2 min-h-[2.4em] px-4 text-center text-sm leading-[1.2] text-(--secondary-color) max-[1000px]:mb-2 max-[1000px]:px-2 max-[1000px]:text-xs">
        {item.subtitle}
      </p>

      <div className="text-center">
        {/* Köhnə qiymət üçün həmişə eyni hündürlük */}
        <div className="h-6 text-lg leading-[1.2] text-(--secondary-color) max-[800px]:h-4 max-[800px]:text-xs">
          {hasDiscount ? (
            <>
              <span className="sr-only">
                Köhnə qiymət: {formatPrice(item.oldPrice!)} ₼
              </span>
              <span className="line-through" aria-hidden="true">
                {formatPrice(item.oldPrice!)} ₼
              </span>
            </>
          ) : null}
        </div>

        {/* Cari qiymət */}
        <div className="text-base font-bold leading-[1.2] max-[800px]:text-xs">
          <span className="text-(--logo-color)">
            {formatPrice(item.price)} ₼
          </span>

          {hasDiscount && (
            <span className="ml-1 text-xs text-(--color-tone-orange)">
              -{formatPrice(savedAmount)} ₼
            </span>
          )}
        </div>

        {/* Almaq düyməsi */}
        <div className="mt-7 w-full text-center">
          <PrimaryButton href={item.slug}>Almaq</PrimaryButton>
        </div>
      </div>

      <div className="absolute right-2 top-2 flex items-start gap-3 disabled:opacity-30">
        <LikeButtonComponent />
        <BtnBasketIconComponent product={item} />
      </div>
    </div>
  );
};

export default FeaturedCardComponent;
