
import BlogFeaturedCard from "@/components/(blog)/blog/blog_featured_card";
import BlogNewsCard from "@/components/(blog)/blog/blog_news_card";
import SectionHeading from "@/components/shared/section_heading_component_h2";

import { NewsItem } from "@/types/links";

type BlogSectionProps = {
  title: string;
  news: NewsItem[];
  moreHref?: string;
};

const BlogContentSection = ({
  title,
  news,
  moreHref,
}: BlogSectionProps) => {
  if (!news?.length) return null;

  const [featured, ...rest] = news.slice(0, 5);

  return (
    <section className="py-6 sm:py-12">
      <SectionHeading title={title} />

      <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-10">
        <BlogFeaturedCard
          item={featured}
          moreHref={moreHref}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 content-start">
          {rest.map((item) => (
            <BlogNewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContentSection;
