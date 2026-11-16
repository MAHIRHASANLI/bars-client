import FeaturedCarouselComponent from "@/components/shared/carousels/featured_carousel/feature_carousel_component";
import SubheadingComponent from "@/components/shared/section_heading_component_h2";
import FeaturedCardComponent from "@/components/shared/carousels/featured_carousel/feature_carousel_card_component";
import { barsProductsDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
const BarsProductsSection = () => {

  return (
    <section className="py-8">
      <SubheadingComponent title="Keyfiyyət BARS ilə başlayır" />

      <FeaturedCarouselComponent>
        {barsProductsDatas?.map((item) => (
          <FeaturedCardComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default BarsProductsSection;
