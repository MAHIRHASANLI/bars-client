// import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component_h2";
import { partnershipsSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import PartnershipsCardItem from "@/components/(user)/shared/partnerships_section_partner_card";
import ScrollCarouselComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_cantainer";
{
  /*10 Tərəfdaş brendlər */
}
const PartnershipsSection = () => {
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      <SubheadingComponent
        title="Güvəndiyimiz tərəfdaşlar"
      />
      <ScrollCarouselComponent
        preset="wide"
        className="min-[1000px]:py-14 py-4"
      >
        {partnershipsSectionDatas.map((item) => (
          <PartnershipsCardItem key={item.id} item={item} />
        ))}
      </ScrollCarouselComponent>
      {/* <GeneralCarouselComponent
        preset="wide"
        className="min-[1000px]:pt-10 pt-4"
      >
        {partnershipsSectionDatas.map((item) => (
          <PartnershipsCardItem key={item.id} item={item} />
        ))}
      </GeneralCarouselComponent> */}
    </section>
  );
};

export default PartnershipsSection;
