"use client";

import { useCallback, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import BasketModalComponent, {
  type CartItemType,
  type CartSuggestionType,
} from "../basket_modal";
// Şəkilləri öz yoluna görə dəyiş
import img from "@/images/saygac-temiri-img.png";

// Müvəqqəti test datası. Sonra API-dən və ya global state-dən gələcək.
const initialItems: CartItemType[] = [
  { id: 1, title: "Smart qaz sayğacı", imgUrl: img, price: 3200, quantity: 1 },
];

const suggestedItems: CartSuggestionType[] = [
  { id: 2, title: "Ultrasəs sayğac", imgUrl: img, price: 1800 },
  { id: 3, title: "Qaz korrektoru", imgUrl: img, price: 400 },
  { id: 4, title: "Qaz filtri", imgUrl: img, price: 450 },
];

const BasketIconComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialItems);

  const handleOpenModal = () => setIsOpenModal(true);
  // useCallback: modalın useEffect-i hər render-də yenidən qurulmasın
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  const addToCart = (item: CartSuggestionType) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        // Səbətdə artıq varsa sayı artır
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Səbətdə olan məhsullar təkliflərdə təkrar görünməsin
  const suggestions = suggestedItems.filter(
    (s) => !cartItems.some((c) => c.id === s.id)
  );

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

      {isOpenModal && (
        <BasketModalComponent
          items={cartItems}
          suggestions={suggestions}
          onClose={handleCloseModal}
          onAdd={addToCart}
        />
      )}
    </div>
  );
};

export default BasketIconComponent;