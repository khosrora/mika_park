import BigProjectSection from "./BigProjectSection";
import Blogs from "./Blogs";
import Comments from "./Comments";
import Header from "./Header";
import NewsSection from "./NewsSection";
import OtherProjects from "./OtherProjects";
import PossibilitiesSection from "./PossibilitiesSection";
import ServicesMikaPark from "./ServicesMikaPark";

export default async function Home() {
  return (
    <div className="lg:space-y-14">
      <Header />
      <ServicesMikaPark />
      <BigProjectSection />
      <PossibilitiesSection />
      <OtherProjects />
      <NewsSection />
      <Comments />
      <Blogs />
    </div>
  );
}
