import { BusinessAreaCardProps, NewsPostType, PartnerType, ProductCategoryType, ProductType, StoreType } from "@/types/links";
import img from "@/images/saygac-temiri-img.png";
import { ServiceType } from "@/sections/(user)/home/services_and_more_section";

//? --------------------------------------ANA SEHIFE--------------------------------------------------------------------------
//! ANA SEHIFEDE-2-cu section | butun mehsullar ve category sehifesinde ilk section datalari
export const allProductsCatecorySectionDatas: ProductCategoryType[] = [
  // Yapışdırıcılar
  {
    id: 1,
    title: "Yapışdırıcılar",
    image: img,
    href: "/category/adhesives",
    badge: "YENİ",
  },
    // Qaz sayğacları
  {
    id: 8,
    title: "Turbin tipli qaz sayğacları",
    image: img,
    href: "/category/meters/turbine-gas-meters",
  },
  {
    id: 9,
    title: "Rotor tipli qaz sayğacları",
    image: img,
    href: "/category/meters/rotary-gas-meters",
  },
  {
    id: 11,
    title: "Korrektorlar",
    image: img,
    href: "/category/meters/correctors",
    badge: "YENİ",
  },
  // Qaz tənzimləyiciləri və filtrləri
  {
    id: 14,
    title: "Qaz tənzimləyiciləri",
    image: img,
    href: "/category/gas-regulators",
    badge: "YENİ",
  },
  {
    id: 15,
    title: "Qaz filtrləri",
    image: img,
    href: "/category/gas-filters",
    badge: "populyar",
  },

  // Qaz bağlayıcı klapanlar
  {
    id: 16,
    title: "Qaz bağlayıcı klapanlar",
    image: img,
    href: "/category/gas-shut-off-valves",
  },
  // Qaz alarm cihazları
  {
    id: 22,
    title: "CO detektorları",
    image: img,
    href: "/category/gas-alarm-devices/co-detectors",
  },
  {
    id: 23,
    title: "CH₄ detektorları",
    image: img,
    href: "/category/gas-alarm-devices/ch4-detectors",
  },
  {
    id: 24,
    title: "CH₄ + CO detektorları",
    image: img,
    href: "/category/gas-alarm-devices/ch4-co-detectors",
  },

  // Digər məhsullar
  {
    id: 25,
    title: "ŞQTM",
    image: img,
    href: "/category/gas-regulator-stations",
  },
  {
    id: 26,
    title: "Su sayğacları",
    image: img,
    href: "/category/water-meters",
  },
  {
    id: 27,
    title: "Ozon generatorları",
    image: img,
    href: "/category/ozone-generators",
  },
  {
    id: 28,
    title: "Manometrlər",
    image: img,
    href: "/category/pressure-gauges",
  },
  {
    id: 29,
    title: "Kranlar",
    image: img,
    href: "/category/valves",
  },
  {
    id: 30,
    title: "Qaz sayğacı ehtiyat hissələri",
    image: img,
    href: "/category/spare-parts/gas-meter-spare-parts",
  },
];

//! ANA SEHIFEDE-3-cu section | Yeni məhsullar bölməsinin datalari 
export const newProductsCectionDatas: ProductType[] = [
  {
    id: 1,
    badge: "ENDIRIMLI",
    title: "Smart qaz sayğacı",
    subtitle: "NB-IoT modemli, məsafədən oxunan yeni nəsil sayğac.",
    price: 3200,
    oldPrice: 3500,
    imgUrls: [img],
    category: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 2,
    badge: "endirimli",
    title: "Ultrasəs sayğac",
    subtitle: "Yüksək dəqiqlik, hərəkət edən hissə yoxdur.",
    price: 1800,
    oldPrice: 3500,
    imgUrls: [img],
    category: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz korrektoru",
    subtitle: "Həcmi təzyiq və temperatura görə standart şəraitə gətirir.",
    price: 400,
    imgUrls: [img],
    category: "/products/qaz_avadanliqlari/korrektorlar",
  },
  {
    id: 4,
    badge: "SERTİFİKATLI",
    title: "Qaz tənzimləyicisi",
    subtitle: "Sabit çıxış təzyiqi, təhlükəsiz istismar.",
    price: 1000,
    imgUrls: [img],
    category: "/products/qaz_avadanliqlari/tenzimleyiciler",
  },
  {
    id: 5,
    badge: "endirimli",
    title: "Qaz detektoru",
    subtitle: "Qaz sızmasını erkən aşkar edir və siqnal verir.",
    price: 60,
    oldPrice: 500,
    imgUrls: [img],
    category: "/category/gas-detectors",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz filtri",
    subtitle: "Xətti çirkdən qoruyur, avadanlığın ömrünü uzadır.",
    price: 450,
    imgUrls: [img],
    category: "/products/qaz_avadanliqlari/filtrler",
  },
  {
    id: 7,
    badge: "YENİ",
    title: "Nömrə Bir yapışdırıcı",
    subtitle: "Dözümlü tikinti yapışdırıcısı, daxili və xarici işlər üçün.",
    price: 12,
    imgUrls: [img],
    category: "/category/adhesives",
  },
];

