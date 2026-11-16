import Image from "next/image";
import { NewsItem } from "@/types/links";
import { formatDateDots } from "@/utils/format_date";
import Link from "next/link";

const BlogListCardComponent = ({ item }: { item: NewsItem }) => {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="group grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1.7fr]"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl sm:aspect-auto sm:min-h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-gray-200 p-5">
        <div>
          <p className="text-sm font-semibold text-(--color-tone-orange)">
            {item.category}
          </p>
          <h3 className="mt-4 text-xl font-bold text-black sm:text-3xl hover:underline">
            {item.title}
          </h3>
        </div>
        <time className="text-gray-500">{formatDateDots(item.date)}</time>
      </div>
    </Link>
  );
};

export default BlogListCardComponent;
