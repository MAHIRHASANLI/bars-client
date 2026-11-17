
import { NewsItem } from "@/types/links";
import { formatDateDots } from "@/utils/format_date";
import { getDateDifference } from "@/utils/get_date_difference";

type Props = {
  blog: NewsItem;
};

const BlogMetaComponent = ({ blog }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 sm:text-base">
      <span className="font-semibold text-blue-600">
        {blog.category}
      </span>

      <span aria-hidden="true">•</span>

      <time dateTime={blog.date}>
        {formatDateDots(blog.date)}
      </time>

      <span aria-hidden="true">•</span>

      <span>
        {getDateDifference(blog.date)} 
      </span>
    </div>
  );
};

export default BlogMetaComponent;
