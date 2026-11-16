import PhoneModalComponent from "../phone_modal";
import { useState } from "react";
import { LiaPhoneSolid } from "react-icons/lia";

const PhoneIconComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = ()=>setIsOpenModal(true)
  return (
    <div className="relative">
      <button onClick={handleOpenModal}>
        <LiaPhoneSolid   className="size-5 cursor-pointer" />
      </button>
      {isOpenModal && <PhoneModalComponent setIsOpenModal={setIsOpenModal}/>}
    </div>
  );
};

export default PhoneIconComponent;
