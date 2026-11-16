import React from "react";
import ServiceItemComponent from "../service_item";
import { ServisPropsType } from "@/types/links";
import imgSaygac from "@/images/saygac-temiri-img.png"
import imgTenzimleyici from "@/images/tenzimleyicilerin-temiri-img.png"

const ServicesComponent = () => {
  const serviceItems: ServisPropsType[] = [
    {
      id: "saygaclar",
      title: "Qaz sayğaclarının təmiri",
      description:
        "Qaz sayğaclarının diaqnostikası, nasazlıqların müəyyən edilməsi və texniki xidməti.",
      imgUrl: imgSaygac,
    },
    {
      id: "tenzimleyiciler",
      title: "Qaz tənzimləyicilərinin təmiri",
      description:
        "Qaz tənzimləyicilərinin yoxlanılması, təmiri və texniki vəziyyətinin qiymətləndirilməsi.",
      imgUrl: imgTenzimleyici,
    },
    {
      id: "filtrler",
      title: "Qaz filtrlərinin xidməti",
      description:
        "Qaz filtrlərinin yoxlanılması, təmizlənməsi və texniki xidmət işləri.",
      imgUrl: imgSaygac,
    },
    {
      id: "korrektorlar",
      title: "Korrektorların təmiri",
      description:
        "Qaz korrektorlarının elektron hissələrinin diaqnostikası və texniki xidməti.",
      imgUrl: imgTenzimleyici,
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {serviceItems.map((item) => (
        <ServiceItemComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ServicesComponent;
