import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import ContentCarouselCardComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_card_component";
import { sparePartsSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";


const SparePartsSection = () => {
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      <SubheadingComponent
        title="Ehtiyat hissələri"
        description="Qaz sayğacları, tənzimləyicilər və digər qaz avadanlıqları üçün ehtiyat hissələrini kəşf edin. Ehtiyacınıza uyğun məhsulları seçin və avadanlıqlarınızın etibarlı işini təmin edin."
      />

      <GeneralCarouselComponent preset="wide" className="pt-10 max-[1000px]:pt-6">
        {sparePartsSectionDatas.map((item)=><ContentCarouselCardComponent key={item.id} item={item}/>)}
      </GeneralCarouselComponent>
    </section>
  );
};

export default SparePartsSection;
