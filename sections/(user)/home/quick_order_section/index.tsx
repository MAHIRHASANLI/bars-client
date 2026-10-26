import FeaturedCarouselComponent from "@/shared/carousels/featured_carousel/featured_carousel_component";
import { ProductType } from "@/types/links";
import SubheadingComponent from "@/utils/subheading_component";
import img from "@/images/saygac-temiri-img.png";
import QuickOrderSectionCarouselItem from "@/components/(user)/home/quick_order_section_carousel_item";

const products: ProductType[] = [
  {
    id: 1,
    badge: "POPULYAR",
    title: "Qaz təzyiq tənzimləyicisi",
    subtitle: "Qaz təzyiqinin tələb olunan səviyyədə tənzimlənməsi üçün.",
    price: 2900,
    oldPrice: 3000,
    imgUrl: img,
    slug: "qaz-tezyiq-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Qaz filtri",
    subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.",
    price: 0,
    imgUrl: img,
    slug: "qaz-filtri",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının dəqiq ölçülməsi üçün nəzərdə tutulmuş avadanlıq.",
    price: 0,
    imgUrl: img,
    slug: "qaz-saygaci",
  },
  {
    id: 4,
    badge: "POPULYAR",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.",
    price: 0,
    imgUrl: img,
    slug: "elektromaqnit-klapan",
  },
  {
    id: 5,
    badge: "POPULYAR",
    title: "Qaz korrektorı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün düzəlişlərin aparılmasına kömək edir.",
    price: 0,
    imgUrl: img,
    slug: "qaz-korrektoru",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz tənzimləyici şkaf",
    subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.",
    price: 0,
    imgUrl: img,
    slug: "qaz-tenzimleyici-skaf",
  },
];
const QuickOrderSection = () => {
  return <section className="py-8">
    <SubheadingComponent title="Sifarişinizi tez bir zamanda rəsmiləşdirin" description=""/>
    <FeaturedCarouselComponent>
    {products?.map((item) => (
          <QuickOrderSectionCarouselItem key={item.id} item={item} />
        ))}
    </FeaturedCarouselComponent>
  </section>;
};

export default QuickOrderSection;
