
import Image  from "next/image";
import PrimaryButton from "@/components/(user)/shared/buttons/primary_button";
import SubheadingComponent from "@/components/(user)/shared/section_heading_component";
import { BusinessAreaCardProps } from "@/types/links";



const BusinessAreaCard = ({
  badge,
  title,
  description,
  image,
  variant,
  href="/"
}: BusinessAreaCardProps) => {
  const isLarge = variant === "large";

  return (
    <div
      className={`py-9 px-11 flex items-center justify-center bg-white rounded-sm ${
        isLarge
          ? "min-[1000px]:h-160 flex-col-reverse"
          : "max-[1000px]:flex-col-reverse"
      }`}
    >
      <div
        className={`relative mx-auto mt-4 h-50 w-60 max-[1000px]:w-40 max-[1000px]:h-30 ${
          isLarge ? "min-[1000px]:mt-16" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain"
        />
      </div>

      <div className="text-center min-[1000px]:w-[65%]">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-(--color-tone-orange)">
          {badge}
        </span>

        <SubheadingComponent title={title} description={description} className="center"/>

        <div className="mt-6"><PrimaryButton href={href}>Daha Ətraflı</PrimaryButton></div>
      </div>
    </div>
  );
};

export default BusinessAreaCard;