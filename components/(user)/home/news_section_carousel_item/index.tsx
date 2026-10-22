// NewProductCard.tsx  (server komponent, "use client" yoxdur)
import Image from "next/image";
import Link from "next/link";
import { NewsPostType } from "@/types/links";

const CarouselItemComponent = ({ item }: { item: NewsPostType }) => {

  return (
    <Link
      href={item.slug}
      className="flex h-full min-h-98  max-[800px]:h-80 flex-col rounded-3xl bg-white p-4  max-[800px]:py-0 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]"
    >
      <div className="relative mx-auto mt-4 h-43 w-64  max-[800px]:h-42">
        <Image
          src={item.imgUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain"
        />
      </div>

      {/* Badge */}
      {item.date && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#b64400]">
          {item.category}
        </span>
      )}

      {/* Başlıq */}
      <h3 className="mb-1 text-2xl font-semibold leading-tight w-full overflow-hidden line-clamp-2 text-[#1d1d1f] max-[800px]:text-xl">
        {item.title}
      </h3>

      {/* Alt başlıq: min-h 2 sətirlikdir ki, qiymət bütün kartlarda eyni xəttdə dursun */}
      <p className="mb-2 min-h-[2.4em] text-sm font-semibold leading-[1.2] text-[#1d1d1f] max-[800px]:text-xs">
        {item.date}
      </p>

      {/* Qiymət */}
      <p className="mt-6 text-sm leading-[1.2] text-(--secondary-color) max-[800px]:text-xs w-full overflow-hidden line-clamp-3">
       {item.description}
      </p>
    </Link>
  );
};

export default CarouselItemComponent;
