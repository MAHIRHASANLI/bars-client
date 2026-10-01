import Link from 'next/link'
import React from 'react'

const LinksComponent = () => {
  return (
     <ul className="flex justify-between h-11">
      <li>
        <Link href="/yapishdirici" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Yapışdırıcı
        </Link>
      </li>
      <li>
        <Link href="/qaz-detektoru" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Qaz Detectoru
        </Link>
      </li>
      <li>
        <Link href="/saygclar" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Sayğaclar
        </Link>
      </li>
      <li>
        <Link href="/qaz-tenzimleyici" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Qaz Tənzimləyici
        </Link>
      </li>
      <li>
        <Link href="/qaz-filteri" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Qaz Filteri
        </Link>
      </li>
      <li>
        <Link href="/siyirtmeler" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Siyirtmələr
        </Link>
      </li>
      <li>
        <Link href="/istilik-mehsullari" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          İstilik Məhsulları
        </Link>
      </li>
      <li>
        <Link href="/qaz-aksesuarlar" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Qaz Aksessuarlar
        </Link>
      </li>
      <span>|</span>
      <li>
        <Link href="/ustalar-ucun" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Ustalar üçün
        </Link>
      </li>
      <li>
        <Link href="/brendler" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Brendlər
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Haqqında
              </Link>
      </li>
      <li>
        <Link href="/contact" className="text-[14px] relative after:content-[''] after:block after:opacity-0 after:w-full after:h-px after:bg-black hover:after:opacity-100 after:transition-all">
          Əlaqə
        </Link>
      </li>
    </ul>
  )
}

export default LinksComponent