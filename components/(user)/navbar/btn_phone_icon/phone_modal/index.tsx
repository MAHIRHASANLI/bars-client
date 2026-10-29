"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const PhoneModalComponent = ({
  setIsOpenModal,
}: {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenModal]);

  return (
    <div
      ref={modalRef}
      className="absolute top-8 right-0 z-9999 border border-[#d0d0d0] bg-white p-3 px-5 shadow-[0_3px_12px_rgba(0,0,0,0.09)]"
    >
      <ul>
        <li>
          <span className="block pt-1 text-xs font-normal tracking-normal text-(--secondary-color)">
            Online Mağaza
          </span>
          <Link
            className="block whitespace-nowrap py-2 text-sm leading-4 font-medium tracking-[0.4px] text-(--fp-contacts-menu-link-color) transition-colors duration-300 hover:text-(--logo-color)"
            href="tel:+994125700094"
          >
            5700094
          </Link>
        </li>

        <li>
          <span className="block pt-1 text-xs font-normal tracking-normal text-(--secondary-color)">
            WhatsApp
          </span>
          <Link
            className="block whitespace-nowrap py-2 text-sm leading-4 font-medium tracking-[0.4px] text-(--fp-contacts-menu-link-color) transition-colors duration-300 hover:text-(--logo-color)"
            href="https://wa.me/+994997971050"
            target="_blank"
            rel="noopener noreferrer"
          >
            +994997971050
          </Link>
        </li>

        <li>
          <span className="block pt-1 text-xs font-normal tracking-normal text-(--secondary-color)">
            Texniki servis
          </span>
          <Link
            className="block whitespace-nowrap py-2 text-sm leading-4 font-medium tracking-[0.4px] text-(--fp-contacts-menu-link-color) transition-colors duration-300 hover:text-(--logo-color)"
            href="tel:+994502801050"
          >
            +994502801050
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PhoneModalComponent;
