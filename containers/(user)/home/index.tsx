import AllProductsSection from "@/sections/(user)/home/all_products_section";
import BarsProductsSection from "@/sections/(user)/home/bars_products_section";
import BusinessAreasSection from "@/sections/(user)/home/business_areas_section";
import HomeSections from "@/sections/(user)/home/main_section";
import NewProductsSection from "@/sections/(user)/home/new_products_section";
import NewsPartnershipsSection from "@/sections/(user)/home/news_partnerships_section";
import NewsSection from "@/sections/(user)/home/news_section";
import PartnershipsSection from "@/sections/(user)/home/partnerships_section";
import ServicesAndMoreSection from "@/sections/(user)/home/services_and_more_section";

const HomeContainer = () => {
  return (
    <main>
      <HomeSections />
      <AllProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <NewProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <NewsPartnershipsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <ServicesAndMoreSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <BusinessAreasSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <BarsProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <NewsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <PartnershipsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
    </main>
  );
};

export default HomeContainer;
