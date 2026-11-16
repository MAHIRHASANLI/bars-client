import { ServiceProcessType } from "@/types/links";
import Image from "next/image";


const statusText = {
  completed: "Tamamlanıb",
  active: "İcra olunur",
  pending: "Gözləmədə",
};

const ServiceProcessItemComp = ({
  title,
  description,
  imgUrl,
  status,
}: ServiceProcessType) => {
  let borderColor;
  if (status === "completed") borderColor = "border-green-700";
  else if (status === "active") borderColor = "border-amber-600";
  else if(status === "pending")borderColor = "border-stone-200";
  return (
    <div className={`flex flex-col gap-4 border-b-2 ${borderColor}`}>
      {/* Şəkil konteyneri */}
      <div
        className="relative w-full h-50 overflow-hidden rounded-2xl max-[800px]:h-80 max-[1201px]:h-75"
      >
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1440px) 50vw, 1440px"
        />
      </div>

      {/* Mətn konteyneri */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm font-normal text-gray-600 leading-normal">
          {description}
        </p>
      </div>

      <div><p className="mt-px text-sm font-normal text-stone-500">{statusText[status]}</p></div>
    </div>
  );
};

export default ServiceProcessItemComp;
