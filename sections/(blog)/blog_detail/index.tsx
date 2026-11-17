import MainImageComponent from "@/components/(blog)/blog_detail/main_img";
import OtherBlogsComponent from "@/components/(blog)/blog_detail/other_blogs";
import BlogContentComponent from "@/components/(blog)/blog_detail/blog_content";
import { getNewsById } from "@/api/linklerin_muveqqeti_yerlesmesi";
import { notFound } from "next/navigation";

const BlogDetailSection = ({ id }: { id: string }) => {
  const blog = getNewsById(id);
  if (!blog) return notFound();

  return (
    <article>
      <MainImageComponent blog={blog} />

      <div className="mx-auto grid w-full grid-cols-1 gap-8 py-8 sm:py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        <BlogContentComponent blog={blog} />

        <OtherBlogsComponent />
      </div>
    </article>
  );
};

export default BlogDetailSection;