//! ANA SEHIFEDE-5-cu section | ServicesAndMoreSection Xidmətlər, çatdırılma və digər imkanlar
export  const servicesAndMoreSectionDatas: ServiceType[] = [
    {
      id: "delivery",
      label: "Çatdırılma",
      tone: "neutral",
      title: [
        { text: "Onlayn sifariş", accent: true },
        { text: " edin və obyektinizə çatdırılma əldə edin." },
      ],
    },
    {
      id: "installation",
      label: "Quraşdırma",
      tone: "blue",
      title: [
        { text: "Sertifikatlı mütəxəssislərlə " },
        { text: "peşəkar quraşdırma", accent: true },
        { text: " sifariş edin." },
      ],
    },
    {
      id: "installment",
      label: "Taksit və kredit",
      tone: "blue",
      title: [
        { text: "Xüsusi ödəniş şərtləri əldə edin. " },
        { text: "Faizsiz, hissə-hissə ödəyin.", accent: true },
      ],
    },
    {
      id: "sale",
      label: "Kampaniya",
      tone: "green",
      title: [
        { text: "Ən sərfəli qiymətləri tapın", accent: true },
        { text: " və alış-veriş edin." },
      ],
    },
    {
      id: "trade-in",
      label: "Trade in",
      tone: "blue",
      title: [
        { text: "Köhnə " },
        { text: "qaz sayğacınızı", accent: true },
        { text: " yenisi ilə dəyişin." },
      ],
    },
    {
      id: "service",
      label: "Servis və kalibrləmə",
      tone: "orange",
      title: [
        { text: "Avadanlığınızı " },
        { text: "təhlükəsizlik yoxlamasından", accent: true },
        { text: " keçirin." },
      ],
    },
    {
      id: "consulting",
      label: "Məsləhət",
      tone: "neutral",
      title: [
        { text: "Mütəxəssislə danışın, " },
        { text: "sizə uyğun avadanlığı", accent: true },
        { text: " seçin." },
      ],
    },
];

//! ANA SEHIFEDE-6-cu section | Fəaliyyət istiqamətlərinin məlumatları, Şirkətlərin fəaliyyət istiqamətləri 
export const businessAreasSectionDatas:BusinessAreaCardProps[] = [
         {
        variant: "large" as const,
        image: img,
        href:"https://bars.com.az",
        badge: "BARS",
        title: "Tikinti materialları",
        description:
            "Yapışdırıcılar və tikinti işləri üçün müxtəlif məhsulların satışı.",
        },
    {
      variant: "small" as const,
      image: img,
       href: "https://energyservis.az",
      badge: "ENERGY SERVIS",
      title: "Servis və texniki xidmət",
      description:
        "Sənaye və qaz avadanlıqlarının təmiri, texniki xidməti və diaqnostikası.",
    },
   
    {
      variant: "small" as const,
      image: img,
      href: "https://enerji-n.com",
      badge: "ENERJI-N MMC",
      title: "Qaz və sənaye avadanlıqları",
      description:
        "Qaz infrastrukturu üçün ölçmə, tənzimləmə və idarəetmə avadanlıqları.",
    },
];

