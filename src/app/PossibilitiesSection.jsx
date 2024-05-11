import { possibilities } from "@/constance/possibillities";
import React from "react";
import TitleSection from "./components/common/TitleSection";

function PossibilitiesSection() {
  return (
    <div className="p-4 space-y-4">
      <TitleSection title="امکانات هتلینگ" subTitle="میکا پارک" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {possibilities.map((item) => (
          <div key={item.id}>
            <img src={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PossibilitiesSection;
