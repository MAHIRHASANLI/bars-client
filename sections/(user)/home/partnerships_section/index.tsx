import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import img from "@/images/saygac-temiri-img.png"
import { PartnerType } from "@/types/links";
import PartnershipsCardItem from "@/components/(user)/home/partnerships_section_partner_card";
const PartnershipsSection = () => {
  // Tərəfdaş şirkətlərin məlumatları.
  const partners:PartnerType[] = [
    {
      id:157,name: "MADAS",
      imgUrl: img,
      description:
        "Qaz təzyiq tənzimləyiciləri və qaz avadanlıqları istehsalçısı.",
    },
    {
      id:71,name: "ELSTER",
      imgUrl: img,
      description: "Qazın ölçülməsi və ölçmə sistemləri sahəsində brend.",
    },
    {
      id:15,name: "STATÜGAS",
      imgUrl: img,
      description: "Qaz avadanlıqları sahəsində tərəfdaş brend.",
    },
    {
      id:17,name: "EUROMET",
      imgUrl: img,
      description: "Qaz sənayesi üçün avadanlıqlar sahəsində tərəfdaş.",
    },
    {
      id:133,name: "TORK",
      imgUrl: img,
      description: "Qaz detektorları və sənaye avadanlıqları brendi.",
    },
    {
      id:13,name: "ELGAS",
      imgUrl: img,
      description:
        "Qaz həcminin ölçülməsi və korrektorlar sahəsində ixtisaslaşmış brend.",
    },
    {
      id:21,name: "BROEN",
      imgUrl: img,
      description: "Sənaye və boru sistemləri üçün armatur həlləri.",
    },
  ];
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      <SubheadingComponent
        title="Güvəndiyimiz tərəfdaşlar"
        description=" Keyfiyyətli məhsullar və etibarlı əməkdaşlıq üçün seçdiyimiz tərəfdaşlarla tanış olun"
      />

      <GeneralCarouselComponent preset="wide" className="min-[1000px]:pt-10 pt-4">
        {partners.map((item)=><PartnershipsCardItem key={item.id} item={item}/>)}
      </GeneralCarouselComponent>
    </section>
  );
};

export default PartnershipsSection;
