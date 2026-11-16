import SearchInputComponent from "@/components/(main)/navbar/search_input";
import Link from "next/link";
import LogoComponent from "@/components/(main)/navbar/logo";

const NAV_LINKS = [
  { href: "/blog", label: "Ana səhifə" },
  { href: "/blog/category/articles", label: "Məqalələr" },
  { href: "/blog/category/news", label: "Xəbərlər" },
  { href: "/contact", label: "Əlaqə" },
] as const;

const NavbarSection = () => {
  return (
    <header
      className="relative z-50 bg-white box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]"
    >
      <nav
        aria-label="Bloq naviqasiyası"
        className="mx-auto flex h-20 w-[min(1440px,90%)] items-center justify-between"
      >
        <LogoComponent />

        <ul className="flex items-center gap-1 sm:gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <SearchInputComponent />
      </nav>
    </header>
  );
};

export default NavbarSection;
