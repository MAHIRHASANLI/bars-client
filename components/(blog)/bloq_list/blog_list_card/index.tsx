import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/links";
import { formatDateDots } from "@/utils/format_date";

const BlogListCardComponent = ({ item }: { item: NewsItem }) => {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="group grid grid-cols-1 gap-4 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-6 min-[1001px]:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]"
    >
      {/* ŞƏKİL: sabit ölçü */}
      <div className="relative h-44 w-full overflow-hidden rounded-xl sm:h-40 min-[1001px]:h-44 xl:h-48">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 220px, (max-width: 1280px) 260px, 300px"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* MƏTN */}
      <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-200 p-4 sm:p-5 xl:p-6">
        <p className="text-xs font-semibold text-(--color-tone-orange) sm:text-sm">
          {item.category}
        </p>

        <h3 className="line-clamp-3 wrap-break-word text-lg font-bold text-black group-hover:underline sm:text-xl xl:text-2xl">
          {item.title}
        </h3>

        <time
          dateTime={item.date}
          className="mt-auto text-sm text-gray-500 sm:text-base"
        >
          {formatDateDots(item.date)}
        </time>
      </div>
    </Link>
  );
};

export default BlogListCardComponent;