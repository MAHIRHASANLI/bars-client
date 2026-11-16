"use client";

import { getCategoryByHref } from "@/utils/get_category_by_href";
import { FiHome, FiChevronRight } from "react-icons/fi";
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
      className="fluid relative z-10 mb-4 border-y border-(--line-color) p-1.5"
    >
      <div className="main-container">
        <ol className="flex items-center">
          <li className="flex items-center text-sm font-semibold text-(--logo-color) hover:text-(--logo-color-hover)">
            <FiHome className="mr-1 size-3" />
            <Link href="/">Ana səhifə</Link>
            <FiChevronRight className="mx-1 size-4 text-(--logo-color)" />
          </li>

          {breadcrumbItems.map(({ title, slug = "" }, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={slug} className="flex items-center">
                {isLast ? (
                  <span className="mx-1 text-sm text-(--secondary-color)">
                    {title}
                  </span>
                ) : (
                  <Link
                    href={slug}
                    className="mx-1 text-sm font-semibold text-(--logo-color) hover:text-(--logo-color-hover)"
                  >
                    {title}
                  </Link>
                )}

                {!isLast && (
                  <FiChevronRight className="mx-1 size-4 text-(--logo-color)" />
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