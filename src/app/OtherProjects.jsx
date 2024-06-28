"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "./components/common/TitleSection";

// Import Swiper styles
import "swiper/css";
import ProjectCard from "./components/common/ProjectCard";
import SwipperController from "./components/common/SwipperController";

import useSWR from "swr";
import { fetcher } from "@/utils/get_data";
import SkDives from "./components/loading/SkDives";

function OtherProjects() {
  const swiperRef = useRef();

  const { data, isLoading, error } = useSWR(
    [`project/projects/?type=P`],
    fetcher
  );

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

  if (data.results === 0) return null;
  return (
    <div className="space-y-4">
      <div className="p-4 flex justify-between items-center">
        <TitleSection subTitle="در حال اجرا" title="پروژه های " />

        <SwipperController
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
        />
      </div>

      <Swiper
        spaceBetween={1}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <ProjectCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OtherProjects;
