import { ServiceLocationType } from "@/types/links";
import {
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import ServiceLocationItem from "../service_location_item";

const ServiceLocationsSection = () => {
  // Şirkətlərin əlaqə və iş saatı məlumatları
  const serviceLocations: ServiceLocationType[] = [
    {
      name: "ENERJİ-N MMC",
      address: "Bakı şəhəri, Nizami rayonu, Oqtay Vəliyev küç. 72",
      phones: ["+994 50 280 10 50", "+994 70 280 10 51", "+994 12 570 00 94"],
      email: "enerjinmmc@gmail.com",
      workingHours: [
        "Bazar ertəsi – şənbə: 09:00–19:00",
        "Bazar: istirahət günü",
      ],
      website: "https://enerji-n.com/az",
      icons: {
        address: FaMapMarkerAlt,
        phone: FaPhone,
        email: FaEnvelope,
        workingHours: FaClock,
        website: FaGlobe,
      },
    },
    {
      name: "BARS",
      address: "EuroHome, Dərnəgül, 12 Ələsgər Qayıbov",
      phones: ["+994 99 795 10 50"],
      email: "info@bars.com.az",
      workingHours: [
        "Bazar ertəsi – cümə: 09:00–18:00",
        "Şənbə: 10:00–18:00",
        "Bazar: istirahət günü",
      ],
      website: "https://bars.com.az",
      icons: {
        address: FaMapMarkerAlt,
        phone: FaPhone,
        email: FaEnvelope,
        workingHours: FaClock,
        website: FaGlobe,
      },
    },
    {
      name: "EnergyServis",
      address: "Bakı şəhəri, Nizami rayonu, Oqtay Vəliyev küç. 72",
      phones: ["+994 70 280 10 50", "+994 12 570 10 55"],
      email: "info@energyservis.az",
      workingHours: ["Bazar ertəsi – şənbə: 09:00–18:00", "Bazar: bağlıdır"],
      website: "https://energyservis.az/az",
      icons: {
        address: FaMapMarkerAlt,
        phone: FaPhone,
        email: FaEnvelope,
        workingHours: FaClock,
        website: FaGlobe,
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {
        serviceLocations.map((location,index)=> <ServiceLocationItem key={index} {...location}/>)
      }
    </div>
  );
};

export default ServiceLocationsSection;
