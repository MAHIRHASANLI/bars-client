
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format_price_component";
import { ProductType } from "@/types/links";

const ContentCarouselCardComponent = ({
  item,
}: {
  item: ProductType;
}) => {
  // Endirimin olub-olmadığını yoxlayırıq.
  const hasDiscount =
    typeof item.oldPrice === "number" && item.oldPrice > item.price;

  // Endirim faizini hesablayırıq.
  const discountPercent = hasDiscount
    ? Math.round((1 - item.price / item.oldPrice!) * 100)
    : 0;

  return (
    <Link
      href={item.slug}
      className="group flex h-full flex-col rounded-3xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f] motion-reduce:transition-none"
    >
      <div className="relative h-64 rounded-2xl bg-[#f5f5f7] max-[800px]:h-52">
        {item.badge && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase text-[#b64400] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            {item.badge}
          </span>
        )}

        {hasDiscount && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-[#b64400] px-3 py-1 text-xs font-semibold text-white">
            <span className="sr-only">Endirim: </span>-{discountPercent}%
          </span>
        )}

        <div className="absolute inset-4 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Image
            src={item.imgUrl}
            alt={item.title}
            fill
            sizes="(max-width: 800px) 80vw, 33vw"
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-5 max-[800px]:px-2 max-[800px]:pt-4">
        <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-[#1d1d1f] max-[800px]:text-lg">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-(--secondary-color) max-[800px]:text-xs">
            {item.subtitle}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-3 gap-y-2 pt-4">
          <div>
            {hasDiscount && (
              <p className="text-xs text-(--secondary-color)">
                <span className="sr-only">
                  Köhnə qiymət: {formatPrice(item.oldPrice!)} ₼
                </span>
                <s aria-hidden="true">
                  {formatPrice(item.oldPrice!)} ₼
                </s>
              </p>
            )}

            <p className="text-[#1d1d1f]">
              <span className="text-lg font-semibold max-[800px]:text-base">
                {formatPrice(item.price)} ₼
              </span>
              <span className="ml-1 text-xs text-(--secondary-color)">
                -dən
              </span>
            </p>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-[#b64400]">
            Ətraflı
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-2 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ContentCarouselCardComponent;
