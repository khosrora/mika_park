import TitleSection from "@/app/components/common/TitleSection";
import React from "react";

import InstagramSvg from "@/app/components/Icons/InstagramSvg";
import AparatSvg from "@/app/components/Icons/AparatSvg";
import WhatsUpSvg from "@/app/components/Icons/WhatsUpSvg";
import LocationBlue from "@/app/components/Icons/LocationBlue";
import PhoneBlue from "@/app/components/Icons/PhoneBlue";
import EmailBlue from "@/app/components/Icons/EmailBlue";

function DetailsContactUs() {
  return (
    <div className="space-y-4 lg:w-1/2">
      <TitleSection title="راه های ارتباطی" />
      <small className="leading-8">
        برای مشاوره میتوانید از راه های زیر با ما در ارتباط باشید وبرای ارسال
        تیکت مشاورین ما به صورت 24 ساعت پاسخگوی شما عزیزان می باشد
      </small>
      <div className="flex justify-start items-center">
        <InstagramSvg />
        <AparatSvg />
        <WhatsUpSvg />
      </div>
      <div className="">
        <div className="flex justify-start items-center gap-x-4">
          <LocationBlue />
          <small>زاهدان زیباشهر نبش پیامبر اعظم 11</small>
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-start items-center gap-x-4">
              <PhoneBlue />
              <small>09158569854</small>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex justify-start items-center gap-x-4">
          <EmailBlue />
          <small>milapark@gmail.com</small>
        </div>
      </div>

    </div>
  );
}

export default DetailsContactUs;
