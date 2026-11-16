"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { slug: "", title: "Bloqlar", description: "Bütün məqalələr və xəbərlər bir yerdə" },
  { slug: "articles", title: "Məqalələr", description: "" },
  { slug: "news", title: "Xəbərlər",description: ""  },
];

const BreadcrumbComponent = () => {
  const pathname = usePathname(); // məs: /blog/category/news
  const slug = pathname.split("/")[3] ?? ""; // ["", "blog", "category", "news"]

  const page = PAGES.find((p) => p.slug === slug);
  if (!page) return null;

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F0F2F5] py-14 sm:py-18">
      <div className="mx-auto w-[min(1440px,90%)]">
        {slug !== "" && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-3 text-base sm:text-lg">
              <li>
                <Link href="/blog" className="text-black hover:underline">
                  Ana səhifə
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">•</li>
              <li aria-current="page" className="text-gray-500">
                {page.title}
              </li>
            </ol>
          </nav>
        )}

        <h1 className="mt-4 text-4xl font-bold text-black sm:text-5xl">
          {page.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          {page.description}
        </p>
      </div>
    </section>
  );
};

export default BreadcrumbComponent;