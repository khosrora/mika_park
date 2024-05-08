"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleSection from "./components/common/TitleSection";
import Comment from "./components/common/Comment";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function Comments() {
  const swiperRef = useRef();
  return (
    <div className="p-4 space-y-4">
      <TitleSection title="نظرات" subTitle="مشتریان" />
      <div className="flex justify-start items-center gap-x-4">
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white flex justify-center items-center cursor-pointer rounded-lg p-2"
        >
          <IconChevronRight size={32} />
        </div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-cu_primary-100 flex justify-center items-center cursor-pointer rounded-lg p-2"
        >
          <IconChevronLeft color="white" size={32} />
        </div>
      </div>
      <Swiper
        spaceBetween={50}
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
