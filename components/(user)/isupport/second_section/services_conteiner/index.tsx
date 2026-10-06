import React from "react";
import ServiceItemComponent from "../service_item";
import { ServisPropsType } from "@/types/links";

const ServicesComponent = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Sayğaclar",
      imgUrl: "/images/meter.jpg",
      slug: "saygaclar",
    },
    {
      id: 2,
      title: "Korrektorlar",
      imgUrl: "/images/corrector.jpg",
      slug: "korrektorlar",
    },
    {
      id: 3,
      title: "Qaz tənzimləyiciləri",
      imgUrl: "/images/regulator.jpg",
      slug: "qaz-tenzimleyicileri",
    },
    {
      id: 7,
      title: "Qaz filtrləri",
      imgUrl: "/images/filter-service.jpg",
      slug: "qaz-filterleri",
    },
  ];
  const meterRepairItems: ServisPropsType[] = [
    {
      id: 1,
      title: "Qaz sayğaclarının diaqnostikası",
      description:
        "Qaz sayğaclarının texniki vəziyyətini yoxlayır, cihazda yaranmış nasazlıqları müəyyən edir və problemin səbəbini dəqiqləşdiririk.",
      imgUrl: "/images/meter-diagnostics.jpg",
    },
    {
      id: 2,
      title: "Qaz sayğaclarının təmiri",
      description:
        "Nasaz qaz sayğaclarının texniki baxışını və təmirini həyata keçirir, cihazın düzgün və stabil işləməsini təmin edirik.",
      imgUrl: "/images/meter-repair.jpg",
    },
    {
      id: 3,
      title: "Sayğac hissələrinin dəyişdirilməsi",
      description:
        "Texniki baxış zamanı nasazlığı müəyyən edilmiş sayğac hissələrini yoxlayır və zəruri hallarda uyğun ehtiyat hissələri ilə əvəz edirik.",
      imgUrl: "/images/meter-parts.jpg",
    },
    {
      id: 4,
      title: "Korrektorların diaqnostikası",
      description:
        "Qaz korrektorlarının elektron hissəsini yoxlayır, cihazın işləmə vəziyyətini qiymətləndirir və aşkar edilmiş nasazlıqları müəyyən edirik.",
      imgUrl: "/images/corrector-diagnostics.jpg",
    },
    {
      id: 5,
      title: "Korrektorların təmiri",
      description:
        "Qaz korrektorlarının elektron hissəsində yaranan nasazlıqları müəyyən edir və uyğun texniki təmir işlərini həyata keçiririk.",
      imgUrl: "/images/corrector-repair.jpg",
    },
    {
      id: 6,
      title: "Qaz tənzimləyicilərinin təmiri",
      description:
        "Qaz tənzimləyicilərinin texniki vəziyyətini qiymətləndirir, nasazlıqları müəyyən edir və cihazın bərpası üçün zəruri təmir işlərini həyata keçiririk.",
      imgUrl: "/images/regulator-repair.jpg",
    },
    {
      id: 7,
      title: "Qaz filtrlərinin texniki xidməti",
      description:
        "Qaz filtrlərinin vəziyyətini yoxlayır, çirklənmə və digər texniki problemləri müəyyən edir, zəruri hallarda təmizləmə və texniki xidmət işləri aparırıq.",
      imgUrl: "/images/filter-service.jpg",
    },
    {
      id: 8,
      title: "Klapanların texniki xidməti",
      description:
        "Qaz klapanlarının texniki vəziyyətini yoxlayır, işləmə qabiliyyətini qiymətləndirir və aşkar edilmiş nasazlıqların aradan qaldırılması üçün texniki xidmət göstəririk.",
      imgUrl: "/images/valve-service.jpg",
    },
    {
      id: 9,
      title: "Siyirtmələrin texniki xidməti",
      description:
        "Qaz xəttində istifadə olunan siyirtmələrin texniki vəziyyətini qiymətləndirir, nasazlıqları müəyyən edir və zəruri texniki xidmət işlərini həyata keçiririk.",
      imgUrl: "/images/valve-repair.jpg",
    },
    {
      id: 10,
      title: "Qaz avadanlıqlarının texniki baxışı",
      description:
        "Qaz avadanlıqlarının ümumi texniki vəziyyətini qiymətləndirir, mümkün nasazlıqları əvvəlcədən müəyyən edir və avadanlığın etibarlı işləməsi üçün lazımi tədbirləri həyata keçiririk.",
      imgUrl: "/images/equipment-service.jpg",
    },
    {
      id: 11,
      title: "Nasazlıqların müəyyən edilməsi",
      description:
        "Qaz avadanlıqlarında yaranmış texniki problemləri diaqnostika vasitəsilə müəyyən edir, nasazlığın səbəbini araşdırır və uyğun həll yolunu müəyyənləşdiririk.",
      imgUrl: "/images/diagnostics.jpg",
    },
    {
      id: 12,
      title: "Qaz avadanlıqlarının bərpası",
      description:
        "Texniki vəziyyəti qiymətləndirilmiş qaz avadanlıqlarında zəruri bərpa və təmir işlərini həyata keçirərək onların yenidən istismara yararlı vəziyyətə gətirilməsinə dəstək göstəririk.",
      imgUrl: "/images/equipment-repair.jpg",
    },
  ];
  return (
    <div className="flex">
      {meterRepairItems.map((data) => (
        <ServiceItemComponent key={data.id} {...data} />
      ))}
    </div>
  );
};

export default ServicesComponent;
