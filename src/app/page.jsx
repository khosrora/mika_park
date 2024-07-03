"use server";

import BigProjectSection from "./BigProjectSection";
import Blogs from "./Blogs";
import Comments from "./Comments";
import Header from "./Header";
import NewsSection from "./NewsSection";
import OtherProjects from "./OtherProjects";
import PossibilitiesSection from "./PossibilitiesSection";
import ServicesMikaPark from "./ServicesMikaPark";
import { getData } from "./../utils/get_data";

export default async function Home() {
  const data = await getData("siteinfo/header/");

  return (
    <div className="lg:space-y-14">
      <Header details={data} />
      <ServicesMikaPark />
      <BigProjectSection details={data} />
      <PossibilitiesSection />
      <OtherProjects />
      <NewsSection />
      <Comments />
      <Blogs />
    </div>
  );
}
