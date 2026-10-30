"use client";

import { useBasketStore } from "@/stores/basket_store";
import { ProductType } from "@/types/links";
import { useState } from "react";
import { BiSolidBasket } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";

const BtnBasketIconComponent = ({ product }: { product: ProductType }) => {
  const [isLoading, setIsLoading] = useState(false);
  //! MƏHSULUN SƏBƏTDƏ OLUB-OLMADIĞINI YOXLAMAQ
  const basketData = useBasketStore((store) => store.basketDatas);
  const isActiveIcon = basketData.some((item) => item.id === product.id && item.title === product.title && product.slug === product.slug);

  //! ZUSTAND: SƏBƏTƏ MƏHSUL ƏLAVƏ ETMƏK
  const addBasketItem = useBasketStore((store) => store.addBasketItem);
  //! MƏHSULU SƏBƏTƏ ƏLAVƏ ETMƏK
  const handleAdBasket = async () => {
    if (isLoading || isActiveIcon) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addBasketItem(product);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      type="button"
      disabled={isLoading || isActiveIcon}
      onClick={handleAdBasket}
      aria-label={isActiveIcon ? "Bəyənməni geri götür" : "Bəyən"}
    >
      {isActiveIcon ? (
        <BiSolidBasket className="size-6 max-[1000px]:size-4 text-(--logo-color) cursor-pointer transition-colors duration-200" />
      ) : (
        <CiShoppingBasket className="size-6 max-[1000px]:size-4 text-(--secondary-color) hover:text-(--logo-color) cursor-pointer transition-colors duration-200" />
      )}
    </button>
  );
};

export default BtnBasketIconComponent;
