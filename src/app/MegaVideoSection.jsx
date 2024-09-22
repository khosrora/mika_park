"use client";
import React from "react";
import TitleSection from "./components/common/TitleSection";
import Video from "./components/common/Video";

// src={details.media.url}
// poster="/images/placeHolderVideo.png"
function MegaVideoSection({ details }) {
  return (
    <header class="relative flex items-center justify-center h-64 lg:h-screen mb-4 overflow-hidden rounded-md">
      {/* <div class="relative z-30  text-2xl text-white bg-zinc-950 w-full h-full bg-opacity-30 rounded-xl">
      </div> */}
      <video
        // controls
        autoPlay
        loop
        muted
        poster="/images/placeHolderVideo.png"
        className="absolute z-10 w-full h-full max-w-none rounded-xl"
        style={{ borderRadius : "15px" }}
      >
        <source src={details.media.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default MegaVideoSection;
