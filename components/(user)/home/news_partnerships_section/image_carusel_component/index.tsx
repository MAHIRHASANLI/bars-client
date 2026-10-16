import CarouselComponent from "@/components/(user)/carousel_container";
import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageCaruselComponent = ({
  imgUrls = [],
}: {
  imgUrls: StaticImageData[];
}) => {
  return (
    <div className="relative w-full h-90">
      <CarouselComponent className="h-full w-full" preset="single">
        {imgUrls?.map((img, index) => (
          <Image alt="" key={index} src={img} fill className="object-cover" />
        ))}
      </CarouselComponent>
    </div>
  );
};

export default ImageCaruselComponent;
