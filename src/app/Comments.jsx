"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleSection from "./components/common/TitleSection";
import Comment from "./components/common/Comment";
import SwipperController from "./components/common/SwipperController";

const reviews = [
  {
    name: 'علی رضایی',
    date: '۱۵ دی ۱۴۰۲',
    comment: 'پروژه بسیار خوبی بود. من از کیفیت ساخت و طراحی بسیار راضی بودم. این هتل واقعاً به من آرامش داد و تجربه‌ای بی‌نظیر بود.',
  },
  {
    name: 'سارا احمدی',
    date: '۱ اسفند ۱۴۰۲',
    comment: 'هتلینگ به بهترین شکل ممکن انجام شده. تجربه‌ای فوق‌العاده داشتم و همه چیز بی‌نقص بود. قطعاً باز هم به این هتل می‌آیم.',
  },
  {
    name: 'محمد حسینی',
    date: '۱۵ فروردین ۱۴۰۳',
    comment: 'تمام جزئیات به دقت رعایت شده و محیطی آرام و زیبا فراهم کرده‌اند. از اقامتم لذت بردم و از خدمات عالی این هتل متشکرم.',
  },
  {
    name: 'فاطمه کریمی',
    date: '۲۵ اردیبهشت ۱۴۰۳',
    comment: 'این پروژه یکی از بهترین پروژه‌هایی است که تا به حال دیده‌ام. خدمات عالی بود و کارکنان بسیار مهربان بودند. پیشنهاد می‌کنم به همه.',
  },
  {
    name: 'رضا عظیمی',
    date: '۱۰ خرداد ۱۴۰۳',
    comment: 'فضای بسیار خوبی دارد و از هر نظر قابل تحسین است. بی‌نهایت از این اقامت راضی بودم و مطمئناً دوباره به این هتل خواهم آمد.',
  },
];


function Comments() {
  const swiperRef = useRef();
  return (
    <div className="p-4 space-y-4 lg:flex lg:justify-between lg:items-center lg:gap-x-4 min-w-0">
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
        {reviews.map((i) => (
          <SwiperSlide key={i}>
            <Comment comment={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comments;
