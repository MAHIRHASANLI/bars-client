import FeaturedCarouselComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component";
import { ProductType } from "@/types/links";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import img from "@/images/tenzimleyicilerin-temiri-img.png";
import ProductCardComponent from "@/components/(user)/shared/carousels/featured_carousel/feature_card_component";
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
          <ProductCardComponent key={item.id} item={item} />
        ))}
      </FeaturedCarouselComponent>
    </section>
  );
};

export default BarsProductsSection;
