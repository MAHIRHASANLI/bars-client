import { StaticImageData } from "next/image";

export type LinkType = {
  href: string;
  label: string;
};

export type FeedbackFormInputType = {
  id: string;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
};

//!Texniki Servis - 4ci section da istifade olunur
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