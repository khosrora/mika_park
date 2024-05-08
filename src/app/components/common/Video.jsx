import React from "react";

function Video({ poster, src, width, height }) {
  return (
    <video
      autoplay={false}
      playsinline={true}
      controls={true}
      poster={poster}
      width={width}
      height={height}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
