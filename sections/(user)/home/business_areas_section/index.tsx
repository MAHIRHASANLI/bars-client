import img from "@/images/saygac-temiri-img.png";
import BusinessAreaCard from "@/components/(user)/home/business_areas_section_card";

const BusinessAreasSection = () => {
  // Fəaliyyət istiqamətlərinin məlumatları
  const businessAreas = [
         {
        variant: "large" as const,
        image: img,
        href:"https://bars.com.az",
        badge: "BARS",
        title: "Tikinti materialları",
        description:
            "Yapışdırıcılar və tikinti işləri üçün müxtəlif məhsulların satışı.",
        },
    {
      variant: "small" as const,
      image: img,
       href: "https://energyservis.az",
      badge: "ENERGY SERVIS",
      title: "Servis və texniki xidmət",
      description:
        "Sənaye və qaz avadanlıqlarının təmiri, texniki xidməti və diaqnostikası.",
    },
   
    {
      variant: "small" as const,
      image: img,
      href: "https://enerji-n.com",
      badge: "ENERJI-N MMC",
      title: "Qaz və sənaye avadanlıqları",
      description:
        "Qaz infrastrukturu üçün ölçmə, tənzimləmə və idarəetmə avadanlıqları.",
    },
  ];
  return (
    <section className="fluid bg-(--main-color) py-8">
      <div className="main-container">
        <div className="grid gap-4 min-[1000px]:grid-cols-2">
          <BusinessAreaCard {...businessAreas[0]} />

          <div className="grid grid-rows-2 gap-4">
            {businessAreas.slice(1).map((item) => (
              <BusinessAreaCard key={item.badge} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreasSection;
