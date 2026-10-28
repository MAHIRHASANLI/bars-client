import ServiceProcessComp from "@/components/(user)/isupport/fifth_section/service_process";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import React from "react";

const FifthSection = () => {
  //?Sehife basliqlarinin melumatlari bu objectde saxlanilir
  const pageHeader = {
    title: "Şəffaf servis prosesi",
    description: "Avadanlığınızın servis prosesinin hər mərhələsindən xəbərdar olun.",
  };
  return (
    <section className="section">
     <div className="text-center"><SubheadingComponent {...pageHeader} /></div>

      <ServiceProcessComp/>
    </section>
  );
};

export default FifthSection;
