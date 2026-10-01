import type { Metadata } from "next";
// import "@/styles/reset.css";
import "@/styles/globals.css";
import HeaderContainer from "@/containers/(user)/header";


export const metadata: Metadata = {
  title: "BARS",
  description: "BARS - Business Analytics Reporting System",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="az"
    >
      <body className="container">
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
