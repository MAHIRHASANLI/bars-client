import AboutSection from "@/sections/(main)/home/about";
import AllProductsCatecorySection from "@/sections/(main)/home/all_products_section";
import BarsProductsSection from "@/sections/shared/bars_products_section";
import BenefitsSection from "@/sections/(main)/home/benefits_section";
import BusinessAreasSection from "@/sections/(main)/home/business_areas_section";
import EnerjiNProductsSection from "@/sections/shared/enerji_n_products_section";
import MainSections from "@/sections/(main)/home/main_section";
import NewProductsSection from "@/sections/(main)/home/new_products_section";
import NewsPartnershipsSection from "@/sections/(main)/home/news_partnerships_section";
import NewsSection from "@/sections/shared/news_section";
import QuickOrderSection from "@/sections/(main)/home/quick_order_section";
import ServicesAndMoreSection from "@/sections/(main)/home/services_and_more_section";
import SparePartsSection from "@/sections/(main)/home/spare_parts_section";
import PartnershipsSection from "@/sections/shared/partnerships_section";

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

      {/*5 Xidmətlər, çatdırılma və digər imkanlar Xidmətləri və daha çoxunu kəşf edin*/}
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
