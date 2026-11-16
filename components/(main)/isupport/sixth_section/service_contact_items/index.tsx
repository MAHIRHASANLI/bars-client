import { ServiceContactItemType } from "@/types/links";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import ServiceContactItem from "../service_contact_item";

const ServiceContactItems = () => {
  const contactItems: ServiceContactItemType[] = [
    {
      title: "Telefon",
      value: "+99450 280 1050",
      href: "tel:+99450 280 1050",
      icon: FaPhone,
    },
    {
      title: "WhatsApp",
      value: "+994 50 280 1050",
      href: "https://wa.me/99450 280 1050",
      icon: FaWhatsappSquare,
    },
    {
      title: "E-poçt",
      value: "info@...",
      href: "mailto:info@...",
      icon: FaEnvelope,
    },
    {
      title: "LinkedIn",
      value: "LinkedIn",
      href: "...",
      icon: FaLinkedin,
    },
    {
      title: "Instagram",
      value: "Instagram",
      href: "...",
      icon: FaInstagramSquare,
    }, {
      title: "Facebook",
      value: "Facebook",
      href: "...",
      icon: FaFacebookSquare ,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {contactItems.map((item) => (
        <ServiceContactItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ServiceContactItems;
