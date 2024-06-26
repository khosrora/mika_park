import { IconArrowDown } from "@tabler/icons-react";
import React from "react";

function HeaderSection() {
  return (
    <div className="p-4 space-y-4 flex flex-col lg:flex-row-reverse lg:gap-x-8">
      <img
        src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
        width={500}
        height={500}
        alt="work with us"
        className="rounded-md"
      />
      <div className="flex flex-col justify-between items-start">
        <h1 className="font-bold text-2xl">همکاری با میکاپارک</h1>
        <small className="text-[#034F82] font-bold mt-4">
          از هرجای کشور، آغوش میکاپارک به روی فرصت‌های همکاری باز است!
        </small>
        <p>
          <small className="font-bold text-lg">این یک فرصت استخدام نیست </small>
          میکاپارک مشتاق آشنایی با کسانی است که می‌توانند در هر یک از زمینه‌های
          فعالیت مجموعه، با ما همکاری کنند!
        </p>
        <p>
          اگر با فعالیت‌های ما آشنایید و به فرصت همکاری با میکاپارک علاقه‌مندید،
          اطلاعات خود را در فرم پایین صفحه وارد کنید. پس از بررسی درخواست،
          کارشناسان ما در میکاپارک با شما تماس می‌گیرند تا بیشتر درباره شرایط
          همکاری گفت‌وگو کنیم.
        </p>
        <div className="flex justify-start items-center text-cu_primary-100">
          <p>همکاری با ما</p>
          <IconArrowDown />
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
