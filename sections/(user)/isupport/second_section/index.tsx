import ServicesComponent from "@/components/(user)/isupport/second_section/services_conteiner";
import PageHeader from "@/utils/heading_component";
import React from "react";

const SecondSection = () => {
  //Sehife basliqlarinin melumatlari bu objectde saxlanilir
  const pageHeader = {
    title: "Təmir və texniki xidmət",
    description:
      "Ətraflı məlumat almaq üçün cihazın və ya xidmətin üzərinə klikləyin.",
  };
  return (
    <section className="py-12">
      {/* SEHIFE BASLIGI */}
      <PageHeader {...pageHeader} />
      {/*  SERVISLERIN GOSTERILDIYI COMPPONENT (SERVIS ITEM CONTAINERI)*/}
      <ServicesComponent />
    </section>
  );
};

export default SecondSection;
