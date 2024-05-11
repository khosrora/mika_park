import React from "react";
import TitleSection from "./components/common/TitleSection";
import Video from "./components/common/Video";

function BigProjectSection() {
  return (
    <div className="p-4 space-y-4 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
      <div className="lg:w-1/2 space-y-4">
        <TitleSection title="پروژه بزرگ " subTitle="میکا پارک چیه" />
        <div className="space-y-4">
          <p className="lg:leading-8 lg:text-[16px]">
            پروژه هتلینگ سبکی متفاوت که برای اولین بار در جنوب شرق ایران در
            استان سیستان وبلوچستان به مساحت 10044 متر مربع با بیش از
            70000مترمربع زیربنا - دارای محوطه و فضای سبز به مساحت حدودی 2275
            مترمربع - 18 بلوک شرقی و غربی شامل483 واحد و هر بلوک دارای
          </p>
          <ol className="space-y-4">
            <li>
              <p>7طبقه مسکونی</p>
            </li>
            <li>
              <p>1طبقه مشاعات در همکف</p>
            </li>
            <li>
              <p>1طبقه پارکینگ زیرزمینی</p>
            </li>
          </ol>
        </div>
      </div>

      <Video
        poster="/images/placeHolderVideo.png"
        src="video/test.mp4"
        width={450}
        height={400}
        className="lg:w-1/2"
      />
    </div>
  );
}

export default BigProjectSection;
