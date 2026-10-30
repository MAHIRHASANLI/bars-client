"use client";

import Link from "next/link";
import { links } from "@/components/(user)/navbar/links";
import { useState } from "react";

type CategoryFilterPanelProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentCategory: (typeof links)[number];
};

const CategoryFilterPanelComponent = ({
  isFilterOpen,
  setIsFilterOpen,
  currentCategory,
}: CategoryFilterPanelProps) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const categoryItems = currentCategory.children ?? [];

  return (
    <div
      className={
        isFilterOpen
          ? "fixed inset-0 z-999999 flex flex-col bg-white max-[1000px]:flex max-[1000px]:flex-col"
          : "max-[1000px]:hidden"
      }
    >
      {/* Mobile: panel başlığı + bağlama düyməsi */}
      <div className="relative hidden px-5 pb-3 pt-14 max-[1000px]:block">
        <button
          type="button"
          onClick={() => setIsFilterOpen(false)}
          aria-label="Bağla"
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center text-black"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
        <h2 className="text-3xl font-semibold text-black">Filtrlər</h2>
      </div>

      {/* Scroll olunan məzmun */}
      <div className="max-[1000px]:flex-1 max-[1000px]:overflow-y-auto max-[1000px]:border-t max-[1000px]:border-(--line-color) max-[1000px]:px-5">
        {/* Kateqoriya naviqasiyası */}
        <div className="border-b-0 border-(--line-color) pb-4 max-[1000px]:pt-4">
          <button
            type="button"
            onClick={() => setIsCategoryOpen((prev) => !prev)}
            className="flex w-full cursor-pointer items-center gap-2 text-left text-xl text-black max-[1000px]:text-lg"
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
            <ul className="mt-3 flex flex-col gap-3 pl-7 max-[1000px]:pl-4">
              {categoryItems.map(({ title, href = "" }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsFilterOpen(false)}
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
        <div className="border-t border-(--line-color) py-5 max-[1000px]:py-4">
          <span className="text-xl text-black max-[1000px]:text-lg">
            Stokda var
          </span>
        </div>

        {/* Qiymət */}
        <div className="border-t border-(--line-color) py-5 max-[1000px]:py-4">
          <h3 className="text-xl text-black max-[1000px]:text-lg">Qiymət, ₼</h3>

          <p className="mt-3 text-sm text-(--secondary-color)">
            Ən yüksək qiymət 14 599 ₼
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="-dən"
              className="h-17 w-full rounded-sm border border-(--line-color) px-4 text-lg outline-none placeholder:text-(--secondary-color) focus:border-(--logo-color) max-[1000px]:h-14 max-[1000px]:text-base"
            />

            <input
              type="number"
              placeholder="qədər"
              className="h-17 w-full rounded-sm border border-(--line-color) px-4 text-lg outline-none placeholder:text-(--secondary-color) focus:border-(--logo-color) max-[1000px]:h-14 max-[1000px]:text-base"
            />
          </div>
        </div>
      </div>

      {/* Mobile: Tətbiq et düyməsi */}
      <div className="hidden px-5 py-4 max-[1000px]:block">
        <button
          type="button"
          onClick={() => setIsFilterOpen(false)}
          className="h-14 w-full cursor-pointer rounded-full border border-(--logo-color) bg-white text-base font-medium text-(--logo-color)"
        >
          Tətbiq et
        </button>
      </div>
    </div>
  );
};

export default CategoryFilterPanelComponent;
