import React from "react";
import Bloks from "./Bloks";
import DetailsSection from "./DetailsSection";
import Features from "./Features";
import GalleryImage from "./GalleryImage";

function page({ params }) {

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col space-y-4 lg:flex-row lg:gap-x-12">
        <GalleryImage />
        <DetailsSection />
      </div>
      <Features />
      <Bloks />
    </div>
  );
}

export default page;
