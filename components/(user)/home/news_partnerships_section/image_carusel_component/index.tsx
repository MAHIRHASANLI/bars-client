import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import Image, { StaticImageData } from "next/image";


const ImageCaruselComponent = ({
  imgUrls = [],
}: {
  imgUrls: StaticImageData[];
}) => {
  return (
    <div className="relative w-full h-90">
      <GeneralCarouselComponent className="h-full w-full" preset="single">
        {imgUrls?.map((img, index) => (
          <Image alt="" key={index} src={img} fill className="object-cover"sizes="(max-width: 800px) 80vw, 33vw" />
        ))}
      </GeneralCarouselComponent>
    </div>
  );
};

export default ImageCaruselComponent;
