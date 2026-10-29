import FeaturedCarouselComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import FeaturedCardComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_card_component";
import { quickOrderSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";

//!12 Sürətli sifariş bölməsi "Sifarişinizi tez bir zamanda rəsmiləşdirin*/

const QuickOrderSection = () => {
  return (
    <section className="py-8">
      <SubheadingComponent
        title="Sifarişinizi tez bir zamanda rəsmiləşdirin"
        description=""
      />
      <FeaturedCarouselComponent>
        {quickOrderSectionDatas?.map((item) => (
          <FeaturedCardComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default QuickOrderSection;
