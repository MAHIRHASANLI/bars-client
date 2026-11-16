"use client";

import {
  CartSuggestionType,
  useBasketStore,
} from "@/stores/basket_store";

const QuantitySelectorComponent = ({
  item,
}: {
  item: CartSuggestionType;
}) => {
  const quantity = useBasketStore(
    (state) =>
      state.basketDatas.find((basketItem) => basketItem.id === item.id)
        ?.quantity ?? 0,
  );

  const decreaseBasketItem = useBasketStore(
    (state) => state.decreaseBasketItem,
  );

  const addBasketItem = useBasketStore((state) => state.addBasketItem);

  return (
    <div className="flex h-10 w-35 items-center justify-between rounded-[10px] border border-neutral-900 bg-white px-4 max-[500px]:h-8 max-[500px]:w-25 max-[500px]:px-2">
      <button
        type="button"
        aria-label="Azalt"
        className="cursor-pointer text-[22px] font-semibold leading-none text-neutral-400 max-[500px]:text-lg"
        onClick={() => decreaseBasketItem(item.id)}
      >
        −
      </button>

      <span className="text-md font-bold text-neutral-900 max-[500px]:text-sm">
        {quantity}
      </span>

      <button
        type="button"
        aria-label="Artır"
        className="cursor-pointer text-[22px] font-semibold leading-none text-black max-[500px]:text-lg"
        onClick={() => addBasketItem(item)}
      >
        +   
      </button>
    </div>
  );
};

export default QuantitySelectorComponent;