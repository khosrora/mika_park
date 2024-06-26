import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import Moment from "./Moment";

function NewsCart({ news }) {
  return (
    <div className="card bg-white mx-2">
      <figure className="p-4">
        <img src={news.image.image} alt={news.title} className="rounded-xl" />
      </figure>
      <div className="card-body text-right">
        <h2 className="card-title">{news.title}</h2>
        <p className="text-xs leading-6">
          {news.short_desc.length > 60
            ? `${news.short_desc.substring(0, 60)}...`
            : news.short_desc}
        </p>
        <div className="card-actions flex justify-between items-center">
          <Link
            href={`/news/${news.slug}`}
            className="text-cu_primary-100 flex justify-start items-center gap-x-4"
          >
            ادامه مطلب
            <IconArrowNarrowLeft size={24} stroke={1} />
          </Link>
          <Moment time={news.publish_date} />
        </div>
      </div>
    </div>
  );
}

export default NewsCart;
