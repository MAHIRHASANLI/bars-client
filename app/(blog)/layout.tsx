import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavbarSection from "@/sections/(blog)/navbar";

export const metadata: Metadata = {
  title: {
    default: "Bloq",
    template: "%s | BARS Bloq",
  },
  description: "BARS bloq: biznes analitikası, hesabatlar və yeniliklər.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "BARS Bloq",
    description: "Biznes analitikası, hesabatlar və yeniliklər.",
    url: "/blog",
  },
};

type Props = {
  children: ReactNode;
};

export default function BlogLayout({ children }: Props) {
  return (
    <>
      <NavbarSection />
       <main className="blog-container"> {children}</main>
    </>
  );
}