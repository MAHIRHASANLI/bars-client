import ServiceActionsComponent from "../service_actions";
import SubheadingComponent from "@/utils/subheading";

const ContentComponent = () => {
  //Sehife basliqlarinin melumatlari bu objectde saxlanilir

  const pageHeader = {
    title: "Avadanlığınıza xüsusi diqqətlə yanaşan texniki servis",
    description:
      "Təmirə başlamazdan əvvəl mütəxəssislərimiz avadanlığın texniki vəziyyətini yoxlayır, nasazlığın səbəbini müəyyən edir və uyğun həll yolunu təklif edirlər.",
  };
  return (
    <div className="">
      <div className="text-start"><SubheadingComponent {...pageHeader} /></div>
      <ServiceActionsComponent />
    </div>
  );
};

export default ContentComponent;
