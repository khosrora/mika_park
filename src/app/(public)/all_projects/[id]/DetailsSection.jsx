import TitleSection from "@/app/components/common/TitleSection";
import { IconAlertCircle } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

let data = [
  {
    id: 1,
    key: "آدرس:",
    value: "مشهد بلوار معلم نبش معلم 13",
  },
  {
    id: 2,
    key: "متراژ:",
    value: "متراژ از 80 تا 160 متر",
  },
  {
    id: 3,
    key: "کاربری:",
    value: "مسکونی و تجاری",
  },
  {
    id: 4,
    key: "نما:",
    value: "مدرن",
  },
  {
    id: 5,
    key: "گذر:",
    value: "20 متری",
  },
];

function DetailsSection() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <TitleSection title="پروژه هتلینگ مشهد" />
        <Link
          href="http://45.156.186.124:8002/"
          target="_blank"
          className="underline text-cu_primary-100"
        >
          دیدن نمای 360 پروژه
        </Link>
      </div>
      <small className="leading-8">
        پرو در زمینی به مساحت ۷۵۰۰ متر مربع با زیربنای حدود ۳۷۰۰۰ مترمربع به
        صورت ۲ بلوک، در ۱۱ طبقه شامل ۸ طبقه مسکونی، ۱ طبقه همکف و ۲ طبقه زیرزمین
        طراحى گردیده است. این پروژه در بلوار معلم واقع در منطقه هجده در جنوب
        غربی شهر مشهد قرار دارد. در این پروژه بیش از ۳۰ نفر در دفاتر اداری و ۱۵۰
        نفر نیرو اجرایی در کارگاه مشغول به کار هستند. پروژه تالی پارک معلم در
        تلاش است تا با دو شیفت کاری، سرعت اجرا را بالا برده و به یکی از اهداف
        خود یعنی تحویل به موقع پروژه‌ها‎ برسد.
      </small>
      <div className="flex flex-col gap-y-4">
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center lg:max-w-md">
              <div className="flex justify-start items-center gap-x-2">
                <IconAlertCircle className="text-cu_primary-100" />
                <p>{item.key}</p>
              </div>
              <small>{item.value}</small>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsSection;
