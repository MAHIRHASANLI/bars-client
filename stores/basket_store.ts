
import { StaticImageData } from "next/image";
import { create } from "zustand";
import { persist } from "zustand/middleware";

//* SƏBƏTDƏKİ MƏHSULUN TYPE-I
export type CartItemType = {
  id: number;
  badge?: string;
  title: string;
  subtitle: string;
  price: number; // Cari satış qiyməti
  oldPrice?: number; // Endirimdən əvvəlki qiymət
  imgUrl: string | StaticImageData;
  slug: string;
  quantity: number;
};

//* TƏKLİF OLUNAN MƏHSULUN TYPE-I (quantity olmadan)
export type CartSuggestionType = Omit<CartItemType, "quantity">;

//* ZUSTAND BASKET STORE TYPE-I
type BasketStoreType = {
  basketDatas: CartItemType[];
  addBasketItem: (item: CartSuggestionType) => void;
  decreaseBasketItem: (id: number) => void;
  removeBasketItem: (id: number) => void;
  clearBasket: () => void;
};

//* ZUSTAND: SƏBƏT STATE-İNİN YARADILMASI VƏ LOCALSTORAGE-DA SAXLANILMASI
export const useBasketStore = create<BasketStoreType>()(
  persist(
    (set) => ({
      //* SƏBƏTİN İLKİN MƏLUMATLARI
      basketDatas: [],

      //* SƏBƏTƏ MƏHSUL ƏLAVƏ ETMƏK VƏ YA MÖVCUD MƏHSULUN SAYINI ARTIRMAQ
      addBasketItem: (newBasket) =>
        set((state) => {
          const existingData = state.basketDatas.find(
            (item) => item.id === newBasket.id,
          );

          // Məhsul artıq səbətdə varsa, sayını 1 vahid artırır
          if (existingData) {
            return {
              basketDatas: state.basketDatas.map((item) =>
                item.id === newBasket.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          // Məhsul səbətdə yoxdursa, quantity: 1 ilə əlavə edir
          return {
            basketDatas: [
              ...state.basketDatas,
              { ...newBasket, quantity: 1 },
            ],
          };
        }),

      //* SƏBƏTDƏKİ MƏHSULUN SAYINI 1 VAHİD AZALTMAQ
      decreaseBasketItem: (id) =>
        set((state) => ({
          basketDatas: state.basketDatas
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            // Məhsulun sayı 0 olduqda onu səbətdən silinir
            .filter((item) => item.quantity > 0),
        })),

      //* MƏHSULU SƏBƏTDƏN TAMAMİLƏ SİLMƏK
      removeBasketItem: (id) =>
        set((state) => ({
          basketDatas: state.basketDatas.filter(
            (item) => item.id !== id,
          ),
        })),

      //* SƏBƏTİ TAMAMİLƏ BOŞALTMAQ
      clearBasket: () => set({ basketDatas: [] }),
    }),
    {
      //* SƏBƏT MƏLUMATLARININ LOCALSTORAGE-DA SAXLANILACAĞI AÇAR
      name: "basket-storage",
    },
  ),
);
