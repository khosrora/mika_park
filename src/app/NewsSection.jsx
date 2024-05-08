import React from "react";

function NewsSection() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4">
        <div className="bg-blue-950 p-4 text-white text-center rounded-md flex flex-col justify-center items-center space-y-4">
          <p className="font-bold">عضویت در خبرنامه </p>
          <small>
            با عضویت در خبرنامه از جدیدترین اخبار پروژه های میکا پارک خبر دار
            شوید
          </small>
          <div className="bg-white p-[2px] rounded-lg w-24"></div>
          <div className="flex justify-stretch items-center w-full bg-white rounded-md overflow-hidden">
            <div className="w-3/4">
              <input
                placeholder="شماره تلفن خود را وارد نمایید"
                className="w-full p-2 text-xs text-zinc-950"
              />
            </div>
            <div className="w-1/4 bg-cu_primary-100 p-2 h-full flex justify-center items-center">
              <small className="text-xs">ارسال</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
