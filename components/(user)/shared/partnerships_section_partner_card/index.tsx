import { PartnerType } from "@/types/links";
import Image from "next/image";

const PartnershipsCardItem = ({ item }: { item: PartnerType }) => {
  return (
    <article className="group relative aspect-350/408 h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-[#1d1d1f]">
      {/* Fon: eyni şəkil, yumşaq blur, canlı rənglər */}
      <Image
        src={item.imgUrl}
        alt=""
        aria-hidden="true"
        fill
        sizes="200px"
        className="scale-125 object-cover blur-xs saturate-150 transition-transform duration-700 ease-out group-hover:scale-130 motion-reduce:transition-none motion-reduce:group-hover:scale-125"
      />

      {/* Yüngül örtük: yalnız rəngləri bir az sakitləşdirir */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* Aşağıdan yuxarı gradient (yalnız yazı üçün) */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Aşağıda blur qatı (yazının arxasında) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-md mask-[linear-gradient(to_top,black_30%,transparent)]" />

      {/* Ön plan: şəkil öz yerində, aydın */}
      <div className="absolute inset-x-5 top-18 bottom-27.5 flex items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 max-[800px]:inset-x-4">
        <div className="relative h-full w-full">
          <Image
            src={item.imgUrl}
            alt={item.name}
            fill
            sizes="(max-width: 800px) 80vw, 25vw"
            className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Sol yuxarı: tip */}
      <span className="absolute left-5 top-5 z-10 rounded-full border border-white/80 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
        Diler
      </span>

      {/* Aşağıda: xətt + ad */}
      <div className="absolute inset-x-5 bottom-5 z-10 flex flex-col gap-2">
        <span
          aria-hidden="true"
          className="h-0.5 w-4 shrink-0 rounded-full bg-(--color-tone-orange)"
        />
        <h3 className="line-clamp-2 text-xl font-bold leading-tight text-white max-[800px]:text-lg">
          {item.name}
        </h3>
      </div>
    </article>
  );
};

export default PartnershipsCardItem;