import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function NewsCart() {
  return (
    <div className="card bg-white mx-2">
      <figure className="p-4">
        <img
          src="https://www.remlimited.com/media/qrxi1w05/dsc_2501.jpg?center=0%2C0&heightratio=0.5306&mode=crop&upscale=true&width=1920"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-right">
        <h2 className="card-title">بهترین عایق های صداگیر</h2>
        <p className="text-xs leading-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <div className="card-actions flex justify-between items-center">
          <Link
            href="/news/1"
            className="text-cu_primary-100 flex justify-start items-center gap-x-4"
          >
            ادامه مطلب
            <IconArrowNarrowLeft size={24} stroke={1} />
          </Link>
          <small className="text-xs">1403/02/01</small>
        </div>
      </div>
    </div>
  );
}

export default NewsCart;
