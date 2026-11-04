import { allProductsCatecorySectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import ScrollCarouselComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_cantainer";
import ScrollCarouselItemComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_card";

const AllCategoriesCarouselSection = () => {
  return (
    <section>
      <ScrollCarouselComponent preset="extraWide" className="pb-8 pt-4 max-[1000px]:pt-3 max-[1000px]:pb-7">
        {allProductsCatecorySectionDatas.map((item) => (
          <ScrollCarouselItemComponent key={item.id} item={item} />
        ))}
      </ScrollCarouselComponent>
    </section>
  );
};

export default AllCategoriesCarouselSection;
