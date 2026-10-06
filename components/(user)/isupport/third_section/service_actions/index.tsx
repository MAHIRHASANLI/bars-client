import Link from "next/link";
import React from "react";

const ServiceActionsComponent = () => {
  const serviceItems = [
    "Peşəkar diaqnostika və nasazlığın müəyyən edilməsi",
    "Uyğun və keyfiyyətli ehtiyat hissələrinin istifadəsi",
    "Təmir işlərinin əvvəlcədən razılaşdırılması",
    "Aydın və şəffaf təmir prosesi",
    "Avadanlığın texniki vəziyyətinə uyğun həllin təklif edilməsi",
    "Təmir və texniki xidmət üzrə mütəxəssis dəstəyi",
  ];

  return (
    <div>
      <ol className="py-3">
        {serviceItems.map((item, index) => (
          <li key={index} className="text-sm text-gray-600 font-semibold">
            <span className="text-(--logo-color)">✔</span> {item}
          </li>
        ))}
      </ol>
      <div className="text-xs font-semibold text-(--logo-color) flex gap-6">
        <Link href="">Servis mərkəzi ilə əlaqə saxlamaq</Link>
        <Link href="">Xəritədə mərkəzi tapın</Link>
      </div>
    </div>
  );
};

export default ServiceActionsComponent;
