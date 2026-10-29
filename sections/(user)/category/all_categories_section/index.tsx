import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import AllProductSliderItem from "@/components/(user)/home/all_products_section_card_slider";
import { allProductsCatecorySectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";

const AllCategoriesCarouselSection = () => {
  return (
    <section className="pb-3">
      <GeneralCarouselComponent preset="wide" className="">
        {allProductsCatecorySectionDatas.map((item) => (
          <AllProductSliderItem
            key={item.id}
            item={item}
            CardClassName="flex-row justify-start items-end gap-0 w-56  max-[800px]:w-44 text-left hover:bg-[rgba(0,0,0,0.04)] rounded-xl pb-2 pt-4"
            imageClassName="h-20 w-26 max-[800px]:h-16 max-[800px]:w-18 shrink-0"
            imageSizes="100px"
            textWrapperClassName="max-w-40"
            titleClassName="text-sm mb-1 leading-4 font-medium line-clamp-2 max-[800px]:text-[12px]"
            priceClassName=" text-xs leading-4 max-[800px]:text-[10px] max-[800px]:leading-4"
          />
        ))}
      </GeneralCarouselComponent>
    </section>
  );
};

export default AllCategoriesCarouselSection;
