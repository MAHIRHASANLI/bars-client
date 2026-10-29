import { BusinessAreaCardProps, NewsPostType, PartnerType, ProductCategoryType, ProductType } from "@/types/links";
import img from "@/images/saygac-temiri-img.png";
import { ServiceType } from "@/sections/(user)/home/services_and_more_section";

//! ANA SEHIFEDE-2-cu section | butun mehsullar ve category sehifesinde ilk section datalari
export const allProductsCatecorySectionDatas: ProductCategoryType[] = [
  {
    id: 1,
    title: "Yapışdırıcılar",
    image: img,
    href: "/category/adhesives",
    price: 100,
  },
  {
    id: 2,
    title: "Sayğacları",
    image: img,
    href: "/category/gas-meters",
    price: 100,
  },
  {
    id: 3,
    title: "Korrektorları",
    image: img,
    href: "/category/gas-correctors",
    price: 100,
  },
  {
    id: 4,
    title: "Tənzimləyiciləri",
    image: img,
    href: "/category/gas-regulators",
    price: 100,
  },
  {
    id: 5,
    title: "Filtrləri",
    image: img,
    href: "/category/gas-filters",
    price: 100,
  },
  {
    id: 6,
    title: "Detektorları",
    image: img,
    href: "/category/gas-detectors",
    price: 100,
  },
  {
    id: 7,
    title: "Siyirtmələr",
    image: img,
    href: "/category/valves",
    price: 100,
  },
  {
    id: 8,
    title: "ŞQTM",
    image: img,
    href: "/category/gas-regulator-cabinets",
    price: 100,
  },
  {
    id: 9,
    title: "Qaz aksessuarları",
    image: img,
    href: "/category/gas-accessories",
    price: 100,
  },
  {
    id: 10,
    title: "İstilik məhsulları",
    image: img,
    href: "/category/heating-products",
    price: 100,
  },
];

//! ANA SEHIFEDE-3-cu section | Yeni məhsullar bölməsinin datalari 
export const newProductsCectionDatas: ProductType[] = [
  {
    id: 1,
    badge: "ENDIRIMLI",
    title: "Smart qaz sayğacı",
    subtitle: "NB-IoT modemli, məsafədən oxunan yeni nəsil sayğac.",
    newPrice: 3200,
    price: 3500,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 2,
    badge: "endirimli",
    title: "Ultrasəs sayğac",
    subtitle: "Yüksək dəqiqlik, hərəkət edən hissə yoxdur.",
    newPrice: 1800,
    price: 3500,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/saygaclar",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz korrektoru",
    subtitle: "Həcmi təzyiq və temperatura görə standart şəraitə gətirir.",
    price: 400,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/korrektorlar",
  },
  {
    id: 4,
    badge: "SERTİFİKATLI",
    title: "Qaz tənzimləyicisi",
    subtitle: "Sabit çıxış təzyiqi, təhlükəsiz istismar.",
    price: 1000,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/tenzimleyiciler",
  },
  {
    id: 5,
    badge: "endirimli",
    title: "Qaz detektoru",
    subtitle: "Qaz sızmasını erkən aşkar edir və siqnal verir.",
    newPrice: 60,
    price: 500,
    imgUrl: img,
    slug: "/category/gas-detectors",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz filtri",
    subtitle: "Xətti çirkdən qoruyur, avadanlığın ömrünü uzadır.",
    price: 450,
    imgUrl: img,
    slug: "/products/qaz_avadanliqlari/filtrler",
  },
  {
    id: 7,
    badge: "YENİ",
    title: "Nömrə Bir yapışdırıcı",
    subtitle: "Dözümlü tikinti yapışdırıcısı, daxili və xarici işlər üçün.",
    price: 12,
    imgUrl: img,
    slug: "/category/adhesives",
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
      newPrice: 8.5,
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
      badge: "endirim",
      title: "Montaj yapışdırıcısı",
      subtitle: "Müxtəlif səthlərin möhkəm yapışdırılması üçün.",
      price: 8.5,
      newPrice:4.5,
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
    newPrice: 3000,
    imgUrl: img,
    slug: "qaz-tezyiq-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Qaz filtri",
    subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.",
    price: 1000,
    newPrice:489,
    imgUrl: img,
    slug: "qaz-filtri",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının dəqiq ölçülməsi üçün nəzərdə tutulmuş avadanlıq.",
    price: 1000,
    newPrice:489,
    imgUrl: img,
    slug: "qaz-saygaci",
  },
  {
    id: 4,
    badge: "POPULYAR",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.",
    price: 1000,
    newPrice:489,
    imgUrl: img,
    slug: "elektromaqnit-klapan",
  },
  {
    id: 5,
    badge: "POPULYAR",
    title: "Qaz korrektorı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün düzəlişlərin aparılmasına kömək edir.",
    price: 1000,
    newPrice:489,
    imgUrl: img,
    slug: "qaz-korrektoru",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz tənzimləyici şkaf",
    subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.",
    price: 1000,
    newPrice:489,
    imgUrl: img,
    slug: "qaz-tenzimleyici-skaf",
  },
];

