import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ProductCategoryType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";
import { truncateText } from "@/utils/truncate_text";

type Props = {
  item: ProductCategoryType;
  badge?: string;               // məsələn "YENİ"
  CardClassName?: string;           // Link (kart)
  imageClassName?: string;      // şəkil qutusu
  textWrapperClassName?: string; // mətn bloku (ad + qiymət)
  badgeClassName?: string;
  titleClassName?: string;
  priceClassName?: string;
  imageSizes?: string;
};

const AllProductSliderItem = ({
  item,
  badge,
  CardClassName,
  imageClassName,
  textWrapperClassName,
  badgeClassName,
  titleClassName,
  priceClassName,
  imageSizes = "92px",
}: Props) => {
  const { href, image, title, price } = item;

  return (
    <Link
      href={href}
      className={twMerge(
        "group flex flex-col items-center justify-center text-center",
        CardClassName
      )}
    >
      <div
        className={twMerge(
          "relative h-20 w-23 max-[800px]:w-20 max-[800px]:h-16",
          imageClassName
        )}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes={imageSizes}
          className="object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div className={twMerge("", textWrapperClassName)}>
        {badge && (
          <span
            className={twMerge(
              "block text-[10px] font-semibold uppercase leading-3 text-(--color-tone-orange)",
              badgeClassName
            )}
          >
            {badge}
          </span>
        )}

        <h3
          className={twMerge(
            "text-base font-semibold leading-5 text-black max-[800px]:text-sm",
            titleClassName
          )}
        >
          {truncateText(title, 55)}
        </h3>

        <span
          className={twMerge(
            "block text-sm font-normal leading-4 max-[800px]:leading-2 text-(--secondary-color) max-[800px]:text-xs",
            priceClassName
          )}
        >
          {formatPrice(price)} ₼-dən
        </span>
      </div>
    </Link>
  );
};

export default AllProductSliderItem;