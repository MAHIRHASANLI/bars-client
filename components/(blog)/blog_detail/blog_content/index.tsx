
import { NewsItem } from "@/types/links";
import BlogMetaComponent from "@/components/(blog)/blog_detail/blog_meta";

type Props = {
  blog: NewsItem;
};

const BlogContentComponent = ({ blog }: Props) => {
  return (
    <div className="min-w-0">
      <BlogMetaComponent blog={blog} />

      <h2 className="mt-3 text-2xl font-bold leading-tight wrap-break-word text-black sm:text-3xl lg:text-4xl">
        {blog.title}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-gray-800 sm:text-lg">
        {blog.text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogContentComponent;
