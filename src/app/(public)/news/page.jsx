"use client";
import NewsCart from "@/app/components/common/newsCart";
import Pagination from "@/app/components/common/Pagination";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher } from "@/utils/get_data";
import React, { useState } from "react";
import useSWR from "swr";

function page() {
  const [page, setPage] = useState(1);
  const {
    data: news,
    isLoading,
    error,
  } = useSWR([`new/news?page=${page}`], fetcher);

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {news.results.map((item) => (
          <NewsCart key={item.id} news={item} />
        ))}
      </div>
      <Pagination
        next={news.links.next}
        prev={news.links.previous}
        state={page}
        setState={setPage}
      />
    </div>
  );
}

export default page;
