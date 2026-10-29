import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import PartnershipsCardItem from "@/components/(user)/home/partnerships_section_partner_card";
import { partnershipsSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
 {/*10 Tərəfdaş brendlər */}
const PartnershipsSection = () => {

  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      <SubheadingComponent
        title="Güvəndiyimiz tərəfdaşlar"
        description=" Keyfiyyətli məhsullar və etibarlı əməkdaşlıq üçün seçdiyimiz tərəfdaşlarla tanış olun"
      />

      <GeneralCarouselComponent preset="wide" className="min-[1000px]:pt-10 pt-4">
        {partnershipsSectionDatas.map((item)=><PartnershipsCardItem key={item.id} item={item}/>)}
      </GeneralCarouselComponent>
    </section>
  );
};

export default PartnershipsSection;
