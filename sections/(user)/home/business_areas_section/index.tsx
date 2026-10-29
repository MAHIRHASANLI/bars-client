import BusinessAreaCard from "@/components/(user)/home/business_areas_section_card";
import { businessAreasSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";

const BusinessAreasSection = () => {

  return (
    <section className="fluid bg-(--main-color) py-8">
      <div className="main-container">
        <div className="grid gap-4 min-[1000px]:grid-cols-2">
          <BusinessAreaCard {...businessAreasSectionDatas[0]} />

          <div className="grid grid-rows-2 gap-4">
            {businessAreasSectionDatas.slice(1).map((item) => (
              <BusinessAreaCard key={item.badge} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreasSection;
