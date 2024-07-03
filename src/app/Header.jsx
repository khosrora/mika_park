import React from "react";
import ImageCu from "./components/common/Logo";

function Header({ details }) {
  return (
    <div className="p-4 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center ">
      <div className="">
        <ImageCu
          width={500}
          height={500}
          alt="میکا پارک"
          src={details.heading_image.url}
        />
      </div>
      <div className="space-y-6 lg:w-1/2">
        <h1 className="font-extrabold text-[24px] lg:text-[36px]">
          <small className="text-cu_primary-100 font-extrabold text-[24px] lg:text-[36px]">
            {details.heading}
          </small>
        </h1>
        <div className="space-y-2">
          <p className="font-bold lg:text-[24px]">{details.heading2}</p>
          <p className="font-light lg:text-[16px]">{details.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
