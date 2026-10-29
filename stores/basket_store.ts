import {
  CartItemType,
  CartSuggestionType,
} from "@/components/(user)/navbar/btn_basket_icon/basket_modal";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type BasketStoreType = {
  basketDatas: CartItemType[];
  addBasketItem: (item: CartSuggestionType) => void;
  decreaseBasketItem: (id: number) => void;
  removeBasketItem: (id: number) => void;
  clearBasket: () => void;
};

export const useBasketStore = create<BasketStoreType>()(
  persist(
    (set) => ({
      basketDatas: [],

      // Məhsulu səbətə əlavə edir və ya sayını artırır
      addBasketItem: (newBasket) =>
        set((state) => {
          const existingData = state.basketDatas.find(
            (item) => item.id === newBasket.id,
          );

          if (existingData) {
            return {
              basketDatas: state.basketDatas.map((item) =>
                item.id === newBasket.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            basketDatas: [
              ...state.basketDatas,
              { ...newBasket, quantity: 1 },
            ],
          };
        }),

      // Məhsulun sayını azaldır
      decreaseBasketItem: (id) =>
        set((state) => ({
          basketDatas: state.basketDatas
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      // Məhsulu səbətdən tamamilə silir
      removeBasketItem: (id) =>
        set((state) => ({
          basketDatas: state.basketDatas.filter(
            (item) => item.id !== id,
          ),
        })),
        

      // Səbəti tamamilə boşaldır
      clearBasket: () => set({ basketDatas: [] }),
    }),
    {
      name: "basket-storage",
    },
  ),
);