import AboutSection from "@/sections/(user)/home/about";
import AllProductsSection from "@/sections/(user)/home/all_products_section";
import BarsProductsSection from "@/sections/(user)/home/bars_products_section";
import BenefitsSection from "@/sections/(user)/home/benefits_section";
import BusinessAreasSection from "@/sections/(user)/home/business_areas_section";
import EnerjiNProductsSection from "@/sections/(user)/home/enerji_n_products_section";
import MainSections from "@/sections/(user)/home/main_section";
import NewProductsSection from "@/sections/(user)/home/new_products_section";
import NewsPartnershipsSection from "@/sections/(user)/home/news_partnerships_section";
import NewsSection from "@/sections/(user)/home/news_section";
import PartnershipsSection from "@/sections/(user)/home/partnerships_section";
import QuickOrderSection from "@/sections/(user)/home/quick_order_section";
import ServicesAndMoreSection from "@/sections/(user)/home/services_and_more_section";
import SparePartsSection from "@/sections/(user)/home/spare_parts_section";

const HomeContainer = () => {
  return (
    <main>
      {/* Əsas banner və təqdimat bölməsi */}
      <MainSections />

      {/* Bütün məhsul kateqoriyalarının siyahısı */}
      <AllProductsSection />

      {/* Bölmələri vizual olaraq ayıran tam enli xətt */}
      <div className="full-bleed-line" />

      {/* Yeni məhsullar */}
      <NewProductsSection />

      <div className="full-bleed-line" />

      {/* Xəbərlər və əməkdaşlıq bölməsi */}
      <NewsPartnershipsSection />

      <div className="full-bleed-line" />

      {/* Xidmətlər, çatdırılma və digər imkanlar */}
      <ServicesAndMoreSection />

      <div className="full-bleed-line" />

      {/* Şirkətlərin fəaliyyət istiqamətləri */}
      <BusinessAreasSection />

      <div className="full-bleed-line" />

      {/* BARS məhsullarının təqdimatı */}
      <BarsProductsSection />

      <div className="full-bleed-line" />

      {/* Xəbərlər və faydalı məlumatlar */}
      <NewsSection />

      <div className="full-bleed-line" />

      {/* ENERJİ-N qaz və sənaye avadanlıqları */}
      <EnerjiNProductsSection />

      <div className="full-bleed-line" />

      {/* Tərəfdaş brendlər */}
      <PartnershipsSection />

      <div className="full-bleed-line" />

      {/* Şirkətin üstünlükləri */}
      <BenefitsSection />

      <div className="full-bleed-line" />

      {/* Sürətli sifariş bölməsi */}
      <QuickOrderSection />

      <div className="full-bleed-line" />

      {/* Ehtiyat hissələrinin təqdimatı */}
      <SparePartsSection />

      <div className="full-bleed-line" />

      {/* Şirkət haqqında məlumat */}
      <AboutSection />
    </main>
  );
};

export default HomeContainer;
