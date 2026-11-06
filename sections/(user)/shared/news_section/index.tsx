import CarouselItemComponent from "@/components/(user)/shared/news_section_carousel_item";
// import GeneralCarouselComponent from "@/components/(user)/shared/carousels/content_carousel/content_carousel_component";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component_h2";
import { newsSectionDatas } from "@/api/linklerin_muveqqeti_yerlesmesi";
import ScrollCarouselComponent from "@/components/(user)/shared/carousels/scroll_carousel/scroll_carousel_cantainer";

const NewsSection = () => {
  return (
    <section className="py-8 pb-3 max-[1000px]:py-5">
      <SubheadingComponent
        title="Xəbərlər və faydalı məlumatlar"
      />

      <ScrollCarouselComponent
        preset="wide"
        className="min-[1000px]:py-14 py-4"
      >
        {newsSectionDatas.map((news) => (
          <CarouselItemComponent key={news.id} item={news} />
        ))}
      </ScrollCarouselComponent>
      {/* <GeneralCarouselComponent preset='wide' className="min-[1000px]:pt-10 pt-4">
            {newsSectionDatas.map((news)=><CarouselItemComponent key={news.id} item={news}/>)}
        </GeneralCarouselComponent> */}
    </section>
  );
};

export default NewsSection;
