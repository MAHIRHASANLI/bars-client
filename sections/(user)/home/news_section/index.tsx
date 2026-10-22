import CarouselItemComponent from '@/components/(user)/home/news_section_carousel_item';
import GeneralCarouselComponent from '@/shared/carousels/content_carousel/content_carousel_component';
import { NewsPostType } from '@/types/links';
import SubheadingComponent from '@/utils/subheading_component'
import img from "@/images/saygac-slider-img.png"

const NewsSection = () => {
const news_posts :NewsPostType[]= [
  {
    id: 1,
    title: "Qaz filtrlərinin qaz sistemlərində rolu",
    description:
      "Qaz filtrləri qaz xəttindəki toz və mexaniki hissəcikləri tutaraq avadanlıqların etibarlı və uzunmüddətli işləməsinə kömək edir.",
    category: "Faydalı məlumat",
    date: "2026-10-10",
    slug: "qaz-filtrlerinin-qaz-sistemlerinde-rolu",
    imgUrl:img
  },
  {
    id: 2,
    title: "Qaz tənzimləyicisi seçərkən nələrə diqqət edilməlidir?",
    description:
      "Qaz tənzimləyicisi seçərkən iş təzyiqi, tələb olunan qaz sərfi və sistemin texniki xüsusiyyətləri nəzərə alınmalıdır.",
    category: "Faydalı məlumat",
    date: "2026-10-12",
    slug: "qaz-tenzimleyicisi-secerken-diqqet-edilmeli-meqamlar",
    imgUrl:img
  },
  {
    id: 3,
    title: "BARS məhsul çeşidi ilə tanış olun",
    description:
      "Qaz və tikinti avadanlıqları, yapışdırıcılar və digər texniki məhsullarla bağlı çeşidimizi kəşf edin.",
    category: "Şirkət xəbərləri",
    date: "2026-10-14",
    slug: "bars-mehsul-cesidi",
    imgUrl:img
  },
  {
    id: 4,
    title: "Qaz detektorları nə üçün vacibdir?",
    description:
      "Qaz detektorları mühitdə qaz sızmasını aşkar etməyə və potensial təhlükələr barədə vaxtında xəbərdarlıq etməyə kömək edir.",
    category: "Faydalı məlumat",
    date: "2026-10-16",
    slug: "qaz-detektorlarinin-ehemiyyeti",
    imgUrl:img 
  },
  {
    id: 5,
    title: "Sənaye avadanlıqlarına düzgün texniki qulluq",
    description:
      "Müntəzəm texniki yoxlama və istehsalçının tələblərinə uyğun qulluq avadanlıqların iş etibarlılığını qorumağa kömək edir.",
    category: "Faydalı məlumat",
    date: "2026-10-18",
    slug: "senaye-avadanliqlarina-texniki-qulluq",
    imgUrl:img 
  },
];
  return (
    <section className='py-8'>
        <SubheadingComponent title="Xəbərlər və faydalı məlumatlar" description="BARS-ın yenilikləri, məhsullarımız və sənaye avadanlıqları haqqında faydalı məlumatlarla tanış olun" />
    
        <GeneralCarouselComponent preset='wide'>
            {news_posts.map((news)=><CarouselItemComponent key={news.id} item={news}/>)}
        </GeneralCarouselComponent>
    </section>
  )
}

export default NewsSection