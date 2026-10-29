import FeaturedCarouselComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import ProductCardComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_card_component";
import { barsProductsDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
const BarsProductsSection = () => {

  return (
    <section className="py-8">
      <SubheadingComponent title="Keyfiyyət BARS ilə başlayır" description="" />

      <FeaturedCarouselComponent>
        {barsProductsDatas?.map((item) => (
          <ProductCardComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default BarsProductsSection;
