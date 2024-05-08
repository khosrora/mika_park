import { services } from "@/constance/Services";
import React from "react";
import TitleSection from "./components/common/TitleSection";

function ServicesMikaPark() {
  return (
    <div className="p-4 space-y-4">
      <TitleSection title="خدمات" subTitle="میکا پارک" />
      <div className="space-y-4 my-4">
        {services.map((item) => (
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex justify-start items-center gap-x-2">
              {item.svg}
              <small className="text-[16px] font-bold">{item.title}</small>
            </div>
            <div className="text-[14px]">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesMikaPark;
