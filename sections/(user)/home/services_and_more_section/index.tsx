import { servicesAndMoreSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import ServicesMoreCarouselItem from "@/components/(user)/home/services_and_more_section/services_more_carousel_item";
import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
type Tone = "neutral" | "blue" | "green" | "orange";

type TitlePart = { text: string; accent?: boolean };

export type ServiceType = {
  id: string;
  label: string;
  tone: Tone;
  title: TitlePart[];
};



const ServicesAndMoreSection = () => {

  return (
    <section className="py-8 pb-16 max-[1000px]:py-5 max-[1000px]:pb-10">
      <SubheadingComponent
        title="Xidmətləri və daha çoxunu kəşf edin"
      />
        <GeneralCarouselComponent preset="wide" showNavigation={false} className="min-[1000px]:pt-10">
          {servicesAndMoreSectionDatas.map((s) => (
            <ServicesMoreCarouselItem key={s.id} service={s} />
          ))}
        </GeneralCarouselComponent>
    </section>
  );
};

export default ServicesAndMoreSection;
