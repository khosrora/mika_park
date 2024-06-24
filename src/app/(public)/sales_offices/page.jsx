import { getData } from "@/utils/get_data";
import React from "react";
import Slider from "./Slider";

async function page() {
  const data = await getData("agent/agent/");

  return (
    <div className="">
      <div className="text-center max-w-lg m-auto">
        <h1 className="font-extrabold text-2xl">نمایندگی ها</h1>
        <small>
          برای تماس از راه های ارتباطی زیر می توانید استفاده نمایید .
        </small>
        <small>{data.description}</small>
      </div>
      <Slider branches={data.branches} />
    </div>
  );
}

export default page;
