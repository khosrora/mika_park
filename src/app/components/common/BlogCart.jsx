import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function BlogCart() {
  return (
    <div className="card bg-white mx-2">
      <figure className="p-4">
        <img
          src="https://content.jdmagicbox.com/comp/karimnagar/n8/9999px878.x878.130808170055.v1n8/catalogue/mikhul-projects-boiwada-karimnagar-commercial-builders-qkmk9lu3ij.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-right">
        <h2 className="card-title">طراحی معماری ساختمان</h2>
        <p className="text-xs">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <div className="card-actions">
          <Link
            href="/"
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
