"use client";

import { useEffect, useRef } from "react";

// Karusel daxilinə qoyulur, ata elementə mouse ilə sürüşdürmə əlavə edir.
const DragScroll = () => {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = marker.current?.parentElement;
    if (!el) return;

    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        el.dataset.dragging = "true"; // snap və smooth müvəqqəti söndürülür
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      if (!down) return;
      down = false;
      delete el.dataset.dragging; // snap yenidən işə düşür, ən yaxın karta oturur
    };

    // Sürüşdürmədən sonra təsadüfən linkə keçid olmasın
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    // Şəkil/link brauzer drag-ı olmasın
    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("click", onClick, true);
    el.addEventListener("dragstart", onDragStart);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return <span ref={marker} hidden />;
};

export default DragScroll;