import FeaturedCarouselComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component";

import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import ProductCardComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_card_component";
import { products } from "@/api/linklerin_muveqqeti_yerlesmesi";
const EnerjiNProductsSection = () => {

  return (
    <section className="py-8">
      <SubheadingComponent title="Peşəkar qaz həlləri — ENERJİ-N" description="" />

      <FeaturedCarouselComponent>
        {products?.map((item) => (
          <ProductCardComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default EnerjiNProductsSection;
