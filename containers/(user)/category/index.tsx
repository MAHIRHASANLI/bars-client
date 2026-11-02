import QuickPurchaseSection from "@/sections/(user)/shared/quick_purchase_section";
import AllCategoriesCarouselSection from "@/sections/(user)/category/all_categories_section";
import ContentCategorySection from "@/sections/(user)/category/content_category_section";

const CategoryContainer = ({ pathname }: { pathname: string }) => {
  return (
    <main className="main-container ">
      {/* Sehife basliginda mehsullarin categoriyasini gosteren slider */}
      <AllCategoriesCarouselSection />
      <div className="full-bleed-line" />
      {/* CATEGORIYA SEHIFENIN CONTENTI, */}
      <ContentCategorySection pathname={pathname} />
      <div className="full-bleed-line" />
      {/* Sürətli alış ADLI SECTION. ITEM CARDLAR IR COX YERDE ISTIFADE OLUNUR */}
      <QuickPurchaseSection />
    </main>
  );
};
{
  /*  {`${category.title} üzrə məhsullarımızla tanış olun.`} */
}

export default CategoryContainer;
