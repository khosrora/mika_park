import TitleSection from "@/app/components/common/TitleSection";
import { possibilities } from "@/constance/possibillities";
import React from "react";

function Possibilities() {
  return (
    <div className="space-y-4">
      <TitleSection title="امکانات هتلینگ" />

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

export default Possibilities;
