import AllProductsSection from "@/sections/(user)/home/all_products_section";
import HomeSections from "@/sections/(user)/home/main_section";
import NewProductsSection from "@/sections/(user)/home/new_products_section";
import React from "react";

const HomeContainer = () => {
  return (
    <main>
      <HomeSections />
      <AllProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" /> <NewProductsSection />
      {/* Ekranı tam tutan xətt */}
      <div className="full-bleed-line" />{" "}
    </main>
  );
};

export default HomeContainer;
