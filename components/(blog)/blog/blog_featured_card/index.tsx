
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/links";
import { formatDate } from "@/utils/format_date";

type Props = {
  item: NewsItem;
  moreHref?: string;
};

const BlogFeaturedCard = ({ item, moreHref }: Props) => {
  console.log("moreHref : ",moreHref)
  return (
    <div className="flex flex-col gap-6">
      <div className="group relative w-full h-120 rounded-xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 1000px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 min-[1001px]:bottom-10 min-[1001px]:left-10 min-[1001px]:right-10 z-10">
          <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-[#F2F2F2]">
            <span className="font-semibold">{item.category}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={item.date}>
              {formatDate(item.date)}
            </time>
          </div>

          <Link href={`${item.id}`}>
            <h3 className="relative w-fit max-w-full wrap-break-word line-clamp-3 font-bold text-xl sm:text-2xl min-[1001px]:text-3xl text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              {item.title}
            </h3>
          </Link>
        </div>
      </div>

      {moreHref && (
        <Link
          href={moreHref}
          className="group/btn inline-flex w-fit items-center gap-2 rounded-full border border-black px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Daha çox
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          >
            →
          </span>
        </Link>
      )}
    </div>
  );
};

export default BlogFeaturedCard;
