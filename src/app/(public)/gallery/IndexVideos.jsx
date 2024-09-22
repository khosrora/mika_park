import Alert from "@/app/components/common/Alert";
import SkDives from "@/app/components/loading/SkDives";
import { fetcher } from "@/utils/get_data";
import React from "react";
import useSWR from "swr";

function IndexVideos() {
  const { data, isLoading, error } = useSWR(["gallery/medias/"], fetcher);

  if (!!isLoading) return <SkDives />;
  if (error) return <p> {error.message} </p>;
  console.log(data);

  return (
    <div className="mb-32">
      {data.length === 0 ? (
        <Alert
          className="alert"
          message="در حال حاضر فیلمی برای نمایش وجود ندارد."
        />
      ) : (
        <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {data.map((video) => (
            <div key={video.id} className="h-32">
              <video width="400" height="500"  controls poster={video.thumbnail}>
                <source src={video.url} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IndexVideos;
