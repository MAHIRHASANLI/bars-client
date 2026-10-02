import type { Metadata } from "next";
// import "@/styles/reset.css";
import "@/styles/globals.css";
import HeaderContainer from "@/containers/(user)/header";
import BreadcrumbContainer from "@/containers/(user)/breadcrumb";


export const metadata: Metadata = {
  title: "BARS",
  description: "BARS - Business Analytics Reporting System",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="az"
    >
      <body className="main-container">
        <HeaderContainer />
        <BreadcrumbContainer/>
        {children}
      </body>
    </html>
  );
}
