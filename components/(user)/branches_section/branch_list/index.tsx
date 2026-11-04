"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { StoreType } from "@/types/links";
import BranchCardComponent from "../branch_list_card";
import { CiSearch } from "react-icons/ci";

type Props = {
  stores: StoreType[];
  selectedId: StoreType["id"];
  onSelect: (store: StoreType) => void;
};

//   StoreType-dakı real sahə adlarını bura yaz (name, address, city və s.)
const field = (s: StoreType, key: string): string => {
  const v = (s as unknown as Record<string, unknown>)[key];
  return typeof v === "string" ? v : "";
};
const getSearchText = (s: StoreType) =>
  `${field(s, "name")} ${field(s, "address")}`.toLowerCase();
const getRegion = (s: StoreType) => field(s, "city");

function BranchListComponent({ stores, selectedId, onSelect }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedId]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: 0 });
  }, [query, region]);

  const regions = useMemo(
    () => Array.from(new Set(stores.map(getRegion).filter(Boolean))),
    [stores]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores.filter(
      (s) =>
        (region === "all" || getRegion(s) === region) &&
        (!q || getSearchText(s).includes(q))
    );
  }, [stores, query, region]);

  const selected = filtered.find((s) => s.id === selectedId);
  const ordered = selected
    ? [selected, ...filtered.filter((s) => s.id !== selectedId)]
    : filtered;

  const hasFilter = query !== "" || region !== "all";

  return (
    <div className="flex flex-col gap-3">
      {/* Sabit üst hissə */}
      <div className="relative flex flex-col gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=' Mağaza və ya ünvan axtarın...'
          className="w-full rounded-lg border border-neutral-200 bg-white px-8 py-3 text-sm outline-none focus:border-(--logo-color)"
        /><CiSearch className="absolute left-3 top-3.5 text-neutral-400" />

        {regions.length > 1 && (
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            aria-label="Bölgə seç"
            className="w-full cursor-pointer rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-(--logo-color)"
          >
            <option value="all">Bütün bölgələr</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        )}

        <div className="flex items-center justify-between px-1 text-xs text-neutral-500">
          <span>
            <b className="font-semibold text-neutral-800">{filtered.length}</b>{" "}
            mağaza tapıldı
          </span>
          {hasFilter && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setRegion("all");
              }}
              className="font-medium text-(--logo-color) hover:underline"
            >
              Təmizlə
            </button>
          )}
        </div>
      </div>

      {/* Scroll olan siyahı (əvvəlki işləyən hündürlüklər) */}
      <div
        ref={listRef}
        className="relative thin-scroll overflow-y-auto overflow-x-hidden overscroll-contain
             max-h-105 max-[500px]:max-h-90
             min-[1000px]:max-h-[calc(100vh-200px)]"
      >
        {ordered.length === 0 ? (
          <p className="py-6 text-center text-neutral-500">Mağaza tapılmadı</p>
        ) : (
          <>
            {selected && (
              <div className="absolute left-0 top-0 z-9 rounded-tl-xl rounded-br-xl bg-(--logo-color) px-3 py-2 text-xs font-semibold text-white">
                <span>Sənin mağazan</span>
              </div>
            )}
            {ordered.map((item) => (
              <BranchCardComponent
                key={item.id}
                store={item}
                isSelected={item.id === selectedId}
                onSelect={() => onSelect(item)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default BranchListComponent;