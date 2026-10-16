import ContentComponent from "@/components/(user)/home/news_partnerships_section/content_component";
import ImageSliderComponent from "@/components/(user)/home/news_partnerships_section/image_carusel_component";
import NewsPartnershipsItem from "@/components/(user)/home/news_partnerships_section/news_partnerships_container";
import imgUrl from "@/images/neo00408_1.webp";

const NewsPartnershipsSection = () => {
  const imgUrls = [imgUrl,imgUrl,imgUrl];
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 min-[801px]:grid-cols-2 bg-(--main-color) rounded-2xl overflow-hidden"></div>
      <NewsPartnershipsItem>
        <ImageSliderComponent imgUrls={imgUrls} />
        <ContentComponent
          title="Xəbərlər və bloq"
          description="BARS-ın yenilikləri və qaz avadanlıqları haqqında faydalı məlumatlar"
          href="/"
        />
      </NewsPartnershipsItem>

      <br />
      <NewsPartnershipsItem>
        <ContentComponent
          title="Əməkdaşlıq"
          href="/contact"
          description="BARS ilə əməkdaşlıq edin və qarşılıqlı faydalı biznes əlaqələri qurun"
        />
         <ImageSliderComponent imgUrls={imgUrls} />
      </NewsPartnershipsItem>
    </section>
  );
};

export default NewsPartnershipsSection;
