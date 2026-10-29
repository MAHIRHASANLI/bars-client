"use client";
import { User } from "lucide-react";
import LoginModalComponent from "../login_modal";
import { useState } from "react";

const BtnIconUserComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const  handleOpenModal =()=>setIsOpenModal(true)
  return (
    <div>
      <button onClick={handleOpenModal}>
        <User className="size-4 cursor-pointer max-[1000px]:size-5" />{" "}
      </button>
      {isOpenModal&&<LoginModalComponent setIsOpenModal={setIsOpenModal}/>}
    </div>
  );
};

export default BtnIconUserComponent;
