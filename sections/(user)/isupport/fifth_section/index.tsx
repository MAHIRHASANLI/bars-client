import ServiceProcessComp from "@/components/(user)/isupport/fifth_section/service_process";
import SubheadingComponent from "@/utils/subheading_component";
import React from "react";

const FifthSection = () => {
  //?Sehife basliqlarinin melumatlari bu objectde saxlanilir
  const pageHeader = {
    title: "Şəffaf servis prosesi",
    description: "Avadanlığınızın servis prosesinin hər mərhələsindən xəbərdar olun.",
  };
  return (
    <section className="section">
      <SubheadingComponent {...pageHeader} />

      <ServiceProcessComp/>
    </section>
  );
};

export default FifthSection;
