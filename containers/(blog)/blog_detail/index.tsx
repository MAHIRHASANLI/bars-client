import type { NewsItem } from "@/types/links";
import BlogDetailSection from "@/sections/(blog)/blog_detail";

type Props = {
  news: NewsItem;
  others: NewsItem[];
};

const NewsDetail = ({ news, others }: Props) => {
  return <BlogDetailSection news={news} others={others} />;
};

export default NewsDetail;
