"use client";
import { links } from "@/api/linklerin_muveqqeti_yerlesmesi";
import { LinkType } from "@/types/links";
import { House, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbSection = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    //!sehife render olunmadiqda naviqation paneli gosterilmir
    return null; // Don't render the breadcrumb on the home page.
  }
  //! Yeni sehifeye daxil olunduqda breadcrumbName-i tapmaq ucun linklerin_muveqqeti_yerlesmesi.ts-dan istifade olunur
  // ! ve pathname ile uygun olan linkin label-i tapilir.
  const breadcrumbName =links.find((link:LinkType) => link.href === pathname)?.label;
   
  return (
    <nav
      aria-label="Breadcrumb"
      className="fluid border-y border-(--secondary-color)  p-2 mb-4"
    >
      <div className="main-container">
        <ol className="flex items-center">
          <li className="flex items-center text-sm font-bold text-(--logo-color) hover:text-(--logo-color-hover)">
            <House className="size-3 mr-1" />
            <Link href="/">Ana səhifə</Link>
            <ChevronRight className="size-4 mx-1 text-(--logo-color)" />
          </li>
          <li className="flex items-center">
            <span className="mx-1 text-sm text-(--secondary-color)">{breadcrumbName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbSection;
