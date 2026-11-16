import { blogSections } from "@/api/linklerin_muveqqeti_yerlesmesi";
import BlogListCardComponent from "@/components/(blog)/bloq_list/blog_list_card";
import OtherBlogsComponent from "@/components/(blog)/blog_detail/other_blogs";
import BreadcrumbComponent from "@/components/(blog)/breadcrumb";

export const metadata = { title: "Bütün xəbərlər" };
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
const newsCategoryData = blogSections.find((item)=>item.id === slug);

  const news = blogSections.flatMap((s) => s.news);
  return (
    <>
      <BreadcrumbComponent />

      <section className="grid grid-cols-1 gap-6 py-6 sm:gap-8 sm:py-8 min-[1001px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] min-[1001px]:gap-12">
        {/* SOL: kartlar */}
        <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
          {newsCategoryData?.news.map((item) => (
            <BlogListCardComponent key={item.id} item={item} />
          ))}
        </div>

        {/* SAĞ: son bloqlar */}
        <OtherBlogsComponent others={news.slice(0, 5)} title="Son bloqlar" />
      </section>
    </>
  );
}