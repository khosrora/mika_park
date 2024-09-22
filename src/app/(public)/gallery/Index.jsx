"use client";
import React, { useState } from "react";
import IndexGallery from "./IndexGallery";
import IndexVideos from "./IndexVideos";

function Index() {
  const [images, setImages] = useState(true);

  return (
    <div className="p-4">
      <div role="tablist" className="tabs tabs-boxed bg-zinc-200 my-4">
        <p
          role="tab"
          onClick={() => setImages(true)}
          className={`tab ${!!images ? "tab-active" : ""}`}
        >
          عکس ها
        </p>
        <p
          role="tab"
          onClick={() => setImages(false)}
          className={`tab ${!!images ? "" : "tab-active"}`}
        >
          فیلم ها
        </p>
      </div>
      {images ? <IndexGallery /> : <IndexVideos />}
    </div>
  );
}

export default Index;
