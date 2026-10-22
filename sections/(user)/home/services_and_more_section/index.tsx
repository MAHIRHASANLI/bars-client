import ServicesMoreCarouselItem from "@/components/(user)/home/services_and_more_section/services_more_carousel_item";
import GeneralCarouselComponent from "@/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/utils/subheading_component";
type Tone = "neutral" | "blue" | "green" | "orange";

type TitlePart = { text: string; accent?: boolean };

export type ServiceType = {
  id: string;
  label: string;
  tone: Tone;
  title: TitlePart[];
};



const ServicesAndMoreSection = () => {
  const services: ServiceType[] = [
    {
      id: "delivery",
      label: "Çatdırılma",
      tone: "neutral",
      title: [
        { text: "Onlayn sifariş", accent: true },
        { text: " edin və obyektinizə çatdırılma əldə edin." },
      ],
    },
    {
      id: "installation",
      label: "Quraşdırma",
      tone: "blue",
      title: [
        { text: "Sertifikatlı mütəxəssislərlə " },
        { text: "peşəkar quraşdırma", accent: true },
        { text: " sifariş edin." },
      ],
    },
    {
      id: "installment",
      label: "Taksit və kredit",
      tone: "blue",
      title: [
        { text: "Xüsusi ödəniş şərtləri əldə edin. " },
        { text: "Faizsiz, hissə-hissə ödəyin.", accent: true },
      ],
    },
    {
      id: "sale",
      label: "Kampaniya",
      tone: "green",
      title: [
        { text: "Ən sərfəli qiymətləri tapın", accent: true },
        { text: " və alış-veriş edin." },
      ],
    },
    {
      id: "trade-in",
      label: "Trade in",
      tone: "blue",
      title: [
        { text: "Köhnə " },
        { text: "qaz sayğacınızı", accent: true },
        { text: " yenisi ilə dəyişin." },
      ],
    },
    {
      id: "service",
      label: "Servis və kalibrləmə",
      tone: "orange",
      title: [
        { text: "Avadanlığınızı " },
        { text: "təhlükəsizlik yoxlamasından", accent: true },
        { text: " keçirin." },
      ],
    },
    {
      id: "consulting",
      label: "Məsləhət",
      tone: "neutral",
      title: [
        { text: "Mütəxəssislə danışın, " },
        { text: "sizə uyğun avadanlığı", accent: true },
        { text: " seçin." },
      ],
    },
  ];
  return (
    <section className="py-8 max-[1270px]:mb-8">
      <SubheadingComponent
        title="Xidmətləri və daha çoxunu kəşf edin"
        description=""
      />

        <GeneralCarouselComponent preset="wide">
          {services.map((s) => (
            <ServicesMoreCarouselItem key={s.id} service={s} />
          ))}
        </GeneralCarouselComponent>
    </section>
  );
};

export default ServicesAndMoreSection;
