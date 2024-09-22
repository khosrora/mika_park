"use server";

import { Suspense } from "react";
import { getData } from "./../utils/get_data";
import BigProjectSection from "./BigProjectSection";
import Blogs from "./Blogs";
import Comments from "./Comments";
import Header from "./Header";
import MegaVideoSection from "./MegaVideoSection";
import NewsSection from "./NewsSection";
import OtherProjects from "./OtherProjects";
import PossibilitiesSection from "./PossibilitiesSection";

export default async function Home() {
  const data = await getData("siteinfo/header/");

  return (
    <div className="lg:space-y-14">
      <Suspense>
        <MegaVideoSection details={data} />
      </Suspense>
      <Header details={data} />
      <BigProjectSection details={data} />
      <PossibilitiesSection />
      <OtherProjects />
      <NewsSection />
      <Comments />
      <Blogs />
    </div>
  );
}
