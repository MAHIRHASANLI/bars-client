import SectionHeading from "@/components/(user)/shared/section_heading_component";
import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import ContentCarouselCardComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_card_component";
import { newProductsCectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";


//! Yeni məhsullar bölməsini göstərir.
const NewProductsSection = () => {
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      {/* Bölmənin başlığını göstərir. */}
      <SectionHeading title="Yeni məhsullara göz atın" description="" />

      {/* Yeni məhsulları karusel formasında göstərir. QEYD: KARUSEL BIR COX YERDE GOSTERILIR*/}
      <GeneralCarouselComponent preset="wide" className="min-[1000px]:pt-10">
        {/* Məhsullar massivini dövr edərək hər biri üçün kart yaradır. */}
        {newProductsCectionDatas.map((item) => (
          <ContentCarouselCardComponent key={item.id} item={item} />
        ))}
      </GeneralCarouselComponent>
    </section>
  );
};

export default NewProductsSection;
