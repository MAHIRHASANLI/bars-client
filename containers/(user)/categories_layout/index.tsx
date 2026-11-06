import AllCategoriesCarouselSection from "@/sections/(user)/category/all_categories_section";
import React, { ReactNode } from "react";
import QuickPurchaseSection from "@/sections/(user)/shared/quick_purchase_section";

const CategoriesContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* Ortaq kateqoriya slider-i */}
      <AllCategoriesCarouselSection />
      <div className="full-bleed-line" />
      {children}
      <div className="full-bleed-line" />
      {/* Ortaq sürətli alış section-u */}
      <QuickPurchaseSection />
    </main>
  );
};

export default CategoriesContainer;
