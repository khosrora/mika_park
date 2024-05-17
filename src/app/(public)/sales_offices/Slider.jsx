"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "./styles.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import SalesCart from "@/app/components/common/SalesCart";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <SalesCart />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
