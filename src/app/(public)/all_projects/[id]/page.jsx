import { getData } from "@/utils/get_data";
import React from "react";
import Blocks from "./Blocks";
import DetailsSection from "./DetailsSection";
import Features from "./Features";
import GalleryImage from "./GalleryImage";

export default async function page({ params: { id } }) {
  const res = await getData(`project/projects/${id}/`);

  
  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-col space-y-4 lg:flex-row lg:gap-x-12">
        <div className="w-full lg:w-1/2">
          <GalleryImage gallery={res.gallery} />
        </div>
        <DetailsSection details={res} />
      </div>
      <Features features={res} />
      <Blocks items={res.blocks} />
    </div>
  );
}
