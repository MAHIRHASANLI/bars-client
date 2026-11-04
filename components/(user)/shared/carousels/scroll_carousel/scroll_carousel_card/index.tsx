import Image from "next/image";
import Link from "next/link";
import { ProductCategoryType } from "@/types/links";
import { truncateLines } from "@/utils/truncate_lines";

type Props = {
  item: ProductCategoryType;
  badge?: string; // məsələn "YENİ"
};

const ScrollCarouselItemComponent = ({ item, badge = item.badge }: Props) => {
  const { href, image, title } = item;

  return (
    <Link
      href={href}
      className=" transition-ease duration-300 group flex flex-row items-end justify-start gap-2 rounded-lg py-4 px-2 pr-6 text-left hover:bg-[rgba(0,0,0,0.04)] max-[800px]:w-44"
    >
      <div className="relative h-18 w-24 shrink-0 max-[800px]:h-14 max-[800px]:w-18">
        <Image
          src={image}
          alt=""
          fill
          sizes="100px"
          className="object-contain   "
        />
      </div>

      <div className="mb-2 max-w-40">
        {badge && (
          <span className="block text-[10px] font-semibold uppercase leading-3 text-(--color-tone-orange)">
            {badge}
          </span>
        )}

        <h3 className="line-clamp-2 text-sm font-medium leading-4 text-black min-[1000px]:mb-1 max-[800px]:text-[12px]">
          {truncateLines(title, 1)}
        </h3>
      </div>
    </Link>
  );
};

export default ScrollCarouselItemComponent;