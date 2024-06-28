"use client";
import React, { useRef, useState } from "react";
import TitleSection from "./components/common/TitleSection";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BlogCart from "./components/common/BlogCart";
import SwipperController from "./components/common/SwipperController";

import useSWR from "swr";
import { fetcher } from "@/utils/get_data";
import SkDives from "./components/loading/SkDives";

function Blogs() {
  const swiperRef = useRef();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSWR(
    [`blog/blogs?page=${page}`],
    fetcher
  );

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;
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
        {data.results.map((i) => (
          <SwiperSlide key={i}>
            <BlogCart blog={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blogs;
