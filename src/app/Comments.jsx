"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleSection from "./components/common/TitleSection";
import Comment from "./components/common/Comment";
import SwipperController from "./components/common/SwipperController";

function Comments() {
  const swiperRef = useRef();
  return (
    <div className="p-4 space-y-4 lg:flex lg:justify-between lg:items-center lg:gap-x-4">
      <div className="space-y-4 lg:w-1/3">
        <TitleSection title="نظرات" subTitle="مشتریان" />
        <small className="hidden lg:flex">
          بخشی کوچکی از نظرات مشتریان عزیز میکا پارک
        </small>
        <SwipperController
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
        />
      </div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 20 },
        }}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <Comment />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comments;
