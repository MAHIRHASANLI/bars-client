import PageHeader from "@/utils/heading_component";

import RepairServicesComponent from "@/components/(user)/isupport/first_section/repair_services";

const FirstSection = () => {
    //Sehife basliqlarinin melumatlari bu objectde saxlanilir
    const pageHeader = {
  title: "Qaz avadanlıqları üçün peşəkar texniki servis və təmir",
  description:
    "Avadanlıqlarınızın hər mərhələsində — diaqnostikadan təmirə və texniki xidmətə qədər peşəkar dəstək göstəririk. Sayğaclar, Korrektorlar (elektron hissə), qaz tənzimləyiciləri, filtrlər, klapanlar və digər qaz avadanlıqlarının texniki vəziyyətini qiymətləndirir, nasazlıqları müəyyən edir və uyğun təmir işlərini həyata keçiririk.",
};

  return (
    <section  className="mt-3 pb-12">
        {/* SEHIFE BASLIGI */}
      <PageHeader {...pageHeader}/>
      <RepairServicesComponent />
    </section>
  );
};

export default FirstSection;
