"use client";
import Image from "next/image";
import Link from "next/link";
import { formatDateDots } from "@/utils/format_date";
import { getDateDifference } from "@/utils/get_date_difference";
import { usePathname } from "next/navigation";
import { blogSections } from "@/api/linklerin_muveqqeti_yerlesmesi";
 

const OtherBlogsComponent = ( ) => {
  const pathname = usePathname();

  let title

  let others
  let newPath:string;
  if (pathname.includes("news")) {
    others = blogSections.find((i) => i.id === "articles")?.news;
    title = "Məqalələrə baxın";
    newPath = "articles";
  } else if (pathname.includes("articles")) {
    others = blogSections.find((i) => i.id === "news")?.news;
    title = "Xəbərlərə baxın";
    newPath = "news";
  }

  return (
    <aside
      aria-labelledby="other-blogs-title"
      className="min-w-0 min-[1001px]:sticky min-[1001px]:top-4 min-[1001px]:self-start"
    >
      <div className="rounded-xl bg-gray-50 px-4 py-6 sm:px-6 sm:py-8">
        <h3
          id="other-blogs-title"
          className="border-b border-gray-200 pb-4 text-center text-xl font-bold text-black sm:text-2xl"
        >
          {title}
        </h3>
        <ul className="mt-6 space-y-6">
          {others?.slice(0, 5).map((item) => (
            <li key={item.id}>
              <Link
                href={`blog/category/${newPath}/${item.id}`}
                className="group flex items-center gap-4 sm:gap-5"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="line-clamp-2 wrap-break-word text-base font-medium leading-snug text-black group-hover:underline sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    <time dateTime={item.date}>
                      {formatDateDots(item.date)}
                    </time>
                    <span aria-hidden="true"> • </span>
                    {/* {getReadTime(item.text, item.readTime)} min read */}
                    {getDateDifference(item.date)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default OtherBlogsComponent;
