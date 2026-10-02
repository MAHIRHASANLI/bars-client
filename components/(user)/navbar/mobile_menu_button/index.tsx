import { Menu, X } from "lucide-react";

type MobileMenuButtonProps ={
    isOpen : boolean;
    setIsOpen : (value: boolean) => void;
}

const MobileMenuButton = ({ isOpen, setIsOpen } : MobileMenuButtonProps) => {
  return (
    <div
      className="min-[1000px]:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >       
      {isOpen ? (
        <X className="size-8" />
      ) : (
        <Menu className="size-8" />
      )}
    </div>
  );
};

export default MobileMenuButton;