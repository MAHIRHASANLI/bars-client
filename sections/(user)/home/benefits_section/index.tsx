import ContactServiceLinkComp from "@/utils/contact_service_link_comp";
import SubheadingComponent from "@/utils/subheading_component";
import { Package, Headset, Truck } from "lucide-react";

export const serviceCards = [
  {
    title: "Geniş məhsul çeşidi",
    description:
      "Tikinti materialları, yapışdırıcılar və qaz avadanlıqları ilə ehtiyaclarınıza uyğun həllər.",
    icon: Package,
    href: "/products",
  },
  {
    title: "Peşəkar məsləhət",
    description:
      "Layihənizə və texniki tələblərinizə uyğun məhsulların seçilməsi üçün sizə dəstək oluruq.",
    icon: Headset,
    href: "/contact",
  },
  {
    title: "Topdan satış imkanları",
    description:
      "Biznesinizin ehtiyaclarına uyğun məhsul təchizatı və əməkdaşlıq imkanları.",
    icon: Truck,
    href: "/contact",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {serviceCards.map(({ title, description, icon: Icon, href }) => (
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
