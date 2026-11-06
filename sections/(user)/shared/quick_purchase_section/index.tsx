import FeaturedCardComponent from '@/components/(user)/shared/carousels/featured_carousel/feature_carousel_card_component'
import FeaturedCarouselComponent from '@/components/(user)/shared/carousels/featured_carousel/feature_carousel_component'
import SectionHeading from '@/components/(user)/shared/section_heading_component_h2'
import { products } from '../../category/content_category_section'
import { barsProductsDatas } from '@/api/linklerin_muveqqeti_yerlesmesi'

const QuickPurchaseSection = () => {
  return (
    <section className='py-12'>
        <SectionHeading title='Sürətli alış' className='center'/>

        <FeaturedCarouselComponent>
         {barsProductsDatas.map((item)=><FeaturedCardComponent key={item.id} item={item}/>)}
        </FeaturedCarouselComponent>
    </section>
  )
}

export default QuickPurchaseSection