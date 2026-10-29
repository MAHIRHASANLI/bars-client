import AboutSection from "@/sections/(user)/home/about";
import AllProductsCatecorySection from "@/sections/(user)/home/all_products_section";
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
      {/*1 Əsas banner və təqdimat bölməsi */}
      <MainSections />

      {/*2 Bütün məhsul kateqoriyalarının siyahısı */}
      <AllProductsCatecorySection />

      {/* Bölmələri vizual olaraq ayıran tam enli xətt */}
      <div className="full-bleed-line" />

      {/*3 Yeni məhsullar a goz atin*/}
      <NewProductsSection />

      <div className="full-bleed-line" />

      {/*4 Xəbərlər və əməkdaşlıq bölməsi */}
      <NewsPartnershipsSection />

      <div className="full-bleed-line" />

      {/*5 Xidmətlər, çatdırılma və digər imkanlar */}
      <ServicesAndMoreSection />

      <div className="full-bleed-line" />

      {/*6 Şirkətlərin fəaliyyət istiqamətləri */}
      <BusinessAreasSection />

      <div className="full-bleed-line" />

      {/*7 BARS məhsullarının təqdimatı */}
      <BarsProductsSection />

      <div className="full-bleed-line" />

      {/*8 Xəbərlər və faydalı məlumatlar */}
      <NewsSection />

      <div className="full-bleed-line" />

      {/*9 ENERJİ-N qaz və sənaye avadanlıqları */}
      <EnerjiNProductsSection />

      <div className="full-bleed-line" />

      {/*10 Tərəfdaş brendlər */}
      <PartnershipsSection />

      <div className="full-bleed-line" />

      {/*11 Şirkətin üstünlükləri */}
      <BenefitsSection />

      <div className="full-bleed-line" />

      {/*12 Sürətli sifariş bölməsi "Sifarişinizi tez bir zamanda rəsmiləşdirin*/}
      <QuickOrderSection />

      <div className="full-bleed-line" />

      {/*13 Ehtiyat hissələrinin təqdimatı */}
      <SparePartsSection />

      <div className="full-bleed-line" />

      {/*14 Şirkət haqqında məlumat */}
      <AboutSection />
    </main>
  );
};

export default HomeContainer;
