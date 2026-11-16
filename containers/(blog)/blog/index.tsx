import { blogSections } from "@/api/linklerin_muveqqeti_yerlesmesi";
import BreadcrumbComponent from "@/components/(blog)/breadcrumb";
import BlogSection from "@/sections/(blog)/blog";

export default function Page() {
  return (
    <>
    <BreadcrumbComponent />
      {blogSections.map((section) => (
        <BlogSection
          key={section.id}
          title={section.sectionTitle}
          news={section.news}
          moreHref={`/blog/category/${section.id}`}
        />
      ))}
    </>
  );
}
// import { NewsItem } from "@/types/links";

// export const getBlogUrl = (item: Pick<NewsItem, "id" | "category">) =>
//   `/blog/category/${item.category}/${item.id}`;