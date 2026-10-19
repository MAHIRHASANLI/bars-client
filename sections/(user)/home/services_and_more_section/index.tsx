import CarouselComponent from "@/components/(user)/carousel_container";
import ServicesMoreCarouselItem from "@/components/(user)/home/services_and_more_section/services_more_carousel_item";
import SubheadingComponent from "@/utils/subheading_component";

const ServicesAndMoreSection = () => {
  return (
    <section className="py-8">
      <SubheadingComponent
        title="Xidmətləri və daha çoxunu kəşf edin"
        description=""
      />

      <div>
        <CarouselComponent preset="wide">
          {Array(4)
            .fill(null)
            .map((_, index) =><ServicesMoreCarouselItem key={index}/>)}
        </CarouselComponent>
      </div>
    </section>
  );
};

export default ServicesAndMoreSection;
