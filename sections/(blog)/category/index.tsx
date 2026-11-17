import { blogSections } from "@/api/linklerin_muveqqeti_yerlesmesi";
import OtherBlogsComponent from "@/components/(blog)/blog_detail/other_blogs";
import BlogListCardComponent from "@/components/(blog)/bloq_list/blog_list_card";

const ContentCategorySection = ({ slug }: { slug: string }) => {
  const newsCategoryData = blogSections.find((item) => item.id === slug);

  // const news = blogSections.flatMap((s) => s.news);
  return (
    <section className="grid grid-cols-1 gap-6 py-6 sm:gap-8 sm:py-8 min-[1001px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] min-[1001px]:gap-12">
      {/* SOL: kartlar */}
      <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
        {newsCategoryData?.news.map((item) => (
          <BlogListCardComponent key={item.id} item={item} />
        ))}
      </div>

      {/* SAĞ: son bloqlar */}
      <OtherBlogsComponent/>
    </section>
  );
};

export default ContentCategorySection;
