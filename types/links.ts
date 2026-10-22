import { StaticImageData } from "next/image";

export type LinkType = {
  href: string;
  label: string;
};

// Main section SLIDERI 
export type HeroSlide = {
  id: number;
  badge: string; // sağ tərəfdə şəklin üstündəki ad (iSpace-də "WATCH SERIES 12")
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  link: string;
  cta: string;
  payText: string;
  secondaryCta?: { text: string; link: string };
  bg?: string; // banner fonu
  accent?: string; // başlıq rəngi
  note?: string; // alt haşiyə mətni
};

// Ana səhifədə "Bütün məhsulları kəşf et"-sectionu üçün məlumat tipi
export type ProductCategoryType = {
  id: number;
  name: string;
  image: StaticImageData;
  href: string;
  price:number;
};
// Ana səhifədə "Yeni məhsullar"-sectionu üçün məlumat tipi
// Məhsulun məlumatlarını müəyyən edən tip
export type ProductType = {
  id: number;
  badge?: string;
  title: string;
  subtitle: string;
  price: number; // Cari satış qiyməti
  oldPrice?: number; // Əvvəlki qiymət (endirim olduqda)
  imgUrl: StaticImageData;
  slug: string;
};


//! Xəbərlər və bloq yazıları üçün məlumat strukturunu müəyyən edir.
export type NewsPostType = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  imgUrl: StaticImageData;
};

//! Tərəfdaş kartının məlumat tipini müəyyən edir
export type PartnerType = {
  id: number;
  name: string;
  imgUrl: StaticImageData;
  description: string;
};

//! CONTACT Sehifesi 
export type FeedbackFormInputType = {
  id: string;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
};

//! Texniki Servis - 4ci section da istifade olunur
// Servis kartında göstəriləcək məlumatların tipi
export type ServisPropsType = {
  id: string;
  title: string;
  description: string;
  imgUrl: StaticImageData;
};

//!Texniki Servis - 5ci section da istifade olunur
export type ServiceProcessType = {
 status: "completed" | "active" | "pending";
  title: string;
  description: string;
  imgUrl: StaticImageData;
};

//!Texniki Servis - 6ci section da istifade olunur
//? Iconanin tipi
import { IconType } from "react-icons";

//? Servis əlaqə elementlərinin məlumat tipi
export type ServiceContactItemType = {
  title: string;
  value: string;
  href: string;
  icon:   IconType;
};



// Şirkətin əlaqə məlumatlarını, iş saatlarını və veb-saytını saxlayır
export type ServiceLocationType = {
  name: string;
  address: string;
  phones: string[];
  email: string;
  workingHours: string[];
  website: string;
  mapLink?: string;
  icons: {
    address: IconType;
    phone: IconType;
    email: IconType;
    workingHours: IconType;
    website: IconType;
  };
};


