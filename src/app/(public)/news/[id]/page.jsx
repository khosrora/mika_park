import { getData } from "@/utils/get_data";
import React from "react";

async function page({ params: { id } }) {
  const news = await getData(`new/${id}/`);
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <p className="font-extrabold text-4xl">طراحی معماری ساختمان</p>
      </div>
      <div className="">
        <img
          src={news.image.image}
          alt={news.title}
          width={500}
          height={500}
          className="rounded-lg w-full lg:h-72 object-cover"
        />
      </div>
      <div role="alert" className="alert my-4 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{news.short_desc}</span>
      </div>
      <div
        className="leading-8"
        dangerouslySetInnerHTML={{ __html: news.desc }}
      ></div>
    </div>
  );
}

export default page;
