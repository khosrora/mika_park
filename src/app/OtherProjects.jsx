"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "./components/common/TitleSection";

// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import SwipperController from "./components/common/SwipperController";

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

function OtherProjects() {
  const swiperRef = useRef();
  return (
    <div className="space-y-4">
      <div className="p-4 flex justify-between items-center">
        <TitleSection title="سایر" subTitle="پروژه ها" />

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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href="/">
              <div
                style={{
                  "--image-url": `url(${item.link})`,
                }}
                className="bg-[image:var(--image-url)] h-60 bg-cover mx-2 rounded-lg relative overflow-hidden lg:h-96"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-end pb-2"
                  style={{ backgroundColor: "rgb(0, 0, 0, 0.3)" }}
                >
                  <p className="text-white text-xs font-bold">{item.title}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OtherProjects;
