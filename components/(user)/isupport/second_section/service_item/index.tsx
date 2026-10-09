import { ServisPropsType } from "@/types/links";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Hər bir servis kartını göstərir
const ServiceItemComponent = ({
  id,
  title,
  description,
  imgUrl,
}: ServisPropsType) => {
  return (
    <Link
      href={`/servis/${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-(--logo-color) hover:shadow-lg"
    >
      {/* Şəkil */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Mətn hissəsi */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-(--logo-color)">
          {title}
        </h3>

        <p className="text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Ətraflı məlumat */}
        <div className="mt-auto flex items-center justify-between pt-5 text-sm font-medium text-(--logo-color)">
          <span>Ətraflı məlumat</span>
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default ServiceItemComponent;