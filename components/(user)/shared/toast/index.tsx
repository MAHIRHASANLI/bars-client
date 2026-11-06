"use client";

import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

const DURATION = 2000; // 2 saniyə
const EVENT_NAME = "basket-toast";

// Kənardan çağırılan funksiya: yalnız mətn ötürülür
export const showToast = (message: string) => {
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: message }));
};

const BasketToastComponent = () => {
  const [message, setMessage] = useState<string | null>(null);

  // Mətn gələndə göstər
  useEffect(() => {
    const handler = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
    };

    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, []);

  // Mətn dəyişəndə 2 saniyəlik taymer başlat, bitəndə gizlət
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => setMessage(null), DURATION);
    return () => clearTimeout(timer);
  }, [message]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-25 right-5 z-9999 flex items-center gap-3 rounded-xl border border-green-200 bg-white px-5 py-4 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
        <FiCheck size={20} className="text-green-600" />
      </div>

      <p className="text-sm font-semibold text-gray-900">{message}</p>
    </div>
  );
};

export default BasketToastComponent;