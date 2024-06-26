"use client";
import { fetcher } from "@/utils/get_data";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import SkDiv from "../loading/SkDiv";

function LatestNews() {
  const {
    data: links,
    isLoading,
    error,
  } = useSWR(["blog/latest-blogs-list"], fetcher);

  if (!!isLoading) return <SkDiv />;
  if (error) return <p> {error.message} </p>;

  return (
    <div className="bg-white p-4 absolute left-0 right-0 top-0 rounded-md">
      <p className="font-extrabold text-lg">اخرین مقالات</p>
      <ul className="space-y-4 mt-4">
        {links.map((item, index) => (
          <li key={index} className="border-b">
            <Link className="text-xs" href={`/blogs/${item.slug}`}>
              {item.title.length > 30
                ? `${item.title.substring(0, 30)}...`
                : item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestNews;
