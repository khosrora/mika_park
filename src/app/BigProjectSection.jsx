import React from "react";
import TitleSection from "./components/common/TitleSection";
import Video from "./components/common/Video";

function BigProjectSection() {
  return (
    <div className="p-4 space-y-4">
      <TitleSection title="پروژه بزرگ " subTitle="میکا پارک چیه" />
      <div className="space-y-4">
        <p>
          پروژه هتلینگ سبکی متفاوت که برای اولین بار در جنوب شرق ایران در استان
          سیستان وبلوچستان به مساحت 10044 متر مربع با بیش از 70000مترمربع زیربنا
          - دارای محوطه و فضای سبز به مساحت حدودی 2275 مترمربع - 18 بلوک شرقی و
          غربی شامل483 واحد و هر بلوک دارای
        </p>
        <ol>
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
      <Video
        poster="/images/placeHolderVideo.png"
        src="video/test.mp4"
        width={400}
        height={400}
      />
    </div>
  );
}

export default BigProjectSection;
