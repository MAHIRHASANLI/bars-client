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
export type ServisPropsType ={
  id? : number;
  title: string;
  description: string;
  imgUrl: string;
}

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