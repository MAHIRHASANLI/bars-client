"use client";
import LoginModalComponent from "../login_modal";
import { useCallback, useState } from "react";
import { CiUser } from "react-icons/ci";

const BtnIconUserComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const  handleOpenModal =()=>setIsOpenModal(true)
  // useCallback: modalın useEffect-i hər render-də yenidən qurulmasın
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);
  return (
    <div className="max-[1000px]:hidden">
      <button onClick={handleOpenModal}>
        <CiUser className="size-5 cursor-pointer max-[1000px]:size-5" />{" "}
      </button>
      {isOpenModal&&<LoginModalComponent handleCloseModal={handleCloseModal}/>}
    </div>
  );
};

export default BtnIconUserComponent;
