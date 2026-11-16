
import Image from "next/image";
import Link from "next/link";
import { NewsPostType } from "@/types/links";

type Props = {
  item: NewsPostType;
};

const CarouselItemComponent = ({ item }: Props) => {
  return (
    <article className="h-full w-full">
      <Link
        href={item.slug}
        aria-label={`${item.title} — xəbəri oxu`}
        className="group relative block aspect-350/408 h-full w-full overflow-hidden rounded-3xl bg-[#1d1d1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f]"
      >
        {/* Dekorativ fon şəkli */}
        <Image
          src={item.imgUrl}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1000px) 50vw, 25vw"
          className="scale-110 object-cover blur-xs saturate-150 transition-transform duration-700 ease-out group-hover:scale-115 motion-reduce:transition-none motion-reduce:group-hover:scale-110"
        />

        {/* Yüngül örtük */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/10"
        />

        {/* Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
        />

        {/* Blur qatı */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-md mask-[linear-gradient(to_top,black_30%,transparent)]"
        />

        {/* Əsas şəkil */}
        <div className="absolute inset-x-5 top-18 bottom-32 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 max-[800px]:inset-x-4">
          <Image
            src={item.imgUrl}
            alt={item.title}
            fill
            sizes="(max-width: 800px) 80vw, 25vw"
            className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Kateqoriya */}
        {item.category && (
          <span className="absolute left-5 top-5 z-10 rounded-full border border-white/80 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {item.category}
          </span>
        )}

        {/* Tarix və başlıq */}
        <div className="absolute inset-x-5 bottom-5 z-10 flex flex-col gap-2">
          {item.date && (
            <time className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span
                aria-hidden="true"
                className="h-0.5 w-4 shrink-0 rounded-full bg-(--color-tone-orange)"
              />
              {item.date}
            </time>
          )}

          <h3 className="line-clamp-2 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:underline max-[800px]:text-lg">
            {item.title}
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default CarouselItemComponent;
