import SubheadingComponent from "@/components/(user)/shared/section_heading_component_h2";
import { allProductsCatecorySectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import AllProductCarouselComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_cantainer";
import AllProductItemComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_card";

const AllProductsCatecorySection = () => {
  return (
    <section className="pb-3">
      <SubheadingComponent title="Bütün məhsulları kəşf et" />
      <AllProductCarouselComponent preset="extraWide" className="min-[1000px]:pt-6 pt-4">
        {allProductsCatecorySectionDatas.map((item) => (
          
          <AllProductItemComponent key={item.id} item={item} />
        ))}
      </AllProductCarouselComponent>
    </section>
  );
};

export default AllProductsCatecorySection;
