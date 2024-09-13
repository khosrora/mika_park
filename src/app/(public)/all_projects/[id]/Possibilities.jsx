import TitleSection from "@/app/components/common/TitleSection";
import Video from "@/app/components/common/Video";
// import { possibilities } from "@/constance/possibillities";
import React from "react";

function Possibilities({ videos }) {
  return (
    <div className="space-y-4">
      <TitleSection title="فیلم های معرفی" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {videos.map((item) => (
          <div key={item.id}>
            <Video
              poster="/images/placeHolderVideo.png"
              src={item.url}
              width={500}
              height={500}
              className="lg:w-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Possibilities;
