import React from "react";
import TitleSection from "./components/common/TitleSection";
import Video from "./components/common/Video";

function BigProjectSection({ details }) {
  return (
    <div className="p-4 space-y-4 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
      <div className="lg:w-1/2 space-y-4">
        <TitleSection subTitle={details.middle_heading} />
        <div className="space-y-4">
          <div
            className="leading-8"
            dangerouslySetInnerHTML={{ __html: details.middle_paragraph }}
          ></div>
        </div>
      </div>

      <Video
        poster="/images/placeHolderVideo.png"
        src={details.media.url}
        width={450}
        height={400}
        className="lg:w-1/2"
      />
    </div>
  );
}

export default BigProjectSection;
