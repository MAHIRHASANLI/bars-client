import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo-black2.png";
import logoNumberOne from "@/images/numberone-logo.png";

const LogoComponent = () => {
  return (
    <div className="flex items-center gap-2.5">
      {/* Ana Logo (BARS / ENERJİ-N) */}
      <Link
        href="/"
        className="relative h-9 w-32 cursor-pointer transition-opacity hover:opacity-90"
      >
        <Image
          priority
          alt="ENERJİ-N MMC BARS tərəfindən təqdim olunan qaz avadanlıqları, qaz sayğacları, tənzimləyicilər və texniki servis xidmətləri"
          src={logo}
          fill
          sizes="128px"
          className="object-contain object-left"
        />
      </Link>

      <div className="relative h-8 w-14 shrink-0 overflow-hidden rounded border border-gray-300 bg-white shadow-xs">
        <Image
          alt="Enerji-N Nömrə Bir Qaz Avadanlıqları"
          src={logoNumberOne}
          fill
          sizes="56px"
          className="object-contain p-0.5"
        />
      </div>
    </div>
  );
};

export default LogoComponent;
