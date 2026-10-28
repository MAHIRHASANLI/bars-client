import { PartnerType } from '@/types/links'
import Image from 'next/image'

const PartnershipsCardItem = ({ item }: { item: PartnerType }) => {
  return (
    <article className="group cursor-pointer flex h-full flex-col rounded-3xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] motion-reduce:transition-none">
      {/* Loqo paneli: iç radius = 24px - 8px padding = 16px (rounded-2xl) */}
      <div className="relative flex h-56 items-center justify-center rounded-2xl bg-[#f5f5f7] p-6 max-[800px]:h-36 max-[800px]:p-5">
        <span className="absolute left-2 top-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#b64400] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          Diler
        </span>
        <div className="relative h-full w-full max-w-56 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Image
            src={item.imgUrl}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            // Ağ fonlu loqolar boz panelin üzərində qutu kimi görünməsin deyə
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-5 max-[800px]:px-2 max-[800px]:pt-4">
        <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-[#1d1d1f] max-[800px]:text-lg">
          {item.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--secondary-color) max-[800px]:text-xs">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default PartnershipsCardItem
