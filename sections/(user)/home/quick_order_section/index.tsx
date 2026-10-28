import FeaturedCarouselComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import FeaturedCardComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_card_component";
import { products } from "@/api/linklerin_muveqqeti_yerlesmesi";


const QuickOrderSection = () => {
  return <section className="py-8">
    <SubheadingComponent title="Sifarişinizi tez bir zamanda rəsmiləşdirin" description=""/>
    <FeaturedCarouselComponent>
    {products?.map((item) => (
          <FeaturedCardComponent key={item.id} item={item} />
        ))}
    </FeaturedCarouselComponent>
  </section>;
};

export default QuickOrderSection;
