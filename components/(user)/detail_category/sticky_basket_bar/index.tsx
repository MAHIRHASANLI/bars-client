"use client";
import { ProductType } from "@/types/links";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import PrimaryButton from "../../shared/buttons/primary_button";
import SecondaryButton from "../../shared/buttons/secondary_btn";
import { useBasketStore } from "@/stores/basket_store";
import { showToast } from "../../shared/toast";

const StickyBasketBarComponent = ({
  product,
  hasDiscount,
}: {
  product: ProductType;
  hasDiscount?: boolean;
}) => {
  const addBasketItem = useBasketStore((store) => store.addBasketItem);
  function handleAddBasket() {
    addBasketItem(product);
    showToast("Qaz təzyiq tənzimləyicisi səbətə əlavə edildi");
  }
  return (
    <div className="fixed py-1 inset-x-0 bottom-0 z-40 border-t border-(--secondary-color) bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex flex-col gap-1 text-sm">
          <div>
            <p className="font-semibold flex gap-2 items-center text-sm">
              <IoStorefrontOutline className="text-(--secondary-color) size-5" />{" "}
              Özün götürmə
            </p>
            <p className="text-green-700 pl-7 mt-px">
              Mağazadan təhvil almaq mümkün olacaq.
            </p>
          </div>
          <p className="font-semibold flex gap-2 items-center text-sm mt-2">
            <CiDeliveryTruck className="text-(--secondary-color) size-5" />
            Çatdırılma
          </p>
        </div>

        <div className="flex items-baseline gap-3">
          <p className="text-2xl font-bold">{product.price} ₼</p>
          {hasDiscount && (
            <p className="text-base text-gray-400 line-through">
              {product.oldPrice} ₼
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <PrimaryButton onClick={handleAddBasket} type="button">
            Səbətə
          </PrimaryButton>
          <SecondaryButton type="button">1 kliklə al</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default StickyBasketBarComponent;
