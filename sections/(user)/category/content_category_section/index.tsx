import CategoryProductsComponent from "@/components/(user)/catecory/category_products";
import CategorySidebarComponent from "@/components/(user)/catecory/category_sidebar";
import PageHeading from "@/components/(user)/shared/page_heading_component_h1";
import { getCategoryByHref } from "@/utils/get_category_by_href";
import { notFound } from "next/navigation";
import img from "@/images/tenzimleyicilerin-temiri-img.png";
import { ProductType } from "@/types/links";
import { productDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";

export const products: ProductType[] = [
  {
    id: 13,
    badge: "ENDİRİM",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 6.5,
    oldPrice: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 1,
    badge: "POPULYAR",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 12,
    badge: "endirim",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 4.5,
    oldPrice: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 13323,
    badge: "POPULYAR",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Silikon yapışdırıcı",
    subtitle: "Təmir və quraşdırma işləri üçün praktik həll.",
    price: 6.5,
    imgUrls: [img],
    category: "/category/adhesives/silicones",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Universal yapışdırıcı",
    subtitle: "Müxtəlif məişət və təmir işlərində istifadə üçün.",
    price: 10,
    imgUrls: [img],
    category: "/category/adhesives/universal-adhesives",
  },
];


const ContentCategorySection = ({ pathname }: { pathname: string }) => {
  const category = getCategoryByHref(pathname);

  if (!category) notFound();

  // Həm bu kateqoriyanın, həm də alt kateqoriyaların məhsulları
  const filteredProducts = productDatas.filter(
    (p) => p.category === pathname || p.category.startsWith(`${pathname}/`)
  );
  // const products = await getProductsByCategory(pathname);

  return (
    <section className="py-8 max-[1000px]:pt-6">
      {/* SEHIFE BASLIQI H1 TEQI */}
      <PageHeading title={category.title} className="pb-6 max-[1000px]:pb-3" />
      {/* CATEGORIYA SEHIFENIN CONTENTI, SIDEBAR VE MEHSULLAR OLAN HISSE */}
      <div className="grid grid-cols-[290px_minmax(0,1fr)] gap-8 mt-2 py-8 border-t border-(--line-color) max-[1000px]:grid-cols-1 max-[1000px]:gap-4 max-[1000px]:py-4">
        {/* Sol tərəf: Filterlər */}
        <CategorySidebarComponent />
        {/* Sağ tərəf: Məhsullar */}
        <CategoryProductsComponent
          pathname={category.slug}
          products={filteredProducts}
        />
      </div>
    </section>
  );
};

export default ContentCategorySection;