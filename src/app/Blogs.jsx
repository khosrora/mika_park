"use client";
import React from "react";
import TitleSection from "./components/common/TitleSection";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BlogCart from "./components/common/BlogCart";

function Blogs() {
  return (
    <div className="space-y-4">
      <div className="p-4">
        <TitleSection title="مقالات" />
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1.3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <BlogCart />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blogs;
