import { notFound } from "next/navigation";
import NewsDetail from "@/containers/(blog)/blog_detail";
import { getNewsById, getOtherNews } from "@/api/linklerin_muveqqeti_yerlesmesi";
 

type Props = { params: Promise<{ id: string }> };

export default async function Page({ params }: Props) {
  const { id } = await params;
  const news = getNewsById(id);
  if (!news) notFound();

  return <NewsDetail news={news} others={getOtherNews(news.id)} />;
}