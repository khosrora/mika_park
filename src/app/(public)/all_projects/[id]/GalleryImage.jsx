"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

let data = [
  {
    id: 1,
    link: "https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae_3x4.jpg",
    title: "پروژه هتلینگ مشهد",
  },
  {
    id: 2,
    link: "https://s.yimg.com/ny/api/res/1.2/ibSgYd1WPKBe1Blk0xSqOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMA--/https://media.zenfs.com/en-US/homerun/architectural_digest_422/697d7a3e53ba85440cff7e50b9793f22",
    title: "پروژه هتلینگ تهران",
  },
  {
    id: 3,
    link: "https://www.constructionweekonline.in/cloud/2021/11/24/QZzU156y-Sobha-4.jpg",
    title: "پروژه هتلینگ زاهدان",
  },
  {
    id: 4,
    link: "https://www.esbnyc.com/sites/default/files/styles/small_feature/public/2020-01/BuildingModel_6.jpg?itok=0EbQD2AJ",
    title: "پروژه هتلینگ تبریز",
  },
  {
    id: 5,
    link: "https://cdn.thecollector.com/wp-content/uploads/2023/02/merdeka-118-tallest-building.jpg?width=1400&quality=55",
    title: "پروژه هتلینگ ترکیه",
  },
];

function GalleryImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="min-w-0 max-w-lg lg:max-h-[600px]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryImage;
