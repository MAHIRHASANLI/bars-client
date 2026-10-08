import SubheadingComponent from "@/utils/subheading_component";
import React from "react";
import ServiceContactItems from "../service_contact_items";

const SubHeadingAndContactComp = () => {
  //?Sehife basliqlarinin melumatlari bu objectde saxlanilir
  const pageHeader = {
    title: "Servis mərkəzi ilə əlaqə saxlayın",
    description:
      "Servis xidməti ilə bağlı suallarınız və ya əlavə məlumat almaq üçün bizimlə əlaqə saxlayın. Mütəxəssislərimiz avadanlıqların diaqnostikası, təmiri, ehtiyat hissələri və texniki xidmətlə bağlı sizə ətraflı məlumat verməyə hazırdır.",
  };
  return (
    <div className="grid mx-auto min-[1000px]:grid-cols-2 gap-8">
      {/* Section BAsliq VE alt metni olan komponent */}
     <div className="pr-16"> <SubheadingComponent {...pageHeader} /></div>
      {/* Elaqe melumatlarini olan komponent */}
      <ServiceContactItems />
    </div>
  );
};

export default SubHeadingAndContactComp;
