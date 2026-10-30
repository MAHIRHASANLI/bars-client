"use client";

import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format_price_component";
import { CartSuggestionType, useBasketStore } from "@/stores/basket_store";
import img from "@/images/saygac-temiri-img.png";
import { useModalBehavior } from "@/hooks/use_modal_behavior";
import LikeButtonComponent from "@/components/(user)/shared/buttons/btn_like";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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
  {
    id: 1,
    badge: "ENDİRİMLİ",
    title: "Qaz tənzimləyicisi",
    subtitle: "Qaz təzyiqinin sabit saxlanılması üçün.",
    price: 85,
    oldPrice: 110,
    imgUrl: img,
    slug: "qaz-tenzimleyicisi",
  },
  {
    id: 2,
    badge: "",
    title: "Qaz filtri DN50",
    subtitle: "Qaz xəttində mexaniki hissəciklərin təmizlənməsi üçün.",
    price: 145,
    imgUrl: img,
    slug: "qaz-filtri-dn50",
  },
  {
    id: 3,
    badge: "ENDİRİMLİ",
    title: "Elektromaqnit klapan",
    subtitle: "Qaz axınının avtomatik idarə olunması üçün.",
    price: 120,
    oldPrice: 150,
    imgUrl: img,
    slug: "elektromaqnit-klapan",
  },
  {
    id: 4,
    badge: "",
    title: "Qaz detektoru",
    subtitle: "Qaz sızmasının aşkarlanması üçün təhlükəsizlik cihazı.",
    price: 55,
    imgUrl: img,
    slug: "qaz-detektoru",
  },
  {
    id: 5,
    badge: "",
    title: "Su sayğacı",
    subtitle: "Su sərfiyyatının dəqiq ölçülməsi üçün.",
    price: 45,
    imgUrl: img,
    slug: "su-saygaci",
  },
  {
    id: 6,
    badge: "ENDİRİMLİ",
    title: "Qaz korrektoru",
    subtitle: "Qaz həcminin temperatur və təzyiqə görə korreksiyası.",
    price: 650,
    oldPrice: 720,
    imgUrl: img,
    slug: "qaz-korrektoru",
  },
  {
    id: 7,
    badge: "",
    title: "Qaz sayğacı",
    subtitle: "Qaz sərfiyyatının ölçülməsi üçün sənaye tipli sayğac.",
    price: 280,
    imgUrl: img,
    slug: "qaz-saygaci",
  },
  {
    id: 8,
    badge: "",
    title: "Flanş DN80",
    subtitle: "Boru xətlərində birləşmələrin təmin edilməsi üçün.",
    price: 35,
    imgUrl: img,
    slug: "flans-dn80",
  },
  {
    id: 9,
    badge: "ENDİRİMLİ",
    title: "Qaz klapanı",
    subtitle: "Qaz xəttində axının idarə olunması üçün.",
    price: 95,
    oldPrice: 115,
    imgUrl: img,
    slug: "qaz-klapani",
  },
  {
    id: 10,
    badge: "",
    title: "Qaz təzyiq sensoru",
    subtitle: "Qaz sistemlərində təzyiqin ölçülməsi və nəzarəti üçün.",
    price: 175,
    imgUrl: img,
    slug: "qaz-tezyiq-sensoru",
  },
];

