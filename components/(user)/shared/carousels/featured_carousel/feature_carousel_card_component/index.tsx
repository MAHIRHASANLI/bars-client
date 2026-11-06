import LikeButtonComponent from "@/components/(user)/shared/buttons/btn_like";
import PrimaryButton from "@/components/(user)/shared/buttons/primary_button";
import { ProductType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";
import Image from "next/image";
import BtnBasketIconComponent from "../../../buttons/btn_basket";
import { truncateLines } from "@/utils/truncate_lines";

const FeaturedCardComponent = ({
  pathname,
  item,
}: {
  pathname?: string | undefined;
  item: ProductType;
}) => {
  //TODO Endirimin olub-olmadığını yoxlayırıq.
  const hasDiscount =
    typeof item.oldPrice === "number" && item.oldPrice > item.price;

  //TODO Qənaət olunan məbləğ.
  const savedAmount = hasDiscount ? item.oldPrice! - item.price : 0;

  //TODO Məhsul detail səhifəsinin URL-i
  let detailSlug;
  if(pathname){
     detailSlug = `${pathname}/${item.id}`;
  }else{
    detailSlug =  `category/${item.category}/${item.id}`
  }
  return (
    <div className="relative flex h-full min-h-98 flex-col items-center bg-white px-0 py-4 duration-300 max-[800px]:min-h-0">
      <div className="relative py-6 max-[800px]:py-4">
        <Image
          src={item.imgUrl}
          alt={item.title}
          className="mx-auto h-60 w-64 object-contain transition-transform duration-300 hover:scale-104 max-[800px]:h-40 max-[800px]:w-44"
        />
      </div>

      {/* Badge */}
      {item.badge && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-(--logo-color)">
          {item.badge}
        </span>
      )}

      {/* Başlıq */}
      <h3 className="mx-0 mb-1 w-full cursor-pointer px-0 text-center text-2xl font-semibold leading-tight text-[#1d1d1f] hover:underline max-[1000px]:text-xl">
        {truncateLines(item.title, 1)}
      </h3>

      {/* Alt başlıq: kartın tam eni, maksimum 2 sətir */}
      <p className="truncate-text mx-0 mb-0 min-h-[2.4em] w-full px-0 text-center text-sm leading-[1.2] text-(--secondary-color) line-clamp-2 max-[1000px]:text-xs">
        {truncateLines(item.subtitle, 2)}
      </p>

      {/* Qiymət + düymə: həmişə kartın dibində */}
      <div className="mt-auto w-full px-0 pt-2 text-center">
        {/* Köhnə qiymət üçün həmişə eyni hündürlük */}
        <div className="h-6 text-lg leading-[1.2] text-(--secondary-color) max-[800px]:h-4 max-[800px]:-mt-1 max-[800px]:text-xs">
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

        {/* Cari qiymət: sığmasa növbəti sətrə düşür */}
        <div className="flex flex-wrap items-center justify-center gap-x-1 text-base font-bold leading-[1.2] max-[800px]:text-xs">
          <span className="text-(--logo-color)">
            {formatPrice(item.price)} ₼
          </span>

          {hasDiscount && (
            <span className="text-xs text-(--color-tone-orange)">
              -{formatPrice(savedAmount)} ₼
            </span>
          )}
        </div>

        {/* Almaq düyməsi */}
        <div className="mt-7 w-full text-center max-[800px]:mt-4">
          <PrimaryButton href={`${item.category}/${item.id}`}>Almaq</PrimaryButton>
        </div>
      </div>

      <div className="absolute right-2 top-2 z-10 flex items-start gap-3">
        <LikeButtonComponent />
        <BtnBasketIconComponent product={item} />
      </div>
    </div>
  );
};

export default FeaturedCardComponent;
