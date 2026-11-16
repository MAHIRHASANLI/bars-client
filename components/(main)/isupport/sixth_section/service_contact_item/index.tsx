import { ServiceContactItemType } from "@/types/links";
import Link from "next/link";

const ServiceContactItem = ({
    title,
  value,
  href,
  icon: Icon,
}: ServiceContactItemType) => {
  return (
    <Link href={href} className="flex gap-4">
      <Icon className="text-2xl"/> 
      <div className="group relative w-full overflow-hidden">
        <span className="text-black text-lg font-bold absolute bottom-1 left-0 group-hover:bottom-20 transition-all duration-300 ">{title}</span>
        <span className="text-black text-lg font-bold absolute top-24 left-0 group-hover:-top-1 transition-all duration-300 ">{value}</span>
      </div>
    </Link>
  );
};

export default ServiceContactItem;
