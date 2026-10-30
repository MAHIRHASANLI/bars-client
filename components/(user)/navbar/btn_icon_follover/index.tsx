import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const BtnIconFolloverComponent = () => {
  return (
    <div className="max-[1000px]:hidden">
      <Link href="/follover">
      <CiHeart className="size-5 cursor-pointer max-[1000px]:size-5" />
    </Link>
    </div>
  );
};

export default BtnIconFolloverComponent;
