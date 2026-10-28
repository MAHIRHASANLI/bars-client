
"use client";

import { getCategoryByHref } from "@/utils/get_category_by_href";
import { House, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbSection = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbItems = paths
    .map((_, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");

      return getCategoryByHref(href);
    })
    .filter((link) => link !== undefined);

  return (
    <nav
      aria-label="Breadcrumb"
      className="fluid border-y border-(--line-color) p-2 mb-4"
    >
      <div className="main-container">
        <ol className="flex items-center">
          <li className="flex items-center text-sm font-semibold text-(--logo-color) hover:text-(--logo-color-hover)">
            <House className="size-3 mr-1" />
            <Link href="/">Ana səhifə</Link>
            <ChevronRight className="size-4 mx-1 text-(--logo-color)" />
          </li>

          {breadcrumbItems.map(({ title, href="" }, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={href} className="flex items-center">
                {isLast ? (
                  <span className="mx-1 text-sm text-(--secondary-color)">
                    {title}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="mx-1 text-sm font-semibold text-(--logo-color) hover:text-(--logo-color-hover)"
                  >
                    {title}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="size-4 mx-1 text-(--logo-color)" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbSection;
