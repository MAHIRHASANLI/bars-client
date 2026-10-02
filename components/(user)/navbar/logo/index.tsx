import Image from 'next/image';
import Link from 'next/link';

import logo from '@/images/logo-black2.png';
import logoNumberOne from '@/images/numberone-logo.png';


const LogoComponent = ( ) => {
  return (
  <div className="flex items-center justify-center gap-2">
    <Link href="/" className="cursor-pointer relative w-27 h-9 border-amber-600"><Image alt="Logo" src={logo} fill/></Link>
    <div className="relative h-7 w-10 border border-black rounded-sm overflow-hidden">
      <Image alt="Logo" src={logoNumberOne} fill className="p-0.75" />
    </div>
  </div>
  )
}

export default LogoComponent