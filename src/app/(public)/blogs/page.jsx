"use client";
import BlogCart from "../../components/common/BlogCart";
import LatestNews from "../../components/common/LatestNews";
import useSWR from "swr";
import { fetcher } from "@/utils/get_data";
import SkDives from "@/app/components/loading/SkDives";

function page() {
  const { data, isLoading, error } = useSWR(["blog/blogs"], fetcher);

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;
  
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-span-7 lg:col-span-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <BlogCart />
            ))}
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:flex lg:relative">
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default page;
