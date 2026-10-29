"use client";
import { User } from "lucide-react";
import LoginModalComponent from "../login_modal";
import { useCallback, useState } from "react";

const BtnIconUserComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const  handleOpenModal =()=>setIsOpenModal(true)
  // useCallback: modalın useEffect-i hər render-də yenidən qurulmasın
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);
  return (
    <div>
      <button onClick={handleOpenModal}>
        <User className="size-4 cursor-pointer max-[1000px]:size-5" />{" "}
      </button>
      {isOpenModal&&<LoginModalComponent handleCloseModal={handleCloseModal}/>}
    </div>
  );
};

export default BtnIconUserComponent;
