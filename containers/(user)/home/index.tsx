import AboutSection from "@/sections/(user)/home/about";
import AllProductsSection from "@/sections/(user)/home/all_products_section";
import BarsProductsSection from "@/sections/(user)/home/bars_products_section";
import BenefitsSection from "@/sections/(user)/home/benefits_section";
import BusinessAreasSection from "@/sections/(user)/home/business_areas_section";
import EnerjiNProductsSection from "@/sections/(user)/home/enerji_n_products_section";
import HomeSections from "@/sections/(user)/home/main_section";
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
      <HomeSections />
      <AllProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />
      <NewProductsSection />
      <div className="full-bleed-line" />
      <NewsPartnershipsSection />
      <div className="full-bleed-line" />
      <ServicesAndMoreSection />
      <div className="full-bleed-line" />
      <BusinessAreasSection />
      <div className="full-bleed-line" />
      <BarsProductsSection />
      <div className="full-bleed-line" />
      <NewsSection />
      <div className="full-bleed-line" />
      <EnerjiNProductsSection />
      <div className="full-bleed-line" />
      <PartnershipsSection />
      <div className="full-bleed-line" />
      <BenefitsSection />
      <div className="full-bleed-line" />
      <QuickOrderSection/>
      <div className="full-bleed-line" />
      <SparePartsSection/>
      <div className="full-bleed-line" />
      <AboutSection/>
    </main>
  );
};

export default HomeContainer;
