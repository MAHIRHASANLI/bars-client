"use client";

import { useEffect, useRef } from "react";
import { StoreType } from "@/types/links";
import BranchCardComponent from "../branch_list_card";
import PageHeading from "../../shared/page_heading_component";

type Props = {
  stores: StoreType[];
  selectedId: StoreType["id"];
  onSelect: (store: StoreType) => void;
};

function BranchListComponent({ stores, selectedId, onSelect }: Props) {
  const listRef = useRef<HTMLDivElement>(null);

  // Seçim dəyişəndə siyahını yuxarı qaytarır
  useEffect(() => {
    listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedId]);

  if (!stores.length) {
    return (
      <p className="py-6 text-center text-neutral-500">Mağaza tapılmadı</p>
    );
  }

  // Seçilmiş filial birinci, qalanlar əvvəlki sıra ilə
  const selected = stores.find((s) => s.id === selectedId);
  const ordered = selected
    ? [selected, ...stores.filter((s) => s.id !== selectedId)]
    : stores;

  return (
    <div>
      <PageHeading title="Filial seçin" />
      <div
        ref={listRef}
        className="relative thin-scroll max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden"
      >
        <div className="absolute left-0 top-0 z-9 rounded-tl-xl rounded-br-xl bg-(--logo-color) py-2 px-3 text-white text-xs font-semibold">
          <span>Sənin mağazan</span>
        </div>
        {ordered.map((item) => (
          <BranchCardComponent
            key={item.id}
            store={item}
            isSelected={item.id === selectedId}
            onSelect={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default BranchListComponent;