//! ANA SEHIFEDE-10-cu section | Tərəfdaş şirkətlərin məlumatları. Tərəfdaş brendlər 
export const partnershipsSectionDatas:PartnerType[] = [
    {
      id:157,name: "MADAS",
      imgUrl: img,
      description:
        "Qaz təzyiq tənzimləyiciləri və qaz avadanlıqları istehsalçısı.",
    },
    {
      id:71,name: "ELSTER",
      imgUrl: img,
      description: "Qazın ölçülməsi və ölçmə sistemləri sahəsində brend.",
    },
    {
      id:15,name: "STATÜGAS",
      imgUrl: img,
      description: "Qaz avadanlıqları sahəsində tərəfdaş brend.",
    },
    {
      id:17,name: "EUROMET",
      imgUrl: img,
      description: "Qaz sənayesi üçün avadanlıqlar sahəsində tərəfdaş.",
    },
    {
      id:133,name: "TORK",
      imgUrl: img,
      description: "Qaz detektorları və sənaye avadanlıqları brendi.",
    },
    {
      id:13,name: "ELGAS",
      imgUrl: img,
      description:
        "Qaz həcminin ölçülməsi və korrektorlar sahəsində ixtisaslaşmış brend.",
    },
    {
      id:21,name: "BROEN",
      imgUrl: img,
      description: "Sənaye və boru sistemləri üçün armatur həlləri.",
    },
];

//! ANA SEHIFEDE-11ci section |
import { Package, Headset, Truck } from "lucide-react";
export const benefitsSectionDatas = [
  {
    title: "Geniş məhsul çeşidi",
    description:
      "Tikinti materialları, yapışdırıcılar və qaz avadanlıqları ilə ehtiyaclarınıza uyğun həllər.",
    icon: Package,
    href: "/products",
  },
  {
    title: "Peşəkar məsləhət",
    description:
      "Layihənizə və texniki tələblərinizə uyğun məhsulların seçilməsi üçün sizə dəstək oluruq.",
    icon: Headset,
    href: "/contact",
  },
  {
    title: "Topdan satış imkanları",
    description:
      "Biznesinizin ehtiyaclarına uyğun məhsul təchizatı və əməkdaşlıq imkanları.",
    icon: Truck,
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
    newPrice: 2900,
    price: 3000,
    imgUrl: img,
    slug: "qaz-tezyiq-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "POPULYAR",
    title: "Qaz filtri",
    subtitle: "Qaz xəttini mexaniki çirklərdən və hissəciklərdən qorumaq üçün.",
   price:1240, newPrice: 850,
    imgUrl: img,
    slug: "qaz-filtri",
  },
  {
    id: 3,
    badge: "YENİ",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının dəqiq ölçülməsi üçün nəzərdə tutulmuş avadanlıq.",
   price:1240, newPrice: 850,
    imgUrl: img,
    slug: "qaz-saygaci",
  },
  {
    id: 4,
    badge: "POPULYAR",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması və bağlanması üçün.",
   price:1240, newPrice: 850,
    imgUrl: img,
    slug: "elektromaqnit-klapan",
  },
  {
    id: 5,
    badge: "POPULYAR",
    title: "Qaz korrektorı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün düzəlişlərin aparılmasına kömək edir.",
   price:1240, newPrice: 850,
    imgUrl: img,
    slug: "qaz-korrektoru",
  },
  {
    id: 6,
    badge: "YENİ",
    title: "Qaz tənzimləyici şkaf",
    subtitle: "Qaz təzyiqinin tənzimlənməsi üçün kompakt texniki həll.",
   price:1240, newPrice: 850,
    imgUrl: img,
    slug: "qaz-tenzimleyici-skaf",
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
    price:2200,
    imgUrl: img,
    slug: "qaz-saygaci-ehtiyat-hisseleri",
  },
  {
    id: 2,
    badge: "pupulyar",
    title: "Qaz tənzimləyici hissələri",
    subtitle:
      "Qaz təzyiq tənzimləyiciləri üçün uyğun ehtiyat hissələri.",
    price: 500,
    imgUrl: img,
    slug: "qaz-tenzimleyici-ehtiyat-hisseleri",
  },
  {
    id: 3,
    badge: "pupulyar",
    title: "Qaz filtri hissələri",
    subtitle:
      "Qaz filtrlərinin texniki xidməti üçün ehtiyat detallar.",
    price: 1234,
    imgUrl: img,
    slug: "qaz-filtri-ehtiyat-hisseleri",
  },
  {
    id: 4,
    badge: "endirimli",
    title: "Klapan ehtiyat hissələri",
    subtitle:
      "Qaz klapanlarının təmiri və texniki xidməti üçün ehtiyat hissələri.",
     price: 400,
    newPrice:230,
    imgUrl: img,
    slug: "klapan-ehtiyat-hisseleri",
  },
  {
    id: 5,
    badge: "endirimli",
    title: "Sayğac aksesuarları",
    subtitle: "Qaz sayğaclarının quraşdırılması və istifadəsi üçün aksesuarlar.",
    price: 230,
    newPrice:100,
    imgUrl: img,
    slug: "saygac-aksesuarları",
  },
];
