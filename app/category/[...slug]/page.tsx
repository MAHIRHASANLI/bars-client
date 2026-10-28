import CategoryContainer from "@/containers/(user)/category_container";
import { getCategoryByHref } from "@/utils/get_category_by_href";
import { notFound } from "next/navigation";

// URL-dən gələn kateqoriya parametrlərinin tipini müəyyən edir.
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function CategoryPage({ params }: Props) {
  // URL-dən gələn slug parametrlərini əldə edirik.
  const { slug } = await params;

  // Slug massivini tam kateqoriya URL-inə çeviririk.
  // Məsələn: ["adhesives", "silicones"] → "/category/adhesives/silicones"
  const pathname = `/category/${slug.join("/")}`;

  // Verilmiş URL-ə uyğun kateqoriyanın mövcudluğunu yoxlayırıq.
  const category = getCategoryByHref(pathname);

  // Kateqoriya tapılmadıqda 404 səhifəsini göstəririk.
  if (!category) {
    notFound();
  }

  // Kateqoriya mövcud olduqda uyğun səhifəni göstəririk.
  return <CategoryContainer pathname={pathname} />;
}