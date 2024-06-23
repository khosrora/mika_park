import TitleSection from "@/app/components/common/TitleSection";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

let data = [
  {
    id: 1,
    title: "سیستم گرمایشی",
  },
  {
    id: 2,
    title: "درب ورودی ضدسرقت",
  },
  {
    id: 3,
    title: "عایق صوتی دیوارهای مشترک",
  },
  {
    id: 4,
    title: "سیستم تهویه مطبوع خودکار",
  },
  {
    id: 5,
    title: "دستگاه تصفیه آب مرکزی",
  },
  {
    id: 6,
    title: "درب ورودی ضدسرقت",
  },
  {
    id: 7,
    title: "عایق صوتی دیوارهای مشترک",
  },
  {
    id: 8,
    title: "سیستم تهویه مطبوع خودکار",
  },
  {
    id: 9,
    title: "طراحی سنگ، نورپردازی و سقف کاذب در پارکینگ",
  },
  {
    id: 10,
    title: "دستگاه تصفیه آب مرکزی",
  },
];

function FeaturesItem() {
  return (
    <div className="space-y-4">
      <TitleSection title="ویژگی ها" />

      <div className="flex flex-col space-y-4">
        {data.map((item) => (
          <div key={item.id} className="flex justify-start items-center gap-x-4">
            <IconCheck />
            <small>{item.title}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesItem;
