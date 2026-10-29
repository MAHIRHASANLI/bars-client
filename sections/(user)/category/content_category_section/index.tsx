import CategoryProductsComponent from "@/components/(user)/catecory/category_products";
import CategorySidebarComponent from "@/components/(user)/catecory/category_sidebar";
import PageHeading from "@/components/(user)/shared/page_heading_component";
import { getCategoryByHref } from "@/utils/get_category_by_href";
import { notFound } from "next/navigation";
import img from "@/images/tenzimleyicilerin-temiri-img.png";
import { ProductType } from "@/types/links";

export const products: ProductType[] = [
    {
      id: 13,
      badge: "ENDİRİM",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 6.5,
      newPrice: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 1,
      badge: "POPULYAR",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 12,
      badge: "endirim",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      newPrice:4.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 13,
      badge: "POPULYAR",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 2,
      badge: "POPULYAR",
      title: "Silikon yapışdırıcı",
      subtitle: "Təmir və quraşdırma işləri üçün praktik həll.",
      price: 6.5,
      imgUrl: img,
      slug: "silikon-yapisdirici",
    },
    {
      id: 3,
      badge: "YENİ",
      title: "Universal yapışdırıcı",
      subtitle: "Müxtəlif məişət və təmir işlərində istifadə üçün.",
      price: 10,
      imgUrl: img,
      slug: "universal-yapisdirici",
    },
];

const ContentCategorySection = ({ pathname }: { pathname: string }) => {
  const category = getCategoryByHref(pathname);

  if (!category) {
    notFound();
  }
  return (
    <section className="py-8">
      {/* SEHIFE BASLIQI H1 TEQI */}
      <PageHeading title={category.title} />
      {/* CATEGORIYA SEHIFENIN CONTENTI, SIDEBAR VE MEHSULLAR OLAN HISSE */}
      <div className="grid grid-cols-[290px_minmax(0,1fr)] gap-8 mt-2 py-8 border-t border-(--line-color)">
        {/* Sol tərəf: Filterlər */}
        <CategorySidebarComponent />
        {/* Sağ tərəf: Məhsullar */}
        <CategoryProductsComponent products={products} />
      </div>
    </section>
  );
};

export default ContentCategorySection;
