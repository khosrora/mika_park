import BigProjectSection from "./BigProjectSection";
import Comments from "./Comments";
import Header from "./Header";
import NewsSection from "./NewsSection";
import OtherProjects from "./OtherProjects";
import PossibilitiesSection from "./PossibilitiesSection";
import ServicesMikaPark from "./ServicesMikaPark";

export default function Home() {
  return (
    <div className="">
      <Header />
      <ServicesMikaPark />
      <BigProjectSection />
      <PossibilitiesSection />
      <OtherProjects />
      <NewsSection />
      <Comments />
      <div className="" style={{ height: "100px" }}></div>
    </div>
  );
}
