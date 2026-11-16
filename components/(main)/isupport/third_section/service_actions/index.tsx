import ContactServiceLinkComp from "@/utils/contact_service_link_comp";


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
          <li key={index} className="text-sm text-gray-600">
            <span className="text-(--logo-color)">✔</span> {item}
          </li>
        ))}
      </ol>
      <div className="flex gap-6">
        <ContactServiceLinkComp content="Servis mərkəzi ilə əlaqə saxlamaq" />
        <ContactServiceLinkComp content="Xəritədə mərkəzi tapın" />
      </div>
    </div>
  );
};

export default ServiceActionsComponent;
