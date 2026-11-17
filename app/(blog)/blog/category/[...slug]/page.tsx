import BlogDetailContainer from "@/containers/(blog)/blog_detail";
import CategoryContainer from "@/containers/(blog)/category";
import { notFound } from "next/navigation";

export const metadata = { title: "Bütün xəbərlər" };
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  if (slug.length == 1) return <CategoryContainer slug={slug[0]} />;

  else if (slug.length == 2) return <BlogDetailContainer id={slug[slug.length - 1]} />;
  
  else notFound();
}