//! ANA SEHIFEDE-7-cu section | BARS məhsullarının təqdimatı bolmesi
export const barsProductsDatas: ProductType[] = [
  {
    id: 13,
    badge: "ENDİRİM",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 6.5,
    oldPrice: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 1,
    badge: "POPULYAR",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 12,
    badge: "endirim",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 4.5,
    oldPrice: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 1321,
    badge: "POPULYAR",
    title: "Montaj yapışdırıcısı",
    subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
    price: 8.5,
    imgUrls: [img],
    category: "/category/adhesives/marble-adhesives",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Silikon yapışdırıcı",
    subtitle: "Təmir və quraşdırma işləri üçün praktik həll.",
    price: 6.5,
    imgUrls: [img],
    category: "/category/adhesives/silicones",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Universal yapışdırıcı",
    subtitle: "Müxtəlif məişət və təmir işlərində istifadə üçün.",
    price: 10,
    imgUrls: [img],
    category: "/category/adhesives/universal-adhesives",
  },
];

//! ANA SEHIFEDE-8-cu section | Xəbərlər və faydalı məlumatlar
export const newsSectionDatas :NewsPostType[]= [
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


//! ANA SEHIFEDE-9-cu section | ENERJİ-N qaz və sənaye avadanlıqları bolmesi
export const enerjiNProductsDatas: ProductType[] = [
  {
    id: 1,
    badge: "POPULYAR",
    title: "Qaz təzyiq tənzimləyicisi",
    subtitle: "Qaz təzyiqinin tələb olunan səviyyədə tənzimlənməsi üçün.",
    price: 2900,
    oldPrice: 3000,
    imgUrls: [img],
    category: "qaz-tezyiq-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Qaz filtri",
    subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.",
    price: 489,
    oldPrice: 1000,
    imgUrls: [img],
    category: "qaz-filtri",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının dəqiq ölçülməsi üçün nəzərdə tutulmuş avadanlıq.",
    price: 489,
    oldPrice: 1000,
    imgUrls: [img],
    category: "qaz-saygaci",
  },
  {
    id: 4,
    badge: "POPULYAR",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.",
    price: 489,
    oldPrice: 1000,
    imgUrls: [img],
    category: "elektromaqnit-klapan",
  },
  {
    id: 5,
    badge: "POPULYAR",
    title: "Qaz korrektorı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün düzəlişlərin aparılmasına kömək edir.",
    price: 489,
    oldPrice: 1000,
    imgUrls: [img],
    category: "qaz-korrektoru",
  },
  {
    id: 12,
    badge: "YENİ",
    title: "Qaz tənzimləyici şkaf",
    subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.",
    price: 489,
    oldPrice: 1000,
    imgUrls: [img],
    category: "qaz-tenzimleyici-skaf",
  },
];

//! ANA SEHIFEDE-10-cu section | Tərəfdaş şirkətlərin məlumatları. Tərəfdaş brendlər 
import imgPartner from "@/images/third_section-img.webp";
export const partnershipsSectionDatas:PartnerType[] = [
    {
      id:157,name: "MADAS",
      imgUrl: imgPartner,
      description:
        "Qaz təzyiq tənzimləyiciləri və qaz avadanlıqları istehsalçısı.",
    },
    {
      id:71,name: "ELSTER",
      imgUrl: imgPartner,
      description: "Qazın ölçülməsi və ölçmə sistemləri sahəsində brend.",
    },
    {
      id:15,name: "STATÜGAS",
      imgUrl: imgPartner,
      description: "Qaz avadanlıqları sahəsində tərəfdaş brend.",
    },
    {
      id:17,name: "EUROMET",
      imgUrl: imgPartner,
      description: "Qaz sənayesi üçün avadanlıqlar sahəsində tərəfdaş.",
    },
    {
      id:133,name: "TORK",
      imgUrl: imgPartner,
      description: "Qaz detektorları və sənaye avadanlıqları brendi.",
    },
    {
      id:13,name: "ELGAS",
      imgUrl: imgPartner,
      description:
        "Qaz həcminin ölçülməsi və korrektorlar sahəsində ixtisaslaşmış brend.",
    },
    {
      id:21,name: "BROEN",
      imgUrl: imgPartner,
      description: "Sənaye və boru sistemləri üçün armatur həlləri.",
    },
];

import { FiPackage, FiHeadphones, FiTruck } from "react-icons/fi";

//! ANA SƏHİFƏDƏ - 11-ci section
export const benefitsSectionDatas = [
  {
    title: "Geniş məhsul çeşidi",
    description:
      "Tikinti materialları, yapışdırıcılar və qaz avadanlıqları ilə ehtiyaclarınıza uyğun həllər.",
    icon: FiPackage,
    href: "/products",
  },
  {
    title: "Peşəkar məsləhət",
    description:
      "Layihənizə və texniki tələblərinizə uyğun məhsulların seçilməsi üçün sizə dəstək oluruq.",
    icon: FiHeadphones,
    href: "/contact",
  },
  {
    title: "Topdan satış imkanları",
    description:
      "Biznesinizin ehtiyaclarına uyğun məhsul təchizatı və əməkdaşlıq imkanları.",
    icon: FiTruck,
    href: "/contact",
  },
];
//! ANA SEHIFEDE-12ci section | Quick Order section. Sürətli sifariş bölməsi "Sifarişinizi tez bir zamanda rəsmiləşdirin
export const quickOrderSectionDatas: ProductType[] = [
  {
    id: 1,
    badge: "POPULYAR",
    title: "Qaz təzyiq tənzimləyicisi",
    subtitle: "Qaz təzyiqinin tələb olunan səviyyədə tənzimlənməsi üçün.",
    price: 2900,
    oldPrice: 3000,
    imgUrls: [img],
    category: "qaz-tezyiq-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Qaz filtri",
    subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.",
    price: 850,
    oldPrice: 1240,
    imgUrls: [img],
    category: "qaz-filtri",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının dəqiq ölçülməsi üçün nəzərdə tutulmuş avadanlıq.",
    price: 850,
    oldPrice: 1240,
    imgUrls: [img],
    category: "qaz-saygaci",
  },
  {
    id: 4,
    badge: "POPULYAR",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.",
    price: 850,
    oldPrice: 1240,
    imgUrls: [img],
    category: "elektromaqnit-klapan",
  },
  {
    id: 5,
    badge: "POPULYAR",
    title: "Qaz korrektorı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün düzəlişlərin aparılmasına kömək edir.",
    price: 850,
    oldPrice: 1240,
    imgUrls: [img],
    category: "qaz-korrektoru",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz tənzimləyici şkaf",
    subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.",
    price: 850,
    oldPrice: 1240,
    imgUrls: [img],
    category: "qaz-tenzimleyici-skaf",
  },
];

//! ANA SEHIFEDE-13cu section | SparePartsSection Ehtiyat hissələrinin təqdimatı 
export const sparePartsSectionDatas: ProductType[] = [
  {
    id: 1,
    badge: "satisda var",
    title: "Qaz sayğacı ehtiyat hissələri",
    subtitle:
      "Qaz sayğaclarının təmiri və texniki xidməti üçün ehtiyat hissələri.",
    price: 2200,
    imgUrls: [img],
    category: "qaz-saygaci-ehtiyat-hisseleri",
  },
  {
    id: 2,
    badge: "pupulyar",
    title: "Qaz tənzimləyici hissələri",
    subtitle:
      "Qaz təzyiq tənzimləyiciləri üçün uyğun ehtiyat hissələri.",
    price: 500,
    imgUrls: [img],
    category: "qaz-tenzimleyici-ehtiyat-hisseleri",
  },
  {
    id: 3,
    badge: "pupulyar",
    title: "Qaz filtri hissələri",
    subtitle:
      "Qaz filtrlərinin texniki xidməti üçün ehtiyat detallar.",
    price: 1234,
    imgUrls: [img],
    category: "qaz-filtri-ehtiyat-hisseleri",
  },
  {
    id: 4,
    badge: "endirimli",
    title: "Klapan ehtiyat hissələri",
    subtitle:
      "Qaz klapanlarının təmiri və texniki xidməti üçün ehtiyat hissələri.",
    price: 230,
    oldPrice: 400,
    imgUrls: [img],
    category: "klapan-ehtiyat-hisseleri",
  },
  {
    id: 5,
    badge: "endirimli",
    title: "Sayğac aksesuarları",
    subtitle: "Qaz sayğaclarının quraşdırılması və istifadəsi üçün aksesuarlar.",
    price: 100,
    oldPrice: 230,
    imgUrls: [img],
    category: "saygac-aksesuarları",
  },
];

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 export const productDatas: ProductType[] = [
  // ───────── YAPIŞDIRICILAR ─────────
  { id: 1, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "POPULYAR", title: "Mərmər yapışdırıcısı", subtitle: "Mərmər və təbii daş üçün yüksək möhkəmlikli yapışdırıcı.", price: 14.5, imgUrls: [img,img,img], category: "/category/adhesives/marble-adhesives" },
  { id: 2, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "YENİ", title: "Ağ mərmər yapışdırıcısı", subtitle: "Açıq rəngli daşlarda iz qoymayan xüsusi tərkib.", price: 18, oldPrice: 21, imgUrls: [img,img,img], category: "/category/adhesives/marble-adhesives" },

  { id: 3, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "POPULYAR", title: "Sanitar silikon", subtitle: "Rütubətə davamlı, göbələk əleyhinə silikon.", price: 6.5, imgUrls: [img,img,img], category: "/category/adhesives/silicones" },
  { id: 4, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",title: "Neytral silikon", subtitle: "Şüşə və metal səthlər üçün korroziya yaratmayan silikon.", price: 7.8, imgUrls: [img,img,img], category: "/category/adhesives/silicones" },

  { id: 5, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "ENDİRİM", title: "Montaj penası", subtitle: "Pəncərə və qapı boşluqlarının doldurulması üçün.", price: 9, oldPrice: 11, imgUrls: [img,img,img], category: "/category/adhesives/construction-foams" },
  { id: 6, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",title: "Peşəkar pena (tapançalı)", subtitle: "Tapança ilə istifadə üçün yüksək həcmli pena.", price: 12.5, imgUrls: [img,img,img], category: "/category/adhesives/construction-foams" },

  { id: 7, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "POPULYAR", title: "Universal yapışdırıcı", subtitle: "Müxtəlif məişət və təmir işlərində istifadə üçün.", price: 10, imgUrls: [img,img,img], category: "/category/adhesives/universal-adhesives" },
  { id: 8, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "YENİ", title: "Şəffaf universal yapışdırıcı", subtitle: "Quruduqdan sonra şəffaf qalan sürətli yapışdırıcı.", price: 8.5, imgUrls: [img,img,img], category: "/category/adhesives/universal-adhesives" },

  { id: 9, description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir",badge: "SERTİFİKATLI", title: "Sənaye montaj yapışdırıcısı", subtitle: "Ağır yüklər və sənaye istifadəsi üçün.", price: 24, imgUrls: [img,img,img], category: "/category/adhesives/industrial-adhesives" },
  { id: 10,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "İki komponentli epoksi", subtitle: "Metal və beton səthlər üçün yüksək möhkəmlik.", price: 32, oldPrice: 38, imgUrls: [img,img,img], category: "/category/adhesives/industrial-adhesives" },

  // ───────── QAZ SAYĞACLARI ─────────
  { id: 11,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "SERTİFİKATLI", title: "Turbin tipli qaz sayğacı G100", subtitle: "Yüksək sərfli xətlər üçün turbin sayğacı.", price: 4200, imgUrls: [img,img,img], category: "/category/meters/turbine-gas-meters" },
  { id: 12,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Turbin tipli qaz sayğacı G250", subtitle: "Sənaye obyektləri üçün geniş ölçmə diapazonu.", price: 6800, oldPrice: 7200, imgUrls: [img,img,img], category: "/category/meters/turbine-gas-meters" },

  { id: 13,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Rotor tipli qaz sayğacı G65", subtitle: "Dəqiq ölçmə, davamlı iş üçün rotor sayğac.", price: 2600, imgUrls: [img,img,img], category: "/category/meters/rotary-gas-meters" },
  { id: 14,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Rotor tipli qaz sayğacı G160", subtitle: "Orta və böyük sərf üçün kompakt həll.", price: 3900, imgUrls: [img,img,img], category: "/category/meters/rotary-gas-meters" },

  { id: 15,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Ultrasəs qaz sayğacı", subtitle: "Yüksək dəqiqlik, hərəkət edən hissə yoxdur.", price: 1800, oldPrice: 3500, imgUrls: [img,img,img], category: "/category/meters/ultrasonic-gas-meters" },
  { id: 16,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Ultrasəs sayğac DN50", subtitle: "Aşağı təzyiq itkisi ilə uzunmüddətli istismar.", price: 5400, imgUrls: [img,img,img], category: "/category/meters/ultrasonic-gas-meters" },

  { id: 17,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Qaz korrektoru", subtitle: "Həcmi təzyiq və temperatura görə standart şəraitə gətirir.", price: 400, imgUrls: [img,img,img], category: "/category/meters/correctors" },
  { id: 18,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Elektron həcm korrektoru", subtitle: "Məlumat qeydiyyatı və ötürmə funksiyası ilə.", price: 780, imgUrls: [img,img,img], category: "/category/meters/correctors" },

  { id: 19,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Mexaniki qaz sayğacı G4", subtitle: "Məişət istifadəsi üçün membranlı sayğac.", price: 120, imgUrls: [img,img,img], category: "/category/meters/mechanical-gas-meters" },
  { id: 20,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Mexaniki qaz sayğacı G6", subtitle: "Kiçik kommersiya obyektləri üçün.", price: 165, oldPrice: 190, imgUrls: [img,img,img], category: "/category/meters/mechanical-gas-meters" },

  { id: 21,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "ENDİRİMLİ", title: "Smart qaz sayğacı", subtitle: "NB-IoT modemli, məsafədən oxunan yeni nəsil sayğac.", price: 3200, oldPrice: 3500, imgUrls: [img,img,img], category: "/category/meters/smart-gas-meters" },
  { id: 22,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Smart sayğac G4 (ön ödənişli)", subtitle: "Kart və ya tətbiq vasitəsilə balans idarəsi.", price: 340, imgUrls: [img,img,img], category: "/category/meters/smart-gas-meters" },

  // ───────── QAZ TƏNZİMLƏYİCİLƏRİ ─────────
  { id: 23,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "SERTİFİKATLI", title: "Qaz tənzimləyicisi", subtitle: "Sabit çıxış təzyiqi, təhlükəsiz istismar.", price: 1000, imgUrls: [img,img,img], category: "/category/gas-regulators" },
  { id: 24,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Qaz təzyiq tənzimləyicisi", subtitle: "Qaz təzyiqinin tələb olunan səviyyədə tənzimlənməsi üçün.", price: 2900, oldPrice: 3000, imgUrls: [img,img,img], category: "/category/gas-regulators" },
  { id: 25,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Məişət qaz tənzimləyicisi", subtitle: "Evlər üçün aşağı təzyiqli tənzimləyici.", price: 45, imgUrls: [img,img,img], category: "/category/gas-regulators" },

  // ───────── QAZ BAĞLAYICI KLAPANLAR ─────────
  { id: 26,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Elektromaqnit klapan DN25", subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.", price: 489, oldPrice: 1000, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/solenoid-valves" },
  { id: 27,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Elektromaqnit klapan DN50", subtitle: "Sənaye xətləri üçün sürətli işləyən klapan.", price: 720, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/solenoid-valves" },

  { id: 28,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Atıcı-bağlayıcı klapan", subtitle: "Təzyiq həddini aşanda qaz axınını avtomatik kəsir.", price: 560, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/shut-off-valves" },
  { id: 29,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Atıcı-bağlayıcı klapan DN80", subtitle: "Tənzimləyici məntəqələr üçün.", price: 890, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/shut-off-valves" },

  { id: 30,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "SERTİFİKATLI", title: "Qoruyucu klapan", subtitle: "Artıq təzyiqi atmosferə buraxan qoruyucu klapan.", price: 430, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/safety-valves" },
  { id: 31,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Yaylı qoruyucu klapan", subtitle: "Tənzimlənən açılma təzyiqi ilə.", price: 510, oldPrice: 600, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/safety-valves" },

  { id: 32,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Normalda bağlı klapan DN20", subtitle: "Elektrik kəsiləndə qaz xəttini avtomatik bağlayır.", price: 310, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/normally-closed-valves" },
  { id: 33,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Normalda bağlı klapan DN40", subtitle: "Kommersiya və sənaye obyektləri üçün.", price: 470, imgUrls: [img,img,img], category: "/category/gas-shut-off-valves/normally-closed-valves" },

  // ───────── QAZ ALARM CİHAZLARI ─────────
  { id: 34,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "CO detektoru", subtitle: "Karbon monoksid qazını aşkar edir və siqnal verir.", price: 60, oldPrice: 90, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/co-detectors" },
  { id: 35,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "CO detektoru (batareyalı)", subtitle: "Quraşdırması asan, şəbəkəyə qoşulmadan işləyir.", price: 48, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/co-detectors" },

  { id: 36,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "CH₄ detektoru", subtitle: "Təbii qaz sızmasını erkən aşkar edir.", price: 75, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/ch4-detectors" },
  { id: 37,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "CH₄ detektoru + klapan çıxışı", subtitle: "Elektromaqnit klapanı birbaşa idarə edə bilir.", price: 110, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/ch4-detectors" },

  { id: 38,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "CH₄ + CO detektoru", subtitle: "Eyni cihazda həm təbii qaz, həm CO nəzarəti.", price: 130, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/ch4-co-detectors" },
  { id: 39,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "CH₄ + CO detektoru (smart)", subtitle: "Mobil bildiriş funksiyası ilə.", price: 175, oldPrice: 200, imgUrls: [img,img,img], category: "/category/gas-alarm-devices/ch4-co-detectors" },

  // ───────── QAZ FİLTRLƏRİ ─────────
  { id: 40,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Qaz filtri", subtitle: "Xətti çirkdən qoruyur, avadanlığın ömrünü uzadır.", price: 450, imgUrls: [img,img,img], category: "/category/gas-filters" },
  { id: 41,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Qaz filtri DN50", subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.", price: 489, oldPrice: 1000, imgUrls: [img,img,img], category: "/category/gas-filters" },
  { id: 42,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Məişət qaz filtri", subtitle: "Sayğac və qazanın qarşısında quraşdırılır.", price: 35, imgUrls: [img,img,img], category: "/category/gas-filters" },

  // ───────── DİGƏR ─────────
  { id: 43,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Su sayğacı DN15", subtitle: "Məişət suyu sərfiyyatının ölçülməsi üçün.", price: 28, imgUrls: [img,img,img], category: "/category/water-meters" },
  { id: 44,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Su sayğacı DN20", subtitle: "Çoxmənzilli və kommersiya obyektləri üçün.", price: 42, imgUrls: [img,img,img], category: "/category/water-meters" },

  { id: 45,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Qaz tənzimləyici şkaf", subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.", price: 1950, imgUrls: [img,img,img], category: "/category/gas-regulator-stations" },
  { id: 46,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "ŞQTM (iki xətli)", subtitle: "Ehtiyat xətti olan şkaf tipli tənzimləyici məntəqə.", price: 4800, imgUrls: [img,img,img], category: "/category/gas-regulator-stations" },

  { id: 47,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "YENİ", title: "Ozon generatoru 5 q/saat", subtitle: "Hava və su təmizlənməsi üçün ozon generatoru.", price: 320, imgUrls: [img,img,img], category: "/category/ozone-generators" },
  { id: 48,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Ozon generatoru 10 q/saat", subtitle: "Böyük həcmli məkanlar üçün.", price: 590, oldPrice: 650, imgUrls: [img,img,img], category: "/category/ozone-generators" },

  { id: 49,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Manometr 0-6 bar", subtitle: "Qaz və su xətləri üçün təzyiq ölçən cihaz.", price: 18, imgUrls: [img,img,img], category: "/category/pressure-gauges" },
  { id: 50,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Manometr 0-16 bar (qliserinli)", subtitle: "Vibrasiyalı mühitlər üçün davamlı model.", price: 34, imgUrls: [img,img,img], category: "/category/pressure-gauges" },

  { id: 51,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "POPULYAR", title: "Kürəvi kran 1/2\"", subtitle: "Qaz və su xətləri üçün latun kürəvi kran.", price: 9, imgUrls: [img,img,img], category: "/category/valves" },
  { id: 52,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Kürəvi kran 1\"", subtitle: "Geniş diametrli xətlər üçün möhkəm kran.", price: 16, oldPrice: 19, imgUrls: [img,img,img], category: "/category/valves" },

  { id: 53,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", badge: "SATIŞDA VAR", title: "Qaz sayğacı ehtiyat hissələri", subtitle: "Qaz sayğaclarının təmiri və texniki xidməti üçün ehtiyat hissələri.", price: 220, imgUrls: [img,img,img], category: "/category/spare-parts/gas-meter-spare-parts" },
  { id: 54,description:"Yüksək keyfiyyətli materiallardan hazırlanmış bu məhsul etibarlı istifadə və uzunmüddətli istismar üçün nəzərdə tutulub. Praktik quruluşu və funksional xüsusiyyətləri sayəsində müxtəlif istifadə sahələrində rahatlıq və effektivlik təmin edir", title: "Sayğac membran dəsti", subtitle: "Mexaniki sayğaclar üçün membran və qaskel dəsti.", price: 85, oldPrice: 110, imgUrls: [img,img,img], category: "/category/spare-parts/gas-meter-spare-parts" },
];
//? --------------------------------------ANA SEHIFE BITDI--------------------------------------------------------------------------

//? --------------------------------------BRANCHES(FİLİALLAR) SEHIFE--------------------------------------------------------------------------

export const branchesSectionDatas: StoreType[] = [
  {
    id: 2,
    name: "ENERJİ-N MMC",
    address: "Bakı şəhəri, Nizami rayonu, Oqtay Vəliyev küç. 72",
    hours: "Bazar ertəsi – şənbə: 09:00–18:00",
    phones: "+994 50 280 10 50",
    imgUrl: img,
    district: "Nizami rayonu",  
   url:"https://enerj-n.com",  
mapUrl: "https://maps.app.goo.gl/78eKRiRHRgGpo1mh8?g_st=ac",
mapQuery: "Enerji-N MMC, Bakı",
    services: [
      "Qaz xətlərinin çəkilişi",
      "Qaz sızmalarının tapılması və təmiri",
      "Qaz avadanlıqlarının quraşdırılması və tənzimlənməsi",
      "Layihə və texniki şərtlərin yoxlanması",
    ],
  },
  {
    id: 3,
    name: "BARS",
    address: "EuroHome, Dərnəgül, 12 Ələsgər Qayıbov",
    hours: "Bazar ertəsi – cümə: 09:00–18:00, Şənbə: 10:00–18:00",
    phones: "+994 99 795 10 50",
    imgUrl: img,
   url:"https://bars.com.az", 
   mapUrl: "https://maps.app.goo.gl/1KS14n8FiiPQd8H88?g_st=ac",
mapQuery: "Bars İnshaat, 12 Alaskar Gayibov St, Baku",
   district: "EuroHome, Dərnəgül",
    services: [
      "Sertifikatlı qaz avadanlıqlarının satışı",
      "Tikinti materialları və yapışdırıcıların satışı",
      "Məhsul seçimində peşəkar məsləhət",
      "15 gün ərzində geri qaytarma",
    ],
  },
  {
    id: 4,
    name: "EnergyServis",
    address: "Bakı şəhəri, Nizami rayonu, Oqtay Vəliyev küç. 72",
    hours: "Bazar ertəsi – şənbə: 09:00–18:00",
    phones: "+994 70 280 10 50",
    imgUrl: img,
   url:"https://energyservis.com",
mapUrl: "https://maps.app.goo.gl/78eKRiRHRgGpo1mh8?g_st=ac",
   mapQuery: "EnergyServis, Bakı",
   district: "Nizami rayonu",
    services: [
      "Qaz tənzimləyici məntəqələrin (ŞQTM) istehsalı",
      "Yüksək təzyiqli qaz tənzimləyici və filtr istehsalı",
      "Satış sonrası montaj və kalibrləmə",
      "Qazanxana sistemlərinin layihələndirilməsi və quraşdırılması",
    ],
  },
];
//? --------------------------------------BRANCHES(FİLİALLAR) SEHIFE BITDI--------------------------------------------------------------------------
