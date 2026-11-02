"use client";

import { StoreType } from "@/types/links";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import SecondaryButton from "../../shared/buttons/secondary_btn";
import InfoComponent from "../branch_list_info";

const BranchCardComponent = ({
  store,
  isSelected,
  onSelect,
}: {
  store: StoreType;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const moreId = `more-${store.id}`;

  const hasServices = !!store.services?.length;

 
const query = encodeURIComponent(store.mapQuery ?? `${store.address}, Bakı`);
const placeUrl =
  store.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${query}`;
  return (
    <div
      className="mb-4 rounded-xl border bg-white p-4 border-neutral-300"
    >
      <div className="relative block h-64 w-full bg-(--img-bg-color)">
        {store.imgUrl && (
          <Image
            src={store.imgUrl}
            alt={store.name}
            fill
            className="rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <InfoComponent store={store} placeUrl={placeUrl} />
      {hasServices && (
        <>
          <div
            id={moreId}
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="pt-2">
                <p className="font-semibold text-sm">Mağaza xidmətləri</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {store.services!.map((s) => (
                    <li key={s} className="text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={moreId}
            onClick={() => setOpen((v) => !v)}
            className="mt-2.5 text-sm hover:underline flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-semibold text-[#0071e3]"
          >
            {open ? "Daha az" : "Xidmətlərə baxın "}
            <FaAngleDown
              className={`size-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}

      <SecondaryButton onClick={onSelect}>Seçin</SecondaryButton>
    </div>
  );
};

export default BranchCardComponent;
