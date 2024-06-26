import { getData } from "@/utils/get_data";
import React from "react";
import LatestNews from "../../../components/common/LatestNews";

async function page({ params: { id } }) {
  const blog = await getData(`blog/${id}/`);
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <p className="font-extrabold text-4xl">{blog.title}</p>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5">
          <div className="">
            <img
              src={blog.image.image}
              alt={blog.title}
              width={500}
              height={500}
              className="rounded-lg w-full lg:h-96 object-cover"
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
            <span>{blog.short_desc}</span>
          </div>
          <div
            className="leading-8"
            dangerouslySetInnerHTML={{ __html: blog.desc }}
          ></div>
        </div>

        <div className="hidden lg:col-span-2 lg:flex lg:relative">
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default page;
