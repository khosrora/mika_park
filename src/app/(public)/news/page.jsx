"use client";
import NewsCart from "@/app/components/common/newsCart";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher } from "@/utils/get_data";
import React from "react";
import useSWR from "swr";

function page() {
  const { data, isLoading, error } = useSWR(["new/news"], fetcher);

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <NewsCart />
        ))}
      </div>
    </div>
  );
}

export default page;
