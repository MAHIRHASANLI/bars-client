"use client";

import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format_price_component";
import { useBasketStore } from "@/stores/basket_store";
import img from "@/images/saygac-temiri-img.png";
import { useModalBehavior } from "@/hooks/use_modal_behavior";

export type CartItemType = {
  id: number;
  title: string;
  imgUrl: string | StaticImageData;
  price: number;
  quantity: number;
};

export type CartSuggestionType = Omit<CartItemType, "quantity">;

//!Məhsul kiçik təsviri SEKIL VE BASKETDE SAYI
const ProductThumb = ({
  src,
  alt,
  badge,
}: {
  src: string | StaticImageData;
  alt: string;
  badge?: number;
}) => (
  <div className="relative size-18 shrink-0 rounded-md border border-(--line-color) bg-white max-[500px]:size-16">
    {badge !== undefined && (
      <span className="absolute -left-2 -top-2 z-10 flex size-6 items-center justify-center rounded-full bg-[#4b4b4f] text-xs font-semibold text-white">
        {badge}
      </span>
    )}
    <div className="absolute inset-2">
      <Image src={src} alt={alt} fill sizes="72px" className="object-contain" />
    </div>
  </div>
);

// Siz də bəyənə bilərsiniz bolmesi
const suggestedItems: CartSuggestionType[] = [
  { id: 2, title: "Ultrasəs sayğac 1", imgUrl: img, price: 1800 },
  { id: 3, title: "Qaz korrektoru 2", imgUrl: img, price: 400 },
  { id: 4, title: "Qaz filtri 3", imgUrl: img, price: 450 },
  { id: 5, title: "Qaz filtri 4", imgUrl: img, price: 450 },
  { id: 6, title: "Qaz filtri 5", imgUrl: img, price: 450 },
];