const BasketModalComponent = ({
  handleCloseModal,
  totalQuantity = 0,
}: {
  handleCloseModal: () => void;
  totalQuantity: number;
}) => {
  // Modal açıq olduqda: Arxa səhifənin scroll edilməsinin qarşısını alır
  // Escape düyməsinə basıldıqda modalı bağlayır. Modal bağlananda əvvəlki scroll vəziyyətini bərpa edir.
  useModalBehavior(handleCloseModal);
  //! BASKETDEKI MEHSULLARI GETIRIRIK Zustand-dan səbət məlumatlarını almaq
  const basketDatas = useBasketStore((state) => state.basketDatas);

  // Səbətdə olan məhsullar təkliflərdə təkrar görünməsin
  const suggestions = suggestedItems.filter(
    (s) => !basketDatas.some((c) => c.id === s.id),
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
  //! ZUSTAND ILE UMUMI QIYMETI YAZMAQ
  const totalPrice = basketDatas.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // const clearBasketData = useBasketStore((state) => state.clearBasket);
  // const handleClearBtn = () => {
  //   clearBasketData();
  // };
  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex justify-end bg-black/50 opacity-100 transition-opacity duration-1000 starting:opacity-0"
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
            Səbət ({totalQuantity})
          </h2>
          <button
            type="button"
            onClick={handleCloseModal}
            aria-label="Bağla"
            className="cursor-pointer rounded-full p-2 text-[#1d1d1f] duration-300 hover:bg-[#f5f5f7]"
          >
            <IoMdClose className="size-8" />
          </button>
        </div>

        {/* Scroll olunan hissə */}
        <div className="flex-1 overflow-y-auto px-6 max-[500px]:px-4">
          {basketDatas.length === 0 ? (
            <p className="py-20 pb-8 text-center text-sm text-(--secondary-color)">
              Səbətiniz boşdur
            </p>
          ) : (
            <ul>
              {basketDatas.map((item) => (
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
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  {/* ▼▼▼ YENİ BLOK 1: SAY + ÜRƏK + ZİBİL ▼▼▼ */}
                  <div className="inline-flex flex-col items-center">
                    <div className="flex h-10 w-35 items-center justify-between rounded-[10px] border border-neutral-900 bg-white px-4 max-[500px]:h-8 max-[500px]:w-25 max-[500px]:px-2">
                      {" "}
                      {/* FUNKSİONALLIQ: say azaltma ("-") düyməsinin onClick-ini bura yazın */}
                      <button
                        type="button"
                        aria-label="Azalt"
                        className="cursor-pointer text-[22px] font-semibold leading-none text-neutral-400 max-[500px]:text-lg"
                        onClick={() => handleDecrementBasketItem(item.id)}
                      >
                        −
                      </button>
                      {/* FUNKSİONALLIQ: cari say dəyərini (1, 2, 3...) bura dinamik yazın */}
                      <span className="text-md font-bold text-neutral-900 max-[500px]:text-sm">
                        {item.quantity}
                      </span>
                      {/* FUNKSİONALLIQ: say artırma ("+") düyməsinin onClick-ini bura yazın */}
                      <button
                        type="button"
                        aria-label="Artır"
                        className="cursor-pointer text-[22px] font-semibold leading-none text-black max-[500px]:text-lg"
                        onClick={() => handleİncrementBasketItem(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-center gap-10 max-[500px]:mt-1 max-[500px]:gap-5">
                      {/* FUNKSİONALLIQ: favoritlərə əlavə etmə (ürək) funksiyasını bura yazın */}
                      <LikeButtonComponent />

                      {/* FUNKSİONALLIQ: məhsulu səbətdən silmə (zibil qutusu) funksiyasını bura yazın */}
                      <button
                        type="button"
                        aria-label="Sil"
                        className="cursor-pointer text-(--secondary-color) transition-colors duration-200 hover:text-(--logo-color) max-[1000px]:size-4 max-[500px]:size-3"
                        onClick={() => handleRemoveBasketItem(item.id)}
                      >
                        <MdDeleteOutline className="size-5 max-[1000px]:size-4" />
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
            Səbətimə baxın ({basketDatas.length})
          </Link> */}
          {/* ▼▼▼ YENİ BLOK 2: ÜMUMİ SİFARİŞ ▼▼▼ */}
          <div className="rounded-xl bg-neutral-100 py-5 max-[500px]:py-3">
            <div className="mx-auto flex max-w-[1640px] flex-wrap items-end justify-between gap-5 px-5 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-3 max-[500px]:px-3">
              {/* Sol tərəf */}
              <div>
                {/* Təhlükəsiz sifariş */}
                <div className="flex items-center gap-2 text-lg font-medium text-neutral-500 max-[500px]:text-sm">
                  <svg
                    viewBox="0 0 24 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                    className="h-7 w-6 text-neutral-400 max-[500px]:h-5 max-[500px]:w-4"
                  >
                    <rect x="3" y="11" width="18" height="15" rx="2" />
                    <path d="M7 11V8a5 5 0 0 1 10 0v3M12 16v4" />
                  </svg>
                  <span>Təhlükəsiz sifariş</span>
                </div>

                {/* Ödəniş loqoları */}
                <div className="mt-2 flex gap-2 max-[500px]:mt-1">
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
              <div className="flex flex-col items-end gap-4 max-[500px]:w-full max-[500px]:items-start">
                <div className="mt-2.5 flex items-baseline gap-4 max-[500px]:mt-0 max-[500px]:w-full max-[500px]:justify-between max-[500px]:gap-2">
                  <span className="text-[20px] text-neutral-700 max-[500px]:text-base">
                    Cəmi:
                  </span>
                  {/* FUNKSİONALLIQ: ümumi məbləği (bütün məhsulların cəmi) bura dinamik yazın */}
                  <span className="text-[26px] font-bold text-black max-[500px]:text-xl">
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
