import React from 'react'
import Image from 'next/image';
import logo from '@/images/logo-black.png'
import Link from 'next/link';


const LogoComponent = ( ) => {
  return (
   <Link href="/" className="log cursor-pointer relative w-25 h-25 border-amber-600"><Image alt="Logo" src={logo} fill /></Link>
  )
}

export default LogoComponent