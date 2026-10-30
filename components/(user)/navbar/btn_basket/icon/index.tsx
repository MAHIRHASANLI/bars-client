"use client";

import { useCallback, useState } from "react";
import BasketModalComponent from "../basket_modal";
import { useBasketStore } from "@/stores/basket_store";
import { CiShoppingBasket } from "react-icons/ci";
import CountBadgeComponent from "@/components/(user)/shared/count_badge_component";

const BasketIconComponent = () => {
  //* MODALIN AÇILIB BAĞLANMASI
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);

  //* useCallback: handleCloseModal funksiyasının referansını qoruyur.
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  //* ZUSTAND: SƏBƏT MƏLUMATLARINI ƏLDƏ ETMƏK
  const basketDatas = useBasketStore((state) => state.basketDatas);

  //* SƏBƏTDƏKİ MƏHSULLARIN ÜMUMİ SAYINI HESABLAMAQ
  const totalQuantity = basketDatas.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <div>
      {/* Səbət modalını açır və səbət ikonunu göstərir */}
      <button
        onClick={handleOpenModal}
        aria-label="Səbət"
        className="relative cursor-pointer"
      >
        <CiShoppingBasket className="size-5 max-[1000px]:size-5" />

        {/* Səbətdəki məhsulların ümumi sayını göstərir */}
        <CountBadgeComponent>{totalQuantity}</CountBadgeComponent>
      </button>

      {isOpenModal && (
        <BasketModalComponent
          totalQuantity={totalQuantity}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BasketIconComponent;
