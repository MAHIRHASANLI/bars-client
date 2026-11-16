import React from "react";
import ServiceProcessItemComp from "../sevice_process_item";
import imgUrl from "@/images/fifth_section-img.webp";
import { ServiceProcessType } from "@/types/links";
const ServiceProcessComp = () => {
  const serviceProcesses: ServiceProcessType[] = [
    {
      status: "completed",
      title: "Diaqnostika",
      description:
        "Mütəxəssislərimiz avadanlığı peşəkar şəkildə yoxlayır və nasazlığın səbəbini müəyyən edir.",
      imgUrl,
    },
    {
      status: "completed",
      title: "Razılaşdırma",
      description:
        "Görüləcək işləri, təmir müddətini və digər detalları sizinlə əvvəlcədən razılaşdırırıq.",
      imgUrl,
    },
    {
      status: "active",
      title: "Təmir",
      description:
        "Aşkar edilmiş nasazlığı aradan qaldırır və avadanlığın işlək vəziyyətə gətirilməsini təmin edirik.",
      imgUrl,
    },
    {
      status: "pending",
      title: "Təhvil",
      description:
        "Texniki xidmət və ya təmir tamamlandıqdan sonra avadanlığı sizə təhvil veririk.",
      imgUrl,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto min-[1000px]:px-4 pt-10 ">
      <div className="grid grid-cols-1 min-[801px]:grid-cols-2 min-[1201px]:grid-cols-4 gap-14 items-stretch">
        {serviceProcesses.map((service, index) => (
          <ServiceProcessItemComp key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceProcessComp;
