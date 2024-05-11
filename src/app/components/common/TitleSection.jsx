import React from "react";

function TitleSection({ title, subTitle }) {
  return (
    <div className="flex justify-start items-center gap-x-2">
      <p className="font-bold lg:text-[28px]">{title}</p>
      <small className="text-cu_primary-100 font-bold lg:text-[28px]">{subTitle}</small>
    </div>
  );
}

export default TitleSection;