const BasketModalComponent = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  // Modal açıq olduqda: Arxa səhifənin scroll edilməsinin qarşısını alır
  // Escape düyməsinə basıldıqda modalı bağlayır. Modal bağlananda əvvəlki scroll vəziyyətini bərpa edir.
  useModalBehavior(handleCloseModal);
  //! BASKETDEKI MEHSULLARI GETIRIRIK Zustand-dan səbət məlumatlarını almaq
  const getBasketDatas = useBasketStore((state) => state.basketDatas);

  // Səbətdə olan məhsullar təkliflərdə təkrar görünməsin
  const suggestions = suggestedItems.filter(
    (s) => !getBasketDatas.some((c) => c.id === s.id),
  );

  //!Zustand BASKETE KART ELAVE ETMEK Təklif olunan məhsulu səbətə əlavə etmək
  const addBasketItem = useBasketStore((state) => state.addBasketItem);
  const addBasketData = (newCard: CartSuggestionType) => addBasketItem(newCard);
  //!Zustand BASKETE KART QUANTITY(SAYINI) ARTIRMAQ
  function handleİncrementBasketItem(item: CartSuggestionType) {
  addBasketData(item);
  }
  //!Zustand BASKETE KART QUANTITY(SAYINI) AZALTMAQ
  const decreaseBasketItem = useBasketStore(
    (state) => state.decreaseBasketItem,
  );
  function handleDecrementBasketItem(itemId: number) {
    decreaseBasketItem(itemId);
  }
  //!Zustand BASKETDEN KART SILMEK
  const removeBasketItem = useBasketStore((store) => store.removeBasketItem);
  function handleRemoveBasketItem(itemId: number) {
    removeBasketItem(itemId);
  }
  const totalPrice = useBasketStore((state) =>
  state.basketDatas.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  ),
);
  // const clearBasketData = useBasketStore((state) => state.clearBasket);
  // const handleClearBtn = () => {
  //   clearBasketData();
  // };
  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex justify-end bg-black/50 opacity-100 transition-opacity duration-300 starting:opacity-0"
      onClick={() => handleCloseModal()}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Səbət"
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-[min(610px,100%)] translate-x-0 flex-col bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out starting:translate-x-full motion-reduce:transition-none"
      >
        {/* Başlıq */}
        <div className="flex items-center justify-between border-b border-(--line-color) px-6 py-6 max-[500px]:px-4 max-[500px]:py-4">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] max-[500px]:text-xl">
            Səbət ({getBasketDatas.length})
          </h2>
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Bağla"
            className="cursor-pointer rounded-full p-2 text-[#1d1d1f] duration-300 hover:bg-[#f5f5f7]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="size-6"
            >
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {/* Scroll olunan hissə */}
        <div className="flex-1 overflow-y-auto px-6 max-[500px]:px-4">
          {getBasketDatas.length === 0 ? (
            <p className="py-20 pb-8 text-center text-sm text-(--secondary-color)">
              Səbətiniz boşdur
            </p>
          ) : (
            <ul>
              {getBasketDatas.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 border-b border-(--line-color) py-4"
                >
                  <ProductThumb
                    src={item.imgUrl}
                    alt={item.title}
                    badge={item.quantity}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-medium text-[#1d1d1f] max-[500px]:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#1d1d1f]">
                      {formatPrice(item.price)} ₼ wwk
                    </p>
                  </div>
                  {/* ▼▼▼ YENİ BLOK 1: SAY + ÜRƏK + ZİBİL ▼▼▼ */}
                  <div className="inline-flex flex-col items-center">
                    <div className="flex h-10 w-35 items-center justify-between rounded-[10px] border border-neutral-900 bg-white px-4">
                      {/* FUNKSİONALLIQ: say azaltma ("-") düyməsinin onClick-ini bura yazın */}
                      <button
                        type="button"
                        aria-label="Azalt"
                        className="text-md cursor-pointer text-[22px] font-semibold leading-none text-neutral-400"
                        onClick={() => handleDecrementBasketItem(item.id)}
                      >
                        −
                      </button>

                      {/* FUNKSİONALLIQ: cari say dəyərini (1, 2, 3...) bura dinamik yazın */}
                      <span className="text-md font-bold text-neutral-900">
                        {item.quantity}
                      </span>

                      {/* FUNKSİONALLIQ: say artırma ("+") düyməsinin onClick-ini bura yazın */}
                      <button
                        type="button"
                        aria-label="Artır"
                        className="text-md cursor-pointer text-[22px] font-semibold leading-none text-black"
                        onClick={() => handleİncrementBasketItem(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="mt-2 flex justify-center gap-10">
                      {/* FUNKSİONALLIQ: favoritlərə əlavə etmə (ürək) funksiyasını bura yazın */}
                      <button
                        type="button"
                        aria-label="Sevimlilərə əlavə et"
                        className="h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-900"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                          className="block h-full w-full"
                        >
                          <path d="M12 20.5s-8-4.9-8-10.6C4 6.9 6.2 5 8.6 5c1.5 0 2.7.8 3.4 2 .7-1.2 1.9-2 3.4-2C17.8 5 20 6.9 20 9.9c0 5.7-8 10.6-8 10.6z" />
                        </svg>
                      </button>

                      {/* FUNKSİONALLIQ: məhsulu səbətdən silmə (zibil qutusu) funksiyasını bura yazın */}
                      <button
                        type="button"
                        aria-label="Sil"
                        className="h-5 w-5 cursor-pointer text-neutral-500 hover:text-neutral-900"
                        onClick={() => handleRemoveBasketItem(item.id)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="block h-full w-full"
                        >
                          <path d="M5 7h14M10 7V4.5h4V7M6.5 7l.8 13h9.4l.8-13M10 10.5V17M12 10.5V17M14 10.5V17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* ▲▲▲ YENİ BLOK 1 SONU ▲▲▲ */}
                </li>
              ))}
            </ul>
          )}

          {suggestions.length > 0 && (
            <section className="pb-6 pt-12 max-[500px]:pt-8">
              <h3 className="mb-6 text-2xl font-semibold text-[#1d1d1f] max-[500px]:text-xl">
                Siz də bəyənə bilərsiniz
              </h3>
              <ul className="border-t border-(--line-color)">
                {suggestions.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center gap-4 border-b border-(--line-color) py-4"
                  >
                    <ProductThumb src={s.imgUrl} alt={s.title} />
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-base font-medium text-[#1d1d1f] max-[500px]:text-sm">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm text-[#1d1d1f]">
                        {formatPrice(s.price)} ₼
                      </p>
                    </div>
                    <button
                      type="button"
                      // / burada basket elave olunma isleyir
                      onClick={() => addBasketData?.(s)}
                      className="cursor-pointer text-base font-semibold text-(--logo-color) duration-300 hover:text-(--logo-color-hover) max-[500px]:text-sm"
                    >
                      Səbətə
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sabit alt hissə: scroll olanda da görünür */}
        <div className="flex flex-col gap-3 border-t border-(--line-color) bg-white px-6 py-4 shadow-[0_-6px_16px_rgba(0,0,0,0.05)] max-[500px]:px-4">
          {/* <Link
            href="/cart"
            onClick={handleCloseModal}
            className="rounded-4xl border border-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-(--logo-color) duration-300 hover:bg-(--logo-color) hover:text-white max-[800px]:py-3 max-[800px]:text-xs"
          >
            Səbətimə baxın ({getBasketDatas.length})
          </Link> */}
          {/* ▼▼▼ YENİ BLOK 2: ÜMUMİ SİFARİŞ ▼▼▼ */}
          <div className="bg-neutral-100 py-5 rounded-xl">
            <div className="mx-auto flex max-w-[1640px] flex-wrap items-end justify-between gap-5 px-5">
              {/* Sol tərəf */}
              <div>
                {/* Təhlükəsiz sifariş */}
                <div className="flex items-center gap-2 text-lg font-medium text-neutral-500">
                  <svg
                    viewBox="0 0 24 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                    className="h-7 w-6 text-neutral-400"
                  >
                    <rect x="3" y="11" width="18" height="15" rx="2" />
                    <path d="M7 11V8a5 5 0 0 1 10 0v3M12 16v4" />
                  </svg>
                  <span>Təhlükəsiz sifariş</span>
                </div>

                {/* Ödəniş loqoları */}
                <div className="mt-2 flex gap-2">
                  <div className="flex h-7 w-10 items-center justify-center rounded bg-white text-[13px] font-bold text-neutral-800">
                    Pay
                  </div>
                  <div className="flex h-7 w-10 items-center justify-center rounded bg-white text-[13px] font-bold text-neutral-800">
                    G Pay
                  </div>
                  <div className="flex h-7 w-10 items-center justify-center rounded bg-white">
                    <span className="relative block h-4 w-6">
                      <span className="absolute left-0 top-0 h-4 w-4 rounded-full bg-[#eb001b]" />
                      <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-[#f79e1b] opacity-90" />
                    </span>
                  </div>
                  <div className="flex h-7 w-10 items-center justify-center rounded bg-white text-[13px] font-bold italic tracking-wide text-[#1a1f71]">
                    VISA
                  </div>
                </div>
              </div>

              {/* Sağ tərəf */}
              <div className="flex flex-col items-end gap-4">
                <div className="mt-2.5 flex items-baseline gap-4">
                  <span className="text-[20px] text-neutral-700">Cəmi:</span>
                  {/* FUNKSİONALLIQ: ümumi məbləği (bütün məhsulların cəmi) bura dinamik yazın */}
                  <span className="text-[26px] font-bold text-black">
                    {formatPrice(totalPrice)} ₼
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ▲▲▲ YENİ BLOK 2 SONU ▲▲▲ */}
          <Link
            href="/checkout"
            onClick={handleCloseModal}
            className="rounded-4xl border border-(--logo-color) bg-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-white duration-300 hover:border-(--logo-color-hover) hover:bg-(--logo-color-hover) max-[800px]:py-3 max-[800px]:text-xs"
          >
            Sifarişi rəsmiləşdirmək
          </Link>

          <button
            type="button"
            onClick={handleCloseModal}
            className="cursor-pointer py-2 text-sm font-semibold text-(--logo-color) duration-300 hover:text-(--logo-color-hover)"
          >
            Alış-verişə davam edin
          </button>
        </div>
      </aside>
    </div>,
    document.body,
  );
};

export default BasketModalComponent;
