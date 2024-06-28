"use client";
import TitleSection from "@/app/components/common/TitleSection";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

function FeaturesItem({ props }) {
  return (
    <div className="space-y-4">
      <TitleSection title="ویژگی ها" />

      <div className="flex flex-col space-y-4">
        {props.map((item) => (
          <div
            key={item.id}
            className="flex justify-start items-center gap-x-4"
          >
            <IconCheck />
            <small>{item.value}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesItem;
