import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function BlogCart() {
  return (
    <div className="card bg-white mx-2">
      <figure className="p-4">
        <img
          src="https://emap-romulus-prod.s3.eu-west-1.amazonaws.com/wp-content/uploads/sites/8/2024/05/Princess-Alexandra-Hospital-748x499.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-right">
        <h2 className="card-title">طراحی معماری ساختمان</h2>
        <p className="text-xs leading-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <div className="card-actions">
          <Link
            href="/blogs/1"
            className="text-cu_primary-100 flex justify-start items-center gap-x-4"
          >
            ادامه مطلب
            <IconArrowNarrowLeft size={24} stroke={1} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
