import CarouselItemComponent from '@/components/(user)/home/news_section_carousel_item';
import GeneralCarouselComponent from '@/components/(user)/shared/carousels/content_carousel/content_carousel_component';
import SubheadingComponent from '@/components/(user)/shared/section_heading_component'
import { newsSectionDatas } from '@/api/linklerin_muveqqeti_yerlesmesi';

const NewsSection = () => {

  return (
    <section className='py-8 pb-3 max-[1000px]:py-5'>
        <SubheadingComponent title="Xəbərlər və faydalı məlumatlar" description="BARS-ın yenilikləri, məhsullarımız və sənaye avadanlıqları haqqında faydalı məlumatlarla tanış olun" />
    
        <GeneralCarouselComponent preset='wide' className="min-[1000px]:pt-10 pt-4">
            {newsSectionDatas.map((news)=><CarouselItemComponent key={news.id} item={news}/>)}
        </GeneralCarouselComponent>
    </section>
  )
}

export default NewsSection