import BranchesSection from "@/sections/(main)/branches";
import MainBranchesSection from "@/sections/(main)/branches/main_section";
import BarsProductsSection from "@/sections/shared/bars_products_section";
import EnerjiNProductsSection from "@/sections/shared/enerji_n_products_section";
import PartnershipsSection from "@/sections/shared/partnerships_section";

const BranchesContainer = () => {
  return (
    <main>
      <MainBranchesSection />
      <div className="full-bleed-line" />
      <BranchesSection />
      <div className="full-bleed-line" />
      {/*7 BARS məhsullarının təqdimatı */}
      <BarsProductsSection />
      <div className="full-bleed-line" />
      <PartnershipsSection />
      <div className="full-bleed-line" />
      {/*9 ENERJİ-N qaz və sənaye avadanlıqları */}
      <EnerjiNProductsSection />
    </main>
  );
};

export default BranchesContainer;
