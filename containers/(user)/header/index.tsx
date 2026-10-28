"use client";

import { useEffect, useRef, useState } from "react";
import DesktopNavbar from "@/sections/(user)/header/desktop_nav";
import MobileNavbar from "@/sections/(user)/header/mobile_nav";


const SCROLL_DELTA = 10;
// Səhifənin yuxarısında bu məsafəyə qədər navbar həmişə görünür
const ALWAYS_SHOW_BELOW = 80;

const HeaderContainer = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const update = () => {
      const currentY = Math.max(window.scrollY, 0); 
      const diff = currentY - lastScrollY.current;

      if (currentY <= ALWAYS_SHOW_BELOW) {
        setHidden(false);
        lastScrollY.current = currentY;
      } else if (Math.abs(diff) >= SCROLL_DELTA) {
        // diff > 0 : səhifə aşağı gedir  -> navbar gizlənir
        // diff < 0 : səhifə yuxarı gedir  -> navbar qayıdır
        setHidden(diff > 0);
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fluid sticky top-0 z-9999 w-full bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="main-container">
        <div className="max-[1000px]:hidden">
          <DesktopNavbar />
        </div>
        <div className="min-[1000px]:hidden">
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
