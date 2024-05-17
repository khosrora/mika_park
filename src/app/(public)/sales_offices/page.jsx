import React from "react";
import Slider from "./Slider";

async function page() {
  return (
    <div className="">
      <div className="text-center max-w-lg m-auto">
        <h1 className="font-extrabold text-2xl">نمایندگی ها</h1>
        <small>
          برای تماس از راه های ارتباطی زیر می توانید استفاده نمایید .
        </small>
        <small>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،چاپگرها و متون بلکه روزنامه و مجله ستون و
          سطرآنچنان که لازم است، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
          می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        </small>
      </div>
      <Slider />
    </div>
  );
}

export default page;
