import Image from "next/image";
import Link from "next/link";
import { ProductCategoryType } from "@/types/links";
import { formatPrice } from "@/utils/format_price_component";

// 1739 -> "1 739"


const AllProductSliderItem = ({ item }: { item: ProductCategoryType }) => {
  const { href, image, name, price } = item;

  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-center text-center w-30 max-[800px]:w-24"
    >
      <div className="relative h-20 w-23 max-[800px]:w-20  max-[800px]:h-16">
        {/* alt boşdur, çünki ad aşağıda mətn kimi yazılıb (ekran oxuyucu iki dəfə oxumasın) */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="92px"
          className="object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div>
        <h3 className="text-base font-semibold leading-5 text-black max-[800px]:text-sm" >{name}</h3>
        <span className="text-sm font-normal leading-4 max-[800px]:leading-2 text-(--secondary-color) max-[800px]:text-xs">
          {formatPrice(price)} ₼-dən
        </span>
      </div>
    </Link>
  );
};

export default AllProductSliderItem;
