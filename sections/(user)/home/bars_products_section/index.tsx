import CarouselItemComponent from "@/components/(user)/home/bars_products_section_carousel_item";
import FeaturedCarouselComponent from "@/shared/carousels/featured_carousel/featured_carousel_component";
import { ProductType } from "@/types/links";
import SubheadingComponent from "@/utils/subheading_component";
import img from "@/images/tenzimleyicilerin-temiri-img.png";
const BarsProductsSection = () => {
  const products: ProductType[] = [
    {
      id: 13,
      badge: "ENDİRİM",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 6.5,
      oldPrice: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 1,
      badge: "POPULYAR",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 12,
      badge: "POPULYAR",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 13,
      badge: "POPULYAR",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      imgUrl: img,
      slug: "montaj-yapisdiricisi",
    },
    {
      id: 2,
      badge: "POPULYAR",
      title: "Silikon yapışdırıcı",
      subtitle: "Təmir və quraşdırma işləri üçün praktik həll.",
      price: 6.5,
      imgUrl: img,
      slug: "silikon-yapisdirici",
    },
    {
      id: 3,
      badge: "YENİ",
      title: "Universal yapışdırıcı",
      subtitle: "Müxtəlif məişət və təmir işlərində istifadə üçün.",
      price: 10,
      imgUrl: img,
      slug: "universal-yapisdirici",
    },
  ];
  return (
    <section className="py-8">
      <SubheadingComponent title="Keyfiyyət BARS ilə başlayır" description="" />

      <FeaturedCarouselComponent>
        {products?.map((item) => (
          <CarouselItemComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default BarsProductsSection;
