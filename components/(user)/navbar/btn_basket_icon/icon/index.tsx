"use client";

import { useCallback, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import BasketModalComponent from "../basket_modal";

const BasketIconComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  // useCallback: modalın useEffect-i hər render-də yenidən qurulmasın
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        aria-label="Səbət"
        className="relative"
      >
        <BsBasket3 className="size-4 cursor-pointer max-[1000px]:size-5" />
      </button>

      {isOpenModal && <BasketModalComponent handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default BasketIconComponent;
