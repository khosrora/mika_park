"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

let banners = [
  {
    id: 1,
    link: "/images/Group 152271.png",
  },
  {
    id: 2,
    link: "/images/Group 152270.png",
  },
];

function MegaVideoSection() {
  return (
    <div className="space-y-4">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.2}
        // breakpoints={{
        //   320: { slidesPerView: 2 },
        //   480: { slidesPerView: 3 },
        //   768: { slidesPerView: 3 },
        //   1024: { slidesPerView: 4 },
        // }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {banners.map((i) => (
          <SwiperSlide key={i.id}>
            <Image src={i.link} width={3000} height={3000} className="w-full object-cover  rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MegaVideoSection;
