"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/components/(user)/navbar/links";

const CategorySidebar = () => {
  const pathname = usePathname();
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  // Cari kateqoriyanı tapırıq
  const currentCategory = links.find(
    (link) =>
      link.href === pathname ||
      link.children?.some((child) => child.href === pathname),
  );
  console.log("currentCategory: ",currentCategory)

  // Cari kateqoriyanın alt kateqoriyaları
  if (!currentCategory) return null;
  
  const categoryItems = currentCategory?.children ?? [];
  console.log("categoryItems: ", categoryItems)


  return (
    <aside className="sticky top-4 self-start">
      {/* Kateqoriya naviqasiyası */}
      <div className="border-b-0 border-(--line-color) pb-4">
        <button
          type="button"
          onClick={() => setIsCategoryOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center gap-2 text-left text-xl text-black"
        >
          {currentCategory.title}

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-200 ${
              isCategoryOpen ? "" : "rotate-180"
            }`}
          >
            <path d="M6 15l6-6 6 6" />
          </svg>
        </button>

        {isCategoryOpen && (
          <ul className="mt-3 flex flex-col gap-3 pl-7">
            {categoryItems.map(({ title, href="" }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base text-black hover:text-(--logo-color)"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Stokda var */}
      <div className="border-t border-(--line-color) py-5">
        <span className="text-xl text-black">Stokda var</span>
      </div>

      {/* Qiymət */}
      <div className="border-t border-(--line-color) py-5">
        <h3 className="text-xl text-black">Qiymət, ₼</h3>

        <p className="mt-3 text-sm text-(--secondary-color)">
          Ən yüksək qiymət 14 599 ₼
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="-dən"
            className="h-17 w-full rounded-sm border border-(--line-color) px-4 text-lg outline-none placeholder:text-(--secondary-color) focus:border-(--logo-color)"
          />

          <input
            type="number"
            placeholder="qədər"
            className="h-17 w-full rounded-sm border border-(--line-color) px-4 text-lg outline-none placeholder:text-(--secondary-color) focus:border-(--logo-color)"
          />
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;