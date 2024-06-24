"use client";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher, getData } from "@/utils/get_data";
import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import useSWR from "swr";

let data = [
  {
    id: 1,
    url: "https://sabatnovin.com/wp-content/uploads/2022/01/%D9%BE%D8%B1%D9%88%DA%98%D9%87-198-%D9%88%D8%A7%D8%AD%D8%AF%DB%8C-%D9%85%D9%87%D8%B1-15-007.jpg",
    title: "پروژه هتلینگ مشهد",
  },
  {
    id: 2,
    url: "https://sabatnovin.com/wp-content/uploads/2022/01/%D9%BE%D8%B1%D9%88%DA%98%D9%87-198-%D9%88%D8%A7%D8%AD%D8%AF%DB%8C-%D9%85%D9%87%D8%B1-15-005.jpg",
    title: "پروژه هتلینگ تهران",
  },
  {
    id: 3,
    url: "https://sabatnovin.com/wp-content/uploads/2022/01/%D9%BE%D8%B1%D9%88%DA%98%D9%87-198-%D9%88%D8%A7%D8%AD%D8%AF%DB%8C-%D9%85%D9%87%D8%B1-15-006.jpg",
    title: "پروژه هتلینگ زاهدان",
  },
  {
    id: 4,
    url: "https://sabatnovin.com/wp-content/uploads/2022/01/%D9%BE%D8%B1%D9%88%DA%98%D9%87-198-%D9%88%D8%A7%D8%AD%D8%AF%DB%8C-%D9%85%D9%87%D8%B1-15-007.jpg",
    title: "پروژه هتلینگ تبریز",
  },
  {
    id: 5,
    url: "https://sabatnovin.com/wp-content/uploads/2022/01/%D9%BE%D8%B1%D9%88%DA%98%D9%87-198-%D9%88%D8%A7%D8%AD%D8%AF%DB%8C-%D9%85%D9%87%D8%B1-15-008.jpg",
    title: "پروژه هتلینگ ترکیه",
  },
];

function IndexGallery() {
  const { data, isLoading, error } = useSWR(["gallery/galleries/"], fetcher);

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

  const [lightboxImage, setLightboxImage] = useState();
  const [indexImage, setIndexImage] = useState();

  const addLightBox = (item, index) => {
    setIndexImage(index);
    setLightboxImage(item);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {data.map((i, index) => (
        <div
          key={i.id}
          className="rounded-md cursor-pointer overflow-hidden"
          onClick={() => addLightBox(i, index)}
        >
          <img
            src={i.url}
            alt={i.title}
            className="object-cover h-full w-full"
          />
        </div>
      ))}
      {!!lightboxImage && (
        <Lightbox
          images={data}
          startIndex={indexImage}
          onClose={() => setLightboxImage()}
        />
      )}
    </div>
  );
}

export default IndexGallery;
