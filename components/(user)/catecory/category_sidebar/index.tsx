"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/components/(user)/navbar/links";
import CategoryFilterPanelComponent from "../category_filter_panel";

const CategorySidebar = () => {
  const pathname = usePathname();
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // yalnız mobile üçün

  // Cari kateqoriyanı tapırıq
  const currentCategory = links.find(
    (link) =>
      link.href === pathname ||
      link.children?.some((child) => child.href === pathname),
  );

  // Cari kateqoriyanın alt kateqoriyaları
  if (!currentCategory) return null;

  const categoryItems = currentCategory?.children ?? [];

  return (
    <aside className="sticky top-4 self-start max-[1000px]:static max-[1000px]:self-stretch">
      {/* Mobile: Filtr düyməsi (1000px-dən yuxarıda gizlidir) */}
      <button
        type="button"
        onClick={() => setIsFilterOpen(true)}
        aria-expanded={isFilterOpen}
        className="hidden h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-sm border border-(--logo-color) bg-white text-sm font-medium text-(--logo-color) max-[1000px]:flex"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M7 12h10M10 17h4" />
        </svg>
        Filtr
      </button>

      {/* Desktop-da həmişə görünür. Mobile-da tam ekran panel kimi açılıb-bağlanır */}
      <CategoryFilterPanelComponent
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        currentCategory={currentCategory}
      />
    </aside>
  );
};

export default CategorySidebar;
