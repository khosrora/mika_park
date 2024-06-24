"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "./styles.css";

// import required modules
import SalesCart from "@/app/components/common/SalesCart";
import { EffectCoverflow } from "swiper/modules";

export default function Slider({ branches }) {
  return (
    <div className="sales_offices">
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
        {branches.map((i) => (
          <SwiperSlide key={i.id}>
            <SalesCart item={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
