
"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format_price_component";

export type CartItemType = {
  id: number;
  title: string;
  imgUrl: string | StaticImageData;
  price: number;
  quantity: number;
};

export type CartSuggestionType = Omit<CartItemType, "quantity">;

type CartModalProps = {
  items: CartItemType[];
  suggestions?: CartSuggestionType[];
  onClose: () => void;
  onAdd?: (item: CartSuggestionType) => void;
};

// Server-də false, client-də true (hydration-a uyğun)
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const ProductThumb = ({
  src,
  alt,
  badge,
}: {
  src: string | StaticImageData;
  alt: string;
  badge?: number;
}) => (
  <div className="relative size-[72px] shrink-0 rounded-md border border-(--line-color) bg-white max-[500px]:size-16">
    {badge !== undefined && (
      <span className="absolute -left-2 -top-2 z-10 flex size-6 items-center justify-center rounded-full bg-[#4b4b4f] text-xs font-semibold text-white">
        {badge}
      </span>
    )}
    <div className="absolute inset-2">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="72px"
        className="object-contain"
      />
    </div>
  </div>
);

const BasketModalComponent = ({
  items,
  suggestions = [],
  onClose,
  onAdd,
}: CartModalProps) => {
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex justify-end bg-black/50 opacity-100 transition-opacity duration-300 starting:opacity-0"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
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
            Səbət
          </h2>
          <button
            type="button"
            onClick={onClose}
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
          {items.length === 0 ? (
            <p className="py-16 text-center text-sm text-(--secondary-color)">
              Səbətiniz boşdur
            </p>
          ) : (
            <ul>
              {items.map((item) => (
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
                      {formatPrice(item.price)} ₼
                    </p>
                  </div>
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
                      onClick={() => onAdd?.(s)}
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
        <div className="flex flex-col gap-3 border-t border-(--line-color) bg-white px-6 py-5 shadow-[0_-6px_16px_rgba(0,0,0,0.05)] max-[500px]:px-4">
          <Link
            href="/cart"
            onClick={onClose}
            className="rounded-4xl border border-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-(--logo-color) duration-300 hover:bg-(--logo-color) hover:text-white max-[800px]:py-3 max-[800px]:text-xs"
          >
            Səbətimə baxın ({items.length})
          </Link>

          <Link
            href="/checkout"
            onClick={onClose}
            className="rounded-4xl border border-(--logo-color) bg-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-white duration-300 hover:border-(--logo-color-hover) hover:bg-(--logo-color-hover) max-[800px]:py-3 max-[800px]:text-xs"
          >
            Sifarişi rəsmiləşdirmək
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer py-2 text-sm font-semibold text-(--logo-color) duration-300 hover:text-(--logo-color-hover)"
          >
            Alış-verişə davam edin
          </button>
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default BasketModalComponent;