import { blogSections } from "@/api/linklerin_muveqqeti_yerlesmesi";
import BlogContentSection from "@/sections/(blog)/blog";

const BlogPageContainer = () => {
  return (
    <>
     

      {blogSections.map((section) => (
        <BlogContentSection
          key={section.id}
          title={section.sectionTitle}
          news={section.news}
          moreHref={`/blog/category/${section.id}`}
        />
      ))}
    </>
  );
};

export default BlogPageContainer;
