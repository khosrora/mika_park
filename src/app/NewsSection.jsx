"use client";
import { postDataAPI } from "@/utils/get_data";
import { useState } from "react";
import { toast } from "sonner";

function NewsSection() {
  const [phone, setPhone] = useState(null);

  const handleSendPhone = async () => {
    try {
      if (phone === null) return toast.error("شماره تماس خود را وارد کنید");
      const { status } = await postDataAPI(["new/send_request"], {
        phone,
      });
      if (status === 201) {
        toast.success("شماره تماس شما ارسال شد");
      }
    } catch (error) {
      toast.error(error.response.data.phone[0]);
    }
  };

  return (
    <div className="p-4 lg:p-0">
      <div className="bg-white rounded-lg p-4">
        <div className="bg-blue-950 p-4 text-white text-center rounded-md flex flex-col justify-center items-center space-y-4">
          <p className="font-bold lg:text-[36px]">عضویت در خبرنامه </p>
          <small className="lg:text-[16px]">
            با عضویت در خبرنامه از جدیدترین اخبار پروژه های میکا پارک خبر دار
            شوید
          </small>
          <div className="bg-white p-[2px] rounded-lg w-24"></div>
          <div className="flex justify-stretch items-center w-full bg-white rounded-md overflow-hidden max-w-xs">
            <div className="w-3/4">
              <input
                placeholder="شماره تلفن خود را وارد نمایید"
                className="w-full p-2 text-xs text-zinc-950"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div
              onClick={() => handleSendPhone()}
              className="w-1/4 bg-cu_primary-100 p-2 h-full flex justify-center items-center cursor-pointer"
            >
              <small className="text-xs">ارسال</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
