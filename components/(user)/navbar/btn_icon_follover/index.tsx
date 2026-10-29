import { Heart } from "lucide-react";
import Link from "next/link";

const BtnIconFolloverComponent = () => {
  return (
    <div>
      <Link href="/follover">
      <Heart className="size-4 cursor-pointer max-[1000px]:size-5" />
    </Link>
    </div>
  );
};

export default BtnIconFolloverComponent;
