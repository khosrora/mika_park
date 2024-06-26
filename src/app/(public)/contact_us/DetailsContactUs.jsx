import TitleSection from "@/app/components/common/TitleSection";
import React from "react";

import InstagramSvg from "@/app/components/Icons/InstagramSvg";
import AparatSvg from "@/app/components/Icons/AparatSvg";
import WhatsUpSvg from "@/app/components/Icons/WhatsUpSvg";
import LocationBlue from "@/app/components/Icons/LocationBlue";
import PhoneBlue from "@/app/components/Icons/PhoneBlue";
import EmailBlue from "@/app/components/Icons/EmailBlue";

function DetailsContactUs({ addresses, phones, emails }) {
  return (
    <div className="space-y-4 lg:w-1/2">
      <TitleSection title="راه های ارتباطی" />
      <small className="leading-8">
        برای مشاوره میتوانید از راه های زیر با ما در ارتباط باشید وبرای ارسال
        تیکت مشاورین ما به صورت 24 ساعت پاسخگوی شما عزیزان می باشد
      </small>
      <div className="flex justify-start items-center">
        <InstagramSvg />
        <WhatsUpSvg />
      </div>
      <div className="">
        {addresses.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-x-4"
          >
            <LocationBlue />
            <small>{item.address}</small>
          </div>
        ))}
        <div className="divider"></div>
        <div className="grid grid-cols-2 gap-4">
          {phones.map((i) => (
            <div key={i.id} className="flex justify-start items-center gap-x-4">
              <PhoneBlue />
              <small>{i.phone}</small>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        {emails.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-x-4"
          >
            <EmailBlue />
            <small>{item.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsContactUs;
