import { FiMenu, FiX } from "react-icons/fi";

type MobileMenuButtonProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MobileMenuButton = ({
  isOpen,
  setIsOpen,
}: MobileMenuButtonProps) => {
  return (
    <div
      className="min-[1000px]:hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <FiX className="size-8" />
      ) : (
        <FiMenu className="size-8" />
      )}
    </div>
  );
};

export default MobileMenuButton;