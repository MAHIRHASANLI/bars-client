import CategoryProductsComponent from "@/components/(user)/catecory/category_products";
import CategorySidebarComponent from "@/components/(user)/catecory/category_sidebar";
import PageHeading from "@/components/(user)/shared/page_heading_component";
import { getCategoryByHref } from "@/utils/get_category_by_href";
import { notFound } from "next/navigation";
import { products } from "@/api/linklerin_muveqqeti_yerlesmesi";

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
