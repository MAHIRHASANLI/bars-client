import PageHeader from "@/utils/heading_component";

import RepairServicesComponent from "@/components/(user)/isupport/first_section/repair_services";
import ContactServiceLinkComp from "@/utils/contact_service_link_comp";

const FirstSection = () => {
    //Sehife basliqlarinin melumatlari bu objectde saxlanilir
    const pageHeader = {
  title: "Qaz avadanlıqları üçün peşəkar texniki servis və təmir",
  description:
    "Avadanlıqlarınızın hər mərhələsində — diaqnostikadan təmirə və texniki xidmətə qədər peşəkar dəstək göstəririk. Sayğaclar, Korrektorlar (elektron hissə), qaz tənzimləyiciləri, filtrlər, klapanlar və digər qaz avadanlıqlarının texniki vəziyyətini qiymətləndirir və uyğun təmir işlərini həyata keçiririk.",
};

  return (
    <section  className="section">
        {/* SEHIFE BASLIGI */}
      <PageHeader {...pageHeader}/>
      <div className="flex justify-center gap-8 pt-3">
        <ContactServiceLinkComp content="Servisə müraciət edin >"/> 
        <ContactServiceLinkComp content="Tez-tez verilən suallar >"/> 
      </div>
      <RepairServicesComponent />
    </section>
  );
};

export default FirstSection;
