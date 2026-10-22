import SubheadingComponent from "@/utils/subheading_component";
import React from "react";
import img from "@/images/saygac-temiri-img.png";
import { ProductCategoryType } from "@/types/links";
import AllProductSliderItem from "@/components/(user)/home/all_products_section_card_slider";
import GeneralCarouselComponent from "@/shared/carousels/content_carousel/content_carousel_component";
const defaultItems: ProductCategoryType[] = [
  {
    id: 1,
    name: "Yapışdırıcılar",
    image: img,
    href: "/category/adhesives",
    price: 100,
  },
  {
    id: 2,
    name: "Sayğacları",
    image: img,
    href: "/category/gas-meters",
    price: 100,
  },
  {
    id: 3,
    name: "Korrektorları",
    image: img,
    href: "/category/gas-correctors",
    price: 100,
  },
  {
    id: 4,
    name: "Tənzimləyiciləri",
    image: img,
    href: "/category/gas-regulators",
    price: 100,
  },
  {
    id: 5,
    name: "Filtrləri",
    image: img,
    href: "/category/gas-filters",
    price: 100,
  },
  {
    id: 6,
    name: "Detektorları",
    image: img,
    href: "/category/gas-detectors",
    price: 100,
  },
  {
    id: 7,
    name: "Siyirtmələr",
    image: img,
    href: "/category/valves",
    price: 100,
  },
  {
    id: 8,
    name: "ŞQTM",
    image: img,
    href: "/category/gas-regulator-cabinets",
    price: 100,
  },
  {
    id: 9,
    name: "Qaz aksessuarları",
    image: img,
    href: "/category/gas-accessories",
    price: 100,
  },
  {
    id: 10,
    name: "İstilik məhsulları",
    image: img,
    href: "/category/heating-products",
    price: 100,
  },
];

const AllProductsSection = () => {
  return (
    <section className="pb-3">
      <SubheadingComponent title="Bütün məhsulları kəşf et" description="" />
      <GeneralCarouselComponent preset="compact" className="">
        {defaultItems.map((item) => (
          <AllProductSliderItem key={item.id} item={item} />
        ))}
      </GeneralCarouselComponent>
    
    </section>
  );
};

export default AllProductsSection;
