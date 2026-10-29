"use client";

import { useEffect } from "react";

export const useModalBehavior = (onClose: () => void) => {
 useEffect(() => {
  const body = document.body;
  const prevOverflow = body.style.overflow;
  const prevPaddingRight = body.style.paddingRight;

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  body.style.overflow = "hidden";

  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", onKeyDown);

  return () => {
    body.style.overflow = prevOverflow;
    body.style.paddingRight = prevPaddingRight;
    window.removeEventListener("keydown", onKeyDown);
  };
}, [onClose]);
};