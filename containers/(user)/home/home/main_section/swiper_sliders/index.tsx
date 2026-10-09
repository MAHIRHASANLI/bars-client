
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperItem from "../swiper_slider_item";

const SwiperSliders = () => {
  const swiperDatas = new Array(5).fill(null);

  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {swiperDatas.map((_, i) => (
        <SwiperSlide key={i}>
          <SwiperItem />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSliders;
