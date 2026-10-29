import ContactServiceLinkComp from "@/utils/contact_service_link_comp";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import { benefitsSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";

{/*11 Şirkətin üstünlükləri */}
const BenefitsSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {benefitsSectionDatas.map(({ title, description, icon: Icon, href }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center gap-8 rounded-2xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex p-2 items-center justify-center rounded-xl bg-(--logo-color)/10 text-(--logo-color)">
              <Icon size={48} />
            </div>
            <div className="text-center">
              <SubheadingComponent title={title} description={description} />
            </div>

            <ContactServiceLinkComp content="Ətraflı >" href={href} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
