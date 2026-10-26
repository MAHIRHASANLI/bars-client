import GeneralCarouselComponent from "@/shared/carousels/content_carousel/content_carousel_component";
import { SparePartType } from "@/types/links";
import SubheadingComponent from "@/utils/subheading_component";
import spare_part from "@/images/saygac-temiri-img.png"
import SparePartsSectionCarouselItem from "@/components/(user)/home/spare_parts_section_carousel_item";

export const spare_parts :  SparePartType[] = [
  {
    id: 1,
    title: "Qaz sayğacı ehtiyat hissələri",
    description:
      "Qaz sayğaclarının təmiri və texniki xidməti üçün ehtiyat hissələri.",
    category: "Qaz sayğacları",
    imgUrl: spare_part,
    slug: "qaz-saygaci-ehtiyat-hisseleri",
  },
  {
    id: 2,
    title: "Qaz tənzimləyici hissələri",
    description: "Qaz təzyiq tənzimləyiciləri üçün uyğun ehtiyat hissələri.",
    category: "Qaz tənzimləyiciləri",
    imgUrl: spare_part,
    slug: "qaz-tenzimleyici-ehtiyat-hisseleri",
  },
  {
    id: 3,
    title: "Qaz filtri hissələri",
    description: "Qaz filtrlərinin texniki xidməti üçün ehtiyat detallar.",
    category: "Qaz filtrləri",
    imgUrl: spare_part,
    slug: "qaz-filtri-ehtiyat-hisseleri",
  },
  {
    id: 4,
    title: "Klapan ehtiyat hissələri",
    description: "Qaz klapanlarının təmiri və xidməti üçün ehtiyat hissələri.",
    category: "Klapanlar",
    imgUrl: spare_part,
    slug: "klapan-ehtiyat-hisseleri",
  },
  {
    id: 5,
    title: "Sayğac aksesuarları",
    description:
      "Qaz sayğaclarının quraşdırılması və istifadəsi üçün uyğun aksesuarlar.",
    category: "Aksesuarlar",
    imgUrl: spare_part,
    slug: "saygac-aksesuarları",
  },
];
const SparePartsSection = () => {
  return (
    <section className="py-8">
      <SubheadingComponent
        title="Ehtiyat hissələri"
        description="Qaz sayğacları, tənzimləyicilər və digər qaz avadanlıqları üçün ehtiyat hissələrini kəşf edin. Ehtiyacınıza uyğun məhsulları seçin və avadanlıqlarınızın etibarlı işini təmin edin."
      />

      <GeneralCarouselComponent preset="wide">
        {spare_parts.map((item)=><SparePartsSectionCarouselItem key={item.id} item={item}/>)}
      </GeneralCarouselComponent>
    </section>
  );
};

export default SparePartsSection;
