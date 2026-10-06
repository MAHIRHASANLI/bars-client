import Image from "next/image";
import image from "@/images/isupport-first-section1.webp";

const RepairServicesComponent = () => {
  return (
    <div className="relative w-full h-100 my-4">
      <Image
        src={image}
        alt="ENERJİ-N qaz sayğacı, korrektor və qaz avadanlıqlarının texniki servisi"
        fill
        sizes="(max-width: 1440px) 100vw, 1440px"
      />
    </div>
  );
};

export default RepairServicesComponent;
