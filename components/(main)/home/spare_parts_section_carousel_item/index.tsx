import { SparePartType } from '@/types/links'
import Image from 'next/image'
import Link from 'next/link'

const SparePartsSectionCarouselItem = ({ item }: { item: SparePartType }) => {
  return (
    <Link
      href={item.slug}
      className="group flex h-full flex-col rounded-3xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.05)] ring-1 ring-black/4 transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f] motion-reduce:transition-none"
    >
      {/* Şəkil paneli: iç radius = 24px - 8px padding = 16px (rounded-2xl).
          Hündürlük 288px (h-72), mobildə 208px (h-52) */}
      <div className="relative h-62 rounded-2xl bg-[#f5f5f7] max-[800px]:h-52">
        {item.category && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-white px-3 py-1 text-xs font-medium text-(--color-tone-orange) shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            {item.category}
          </span>
        )}

        {/* Şəkil panelin demək olar ki, hamısını tutur (kənardan 16px boşluq) */}
        <div className="absolute inset-4 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Image
            src={item.imgUrl}
            alt={item.title}
            fill
            sizes="(max-width: 800px) 80vw, 33vw"
            // Ağ fonlu şəkillər boz panelin üzərində qutu kimi görünməsin deyə
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Mətn */}
      <div className="flex flex-1 flex-col px-3 pb-4 pt-5 max-[800px]:px-2 max-[800px]:pt-4">
        <h3 className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-[#1d1d1f] max-[800px]:text-lg">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--secondary-color) max-[800px]:text-xs">
          {item.description}
        </p>

        {/* Ətraflı: mt-auto sayəsində bütün kartlarda eyni xəttdə dayanır */}
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-(--color-tone-orange)">
          Ətraflı
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-2 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            <path d="M6 3l5 5-5 5" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default SparePartsSectionCarouselItem
