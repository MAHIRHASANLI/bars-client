import ContentComponent from "@/components/(user)/isupport/third_section/content_component";
import ImageComponent from "@/components/(user)/isupport/third_section/img_component";
import React from "react";

const ThirdSection = () => {
  return (
    <section>
      <div className="flex">
        <ImageComponent />
        <ContentComponent />
      </div>
    </section>
  );
};

export default ThirdSection;
