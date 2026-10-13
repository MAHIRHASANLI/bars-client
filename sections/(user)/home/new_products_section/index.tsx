import CarouselComponent from '@/components/(user)/carousel_container'
import NewProductSliderItem from '@/components/(user)/home/new_products_section_card_slider'
import SubheadingComponent from '@/utils/subheading_component'
// data/new-products.ts  ("use client" yoxdur, server komponentdən oxunur)
import img from "@/images/260911100016384144.webp"
import type { NewProductType } from "@/types/links";

export const newProducts: NewProductType[] = [
  {
    id: 1,
    badge: "YENİ",
    title: "Smart qaz sayğacı",
    subtitle: "NB-IoT modemli, məsafədən oxunan yeni nəsil sayğac.",
    price: 3200,
    image: img,
    imageAlt: "Smart qaz sayğacı",
    href: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 2,
    badge: "YENİ",
    title: "Ultrasəs sayğac",
    subtitle: "Yüksək dəqiqlik, hərəkət edən hissə yoxdur.",
    price: 1800,
    image: img,
    imageAlt: "Ultrasəs qaz sayğacı",
    href: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz korrektoru",
    subtitle: "Həcmi təzyiq və temperatura görə standart şəraitə gətirir.",
    price: 400,
    image: img,
    imageAlt: "Qaz korrektoru",
    href: "/products/qaz_avadanliqlari/korrektorlar",
  },
  {
    id: 4,
    badge: "SERTİFİKATLI",
    title: "Qaz tənzimləyicisi",
    subtitle: "Sabit çıxış təzyiqi, təhlükəsiz istismar.",
    price: 1000,
    image: img,
    imageAlt: "Qaz tənzimləyicisi",
    href: "/products/qaz_avadanliqlari/tenzimleyiciler",
  },
  {
    id: 5,
    badge: "YENİ",
    title: "Qaz detektoru",
    subtitle: "Qaz sızmasını erkən aşkar edir və siqnal verir.",
    price: 60,
    image: img,
    imageAlt: "Qaz detektoru",
    href: "/category/gas-detectors",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz filtri",
    subtitle: "Xətti çirkdən qoruyur, avadanlığın ömrünü uzadır.",
    price: 450,
    image: img,
    imageAlt: "Qaz filtri",
    href: "/products/qaz_avadanliqlari/filtrler",
  },
  {
    id: 7,
    badge: "YENİ",
    title: "Nömrə Bir yapışdırıcı",
    subtitle: "Dözümlü tikinti yapışdırıcısı, daxili və xarici işlər üçün.",
    price: 12,
    image: img,
    imageAlt: "Nömrə Bir yapışdırıcı",
    href: "/category/adhesives",
  },
];

const NewProductsSection = () => {
  return (
    <section className="py-8 pb-13">
        <SubheadingComponent title="Yeni məhsullara göz atın" description=''/>

        <CarouselComponent preset='wide'>
         {newProducts.map((item)=> <NewProductSliderItem key={item.id} item={item}/>)}
        </CarouselComponent>
    </section>
  )
}

export default NewProductsSection