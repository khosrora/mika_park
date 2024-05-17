import React from "react";
import Form from "./Form";

function page() {
  return (
    <div className="max-w-xl m-auto my-4 space-y-4 p-4">
      <div className="flex flex-col justify-center items-center space-y-4">
        <h1 className="font-bold text-2xl"> انتقادات و پیشنهادات </h1>
        <small className="font-light text-center">
          نظرات شما برای ما مهم است و به ما کمک می کند کیفیت خدماتمان را بهبود
          دهیم. چنانچه در هر زمینه نظری دارید برای ما بنویسید. اگر در هر مورد
          شکایتی دارید ما را در جریان بگذارید. ما متعهدیم ظرف ۴۸ ساعت به شکایت
          شما رسیدگی کنیم.
        </small>
      </div>
      <Form />
    </div>
  );
}

export default page;
