import ServiceActionsComponent from "../service_actions";
import SubheadingComponent from "@/utils/subheading_component";

const ContentComponent = () => {
  //Sehife basliqlarinin melumatlari bu objectde saxlanilir

  const pageHeader = {
    title: "Avadanlığınıza xüsusi diqqətlə yanaşan texniki servis",
    description:
      "Təmirə başlamazdan əvvəl mütəxəssislərimiz avadanlığın texniki vəziyyətini yoxlayır, nasazlığın səbəbini müəyyən edir və uyğun həll yolunu təklif edirlər.",
  };
  return (
    <div className="min-[1000px]:px-16 max-[1000px]:py-8">
     <SubheadingComponent {...pageHeader} />
      <ServiceActionsComponent />
    </div>
  );
};

export default ContentComponent;
