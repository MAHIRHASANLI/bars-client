import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link
      href={href}
      type="button"
      className="px-8 py-4 rounded-4xl text-sm font-semibold leading-4 cursor-pointer duration-300 text-white bg-(--logo-color) border border-(--logo-color) hover:text-(--logo-color-hover ) hover:bg-(--logo-color-hover) hover:border-(--logo-color-hover)  max-[800px]:px-5
        max-[800px]:py-3
        max-[800px]:text-xs
        max-[400px]:px-6
        "
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
