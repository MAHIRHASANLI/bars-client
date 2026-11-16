import { getReadTime } from "@/api/linklerin_muveqqeti_yerlesmesi";
import MainImageComponent from "@/components/(blog)/blog_detail/main_img";
import OtherBlogsComponent from "@/components/(blog)/blog_detail/other_blogs";
import { NewsItem } from "@/types/links";
import { formatDateDots } from "@/utils/format_date";

type Props = {
  news: NewsItem;
  others: NewsItem[];
};

const BlogDetailSection = ({ news, others }: Props) => {
  return (
    
    <article>
      <MainImageComponent news={news} />

      <div className="mx-auto grid w-full grid-cols-1 gap-8 py-8 sm:py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        {/* SOL: kateqoriya, başlıq, tarix, mətn */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 sm:text-base">
            <span className="font-semibold text-blue-600">{news.category}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={news.date}>{formatDateDots(news.date)}</time>
            <span aria-hidden="true">•</span>
            <span>{getReadTime(news.text, news.readTime)} min read</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold leading-tight wrap-break-word text-black sm:text-3xl lg:text-4xl">
            {news.title}
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-800 sm:text-lg">
            {news.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* SAĞ: Digər bloqlar */}
          <OtherBlogsComponent others={others} />
      </div>
    </article>
  );
};

export default BlogDetailSection;