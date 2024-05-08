import React from "react";
import ImageCu from "./components/common/Logo";

function Header() {
  return (
    <div className="p-4">
      <ImageCu
        width={500}
        height={500}
        alt="میکا پارک"
        src="/images/header.png"
      />
      <div className="space-y-6">
        <h1 className="font-extrabold text-[24px]">
          <small className="text-cu_primary-100 font-extrabold text-[24px]">
            {" "}
            میکا پارک{" "}
          </small>{" "}
          خانه ای به سبک{" "}
          <small className="text-cu_primary-100 font-extrabold text-[24px]">
            هتل
          </small>{" "}
        </h1>
        <div className="space-y-2">
          <p className="font-bold">برای اولین بار در جنوب شرق ایران</p>
          <p className="font-light">
            ارائه خدمات به شکل هتل در آپارتمان اشاره دارد . این نوع اقامتی با
            مالکیت دائم و خدماتی همچون امنیت , رستوران , باشگاه و دیگر خدمات
            تفریحی و ورزشی را در اختیار مالکین مجموعه قرار میدهد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
