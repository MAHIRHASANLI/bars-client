import SectionHeading from '@/components/(user)/shared/section_heading_component'
// data/new-products.ts  ("use client" yoxdur, server komponentdən oxunur)
import img from "@/images/260911100016384144.webp"
import type { ProductType } from "@/types/links";
import GeneralCarouselComponent from '@/components/(user)/shared/carousels/content_carousel/content_carousel_component';
import CarouselItemComponent from '@/components/(user)/home/new_products_section_carousel_item';

export const newProducts: ProductType[] = [
  {
    id: 1,
    badge: "ENDIRIMLI",
    title: "Smart qaz sayğacı",
    subtitle: "NB-IoT modemli, məsafədən oxunan yeni nəsil sayğac.",
    price: 3200,
    oldPrice:3500,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 2,
    badge: "endirimli",
    title: "Ultrasəs sayğac",
    subtitle: "Yüksək dəqiqlik, hərəkət edən hissə yoxdur.",
    price: 1800,
     oldPrice:3500,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz korrektoru",
    subtitle: "Həcmi təzyiq və temperatura görə standart şəraitə gətirir.",
    price: 400,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/korrektorlar",
  },
  {
    id: 4,
    badge: "SERTİFİKATLI",
    title: "Qaz tənzimləyicisi",
    subtitle: "Sabit çıxış təzyiqi, təhlükəsiz istismar.",
    price: 1000,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/tenzimleyiciler",
  },
  {
    id: 5,
    badge: "endirimli",
    title: "Qaz detektoru",
    subtitle: "Qaz sızmasını erkən aşkar edir və siqnal verir.",
    price: 60,
     oldPrice:500,
    imgUrl: img,
    slug: "/category/gas-detectors",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz filtri",
    subtitle: "Xətti çirkdən qoruyur, avadanlığın ömrünü uzadır.",
    price: 450,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/filtrler",
  },
  {
    id: 7,
    badge: "YENİ",
    title: "Nömrə Bir yapışdırıcı",
    subtitle: "Dözümlü tikinti yapışdırıcısı, daxili və xarici işlər üçün.",
    price: 12,
    imgUrl: img,
    slug: "/category/adhesives",
  },
];

const NewProductsSection = () => {
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
        <SectionHeading title="Yeni məhsullara göz atın" description=''/>

        <GeneralCarouselComponent preset='wide' className="min-[1000px]:pt-10">
         {newProducts.map((item)=> <CarouselItemComponent key={item.id} item={item}/>)}
        </GeneralCarouselComponent>
    </section>
  )
}

export default NewProductsSection