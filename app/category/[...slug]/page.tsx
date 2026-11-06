import CategoriesContainer from "@/containers/(user)/categories_layout";
import ContentCategorySection from "@/sections/(user)/category/content_category_section";
import ProductDetailSection from "@/sections/(user)/category_detail";
// import CategoryContainer from "@/containers/(user)/category";
import { getCategoryByHref } from "@/utils/get_category_by_href";

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
  //
  // !men params in links arrayinda olub olmamagini yoxlayib, ture gelirse category sehifesine false gelirse slug arrayindan sonuncu ElementInternals(yeniki bu id dir) goturub detail sehifesini gostererek one kecid etmeliyem
  const productId = slug[slug.length - 1].toString();
  // Kateqoriya tapılmadıqda 404 səhifəsini göstəririk.
  return (
    <CategoriesContainer>
      {category ? (
        <ContentCategorySection pathname={pathname} />
      ) : (
        <ProductDetailSection productId={productId} />
      )}
    </CategoriesContainer>
  );
}
