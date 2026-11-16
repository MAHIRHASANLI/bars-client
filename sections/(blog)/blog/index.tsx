import SectionHeading from "@/components/shared/section_heading_component_h2";
import { NewsItem } from "@/types/links";
import Image from "next/image";
import Link from "next/link";

type BlogSectionProps = {
  title: string;
  news: NewsItem[];
  moreHref?: string; // "Daha çox" düyməsinin linki
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("az-AZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

const BlogSection = ({ title, news, moreHref ="l" }: BlogSectionProps) => {
  if (!news || news.length === 0) return null;

  const featured = news[0];
  const rest = news.slice(1, 5); // featured təkrarlanmır, sağda 4 kart

  return (
    <section className="py-6 sm:py-12">
      <SectionHeading title={title} />

      <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-10">
        {/* SOL: BÖYÜK XƏBƏR + DÜYMƏ */}
        <div className="flex flex-col gap-6">
          <div className="group relative w-full h-120 rounded-xl overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1000px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 min-[1001px]:bottom-10 min-[1001px]:left-10 min-[1001px]:right-10 z-10">
              <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-[#F2F2F2]">
                <span className="font-semibold">{featured.category}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>

              <Link href={`/blog/${featured.id}`}>
                <h3 className="relative w-fit max-w-full wrap-break-word line-clamp-3 font-bold text-xl sm:text-2xl min-[1001px]:text-3xl text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {featured.title}
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
 
        {/* SAĞ: DİGƏR XƏBƏRLƏR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 content-start">
          {rest.map((item) => (
            <div key={item.id} className="group min-w-0">
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
                  <span aria-hidden="true" className="text-gray-400">•</span>
                  <time dateTime={item.date} className="text-gray-500">
                    {formatDate(item.date)}
                  </time>
                </div>

                <Link href={`/blog/${item.id}`}>
                  <h3 className="font-bold text-lg sm:text-xl xl:text-2xl text-black mt-2 line-clamp-3 wrap-break-word hover:underline">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;