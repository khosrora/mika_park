"use client";
import BlogCart from "../../components/common/BlogCart";
import LatestNews from "../../components/common/LatestNews";
import useSWR from "swr";
import { fetcher } from "@/utils/get_data";
import SkDives from "@/app/components/loading/SkDives";
import { useState } from "react";
import Pagination from "@/app/components/common/Pagination";

function page() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSWR(
    [`blog/blogs?page=${page}`],
    fetcher
  );

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;

  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-span-7 lg:col-span-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.results.map((item) => (
              <BlogCart key={item.id} blog={item} />
            ))}
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:flex lg:relative">
          <LatestNews />
        </div>
      </div>
      <Pagination
        next={data.links.next}
        prev={data.links.previous}
        state={page}
        setState={setPage}
      />
    </div>
  );
}

export default page;
