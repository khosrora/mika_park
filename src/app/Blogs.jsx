"use client";
import React, { useRef } from "react";
import TitleSection from "./components/common/TitleSection";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BlogCart from "./components/common/BlogCart";
import SwipperController from "./components/common/SwipperController";

function Blogs() {
  const swiperRef = useRef();

  return (
    <div className="space-y-4">
      <div className="p-4 flex justify-between items-center">
        <TitleSection title="مقالات" />
        <SwipperController
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
        />
      </div>

      <Swiper
        spaceBetween={10}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          // 1024: { slidesPerView: 5 },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>{/* <BlogCart /> */}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blogs;
