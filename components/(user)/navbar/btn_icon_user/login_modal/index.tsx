"use client";

import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const LoginModalComponent = ({
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
  const handleCloseModal = () => setIsOpenModal(false);
  return (
    // Arxa fon (overlay): bütün ekranı örtür və qaraldır
    <div  ref={modalRef} className="absolute top-1/2 left-1/2 z-9999 -translate-x-1/2 translate-y-1/2 w-[40%] max-[1000px]:w-[92%] bg-white p-[60px_56px_66px] max-[1000px]:p-[30px_46px_46px] border-(--logo-color) border border-solid rounded-4xl max-[1000px]:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.25)]">
      <div>
        <h2 className="pb-4 text-center text-xl leading-6 font-semibold">
          Daxil ol və ya qeydiyyatdan keç
        </h2>

        <div>
          <div>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="E-poçt ünvanınızı və ya telefon nömrənizi daxil edin*"
              className="mt-4 box-border w-full min-w-0 rounded-sm border border-(--line-color) p-3 text-sm outline-none focus:ring-1 focus:ring-(--logo-color) max-[1000px]:p-2 max-[1000px]:text-xs"
            />
            <p className="text-start mt-2 text-xs font-normal text-gray-600">
              Bütün tələb olunan sahələri doldurun
            </p>
          </div>
          <button
            type="button"
            className="mt-10 px-8 py-4 w-full rounded-4xl text-sm font-semibold leading-4 cursor-pointer duration-300 text-white bg-(--logo-color) border border-(--logo-color) hover:text-(--logo-color-hover ) hover:bg-(--logo-color-hover) hover:border-(--logo-color-hover)  max-[800px]:px-5 max-[800px]:py-3 max-[800px]:text-xs max-[400px]:px-6 "
          >
            Davam et
          </button>
        </div>
      </div>
      <button onClick={handleCloseModal}>
        <IoMdClose className="absolute right-5 top-5 cursor-pointer rounded-full bg-black/6 p-2 text-4xl font-normal transition-all duration-300 hover:bg-(--logo-color) hover:text-white" />{" "}
      </button>
    </div>
  );
};

export default LoginModalComponent;
