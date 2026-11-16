import MainBrandsSection from "@/sections/(main)/brands/main_section";
import WorksSection from "@/sections/(main)/brands/works_section";
import NewsSection from "@/sections/shared/news_section";
import QuickPurchaseSection from "@/sections/shared/quick_purchase_section";

const BrandsContainer = () => {
  return (
    <main>
      <MainBrandsSection />
      {/* Bölmələri vizual olaraq ayıran tam enli xətt */}
      <div className="full-bleed-line" />
      <WorksSection />
      {/* Bölmələri vizual olaraq ayıran tam enli xətt */}
      <div className="full-bleed-line" />
      <QuickPurchaseSection />
      {/* Bölmələri vizual olaraq ayıran tam enli xətt */}
      <div className="full-bleed-line" />
      <NewsSection />
    </main>
  );
};

export default BrandsContainer;
