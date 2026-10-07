import React from "react";
import ServiceProcessItemComp from "../sevice_process_item";
import imgUrl from "@/images/fifth_section-img.webp";
import { ServiceProcessType } from "@/types/links";
const ServiceProcessComp = () => {
  const serviceProcesses: ServiceProcessType[] = [
    {
      title: "Diaqnostika",
      description:
        "Mütəxəssislərimiz avadanlığı peşəkar şəkildə yoxlayır və nasazlığın səbəbini müəyyən edir.",
      imgUrl,
    },
    {
      title: "Razılaşdırma",
      description:
        "Görüləcək işləri, təmir müddətini və digər detalları sizinlə əvvəlcədən razılaşdırırıq.",
      imgUrl,
    },
    {
      title: "Təmir",
      description:
        "Aşkar edilmiş nasazlığı aradan qaldırır və avadanlığın işlək vəziyyətə gətirilməsini təmin edirik.",
      imgUrl,
    },
    {
      title: "Təhvil",
      description:
        "Texniki xidmət və ya təmir tamamlandıqdan sonra avadanlığı sizə təhvil veririk.",
      imgUrl,
    },
  ];
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {serviceProcesses.map((service, index) => (
        <ServiceProcessItemComp key={index} {...service} />
      ))}
    </div>
  </div>
  );
};

export default ServiceProcessComp;
