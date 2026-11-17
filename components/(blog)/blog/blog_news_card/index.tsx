
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/links";
import { formatDate } from "@/utils/format_date";

type Props = {
  item: NewsItem;
};

const BlogNewsCard = ({ item }: Props) => {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="group min-w-0"
    >
      <div className="relative w-full aspect-video sm:aspect-auto sm:h-40 xl:h-48 rounded-xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
          className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="mt-3 sm:mt-4">
        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm">
          <span className="font-semibold text-(--color-tone-orange)">
            {item.category}
          </span>

          <span aria-hidden="true" className="text-gray-400">
            •
          </span>

          <time dateTime={item.date} className="text-gray-500">
            {formatDate(item.date)}
          </time>
        </div>

        <h3 className="font-bold text-lg sm:text-xl xl:text-2xl text-black mt-2 line-clamp-2 wrap-break-word group-hover:underline">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogNewsCard;
