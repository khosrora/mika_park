import Image from "next/image";
import React from "react";

function ImageCu({ width, height, src, alt, className }) {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={`${className}`}
    />
  );
}

export default ImageCu;
