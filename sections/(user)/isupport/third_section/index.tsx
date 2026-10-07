import ContentComponent from "@/components/(user)/isupport/third_section/content_component";
import ImageComponent from "@/components/(user)/isupport/third_section/img_component";
import React from "react";

const ThirdSection = () => {
  return (
    <section className="section">
      <div className="min-[1000px]:flex">
        <ImageComponent />
        <ContentComponent />
      </div>
    </section>
  );
};

export default ThirdSection;
