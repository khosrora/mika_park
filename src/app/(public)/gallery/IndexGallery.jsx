"use client";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher, getData } from "@/utils/get_data";
import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import useSWR from "swr";


function IndexGallery() {
  const { data, isLoading, error } = useSWR(["gallery/galleries/"], fetcher);

  const [lightboxImage, setLightboxImage] = useState();
  const [indexImage, setIndexImage] = useState();

  const addLightBox = (item, index) => {
    setIndexImage(index);
    setLightboxImage(item);
  };

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

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
