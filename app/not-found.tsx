import PrimaryButton from "@/components/(user)/shared/buttons/primary_button";
import PageHeading from "@/components/(user)/shared/page_heading_component_h1";
import React from "react";

const NotFound = () => {
  return (
    <main>
      <section>
        <div className="flex flex-col items-center justify-center w-full pt-16 pb-35">
          <PageHeading title="404" />
          <p className="text-2xl mb-8 font-semibold tracking-[-0.28px] leading-7">
            Səhifə tapılmadı
          </p>
          <PrimaryButton href="/">Alış-verişə davam edin</PrimaryButton>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
