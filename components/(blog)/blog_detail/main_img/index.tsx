import { NewsItem } from "@/types/links";
import { formatDateDots } from "@/utils/format_date";
import Image from "next/image";

type Props = {
  news: NewsItem;
};

const MainImageComponent = ({ news }: Props) => {
  return (
    <header className="full-bleed relative h-[calc(100svh-4rem)] min-h-120 overflow-hidden">
      <Image
        src={news.image}
        alt={news.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Qaraltma */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/30" />

      {/* Mətn: blog-container ilə eyni en */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-[min(1440px,90%)] pb-8 text-white sm:pb-10">
        <p className="text-sm font-semibold sm:text-base">{news.category}</p>

        <h1 className="mt-4 max-w-5xl text-3xl font-bold leading-tight wrap-break-word sm:text-4xl lg:text-6xl">
          {news.title}
        </h1>

        <time
          dateTime={news.date}
          className="mt-8 block text-sm text-white/90 sm:text-base"
        >
          {formatDateDots(news.date)}
        </time>

        <div className="mt-5 h-px w-full bg-white/60" aria-hidden="true" />
      </div>
    </header>
  );
};

export default MainImageComponent;