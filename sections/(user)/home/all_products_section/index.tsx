import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import AllProductSliderItem from "@/components/(user)/home/all_products_section_card_slider";
import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import { defaultItems } from "@/api/linklerin_muveqqeti_yerlesmesi";


const AllProductsSection = () => {
  return (
    <section className="pb-3">
      <SubheadingComponent title="Bütün məhsulları kəşf et" description="" />
      <GeneralCarouselComponent preset="compact" className="min-[1000px]:pt-10">
        {defaultItems.map((item) => (
          <AllProductSliderItem key={item.id} item={item} />
        ))}
      </GeneralCarouselComponent>
    
    </section>
  );
};

export default AllProductsSection;
