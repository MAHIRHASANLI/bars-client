import type { Metadata } from "next";
import "@/styles/globals.css";
import HeaderContainer from "@/containers/(user)/header";
import BreadcrumbContainer from "@/containers/(user)/breadcrumb";
import { Inter } from "next/font/google";
import FooterSection from "@/sections/(user)/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BARS",
  description: "BARS - Business Analytics Reporting System",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az">
      <body className={`${inter.className} main-container`}>
        <HeaderContainer />
        <BreadcrumbContainer />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
