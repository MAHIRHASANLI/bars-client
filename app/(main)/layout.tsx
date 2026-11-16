import HeaderContainer from "@/containers/(main)/header";
import BreadcrumbContainer from "@/containers/(main)/breadcrumb";
import FooterSection from "@/sections/(main)/footer";
import BasketToastComponent from "@/components/shared/toast";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <HeaderContainer />
      <BreadcrumbContainer />

      <main className="main-container"> {children}</main>

      <BasketToastComponent />
      <FooterSection />
    </>
  );
}
